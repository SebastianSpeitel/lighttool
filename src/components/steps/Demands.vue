<template>
  <v-container>
    <h2>Skalierung der Anforderung</h2>
    <p>
      Für jede Anwendung gibt es typische Anforderungen. Die Bewertung erfolgt
      anhand der Wichtigkeit bzw. Relevanz zur Erfüllung der typischen
      Anforderung. Sie ist dreistufig aufgebaut und in der mittleren Spalte der
      Tabelle angegeben:
    </p>
    <ol style="list-style: none;">
      <li>0: nicht relevant</li>
      <li>1: weniger relevant</li>
      <li>2: relevant</li>
      <li>3 und höher: sehr relevant</li>
    </ol>
    <p>
      Spezifische Anwendungen können mit Aspekten verbunden sein, die zu einer
      Verstärkung oder Abschwächung dieser typischen Anforderungen führen. In
      diesen Fällen wird die Bewertung entweder um +1 erhöht oder um -1
      verringert. Mit Wert 5 ist das Maximum der Erhöhung erreicht, mit dem Wert
      0 das Minimum der Verringerung.
    </p>

    <template v-for="(group, name) of demands">
      <div :key="name">
        <h3>{{ name }}</h3>
        <v-slider
          dense
          v-for="(demand, id) of group"
          :key="id"
          :label="demand.name"
          :tick-labels="
            Array.from({ length: 4 })
              .fill('')
              .map((_, i) => (i === demand.default ? 'Empfehlung' : `${i}`))
          "
          :value="demand.default"
          min="0"
          max="3"
          step="1"
          ticks="always"
          tick-size="2"
        ></v-slider>
      </div>
    </template>

    <v-btn color="primary" dark class="float-right" @click="finish"
      >Zur Auswertung</v-btn
    >
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { VContainer, VSlider, VBtn } from "vuetify/lib";

const demands = {
  "Funktionale Anforderungen": {
    F1: {
      name: "Sehen und Identifizieren von Details",
      description: "",
      default: 2
    }
  }
};

@Component({ components: { VContainer, VSlider, VBtn } })
export default class Demands extends Vue {
  name = "Demands";
  demands = demands;

  finish() {
    this.$store.commit("continue");
  }
}
</script>
