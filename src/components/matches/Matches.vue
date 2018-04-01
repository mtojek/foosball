<template>
  <div class="matches">
    <h1 class="title">Matches</h1>
    <div class="body">
      <table class="table is-hoverable" v-if="players.length > 0">
        <thead>
        <tr>
          <th>Date</th>
          <th>Team A</th>
          <th>Team B</th>
          <th>Score</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody v-for="(match, index) in matches.slice().reverse()" :key="index">
        <tr>
          <td>{{ dateFormat(new Date(match.timestamp * 1000), 'yyyy-mm-dd hh:MM:ss') }}</td>
          <td>{{ getPlayerName(players, match.team_a.first) + ", "
            + getPlayerName(players, match.team_a.second) }}</td>
          <td>{{ getPlayerName(players, match.team_b.first) + ", "
            + getPlayerName(players, match.team_b.second) }}</td>
          <td class="score">{{ match.team_a.score }} : {{ match.team_b.score }}</td>
          <td>
            <button class="button is-small is-danger" v-on:click="deleteMatch(match['.key'])">
              Delete
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import dateFormat from 'dateformat';
import { db, getPlayerName } from '@/firebaseapp/database';

export default {
  name: 'Matches',
  firebase: {
    players: db.ref('players'),
    matches: db.ref('matches').orderByChild('timestamp'),
  },
  methods: {
    dateFormat,
    deleteMatch(matchId) {
      this.$firebaseRefs.matches.child(matchId).remove();
    },
    getPlayerName,
  },
};
</script>

<style lang="sass" scoped>
  td.score
    text-align: center
</style>
