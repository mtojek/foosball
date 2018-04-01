<template>
  <div class="new-match">
    <h1 class="title">New Match</h1>
    <div class="body">
      <form v-on:submit.prevent="addMatch">
        <div class="notification is-danger" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="field">
          <label class="label">Team A</label>
          <div class="select">
            <select v-model="newMatch.team_a.first" required>
              <option :value="null">Select player</option>
              <option v-for="player in getActivePlayers(players)" :key="player['.key']"
                      :value="player['.key']">
                {{ player.name }}
              </option>
            </select>
          </div>
          <div class="select">
            <select v-model="newMatch.team_a.second" required>
              <option :value="null">Select player</option>
              <option v-for="player in getActivePlayers(players)" :key="player['.key']"
                      :value="player['.key']">
                {{ player.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Team B</label>
          <div class="select">
            <select v-model="newMatch.team_b.first" required>
              <option :value="null">Select player</option>
              <option v-for="player in getActivePlayers(players)" :key="player['.key']"
                      :value="player['.key']">
                {{ player.name }}
              </option>
            </select>
          </div>
          <div class="select">
            <select v-model="newMatch.team_b.second" required>
              <option :value="null">Select player</option>
              <option v-for="player in getActivePlayers(players)" :key="player['.key']"
                      :value="player['.key']">
                {{ player.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Score</label>
          <div class="short-input">
            <input class="input" type="number" min="0" placeholder="0" required
                   v-model.number="newMatch.team_a.score">
          </div>
          <div class="colon">:</div>
          <div class="short-input">
            <input class="input" type="number" min="0" placeholder="0" required
                   v-model.number="newMatch.team_b.score">
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
import { db, getActivePlayers } from '@/firebaseapp/database';
import router from '@/router';

function createNewMatch() {
  return {
    team_a: {
      first: null,
      second: null,
      score: 0,
    },
    team_b: {
      first: null,
      second: null,
      score: 0,
    },
    timestamp: Math.floor(Date.now() / 1000),
  };
}

export default {
  name: 'NewMatch',
  data() {
    return {
      newMatch: createNewMatch(),
      errorMessage: null,
    };
  },
  firebase: {
    matches: db.ref('matches'),
    players: db.ref('players').orderByChild('name'),
  },
  methods: {
    addMatch() {
      this.$firebaseRefs.matches.push(this.newMatch, this.addMatchCallback);
    },
    addMatchCallback(error) {
      if (error) {
        this.errorMessage = 'Please select unique players and pass a correct score.';
      } else {
        this.errorMessage = null;
        this.newMatch = createNewMatch();
        router.push({ name: 'Home' });
      }
    },
    getActivePlayers,
  },
};
</script>

<style lang="sass" scoped>
  div.colon
    display: inline-block
    position: relative
    top: 0.25em
  div.short-input
    display: inline-block
    width: 4em
</style>
