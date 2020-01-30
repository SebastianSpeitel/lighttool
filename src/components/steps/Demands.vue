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
      <li>3: sehr relevant</li>
    </ol>
    <p>
      Spezifische Anwendungen können mit Aspekten verbunden sein, die zu einer
      Verstärkung oder Abschwächung dieser typischen Anforderungen führen. In
      diesen Fällen wird die Bewertung entweder um +1 erhöht oder um -1
      verringert.
    </p>

    <template v-for="(group, name) of demands">
      <div :key="name">
        <h3>{{ name }}</h3>
        <template v-for="(demand, id) of group">
          <label :for="id" :key="'l' + id">{{ demand.name }}</label>
          <v-slider
            :id="id"
            class="mb-5"
            :key="id"
            :tick-labels="
              Array.from({ length: 4 })
                .fill('')
                .map((_, i) => (i === demand.default ? 'Empfehlung' : `${i}`))
            "
            :value="getDemand(id) || demand.default"
            @change="setDemand(id, $event)"
            min="0"
            max="3"
            step="1"
            ticks="always"
            tick-size="2"
          ></v-slider>
        </template>
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

/*
JSON.stringify(Object.fromEntries([...document.querySelectorAll('tr[id]')].map(e => {return [e.querySelector('strong').textContent,{name:e.querySelector('.infobox').innerText,default:+e.querySelector('input').value}]})))
*/

const demands = {
  "Funktionale Anforderungen": {
    F1: { name: "Sehen und Identifizieren von Details", default: 2 },
    F2: { name: "Sehen und Identifizieren von Formen", default: 2 },
    F3: { name: "Sehen und Identifizieren von Farben", default: 2 },
    F4: { name: "Schnelligkeit von Sehen und Identifizieren", default: 2 },
    F5: {
      name:
        "Sehen und Identifizieren über die Zeit / Visuelle Leistungsfähigkeit",
      default: 3
    },
    F6: { name: "Aufmerksamkeitsführung", default: 2 },
    F7: { name: "Ordnung / Unterscheidbarkeit", default: 2 },
    F8: { name: "Physische Sicherheit", default: 2 },
    F9: { name: "Objektschutz", default: 0 }
  },
  "Biologische Anforderungen": {
    B1: { name: "Aktivierung", default: 3 },
    B2: { name: "Erholung", default: 3 },
    B3: { name: "Circadiane Rhythmik", default: 4 },
    B4: { name: "Strahlungsschutz", default: 1 },
    B5: { name: "Strahlungsphysiologische Wirkung", default: 1 }
  },
  "Psychologische Anforderungen": {
    P1: { name: "Räumliche Orientierung", default: 2 },
    P2: { name: "Zeitliche Orientierung", default: 3 },
    P3: { name: "Orientierung über das Geschehen", default: 2 },
    P4: { name: "Privatheit", default: 1 },
    P5: { name: "Persönliches Territorium", default: 1 },
    P6: { name: "Selbstdarstellung / Repräsentation", default: 1 },
    P7: { name: "Sicherheitsgefühl", default: 2 },
    P8: { name: "Eigene Kontrolle", default: 2 },
    P9: { name: "Mentale Aktivierung", default: 3 },
    P10: { name: "Mentale Erholung", default: 3 },
    P11: { name: "Vertrautheit", default: 2 }
  },
  "Architektonische Anforderungen": {
    A1: { name: "Gliederung des Raumes nach Form", default: 1 },
    A2: { name: "Gliederung des Raumes nach Rhythmik", default: 1 },
    A3: { name: "Gliederung des Raumes nach Zonen", default: 2 },
    A4: { name: "Charakter der Architektur unterstützen", default: 1 },
    A5: {
      name: "Architektonische (gestalterische) Besonderheiten betonen",
      default: 1
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

  getDemand(id: string): number {
    return this.$store.state?.session?.demands?.[id];
  }
  setDemand(id: string, val: number) {
    this.$store.commit("demands", { [id]: val });
  }
}
</script>
