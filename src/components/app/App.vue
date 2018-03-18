<template>
  <div id="app" v-if="isAuthStateLoaded">
    <app-header :currentUser="currentUser"/>
    <app-main/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '@/components/app/AppFooter';
import AppHeader from '@/components/app/AppHeader';
import AppMain from '@/components/app/AppMain';
import { auth } from '@/firebaseapp/auth';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    AppMain,
  },
  data() {
    return {
      currentUser: null,
      isAuthStateLoaded: false,
    };
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      this.currentUser = user;
      this.isAuthStateLoaded = true;
    });
  },
};
</script>

<style lang="sass">
  @import '../../../node_modules/bulma/bulma.sass'

</style>
