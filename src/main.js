import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toast from "./components/common/toast";
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Toast)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VueLazyLoad,{
  loading:require('./assets/image/消息.png')
})
//解决移动端的300毫秒的延迟
Fastclick.attach(document.body)

Vue.prototype.$bus =new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
