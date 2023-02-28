const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Mainlayout.vue'),
    meta: {title:"users",icon:"mdi-account-switch", hidden:true},
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: {title: "dashboard", icon:"mdi-view-dashboard-variant", hidden:false},
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'users',
        name: 'users',
        meta: {title:"users",icon:"mdi-account-switch", hidden:false},
        component: () => import('@/views/Users.vue'),
        children:[
          {
            path:'userList',
            name:'userList',
            meta: {title:"userList", icon:"mdi-account-convert"},
            component: ()=> import('@/views/Users.vue')
          }
        ]
      },
    ],
  },
];

export  {routes};
