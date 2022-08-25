<template>
  <v-card flat class="mt-5">
    <v-app-bar flat color="base" absolute app>
      <v-app-bar-nav-icon
        class="d-lg-none d-xl-none"
        @click="toggleDrawer(true)"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="flex text-start text--text">{{
        name
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-switch
        v-model="tougle"
        inset
        @click="darkMode"
        class="mt-5"
      ></v-switch> -->
      <!-- <span class="text--text text-body-1"> {{ getUserName }}</span> -->
      <div>
        <span class="text-truncate font-weight-bold"
          >Olá, {{ getWhoami.NOME }}.</span
        >
      </div>
      <div class="ml-2">
        <v-icon size="30" color="">mdi-account-circle</v-icon>
      </div>
    </v-app-bar>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    return: {},
    tougle: false,
    // completo: true,
  }),
  props: {
    name: { type: String, required: true },
  },
  mounted() {
    this.whoami();
    this.darkModeOn();
  },

  computed: {
    ...mapGetters("login", ["getUserName"]),
    ...mapGetters("menu", ["getDrawer", "getDarkMode"]),
    ...mapGetters("whoami", ["getWhoami"]),
  },
  methods: {
    ...mapActions("menu", ["setDrawer", "setDarkMode"]),
    ...mapActions("whoami", ["whoami"]),

    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.setDarkMode(!this.getDarkMode);
      this.tougle = true;
    },

    darkModeOn() {
      this.$vuetify.theme.dark = this.getDarkMode;
      this.tougle = this.getDarkMode;
    },

    toggleDrawer(value) {
      this.$store.dispatch("menu/setDrawer", value);
    },
  },
};
</script>
<style>
.navBarComponent {
  background-color: #f2f4f5 !important;
}
.page-title {
  color: #002233;
}
</style>
