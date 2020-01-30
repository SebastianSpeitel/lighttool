import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

enum Step {}

enum Demand {}

interface Session {
  step: Step;
  name: string;
  roomTypeCategory: string;
  roomType: string;
  author: string;
  client: string;
  contact: string;
  demands: {
    [d: string]: number;
  };
}

interface Root {
  session: Session;
}

function getLocalSession() {
  const str = localStorage.getItem("session");
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch (e) {}
  return null;
}

function getURLsession() {
  const str = new URLSearchParams(location.search).get("session");
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch (e) {}
  return null;
}

export default new Vuex.Store<Root>({
  state() {
    const session = getURLsession() ||
      getLocalSession() || { step: 0, name: null };

    return { session };
  },
  mutations: {
    session(state, session) {
      state.session = { ...state.session, ...session };
      localStorage.setItem("session", JSON.stringify(state.session));
    },
    demands(state, demands) {
      state.session = {
        ...state.session,
        demands: { ...state.session.demands, ...demands }
      };
      localStorage.setItem("session", JSON.stringify(state.session));
    },
    continue(state) {
      state.session = { ...state.session, step: state.session.step + 1 };
      localStorage.setItem("session", JSON.stringify(state.session));
    }
  },
  getters: {
    shareURL({ session }) {
      const searchParams = new URLSearchParams();
      searchParams.set("session", JSON.stringify(session));
      return location.href.split("?")[0] + "?" + searchParams.toString();
    },
    shareData({ session }, { shareURL }) {
      return {
        title: session.name,
        text: "Lighttool Sitzung",
        url: shareURL
      };
    }
  }
});
