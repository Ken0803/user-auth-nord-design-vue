import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';
import SuccessPage from '@/components/SuccessPage.vue';

const routes = [
  { path: '/', component: LoginForm },
  { path: '/success', component: SuccessPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;