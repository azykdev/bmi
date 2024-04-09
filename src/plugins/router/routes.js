export const routes = [
  { path: '/', redirect: '/home' },

  // Blank Routes ============================ *** ============================
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
        component: () => import('@/pages/citizen/citizen.vue'),
      }
    ],
  },

  // Authority Routes ========================== *** ============================
  {
    path: '/',
    component: () => import('@/layouts/authority.vue'),
    children: [
      {
        path: 'authority-dashboard',
        name: 'authority-dashboard',
        component: () => import('@/pages/authority/dashboard.vue'),
      },
      {
        path: 'authority-tenders',
        name: 'authority-tenders',
        component: () => import('@/pages/authority/tenders.vue'),
      },
      {
        path: 'authority-victory-tender',
        name: 'authority-victory-tender',
        component: () => import('@/pages/authority/victory-tender.vue'),
      },
      {
        path: 'authority-close-tender',
        name: 'authority-close-tender',
        component: () => import('@/pages/authority/close-tender.vue'),
      },

      // ________________________________________________
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

  // Construction Routes ======================== *** ============================
  {
    path: '/',
    component: () => import('@/layouts/construction-company.vue'),
    children: [
      {
        path: 'construction-dashboard',
        name: 'construction-dashboard',
        component: () => import('@/pages/construction/dashboard.vue'),
      },
      {
        path: 'construction-tenders',
        name: 'construction-tenders',
        component: () => import('@/pages/construction/tenders.vue'),
      }
    ],
  }
]
