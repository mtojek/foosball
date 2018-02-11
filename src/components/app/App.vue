<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '@/components/app/AppFooter';
import AppHeader from '@/components/app/AppHeader';

export default {
  components: {
    AppFooter,
    AppHeader,
  },
  name: 'App',
};
</script>

<style lang="sass">
  @import '../../../node_modules/bulma/bulma.sass'

</style>
