<template>
  <div class="sign-in">
    <div class="body">
      <div id="firebaseui-auth-container"/>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';

export default {
  name: 'SignIn',
  mounted() {
    const uiConfig = {
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/',
    };

    let ui = firebaseui.auth.AuthUI.getInstance();
    if (ui === null) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>

<style src="../../../node_modules/firebaseui/dist/firebaseui.css"></style>
