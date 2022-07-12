# HTML

### html常用标签

| 标签   | 含义     | 备注                                                   |
| ------ | -------- | ------------------------------------------------------ |
| h1     | 一级标题 |                                                        |
| p      | 段落     |                                                        |
| br     | 换行     |                                                        |
| hr     | 水平线   | color 颜色   onshade 阴影   align 对齐方式   width宽度 |
| strong | 加粗     |                                                        |
| em     | 倾斜     |                                                        |
| del    | 删除线   |                                                        |
| u      | 下划线   |                                                        |
| sup    | 上标     |                                                        |
| sub    | 下标     |                                                        |

### table相关属性

| 属性        | 作用         | 备注               |
| ----------- | ------------ | ------------------ |
| width       | 宽度         |                    |
| height      | 高度         |                    |
| border      | 边框         |                    |
| bordercolor | 边框颜色     |                    |
| bgcolor     | 背景颜色     |                    |
| align       | 水平对齐方式 | 表格的水平对齐方式 |
| cellspacing | 单元格间距   |                    |
| cellpadding | 单元格内边距 |                    |

### tr行相关属性

| 属性    | 作用     | 备注 |
| ------- | -------- | ---- |
| height  | 高度     |      |
| bgcolor | 背景颜色 |      |
| align   | 水平对齐 |      |
| valign  | 垂直对齐 |      |

### td列相关属性

| 属性    | 作用     | 备注 |
| ------- | -------- | ---- |
| width   | 宽度     |      |
| height  | 高度     |      |
| bgcolor | 背景颜色 |      |
| align   | 水平对齐 |      |
| valign  | 垂直对齐 |      |

### input相关

##### type属性

| 属性值   | 作用 |
| -------- | ---- |
| text     | 文本 |
| password | 密码 |
| button   | 按钮 |
| reset    | 重置 |
| submit   | 提交 |

##### table属性及其作用

| 属性        | 作用                                                     |
| :---------- | -------------------------------------------------------- |
| type        | 规定当前表单收集信息的类型                               |
| placeholder | 描述输入文字预期值的简短的提示信息                       |
| value       | 默认输入的内容                                           |
| name        | 必须定义的属性 规定向action指向的url地址中传送的内容名字 |

# CSS

### css文本属性

| 属性名                      | 属性值                                                       | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| font-size                   | **px                                                         | 浏览器默认16px，设计稿常用字号12px                           |
| font-family                 | 字体名                                                       | 多个字体中间用逗号链接，先解析第一个，若没有依次往后         |
| color                       | 各种颜色                                                     | 设置字体颜色                                                 |
| font-weight                 | font-weight：bolder(更粗)/bold(加粗)/normal(常规)；font-weight:100-900;100-500不加粗，600-900加粗 | 加粗字体                                                     |
| font-style                  | font-style：italic(斜体字)/oblique(倾斜的文字)/normal(常规显示) | 倾斜                                                         |
| text-align                  | left(左对齐)/right(右对齐)/ecnter(居中对齐)/justify(两端对齐，只对多行文本起作用) | 文字水平对齐方式                                             |
| line-height                 | **px                                                         | 行高 可以进行垂直居中设置                                    |
| text-indent                 | **px                                                         | 首行缩进 只对第一行起作用                                    |
| letter-spacing word-spacing | **px                                                         | letter-spacing是每个字之间的间距    word-spacing是每个单词之间的间距 |
| text-decoration             | none(没有)/underline(下划线)/overline(上划线)/line-through(删除线) | 文本修饰                                                     |
| font                        | font-style font-weight font-size/line-height font-family的简写。例：font：italic 800 30px/80px "宋体" | 顺序不能改变，必须同时指定font-size和font-family属性时才能起作用 |
| text-transform              | capitalize(首字母大写)/lowercase(全部小写)/uppercase(全部大写)/none | 英文文本修饰                                                 |

### css列表属性

| 属性                | 属性值                                                      | 说明                     |
| ------------------- | ----------------------------------------------------------- | ------------------------ |
| list-style-type     | disc(实心圆)/circle(空心圆)/square(实心方块)/none(去掉符号) | 定义列表符合样式         |
| list-style-image    | list-style-image:url()                                      | 将图片设置为列表符合样式 |
| list-style-position | outside(列表的外面)/inside(列表的里面)                      | 设置列表项标记的放置位置 |
| list-style          | list-style：none                                            | 简写                     |

### css背景属性

| 属性                  | 属性值                                                       | 说明               |
| --------------------- | ------------------------------------------------------------ | ------------------ |
| background-color      | 各种颜色                                                     | 背景颜色           |
| background-image      | url（）                                                      | 背景图片           |
| background-repeat     | no-repeat(不重复)/repeat(平铺)/repeat-x(沿x轴平铺)/repeat-y(沿y轴平铺) | 背景图片平铺       |
| backgroung-position   | background-position：水平位置 垂直位置；                     | 背景图片的定位     |
| background-attachment | scroll(滚动)/fixed(固定，固定在浏览器窗口中，固定之后相对于浏览器窗口) | 背景图片的固定     |
| background-size       | **px (拉伸)/ cover(等比例)/contain(扩展至最大尺寸 可能会留白) | 设置背景图片的宽高 |

### 清除浮动属性clear (解决高度塌陷)

| 属性        | 作用                   |
| ----------- | ---------------------- |
| clear:none  | 允许有浮动             |
| clear:right | 不允许前面有右浮动     |
| clear:left  | 不允许前面有左浮动浮动 |
| clear:both  | 不允许有浮动现象       |

### 溢出属性

| 属性值     | 含义                               |
| ---------- | ---------------------------------- |
| visible    | 溢出内容显示在元素之外             |
| hidden     | 溢出内容隐藏                       |
| scroll     | 溢出内容以滚动方式显示             |
| auto       | 如果有溢出加滚动条，没有就正常显示 |
| inherit    | 遵从父元素overflow属性值           |
| overflow-x | x轴溢出                            |
| overflow-y | y轴溢出                            |

### white-space

| 属性值   | 作用                                         |
| -------- | -------------------------------------------- |
| normal   | 默认值，空白会被浏览器忽略                   |
| nowrap   | 文本不会换行，在同一行上继续，直到遇到br标签 |
| pre      | 显示空格回车但是不换行                       |
| pre-warp | 显示空格回车换行                             |
| pre-line | 显示回车换行不显示空格                       |
| inherit  |                                              |

### 当单行文本溢出显示省略号需要同时设置

1. 容器宽度
2. 强制文本在一行内显示 white-space：nowarp
3. 溢出内容隐藏 overflow：hidden
4. 溢出文本显示省略号 text-overflow：ellipsis

### 元素显示类型

1. 块元素：div p ul li ol li dl dt dd h1-h6
2. 行内元素：a b em i span strong
3. 行内块元素：img input

### 定位

| 语法               | 含义     | 偏移位置                                                     |
| ------------------ | -------- | ------------------------------------------------------------ |
| position：static   | 默认值   | 默认                                                         |
| position：absolute | 绝对定位 | 脱离文档流，当没有父元素或父元素没有定位，参照物是浏览器窗口的第一屏，有父元素且父元素有定位，参照物是父元素 |
| position：relative | 相对定位 | 不脱离文档流，参照物是自己的初始位置                         |
| position：fixed    | 固定定位 | 脱离文档流，参照物是当前窗口                                 |
| position：sticky   | 粘性定位 | 可以做吸顶效果，兼容性较差                                   |

### 伪元素

| 元素名       | 意义                               |
| ------------ | ---------------------------------- |
| first-letter | 首字母                             |
| first-line   | 第一行                             |
| before       | 在最前面加假标签 内容为content：”“ |
| after        | 在最后加假标签 内容为content       |

### 表单标签

| 属性值 | 含义   |
| ------ | ------ |
| radio  | 单选框 |

### HTML5新增语义化标签

| 标签    | 含义                                                |
| ------- | --------------------------------------------------- |
| section | 表示页面中的一个内容区块                            |
| article | 表示一块与上下文无关的独立的内容                    |
| aside   | 在article之外的，与article内容相关的辅助信息        |
| header  | 表示页面中一个内容区域或整个页面的标题              |
| footer  | 表示页面中一个内容区域或整个页面的脚注              |
| nav     | 表示页面中的导航链接                                |
| figure  | 表示一段独立的流内容 使用figcaption元素为其添加标题 |
| main    | 表示页面中的主要内容                                |

### h5音视频标签

#### audio的属性

| 属性     | 含义                      |
| -------- | ------------------------- |
| controls | 显示控制条                |
| loop     | 循环播放                  |
| autoplay | 自动播放 谷歌浏览器不支持 |
| muted    | 静音                      |

#### video的属性

| 属性     | 含义                                   |
| -------- | -------------------------------------- |
| controls | 显示控制条                             |
| loop     | 循环播放                               |
| autoplay | 自动播放 设置静音后 谷歌也可以自动播放 |
| muted    | 静音                                   |
| poster   | 预览图                                 |

 ### h5表单增强

| type值         | 含义                             |
| -------------- | -------------------------------- |
| color          | 生成选择颜色的表单               |
| tel            | 唤起拨号盘表单                   |
| search         | 产生一个有搜索意义的表单         |
| range          | 产生一个滑动条   可以设置min max |
| number         | 产生一个数值表单                 |
| email          | 限制用户必须输入email            |
| url            | 限制用户必须输入url              |
| date           | 限制用户必须输入日期             |
| month          | 限制用户必须输入月份             |
| week           | 限制用户必须输入周               |
| time           | 限制用户必须输入时间             |
| datetime-local | 选取本地时间                     |

### CSS3 优雅降级和渐进增强

优雅降级：一开始就构建完整功能，然后在对低版本浏览器进行兼容

渐进增强： 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果交互改进和追加功能达到更好的用户体验

区别：优雅降级是从复杂现状开始，并试图减少用户体验的供给，而渐变争抢则是从一个非常基础的版本开始，并不断扩种，以适应未来环境的需要，降级意味着往回看，而渐进增强则意味着朝前看，同时保证其根基处于安全地带

### flex布局中给特定项目设置样式

| 属性值                 | 含义                         |
| ---------------------- | ---------------------------- |
| align-self：flex-start | 默认值                       |
| align-self: flex-end   | 下端对齐·                    |
| align-self:center      | 居中对齐                     |
| align-self:baseline    | 和默认值一样                 |
| align-self:stretch     | 在没有设置高度的情况下，拉伸 |

##### 项目属性order：0为默认值  按照默认顺序排列  属性值越大  排位越靠后

##### 项目属性flex：1  设置三栏布局  左右固定中间自适应 

### 移动端布局

模拟器上显示的分辨率为css像素  设备的独立像素    物理分辨率为设备像素

设备像素比：dpr=物理像素/css像素

尽量使用百分比布局  弹性盒布局  rem布局

### 多列布局

| 属性         | 含义                                           |
| ------------ | ---------------------------------------------- |
| column-count | 规定于是怒应该被分割的列数                     |
| column-gap   | 规定列之间的间隔                               |
| column-rule  | 设置或检索对象的列于列之间的边框  是个复合属性 |
| break-inside | 给子盒子添加  防止盒子内部折行                 |

### vw vh和百分之百的区别

没有滚动条时  100vw=100%

有滚动条时 100vw比100%大一点   因为100vw包括滚动条   100%不包含滚动条

### CSS3渐变

1. 线性渐变 background：linear-gradient（to 渐变方向/渐变角度，n种颜色）
2. 径向渐变 background：radial-gradient（center,shape,size,start-color,...,last-color）
   1. center 表示渐变的中心位置
   2. shape 表示渐变的形状 可以是circle 和ellipse
   3. size表示渐变的大小  即渐变到那里结束 四个值包括 closest-side closest-corner farthest-side farthest-corner
3. 重复渐变background：repeating-linear-gradient（）/background：repeating-radial-gradient（）

### CSS3过渡

transition：all 2s linear 2s;  这是一个复合属性可以拆分为

1. transition-property： 需要检测的属性
2. transition-duration   执行时间
3. transition-delay   延迟
4. transition-timing-function  运动曲线

all表示需要观察的属性   2s表示过渡时间 linear表示过度的速度  2s表示鼠标移入后的延迟时间

但是all不能检测display：none和display：bolck  需要使用检测height和overflow：hidden进行使用

#### css3动画类型

| 名称        | 意义         |
| ----------- | ------------ |
| linear      | 匀速         |
| ease        | 逐渐变慢     |
| ease-in     | 加速         |
| ease-out    | 减速         |
| ease-in-out | 先加速后减速 |

### 2D属性 transform

1. translate（）向某方向移动多少像素
   1. translateX translateY translate3D
   2. 在translateX中100%表示相对自身的100%
2. scale（0.5）放大到原来的（n）倍  设置为负值为倒像
   1. scaleX scaleY 
3. rotate  旋转
4. skew（）

transform-origin  改变旋转中心点

使用上述属性时 要先写位移   然后写其他   否则会影响最后的位置

### 关键帧动画和传统动画的区别  animation和transition

相同点：都是随着时间改变元素的属性值

不同点：transition需要触发一个时间才会随着时间改变css属性 而animation不需要触发任何事件的情况下也可以随着时间变化改变元素css属性值，从而达到一种动画效果 c3的animation就需要明确的动画属性值

### animation拆分属性

| 属性名                    | 含义                     | 属性值                                                       |
| ------------------------- | ------------------------ | ------------------------------------------------------------ |
| animation-name            | 动画名称                 |                                                              |
| animation-duration        | 动画持续时间             | 2s 持续两秒                                                  |
| animation-timing-function | 动画过渡类型             | linear  ease ease-in ease-out  ease-in-out                   |
| animation-delay           | 动画延迟时间             | 0.5s  延迟半秒                                               |
| animation-iteration-count | 动画的循环次数           | infinite 无限循环  number 循环次数                           |
| animation-direction       | 动画在循环中是否反向运动 | normal 正常运行 reverse 反方向运行 alternate  先正常运行再反方向运行 并持续交替 alternate-reverse 先反方向运行再正常运行并持续交替 |
| animation-play-state      | 动画状态                 | running 运行  paused 暂停                                    |
| animation-ill-mode        | 是否保持最后一帧状态     | forwards 保持最后一帧状态 backforwards 保持初始状态          |

#### animation中steps相关

steps（1,end）表示  每两帧动画中补一帧 并且看不到最后一帧

steps（1，start）表示  每两帧动画中补一帧 并且看不到第一帧

可以将其直接写成steps-end或steps-start

### 3D转换

1. 3D平移 transform：translateZ（**px）向z轴方向移动多少像素  但是必须配合景深属性使用
   * 通过给父元素添加perspective：**px 设置眼睛距离屏幕的距离
   * 通过给子元素设置transform：perspective（**px）
   * 建议给父元素设置  通常数值在900-1200px之间
   * 通过设置perspective-origin：center center 中心/ left top左上角/100% 100%右下角 调整观察者的位置
2. 3D旋转 transform：rotate3D（1，1，1，**deg）绕x轴旋转1✖ndeg角度绕y轴旋转1✖ndeg角度 绕z轴旋转1✖ndeg角度
3. 3D缩放  transform：scalez（）和scale3d（）单独使用没有效果 需要配合其他变形一起使用

### 网格布局

为元素设置display：grid 即可将其变成网格布局  块级网格

为元素设置display：inline-grid 即可将其变成网格布局  行内块级网格

#### 网格布局七种方式设置宽高

grid-template-rows：     grid-template-columns：

| 方式             | 记法                            | 备注                               |
| ---------------- | ------------------------------- | ---------------------------------- |
| 固定值           | 100px 100px 100px 100px ....    |                                    |
| 百分比           | 10% 10% 10% 10%。。。。         |                                    |
| repeat           | repeat（3，33.33%）             | 重复三次每次占33.33%               |
| repeat auto-fill | repeat（auto-fill，33.33%）     | 自动填充 每次33.33% 充满为止       |
| fr片段           | 1fr 100px 1fr                   | 自适应                             |
| minmax           | minmax(100px,200px) 100px 100px | 在一定范围内  尽最大能力填充父元素 |
| auto             | 100px auto 100px                | 自适应                             |

#### 网格布局设置间距

| 写法       | 含义     |
| ---------- | -------- |
| row-gap    | 行间距   |
| column-gap | 列间距   |
| gap        | 复合属性 |

### 网格布局剩余属性

| 属性              | 含义                                     | 属性值                               |
| ----------------- | ---------------------------------------- | ------------------------------------ |
| grid-auto-flow    | 改变网格排列顺序                         | column/row                           |
| justify-content   | 改变网格整体主轴对齐方式                 | center/start/end.....                |
| align-content     | 改变网格整体纵轴对齐方式                 |                                      |
| justify-items     | 改变单元格内容主轴对齐方式               |                                      |
| align-items       | 改变单元格内容纵轴对齐方式               |                                      |
| place-content     | justify-content和align-content的合并形式 |                                      |
| place-items       | justify-items和align-items的合并形式     |                                      |
| grid-column-start | 指定某单元格列起始位置                   |                                      |
| grid-column-end   | 指定某单元格列结束位置                   |                                      |
| grid-row-start    | 指定某单元格行起始位置                   |                                      |
| grid-row-end      | 指定某单元格行结束位置                   |                                      |
| grid-column       | 同时设置某单元格列起止位置               | 1/3 第一条网格线开始第三条网格线结束 |
| grid-row          | 同时设置某单元格行起止位置               | 1/3 第一条网格线开始第三条网格线结束 |

### JS是什么

1. BOM： Browser Object Model  js操作浏览器发生变化的属性和方法
2. DOM：Document Object Model  js操作文档流的内容
3. ECMAScript：js代码书写规则

### js代码书写位置

1. 行内式：

   1. a标签：写在a标签的href属性中  javascript：alert（‘hello world’）；
   2. 非a标签：写在非a标签的属性值位置

2. 内嵌式：

   卸载script标签对内，不需要依赖行为  打开页面就可以执行

3. 外链市：

   书写在.js文件内  在需要使用该文件的文件中添加script标签  并将src添加该文件地址

### 变量

1. 输出方式

   | 语法               | 输出方式                               |
   | ------------------ | -------------------------------------- |
   | alert（）          | 弹框                                   |
   | console.log（）    | 控制台输出                             |
   | document.write()   | 直接输出在页面中                       |
   | var a = prompt（） | 弹出框并且接受用户输入的内容返回给变量 |

2. 数据类型

   1. 基本数据类型  使用typeof 变量名 对该变量的数据类型进行检测

      * 数值类型
      * 字符串类型
      * 布尔类型
        * true	
        * flase
      * 空类型
        * undefined 没有值
        * null 为空值

   2. 数据类型转化

      转数值

      | 方法           | 用法                         |
      | -------------- | ---------------------------- |
      | Number（）     | Number（需要转换的内容）     |
      | parseInt（）   | paraseInt（需要转换的内容）  |
      | parseFloat（） | parseFloat（需要转换的内容） |

      转字符

      | 方法         | 用法                        |
      | ------------ | --------------------------- |
      | String（）   | String（需要转换的内容）    |
      | toString（） | 需要转换的内容.toString（） |

      转bool *Notice：除了 0 NaN  ’ ‘   undefined null  会转换为 false  其余均为 true* 

      | 方法        | 用法                      |
      | ----------- | ------------------------- |
      | Boolean（） | Boolean（需要转换的内容） |

      #### 运算符

      1. 算术运算符 +   -   *    /    %
      2. 赋值运算符 =   +=  -=   *=    /=   %=
      3. 比较运算符<  >  <=  >=  ==  ===  !=   !==
      4. 逻辑运算符 &&   ||  !
      5. 自增自减运算符 ++   --

      #### 条件分支语句

      1. if
         * if(  ){  }   else   {   }
         * if(   ){   } else  if  (  ) { }
         * if(   ) {   }else  if   (   ) {   } else  {    }
      2. switch
         * switch(已知条件){
           * case 选项一：   break；
           * case 选项二：    break；
           * 。。。。
           * default：
         * }
         * 找到和已知条件完全匹配的选项执行
         * 执行完代码需要写break 否则会向下穿透
         * 可以书写default，会在所有选项不匹配的情况下执行
         * 当发生穿透效果的时候，会从第一个满足条件的选项开始向下穿透

      ### 循环

      while和do。。。while的区别

      * 当初始变量在条件以内的时候，while和dowhilie循环一致
      * 当初始变量在条件以外时 while循环一次都不会执行  而dowhile会执行一次

      1. while循环
         * while(条件){
         * 会被反复执行的代码
         * 改变初始值
         * }
         * while循环会重复执行一段代码知道重复结束才会执行后续代码
         * 千万书写改变初始值代码  否则会出现死循环
         * 再循环内  初始值、条件判断和改变初始值都能控制循环次数
      2. do...while循环
         * do{
         * 会被反复执行的代码
         * 改变初始值
         * }while(条件)
      3. for循环
         * for(定义初始变量；条件判断；改变初始值){
         * 重复执行的代码
         * }

### 函数

1. 递归函数：一个函数调用了自身并设置了结束条件 这个函数才是一个正确的递归函数

   * 斐波那契数列

2. 作用域

   * 范围

     * 全局作用域  一个页面就是一个全局作用域
     * 私有作用域 只有函数生成私有作用域

   * 使用

     * 定义 声明在什么位置的变量就是哪一个作用于的变量

     * 访问 自己有用自己的 ，自己没有用父级的，以此类推，全局都没有就报错

     * 赋值 自己有给自己赋值，自己没有给父级赋值 ，全局都没有就先定义为全局变量再赋值

     * ```javascript
       function a() {
               function b() {
                   aa= 100;
               }
               b();
           }
           function c() {
       
           }
           a();
           c();
           console.log(aa);
       ```

### 对象数据类型

```javascript
 // 创建对象
    var a = {
        name: 'mzh',
        age: 19,
        hobby: 'footerball'
    }
    // 增加对象的键
    a.name2 = '456'
    a['name1'] = '123';
    console.log(a);

    // 删除对象的键
    delete a.name1;
    delete a.name2;
    console.log(a);

    // 修改对象的键
    a.name = '马中豪'
    a['name1'] = '张诗琪'
    console.log(a);
    // 查询对象的键
    console.log(a.name);
```

### 数组数据类型

```javascript
 // 定义数组
    var arr = [100, 200, 'asda'];
    console.log(arr);
    console.log(arr.length);
    // 长度操作  当给数组长度赋值 赋的值小于数组本身长度  会从数组后边删除一定量元素  如果大于   会有空数组元素
    arr.length=3;
    console.log(arr);
    console.log(arr.length);
    // 数据操作
    arr[2]=1000;
    console.log(arr);
    // 数组遍历
    for(var i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
```

### 冒泡排序

```javascript
// 冒泡排序  从第0位开始 两两相比  如果前一个数比后一个数大 交换位置 然后比较后一个数和再后一个数 以此类推 经过arr.length-1次比较完成一轮  总共完成arr.length-1轮 每一轮确定一个相对最大的数字 所以每进行一轮比较  下一轮就可以少比较一位   规律为第一轮比较arr.length-1次  第二轮比较arr.length-2次   第n轮为arr.length-n次
    var temp = 0
    var arr = [1, 3, 6, 2, 6, 8, 3, 6, 9, 1, 0];
    for (var j = 0; j < arr.length - 1; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }

        }
    }
    console.log(arr);
```

### 选择排序

```javascript
  // 选择排序  假设aa[0]的值最小  与后一个值进行比较  如果后一个值更小 交换位置
    var aa = [5, 1, 3, 0, 7, 2, 4, 6, 9, 8];
    var temp = 0;

    for (var j = 0; j < aa.length; j++) {
        var minIndex = j;
        for (var i = j+1; i < aa.length; i++) {
            if (aa[i] < aa[minIndex]) {
                minIndex = i;
            }
        }
        temp = aa[j];
        aa[j] = aa[minIndex];
        aa[minIndex] = temp;
    }
    console.log(aa);
```

### 数组常用方法

```javascript
/*
    * 1. push()
    *   数组.push(数据)
    *   将数据追加到数组末尾
    *   返回值就是追加数据后的数组最新长度
    * 2. pop()
    *   数组.pop()
    *   删除最后一个数据
    *   返回被删除的数据
    * 3. unshift()]
    *   数组.unshift(数据)
    *   将数据添加到数组的最前面
    *   返回值是添加数据后最新的长度
    * 4. shift()
    *   数组.shift()
    *   删除最前面的数据
    *   返回值是被删除的数据
    * 5. reverse()
    *   数组.reserve()
    *   反转数组
    *   返回值是反转后的数组
    * 6. splice()
    *   数组.splice(开始索引，多少个，要插入的数据)
    *   开始索引：默认值为0
    *   多少个：默认值为0
    *   要插入的数据：默认值为0
    *   删除数组中的若干数据 并选择是否插入新的数据
    *   返回值为被删除的数据组成的数组
    * 7. sort()
    *   数组.sort()
    *   数组.sort(function(a,b){return a-b})
    *   数组.sort(function(a,b){return b-a})
    *   将数组进行排序
    *   排序好的新数组
    * 以上七个方法会直接改变原始数组
    * 8. join()
    *   数组.join(连接符)
    *   将数组用连接符连接成为字符串
    *   连接好的字符串
    * 9. concat()
    *   数组.concat(其他数组)
    *   将其他数组和原始数组拼接在一起
    *   返回值是拼接好的数组
    * 10. slice()
    *   数组.slice(开始索引，结束索引)
    *   开始索引默认值是0，结束索引默认值是数组长度
    *   截取数组中的某些数据
    *   以新数组的形式返回截取出的数据
    * 11. indexOf()
    *   数组.indexOf(数据)
    *   查找数据在数组中的索引位置
    *   若有该数据 返回第一次出现的索引位置 没有返回-1
    * 12. forEach()
    *   数组.forEach(function(item,index,arr){})
    *   item表示每一项
    *   index表示数组索引
    *   arr表示原始数组
    *   遍历数组  没有返回值
    * 13. map()
    *   数组.map(function(item,index,arr){})
    *   映射数组
    *   映射后的新数组
    * 14. filter()
    *   数组.filter(function(item,index,arr){})
    *   过滤数组
    *   过滤后的新数组
    * 15. every()
    *   数组.every(function(item,index,arr){})
    *   判断数组是不是每一项都满足条件
    *   返回值是一个布尔值
    * 16. some()
    *   数组.some(function(item,index,arr){})
    *   判断数组是不是有某一项满足条件
    *   返回值是一个布尔值
    * */
```

### 字符串常用方法

```JavaScript
/*
    * 1. charAt()
    *   字符串.charAt(索引)
    *   获取索引位置的字符
    *   返回值就是对应索引位置的字符
    * 2. toLowerCase()
    *   字符串.toLowerCase()
    *   将字符串中的的字母全部转换成小写
    *   返回值是转换好的字符串
    * 3. toUpperCase()
    *   字符串.toUpperCase()
    *   将字符串中的字母全部转换成大写
    *   返回值是转换好的字符串
    * 4. replace()
    *   字符串.replace(换下内容，换上内容)
    *   将字符串内第一个满足换下内容的片段替换成换上内容
    *   返回值为替换好的字符串
    * 5. trim()
    *   字符串.trim()
    *   去除字符串首尾的空格
    *   返回值为去除空格后的字符串
    * 6. split()
    *   字符串.split(分隔符)
    *   按照分隔符将字符串切割成为一个数组
    *   返回值为切割后的数组
    * 7. substr()
    *   字符串.substr(开始索引，多少个)
    *   截取字符串
    *   返回值是截取出的字符串
    * 8. substring()
    *   字符串.substring(开始索引，结束索引)
    *   截取字符串
    *   返回值是截取出的字符串
    * 9. slice()
    *   字符串.slice(开始索引，结束索引)
    *   截取字符串
    *   返回值是截取出的字符串
    * 以上方法均不改写原始字符串
    * */
```

### 数字常用方法

##### 获取随机整数

​	1. 获取0-n之间的随机整数

```javascript
Math.floor(Math.random() * (n-1))
```

	2. 获取x-y之间的随机整数

```javascript
Math.floor(Math.random() * (y-x+1))+x
```

```javascript
 /*
    * 1. random()
    *   Math.random()
    *   获取0-1之间的随机数，包前不包后
    *   返回值是0-1之间的随即小数
    * 2. round()
    *   Math.round()
    *   对数字进行四舍五入
    *   返回值是四舍五入之后的数字
    * 3. ceil()
    *   Math.ceil()
    *   对数字进行向上取整
    *   返回值是取整后的整数
    * 4. floor()
    *   Math.floor()
    *   对数字进行向下取整
    *   返回值是取整后的整数
    * 5. pow()
    *   Math.pow(底数，指数)
    *   对数字进行取幂运算
    *   返回值是取幂以后的结果
    * 6. sqrt()
    *   Math.sqrt(数字)
    *   对数字进行二次方跟运算
    *   二次方跟后的结果
    * 7. abs()
    *   Math.abs(数字)
    *   对数字进行绝对值运算
    *   返回值是运算后的结果
    * 8. max()
    *   Math.max(数字1，数字2.。。)
    *   取数字中的最大值
    *   返回值就是数字中的最大值
    * 9. min()
    *   Math.min(数字1，数字2.。。)
    *   取数字中的最小值
    *   返回值就是数字中的最小值
    * 10. PI
    *   Math.PI
    *   得到一个近似Π的值
    *   返回值就是一个近似Π的值
    * */
```

### 时间常用方法

```javascript
/*
    * 1.getFullYear()
    *   时间对象.getFullYear()
    *   获取到时间对象中的年份信息
    * 2.getMonth()
    *   时间对象.getMonth()
    *   获取时间对象中的月份信息
    * 3.getDate()
    *   时间对象.getDate()
    *   获取时间对象中的日期信息
    * 4.getHour()
    *   时间对象.getHour()
    *   获取到时间对象中的小时信息
    * 5.getMinutes()
    *   时间对象.getMinutes()
    *   获取时间对象中的分钟信息
    * 6.getSeconds()
    *   时间对象.getSeconds()
    *   获取时间对象中的秒钟信息
    * 7.getDay()
    *   时间对象.getDay()
    *  获取时间对象中的星期信息
    * 8.getTime()
    *   时间对象.getTime()
    *   获取时间对象中的时间戳信息
    * 以上为获取时间的方法
    * 1.setFullYear()
    *   时间对象.setFullYear()
    *   设置时间对象中的年份信息
    * 2.setMonth()
    *   时间对象.setMonth()
    *   设置时间对象中的月份信息
    * 3.setDate()
    *   时间对象.setDate()
    *   设置时间对象中的日期信息
    * 4.setHour()
    *   时间对象.setHour()
    *   设置到时间对象中的小时信息
    * 5.setMinutes()
    *   时间对象.setMinutes()
    *   设置时间对象中的分钟信息
    * 6.setSeconds()
    *   时间对象.setSeconds()
    *   设置时间对象中的秒钟信息
    * 7.setTime()
    *   时间对象.setTime()
    *   设置时间对象中的时间戳信息
    * */
```

##### 死时间倒计时

```javascript
var nowTime = new Date(2022, 3, 29, 3, 16, 38);
    var Time = new Date(2022, 3, 31, 20, 0, 0);
    var a = nowTime.getTime()
    var b = Time.getTime()
    // 二者之间差的时间
    addSec = (b-a)/1000;
    //求还有多少天
    var day = Math.floor(addSec/(60*60*24))
    var hour = Math.floor(addSec%(60*60*24)/(60*60));
    var min = Math.floor(addSec%(60*60)/(60));
    var sec = Math.floor(addSec%(60));
    console.log(day + '天' + hour + '时' + min + '分' + sec + '秒');
```

## DOM操作

```javascript
 /*
    *   1. 获取可视窗口宽高
            var a = window.innerWidth
            var b = window.innerHeight
        2. 浏览器弹出层
            window.alert('tishi')   // 提示框
            var con = window.confirm('tishi') // 询问框 有返回值  为true或false
            console.log(con);
            var pro = window.prompt('tishi')  // 输入框 有返回值 为用户输入的内容
            console.log(pro);
        3. 开启和关闭标签页
            window.open('http://www.baidu.com')
            window.close()
            a.onclick =  function() {
                 window.open('http://www.baidu.com')
             }
             function b() {
                 window.close()
             }
        4. onload事件   等到页面所有内容加载完毕后执行
            window.onload = function () {
                console.log('资源加载完毕');
            }
        5. 窗口改变事件   当可视窗口尺寸发生改变时 触发该事件
            window.onresize = function () {
                console.log('窗口变化');
            }
        6. 滚动条改变事件  当窗口滚动条发生改变时 触发该事件
            window.onscroll = function () {
                console.log('滚动条改变');
            }
        7. 浏览器的历史记录操作
        *   window.history.back()  回退页面
        *   window.history.forward() 前进页面
        8. 浏览器卷去尺寸  就是往下拖动滚动条时 被浏览器遮挡的上方页面尺寸
        *   当页面中有<!DOCTYPE html>声明时  使用document.documentElement.scrollTop
        *   当页面中有<!DOCTYPE html>声明时  使用document.documentElement.scrollLeft
        *   当页面中没有<!DOCTYPE html>声明时 使用document.body.scrollTop
        *   当页面中没有<!DOCTYPE html>声明时 使用document.body.scrollLeft
    *   9. 浏览器滚动到
    *       window.scrollTo()
    *       瞬间移动 window.scrollTo(left,top) 参数分别表示浏览器卷去高度
    *       滚动    window.scrollTo({
    *                   left:**,
    *                   top:**,
    *                   behavior:'smooth' // 平滑滚动
    *               })
    * */
```

### 定时器

```javascript
/*
    * 1. 间隔定时器  每隔多少毫秒执行一次
    *   setInterval(function(){
    *       定时器内需要执行的代码
    *   },1000)
    *   使用 clearInterval(需要关闭的的定时器的返回值) 关闭定时器
    * 2. 延时定时器  延迟多少毫秒执行  只执行一次
    *   setTimeOut(function(){
    *       延时完毕后需要执行的代码
    *   })
    *   使用 clearTimeOut(需要关闭的的定时器的返回值) 关闭定时器
    * 定时器返回值只是表示当前页面中的第几个定时器
    * 关闭定时器不区分定时器种类  可以互相关闭
    * */
```

## DOM操作

#### 获取元素

```javascript
/*
* 1. 根据id获取元素
*   document.getElementById('id名称')
*   获取文档流中id名对应的一个元素
*   如果有这个元素 返回值就是这个元素  没有就是null
* 2. 根据类名获取元素
*   document.getElementByClassName('类名')
*   获取文档流中所有类名对应的元素
*   如果有类名对应的元素  返回值为 伪数组  如果没有 返回空的伪数组
* 3. 根据标签名获取元素
*   document.getElementsByTagName('标签名')
*   获取文档流中所有的标签名对应元素
*   如果有标签名对应元素  返回值为伪数组  如果没有  返回值为空伪数组
* 4. 根据选择器获取元素
*   document.querySelector('选择器')
*   获取文档流中满足选择器规则的第一个元素  Notice: 类名或id名不能为纯数字 且 数字不能开头
*   返回值  如果有对应的元素  获取到第一个  如果没有  返回值为null
* 5. 根据选择器获取一组元素
*   document.querySelectorAll('选择器')
*   获取文档流中满足选择器规则的一组元素
*   返回值  如果有满足条件的元素  返回伪数组  如果没有返回null
* */
```

#### 操作元素内容

```javascript
/*
    * 1. 操作元素文本内容
    *   获取元素中的文本内容  元素.innerText
    *   设置元素中的文本内容  元素.innerText = '新内容'
    * 2. 操作超文本内容
    *   获取元素中的超文本内容  元素.innerHTML
    *   设置元素中的超文本内容  元素.innerHTML = '新内容'
    * 3. 操作元素原生属性
    *   元素.属性名
    *   元素.属性名 = '新属性值'
    * 4. 操作元素自定义属性
    *   元素.getAttribute('属性名')
    *   元素.setAttribute('属性名','属性值')
    *   元素.removeAttribute('属性名')
    * 5. 操作元素类名
    *   元素.className
    *   元素.className = '新类名'
    * 6. 操作元素行内样式
    *   元素.style.样式名
    *   元素.style.样式名 = '新样式值'
    * 7. 获取元素非行内样式
    *   window.getComputedStyle(元素).样式名   即可以获取行内样式  也可以获取非行内样式
    * */
```

#### 节点操作

```javascript
/*
    * 1. 创建节点
    *   document.createElement('标签名称')
    *   创建一个指定标签元素
    *   返回值是一个创建好的元素节点
    * 2. 插入节点
    *   父节点.appendChild(子节点)
    *   把子节点放在父节点内部 并放在最后的位置
    *   var son = document.createElement('span');
    *   son.innerText = '我是刚创建的span标签'
    *   var far = document.querySelector('div');
    *   far.appendChild(son)
    *   父节点.insertBefore(要插入的子节点，哪一个子节点的前面)
    *   把子节点放在父节点内部，并且放在指定某一个子节点的前面
    *   var far = document.querySelector('div');
    *   var p = document.querySelector('p');
    *   var son = document.createElement('span');
    *   son.innerText = '我是刚创建的span标签'
    *   far.insertBefore(son,p)
    * 3. 删除节点
    *   父节点.removeChild(子节点)
    *   从父结点内删除某一个子节点
    *   var far = document.querySelector('div');
    *   var p = document.querySelector('p');
    *   far.removeChild(p);
    *   节点.remove()
    *   把自己删除
    *   var p = document.querySelector('p');
    *   p.remove()
    * 4. 替换节点
    *   父节点.replaceChild(换上节点，换下节点)
    *   在父节点内，使用换上节点替换掉换下节点
    *   var far = document.querySelector('div')
    *   var p = document.querySelector('p');
    *   var newP = document.createElement('span')
    *   newP.innerText = '我是换上来的节点'
    *   far.replaceChild(newP,p);
    * 5. 克隆节点
    *   节点.cloneNode(true/false)  true表示克隆后代节点  false表示不克隆
    *   复制一份一摸一样的节点
    *   返回值是克隆好的节点
    *   var far = document.querySelector('div')
    *   console.log(far.cloneNode(true));
    * 6. 获取元素尺寸
    *   元素.offsetHeight
    *   元素.offsetWidth
    *   获取元素内容+padding+border 区域的尺寸
    *   元素.clientHeight
    *   元素.clientWidth
    *   获取元素内容+padding区域的尺寸
    *
    * */
```

## 事件

### 常见事件类型

| 鼠标事件               | 键盘事件            | 浏览器事件        | 触摸事件               | 表单事件      |
| ---------------------- | ------------------- | ----------------- | ---------------------- | ------------- |
| click - 鼠标单击       | keydown - 键盘按下  | load - 加载完毕   | touchastart - 触摸开始 | focus - 聚焦  |
| dblclick - 鼠标双击    | keyup - 键盘抬起    | scroll - 滚动     | touchmove - 触摸移动   | blue - 失焦   |
| contextmenu - 左键单击 | keypress - 键盘键入 | resize - 尺寸改变 | touchend - 触摸结束    | change - 改变 |
| mousedown - 鼠标按下   |                     |                   |                        | input- 输入   |
| mouseup - 鼠标抬起     |                     |                   |                        | submit - 提交 |
| mousemove - 鼠标移动   |                     |                   |                        | reset - 重置  |
| mousevoer - 鼠标移入   |                     |                   |                        |               |
| mouseout - 鼠标移出    |                     |                   |                        |               |
| mouseenter - 鼠标移入  |                     |                   |                        |               |
| mouseleave - 鼠标移出  |                     |                   |                        |               |

```javascript
 /*
    * 前端事件:通过代码的的方式和页面中的某些内容做好一个约定(事件绑定)
    * 用户: 触发指定行为,就会执行代码
    * 事件绑定三要素:
    *   1. 事件源: 和谁做约定
    *   2. 事件类型: 约定一个什么行为
    *   3. 事件处理函数: 当用户触发行为时,执行什么代码
    * 语法:
    *   事件源.on事件类型 = 事件处理函数
    * 事件对象: 当事件触发时,一个描述该事件信息的对象数据类型  在事件处理函数中添加形参 即可接受事件对象信息
    * 鼠标事件中常用事件对象信息
    *   1. 坐标信息
    *       offsetX和offsetY 相对于触发事件元素的坐标点位
    *       clientX和clientY  相对于浏览器可视窗口的坐标点位
    *       pageX和pageY   相对于文档流的坐标点位
    * 键盘事件常用事件对象信息
    *   1. 键盘编码
    *       事件对象.keyCode
    *       每一个按键都有一个固定编码
    * */
```

### 事件传播和事件委托

```javascript
 /*
    * 1. 事件传播:浏览器响应事件的机制
    * eg: window->document->html->body->div
    *   浏览器窗口最先知道时间的发生
    *   捕获阶段:从window按照结构子集的顺序传递到目标
    *   目标阶段: 准确触发事件的元素接收到行为
    *   冒泡阶段: 从目标按照结构父级的顺序传递到window
    *   事件传播结束
    * 所以在给内层元素设置事件时  外层元素的事件也会被触发
    * 2. 阻止事件传播
    *   通过在事件处理函数中添加形参 接收事件对象  通过事件对象调用stopPropagation()
    *   语法:事件对象.stopPropagation()
    * 3. 事件委托
    *   利用事件冒泡机制,把自己的事件委托给结构父级中的某一层
    *   var ul = document.querySelector('ul')
    *   // 给父级元素添加事件
    *   ul.onclick = function (e) {
    *       // 判断事件对象中tagName 是不是需要点击的元素
    *       if( e.target.tagName === 'LI'){
    *           console.log('你点击的是li');
    *       }
    *   }
    * */

```

### 面向对象

```javascript
/*
    * 了解面向对象
    *   面向对象是我们的一种开发方式
    *   面向过程：一种关注过程的开发方式
    *       =》在开发过程中，需要关注每一个细节和步骤和顺序
    *   面向对象：一种面向对象的开发方式
    *       =》 在开发过程中，我们看看有没有一个对象能帮助我们完成任务
    *
    * 创建对象的方式
    *   1. 字面量
    *       var obj = {...} 可以后期动态添加
    *   2. 内置构造函数创建对象
    *       var obj = new Object()
    *       obj.name = ''
    *       ......
    *   3. 工厂函数创建对象
    *       1. 制造一个工厂函数
    *           function createObj() {
    *           var obj = new Object()
    *           obj.name = ''
    *           obj.age = ''
    *           obj.sayHi = function () {
    *               console.log(1);
    *               }
    *           }
    *       2. 使用工厂函数创建对象
    *           var a = createObj()
    *   4. 自定义构造函数创建对象
    *       1. 只在一个自定义构造函数
    *           function createObj() {
    *               this.name = ''
    *               this.age = ''
    *               this.sayHi = function () {
    *                   console.log(1);
    *
    *               }
    *           }
    *       2. 使用自定义构造函数创建对象
    *           var obj1 = new createObj();
    *
    * 构造函数的使用规则
    *   1. 构造函数和普通函数没有区别 只是在调用时要和new关键字连用
    *   2. 书写构造函数 函数名首字母大写  当看到名字的时候 就知道要和new关键字连用
    *   3. 调用时 需要和new关键字连用 这个函数才具有自动创建和返回对象的能力 反之没有
    *   4. 调用构造函数的时候 如果不传递参数 可以不写小括号
    *   5. 当函数名和new关键字连用时 this指向当前实例 直接在函数体内添加this.***='值'
    *   6. 构造函数内部不要随便写return 当你return一个基本数据类型时  写了也白写  当return一个复杂数据类型时  构造函数白写
    * 构造函数的不合理
    *   1. 当你在构造函数内书写方法的时候
    *       你需要向对象上添加方法的时候
    *       只要创建一次对象  就会有一个函数在占用空间
    *       创建一百个对象就会有一百个函数在占用空间
    * 原型 prototype
    *   每一个函数天生自带一个属性  叫做prototype 是一个对象
    *   既然prototype是一个对象，我们就可以用对象操作的语法，向里面添加一些内容
    *   每一个对象在你访问它的成员的时候  如果自己没有这个属性 会自动去所属构造函数的prototype上查找
    *   构造函数在创建对象的过程  叫做实例化的过程  创建出来的对象叫做这个构造函数的一个实例化对象
    *   所以  只需要向构造函数的原型prototype上创建一个方法  所有通过该构造函数实例化的实例化对象 都可以拥有这个方法
    	每一个对象天生自带一个__proto__,指向所属构造函数的prototype
    *
    *
    *
    * */
```

#### 在JS内，所有的函数都属于内置构造函数Function的实例

