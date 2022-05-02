export default (layout) => {
  return {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'yonghuguanli_huaban'
    },
    children: [
      {
        path: '/user/manage',
        component: () =>
          import(
            /* webpackChunkName: "user-manage" */ '@/views/user/user-manage/'
          ),
        name: 'userManage',
        meta: {
          title: 'userManage',
          icon: 'yonghuguanli_huaban'
        }
      },
      {
        path: '/user/permission',
        component: () =>
          import(
            /* webpackChunkName: "user-permission-list" */ '@/views/user/permission-list/'
          ),
        name: 'permissionList',
        meta: {
          title: 'permissionList',
          icon: 'quanxian'
        }
      },
      {
        path: '/user/role',
        component: () =>
          import(/* webpackChunkName: "user-list" */ '@/views/user/role-list/'),
        name: 'roleList',
        meta: {
          title: 'roleList',
          icon: 'jiaose'
        }
      },
      {
        path: '/user/info/:id',
        component: () =>
          import(/* webpackChunkName: "user-info" */ '@/views/user/user-info/'),
        name: 'userInfo',
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        component: () =>
          import(/* webpackChunkName: "user-import" */ '@/views/user/import/'),
        name: 'userImport',
        meta: {
          title: 'exclImport'
        }
      }
    ]
  }
}
