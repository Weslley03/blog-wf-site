import { createMemoryHistory, createRouter } from "vue-router";
import HelloWorldPage from '../pages/HelloWorldPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HelloWorldPage },
  { path: '/view-post/:idPost', name: 'ViewPost', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/acesso', name: 'Acesso', component: HelloWorldPage },
  { path: '/cadastro', name: 'Cadastro', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/user-profile/:idUser', name: 'UserProfile', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/add-post/:idPost', name: 'AddPost', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/edit-post/:idPost', name: 'EditPost', component: () => import('../pages/HelloWorldPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'ErroPage', component: () => import('../pages/HelloWorldPage.vue') }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;