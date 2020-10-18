import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: Login
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
