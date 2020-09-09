<template>
  <v-card
    class="mx-auto"
    max-width="1000"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="negocio in datosCategorias"
          :key="negocio.id_negocio"
          :cols="6"
        >
          <v-card>
            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="negocio.nombre_negocio"></v-card-title>
            </v-img>
            
            <router-link :to="{ name: 'Negocio', params: {nombre: negocio.nombre_negocio}}">
              <v-btn>Ver datos</v-btn>
            </router-link>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'ObtenerNegocios',
    data: () => ({
      datosCategorias: []
    }),

    methods: {
      async obtenerCategoria () {
        try {
          this.axios.get(`search/business`, { params : {category:this.$route.params.categoria}}).then( (response) =>{
            this.datosCategorias = response.data.data
            console.log(this.datosCategorias)
          })
        } catch (error) {
          console.log(error)
        }
      }
    },

    mounted() {
      this.obtenerCategoria()
    },
  }
</script>