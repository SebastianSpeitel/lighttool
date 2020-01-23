<template>
  <div>
    <v-text-field label="Projektname" v-model="projectName"></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { VTextField } from "vuetify/lib";

@Component({ components: { VTextField } })
export default class Settings extends Vue {
  name = "Settings";

  set projectName(name: string) {
    this.$store.commit("session", { name });
  }

  get projectName() {
    return this.$store.state.session.name;
  }
}
</script>
