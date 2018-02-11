// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase';
import Vue from 'vue';
import App from '@/components/app/App';
import router from '@/router';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC_r7-a63XcvHkbet3UnsqZaP0DKIJpLqE',
  authDomain: 'foosball-77b90.firebaseapp.com',
  databaseURL: 'https://foosball-77b90.firebaseio.com',
  projectId: 'foosball-77b90',
  storageBucket: 'foosball-77b90.appspot.com',
  messagingSenderId: '642361302451',
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
