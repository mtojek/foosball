<template>
  <div class="recent-matches">
    <h1 class="title">Recent Matches</h1>
    <div class="body">
      <table class="table" v-if="players.length > 0">
        <tbody v-for="(match, index) in recentMatches.slice().reverse()" :key="index">
          <tr>
            <td class="name">{{ getPlayerName(players, match.team_a.first) }}</td>
            <td class="score" rowspan="2">
              {{ match.team_a.score }} : {{ match.team_b.score }}
            </td>
            <td class="name">{{ getPlayerName(players, match.team_b.first) }}</td>
          </tr>
          <tr>
            <td class="name">{{ getPlayerName(players, match.team_a.second) }}</td>
            <td class="name">{{ getPlayerName(players, match.team_b.second) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db, getPlayerName } from '@/firebaseapp/database';

export default {
  name: 'RecentMatches',
  firebase: {
    players: db.ref('players'),
    recentMatches: db.ref('matches').orderByChild('timestamp').limitToLast(10),
  },
  methods: {
    getPlayerName,
  },
};
</script>

<style lang="sass" scoped>
  td.name
    text-align: center
  td.score
    font-size: 1.5rem
    font-weight: bold
    text-align: center
    vertical-align: middle
  tbody
    tr:first-child
      td.name
        border: none
    tr:nth-child(2)
      td.name
        border-bottom: 1px solid #dbdbdb
  tbody:last-child
    tr:nth-child(2)
      td.name
        border-bottom: none
    td.score
      border: none
</style>
