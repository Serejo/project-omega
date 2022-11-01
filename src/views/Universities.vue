<template >
  <v-container>
    <universities-list-header />
    <universities-list-body />
  </v-container>
</template>
<script>
import UniversitiesListBody from "../components/Universities/UniversitiesListBody.vue";
import UniversitiesListHeader from "../components/Universities/UniversitiesListHeader.vue";
export default {
  components: { UniversitiesListHeader, UniversitiesListBody },
  name: "PacientesPage",
};
</script>
<style lang="">
</style>