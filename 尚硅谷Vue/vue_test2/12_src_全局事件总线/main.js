// 引入Vue和App组件
import Vue from 'vue'
import App from './App'

// 关闭生产提示
Vue.config.productionTip = false

// 复杂的方式创建x
// const Demo = Vue.extend({});
// const d = new Demo()
// Vue.prototype.x = d;
// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this    // 安装全局事件总线
    }
})