(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/yukanya-front/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"21bb":function(e,t,n){"use strict";var a=n("bcc9"),r=n.n(a);r.a},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("5c0b"),n("2877")),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"container"}},[e._m(0),n("div",{staticClass:"main"},[n("div",{staticClass:"canvases"},[e._l(e.detections,function(t,a){return n("div",{key:a,staticClass:"canvas-container"},[n("Prediction",{attrs:{loading:e.loading,detection:t,imgurl:e.imgUrl}})],1)}),n("br"),!1===e.loading?n("div",{staticClass:"meta"},[n("label",{staticClass:"input-file-label",attrs:{for:"input-file"}},[n("i",{staticClass:"material-icons"},[e._v("cloud_upload")]),n("span",[e._v("ファイルをアップロードしてください")]),n("p",[e._v("\n              (注)画像は診断のためだけに使われます。どこにも保存せず破棄します。\n            ")]),n("input",{attrs:{type:"file",id:"input-file"},on:{change:e.onFileChange}})])]):e._e()],2),!0===e.loading?n("div",{staticClass:"loading"},[n("p",[e._v("診断中です。15秒ほどお待ちください...")])]):e._e()])]),e._m(1),e._m(2)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[n("h1",[e._v("Juice=Juice顔診断")]),n("p",[e._v("\n        Juice=Juiceの中で誰に似ているかを診断できます。\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sns-share"}},[n("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw&hashtags=juicejuice","data-show-count":"false"}},[e._v("Tweet")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("a",{attrs:{href:"https://twitter.com/razokulover",target:"_blank"}},[e._v("作者: razokulover")])])}],h=(n("96cf"),n("3b8d")),g=(n("4917"),n("6f45")),p=n.n(g),v=n("ab39"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],ref:"faceCanvas",staticClass:"mainCanvas",on:{click:e.downloadCanvasImage}}),!1===e.isLoading?n("div",{staticClass:"detail"},[n("div",{staticClass:"labels"},[n("h4",[e._v("診断結果")]),n("p",[e._v("\n        あなたは「"),n("span",{staticClass:"top-match"},[e._v(e._s(e.topMatchMember))]),e._v("」顔です\n      ")]),e._l(e.predictions,function(t,a){return n("div",{key:a},[n("p",{staticClass:"label-name",class:0===a?"first":"",style:"background-color:"+e.colorTable(t[0])},[n("span",{staticClass:"label-name-text"},[e._v(e._s(t[0]))]),e._v(": "),n("span",[e._v(e._s(t[1])+"%")])])])})],2)]):e._e()])},b=[],w=(n("55dd"),n("a481"),n("db82")),_={name:"Prediction",props:{loading:Boolean,detection:Object,imgurl:String},data:function(){return{predictions:[],topMatchMember:"",isLoading:this.loading}},watch:{detection:function(){this.renderCanvas()}},mounted:function(){this.renderCanvas()},methods:{colorTable:function(e){var t={"宮崎由加":"rgb(246,194,203)","金澤朋子":"rgb(203,50,35)","高木紗友希":"rgb(255,253,84)","宮本佳林":"rgb(133,80,194)","植村あかり":"rgb(161,250,78)","段原瑠々":"rgb(243,168,59)","稲場愛香":"rgb(210,47,125)"};return t[e]},downloadCanvasImage:function(){var e=document.querySelector(".mainCanvas"),t=document.createElement("a");t.href=e.toDataURL("image/png"),t.download=parseInt((new Date).getTime()/1e3)+"_0_0.png",t.click()},renderCanvas:function(){var e=this,t=new Image;t.crossOrigin="Anonymous",t.src=this.imgurl,t.onload=Object(h["a"])(regeneratorRuntime.mark(function n(){var a,r;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.$refs.faceCanvas,a){n.next=3;break}return n.abrupt("return",null);case 3:if(r=a.getContext("2d"),r){n.next=6;break}return n.abrupt("return",null);case 6:p.a.getData(t,Object(h["a"])(regeneratorRuntime.mark(function n(){var i,o,s,c,u;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:i=document.createElement("canvas"),o=i.getContext("2d"),s=0,6==p.a.getAllTags(t).Orientation?s=90:3==p.a.getAllTags(t).Orientation?s=180:8==p.a.getAllTags(t).Orientation&&(s=270),90==s||270==s?(i.width=t.height,i.height=t.width):(i.width=t.width,i.height=t.height),s&&s>0&&(o.rotate(s*Math.PI/180),90==s?o.translate(0,-t.height):180==s?o.translate(-t.width,-t.height):270==s&&o.translate(-t.width,0)),o.drawImage(t,0,0,t.width,t.height),a.width=128,a.height=128,c=e.detection.box.width>e.detection.box.height?e.detection.box.width:e.detection.box.height,u=e.detection.box.width>e.detection.box.height?e.detection.box.width:e.detection.box.height,r.drawImage(i,e.detection.box.x,e.detection.box.y,c,u,0,0,128,128),e.predict();case 13:case"end":return n.stop()}},n)})));case 7:case"end":return n.stop()}},n)}))},predict:function(){var e=this;e.isLoading=!0;var t=e.$refs.faceCanvas,n=t.toDataURL("image/png").replace(/data:image\/png;base64,/,""),a=new FormData;a.append("image",n),w["post"]("https://juicejuice-shindan.herokuapp.com/").send(a).then(function(t){for(var n=[],a=t.body.data,r=0;r<a.length;r++)r===a.length-1&&(e.topMatchMember=a[r][1]),n.push([a[r][1],parseFloat(a[r][0]).toFixed(2)]);e.predictions=n.sort(function(e,t){return t[1]-e[1]}),e.isLoading=!1})}}},x=_,y=(n("dcdc"),Object(o["a"])(x,m,b,!1,null,"04cd7b92",null)),C=y.exports,O={name:"home",components:{Prediction:C},data:function(){return{imgUrl:"",detections:[],loading:!1}},mounted:function(){var e=this,t=document.querySelector("body");t.addEventListener("dragover",function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"}),t.addEventListener("drop",function(t){t.preventDefault(),e.fileReader(t.dataTransfer.files)})},methods:{onFileChange:function(e){e.target&&this.fileReader(e.target.files)},fileReader:function(e){var t=this;if(e)if(e[0].type.match(/image.*/)){var n=new FileReader;n.onload=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n.result&&!(n.result instanceof ArrayBuffer)){e.next=2;break}return e.abrupt("return");case 2:t.imgUrl=n.result,t.faceRendering(n.result);case 4:case"end":return e.stop()}},e)})),n.readAsDataURL(e[0])}else alert("画像ファイルをアップロードしてください")},faceRendering:function(e){var t=this;t.loading=!0,t.imgUrl=e,t.setupCanvas(e)},setupCanvas:function(e){var t=this,n=new Image;n.crossOrigin="Anonymous",n.src=e,n.onload=function(){p.a.getData(n,Object(h["a"])(regeneratorRuntime.mark(function e(){var a,r,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=document.createElement("canvas"),r=a.getContext("2d"),i=0,6==p.a.getAllTags(n).Orientation?i=90:3==p.a.getAllTags(n).Orientation?i=180:8==p.a.getAllTags(n).Orientation&&(i=270),90==i||270==i?(a.width=n.height,a.height=n.width):(a.width=n.width,a.height=n.height),i&&i>0&&(r.rotate(i*Math.PI/180),90==i?r.translate(0,-n.height):180==i?r.translate(-n.width,-n.height):270==i&&r.translate(-n.width,0)),r.drawImage(n,0,0,n.width,n.height),e.next=9,t.faceDetect(a);case 9:o=e.sent,t.detections=o,0===o.length&&alert("顔が検出できませんでした"),t.loading=!1;case 13:case"end":return e.stop()}},e)})))}},faceDetect:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["c"].ssdMobilenetv1.loadFromUri("./");case 2:return n=new v["a"]({minConfidence:.5}),e.next=5,v["b"](t,n);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}},k=O,j=(n("21bb"),Object(o["a"])(k,d,f,!1,null,null,null)),R=j.exports;a["a"].use(l["a"]);var T=new l["a"]({mode:"history",base:"/yukanya-front/",routes:[{path:"/",name:"home",component:R}]});a["a"].config.productionTip=!1,new a["a"]({router:T,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},b79f:function(e,t,n){},bcc9:function(e,t,n){},dcdc:function(e,t,n){"use strict";var a=n("b79f"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a67f4f0d.js.map