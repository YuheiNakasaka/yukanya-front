<template>
  <div>
    <div id="container">
      <div class="top">
        <h1>Juice=Juice顔診断</h1>
        <p>
          Juice=Juiceの中で誰に似ているかを診断できます。※クソ雑魚サーバーなのですぐ死にます
        </p>
      </div>
      <div class="main">
        <div class="canvases">
          <div class="meta" v-if="loading === false">
            <label for="input-file" class="input-file-label">
              <i class="material-icons">cloud_upload</i
              ><span>ファイルをアップロードしてください</span>
              <p>
                (注)画像は診断のためだけに使われます。どこにも保存せず破棄します。
              </p>
              <input type="file" @change="onFileChange" id="input-file" />
            </label>
          </div>
          <div
            class="canvas-container"
            v-for="(detection, index) in detections"
            :key="index"
          >
            <Prediction
              :loading="loading"
              :detection="detection"
              :imgurl="imgUrl"
            ></Prediction>
          </div>
        </div>
        <div class="loading" v-if="loading === true">
          <p>読み込み中...</p>
        </div>
      </div>
    </div>
    <div id="footer">
      <a href="https://twitter.com/razokulover" target="_blank"
        >作者: razokulover</a
      >
    </div>
  </div>
</template>

<script>
import EXIF from "exif-js";
import * as faceapi from "face-api.js";
import Prediction from "@/components/Prediction.vue";

export default {
  name: "home",
  components: {
    Prediction
  },
  data: () => {
    return {
      imgUrl: "",
      detections: [],
      loading: false
    };
  },
  mounted: function() {
    const vm = this;
    const elm = document.querySelector("body");
    elm.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });
    elm.addEventListener("drop", e => {
      e.preventDefault();
      vm.fileReader(e.dataTransfer.files);
    });
  },
  methods: {
    onFileChange: function(e) {
      if (e.target) this.fileReader(e.target.files);
    },
    fileReader: function(files) {
      const vm = this;
      if (!files) return;
      if (!files[0].type.match(/image.*/)) {
        alert("画像ファイルをアップロードしてください");
        return;
      }
      const reader = new FileReader();
      reader.onload = async () => {
        if (!reader.result || reader.result instanceof ArrayBuffer) return;
        vm.imgUrl = reader.result;
        vm.faceRendering(reader.result);
      };
      reader.readAsDataURL(files[0]);
    },
    faceRendering: function(imageFile) {
      const vm = this;
      vm.loading = true;
      vm.imgUrl = imageFile;
      vm.setupCanvas(imageFile);
    },
    setupCanvas: function(imgUrl) {
      const vm = this;
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imgUrl;
      img.onload = () => {
        EXIF.getData(img, async () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          let rotate = 0;
          if (EXIF.getAllTags(img).Orientation == 6) {
            rotate = 90;
          } else if (EXIF.getAllTags(img).Orientation == 3) {
            rotate = 180;
          } else if (EXIF.getAllTags(img).Orientation == 8) {
            rotate = 270;
          }
          // Canvasのサイズを指定
          if (rotate == 90 || rotate == 270) {
            canvas.width = img.height;
            canvas.height = img.width;
          } else {
            canvas.width = img.width;
            canvas.height = img.height;
          }
          // 画像の回転
          if (rotate && rotate > 0) {
            ctx.rotate((rotate * Math.PI) / 180);
            if (rotate == 90) ctx.translate(0, -img.height);
            else if (rotate == 180) ctx.translate(-img.width, -img.height);
            else if (rotate == 270) ctx.translate(-img.width, 0);
          }
          ctx.drawImage(img, 0, 0, img.width, img.height);
          const detections = await vm.faceDetect(canvas);
          vm.detections = detections;
          if (detections.length === 0) alert("顔が検出できませんでした");
          vm.loading = false;
        });
      };
    },
    faceDetect: async function(canvas) {
      await faceapi.nets.ssdMobilenetv1.loadFromUri("./");
      const options = new faceapi.SsdMobilenetv1Options({ minConfidence: 0.5 });
      const detections = await faceapi.detectAllFaces(canvas, options);
      return detections;
    }
  }
};
</script>
