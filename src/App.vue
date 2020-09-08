<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-text>Anunciador mazatlan</v-text>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="dark"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Mi perfil
        </v-btn>
      </template>
      <v-list>
        <v-list-item
        >
        <router-link :to="{ name: 'Perfil', params: {nombre: 'pepebanana'}}">
         <v-list-item-title>Ver perfil</v-list-item-title>
        </router-link>
          
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
      <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from '@/components/Shared/Footer';
import InicioCarrusel from '@/components/Inicio/InicioCarrusel';

export default {
  name: 'App',
  components: {
    Footer,
    InicioCarrusel
  },

  data: () => ({
      items: [
        { title: 'Ver perfil' },
        { title: 'Mis negocios' },
        { title: 'Mis favoritos' },
        { title: 'Cerrar Sessión' },
      ],
      usuario: 'pepebanana'
    }),
  methods: {
    verPerfil () {
      this.$router.push({ name: 'Campeones' , params: {nombre: item.usuario}})
    }
  },
};
</script>
