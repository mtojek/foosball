<template>
  <div class="app-main">
    <div class="container">
      <div class="section">
        <router-view :currentUser="currentUser"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  props: ['currentUser'],
};
</script>

<style>
</style>
