// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Ueditor from "./components/ueditor/uregister"
import myItem from "./components/formItem"

/* 同级组件通信通道Bus ，将Bus注册为全局事件 */
const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
});

if(process.env.NODE_ENV === 'development') {
    require('./mock/index.js');                        // 假数据模拟
}

Vue.use(ElementUI);
Vue.use(Ueditor);
Vue.use(myItem);

Vue.config.productionTip = false

/* 定义请求 */
Vue.prototype.$post = function (url, data, type) {
    return axios({
        method: 'post', // 请求协议
        url: url, // 请求的地址
        data: arguments.length == 2 ? Qs.stringify(data) : data, // post 请求的数据
        timeout: 80000, // 超时时间, 单位毫秒
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
};
Vue.prototype.$get = function (url, params) {
    return axios({
        method: 'get', // 请求协议
        url: url, // 请求的地址
        params, // get 请求时带的参数
        timeout: 80000, // 超时时间, 单位毫秒
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
