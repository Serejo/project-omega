<template>
  <div>
    <v-container class="base">
      <v-row>
        <v-col cols="6 base_dark">
          <v-img src="../assets/loginImage.png"></v-img>
        </v-col>
        <v-col align="center" class="align-self-center">
          <div class="base">
            <div>
              <v-img
                src="../assets/logo.png"
                width="18rem"
                height="5rem"
              ></v-img>
              <v-row no-gutters class="justify-center mt-0 mb-1">
                <!-- <v-col cols="6" align="start">
                <div class="text-subtitle-1">Login</div>
              </v-col> -->
              </v-row>
              <v-row no-gutters class="justify-center">
                <v-col cols="10">
                  <v-text-field
                    label="Usuário"
                    placeholder="Usuário"
                    solo
                    flat
                    v-model="modelLogin.login"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-center mb-1">
                <!-- <v-col cols="6" align="start">
                <div class="text-subtitle-1">Senha</div>
              </v-col> -->
              </v-row>
            </div>
            <div>
              <v-row no-gutters class="justify-center">
                <v-col cols="10">
                  <v-text-field
                    label="Senha"
                    placeholder="Senha"
                    :type="show4 ? 'text' : 'password'"
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    @click:append="show4 = !show4"
                    solo
                    flat
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
                      class="m-texto"
                      style="
                        text-transform: none !important;
                        font-weight: bolder;
                      "
                      flat
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
            <div>
              <v-row justify="space-between">
                <div>
                  <v-checkbox
                    v-model="lembrarCheckBox"
                    label="Lembrar"
                  ></v-checkbox>
                </div>
                <div>
                  <span class="font-bold">Criar Conta</span>
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
  </div>
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
      required: (value) => !!value || "O campo não pode ser vazio",
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
.m-texto {
  color: #002233 !important;
}
.m-texto:hover {
  transition: 300ms all ease-in-out;
  color: #ffffff !important;
  font-weight: bold;
}
.drectd {
  padding: 10%;
}
.drect {
  width: 37%;
}
</style>
