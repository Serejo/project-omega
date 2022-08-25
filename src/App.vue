<template>
  <v-app id="app">
    <div class="base" style="height: 100%">
      <navbar-component
        v-if="!['Login'].includes($route.name)"
        :name="$route.name"
      />
      <sidebar-component v-if="!['Login'].includes($route.name)" />
      <div>
        <v-main>
          <router-view />
        </v-main>
      </div>
    </div>
    <div class="overflow-visible float-end teste">
      <error-alert />
      <success-alert />
    </div>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/menu/NavBarComponent.vue";
import SidebarComponent from "./components/menu/SideBarComponent.vue";
import ErrorAlert from "./components/messages/ErrorAlert.vue";
import SuccessAlert from "./components/messages/SuccessAlert.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    SidebarComponent,
    ErrorAlert,
    SuccessAlert,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #eeeeee;
  text-transform: none !important;
}
.container {
  max-width: 100% !important;
}
</style>
