<template>
  <v-container class="base" fluid>
    <v-row justify="center" style="height: 100vh">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        class="
          d-sm-none d-md-none d-md-block d-lg-block d-xl-block
          align-self-center
        "
        align="center"
      >
        <v-img
          src="../assets/loginImage.svg"
          width="50rem"
          height="31rem"
        ></v-img>
      </v-col>
      <v-col
        cols="8"
        sm="8"
        md="6"
        lg="6"
        align="center"
        class="align-self-center"
      >
        <div class="background rounded-xl mx-6">
          <div class="py-4">
            <v-img src="../assets/logo.svg" width="9rem" height="7rem"></v-img>
            <v-row no-gutters class="justify-center my-2">
              <v-col cols="10">
                <v-text-field
                  label="Usuário"
                  outlined
                  dense
                  v-model="modelLogin.login"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row no-gutters class="justify-center mt-2">
              <v-col cols="10">
                <v-text-field
                  label="Senha"
                  :type="show4 ? 'text' : 'password'"
                  :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  @click:append="show4 = !show4"
                  outlined
                  dense
                  v-model="modelLogin.password"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row no-gutters class="justify-center mt-6 mb-6">
              <v-col cols="6">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    :color="hover ? 'secondary' : 'primary'"
                    :loading="isLoading"
                    block
                    :class="hover ? 'navy--text' : 'navy--text'"
                    style="text-transform: none !important; font-weight: bolder"
                    max-width="320px"
                    @click="
                      onGetLoginData(modelLogin.login, modelLogin.password)
                    "
                    >Login
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </div>
          <div class="pt-3 pb-6">
            <v-row justify="space-around" align="center">
              <div>
                <v-checkbox input-value label="Lembrar-me"></v-checkbox>
              </div>
              <div>
                <span class="font-weight-bold primary--text">Criar Conta</span>
              </div>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>

    <div>
      <v-row no-gutters class="justify-center">
        <v-col cols="6" align="center">
          <v-img src="" max-width="120px"></v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    lembrarCheckBox: false,
    modelLogin: {
      login: "",
      password: "",
    },
    show4: false,
    senha: "Password",
    rules: {
      required: (value) => !!value || "Insira sua senha",
    },
  }),
  computed: {
    ...mapState("login", ["isLoading"]),
  },
  methods: {
    ...mapActions("login", ["login"]),
    onGetLoginData() {
      this.login(this.modelLogin);
    },
  },
};
</script>
<style scoped>
.drectd {
  padding: 10%;
}
.drect {
  width: 37%;
}
</style>
