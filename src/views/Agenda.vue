<template >
  <v-container>
    <agenda-list-header />
    <agenda-list />
  </v-container>
</template>
<script>
import AgendaList from "../components/agenda/AgendaList.vue";
import AgendaListHeader from "../components/agenda/AgendaListHeader.vue";
export default {
  components: { AgendaListHeader, AgendaList },
  name: "AgendaPage",
};
</script>
<style lang="">
</style>