<template>
  <div class="about">
    <div style="height: 63vh; width: 100%" class="file-container-wrapper">
      <h6>Drag and Drop file</h6>
      <div class="fileUploadBoreder">
        <b-form-file
          id="FileUpload"
          ref="fileInput"
          @change="zipmethods"
          :multiple="true"
          style=" align-items: center"
        ></b-form-file>
      </div>
      <input
        type="file"
        @change="zipmethods"
        style="display: none; align-items: center"
        accept="application/zip"
      />
      <div class="container" @click="sessionpage()">
        <a v-for="data in showData" :key="data">
          <img
            class="thumbnaildimensions"
            :src="data"
            style="width: 150px; height: 100px"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      showData: [],
      Randomdata: [],
    };
  },
  methods: {
    navigate() {
      this.$router.push({ name: "Home" });
    },
    zipmethods(e) {
      let self = this;
      let file = e.target.files[0];
      var jsZip = require("jszip");
      jsZip.loadAsync(file).then(function (zip) {
        Object.keys(zip.files).forEach(function (filename) {
          self.arrayBufferToBase64(zip.files[filename]._data.compressedContent);
          zip.files[filename].async("blob").then(function (myImage) {
            // These are your file contents
            var blob = new Blob([myImage], { type: "image/jpeg" });
            var fd = new FormData();
            fd.append("file", blob, "myFile.jpg");
            console.log(fd);
          });
        });
      });
    },
    arrayBufferToBase64(buffer) {
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      this.showData.push("data:image/png;base64" + "," + window.btoa(binary));
      console.log(window.btoa(binary));
    },
    sessionpage() {
      this.$router.push({ name: "Session" });
      this.$store.dispatch("UploadedFiles", this.showData);
    },
  },
};
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
.fileUploadBoreder {
  border: 1px solid #ccc;
}
#FileUpload {
  width: 100%;
  background-color: aliceblue;
  height: 37vh;
  position: relative;
  text-align: right;
  opacity: 0;
}
img.thumbnaildimensions {
  width: 25%;
  height: 25%;
}
div#FileUpload__BV_file_outer_ {
  height: 28vh;
  /* width: 11vh; */
}
</style>
