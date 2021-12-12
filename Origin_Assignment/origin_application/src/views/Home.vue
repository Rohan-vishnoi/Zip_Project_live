<template>
  <div class="home">
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center">
                <div class="form-outline mb-4">
                  <h3 class="textclass" for="typeEmailX-2">Email</h3>
                  <b-form-input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    v-model="emailid"
                  />
                </div>

                <div class="form-outline mb-4">
                  <h3 class="textclass" for="typePasswordX-2">Password</h3>
                  <b-form-input
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                    v-model="passwordentered"
                  />
                </div>
                <button
                  class="btn btn-primary btn-lg btn-block submitbutton"
                  type="submit"
                  @click="logintomainscreen()"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      passwordentered: "",
      emailid: "",
    };
  },
  methods: {
    logintomainscreen() {
      if (
        this.emailid === "avirohanvishnoi@gmail.com" &&
        this.passwordentered === "rohan"
      ) {
        this.$store.dispatch("setloginstate", true);
        this.$store.dispatch("setadminlogin", false);
        this.$router.push({ name: "About" });
      } else if (
        this.emailid === "admin@gmail.com" &&
        this.passwordentered === "admin"
      ) {
        this.$store.dispatch("setloginstate", false);
        this.$store.dispatch("setadminlogin", true);
        this.$router.push({ name: "Adminlogin" });
      }
    },
  },
};
</script>
<style scoped>
h3.textclass {
  float: left;
  color: antiquewhite;
}
button.btn.btn-primary.btn-lg.btn-block.submitbutton {
  margin-top: 29px;
}
</style>
