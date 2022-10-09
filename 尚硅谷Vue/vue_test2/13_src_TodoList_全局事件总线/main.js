// 引入Vue和App组件
import Vue from 'vue'
import App from './App'

// 关闭生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
    // 创建全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
    }

})