export const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
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
        name: 'home',
        component: () => import('@/pages/home.vue'),
      },
      {
        path: 'citizen',
        name: 'citizen',
        component: () => import('@/pages/citizen.vue'),
      }
    ],
  },
  // Authority Routes
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'authority-dashboard',
        name: 'authority-dashboard',
        component: () => import('@/pages/authority-dashboard.vue'),
      },
      {
        path: 'tenders',
        component: () => import('@/pages/tenders.vue'),
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

  // Construction Routes
  {
    path: '/',
    component: () => import('@/layouts/construction-company.vue'),
    children: [
      {
        path: 'construction-dashboard',
        name: 'construction-dashboard',
        component: () => import('@/pages/construction-dashboard.vue'),
      },
    ],
  }
]
