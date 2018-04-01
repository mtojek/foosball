<template>
  <div class="players">
    <h1 class="title">Players</h1>
    <div class="body">
      <table class="table is-hoverable" v-if="getActivePlayers(players).length > 0">
        <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody v-for="(player, index) in getActivePlayers(players)" :key="index">
        <tr>
          <td>{{ player.name }}</td>
          <td>
            <button class="button is-small is-primary" v-on:click="deletePlayer(player['.key'])">
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
import { db, getActivePlayers } from '@/firebaseapp/database';

export default {
  name: 'Players',
  firebase: {
    players: db.ref('players').orderByChild('name'),
  },
  methods: {
    deletePlayer(playerId) {
      this.$firebaseRefs.players.child(playerId).transaction((player) => {
        const updated = player;
        if (updated) {
          updated.deleted = true;
        }
        return updated;
      });
    },
    getActivePlayers,
  },
};
</script>

<style>
</style>
