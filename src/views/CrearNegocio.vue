<template>
    <div>
     <v-form>
      <v-container>
        <v-row>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.nombre_negocio"
                label="Nombre del negocio"
                required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.descripcion"
                label="Descripcion del negocio"
                required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.whatsapp"
                label="Whatsapp"
                required
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.facebook"
                label="Facebook"
                required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.numero"
                label="Numero del negocio"
                required
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.ubicacion"
                label="Ubicación del negocio"
                required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.correo"
                label="Correo del negocio"
                required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="datosNegocio.categoria"
                label="Categoria"
                required
            ></v-text-field>
            </v-col>
        </v-row>
        <v-btn class="mr-4" color="primary" @click="guardarNegocio">Guardar Cambios</v-btn>
        <v-btn class="mr-4" color="error">Eliminar</v-btn>
      </v-container>
     </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datosNegocio : {}
        }
    },
    methods: {
    async guardarNegocio(){
      try {
        this.guardarDatos(this.datosNegocio);
        this.axios.post(`business`, this.datosNegocio).then( (response) => {
        console.log('Se ha guardado con exito')
      })
      } catch (error) {
        console.log(error);
      }
    },

    guardarDatos(datos){
              this.datosNegocio.nombre_negocio = datos.nombre_negocio
              this.datosNegocio.descripcion = datos.descripcion
              this.datosNegocio.whatsapp = datos.whatsapp
              this.datosNegocio.facebook= datos.facebook
              this.datosNegocio.numero = datos.numero
              this.datosNegocio.ubicacion = datos.ubicacion
              this.datosNegocio.correo = datos.correo
              this.datosNegocio.categoria = datos.categoria
            }
  },
}
</script>