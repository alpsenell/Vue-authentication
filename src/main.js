import Vue from 'vue';
import firebase from 'firebase';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faDownload, faEye, faRedo, faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from '@/App.vue';
import store from '@/store/index';
import router from '@/router/index';

library.add(faUser, faDownload, faEye, faRedo, faCaretDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

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
