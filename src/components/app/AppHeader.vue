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
            <router-link to="/matches/new" class="navbar-item"
                         v-if="isAuthorized(currentUser.userClaims)">
              New Match
            </router-link>
            <router-link to="/players/new" class="navbar-item"
                         v-if="isAuthorized(currentUser.userClaims)">
              New Player
            </router-link>
            <router-link to="/auth/signin" class="navbar-item"
                         v-if="!isAuthorized(currentUser.userClaims)">
              Sign In
            </router-link>
            <div class="navbar-item has-dropdown is-hoverable"
                 v-if="isAuthorized(currentUser.userClaims)">
              <a class="navbar-link">
                <figure class="avatar image is-24x24">
                  <img :src="currentUser.account.photoURL">
                </figure>
                {{ currentUser.account.displayName }}
              </a>
              <div class="navbar-dropdown">
                <router-link to="/auth/signout" class="navbar-item">
                  Sign Out
                </router-link>
              </div>
            </div>
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
  mounted() {
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
  },
};
</script>

<style lang="sass" scoped>
  figure.avatar
    display: inline-block
    margin-right: 8px
  span.app-name
    font-weight: bold

  @media screen and (max-width: 1023px)
    figure.avatar
      height: 18px
</style>
