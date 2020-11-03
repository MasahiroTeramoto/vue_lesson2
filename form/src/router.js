import Vue from 'vue';
import Router from 'vue-router';

import SampleAppHeader from './components/SampleAppHeader.vue';
import Birthday from './components/Birthday.vue';
import LifeInsurance from './components/LifeInsurance.vue';
import Consulation from './components/Consulation.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Birthday,
        header: SampleAppHeader
      }
    },
    {
      path: '/insurance',
      components: {
        default: LifeInsurance,
        header: SampleAppHeader
      }
    },
    {
      path: '/consulation',
      components: {
        default: Consulation,
        header: SampleAppHeader
      }
    },
    {
      path: '*',
      components: {
        default: Birthday,
        header: SampleAppHeader
      }
    }
  ]
});
