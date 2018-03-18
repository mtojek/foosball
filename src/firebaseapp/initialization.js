import firebase from 'firebase';
import Vue from 'vue';
import VueFire from 'vuefire';

Vue.use(VueFire);

const config = {
  apiKey: 'AIzaSyC_r7-a63XcvHkbet3UnsqZaP0DKIJpLqE',
  authDomain: 'foosball-77b90.firebaseapp.com',
  databaseURL: 'https://foosball-77b90.firebaseio.com',
  projectId: 'foosball-77b90',
  storageBucket: 'foosball-77b90.appspot.com',
  messagingSenderId: '642361302451',
};

Vue.config.productionTip = false;
firebase.initializeApp(config);

const status = {
  initialiazed: true,
};
export default status;
