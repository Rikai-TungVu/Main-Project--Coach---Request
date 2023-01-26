import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistrations from './pages/coaches/CoachRegistrations.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [
        { path: 'contact', component: ContactCoach }, // coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachRegistrations },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notfound(.*)', component: NotFound },
  ],
});

export default router;
