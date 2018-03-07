<template>
  <div class="new-player">
    <h1 class="title">New Player</h1>
    <div class="body">
      <form v-on:submit.prevent="addPlayer">
        <div v-bind:class="['notification',
          {'is-danger': status == 'danger', 'is-success': status == 'success'}]"
             v-if="statusMessage">
          {{ statusMessage }}
        </div>
        <div class="field">
          <label class="label">Name</label>
          <div class="medium-input">
            <input class="input" type="text" min="0" placeholder="Player name" required
                   v-model.number="newPlayer.name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebaseapp/database';

function createNewPlayer() {
  return {
    name: null,
  };
}

export default {
  name: 'NewPlayer',
  data() {
    return {
      newPlayer: createNewPlayer(),
      status: 'success',
      statusMessage: null,
    };
  },
  firebase: {
    players: db.ref('players'),
  },
  methods: {
    addPlayer() {
      this.$firebaseRefs.players.push(this.newPlayer, this.addPlayerCallback);
    },
    addPlayerCallback(error) {
      if (error) {
        this.status = 'danger';
        this.statusMessage = 'Error occurred while adding new player.';
      } else {
        this.status = 'success';
        this.statusMessage = `New player "${this.newPlayer.name}" added successfully.`;
        this.newPlayer = createNewPlayer();
      }
    },
  },
};
</script>

<style lang="sass" scoped>
  div.medium-input
    display: inline-block
    width: 16em
</style>

