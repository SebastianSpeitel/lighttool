<template>
  <v-container>
    <v-text-field label="Projektname" v-model="projectName"></v-text-field>
    <v-text-field label="Bearbeiter" v-model="author"></v-text-field>
    <v-text-field label="Auftraggeber" v-model="client"></v-text-field>
    <v-text-field label="Kontakt" v-model="contact"></v-text-field>
    <v-text-field label="Export" :value="url" readonly disabled></v-text-field>

    <v-btn color="primary" dark class="float-right" @click="start"
      >Beginnen</v-btn
    >
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { VTextField, VBtn, VContainer } from "vuetify/lib";

@Component({ components: { VTextField, VBtn, VContainer } })
export default class Settings extends Vue {
  name = "Settings";

  get url() {
    return this.$store.getters.shareURL;
  }

  set projectName(name: string) {
    this.$store.commit("session", { name });
  }

  get projectName() {
    return this.$store.state.session.name;
  }

  set author(author: string) {
    this.$store.commit("session", { author });
  }

  get author() {
    return this.$store.state.session.author;
  }

  set client(client: string) {
    this.$store.commit("session", { client });
  }

  get client() {
    return this.$store.state.session.client;
  }

  set contact(contact: string) {
    this.$store.commit("session", { contact });
  }

  get contact() {
    return this.$store.state.session.contact;
  }

  start() {
    this.$store.commit("continue");
  }
}
</script>
