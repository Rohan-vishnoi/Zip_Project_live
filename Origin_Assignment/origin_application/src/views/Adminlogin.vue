<template>
  <div>
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="staticEmail2" class="sr-only">Email</label>
        <b-form-input
          type="text"
          class="form-control-plaintext"
          value="Add label"
          v-model="bindedlabel"
        />
      </div>

      <button @click="Addlabel()" type="submit" class="btn btn-primary mb-2">
        Add Label
      </button>
    </form>
    <b-list-group class="listitems" v-for="data in labels" :key="data">
      <b-list-group-item
        ><h5>{{ data }}</h5></b-list-group-item
      >
    </b-list-group>
  </div>
</template>
<script>
export default {
  name: "Adminlogin",
  data() {
    return {
      labels: [],
      bindedlabel: "",
    };
  },
  methods: {
    Addlabel() {
      this.labels.push(this.bindedlabel);
      this.$store.dispatch("setlabelset", this.labels);
      this.bindedlabel = "";
    },
  },
  mounted() {
    this.labels = this.$store.getters.getlabelset;
  },
};
</script>
<style scoped>
table.aligncenter {
  display: inline-table;
}
.list-group.listitems {
  width: 14%;
  margin-top: 19px;
  align-items: center;
  display: inline-block;
  justify-content: center;
}
</style>
