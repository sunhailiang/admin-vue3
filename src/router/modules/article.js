export default (layout) => {
  return {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'wenzhangguanli'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRranking',
        component: () => import('@/views/article/article-ranking'),
        meta: {
          title: 'articleRranking',
          icon: 'wenzhangfenlei'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('@/views/article/article-detail'),
        meta: {
          title: 'articleDetail',
          icon: 'xiangqing'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('@/views/article/article-create'),
        meta: {
          title: 'articleCreate',
          icon: 'xinjian'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () => import('@/views/article/article-create'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
}
