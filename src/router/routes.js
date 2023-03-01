const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Mainlayout.vue'),
    meta: {title:"root",icon:"mdi-account-switch", hidden:false},
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: {title: "dashboard", icon:"mdi-view-dashboard-outline", hidden:false},
        component: () => import('@/views/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/users',
    name: 'users',
    meta: {title:"users",icon:"mdi-account-box-multiple-outline", hidden:false},
    component: () => import('@/layouts/default/Mainlayout.vue'),
    children:[
      {
        path:'',
        name:'userList',
        meta: {title:"users", icon:"mdi-account-box-multiple-outline"},
        component: ()=> import('@/views/UserList.vue')
      },
    ]
  },
];

export  {routes};
