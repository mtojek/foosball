<template>
  <div class="sign-out"></div>
</template>

<script>
import { auth } from '@/firebaseapp/auth';
import router from '@/router';

export default {
  name: 'SignOut',
  mounted() {
    auth.signOut().then(() => router.push({ name: 'Home' }));
  },
};
</script>
