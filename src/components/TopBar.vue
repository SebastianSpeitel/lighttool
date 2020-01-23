<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Lighttool</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { VAppBar, VToolbarTitle } from "vuetify/lib";

@Component({ components: { VAppBar, VToolbarTitle } })
export default class TopBar extends Vue {
  name = "TopBar";
}
</script>
