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
        name: 'articleRanking',
        component: () =>
          import(
            /* webpackChunkName: "article-ranking" */ '@/views/article/article-ranking'
          ),
        meta: {
          title: 'article',
          icon: 'wenzhangfenlei'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () =>
          import(
            /* webpackChunkName: "article-detail" */ '@/views/article/article-detail'
          ),
        meta: {
          title: 'articleDetail',
          icon: 'xiangqing'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () =>
          import(
            /* webpackChunkName: "article-create" */ '@/views/article/article-create'
          ),
        meta: {
          title: 'articleCreate',
          icon: 'xinjian'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () =>
          import(
            /* webpackChunkName: "article-editor" */ '@/views/article/article-create'
          ),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
}
