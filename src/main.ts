import Vue from "vue";
import Vuetify from "vuetify/lib";
import App from "./components/App.vue";
import state from "./state/root";

Vue.use(Vuetify);

const PRESS_TIMEOUT = 1000;

Vue.directive("longpress", {
  bind: function(el, { value }, vNode) {
    if (typeof value !== "function") {
      console.warn(`Expect a function, got ${value}`);
      return;
    }

    let pressTimer: NodeJS.Timeout | null = null;

    const start = (e: any) => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => value(e), PRESS_TIMEOUT);
      }
    };

    const cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    ["mousedown", "touchstart"].forEach(e => el.addEventListener(e, start));
    ["click", "mouseout", "touchend", "touchcancel"].forEach(e =>
      el.addEventListener(e, cancel)
    );
  }
});

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
