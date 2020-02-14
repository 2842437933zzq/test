import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'

import axios from 'axios'

import VueAxios from 'vue-axios'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


//从vant组件库导入组件
import { 
  Field,
  Button,
  CellGroup,
  Toast,
  tabbar,
  TabbarItem,
  Icon,
  Swipe, 
  SwipeItem,
  Row, 
  Col,
  Tab,
  Tabs,
  Lazyload,
  NavBar,
  Search,
  Image,
  SubmitBar,
  Loading
  

} from 'vant'

//根据屏幕适配rem
import 'lib-flexible/flexible'

Vue.use(VueAxios, axios)

//全局注册组件
Vue
  .use(Field)
  .use(Button)
  .use(CellGroup)
  .use(Toast)
  .use(tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
  .use(Tab)
  .use(Tabs)
  .use(NavBar)
  .use(Lazyload)
  .use(Search)
  .use(Image)
  .use(SubmitBar)
  .use(Loading)

 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
