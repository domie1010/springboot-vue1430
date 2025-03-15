import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import cheliang from '@/views/modules/cheliang/list'
    import dictionary from '@/views/modules/dictionary/list'
    import news from '@/views/modules/news/list'
    import paizhaohuanbu from '@/views/modules/paizhaohuanbu/list'
    import paizhaoshenqing from '@/views/modules/paizhaoshenqing/list'
    import paizhaozuanyi from '@/views/modules/paizhaozuanyi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryCheliang from '@/views/modules/dictionaryCheliang/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryPaizhao from '@/views/modules/dictionaryPaizhao/list'
    import dictionaryPaizhaohuanbu from '@/views/modules/dictionaryPaizhaohuanbu/list'
    import dictionaryPaizhaohuanbuYesno from '@/views/modules/dictionaryPaizhaohuanbuYesno/list'
    import dictionaryPaizhaoshenqing from '@/views/modules/dictionaryPaizhaoshenqing/list'
    import dictionaryPaizhaoshenqingYesno from '@/views/modules/dictionaryPaizhaoshenqingYesno/list'
    import dictionaryPaizhaozuanyiYesno from '@/views/modules/dictionaryPaizhaozuanyiYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryCheliang',
        name: '车辆类型',
        component: dictionaryCheliang
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryPaizhao',
        name: '牌照类型',
        component: dictionaryPaizhao
    }
    ,{
        path: '/dictionaryPaizhaohuanbu',
        name: '申请类型',
        component: dictionaryPaizhaohuanbu
    }
    ,{
        path: '/dictionaryPaizhaohuanbuYesno',
        name: '申请状态',
        component: dictionaryPaizhaohuanbuYesno
    }
    ,{
        path: '/dictionaryPaizhaoshenqing',
        name: '申请牌照类型',
        component: dictionaryPaizhaoshenqing
    }
    ,{
        path: '/dictionaryPaizhaoshenqingYesno',
        name: '申请状态',
        component: dictionaryPaizhaoshenqingYesno
    }
    ,{
        path: '/dictionaryPaizhaozuanyiYesno',
        name: '申请状态',
        component: dictionaryPaizhaozuanyiYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }


    ,{
        path: '/cheliang',
        name: '车辆信息',
        component: cheliang
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/paizhaohuanbu',
        name: '牌照换补申请',
        component: paizhaohuanbu
      }
    ,{
        path: '/paizhaoshenqing',
        name: '牌照申请',
        component: paizhaoshenqing
      }
    ,{
        path: '/paizhaozuanyi',
        name: '牌照转移申请',
        component: paizhaozuanyi
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
