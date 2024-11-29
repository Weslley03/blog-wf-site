import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', name: 'Home',  component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/view-post/:idPost', name: 'ViewPost', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/acesso', name: 'Acesso', component: () => import('../pages/AcessoPage.vue') },
  { path: '/cadastro', name: 'Cadastro', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/user-profile/:idUser', name: 'UserProfile', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/add-post/:idPost', name: 'AddPost', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/edit-post/:idPost', name: 'EditPost', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'ErroPage', component: () => import('../pages/HelloWorldPage.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;