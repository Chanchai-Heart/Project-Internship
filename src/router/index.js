import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeUser from '@/views/user/HomeUser.vue'
import UserProfile from '@/views/user/profile/UserProfile.vue'
import UserIncome from '@/views/user/income/UserIncome.vue'
import CashTrail from '@/views/user/wallet/CashTrail.vue'
import UserTopup from '@/views/user/wallet/UserTopup.vue'
import HistoryTopup from '@/views/user/history/HistoryTopup.vue'
import HistoryService from '@/views/user/history/HistoryService.vue'
import HistoryPremium from '@/views/user/history/HistoryPremium.vue'
import HistoryUser from '@/views/user/history/HistoryUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users-home',
      name: 'users-home',
      component: HomeUser
    },
    {
      path: '/users-profile',
      name: 'users-profile',
      component: UserProfile
    },
    {
      path: '/users-income',
      name: 'users-income',
      component: UserIncome
    },
    {
      path: '/users-cashtrail',
      name: 'users-cashtrail',
      component: CashTrail
    },
    {
      path: '/users-topup',
      name: 'users-topup',
      component: UserTopup
    },
    {
      path: '/history-topup',
      name: 'history-topup',
      component: HistoryTopup
    },
    {
      path: '/history-service',
      name: 'history-service',
      component: HistoryService
    },
    {
      path: '/history-premium',
      name: 'history-premium',
      component: HistoryPremium
    },
    {
      path: '/history-user',
      name: 'history-user',
      component: HistoryUser
    },
  ],
})

export default router
