<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/app/NavBar';

export default {
  components: {
    NavBar,
  },
  name: 'App',
};
</script>

<style lang="sass">
  @import '../../../node_modules/bulma/bulma.sass'

</style>
