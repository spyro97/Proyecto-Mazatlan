<template>
    <div>
     <InicioCarrusel></InicioCarrusel>
     <InicioCartas></InicioCartas>
    </div>
</template>

<script>
import InicioCarrusel from '@/components/Inicio/InicioCarrusel';
import InicioCartas from '@/components/Inicio/InicioCartas';
import Cartas from '@/components/Inicio/Cartas';

export default {
  components: {
    InicioCarrusel,
    Cartas,
    InicioCartas
  }
};
</script>