<template>
    <div>
        <InicioCarrusel></InicioCarrusel>
        <h1>Esta es la categoria de: {{this.$route.params.categoria}}</h1>
        <ObtenerNegocios></ObtenerNegocios>
    </div>
</template>

<script>
import ObtenerNegocios from '@/components/Inicio/ObtenerNegocios';
import InicioCarrusel from '@/components/Inicio/InicioCarrusel';

export default {
  components: {
    InicioCarrusel,  
    ObtenerNegocios,
  }
};
</script>