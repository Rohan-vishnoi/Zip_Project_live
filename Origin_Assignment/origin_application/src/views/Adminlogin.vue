<template>
  <div>
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="staticEmail2" class="sr-only">Email</label>
        <input
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
    <table class="aligncenter">
      <tr v-for="data in labels" :key="data">
        <td>
          <h5>{{ data }}</h5>
        </td>
      </tr>
    </table>
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
    },
  },
};
</script>
<style scoped>
table.aligncenter {
  display: inline-table;
}
</style>
