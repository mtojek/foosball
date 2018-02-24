<template>
  <div id="app">
    <app-header/>
    <app-main/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '@/components/app/AppFooter';
import AppHeader from '@/components/app/AppHeader';
import AppMain from '@/components/app/AppMain';

export default {
  components: {
    AppFooter,
    AppHeader,
    AppMain,
  },
  name: 'App',
};
</script>

<style lang="sass">
  @import '../../../node_modules/bulma/bulma.sass'

</style>
