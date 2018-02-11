import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Matches from '@/components/Matches';
import Players from '@/components/Players';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
