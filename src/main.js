// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase';
import Vue from 'vue';
import App from '@/components/app/App';
import config from '@/config';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp(config);

    const db = firebase.database();
    const leaderboard = db.ref('leaderboard');
    const matches = db.ref('matches');
    const players = db.ref('players')
      .orderByChild('name');
    const recentMatches = db.ref('matches')
      .orderByKey()
      .limitToLast(10);

    this.$store.dispatch('setLeaderboardRef', leaderboard);
    this.$store.dispatch('setMatchesRef', matches);
    this.$store.dispatch('setPlayersRef', players);
    this.$store.dispatch('setRecentMatchesRef', recentMatches);
  },
});
