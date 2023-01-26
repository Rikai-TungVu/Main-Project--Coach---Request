import { createRouter, createWebHistory } from 'vue-router';

import CoachDeatail from './pages/coaches/CoachDeatail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegistation from './pages/coaches/CoachRegistation.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReveived from './pages/requests/RequestReveived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDeatail,
      children: [
        { path: 'contact', component: ContactCoach }, // coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestReveived },
    { path: '/:notfound(.*)', component: NotFound },
  ],
});

export default router;
