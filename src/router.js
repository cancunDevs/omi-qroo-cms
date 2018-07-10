import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Callback from './components/Callback.vue';
import Dashboard from './components/Dashboard.vue';
import Hello from './components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    { path: '*', redirect: '/' },
  ],
});
