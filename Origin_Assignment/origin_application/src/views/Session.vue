<template>
  <div class="Session">
    <h2 style="float: left; margin-left: 55px">
      <b>FILTERS</b>
      <b-list-group-item @click="Defaultcontent()" style="width: fit-content"
        >All</b-list-group-item
      >
      <b-list-group
        class="labelfilter"
        v-for="label in labelarray"
        :key="label"
      >
        <b-list-group-item
          @click="selectobjects(label)"
          style="width: fit-content"
          >{{ label }}</b-list-group-item
        >
      </b-list-group>
    </h2>
    <div class="containerimages" v-show="searchbar == false">
      <a class="images" v-for="images in Imagesarray" :key="images.label">
        <img
          :src="images.image"
          style="width: 200px; height: 200px; margin: 10px"
        />

        <b-form inline>
          <h3 class="headingthumbnails">{{ images.label }}</h3>
          <b-button
            v-if="images.label !== ''"
            @click="DELETELABEL(images)"
            variant="info"
            >DEL</b-button
          >
          <b-form-input
            v-if="images.label == ''"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="ENTER  LABEL"
            v-model="textlabel"
          ></b-form-input>
          <b-button
            v-if="images.label == ''"
            @click="AddLabel(images)"
            variant="info"
            >Add</b-button
          >
        </b-form>
      </a>
    </div>
    <div class="containerimages" v-show="searchbar == true">
      <a class="images" v-for="images in searchedarray" :key="images.label">
        <img
          :src="images.image"
          style="width: 200px; height: 200px; margin: 10px"
        />

        <b-form inline>
          <h3 class="headingthumbnails">{{ images.label }}</h3>
          <b-form-input
            v-if="images.label == ''"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="ENTER  LABEL"
            v-model="textlabel"
          ></b-form-input>
          <b-button
            v-if="images.label == ''"
            @click="AddLabel(images)"
            variant="info"
            >Add</b-button
          >
        </b-form>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      textlabel: "",
      labelarray: [],
      Imagesarray: [],
      hash: new Map(),
      selectedobjects: "",
      searchbar: false,
      searchedarray: [],
    };
  },
  methods: {
    AddLabel(image) {
      this.Imagesarray.forEach((element) => {
        if (image.image === element.image && image.label == "") {
          element.label = this.textlabel;
        }
      });
      this.textlabel = "";
    },
    DELETELABEL(image) {
      this.Imagesarray.forEach((element) => {
        if (image.image === element.image && image.label !== "") {
          element.label = "";
        }
      });
      this.textlabel = "";
    },
    selectobjects(name) {
      this.selectedobjects = name;
      this.searchbar = true;

      this.Imagesarray.forEach((element) => {
        if (element.label.toLowerCase() == this.selectedobjects.toLowerCase()) {
          var newobj = {};
          newobj.image = element.image;
          newobj.label = element.label;
          this.searchedarray.push(newobj);
          newobj = {};
        }
      });
    },
    Defaultcontent() {
      this.searchbar = false;
      this.searchedarray = [];
    },
  },
  mounted() {
    this.labelarray = this.$store.getters.getlabelset;
    var newobj = {};
    //this.Imagesarray = this.$store.getters.getuploadfile;

    this.$store.getters.getuploadfile.forEach((element) => {
      newobj.image = element;
      newobj.label = "";
      this.Imagesarray.push(newobj);
      newobj = {};
    });
    console.log(this.Imagesarray);
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
.list-group.labelfilter {
  width: 14%;
  margin-top: 19px;
  align-items: stretch;
  display: list-item;
  justify-content: center;
  margin-left: 48px;
}
.containerimages {
  display: grid;
  align-items: center;
  justify-content: center;
}
input#inline-form-input-name {
  width: 62%;
}
h3.headingthumbnails {
  font-size: 24px;
  color: snow;
}
</style>
