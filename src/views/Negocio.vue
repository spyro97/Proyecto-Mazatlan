<template>
    <div>
        <v-container>
         <v-row>
          <v-col align="center" cols="12">
            <h1 class="mt-5 text-xs-center">{{ negocio.nombre_negocio }}</h1>
          </v-col>
          <v-col cols="12">
           <InicioCarrusel></InicioCarrusel>
          </v-col>
          <v-col cols="12">
            <h1>Sobre nosotros:</h1>
            <br>
             <p v-if="negocio.descripcion != null">
                 {{ negocio.descripcion}}
             </p>
          </v-col>
          <v-col cols="12">
                <h1>Información de contacto:</h1>
          </v-col>
          <v-col cols="12">
                <h2 v-if="negocio.numero != null">Numero de telefono: {{ negocio.numero }}</h2>
                <h2 v-if="negocio.correo != null">Correo Electronico: {{ negocio.correo }}</h2>
                <h2 v-if="negocio.ubicacion != null">Ubicación: {{ negocio.correo }}</h2>
          </v-col>
         </v-row>
        </v-container>
    </div>
</template>

<script>
import InicioCarrusel from '@/components/Inicio/InicioCarrusel';

export default {
    components: {
    InicioCarrusel
    },
    
    data() {
      return {
          negocio : {}
      }
    },
    methods : {
        async obtenerNegocio () {
            try {
                this.axios.get(`search/business`, { params : {name:this.$route.params.nombre}}).then( (response) =>{
                    this.negocio = response.data.data
                    console.log(this.negocio)
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.obtenerNegocio();
    },
}
</script>