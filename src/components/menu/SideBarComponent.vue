<template>
  <v-card width="256" flat>
    <v-navigation-drawer
      floating
      :temporary="miniResponsive"
      app
      color="background"
      id="sidebar"
      v-model="drawerModel"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="mt-0" style="text-align: -webkit-center">
            <v-img
              src="../../assets/logo.svg"
              class="mt-0 mb-0 justify-center"
              width="55%"
              height="6rem"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item-group v-model="model" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="redirect(item.url)"
            link
          >
            <v-list-item-icon class="mr-4">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="
                  font-weight-medium
                  text-body-1 text-left
                  align-self-start
                  navy--text
                "
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="mt-6" @click="logout()">
            <v-list-item-icon class="mr-4">
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="
                font-weight-medium
                text-body-1 text-left
                align-self-center
                navy--text
              "
              >Sair</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SibeBarComponent",
  component: {},
  data() {
    return {
      items: [
        {
          title: "Universities",
          icon: "mdi-account-multiple-outline",
          url: "/Universities",
          admin: false,
        },
      ],
      model: 0,
    };
  },
  props: {
    relative: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions("login", ["logout"]),

    redirect(url) {
      const atual = router.currentRouter;
      if (atual != url) {
        router.replace(url);
      }
    },
    onLoggedOut() {
      this.logout();
    },
  },
  computed: {
    ...mapGetters("Login", [
      "getAdministrator",
      "getPermissions",
      "getRoleName",
    ]),
    ...mapGetters("menu", ["getDrawer"]),
    miniResponsive() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    drawerModel: {
      get() {
        return this.$store.state.menu.drawer;
      },
      set(value) {
        this.$store.dispatch("menu/setDrawer", value);
      },
    },
  },
};
</script>
<style lang="scss">
.v-sidebar-menu {
  background-color: #dadfe0 !important;
}
.v-sidebar-menu.vsm_expanded {
  max-width: 280px !important;
  .logo {
    display: block;
    max-width: 125px;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: 2rem;
  }
  .petalas {
    display: none;
  }
}
.v-sidebar-menu.vsm_collapsed {
  .logo {
    display: none;
  }
  .petalas {
    max-width: 35px;
    display: block;
    margin: 0.5rem;
  }
}
.v-sidebar-menu .vsm--title {
  color: #0f2733;
}
.v-sidebar-menu .vsm--toggle-btn {
  background-color: #dadfe0 !important;
}
</style>
