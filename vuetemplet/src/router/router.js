import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/page/index.vue'
import login from '../login.vue'
import fault from '../404.vue'
import page1 from '../views/page/page1.vue'
import page2 from '../views/page/page2.vue'
import pagen from '../views/page/pagen.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      /*
      * 登录页面
      * 时间:2017-07-12
      * 负责人：dingwang
      * */
      path: '/',
      name: 'login',
      component: login
    },
    {
      /*
       * 主页面
       * 时间:2017-07-13
       * 负责人：dingwang
       * 设想这下面放嵌套路由
       * */
      path: '/index',
      name: 'index',
      component: index,
      children: [
        /*
         * page1页面
         * 时间:2017-07-13
         * 负责人：dingwang
         * */
        {
          path: 'page1',
          name: 'page1',
          component: page1
        },
        /*
         * page2页面
         * 时间:2017-07-13
         * 负责人：dingwang
         * */
        {
          path: 'page2',
          name: 'page2',
          component: page2
        },
        /*
         * pagen页面
         * 时间:2017-07-13
         * 负责人：dingwang
         * */
        {
          path: 'pagen',
          name: 'pagen',
          component: pagen
        }
      ]
    },
    {
      /*
       * 404页面
       * 时间:2017-07-12
       * 负责人：dingwang
       * */
      path: '/404',
      name: 'fault',
      component: fault
    }
  ]
})
