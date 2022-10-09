# HTML+CSS

1. 讲一下盒模型，普通盒子模型和怪异盒模型有什么区别

   有content padding border margin的一个盒子 

   标准盒子（content-box）总宽度等于内容加左右外边距加左右边框加左右内边距 是所有偏移值的综合

   怪异盒模型（border-box）的宽度是width加margin  width已经包含了content padding border

2. 语义化标签的优点

   1. 代码结构清晰

   2. 样式加载失败页面结构依旧清晰

   3. 方便根据语义渲染页面

   4. 有利于SEO

3. 块元素和行内元素的区别是什么 常见块元素和行内元素有哪些

   行内元素会在一条直线上排列 是同一行的 块元素各占据一行 垂直排列 

   块元素可以包含行内元素 行内元素不能包含块元素

   行内元素设置width无效height无效 margin上下无效 padding上下无效

   常见的块级元素：列表：dd dt dl caption  form表单 标题 水平线 列表 p div

   常见的行内元素： a b br i span input button img 后三种也是替换元素 可以设置宽高

4. HTML语义化标签有哪些

   header nav main article section aside footer title h1-h6 strong em p

5. 伪类和伪元素的区别是什么

   伪类：:link :visited :hover :active :focus :first-child

   伪元素：:: before :: after ::placeholder ::first-letter ::first-line

   伪元素本身不存在在DOM文档中 需要人为的去创建它，就算创建了为元素，也只是逻辑上存在 无法使用js去获取并改变他 使用：（css2）或：：（css3）声明

   伪类本身存在于DOM文档中 但是如果没有特别的去声明他 就看不到它 使用：声明

   伪元素只能同时使用一个 伪类可以使用多个

6. CSS如何实现垂直居中

   1. 如果是行内块 可以使用verticle-align：middle 使该元素和其兄弟元素的垂直中点对齐 （需按照最高的元素作为参考）
   2. 使用display：flex实现垂直居中 给父元素设置display：flex （如果要实现水平垂直居中 再给父元素设置justify-content） 子元素align-self：center
   3. 通过伪元素：：before实现 结合verticle-align实现
   4. 通过display：table-cell 父元素设置display：table 子元素设置display：table-cell
   5. 隐藏节点 使得隐藏节点的高度为剩余的一半
   6. 一直父元素高度通过transform实现垂直居中 给子元素设置position：relative 再通过top：50% translateY（-自身的一半）
   7. 子绝父相 其余同上
   8. 通过line-height

7. CSS常见选择器有哪些

   1. id #
   2. 类 .
   3. 标签 标签名
   4. 后代 空格
   5. 子 >
   6. 兄弟 ~
   7. 相邻兄弟 +
   8. 属性 [name = 'xxx']
   9. 伪类 :
   10. 伪元素 ::
   11. 通配符 *

8. CSS优先级如何计算

   标签内x,0,0,0    ID选择0,x,0,0  类，属性，伪类0,0,x,0    元素和伪元素  0,0,0x

   每个选择器出现的次数放在x的位置上 得出优先级  如果加了！important 优先级最高

9. 长度单位是px，em和rem的区别是什么

   px是固定像素，一旦设置了就无法因为适应页面大小而改变

   em和rem相对于px更有灵活性，是相对长度单位，意思是长度不是定死的，更适用于响应式布局

   em相对于其父元素来设置字体大小的，一般都是以<body>的font-size为基准 这样就会存在一个问题 进行任何元素设置都有可能需要知道他父元素的大小 而rem是相对于根元素<html>的，这样就意味着我们只需要在根元素确定一个参考值

   注意：媒体查询中使用rem   不要再多列布局中使用em或rem 改用%

   如果缩放会不可避免的导致要打破布局元素，不要使用em或rem

10. 讲一下flex弹性布局

   容器存在两根轴  主轴（main start 到main end）和交叉轴 （cross start 到cross end）

   默认沿主轴排列

   包括:**容器的属性**

      1. flex-direction  决定主轴的方向，即项目的排列方向 可能有四个值 row默认值，主轴为水平方向，起点在左端 row-reverse主轴为水平方向，起点在右端 column主轴为垂直方向，起点在上方 column-reverse主轴为垂直方向，起点在下方
      2. flex-wrap   决定一条轴线排不下该如何换行 可能有三个值 nowrap默认不换行 wrap换行，第一行在上方 wrap-reverse换行，第一行在下方
      3. flex-flow   是flex-direction属性和flex-wrap属性的简写形式 默认为 row nowrap
      4. justify-content  定义了在主轴上的对齐方式 可能有五个值  flex-start：默认左对齐  flex-end 右对齐  center 居中  space-between 两端对齐 项目之间的间隔都相等  space-around 每个项目两侧间隔相等  项目之间的间隔比边框大一倍
      5. align-items  (单行)定义了在侧轴上的对齐方式  flex-start 交叉轴的起点位置    flex-end交叉轴的终点    center 交叉轴的中点 baseline 项目的第一行文字基线对齐   stretch 默认值 如果项目未设置高度或设为auto ，将占满整个容器的高度
      6. align-content  交叉轴行对齐方式  多行  定义了在侧轴上的对齐方式  flex-start 每一行交叉轴的起点位置    flex-end 每一行交叉轴的终点    center 每一行交叉轴的中点 baseline 每一行项目的第一行文字基线对齐   stretch 每一行默认值 如果项目未设置高度或设为auto ，将占满整个容器的高度 space-between 每一行两端对齐，靠着容器上下壁，剩余空间平分 space-around 分散对齐，不靠容器壁，剩余空间在每个项目两侧平均分布

   **项目的属性**

   1. order 定义项目的排列顺序，数值越小，排列越靠前，默认为0

   2. flex-grow 定义项目的放大比例，默认为0，如果存在剩余空间也不放大

   3. flex-shrink 定义了项目的缩小比例，默认为0，即如果空间不足，该项目将缩小

   4. flex-basis属性 定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间，默认值为auto，即项目的本来大小

   5. flex属性  是flex-grow  flex-shrink  flex-basis 的简写，默认值为 0 1 auto 后两个属性可选

   6. align-self属性 允许单个项目与其他项目不一样的对齐方式，可覆盖align-items属性，默认值为auto，表示继承父元素的align-items属性，如果没有父元素，等同于stretch

7. 浮动塌陷问题的解决方法是什么

   1. 可以给父元素一个固定高度，但是当我们以后再需要加入元素时，还需要再修改，不方便
   2. 在浮动元素后面加一个div块，样式写clear：both
   3. 给父元素设置overflow：hidden 溢出隐藏，但是因为出发了BFC块级化格式上下文，就会按照BFC的规则渲染画面，BFC规则为   浮动的元素也参与计算高度
   4. 父元素也浮动，在确实需要的时候

   **如何实现BFC **

   1. 浮动元素，float除none以外的值
   2. 定位元素，position的值不是static 或者relative
   3. display为inline-block、table-cell、table-caption、table、table-row、table-row-group、table-header-group、table-footer-group、inline-table、flow-root、inlin-flex、grid、inline-grid
   4. overflow除了visible以外的值
   5. 根元素html就是一个BFC

8. position属性的值有哪些，各个值得含义是什么

   1. relative相对定位  不影响元素本身特性  不脱离文档流  没有定位偏移量时对元素无影响 z-index对其有效
   2. absolute绝对定位
   3. fixed固定定位
   4. static默认值
   5. sticky粘性定位

9. BFC IFC是什么

   1. BFC快格式化上下文，BFC是一个独立区域，它的内部元素都依照它的规则渲染，并且不会与BFC外部打交道，可以用来清除元素内部的浮动效果，防止垂直的margin重叠，防止margin溢出，左边顶宽右边自适应
   2. IFC行内格式化上下文，内联元素水平居中，内联元素垂直居中，段落展示

10. 渲染html的过程

    1. 浏览器解析html源码，创建一个dom树，
    2. 浏览器解析css代码，计算出最终的样式
    3. dom树加cssom 生成渲染树
    4. 根据渲染树渲染页面



# JS

1. 谈谈对原型链的理解

   js里所有的对象都有proto属性（对象、函数），指向构造该对象的构造函数的原型

   只有函数function才具有prototype属性，这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（这个对象叫做原型对象），原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数

   1. prototype是函数的原型对象，即prototype是一个对象，会被对应的`__proto__`引用
   2. 要知道自己的`__proto__`引用了哪个prototype，只需要看看是哪个构造函数构造了你，那你的`__proto__`就是那个构造函数的prototype
   3. 所有的构造函数的原型链最后都会引用Object构造函数的原型，即可以理解Object构造函数的原型是所有原型链的最底层，即Object.prototype.`__proto__`===null

2. js如何实现继承

   1. 原型链继承：将父类的实例作为子类的原型

      1. 是一种非常纯粹的继承关系，实例是子类的实例，也是父类的实例
      2. 父类新增原型方法\原型属性，子类都能访问
      3. 简单易于实现

      缺点：

      	1. 想为子类新增属性和方法，可以在构造函数中增加实例属性，如果要新增原型属性和方法，则必须放在new 实例之后
      	1. 无法实现多继承
      	1. 来自原型对象的所有属性被所有实例共享
      	1. 创建子类实例是，无法向父类构造函数传参

   2. 构造继承：使用父类的构造函数来增强子类实例

      1. 解决了子类实例共享父类引用属性的问题
      2. 创建子类实例时，可以向父类传递参数
      3. 可以实现多继承

      缺点：

      	1. 实例并不是父类的实例，只是子类的实例
      	1. 只能继承父类的实例属性和方法，不能继承原型属性方法
      	1. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

   3. 实例继承：为父类实例添加新特性，作为子类实例返回

      1. 不限制调用方式，不管是new子类() 还是 子类()  返回的对象具有相同的效果

      缺点：

      	1. 实例是父类的实例，不是子类的实例
      	1. 不支持多继承

   4. 拷贝继承：

      1. 支持多继承

      缺点：

      	1. 效率低，内存占用高（因为要拷贝父类的属性）
      	1. 无法获取父类的不可枚举的方法（不可枚举方法不能使用for in访问到）

   5. 组合继承 通过调用父类构造，继承父类的属性并保留传参的优点，然后用过将父类实例作为子类原型，实现函数复用

      1. 弥补了构造继承的缺陷，可以继承实例属性方法，也可以继承原型属性和方法
      2. 即是子类的实例，也是父类的实例
      3. 不存在引用属性共享问题
      4. 可传参，函数可复用

      缺点：调用了两次父类构造函数，生成了两个实例（子类实例将子类原型上的那份屏蔽了）

   6. 寄生组合继承  通过寄生的方式，砍掉父类的实例属性，这样，在调用两次父类的构造函数的时候，就不会初始化两次实例方法属性，避免组合继承的缺点

      缺点：实现较为复杂

3. js有哪些数据类型

   1. 基本数据类型: number string boolean bigint symbol null undefined
   2. 引用数据类型: Object

4. js有哪些判断类型的方法

   1. typeof()
   2. A instanceof B   检测当前实例是否隶属于某个类
   3. constructor 构造函数   a.constructor === Function(){}  // true
   4. hasOwnProperty 检测当前属性是否为对象的私有属性  obj.hasOwnProperty('属性名(k值)')
   5. isArray()判断是否为数组
   6. valueOf() 可以看到数据最本质的内容(原始值)
   7. Object.prototype.toString   最好的  Object.prototype.toString.call([value])

5. 如何判断一个变量是否是数组

   1. 使用instanceof运算符  arr instanceof Array

   2. 利用构造函数来判断它的原型是否为Array arr.constructor === Array

   3. 利用Array.isArray(arr)来判断是不是数组

   4. 利用Object.pprototype.toString.call(arr) 和[object Array]对比 返回true说明是数组

   5. 通过对象的原型方法判断 arr.`__proto__` === Array.prototype

   6. 通过Object.getPrototypeOf(arr) 来判断是否为数组类型

   7. 通过Array.prototype.isprototypeOf(arr)

6. null和undefined的区别

   1. null表示为空，代表此处不应该有值的存在，一个对象可以是null，代表是个空对象，而null本身也是对象
   2. undefined 表示不存在，js是一门动态类型语言，成员除了表示存在的空值以外，还有可能根本不存在，就是undefined的含义
   3. null的出现场景
      1. 用作函数的参数，表示该函数的参数不是对象
      2. 用作对象原型链的终点

   4. undefined的出现场景
      1. 函数没有返回值时，默认返回undefined
      2. 变量已经声明，但是没有赋值
      3. 对象中没有赋值的属性，该属性的值为undefined
      4. 调用函数时，应该提供的参数没有提供，该参数等于undefined

7. call bind apply的区别

   1. 相同点，call apply bind 都是js函数公有的内部方法，都是重置函数的this，改变函数的执行环节
   2. 不同点，bind是创建一个新函数，而call和apply是用来调用函数，call和apply的作用一样，只不过call为函数提供的参数是一个一个罗列出来，而apply为函数提供的参数是一个数组

8. 防抖节流的概念，实现防抖节流

   1. 防抖	
      1. 一定时间内，频繁的出发时间，事件处理函数只执行最后一次，

      2. 实现方法：定义一个全局变量存储setTimeOut，这样可以实现掩饰其规定的时间内只触发一次事件处理函数本应该执行的功能代码

   2. 节流
      1. 一定时间内，频繁触发事件，事件处理函数只执行一次

      2. 实现方法，声明一个全局变量记录事件的触发事件，每一次触发事件调用事件处理函数都获取当前时间，比较当前时间和上一次触发事件的时间间隔，如果大于节流的时间，就执行功能代码，然后把当前时间赋值给全局定义的变量，当作下一次触发事件时比较的对象

9. 深浅拷贝的区别，如何实现深浅拷贝

   1. 深拷贝和浅拷贝都是只针对引用数据类型，浅拷贝会对对象逐个成员依次拷贝，但只复制内存地址，而不复制对象本身，新旧对象成员还是共享同一内存，深拷贝会创建一个一摸一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象
   2. 浅拷贝只赋值对象的一层属性，而深拷贝会对对象的属性进行递归赋值

   * 浅拷贝的实现
     * Object.assign() 可以把原对象自身的任意多个可枚举属性拷贝给目标对象，然后返回目标对象。但是Object.assign()进行的是浅拷贝，拷贝的是对象属性的引用，不是对象本身
     * Array.prototype.concat()和Array.prototype.slice()均为Array原型上的方法，只适用于Array，和Object.assign()一样，都是对第一层属性依次拷贝，如果第一层的属性是基本数据类型就拷贝值，如果是引用数据类型就拷贝内存地址
   * 深拷贝的实现
     * JSON.parse(JSON.stringfy())  用JSON.stringfy()将对象转化成字符串，在用JSON.parse()把字符串解析成对象  缺点是：这种方法可以实现数组和对象和基本数据类型的深拷贝，但不能处理函数，因为JSON.stringfy()方法是将一个javascript值转换成一个JSON字符串，不能接收函数，其他影响如下：
       * 如果对象中有时间对象，那么用该方法拷贝之后的对象中，时间是字符串形式，而不是事件对象
       * 如果对象中有RegExp，Error对象，那么序列化结果是空
       * 如果对象中有函数或者undefined，那么序列化的结果会把函数或undefined丢失
       * 如果对象中有NAN，infinity，-infinity 序列化的结果会变成null
       * JSON.stringfy()只能序列化对象的可枚举自有属性，如果对象中有是构造函数生成的，那么拷贝后会丢弃对象的constructor
       * 如果对象中存在循环引用也无法正确实现深拷贝 

10. 对比一下var const let

    1. let声明的变量，他的作用域为该语句所在的代码块内，不存在变量提升，值可变
    2. const声明的变量，它的作用域在该语句所在的代码块内，不存在变量提升，值不可变
    3. var声明的变量，它的作用域为该语句所在的函数内，存在变量提升，值可变

11. 箭头函数和普通函数的区别是什么

    1. 外形不同，箭头函数是用箭头定义，普通函数没有
    2. 箭头函数全都是匿名函数：普通函数可以有匿名函数，也可以有具名函数
    3. 箭头函数不能够用于构造函数，普通函数可以用于构造函数，一次创建对象实例
    4. 箭头函数中this指向不同，在普通函数中，this总是指向调用它的对象，如果用做构造函数，它指向创建的对象实例
    5. 箭头函数不具有arguments对象，每一个普通函数调用后都具有一个arguments对象，用来存储实际传递的参数，但是箭头函数没有此对象
    6. 箭头函数不具备prototype原型对象，箭头函数不具有super 不具有new.target

12. 使用new创建对象的过程是什么样的

    1. 创建一个新对象
    2. 使新对象的隐式原型`__proto__`指向原函数的显式原型prototype
    3. 改变this指向（指向新的obj）并执行该函数，执行结果保存起来作为result
    4. 判断执行函数的结果是不是null或undefined，如果是则返回之前的新对象，如果不是则返回result

13. this指向系列问题

    1. 全局环境下的this指向

       始终指向全局对象window

    2. 函数内的this

       严格模式下

       ``` javascript
       function test(){
        'use strict'
        console.log(this)
       }
       test(); // undefined
       window.test(); // window
       ```

       非严格模式下

       ``` javascript
       function test(){
       console.log(this)
       }
       test(); // window
       window.test(); // window
       ```

       

    3. 对象中的this

       对象内部方法的this指向调用这些方法的对象，也就是谁调用就指向谁 ，多层嵌套的对象，内部方法的this指向离被调用函数最近的对象

    4. 箭头函数中的this

       箭头函数没有this ，他会绑定最近的非箭头函数作用域中的this，首先从她的父级作用域找，如果父级作用域还是箭头函数就再往上找，一层一层知道找到this的指向

    5. 构造函数中的this

       构造函数中的this是指向实例的

    6. 原型链中的this

       1. 看是谁调用
       2. 进行this替换
       3. 基于原型链确认结果

14. 谈谈闭包的理解 什么是闭包 闭包的应用场景 闭包的缺点 如何避免闭包

    1. 有函数嵌套  内部函数引用外部作用域的变量参数  返回值时函数  创建一个对象函数，让其长期驻留
    2. 闭包的应用场景：私有变量：js中属性都是公有的，任何在函数中定义的变量，都可以认为是私有变量，因为在函数的外部不能访问这些变量，可以在函数内部创建一个闭包，闭包可以通过自己的作用域链访问这些变量，所以我们就可以利用闭包，创建一个用于访问私有变量的公共方法
    3. 缺点，闭包使用过多会占用较多内存，容易造成内存泄露

15. ES6新特性

    1. let const var 的区别
       1. 
    2. 数组新增扩展
    3. 对象新增扩展
    4. 函数新增扩展
    5. set和map
    6. promise
    7. generator
    8. proxy
    9. module
    10. decorator

16. js事件循环

    js是单线程运行的，再执行代码的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行，如果遇到了异步事件，js引擎并不会一直等待其返回结果，而是会讲这个事件挂起，继续执行执行栈中的其他任务，当当前执行栈的事件执行完毕后，js引擎会前判断任务队列中是否由任务可以执行，如果有就将微任务队首的事件压入队列，当微任务队列中的任务都执行完毕后再去判断宏任务队列中的任务

    微任务包括：promise的回调，监听dom的mutationObserver

    宏任务包括：script脚本，settimeout，setinterval，setimmediate一类的定时事件，还有IO操作ui渲染等

    Js 是单线程运行的, 异步要基于回调来实现

    而 event loop 就是异步回调的实现原理

    JS 如何执行: 一行行执行, 先把同步执行完再执行异步

    同步代码, 一行一行放在 Call Stack 执行

    遇到异步, 先记录下, 等待时机(定时, 网络请求等)

    时机到了, 移动到 Callback Queue

    Callstack 为空(同步代码执行完), Event Loop开始工作

    轮询查找 Callback Queue, 如有则移动到 Call Stack 执行

    继续轮训查找(永动机一样)

17. 谈谈对promise的理解

    promise是异步编程的一种方案，解决了地狱回调的问题，是一种链式调动的方，

    Promise简单来说就是一个容器，里面保存着某个未来才会结束的事件的结果，

    promise是一个对象，从他身上可以获取异步操作的最终状态，Promise是一个构造函数，对外提供统一的api，自己身上有all，reject，resolve等方法，原型上有then，catch等方法

    promise有三个状态：pending  resolved  rejected，

    promise是对回调函数的一种封装，是对异步编程的一种改进（传统解决异步编程的方式是通过回调函数，而回调嵌套过多，会导致回调地狱，）可以通过Promise将自己的程序以同步的方式表达出来，从而解决代码臃肿及可读性差的问题，

    Promise的实例可以看作是一个状态展示器，我们可以拥有状态及改变状态的业务通过Promise来实现，然后再结合async function进一步提高程序的可读性和易于维护性，开发中遇到的  得到一个函数的执行结果后，在进行后续操作，通过Promise就可以很好的解决，

    Promise虽然解决了开发中的很多问 题，但是也不能无脑用，比如Promise.all   一个不成全不成    我个人在开发中只会在必须在全部加载完成才能继续向下的场景中实现，比如图片的预加载，基于定时器的异步，封装ajax请求

    

18. 栈和队列

        栈后进先出  只能在栈顶进行操作
        
        队列 先进先出  只能在对头进行删除，队尾插入

19. 字符串倒置

    1. 



