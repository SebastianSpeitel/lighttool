import Vue from "vue";
import Vuetify from "vuetify/lib";
import App from "./components/App.vue";
import state from "./state/root";

Vue.use(Vuetify);

const vm = new Vue({
  vuetify: new Vuetify({
    icons: { iconfont: "mdiSvg" },
    theme: {
      themes: {
        light: {
          primary: "#1A1A1A",
          accent: "#f0e535",
          secondary: "#988d26"
        }
      }
    }
  }),
  state,
  el: "#app",
  render: h => h(App)
});
