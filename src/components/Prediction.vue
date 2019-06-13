<template>
  <div>
    <canvas
      class="mainCanvas"
      ref="faceCanvas"
      @click="downloadCanvasImage"
      v-show="!isLoading"
    ></canvas>
    <div class="detail" v-if="isLoading === false">
      <div class="labels">
        <h4>診断結果</h4>
        <p>
          あなたは「<span class="top-match">{{ topMatchMember }}</span
          >」顔です
        </p>
        <div v-for="(pred, index) in predictions" :key="index">
          <p
            class="label-name"
            :style="'background-color:' + colorTable(pred[0])"
            :class="index === 0 ? 'first' : ''"
          >
            <span class="label-name-text">{{ pred[0] }}</span
            >: <span>{{ pred[1] }}%</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as superagent from "superagent";
import EXIF from "exif-js";

export default {
  name: "Prediction",
  props: {
    loading: Boolean,
    detection: Object,
    imgurl: String
  },
  data: function() {
    return {
      predictions: [],
      topMatchMember: "",
      isLoading: this.loading
    };
  },
  watch: {
    detection: function() {
      this.renderCanvas();
    }
  },
  mounted: function() {
    this.renderCanvas();
  },
  methods: {
    colorTable: function(name) {
      const c = {
        宮崎由加: "rgb(246,194,203)",
        金澤朋子: "rgb(203,50,35)",
        高木紗友希: "rgb(255,253,84)",
        宮本佳林: "rgb(133,80,194)",
        植村あかり: "rgb(161,250,78)",
        段原瑠々: "rgb(243,168,59)",
        稲場愛香: "rgb(210,47,125)"
      };
      return c[name];
    },
    downloadCanvasImage: function() {
      const canvas = document.querySelector(".mainCanvas");
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = parseInt(new Date().getTime() / 1000) + "_0_0.png";
      link.click();
    },
    renderCanvas: function() {
      const vm = this;
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = this.imgurl;
      img.onload = async () => {
        const canvas = vm.$refs.faceCanvas;
        if (!canvas) return null;
        const context = canvas.getContext("2d");
        if (!context) return null;
        EXIF.getData(img, async () => {
          const tmpCanvas = document.createElement("canvas");
          const ctx = tmpCanvas.getContext("2d");
          let rotate = 0;
          if (EXIF.getAllTags(img).Orientation == 6) {
            rotate = 90;
          } else if (EXIF.getAllTags(img).Orientation == 3) {
            rotate = 180;
          } else if (EXIF.getAllTags(img).Orientation == 8) {
            rotate = 270;
          }

          if (rotate == 90 || rotate == 270) {
            tmpCanvas.width = img.height;
            tmpCanvas.height = img.width;
          } else {
            tmpCanvas.width = img.width;
            tmpCanvas.height = img.height;
          }

          if (rotate && rotate > 0) {
            ctx.rotate((rotate * Math.PI) / 180);
            if (rotate == 90) ctx.translate(0, -img.height);
            else if (rotate == 180) ctx.translate(-img.width, -img.height);
            else if (rotate == 270) ctx.translate(-img.width, 0);
          }
          ctx.drawImage(img, 0, 0, img.width, img.height);

          canvas.width = 128;
          canvas.height = 128;
          const squareW =
            vm.detection.box.width > vm.detection.box.height
              ? vm.detection.box.width
              : vm.detection.box.height;
          const squareH =
            vm.detection.box.width > vm.detection.box.height
              ? vm.detection.box.width
              : vm.detection.box.height;
          context.drawImage(
            tmpCanvas,
            vm.detection.box.x,
            vm.detection.box.y,
            squareW,
            squareH,
            0,
            0,
            128,
            128
          );
          vm.predict();
        });
      };
    },
    predict: function() {
      const vm = this;
      vm.isLoading = true;
      const canvas = vm.$refs.faceCanvas;
      const b64 = canvas
        .toDataURL("image/png")
        .replace(/data:image\/png;base64,/, "");
      const formData = new FormData();
      formData.append("image", b64);
      superagent
        .post("https://juicejuice-shindan.herokuapp.com/")
        .send(formData)
        .then(res => {
          const results = [];
          const data = res.body.data;
          for (let i = 0; i < data.length; i++) {
            if (i === data.length - 1) vm.topMatchMember = data[i][1];
            results.push([data[i][1], parseFloat(data[i][0]).toFixed(2)]);
          }
          vm.predictions = results.sort((a, b) => {
            return b[1] - a[1];
          });
          vm.isLoading = false;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.labels {
  h4 {
    margin: 10px 0 0 0;
    color: #333;
  }
  .top-match {
    font-weight: bold;
  }
}
.label-name {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  color: #333;
}
</style>
