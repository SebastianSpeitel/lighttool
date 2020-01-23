<template>
  <v-stepper
    non-linear
    v-model="step"
    :style="{ top: 12 + this.$vuetify.application.top + 'px' }"
  >
    <v-stepper-header>
      <template v-for="(title, i) of steps">
        <v-divider :key="'d' + i" v-if="i" />
        <v-stepper-step
          :key="i"
          :step="i"
          editable
          :complete="step > i"
          color="secondary"
        >
          {{ title }}
        </v-stepper-step>
      </template>
    </v-stepper-header>
  </v-stepper>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { VStepper, VStepperHeader, VStepperStep, VDivider } from "vuetify/lib";

@Component({
  components: { VStepper, VStepperHeader, VStepperStep, VDivider }
})
export default class Stepper extends Vue {
  name = "Stepper";
  steps = ["Einstellungen", "Raumauswahl", "Anforderungen", "Auswertung"];

  get step() {
    return this.$store.state.session.step;
  }

  set step(step: number) {
    this.$store.commit("session", { step });
  }
}
</script>

<style scoped>
.v-stepper {
  position: sticky;
  margin-bottom: 1em;
}
</style>
