/*
  此文件是本项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入app组件
import App from './App.vue'
// 关闭Vue的生产依赖
Vue.config.productionTip = false

/*
  !关于不同版本的Vue
    1. Vue.js与vue.runtime.xxx.js的区别
      1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器
      2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能 没有模板解析器
    2. 因为Vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数收到的createElement函数去指定具体内容
    
*/

// 创建Vue实例对象---vm
new Vue({
  // 挂载的第一种写法
  el: '#app',
  // 完成了将app组件放入容器中
  render: h => h(App),
  // render(createElement) {
  //   return createElement('h1', '马中豪')
  // }
})//.$mount('#app') // // 挂载的第二种写法
