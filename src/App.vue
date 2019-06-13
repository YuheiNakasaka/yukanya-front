<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #fff8e1;
}
#container {
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 95vh;
}
.top {
  box-sizing: border-box;
  width: 100%;
  padding: 2px 20px;
  color: #fff8e1;
  background-color: #2979ff;
}
.main {
  margin-top: 5px;
}
.mainCanvas {
  max-width: 128px;
  max-height: 128px;
  cursor: pointer;
}
#previewCanvas {
  max-width: 250px;
  max-height: 250px;
}
.canvases {
  text-align: center;
}
.canvas-container {
  margin: 20px 0;
}
.input-file-label {
  font-size: 1.25em;
  font-weight: 700;
  color: #fff8e1;
  background-color: #2979ff;
  display: inline-block;
  padding: 16px 30px;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  cursor: pointer;
}
.input-file-label:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.input-file-label span {
  margin-left: 10px;
  vertical-align: text-bottom;
}
.input-file-label input {
  display: none;
}
.input-file-label p {
  margin: 0;
  font-size: 11px;
  color: #f1f1f1;
}
p.label-name.first {
  font-weight: bold;
}
.detail {
  text-align: center;
}
.loading {
  text-align: center;
}
#sns-share {
  text-align: center;
  margin-top: 0;
}
#footer {
  text-align: center;
  margin-top: 0;
}
@media only screen and (max-width: 767px) {
  h1 {
    font-size: 1.8em;
  }
  .input-file-label {
    margin: 0 20px;
  }
}
</style>
