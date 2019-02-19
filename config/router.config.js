export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/dashboard' },
      { path: '/dashboard', component: './dashboard/BasicBoard', name: 'Dashboard' },
      { path: '/courses', component: './courses/Courses', name: 'Courses' },
      { path: '/forum', component: './forum/Forum', name: 'Forum' },
      { path: '/account', component: './account/Account', name: 'Account' },
    ],
  },
];
