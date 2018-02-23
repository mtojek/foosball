import Vue from 'vue';
import Router from 'vue-router';
import NewMatch from '@/components/matches/NewMatch';
import Home from '@/components/home/Home';
import Matches from '@/components/matches/Matches';
import Players from '@/components/players/Players';


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
    {
      path: '/matches/new',
      name: 'NewMatch',
      component: NewMatch,
    },
  ],
});
