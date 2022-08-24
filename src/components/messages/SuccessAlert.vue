<template>
  <v-row justify="end" class="overflow-visible teste">
    <v-col cols="auto">
      <v-snackbar
        timeout="4000"
        shaped
        top
        color="green"
        right
        class="navy--text"
        v-model="successNotification.successStatus"
      >
        {{ successNotification.successMessage }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="successNotification.successStatus = false"
          >
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    successNotification: {
      successStatus: false,
      successMessage: "",
    },
  }),
  computed: {
    ...mapGetters("notifications", ["getSuccessNotification"]),
  },
  methods: {
    ...mapActions("notifications", ["dismissSuccessNotification"]),
    // hideAlert() {
    //   window.setInterval(() => {
    //     this.successNotification.successStatus = false;
    //   }, 10000);
    // },
  },
  mounted() {
    this.successNotification = this.getSuccessNotification;
    if (this.successNotification) {
      // this.hideAlert();
      this.dismissSuccessNotification();
    }
  },
};
</script>

<style scoped>
.teste {
  position: absolute;
  right: 2%;
  top: 1%;
  z-index: 2000;
}
</style>
