<template >
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="background rounded-xl">
          <v-card-title class="justify-center">
            <div>
              <v-badge color="green" content="Ativo" overlap>
                <v-icon color="primary" size="7rem"> mdi-account </v-icon>
              </v-badge>
            </div>
          </v-card-title>
          <v-card-text>
            <p></p>
            <span class="font-weight-bold"> Nome: </span>
            <p>Francisco das Chagas</p>

            <span class="font-weight-bold"> CPF: </span>
            <p>089.559.624-26</p>

            <span class="font-weight-bold"> Contato: </span>
            <p>(85)98866-4518</p>

            <span class="font-weight-bold"> Endereço: </span>
            <p>Rua do Patrício, 90 - Fortaleza, CE.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="background rounded-xl">
          <v-card-title class="justify-center">
            <div>Histórico de Atendimento</div>
          </v-card-title>
          <v-data-table> </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-card class="background rounded-xl">
          <v-card-title class="justify-center">
            <div>Histórico de Exames</div>
          </v-card-title>
          <v-data-table> </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="5"></v-col>
      <v-col cols="2" align-self="end">
        <v-card-text style="height: 100px; position: relative">
          <v-fab-transition>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  absolute
                  right
                  fab
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-laptop-account</v-icon>
                </v-btn>
              </template>
              <span> Iniciar Atendimento</span>
            </v-tooltip>
          </v-fab-transition>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ProntuarioPage",
  data: () => ({
    hover: false,
  }),
};
</script>
<style lang="">
</style>