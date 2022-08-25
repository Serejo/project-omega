<template >
  <v-container>
    <usuario-list-header />
    <usuario-list-body />
  </v-container>
</template>
<script>
import UsuarioListBody from "../components/usuarios/UsuarioListBody.vue";
import UsuarioListHeader from "../components/usuarios/UsuarioListHeader.vue";
export default {
  components: { UsuarioListBody, UsuarioListHeader },
  name: "UsuariosPage",
};
</script>
<style lang="">
</style>