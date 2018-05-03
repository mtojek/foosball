<template>
  <div id="app" v-if="isAuthStateLoaded">
    <app-header :currentUser="currentUser"/>
    <app-main :currentUser="currentUser"/>
    <app-footer/>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode';
import AppFooter from '@/components/app/AppFooter';
import AppHeader from '@/components/app/AppHeader';
import AppMain from '@/components/app/AppMain';
import { auth, CustomClaimsUpdater } from '@/firebaseapp/auth';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    AppMain,
  },
  data() {
    return {
      currentUser: {
        account: null,
        userClaims: null,
      },
      isAuthStateLoaded: false,
    };
  },
  mounted() {
    auth.onIdTokenChanged((user) => {
      this.currentUser = {
        account: user,
        userClaims: { admin: false },
      };

      if (user) {
        const that = this;
        user.getIdToken().then((idToken) => {
          that.currentUser.userClaims.admin = jwtDecode(idToken).admin === true;
        });
      }

      this.isAuthStateLoaded = true;
    });

    auth.onAuthStateChanged((user) => {
      CustomClaimsUpdater.setUser(user);
    });
  },
};
</script>

<style lang="sass">
  @import '../../../node_modules/bulma/bulma.sass'

</style>
