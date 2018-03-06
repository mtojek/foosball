import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAction, firebaseMutations } from 'vuexfire';

Vue.use(Vuex);

const foosball = {
  state: {
    leaderboard: [],
    matches: [],
    players: [],
    recentMatches: [],
  },
  mutations: firebaseMutations,
  getters: {
    leaderboard: state => state.leaderboard,
    matches: state => state.matches,
    players: state => state.players,
    recentMatches: state => state.recentMatches,
  },
  actions: {
    setLeaderboardRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('leaderboard', ref);
    }),
    setMatchesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('matches', ref);
    }),
    setPlayersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('players', ref);
    }),
    setRecentMatchesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('recentMatches', ref);
    }),
  },
};

export default new Vuex.Store({
  modules: { foosball },
});
