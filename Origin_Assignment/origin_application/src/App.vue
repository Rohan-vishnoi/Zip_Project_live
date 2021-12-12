<template>
  <div id="app">
    <div id="nav">
      <!-- Just an image -->
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <router-link
            v-if="
              !this.$store.getters.getloginstate &&
              !this.$store.getters.getadminlogin
            "
            to="/"
            >Login</router-link
          >
          <router-link
            v-if="
              this.$store.getters.getloginstate &&
              !this.$store.getters.getadminlogin
            "
            to="/about"
            >Home</router-link
          >&nbsp;&nbsp;

          <router-link
            v-if="
              this.$store.getters.getloginstate &&
              !this.$store.getters.getadminlogin
            "
            to="/Session"
            >Session</router-link
          >
          <router-link
            v-if="
              !this.$store.getters.getloginstate &&
              this.$store.getters.getadminlogin
            "
            to="/Adminlogin"
            >Admin</router-link
          >
        </a>
        <button
          v-if="
            this.$store.getters.getloginstate ||
            this.$store.getters.getadminlogin
          "
          @click="Signout()"
          class="Linkleft"
        >
          LogOut
        </button>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    Signout() {
      this.$store.dispatch("setloginstate", false);
      this.$store.dispatch("UploadedFiles", []);
      this.$store.dispatch("setadminlogin", false);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: linear-gradient(to right, rgb(151, 147, 156), rgb(119, 147, 194));
}
#nav a.router-link-exact-active {
  color: #ffffff9e !important;
}
.navbar {
  border-radius: 4px;
  background-color: cornflowerblue;
}

#nav {
  padding: 30px;
}
button.Linkleft {
  float: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
