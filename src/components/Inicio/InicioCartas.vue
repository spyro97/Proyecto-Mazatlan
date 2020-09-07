<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.img"
                height="225px"
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">{{ item.title }}</p>

                    <div>
                      <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                        {{ item.text }}
                      </p>
                      <p class="caption font-weight-medium font-italic text-left">
                        {{ item.subtext }}
                      </p>
                    </div>

                    <div class="align-self-center">
                     <router-link :to="{ name: 'Negocios', params: {categoria: item.categoria}}">
                         <v-btn> Ver negocios </v-btn>
                     </router-link>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'Comida',
          text: "Encuentra los mejores lugares para comer en mazatlan!",
          subtext: 'Newly released songs. Updated daily.',
          img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
          categoria: 'comida'
        },
        {
          title: 'Entretenimiento',
          text: '¿Estas en busca de diversión?',
          subtext: 'Nosotros te ayudamos a encontrar tu lugar de diversión.',
          img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
          categoria: 'entretenimiento'
        },
        {
          title: 'Hospedaje',
          text: '¿No sabes donde hospedarte?',
          subtext: 'Tranquilos, ve que recomiendan los usuarios.',
          img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg',
          categoria: 'hospedaje'
        }
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>