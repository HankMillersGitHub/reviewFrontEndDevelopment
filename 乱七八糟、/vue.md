# Vue

# vuex

### vuex 工作流程

1. 用户通过dispatch触发actions
2. actions(支持异步操作)通过commit提交到mutations(支持同步操作)
3. mutations改变state
4. state改变重新渲染组件

### vuex是什么，怎么使用，哪个工程场景使用

vuex是一个专门为vue应用程序开发的状态管理插件

当项目遇到以下两种场景时

```
1. 多个组件依赖于同一状态
1. 来自不同组件的行为需要统一变更同一状态
```

解决的问题是多个视图以来同一个状态，来自不同视图的行为需要变更同一状态，适用于中大型的单页面应用

### vuex有几种属性

1. state  存放公共数据的地方
2. getter  根据业务场景处理返回的数据
3. mutation  唯一修改state的方法，修改过程是同步的
4. action  异步处理  通过分发操作触发mutation
5. module  将store模块分割，减少代码臃肿

### vue中的ajax请求代码应该写在组件的methods中还是vuex的actions中

如果请求来的数据不被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex的state里

如果被复用，很大几率上需要写在vuex的action中

### 页面刷新后vuex的state数据丢失怎么解决

就是放在localStorage或者就是sessionStorage，或者借用辅助插件vuex-persistedstate

### 使用vuex的优势是什么

vuex中的所有功能都能够通过其他的方式进行实现，只不过vuex对这些方法进行了整合处理，使用起来更加便捷，同时也易于维护

### vuex中的状态储存在哪里

储存在state中，改变vuex中的状态的唯一途径就是显式的commit mutation

### vuex中状态是对象时，使用时要注意什么

因为对象是引用类型，复制后改变属性还是会影响原始数据，这样会改变state中的状态，是不允许的，所以要先深度克隆

### 怎么在组件中批量使用vuex中的state状态

使用mapState辅助函数，利用对象展开运算符将state汇入computed对象中

### vuex中要从state中派发一些状态出来，且多个组件使用他，该怎么做

使用getter属性，相当vue中的计算属性computed，只有原状态发生改变派生状态才会改变

getter接受两个参数，第一个是state，第二个是getters

然后在组件中可以用计算属性computed通过this.$store.getter.total这样来访问这些派发状态

### vuex中划分模块的好处

state更为容易管理保证了store完整的状态数，又避免了相互之间的state冲突

### vuex中的store特性

Vuex就是一个仓库，仓库里放了很多对象，其中state就是数据存放地

state中存放的数据是响应式的，vue组件从store读取数据，若是store中的数据发生改变，依赖这项数据的组件也会发生更新

通过mapstore把全局的state和getter映射到当前组建的computed中

### vuex怎么知道state是通过mutation修改还是外部直接修改的

通过$watch建通mutation中的commit函数中_committing是否为true

### vuex中action和mutation有什么共同点

第二参数都可以直接接受外部提交来的参数

```this.$store.dispatch('ACTION_NAME',data)和this.$store.commit('SET_NUMBER',10)```

### vuex中action通常是异步的，如何知道action什么时候结束

在action函数中返回promise然后再提交时候用then处理

### vuex中有两个action，分别是actionA和actionB，其内部都是异步操作，在actionB要提交actionA，需要在A处理结束在处理其他操作，怎么实现

利用ES6的async和await来实现

``````
actions:{
	async actionA({commit}){
	
	}
	async actionB({dispatch}){
		await dispatch('actionA')
	}
}
``````

### 在模块中，getter和mutation接受的第一个参数是state，是全局还是木块的

第一个参数是模块的state，也就是局部的state

### 在v-model上怎么使用vuex中state的值

通过computed计算属性转换 

### vuex的严格模式是什么，有什么作用，怎么开启

在严格模式下，无论何时发生了状态变更，且不是有mutation函数引起的，将会抛出错误，这能保证所有的状态变更都能被调试工具跟踪到

在vuex.stroe构造器选项中开启，`strict:true`



### axios

1. 特性

   1. 从浏览器创建XMLHttpRequests
   2. 从node.js创建http请求
   3. 支持promiseApi
   4. 拦截请求和响应
   5. 转换请求和响应数据
   6. 自动转换JSON数据
   7. 客户端支持防御XSRF

2. axios为什么既能在浏览器环境运行又能在服务器环境运行

   axios在浏览器端使用XMLHttpRequest对象发送ajax请求，在node环境使用http对象发送ajax请求。XMLHttpRequest是一个Api，他为客户端提供了在客户端和服务器之间传输数据的能力，process对象是一个global（全局变量），提供有关信息，控制当前的nodejs进程。通过判断XMLHttpRequest和process这两个全局变量来判断程序的运行环境，从而在不同的环境提供不同的http请求模块，实现客户端和服务端程序的兼容

3. axios的特点

   1. axios是一个基于promise的http库，支持promise所有的api
   2. 它可以拦截请求和响应
   3. 他可以转换请求数据和响应数据，并对响应回来的内容自动转换成JSON类型的数据
   4. 安全性更高，客户端支持防御SXRF

4. axios的祥光配置属性

   1. url是用于请求服务器的url
   2. method是创建请求时使用的方法，默认是get
   3. baseURL将自动加载在url前面，除非url是一个绝对URL
   4. transformRequest允许在向服务器发送前，求该请求数据，只能用在‘put\post\patch’这几个请求方法
   5. headers是即将被发送的自定义请求头
   6. params是即将与请求一起发送的url参数，必须是一个五个是对象或者URLSearchParams对象
   7. auth表示使用HTTP基础验证，并提供票据，这将设置一个Authorization头，覆写掉原有的，使用header设置的自定义Authorization
   8. proxy定义代理服务器的主机名称和端口

### vue响应式原理

Vue 响应式指的是：当组件的data发生变化时，立即触发视图更新
原理：Vue采用数据劫持结合发布者订阅者模式的方式来实现数据的响应式，在getter中收集依赖，在setter中触发依赖，即  吧用到该数据的地方收集起来，然后等属性发生变化时，把之前收集好的依赖循环触发一遍
Vue2 通过Object.defineProperty来劫持数据的getter setter，获取属性值会触发getter方法，设置属性值会触发setter方法，在setter方法中调用dom的方法来实现视图的更新

### object.defineProperty的缺点

1. 只能劫持对象的属性，因此我们需要对每个对象的每个属性进行遍历，如果属性值也是对象，那么就需要深度遍历，数据很大时，大量的递归会导致调用栈溢出
2. 不能监听对象的新增属性和删除属性
3. 无法正确的监听数组的方法，无法监控到数组下标的变化，当直接通过数组下标给数组设置值时，不能实时响应

Vue3.0 是通过Proxy实现的数据双向绑定，Proxy是ES6中新增的一个特性，实现的过程是在目标对象之前设置了一层拦截，外界对该对象的访问，都必须先通过这层拦截。因此提供了一种机制，可以对外界的访问进行过滤和改写
Proxy只需要做一层代理就可以监听同级结构下的所有属性变化，当然对于深层结构，递归还是需要进行的，此外Proxy支持代理数组的变化

Proxy对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义，（如属性查找，赋值，枚举，函数调用等）
用法：ES6原生提供Proxy构造函数，用来生成Proxy实例  const p = new Proxy(target,handler)
target使用Proxy包装的被代理对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
handler 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理p的行为

### SPA单页面的理解，它的优缺点分别是什么

SPA仅在页面初始化的时候加载对应的html css js 一旦加载完成，不会因为用户操作而进行页面重新加载或跳转，利用路由机制实现html内容的变化，UI与用户的交互，避免页面的重新加载
优点：1.用户体验好，内容的改变不需要重新加载获赠个页面，避免了不必要的跳转和重复渲染

2. 基于上面一点。SPA相对服务器压力比较小
3. 前后端职责分离，架构清晰，前端进行逻辑交互，后端负责数据处理
   缺点：
4. 初次加载耗时多，为实现单页web应用功能及其显示效果，需要在加载页面的时候将js css同一家在，部分页面按需加载
5. 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有页面的切换需要自己建立堆栈管理
6. SEO难度较大，由于所有的内容都在一个页面中动态替换显示，所以在SEO上其有着天然的劣势

### v-show 和 v-if 区别

 v-if是真正的条件渲染，因为他会确保在切换过程中条件块内的事件监听器和子组件适当的被销毁和重建，也是惰性的，如果在初始渲染时条件为假，则什么也不做 ，知道条件第一次变为真时，才会开始渲染
 v-show不管初始条件是什么，元素总是会被渲染，而且只是简单的基于CSS的display属性进行切换
 v-if适合运行时很少改变条件，不需要频繁切换条件的场景，v-show则适用于需要非常频繁切换条件的场景

### class 和 style如何动态绑定

class 可以通过对象语法和数组语法进行动态绑定：

1. 对象语法:`<div :class="{active:isActive,'text-danger':hasError}"></div>`
2. 数组语法:`<div :class="[isActive>active:'',errorClass]"></div>`
style也可以通过对象语法和数组语法进行动态绑定：
1. 对象语法：`<div :style="{color:activeColor,fontSize:fontSize+'px}"></div>`
2. 数组语法：`<div :style="[styleColor,styleSize]"></div>`

### 怎样理解Vue的单向数据流

所有的prop都使得其父子prop之间形成了一个单项下行绑定，父级prop的更新会向下流动到子组件中，但是反过来则不行，这样会防止从子组件意外改变父级组件的状态，从而导致应用的数据流难以理解
每次父级组件发生更新是，子组件中所有的prop都将会刷新为最新的值，这意味着不应该在一个子组件内改变prop，如果这样做了，vue会在控制台发出警告，子组件想修改时，只能通过$emit派发一个自定义事件，父组件接收到后，由父组件修改，
有两种常见的试图改变一个prop的情形

1. 这个prop用来传递一个初始值，这个子组件接下来希望将其作为一个本地的prop数据来使用，在这种情况下，最好定义一个本地的data属性并将这个prop用作其初始值
2. 这个prop以一种原始的值传入并且需要进行转换，在这种情况下，最好是用这个prop的值来定义一个计算属性



### computed 和 watch的区别和运用的场景
computed时计算属性，依赖其他属性值，并且computed的值有缓存，只有他依赖的属性值发生变化啊，下一次获取computed的值才会重新计算
watch更多的是观察的作用，类似于某些数据的监听回调，每当监听的数据发生变化时都会执行回调进行后续操作   实现深度监听  deep：true
需要数值计算，并且以来其他数据，适合用computed，可以利用computed的缓存特性，避免每次获取值时，都要重新计算
当我们需要在数据变化时执行异步操作或开销较大的操作时，应该使用watch，使用watch选项允许我们执行异步操作。限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态，这些都是计算属性无法做到的

### vue为什么不能检测数组和对象的变化
object.definproperty定义对象的get和set方法，存在缺陷，就只能监听到对象内已有的值，

### 直接给一个数组项赋值，vue能检测到变化嘛
由于js的限制，vue不能检测到：利用索引直接设置一个数组项时   修改数组长度时
但是vue提供了操作方法

1. vue.set
   Vue.set(vm.items,indexOfitem,newVlaue)
   Vue.$set(vm.items,indexOfitem,newVlaue)
   vm.item.splice(indexOfitem,1,newVlaue)
2. Array.prototype.splice
   vm.items.splice(newLength)

### 谈谈对Vue生命周期的理解
1. beforeCreate:创建之前,此时的data和methods中的数据还没有初始化
2. created:创建完毕,data中有值,但是并未挂载
3. beforeMount:可以发起服务端请求,取数据
4. mounted: 此时可以操作DOM
5. beforeUpdate:更新前
6. updated:更新后
7. beforeDestory:实例被销毁前,可以手动销毁一些方法
8. destory:销毁后

###  Vue的父组件和子组件生命周期钩子函数执行顺序

1. 加载渲染过程  渲染过程由内向外
   父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子Created -> 子beforeMounted -> 子 mouted -> 父mounted
2. 子组件更新过程
   父 beforeUpdate -> 子 beforeUpdate -> 子updated -> 父 updated
3. 父组件更新过程
   父beforeUpdate -> 父 updated
4. 销毁过程   销毁过程由外向内
   父beforeDestory -> 子 beforeDestory -> 子destoryed -> 父 destoryed

### 在那个生命周期内调用异步请求
可以在钩子函数 created，beforeMount Mounted 中进行调用，因为在这三个钩子函数中，data已经创建，可有将服务端返回的数据进行赋值，但是我更喜欢在created钩子函数中掉用异步请求，因为在created钩子函数中调用异步请求：能更快的获取到服务端数据，减少页面的loading事件
ssr不支持beforeMount mounted钩子函数，所以放在created中有助于一致性

### 在什么阶段才能访问操作DOM
在mouted被调用之前，vue已经将编译好的模板挂载到页面上，所以在mounted中可以访问操作DOM

###  父组件可以监听到子组件的生命周期嘛
比如有父组件parent和子组件child，如果父组件监听到子组件挂在mounted就做一些逻辑处理，
    <child @mountec="doSomthing" />
    this.$emit("mounted")
    需要手动通过$emit触发父组件的事件，更简单的方式，可以在父组件中引用子组件时，通过@hook来监听，
    <child @hook:mounted="doSomthing" />
    this.$emit("mounted")
    @hook方法不仅仅可以监听mounted，其他的生命周期事件，created updated等都可以监听

### 谈谈对keep-alive的了解
是vue内置的一个组件。可以使被包含的组件保留状态，避免被重新渲染。
一般结合路由和动态组件一起使用，用于缓存组件
提供include和exclude属性，两者都支持字符串或正则表达式，include表示只有名称匹配的组件会被缓存，exclude表示任何名称匹配的组件都不会被缓存， exclude的优先级会比include更高
对应两个钩子函数，activated和deactivated，当组件被激活时，出发钩子函数activated，当组件被移除时，触发钩子函数deactivated

### 组件中的datd为什么是一个函数
因为组件是用来复用的 ，而js里对象是引用关系，如果组件中data是一个对象，那么这样作用域没有隔离，子组件中的data属性值会相互影响，如果组件中data选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的data属性值不会相互影响，而new Vue实例，不会被服用，所以不存在引用对象的问题

### v-model的原理
v-model分别利用了v-bind来绑定value值，用v-on绑定input事件，通过$event这个事件对象获取到最新的输入值，然后把新值赋值给旧值，完成双向数据绑定

### 组件间通信有哪几种方式

1. props / $emit 父子通信
2. ref 与$parent\$children 父子通信
   ref 如果在普通的dom元素上使用，引用指向的就是dom元素，如果用在子组件上，引用就只想组件实例
   $parent/$children 访问父/子实例
3. EventBus  （$emit\$on） 父子  隔代 兄弟通信
   空vue实例作为中央时间总监，用它来触发事件或监听事件，从而实现任何组件间的通信，包括父子，隔代，兄弟组件
4. $attrs/$listeners 使用隔代组件通信
   $attrs：包含了父作用域中不被props所识别的特性绑定(class和style除外)，当一个组件没有生命任何prop时。将父作用域的绑定通过v-bind：$attrs传入内部组件  配合inheirAttrs选项一起使用
   $listeners:包含父作用域中的v-on事件监听器，它可以通过v-on=$listeners传入内部组件
5. provide/inject 隔代组件通信

##  vuex

vuex是一个专为vue应用程序开发的状态管理模式，每一个vuex应用的核心就是store，store基本上就是一个容器，包含着应用中大部分的state

1. vuex的状态存储是响应式的，当vue组件从store中读取状态的时候，如果store中的状态发生改变，那么相应的组件也会相应的得到高效的更新
2. 改变store中的状态的唯一途径就是现实的提交mutation，这样使得我们可以方便的跟踪每一个状态的变化
   主要包括以下几个模块
3. state 定义了应用状态的数据结构，可以在这里设置默认的初始状态
4. getter 允许组件从store中获取数据，mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性
5. mutation 是唯一更改store中状态的方法，且必须是同步函数
6. action 用于提交mutation，而不是直接变更状态，可以包含任意异步操作
7. module 允许将单一的store拆分为多个store且同时保存在单一的状态树中

### Vue SSR
SSR大致意思就是vue在客户端将标签渲染成整个html片段的工作在服务端完成，服务端形成的html片段直接返回给客户端，这个过程就叫服务端渲染（SSR）
优点：

1. 更好的SEO，因为spa页面的内容是通过ajax获取的，而搜素引擎爬取工具并不会等待ajax异步完成后再抓取内容，所以在SPA中是抓取不到页面通过ajax获取到的内容的，而SSR是直接由服务端返回已经渲染好的页面，数据已经包含在页面中，所以爬虫可以直接抓取渲染好的页面
2. 更快的内容到达时间，首屏加载更快，SPA会等待所有的vue编译后的js文件都下载完成后，才开始进行页面的渲染，文件下载需要等待一定的时间，所以首屏渲染需要一定的时间，SSR直接由服务端渲染好的页面直接返回显示，无需等待下载js文件再渲染，所以SSR有更快的内容到达时间
   缺点：
3. 更多的开发条件显示，例如：服务端渲染只支持beforeCreate和created两个钩子函数，会导致一些外部扩展库需要特殊处理，才能在SSR程序中运行，并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序SPA不同，需要处于Node.js server运行环境
4. 更多的服务器负载：再node中渲染完整的应用程序，显然回避仅仅提供静态文件的server更占用cpu资源，所以如果程序是一个高流量的环境，要准备相应的服务器负载，并采用明智的缓存策略

### Vue-Router路由模式有几种

1. hash  使用URL hash值作为路由，支持所有浏览器，包括不支持html5 history api的浏览器
2. history  依赖html5 history api 和服务器配置
3. abstract  支持所有js运行环境，比如node服务器端，如果发现没有浏览器的api，路由会自动强制进入这个模式

### this.$router和this.$route的区别

1. this.$router是一个全局路由对象，包含了很多属性和对象，任何页面都可以调用其push(),replace(),go()等方法
2. this.$route 表示当前路由对象，每一个路由都会有一个route对象，是一个局部对象，可以获取相应的name path params query等属性

### Vue-Router常用的hash 和 history路由模式的实现原理

1. hash的实现原理
   早期的前端路由是基于location.hash实现的，原理就是location.hash 就是URL井号后面的内容
   hash路由的实现主要是基于
   1. url中的hash值只是客户端的一种状态，也就是说，当向服务器发出请求时，hash部分不会被发送
   2. hash值的表现，都会在浏览器的访问历史中增加一个记录，所以我们能通过浏览器的回退，前进按钮控制hash的切换
   3. 可以通过a标签，并设置href属性，当用户点击标签后，url的hash值会发生改变，或者使用js来对location.hash进行赋值。改变url的hash值。
   4. 可以用hashchange事件来监听hash的变化，从而对页面进行跳转
2. history
   h5提供了History api来实现url的变化，其中最主要的api有 history.pushState() history.replaceState() 这两个api可以在不刷新的情况下，刷新浏览器的历史记录，唯一不用的是，pushstate是新增一个历史记录，后者是直接替换当前的历史记录
   window.history.pushState(null,null,path)
   window.history.replaceState(null,null,path)
   history路由实现主要是基于
   1. 通过pushState和replaceState来实现url的变化
   2. 用popState事件监听url的变化，从而对页面进行跳转
   3. history.pushState()或history.replaceState()不会触发popState事件，这是我们需要手动触发页面跳转

###  什么是MVVM
是一种软件架构设计模式，它的出现促进了前后端分离，核心是viewModel层，类似一个中转站，负责转换model中的数据对象来让数据变得更加容易管理和使用，向上和视图层双向数据绑定，向下又和model层通过接口请求进行数据交互，
1.view层
    是视图层，也就是用户界面，用html和css构建

2. model层
   数据模型，指后端进行各种业务逻辑和数据操控，对于前端来说就是后端提供的api接口
3. viewMOdel层
   viewModel是由前端开发人员组织生成和维护的视图数据层，在这一层，前端开发对从后端获取的model数据进行转换处理，做二次封装，已生成符合View使用的视图数据模型  封装出的数据包括视图的状态和行为，而model层的数据模型是只包含状态的
   MVVM实现了双向绑定，viewModel的内容会实时展现在view层，不需要再操作dom更新视图 只需要维护viewModel
