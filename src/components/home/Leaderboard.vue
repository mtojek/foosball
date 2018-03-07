<template>
  <div class="leaderboard">
    <h1 class="title">Leaderboard</h1>
    <div class="body">
      <table class="table is-hoverable" v-if="players.length > 0">
        <thead>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Name</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
        </tr>
        </thead>
        <tbody v-for="(leader, index) in leaderboard.slice().reverse()" :key="index">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ getPlayerName(players, leader['.key']) }}</td>
            <td>{{ leader.played }}</td>
            <td>{{ leader.won }}</td>
            <td>{{ leader.drawn }}</td>
            <td>{{ leader.lost }}</td>
            <td>{{ leader.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db, getPlayerName } from '@/firebaseapp/database';

export default {
  name: 'Leaderboard',
  firebase: {
    players: db.ref('players'),
    leaderboard: db.ref('leaderboard').orderByChild('points'),
  },
  methods: {
    getPlayerName,
  },
};
</script>

<style>
</style>
