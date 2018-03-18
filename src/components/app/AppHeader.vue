<template>
  <div class="app-header">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/#/">
            <span class="app-name">foosball</span>
          </a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" id="navMenu">
          <div class="navbar-start">
            <router-link to="/matches" class="navbar-item">Matches</router-link>
            <router-link to="/players" class="navbar-item">Players</router-link>
          </div>
          <div class="navbar-end">
            <router-link to="/matches/new" class="navbar-item" v-show="isAuthorized(currentUser)">
              New Match
            </router-link>
            <router-link to="/players/new" class="navbar-item" v-show="isAuthorized(currentUser)">
              New Player
            </router-link>
            <router-link to="/auth/signin" class="navbar-item" v-show="!isAuthorized(currentUser)">
              Sign In
            </router-link>
            <router-link to="/auth/signout" class="navbar-item" v-show="isAuthorized(currentUser)">
              Sign Out
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { isAuthorized } from '@/firebaseapp/auth';

export default {
  name: 'AppHeader',
  props: ['currentUser'],
  methods: {
    isAuthorized,
  },
};

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(($el) => {
      $el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = $el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
</script>

<style lang="sass" scoped>
  span.app-name
    font-weight: bold
</style>
