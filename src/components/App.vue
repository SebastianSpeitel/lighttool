<template>
  <v-app>
    <top-bar />
    <v-content>
      <v-container tag="main">
        <stepper />
        <settings v-if="session.step === 0" />
        <rooms v-if="session.step === 1" />
      </v-container>
    </v-content>
    <fab v-if="session" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store from "../state/root";

import { VApp, VContent, VContainer, VCard, VSpacer } from "vuetify/lib";

import Stepper from "./Stepper.vue";
import TopBar from "./TopBar.vue";
const Settings = () => import("./steps/Settings.vue");
const Rooms = () => import("./steps/Rooms.vue");
const Fab = () => import("./steps/ShareFAB.vue");

export default Vue.extend({
  name: "App",
  components: {
    Stepper,
    TopBar,
    VApp,
    VContent,
    VContainer,
    VCard,
    VSpacer,
    Settings,
    Rooms,
    Fab
  },
  store,
  computed: {
    session() {
      return this.$store.state.session;
    }
  }
});
</script>
