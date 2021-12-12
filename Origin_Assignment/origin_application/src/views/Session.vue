<template>
  <div class="Session">
    <h2 style="float: left; margin-left: 55px">
      <b>FILTERS</b>
      <b-list-group
        class="labelfilter"
        v-for="label in labelarray"
        :key="label"
      >
        <b-list-group-item style="width: fit-content">{{
          label
        }}</b-list-group-item>
      </b-list-group>
    </h2>
    <div class="containerimages">
      <a class="images" v-for="images in Imagesarray" :key="images">
        <img :src="images" style="width: 200px; height: 200px; margin: 10px" />
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="ENTER  LABEL"
          ></b-form-input>
          <b-button variant="info">Add</b-button>
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
      labelarray: [],
      Imagesarray: [],
    };
  },
  methods: {},
  mounted() {
    this.labelarray = this.$store.getters.getlabelset;
    this.Imagesarray = this.$store.getters.getuploadfile;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
input#inline-form-input-name {
    width: 62%;
}
</style>
