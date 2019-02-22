export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/dashboard' },
      {
        path: '/dashboard',
        component: './dashboard/BasicBoard',
        name: 'Dashboard',
        icon: 'Dashboard',
      },
      { path: '/courses', component: './courses/Courses', name: 'Courses', icon: 'Courses' },
      { path: '/forum', component: './forum/Forum', name: 'Forum', icon: 'Forum' },
      { path: '/account', component: './account/Account', name: 'Account', icon: 'Account' },
      { path: '/messages', component: './message/Messages', name: 'Messages', icon: 'Messages' },
      { path: '/logout', component: './logout/Logout', name: 'Logout', icon: 'Logout' },
    ],
  },
];
