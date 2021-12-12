import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginstate: false,
    uploadfile: [],
    adminlogin: false,
    labelset:[]
  },
  getters: {
    getloginstate(state) {
      return state.loginstate;
    },
    getuploadfile(state) {
      return state.uploadfile;
    },
    getadminlogin(state) {
      return state.adminlogin;
    },
    getlabelset(state) {
      return state.labelset;
    }
  },
  mutations: {
    SET_setloginstate(state, loginstate) {
      state.loginstate = loginstate;
    },
    Set_UploadedFiles(state, uploadfile) {
      state.uploadfile = uploadfile;
    },
    Set_setadminstate(state, adminlogin) {
      state.adminlogin = adminlogin;
    },
    SET_setlabelset(state, labelset) {
      state.labelset = labelset;
    }
  },
  actions: {
    setloginstate: ({ commit }, loginstate) => {
      commit("SET_setloginstate", loginstate);
    },
    UploadedFiles: ({ commit }, uploadfile) => {
      commit("Set_UploadedFiles", uploadfile);
    },
    setadminlogin: ({ commit }, adminlogin) => {
      commit("Set_setadminstate", adminlogin);
    },
    setlabelset: ({ commit }, labelset) => {
      commit("SET_setlabelset", labelset);
    },
  },
  modules: {},
});
