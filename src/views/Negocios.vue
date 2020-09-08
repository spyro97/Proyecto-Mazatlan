<template>
    <div>
        <InicioCarrusel></InicioCarrusel>
        <h1>Esta es la categoria de: {{this.$route.params.categoria}}</h1>
        <Cartas></Cartas>
    </div>
</template>

<script>
import Cartas from '@/components/Inicio/Cartas';
import InicioCarrusel from '@/components/Inicio/InicioCarrusel';

export default {
  components: {
    InicioCarrusel,  
    Cartas,
  }
};
</script>