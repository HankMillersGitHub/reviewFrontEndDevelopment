// 引入Vue和App组件
import Vue from 'vue'
import App from './App'
// 引入插件
import plugins from './plugins'
// 关闭生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(plugins, 1, 2, 3)

// 创建vm
new Vue({
    el: "#app",
    render: h => h(App)

})