<template >
  <v-container>
    <pacientes-list-header />
    <pacientes-list-body />
  </v-container>
</template>
<script>
import PacientesListBody from "../components/pacientes/PacientesListBody.vue";
import PacientesListHeader from "../components/pacientes/PacientesListHeader.vue";
export default {
  components: { PacientesListHeader, PacientesListBody },
  name: "PacientesPage",
};
</script>
<style lang="">
</style>