<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
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
          <a class="navbar-item" href="#">Matches</a>
          <a class="navbar-item" href="#">Players</a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="#">Add match</a>
          <a class="navbar-item" href="#">Sign in</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="sass" scoped>
  span.app-name
    font-weight: bold
</style>
