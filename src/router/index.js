import { createWebHistory, createRouter } from "vue-router";
import { isAuthenticaded } from "../utils/authenticatedValidator";

const routes = [
  { path: '/', name: 'Home',  component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/view-post/:idPost', name: 'ViewPost', beforeEnter: (to, from, next) => { isAuthenticaded(to, from, next) }, component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/acesso', name: 'Acesso', component: () => import('../pages/AcessoPage.vue') },
  { path: '/cadastro', name: 'Cadastro', component: () => import('../pages/CadastroPage.vue') },
  { path: '/user-profile/:idUser', name: 'UserProfile', beforeEnter: (to, from, next) => { isAuthenticaded(to, from, next) }, component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/add-post/:idPost', name: 'AddPost', beforeEnter: (to, from, next) => { isAuthenticaded(to, from, next) }, component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/edit-post/:idPost', name: 'EditPost', beforeEnter: (to, from, next) => { isAuthenticaded(to, from, next) }, component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'ErroPage', component: () => import('../pages/HelloWorldPage.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;