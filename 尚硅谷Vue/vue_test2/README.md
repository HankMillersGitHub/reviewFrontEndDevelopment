# 笔记
## 脚手架文件结构
    |-- .gitignore:git版本管制忽略的配置
    |-- babel.config.js：babel的配置文件
    |-- package-lock.json：包版本控制文件
    |-- package.json：应用包配置文件
    |-- README.md：应用描述文件
    |-- node_modules
    |-- public
    |   |-- favicon.ico：页签图标
    |   |-- index.html：主页面
    |-- src
        |-- App.vue：汇总所有组件
        |-- main.js：入口文件
        |-- assets：存放静态资源
        |   |-- logo.png
        |-- components：存放组件
            |-- Boss.vue
            |-- Bro.vue
            |-- HelloWorld.vue


## 关于不同版本的Vue：
- vue.js与vue.runtime.xxx.js的区别
    1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器
    2. vue.runtime.xxx.js是运行版的Vue，只包含核心功能
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去制定具体内容


## vue.config.js配置文件
> 使用vue inspect > output.js 可以查看到vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh


## ref属性
    1. 被用来给元素或子组件注册引用信息（id的替代者）
    2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象VC
    3. 使用方式：打标识：<h1 ref='xxx'>...</h1>或<Boss ref='xxx'></Boss>
        获取：this.$refs.xxx

## 配置项props
    功能:让组件接受外部传过来的数据
        (1).传递数据
            <Demo name='xxx'/>
        (2).接收数据:
            第一种方式(只接收):
                props:['name']
            第二种方式(限制类型):
                props:{
                    name:Number
                }
            第三种方式(限制类型,限制必要性,指定默认值):
                props:{
                    name:{
                        type:String, // 类型
                        default:'老王', // 默认值
                        require:true, // 必要性
                    }
                }
    备注:props是只读的,Vue的底层会监测对props的修改,如果进行了修改就会发出警告,如果业务需求确实需要修改,那么请复制props中的内容到data中一份,然后去修改data中的数据

## mixin(混入)
    功能:可以把多个组件公用的配置提取成一个混入对象
    使用方式:
        第一步:定义混合:例如
            {
                data(){......}
                methods:{......}
                ......
            }
        第二步:使用混合:例如
            (1).全局混入:Vue.mixin(xxx)
            (2).局部引入:mixins:['xxx','xxx']

## 插件
    功能:用于增强Vue
    本质:包含install方法的一个对象,install的第一个参数时Vue,第二个以后的参数时插件使用者传递的数据
    定义插件:
        对象.install = function(Vue,options){
            // 1. 添加全局过滤器
            Vue.filter(...)

            // 2. 添加全局指令
            Vue.directive(...)

            // 3. 配合全局混入
            Vue.mixin(...)

            // 4. 添加实例方法
            Vue.prototype.$myMethod = function(){....}
            Vue.prototype.$myProperty = xxx
        }
    使用插件:Vue.use()

##  scoped样式
    作用：让样式在局部生效，防止冲突 
    写法：<style scoped></style>

## 总结todolist案例
    1. 组件化编码流程：
        (1) 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
        (2) 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用 ：
            1) 一个组件在用：放在组件自身即可
            2) 一些组件在用：放在他们的共同父组件上(<span style="color:red">状态提升</span>)
        (3) 实现交互：从绑定事件开始
    2. props适用于：
        (1) 父组件 --> 子组件 通信
        (2) 子组件 --> 父组件 通信（要求父组件先给子组件一个函数）
    3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
    4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

## webStorage
    1. 存储内容一般支持5MB左右，不同浏览器可能不一样
    2. 浏览器端通过Window.sessionStorage 和 Window.sessionStorage属性来实现本地存储机制
    3. 相关API：
        1. xxxxStorage.setItem('key','value');
            该方法会接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新对应值
        2. xxxxStroage.getItem('key');
            该方法接收一个键名作为参数，返回键名对应的值
        3. xxxxStorage.removeItem('key');
            该方法接受一个键名作为参数，并把该键名从存储中删除
        4. xxxxStorage.clear();
            该方法会清空存储中的所有数据
    4. 备注
        1. sessionStorage存储的内容会随着浏览器窗口关闭而消失
        2. LocalStorage存储的内容，需要手动清除
        3. xxxxStorage.getItem(xxx) 如果xxx对应的value获取不到，那么getItem的返回值是null
        4. JSON.parse(null) 的结果依然是null

## 组件的自定义事件
    1. 一种组件间的通信方式，适用于：子组件 ===> 父组件
    2. 使用场景：A是父组件，B是子组件，B想传数据给A，那么就要在A中给B绑定自定义事件（事件回调在A）
    3. 绑定自定义事件
        1. 第一种方式，在父组件中：<Demo @mzh="test"/>或<Demo v-on:mzh="test"/>
        2. 第二种方式：在父组件中：<Demo ref="demo"/>.....mouted(){
            this.$refs.xxx.$on('mzh',this.test)
        }
        3. 若想让自定义事件只能触发一次，可以使用once修饰符，或者$once方法
    4. 触发自定义事件：this.$emit('mzh',数据)
    5. 解绑自定义事件：this.$off('mzh')
    6. 组件上也可以绑定原生DOM事件，需要使用native修饰符
    7. 注意：通过this.$refs.xxxx.$on('mzh',回调)绑定自定义事件时，回调要么配置在methods中，要么使用箭头函数，否则this指向会出问题

## 全局事件总线（globalEventBus）
    1. 一种组件之间通信的方式，适用于任意组件间通信
    2. 安装全局事件总线：
        `new Vue({
            ...
            beforeCreate(){
                Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm
            }
            ...
        })`
    3. 使用事件总线
        1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，时间的回调留在A组件自身
            `methods(){
                demo(data){...}
            }
            ...
            mounted(){
                this.$bus.$on('xxxx',this.demo)
            }
            `
        2. 提供数据：this.$bus.$emit('xxxx',数据)
    4. 最好在beforeDestory钩子中，用$off解绑当前组件所用到的事件

## 消息订阅与发布(pubsub)
    1. 一种组件间通信方式，适用于任意组件间通信
    2. 使用步骤：  
        1. 安装pubsub`npm i pubsub-js`
        2. 引入：`import pubsub from "pubsub-js"` 
        3. 接收数据：A组件想接受数据，则在A组件中订阅消息，订阅的回调留在A组件自身
            `methods{
                demo(data){
                    。。。。
                }
            }
            ....
            mounted(){
                this.pId = pubsub.subscribe('xxx',this.demo) //订阅消息
            }
            `
        4. 提供数据：`pubsub.publish("xxx",数据)`
        5. 最好在beforeDestory()钩子中，用pubsub.unsubscribe(pid)去<span style="color:red">取消订阅</span>

## 


