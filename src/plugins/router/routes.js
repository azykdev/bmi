export const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      // Admin Routes
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: 'new-tender',
        component: () => import('@/pages/new-tender.vue'),
      },
      {
        path: 'victory-tender',
        component: () => import('@/pages/victory-tender.vue'),
      },
      {
        path: 'close-tender',
        component: () => import('@/pages/close-tender.vue'),
      },
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
      },
      
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
      },
      
      
      
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
      {
        path: 'home',
        component: () => import('@/pages/home.vue'),
      },
    ],
  },
]
