import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';


Vue.use(Router);

Vue.config.productionTip = false
const BASE_TITLE = 'NMMUN';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: () => BASE_TITLE }
  },
  {
    path: '/login',
    component: Login,
    meta: { title: () => BASE_TITLE + 'Login'}
  },
  {
    path: '/signup',
    component: SignUp,
    meta: { title: () => BASE_TITLE +'SignUp' }
  },
];

const router = new Router({
  routes,
  mode : 'history'
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')