import Vue from 'vue';
import firebase from 'firebase';
import VeeValidate from 'vee-validate';
import App from '@/App.vue';
import store from '@/store/index';
import router from '@/router/index';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

const firebaseConfig = {
  apiKey: 'AIzaSyCppGfF5mnwnZgAFfpf6xJlRMzfVeItXzI',
  authDomain: 'dummy-frontend-project.firebaseapp.com',
  databaseURL: 'https://dummy-frontend-project.firebaseio.com',
  projectId: 'dummy-frontend-project',
  storageBucket: 'dummy-frontend-project.appspot.com',
  messagingSenderId: '909596530093',
  appId: '1:909596530093:web:427d61d903a65e4141fd24'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
