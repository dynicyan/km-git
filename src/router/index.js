import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}
/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashboard',
    hidden: true,
    meta: { title: '首页' },
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  }
  // { path: '*', redirect: '/404', hidden: true }
]

export const asyncRouterMap = [
  {
    path: '/userCheck',
    component: Layout,
    redirect: '/userCheck/review',
    alwaysShow: true,
    meta: {
      title: '用户审核',
      icon: 'user',
      roles: ['admin']
    },
    children: [
      {
        path: 'agent',
        component: () => import('@/views/userCheck/agent'),
        name: 'agent',
        meta: {
          title: '审核代理商资质',
          roles: ['admin']
        }
      },
      {
        path: 'admaster',
        component: () => import('@/views/userCheck/admaster'),
        name: 'admaster',
        meta: {
          title: '审核广告主资质',
          roles: ['admin']
        }
      },
      {
        path: 'rules',
        component: () => import('@/views/userCheck/rules'),
        name: 'rules',
        meta: {
          title: '审核标准',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/adCheck',
    component: Layout,
    redirect: '/adCheck/unit',
    alwaysShow: true,
    meta: {
      title: '广告审核',
      icon: 'chart',
      roles: ['admin']
    },
    children: [
      {
        path: 'unit',
        component: () => import('@/views/adCheck/unit'),
        name: 'unit',
        meta: {
          title: '广告单元审核',
          roles: ['admin']
        }
      },
      {
        path: 'idea',
        component: () => import('@/views/adCheck/idea'),
        name: 'idea',
        meta: {
          title: '广告创意审核',
          roles: ['admin']
        }
      },
      {
        path: 'splash',
        component: () => import('@/views/adCheck/splash'),
        name: 'splash',
        meta: {
          title: '开屏广告审核',
          roles: ['admin']
        }
      },
      {
        path: 'infoflow',
        component: () => import('@/views/adCheck/infoflow'),
        name: 'infoflow',
        meta: {
          title: '信息流审核',
          roles: ['admin']
        }
      },
      {
        path: 'h5',
        component: () => import('@/views/adCheck/h5'),
        name: 'h5',
        meta: {
          title: 'H5审核',
          roles: ['admin']
        }
      },
      {
        path: 'rules',
        component: () => import('@/views/adCheck/rules'),
        name: 'rules',
        meta: {
          title: '审核标准',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/recharge',
    component: Layout,
    redirect: '/recharge/list',
    alwaysShow: true,
    meta: {
      title: '财务审核',
      icon: 'user',
      roles: ['admin']
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/recharge/list'),
        name: 'list',
        meta: {
          title: '审核列表',
          roles: ['admin']
        }
      },
      {
        path: 'rules',
        component: () => import('@/views/recharge/rules'),
        name: 'rules',
        meta: {
          title: '审核标准',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/analysis',
    component: Layout,
    redirect: '/analysis/overview',
    alwaysShow: true,
    meta: {
      title: '媒体数据',
      icon: 'user',
      roles: ['admin']
    },
    children: [
      {
        path: 'overview',
        component: () => import('@/views/analysis/overview'),
        name: 'overview',
        meta: {
          title: '总体数据',
          roles: ['admin']
        }
      },
      {
        path: 'ideas',
        component: () => import('@/views/analysis/ideas'),
        name: 'ideas',
        meta: {
          title: '广告创意',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/tools',
    component: Layout,
    redirect: '/tools/log',
    alwaysShow: true,
    meta: {
      title: '工具箱',
      icon: 'user',
      roles: ['admin']
    },
    children: [
      {
        path: 'log',
        component: () => import('@/views/tools/log'),
        name: 'log',
        meta: {
          title: '操作日志',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/list',
    alwaysShow: true,
    meta: {
      title: '财务管理',
      icon: 'user',
      roles: ['admin']
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/finance/list'),
        name: 'list',
        meta: {
          title: '财务流水',
          roles: ['admin']
        }
      },
      {
        path: 'income',
        component: () => import('@/views/finance/income'),
        name: 'income',
        meta: {
          title: '收益记录',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/settings',
    alwaysShow: true,
    meta: {
      title: '账号',
      icon: 'user',
      roles: ['admin']
    },
    children: [
      {
        path: 'settings',
        component: () => import('@/views/user/settings'),
        name: 'list',
        meta: {
          title: '账号设置',
          roles: ['admin']
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior,
  routes: constantRouterMap
})
