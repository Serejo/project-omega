<template>
  <v-row justify="end" class="overflow-visible teste">
    <v-col cols="auto">
      <v-snackbar
        timeout="4000"
        shaped
        color="red"
        bottom
        right
        class="navy--text"
        v-model="errorNotification.errorStatus"
      >
        {{ errorNotification.errorMessage || "Ocorreu um erro desconhecido" }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="errorNotification.errorStatus = false"
          >
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <!--      <v-alert-->
      <!--        elevation="18"-->
      <!--        shaped-->
      <!--        text-->
      <!--        dismissible-->
      <!--        transition="scale-transition"-->
      <!--        type="error"-->
      <!--        v-model="errorNotification.errorStatus"-->
      <!--      >-->
      <!--        {{ errorNotification.errorMessage }}-->
      <!--      </v-alert>-->
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    errorNotification: {
      errorStatus: false,
      errorMessage: "",
    },
  }),
  computed: {
    ...mapGetters("notifications", ["getErrorNotification"]),
  },
  methods: {
    ...mapActions("notifications", ["dismissErrorNotification"]),
    // hideAlert() {
    //   window.setInterval(() => {
    //     this.errorNotification.errorStatus = false;
    //   }, 50000);
    // },
  },
  mounted() {
    this.errorNotification = this.getErrorNotification;
    if (this.errorNotification.errorStatus) {
      // this.hideAlert();
      this.dismissErrorNotification();
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
