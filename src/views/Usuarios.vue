<template>
    <div>
        <v-container>
         <v-row>
          <v-col align="center">
            <h1 class="mt-5 text-xs-center">Bienvendio PepeBanana</h1>
          </v-col>    
         </v-row>
         <v-row>
           <v-col>
             <router-link :to="{ name: 'CrearNegocio'}">
              <v-btn>Registrar negocio</v-btn>
             </router-link>
           </v-col>
         </v-row>
        </v-container>
    </div>
</template>