import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";
import VueMask from "v-mask";
import pt from "vuetify/lib/locale/pt";
Vue.use(VueMask);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#371E56",
        secondary: "#46216D",
        orange: "#FF8212",
        yellow: "FFB353",
        background: "#ffffff",
        base: "#f3f4f6",
        base_dark: "#dadfe0",
        navy: "#0f2733",
        text: "#eeeeee",
      },
      dark: {
        primary: "#371E56",
        secondary: "#46216D",
        orange: "#FF8212",
        yellow: "FFB353",
        background: "#222426",
        base: "#181a1b",
        base_dark: "#2b2f31",
        navy: "#eeeeee",
        text: "#eeeeee",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
});
