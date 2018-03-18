import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import Matches from '@/components/matches/Matches';
import NewMatch from '@/components/matches/NewMatch';
import Players from '@/components/players/Players';
import NewPlayer from '@/components/players/NewPlayer';
import SignIn from '@/components/auth/SignIn';
import SignOut from '@/components/auth/SignOut';

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
      path: '/matches/new',
      name: 'NewMatch',
      component: NewMatch,
    },
    {
      path: '/players',
      name: 'Players',
      component: Players,
    },
    {
      path: '/players/new',
      name: 'NewPlayer',
      component: NewPlayer,
    },
    {
      path: '/auth/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/auth/signout',
      name: 'SignOut',
      component: SignOut,
    },
  ],
});
