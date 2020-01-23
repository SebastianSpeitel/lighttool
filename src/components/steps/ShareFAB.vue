<template>
  <v-fab-transition>
    <v-btn color="accent" fab x-large bottom right fixed @click="share">
      <v-icon>{{ icon }}</v-icon>

      <v-snackbar v-model="copied" dark>
        In Zwischenablage kopiert
        <v-btn color="secondary" text @click.stop="copied = false">
          OK
        </v-btn>
      </v-snackbar>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { VIcon, VBtn, VFabTransition, VSnackbar } from "vuetify/lib";
import { mdiShareVariant } from "@mdi/js";

@Component({ components: { VIcon, VBtn, VFabTransition, VSnackbar } })
export default class ShareFAB extends Vue {
  name = "ShareFAB";
  icon = mdiShareVariant;
  copied = false;

  async share() {
    const shareData = this.$store.getters.shareData;
    try {
      await navigator.share(shareData);
      return;
    } catch (e) {}

    try {
      await navigator.clipboard.writeText(shareData.url);
      this.copied = true;
      return;
    } catch (e) {}

    window.open(shareData.url, "_blank");
  }
}
</script>
