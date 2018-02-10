import Vue from 'vue';
import Router from 'vue-router';
import Leaderboard from '@/components/Leaderboard';
import Matches from '@/components/Matches';
import Players from '@/components/Players';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Leaderboard',
      component: Leaderboard,
    },
    {
      path: '/matches',
      name: 'Matches',
      component: Matches,
    },
    {
      path: '/players',
      name: 'Players',
      component: Players,
    },
  ],
});
