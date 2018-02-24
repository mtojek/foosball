<template>
  <div class="home">
    <div class="columns">
      <div class="column">
        <leaderboard/>
      </div>
      <div class="column">
        <recent-matches/>
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from '@/components/home/Leaderboard';
import RecentMatches from '@/components/home/RecentMatches';

export default {
  components: {
    Leaderboard,
    RecentMatches,
  },
  name: 'Home',
};
</script>

<style>
</style>
