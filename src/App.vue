<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-text>Anunciador mazatlan</v-text>
    </v-app-bar>
    <v-main>
      <InicioCarrusel></InicioCarrusel>
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
    //
  }),
};
</script>
