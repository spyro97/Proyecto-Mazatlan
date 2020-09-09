import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/negocios/:categoria',
    name: 'Negocios',
    component: () => import(/* webpackChunkName: "negocios" */ '../views/Negocios.vue')
  },
  {
    path: '/registrar-negocio',
    name: 'CrearNegocio',
    component: () => import(/* webpackChunkName: "crear negocio" */ '../views/CrearNegocio.vue')
  },
  {
    path: '/perfil/:nombre',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Usuarios.vue')
  },
  {
    path: '/:nombre',
    name: 'Negocio',
    component: () => import(/* webpackChunkName: "negocio" */ '../views/Negocio.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
