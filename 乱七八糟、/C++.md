| 阶段     | 内容            | 目标                                  | 案例           |
| -------- | --------------- | ------------------------------------- | -------------- |
| 第一阶段 | c++基础语法入门 | 对c++有初步了解，能够有基础编程能力   | 通讯录管理系统 |
| 第二阶段 | c++核心编程     | 介绍c++面向对象编程，为大型项目做铺垫 | 职工管理       |
| 第三阶段 | c++提高课程     | 泛型编程思想，以及STL的基本使用       | 演讲比赛系统   |

```c++
int main() {
	// const int week = 7;
	// short a = 12;
	// int b = 24;
	// long c = 36;

	// long long d = 48;
	// 科学计数法  e后面 是正数，表示10的几次方 是负数 表示0.1的几次方
	float a = 3e2;
	char ch1 = 'a';
	char ch2 = 'A';
	char ch3 = 'z';
	char ch4 = 'Z';
	cout << (int)ch1 << endl;
	cout << (int)ch2 << endl;
	cout << (int)ch3 << endl;
	cout << (int)ch4  << endl;
	system("pause");
	return 0;
	/*
		1. 变量
			语法： 数据类型 变量名 = 变量值
		2. 常量
			1) 宏常量				#define 常量名 常量值
			2) cont修饰的变量		const 数据类型 变量名 = 变量值
		3. 关键字(标识符)
			见redeMe.md
		4. 标识符命名规则
			1) 标识符不能是关键字
			2) 由字母数字下划线组成
			3) 数字不打头
			4) 区分大小写
	*/
}
```



### 标识符

| asm        | do           | if          | return      | typedef  |
| ---------- | ------------ | ----------- | ----------- | -------- |
| auto       | debug        | inline      | short       | typeId   |
| bool       | dynamic_cast | int         | signed      | typename |
| break      | else         | long        | sizeof      | union    |
| case       | enum         | mutable     | static      | unsigned |
| catch      | explicit     | namespace   | static_cast | using    |
| char       | export       | new         | struct      | virtual  |
| class      | extern       | operator    | switch      | void     |
| const      | false        | private     | template    | volatile |
| const_cast | float        | protected   | this        | wchar_t  |
| continue   | for          | public      | throw       | while    |
| default    | friend       | register    | true        |          |
| delete     | goto         | reinterpret | try         |          |

### 数据类型

| 数据类型        | 关键字      |
| --------------- | ----------- |
|                 |             |
|                 |             |
|                 |             |
|                 |             |
| 单精度浮点型    | float       |
| 双精度浮点型    | double      |
| 扩展精度浮点型  | long double |
| 布尔型          | bool        |
| 单字符          | char        |
| 宽字符          | wchar_t     |
| 16位unicode字符 | char16_t    |
| 32位unicode字符 | char32_t    |
|                 |             |
|                 |             |

#### 整型

|      |      |      |      |
| ---- | ---- | ---- | ---- |
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |

#### 实型

|      |      |      |      |
| ---- | ---- | ---- | ---- |
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |

# C++基础入门

### 1 初识C++

#### 1.1 变量

### 2 数据类型

C++规定再创建一个变量或者常量时，必须要指定出相应的数据类型，否则无法给变量分配内存

#### 2.1 整型

作用：整型变量表示的市整数类型的数据

C++中能够表示整型的类型由以下几种方式，区别在于所占用的内存空间不同

| 数据类型 | 内存                                         | 关键字    | 表示范围        |
| -------- | -------------------------------------------- | --------- | --------------- |
| 整型     | 4字节                                        | int       | -2^15 -  2^15-1 |
| 短整型   | 2字节                                        | short     | -2^31 - 2^31-1  |
| 长整型   | 4字节(windows) 4字节(linux32) 8字节(linux64) | long      | -2^31 - 2^31-1  |
| 长整型   | 8字节                                        | long long | -2^63 - 2^63-1  |



#### 2.2 sizeof关键字

作用：利用sizeof关键字可以统计数据类型所占内存的大小

语法：`sizeof(数据类型 / 变量)`

示例：

```c++
int main(){
    cout << "short所占用的内存空间为：" << sizeof(short) << endl;
    system("pause");
    return 0;
}
```



#### 2.3 实型(浮点型)

作用：用于表示小数

浮点型变量分为两种：

	1. 单精度浮点型：float
	1. 双精度浮点型：double

两者的区别在于表示的有效数字范围不同。

| 数据类型     | 内存   | 数字范围        | 占用空间 |
| ------------ | ------ | --------------- | -------- |
| 浮点型       | float  | 7位有效数字     | 4字节    |
| 双精度浮点型 | double | 15-16位有效数字 | 8字节    |

示例：

```c++
int main(){
    float f1 = 3.14f;
    double f2 = 3.14;
    cout << f1 << endl;
    cout << f2 << endl;
    system("pause");
    return 0;
}
```

#### 2.4 字符型

作用：字符型变量用于显示单个字符

语法：`char ch = 'a';`

`注意：在显示字符型变量时，用单引号将字符括起来，，不要用双引号`

`注意：单引号内只可以有一个字符，不可以是字符串`

* C和C++中的字符型变量只占用一个字节
* 字符型变量并不是把字符本身放到内存中存储，二是将对应的ASCII编码放入到存储单元

| ASCII | 控制字符 | ASCII | 字符    | ASCII | 字符 | ASCII | 字符 |
| ----- | -------- | ----- | ------- | ----- | ---- | ----- | ---- |
| 0     | NUT      | 32    | (space) | 64    | @    | 96    | 、   |
| 1     | SHO      | 33    | !       | 65    | A    | 97    | a    |
| 2     | STX      | 34    | "       | 66    | B    | 98    | b    |
| 3     | ETX      | 35    | #       | 67    | C    | 99    | c    |
| 4     | EOT      | 36    | $       | 68    | D    | 100   | d    |
| 5     | ENQ      | 37    | %       | 69    | E    | 101   | e    |
| 6     | ACK      | 38    | &       | 70    | F    | 102   | f    |
| 7     | BEL      | 39    | ，      | 71    | G    | 103   | g    |
| 8     | BS       | 40    | (       | 72    | H    | 104   | h    |
| 9     | HT       | 41    | )       | 73    | I    | 105   | i    |
| 10    | LF       | 42    | *       | 74    | J    | 106   | j    |
| 11    | VT       | 43    | +       | 75    | K    | 107   | k    |
| 12    | FF       | 44    | ,       | 76    | L    | 108   | l    |
| 13    | CR       | 45    | -       | 77    | M    | 109   | m    |
| 14    | SO       | 46    | .       | 78    | N    | 110   | n    |
| 15    | SI       | 47    | /       | 79    | O    | 111   | o    |
| 16    | DLE      | 48    | 0       | 80    | P    | 112   | p    |
| 17    | DC1      | 49    | 1       | 81    | Q    | 113   | q    |
| 18    | DC2      | 50    | 2       | 82    | R    | 114   | r    |
| 19    | DC3      | 51    | 3       | 83    | S    | 115   | s    |
| 20    | DC4      | 52    | 4       | 84    | T    | 116   | t    |
| 21    | NAK      | 53    | 5       | 85    | U    | 117   | u    |
| 22    | SYN      | 54    | 6       | 86    | V    | 118   | v    |
| 23    | TB       | 55    | 7       | 87    | W    | 119   | w    |
| 24    | CAN      | 56    | 8       | 88    | X    | 120   | x    |
| 25    | EM       | 57    | 9       | 89    | Y    | 121   | y    |
| 26    | SUB      | 58    | :       | 90    | Z    | 122   | z    |
| 27    | ESC      | 59    | ;       | 91    | [    | 123   | {    |
| 28    | FS       | 60    | <       | 92    | \    | 124   | \|   |
| 29    | GS       | 61    | =       | 93    | ]    | 125   | }    |
| 30    | RS       | 62    | >       | 94    | ^    | 126   | `    |
| 31    | US       | 63    | ?       | 95    | _    | 127   | DEL  |

ASCII码大致由以下两部分组成：

* ASCII非打印控制字符：ASCII表上的0-31分配给了控制字符，用于控制像打印机一样的外围设备
* ASCII打印字符：数字32-126分配给了能在键盘上找到的字符，当查看或打印文档时就会出现

#### 2.5 转义字符

作用：用于表示一些不能显示出来的ASCII字符

现阶段我们常用的转义字符：`\n  \\  \t`

| 转义字符 | 含义                              | ASCII码值(十进制) |
| -------- | --------------------------------- | ----------------- |
| \a       | 警报                              | 007               |
| \b       | 退格(BS)，将当前位置移到前一列    | 008               |
| \f       | 换页(FF),将当前位置移到下页开头   | 012               |
| \n       | 换行(LF),将当前位置移到下一行开头 | 010               |
| \r       | 回车(CR),将当前位置移到本行开头   | 013               |
| \t       | 水平制表(HT),(跳到下一个制表位置) | 009               |
| \v       | 垂直制表(VT)                      | 011               |
| `\\`     | 代表一个反斜线字符`\`             | 092               |
| `\'`     | 代表一个单引号字符`'`             | 039               |
| `\"`     | 代表一个双引号字符`"`             | 034               |
| \?       | 代表一个问号                      | 063               |
| \0       | 数字0                             | 000               |
| \ddd     | 八进制转义字符，d的范围0-7        | 3位八进制         |
| \xhh     | 十六进制转义字符，h范围0-f        | 3位十六进制       |

#### 2.6 字符串型

作用：用于表示一串字符

两种风格

 1. 风格字符串：`char 变量名[] = “字符串值”`

    ```c++
    int main(){
    	char str[] = "hello world";
    	cout << str << endl;
    	system("pause");
    	retturn 0;
    }
    ```

    ```
    注意：C风格的字符串要用双引号括起来
    ```

 2. C++风格字符串：`string 变量名 = ”字符串值“ `

    ```c++
    int main(){
    	string str = "hello world";
    	system("pause");
    	return 0;
    }
    ```

    ```
    注意：这种方式定义变量，要加#include<string>头文件
    ```

#### 2.7 布尔类型Bool

作用：布尔数据类型代表真或假的值

bool只有两个值：

* true 	---- 真(本质是1)
* false    ---- 假(本质是0)

bool类型占一个字节

#### 2.8 数据的输入

作用：用于从键盘获取数据

关键字：cin

语法：`cin >> 变量`

```c++
int main() {
	int a = 100;
	cout << "请输入数字：" << endl;
	cin >> a;
	cout << "您输入的数字是：" << a << endl;
	system("pause");
	return 0;

}
```

### 3 运算符

作用：用于执行代码的运算

本章主要讲解以下几类运算符：

| 运算符     | 作用                                   |
| ---------- | -------------------------------------- |
| 算数运算符 | 用于处理四则运算                       |
| 赋值运算符 | 用于将表达式的值赋给变量               |
| 比较运算符 | 用于表达式的比较，并返回一个真值或假值 |
| 逻辑运算符 | 用于根据表达式的值返回真值或假值       |

#### 3.1 算数运算符

作用：用于处理四则运算

算术运算符包括以下符号：

| 运算符 | 术语     | 实例      | 结果    |
| ------ | -------- | --------- | ------- |
| +      | 正号     | +3        | 3       |
| -      | 负号     | -3        | -3      |
| +      | 加       | 10+6      | 16      |
| -      | 减       | 10-5      | 5       |
| *      | 乘       | 10*5      | 50      |
| /      | 除       | 10/5      | 2       |
| %      | 取余     | 10%8      | 2       |
| ++     | 前置递增 | a=2;b=++a | a=3;b=3 |
| ++     | 后置递增 | a=2;b=a++ | a=3;b=2 |
| --     | 前置递减 | a=2;b=--a | a=1;b=1 |
| --     | 后置递减 | a=2;b=a-- | a=1;b=2 |

#### 3.2 赋值运算符

作用：用于将表达式的值赋给变量

| 运算符 | 术语   | 示例         | 结果    |
| ------ | ------ | ------------ | ------- |
| =      | 赋值   | a=2;b=3      | a=2;b=3 |
| +=     | 加等于 | a=2;b=1;b+=a | a=2;b=3 |
| -=     | 减等于 | a=2;a-=1     | a=1     |
| *=     | 乘等于 | a=2;a*=2     | a=4     |
| /=     | 除等于 | a=2;a/=1     | a=2     |
| %=     | 模等于 | a=3;a%=2     | a=1     |

#### 3.3 比较运算符

作用：用于表达式的比较，并返回一个真值或假值

比较运算符有以下符号：

| 运算符 | 术语     | 示例 | 结果 |
| ------ | -------- | ---- | ---- |
| ==     | 等于     | 4==3 | 0    |
| !=     | 不等于   | 4!=3 | 1    |
| <      | 小于     | 4<3  | 0    |
| >      | 大于     | 4>3  | 1    |
| <=     | 小于等于 | 4<=3 | 0    |
| >=     | 大于等于 | 4>=3 | 1    |

#### 3.4 逻辑运算符

作用：用于根据表达式的值返回真值或假值

逻辑运算符有以下符号：

| 运算符 | 术语 | 示例   | 结果                           |
| ------ | ---- | ------ | ------------------------------ |
| ！     | 非   | !a     | a假，！a真                     |
| &&     | 与   | a&&b   | ab都为真，则为真，有一假，则假 |
| \|\|   | 或   | a\|\|b | ab有一真，则真，都加，才假     |

### 4 程序流程结构

c/c++支持最基本的三种程序运行结构：顺序结构、选择结构、循环结构

* 顺序结构：程序按顺序执行，不发生跳转
* 选择结构：依据条件是否满足，有选择的进行跳转
* 循环结构：依据条件是否满足，循环多次执行某段代码

#### 4.1 选择结构

##### 4.1.1 if-else结构

作用：执行满足条件的语句

if语句的三种形式

* 单行格式if语句
* 多行格式if语句
* 多条件的if语句

1. 单行格式if语句：`if(条件){条件满足执行的语句}`

   ```
   开始-->判断条件-->为真-->执行语句
   		|				|
   		|----——>为假-->结束
   ```

   ```c++
   int main() {
   	int score = 0;
   	cout << "请输入您的成绩：" << endl;
   	cin >> score;
   	if (score > 650) { cout << "恭喜您考上清华！！" << endl; }
   
   	system("pause");
   	return 0;
   
   }
   ```

2. 多行格式if语句:`if(条件){满足条件执行的语句}else{不满足条件执行的语句}`

   ```
   开始-->判断条件-->为真-->执行语句-->结束
   		|						|
   		|----——>为假-->执行语句----
   ```

   ```c++
   int main() {
   	int score = 0;
   	cout << "请输入您的成绩：" << endl;
   	cin >> score;
   	if (score > 650) { cout << "恭喜您考上清华！！" << endl; }
   	else { cout << "很遗憾，您没有考上！" << endl; }
   
   	system("pause");
   	return 0;
   
   }
   ```

3. 多条件的if语句：`if(条件1){满足条件1执行的语句}else if(条件2){满足条件2执行的语句}...else{所有条件都不满足执行的语句}`

   ```c++
   int main() {
   	int score = 0;
   	cout << "请输入您的成绩：" << endl;
   	cin >> score;
   	if (score > 650) { cout << "恭喜您考上清华！！" << endl; }
   	else if(score <650 && score > 500) { cout << "恭喜您考上人大！！" << endl; }
   	else if (score < 500 && score >200 ) { cout << "sorry, you are lose!" << endl; }
   	else { cout << "Are you test?" << endl; }
   
   	system("pause");
   	return 0;
   
   }
   ```

4. 嵌套if语句：在if语句中可以嵌套if语句，达到更精准的条件判断

   案例需求：

   * 提示用户输入一个高考成绩，根据分数做如下判断：
   * 分数大于600分考上一本，大于500分考上二本，大于400分考上三本，其余没考上
   * 一本分数中，大于700考上清华，大于650分考上人大

   ```c++
   int main() {
   	int score = 0;
   	cout << "请输入您的成绩：" << endl;
   	cin >> score;
   	if (score > 650) { 
   		if (score > 700) { cout << "恭喜考上清华" << endl; }
   		else if (score > 675) { cout << "恭喜考上人大" << endl; }
   	cout << "恭喜您考上一本！！" << endl; }
   	else if(score <650 && score > 500) { cout << "恭喜您考上二本！！" << endl; }
   	else if (score < 500 && score >200 ) { cout << "sorry, you are lose!" << endl; }
   	else { cout << "Are you test?" << endl; }
   
   	system("pause");
   	return 0;
   
   }
   ```

练习案例：三只小猪称体重

```c++
int main() {
	int a = 0;
	int b = 0;
	int c = 0;
	cout << "请输入三只小猪的体重：" << endl;
	cin >> a >> b >> c;
	if (a > b) {
		if (a > c) {
		cout << "pig a is fat!" << endl;
		}
		else {
		cout << "pig c is fat" << endl;
		}
	}
	else {
		if (b > c) {
			cout << "pig b is fat!" << endl;
		}
		else {
			cout << "pig c is fat!" << endl;
		}
	}
	system("pause");
	return 0;

}
```

##### 4.1.2 三目运算符

作用：通过三目运算符实现简单判断

语法：`表达式1?表达式2:表达式3`

解释：

如果表达式1的值为真，执行表达式2，并返回表达式2的结果

如果表达式1的值为假，执行表达式3，并返回表达式3的结果

```c++
int main() {
	int a = 0;
	int b = 0;
	int c = 0;
	a == b ? c = 1: c = 2;
	cout << c << endl;
	system("pause");
	return 0;

}
```

##### 4.1.3 switch语句

作用：执行多条分支语句

语法：

```c++
int main() {
	int a = 0;
	cout << "please tell me which day?" << endl;
	cin >> a;
	switch(a) {
	case 1:cout << "today is mon" << endl; break;
	case 2:cout << "today is 2" << endl; break;
	case 3:cout << "today is 3" << endl; break;
	case 4:cout << "today is 4" << endl; break;
	case 5:cout << "today is 5" << endl; break;
	case 6:cout << "today is 6" << endl; break;
	case 7:cout << "today is 7" << endl; break;
	}
	system("pause");
	return 0;
}
```

```
注意1：switch中的表达式类型只能是整型或者字符型
注意2：case里如果没有break，那么程序会一直向下执行
总结：与if语句相比，对于多条件判断时，switch的结构清晰，执行效率高，缺点是switch不可以判断区间
```

#### 4.2 循环结构

##### 4.2.1 while循环

作用：满足循环条件，执行循环语句

语法：`while(循环条件){循环语句}`

解释：只要循环的结果为真，就执行循环语句

```c++
int main() {
	int i = 0;
	while (i<10) {
		cout << "这是第" << i << "次输出" << endl;
		i++;
	}
	system("pause");
	return 0;
}
```

`注意：在执行循环语句的时候，程序必须提供跳出循环的出口，否则会出现死循环`

案例练习：猜数字

```c++
int main() {
	int num = 55;
	int uNum = 0;
	while (uNum != num) {
		cout << "请输入你猜的数字:" << endl;
		cin >> uNum;
		if (uNum < num) {
			cout << "猜小了" << endl;
		}
		else if(uNum > num ) {
			cout << "猜大了" << endl;int main() {
	// 添加随机数种子， 利用当前系统时间生成随机数，防止每一次随机数都一样
	srand((unsigned int)time(NULL));
	// 生成系统随机数
	int num = rand() % 100 + 1; // rand()%100+1生成0+1-99+1随机数
	int uNum = 0;
	while (uNum != num) {
		cout << "请输入你猜的数字:" << endl;
		cin >> uNum;
		if (uNum < num) {
			cout << "猜小了" << endl;
		}
		else if(uNum > num ) {
			cout << "猜大了" << endl;
		}
		else {
			cout << "猜对了" << endl;break;
		}
	}
	system("pause");
	return 0;
}
		}
		else {
			cout << "猜对了" << endl;
		}
	}
	system("pause");
	return 0;
}
```

##### 4.2.2 do...while循环语句

作用：满足循环条件，并执行循环语句

语法：`do{循环语句}while(条件)`

```c++
int main() {
	int uNum = 0;
	do { 
		cout << uNum << endl;
		uNum++;
	} while (uNum < 10);

	system("pause");
	return 0;
}
```

`注意：与while循环的区别是，dowhile循环会先执行一次，然后进行判断`

案例：计算100-999之间的水仙花数

```c++
int main() {
	int i = 0;
	int num = 100;
	int a, b, c, d;
	do { 
		a = num / 100; //百位
		b = (num - a*100) / 10 ; // 十位
		c = num - a * 100 - b * 10;
		d = a * a * a + b * b * b + c * c * c;
		if (d == num) {
			cout << "第" << i << "个水仙花数是:" << num << endl;
			++i;
		}
 		num++;
	} while (num < 1000 );

	system("pause");
	return 0;
}
```

##### 4.2.3 for循环语句

作用：满足循环条件，执行循环语句

语法：`for(起始表达式;条件表达式;末尾表达式){循环语句;}`

```
注意：for循环中的表达式，要用分号进行分割
总结:while,do..whild,for都是开发中常用的循环语句，for循环结构比较清晰，比较常用
```

案例：敲桌子

```c++
int main() {
	int i = 0;
	int num = 100;
	int a, b, c;
	for (int i = 1; i <= 100; i++) {
		a = i / 10; b = i % 10;
		if (a == 7 || b == 7) {
			cout << "为"<< i << "敲桌子" << endl;
		}
	}
	system("pause");
	return 0;
}
```

##### 4.2.4 循环嵌套

作用：在循环体中再嵌套一层循环，解决实际问题

案例：乘法口诀表

```c++
int main() {
	for (int i = 1; i <= 9; i++) {
		for (int j = 1; j <= i; j++) {
			cout << i << "*" << j << "=" << i * j<<"\t";
		}
		cout << endl;
	}
	system("pause");
	return 0;
}	
```

#### 4.3 跳转语句

##### 4.3.1 break语句

作用：用于跳出选择结构或循环结构

break使用的时机：

* 出现在switch语句中，作用是种植case并跳出switch
* 出现在循环语句中，作用是跳出当前的循环语句
* 出现在嵌套循环语句中，跳出最近的内层循环语句

##### 4.3.2 continue语句

作用：在循环语句中，跳过本次循环中余下尚未执行的语句，继续执行下一次循环

##### 4.3.3 goto语句

作用：可以无条件跳转语句

语法：`goto 标记`

解释：如果标记的名称存在，执行到goto语句时，会跳转到标记的位置

```c++
int main() {
	cout << "this is 1" << endl;
	goto FLAG;
	cout << "this is 2" << endl;
	cout << "this is 3" << endl;
	cout << "this is 4" << endl;
	FLAG:
	cout << "this is 5" << endl;
	cout << "this is 6" << endl;
	system("pause");
	return 0;
}
```

`尽量不要使用goto语句，以免造成程序流混乱`

### 5 数组

#### 5.1 概述

所谓数组，就是一个集合，里面存放了相同类型的数据元素

特点1: 数组中的每一个数据元素都是相同的数据类型

特点2: 数组是由连续的内存位置组成的

#### 5.2 一维数组

##### 5.2.1 一维数组的定义方式

一维数组的定义有三种方式：

```
1. 数据类型  数组名[数组长度];
2. 数据类型  数组名[数组长度] = {值1,值2,...}
3. 数据类型  数组名[] = {值1,值2,...}
```

```
总结1：数组名的命名规范和变量名的命名规范是一致的
总结2：数组中的下标是从0开始的
总结3：如果初始化数组时，没有全部初始化，未被初始化的数组元素将会被0填补
```

##### 5.2.2 一维数组数组名

一维数组名的用途：

1. 可以统计整个数组在内存中的长度
2. 可以获取数组在内存中的首地址

```c++
int main() {
	int arr[] = { 1,2,3,4,5,6,7 };
	// 可以获取整个数组占用内存空间的大小
	cout << sizeof(arr) << endl;
	cout << sizeof(arr[1]) << endl;
	cout << sizeof(arr) / sizeof(arr[1]) << endl;
	// 可以通过数组名获取数组首地址
	cout << (int)arr << endl; //输出为7339360
	cout << (int)&arr[0] << endl; // 输出为1
	system("pause");
	return 0;
}
```

案例1：五只小猪称体重

```c++
int main() {
	int arr[] = { 200,250,600,100,300 };
	int max = arr[0];
	for (int i = 1; i < 5; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	cout << max << endl;
	system("pause");
	return 0;
}
```

案例2：数组元素逆置

```c++
int main() {
	int arr[10] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
	int start = 0;
	int end = sizeof(arr) / sizeof(arr[0]) - 1 ;
	while (start<end) {
		int temp = 0;
		temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++; end--;
	}
	for (int i = 0; i < 10; i++) {
		cout << arr[i] << endl;
	}

	system("pause");
	return 0;
}
```

##### 5.2.3 冒泡排序

作用：最常见的排序算法，对数组内元素进行排序

1. 比较相邻的元素，如果第一个比第二个大，就交换位置
2. 对每一对相邻元素做同样的工作，执行完毕后，找到第一个最大值
3. 重复以上步骤，每次比较次数-1，知道不需要比较

```c++
int main() {
	int arr[10] = { 5,6,7,9,8,2,0,3,1,4 };
	int temp = 0;
	for (int i = 0; i < 10 -1; i++) {
		for (int j = 0; j < 10 -1 -i; j++) {
			if (arr[j] < arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
			else {
				continue;

			}
		}
	}
	for (int a = 0; a < 10; a++) {
		cout << arr[a] << endl;
	}
	system("pause");
	return 0;
}
```

#### 5.3 二维数组

二维数组就是在一维数组上，多加了一个维度

##### 5.3.1 二维数组定义方式

二维数组定义的四种方式

1. `数据类型  数组名[行数][列数]；`
2. `数据类型  数组名[行数][列数] = {{数据1，数据2},{数据3，数据4}}；`
3. `数据类型  数组名[行数][列数] = {数据1，数据2，数据3，数据4}；`
4. `数据类型  数组名[][列数] = {数据1，数据2，数据3，数据4}；`

`建议使用第二种，增加代码可读性`

##### 5.3.2 二维数组的数组名

* 查看二维数组所占内存空间
* 获取二维数组首地址

```c++
int main() {
	int arr[2][3] = { 0,1,2,3,4,5 };
	cout << sizeof(arr) << endl;
	cout << sizeof(arr[0]) << endl;
	cout << sizeof(arr[0][0]) << endl;

	// 地址
	cout << arr << endl;		// 数组首地址
	cout << arr[0] << endl;		// 数组第一行首地址
	cout << &arr[0][0] << endl;	// 数组第一行第一列元素地址

	system("pause");
	return 0;
}
```

##### 5.3.3 二维数组应用案例

考试成绩统计：分别输出三名同学的总成绩

|      | 语文 | 数学 | 英语 |
| ---- | ---- | ---- | ---- |
| 张三 | 120  | 118  | 112  |
| 李四 | 60   | 90   | 80   |
| 王五 | 30   | 20   | 19   |

```c++
int main() {
	int score[3][3] = { {100,100,100},{90,50,100},{60,70,80} };
	int zs = 0, ls = 0, ww = 0;
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			switch (i) {
			case 0:zs += score[i][j]; break;
			case 1:ls += score[i][j]; break;
			case 2:ww += score[i][j]; break;
			}
		}
	}
	cout << zs << endl;
	cout << ls << endl;
	cout << ww << endl;
	system("pause");
	return 0;
}
```

### 6 函数

#### 6.1 概述

作用：将一段经常使用的代码封装起来，减少重复代码

一个较大的程序，一般分为若干个程序块，每个模块实现特定的功能

#### 6.2 函数的定义

函数的定义主要有五个步骤：

1. 返回值类型
2. 函数名
3. 参数表列
4. 函数体语句
5. return表达式

```
返回值类型  函数名(参数列表){
	函数体；
	return表达式
}
```

* 返回指针类型：一个函数可以返回一个值，在函数定义中
* 函数名：给函数起的名称
* 参数列表：使用该函数时，传入的数据
* 函数体语句：花括号内的代码，函数内需要执行的语句
* return表达式：和返回值类型挂钩，函数执行完后，返回相应的数据

```c++
int add(int a,int b) {
	int c = a + b;
	return c;
}
```

#### 6.3 函数的调用

功能：使用定义好的函数

语法：`函数名(参数)`

```c++
int main() {
	int a, b;
	cin >> a >> b;
	cout << add(a, b) << endl;
	system("pause");
	return 0;
}
```

`总结：函数定义里小括号称为形参，函数调用时传入的参数称为实参`

#### 6.4 值传递

* 所谓值传递，就是函数调用时实参将数值传入给形参
* 值传递时，如果形参发生变化，并不会影响实参

#### 6.5 函数的常见样式

常见的函数样式有4种：

1. 无参无返
2. 有参无返
3. 无参有返
4. 有参有返

```c++
// 无参无返
void print() {
	cout << "helloworld" << endl;
}
// 有参无返
void printU(string a) {
	cout << a << endl;
}
// 无参有返
int a() {
	int a = 10; int b = 20;
	return a + b;
}
// 有参有返
int add(int a,int b) {
	return a + b;
}
```

#### 6.6 函数的声明

作用：告诉编译器函数名称及如何调用函数，函数的实际主体可以单独定义

* 函数的声明可以多次，但是函数的定义只能有一次

```c++
// 比较函数  谁大返回谁
int compare(int a, int b);
int main() {
	int a = 10;
	int b = 11;
	cout << compare(a, b) << endl;

	system("pause");
	return 0;
}
int compare(int a, int b) {
	if (a < b) {
		return b;
	}
	else {
		return a;
	}
}
```

#### 6.7 函数的分文件编写

作用：让代码结构更加清晰

函数的分文件编写一般有四个步骤

1. 创建后缀名为.h 的头文件
2. 创建后缀名为.cpp的源文件
3. 在头文件中写函数的声明
4. 在源文件中写函数的定义，通过#include "头文件.h" 引入到源文件
5. 在入口文件通过#include "头文件.h"引入函数

### 7  指针

#### 7.1 指针的基本概念

指针的作用：可以通过指针间接访问内存

* 内存编号是从0开始记录的，一般用十六进制数字表示
* 可以利用指针变量保存地址

#### 7.2 指针变量的定义和使用

指针变量的定义语法：`数据类型 * 变量名`；

```c++
	// 定义指针
	int a = 10;
	int* p ;
	p = &a;
	cout << p << &a << endl;
	// 在指针前面加*来解引用，找到指针指向的内存中的数据
	cout << *p << endl;
```

#### 7.3 指针所占内存的空间

提问：指针也是一种数据类型，那么这种数据类型占多少内存空间呢?

```c++
// 在32位操作系统下，指针是占4个字节空间大小，不管是什么数据类型
// 在64位操作系统下，指针是占8个字节空间大小，不管是什么数据类型
```

#### 7.4 空指针和野指针

空指针：指针变量指向内存中编号为0的空间

用途：初始化指针变量

注意：空指针指向的内存是不可以访问的

```c++
int * p = NULL;
cout << p << endl;   // 输出为00000
```

野指针：指针变量指向非法的内存空间

```c++
int * p = (int *) 0x1100;
cout << p << endl;   // 程序崩溃
```

`总结：空指针和野指针都不是我们申请的的空间，因此我们不要访问`

#### 7.5  const修饰指针

const修饰指针有三种情况：

1. const修饰指针 ---- 常量指针： 指针的指向可以修改，指针指向的值不可以改

   `const int * p = a;`

2. const修饰常量 ---- 指针常量：指针的指向不可以改，指针指向的值可以改

   `int * const p = a;`

3. const即修饰指针，也修饰常量

   `const int * const p = a;`

`技巧：看const右侧见跟着的是指针还是常量，是指针就是常量指针，是常量就是指针常量`

#### 7.6 指针和数组

作用：利用指针访问数组中的元素

```c++
int main() {
	int arr[10] = { 0,1,2,3,4,5,6,7,8,9 };
	int* p = &arr[0];
	for (int i = 0; i < 10; i++) {
		cout << *p << endl;
		p++;
	}
	system("pause");
	return 0;
}

```

#### 7.7 指针和函数

作用：利用指针做函数参数，可以修改实参的值

```c++
//  函数
void aa(int * p1,int * p2) {
	
	int temp = *p1;
	*p1 = *p2;
	*p2 = temp;
}

int main() {
	int a = 100;
	int b = 200;
	aa(&a, &b);
	cout << a << endl;
	cout << b <<endl;

	system("pause");
	return 0;
}

```

`如果想修改实参的值，就用指针传递，不想修改就用值传递`

#### 7.8 指针、数组、函数

案例描述：封装一个函数，利用冒泡排序，实现对整型数组的升序排列

```c++
void seq(int* arr, int len) {
	for (int i = 0; i < len - 1; i++) {
		for (int j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}
int main() {
	int arr[] = { 5,6,7,1,3,2,0,8,9,4 };
	seq(arr,10);
	for (int i = 0; i < 10; i++) {
		cout << arr[i] << endl;
	}
	system("pause");
	return 0;
}
```

### 8 结构体

#### 8.1 结构体基本概念

结构体术语用户自定义的数据类型，允许用户存储不同的数据类型

#### 8.2 结构体定义和使用

语法：`struct 结构体名 {结构体成员列表}`

通过结构体创建变量的方式有三种：

* struct 结构体名 变量名
* struct 结构体名 变量名 = {成员1，成员2}
* 定义结构体时顺便创建变量

```c++
struct student {
	string name;
	int num;
	int age;
	string sex;
};
struct students {
	string name = "马中豪";
	string age = "马中豪";
	string namex = "马中豪";
	string agex = "马中豪";
}c;
int main() {
	// struct 结构体名 变量名
	struct student a;
	a.name = "马中豪";
	a.age = 18;
	a.num = 18;
	a.sex = "男";
	cout << a.name << endl;
	// struct 结构体名 变量名 = {成员值1，成员值2....}
	struct student b = { "mazhonghao",181,18,"nan"};
	cout << b.age
		<< endl;
	// 结构体定义是顺便创建结构体变量

	cout << c.age << endl;
	system("pause");
	return 0;
}

```

```c++
// 总结1： 定义结构体的关键字时struct，不可省略
// 总结2： 创建结构体变量是，关键字struct可以省略
// 总结3： 结构体变量利用操作符"."访问成员
```

#### 8.3 结构体数组

作用：酱紫定义的结构体放入到数组中便于维护

语法：`struct 结构体名 数组名[元素个数] = {{}，{}，{}} `

```c++
struct student {
	string name;
	int age; 
	int sNum;
	string sex;
};
int main() {
	student students[3] = {
		{"zhangsan",18,18,"nan"},
		{"lisi",18,18,"nan"},
		{"wangwu",18,18,"nan"},
	};
	for (int i = 0; i < 3; i++) {
		cout << students[i].name << endl;
	}
	system("pause");
	return 0;
}

```

#### 8.4 结构体指针

作用：通过指针访问结构体中的成员

* 利用操作符`->`可以通过结构体指针访问结构体属性

```c++
struct student {
	string name;
	int age; 
	int sNum;
	string sex;
};
int main() {
	student students= {
		"zhangsan",18,18,"nan"
	};
	student* p = &students;

	p->age = 19;
	cout << students.age << endl;
	system("pause");
	return 0;
}
```

#### 8.5 结构体嵌套结构体

作用：结构体中的成员可以是另一个结构体

例如：每个老师辅导一个学员，一个老师的结构体中，记录一个学生的结构体

```c++
struct student {
	string name;
	int teacherNum;
};
struct teacher {
	string name;
	int age; 
	int tNum;
	string sex;
	struct student students;
};

int main() {
	student students = { "mazhonghao",18 };
	teacher teachers = {
		"zhangsan",18,18,"nan", students
	};
	cout << teachers.students.name << endl;
	system("pause");
	return 0;
}

```

#### 8.6 结构体做函数参数

作用：将结构体作为参数像函数中传递

传递方式有两种：

1. 值传递
2. 地址传递

```c++
struct student {
	string name;
	int age;
};
// 值传递
void msg(struct student s) {
	cout << s.name << s.age << endl;
}
// 地址传递
void msg2(struct student* p) {
	cout << p->name << p->age << endl;

	}
int main() {
	student students = { "zhangsan",19 };
	student* p = &students;
	msg2(p);
	msg(students);
	system("pause");
	return 0;
}

```

`如果不想修改主函数中的数据，用值传递，反之用地址传递`

#### 8.7 结构体中const的使用场景

作用：用const来防止误操作

```c++
struct student {
	string name;
	int age;
};
void msg(const student* p) {
	//p->age = 19;  // 这是错误的
	cout << p->age << p->name << endl;
}
int main() {
	student students = { "zhangsan",19 };
	student* p = &students;
	msg(p);
	system("pause");
	return 0;
}

```

#### 8.8 结构体案例

##### 8.8.1 案例1

案例描述：学校正在做毕设项目，每名老师带领五名同学，总共有3名老师，需求如下：

设计学生和老师的结构体，其中在老师的结构体中，有老师姓名和存放五个学生的数组作为成员。

学生的成员有姓名、考试分数、创建数组存放三名老师，通过函数给每个老师及所带的学生赋值，最终打印出来老师数据及老师老师所带学生的数据

```c++
struct student {
	string sname;
	int score;
};
struct teacher {
	string tname;
	struct student students[5];
} ;
void allocateSpace(struct teacher tarray[],int tlen) {
	string nameSeed = "ABCDEFG";
	for (int i = 0; i < tlen; i++) {
		tarray[i].tname = "teacher_";
		tarray[i].tname += nameSeed[i];
		for (int j = 0; j < 5; j++) {
			tarray[i].students[j].sname = "student_";
			tarray[i].students[j].sname += nameSeed[j];
			tarray[i].students[j].score = rand() % 61 + 40;

		}
	}
}
void print(struct teacher tarray[], int tlen) {
	for (int i = 0; i < tlen; i++) {
		cout << tarray[i].tname << endl;
		for (int j = 0; j < 5; j++) {
			cout << tarray[i].students[j].score<< endl;

		}
	}
}
int main() {
	teacher teachers[3];
	student students[5];
	allocateSpace(teachers,3);
	print(teachers, 3);
	system("pause");
	return 0;
}

```

##### 8.8.2 案例2

案例描述：

设计一个英雄的结构体，包含成员姓名，年龄，性别，创建结构体数组，数组中存放5名英雄，通过冒泡排序算法，将数组中的英雄按照年龄进行升序排列，最终打印排序后的结果

```c++
struct hero {
	string name;
	int age;
	string sex;
};
void seq(struct hero heros[], int length) {
	hero temp;
	for (int i = 0; i < length - 1; i++) {
		for (int j = 0; j < length - 1 - i; j++) {
			if (heros[j].age> heros[j + 1].age) {
				temp.age = heros[j].age;
				heros[j].age = heros[j + 1].age;
				heros[j + 1].age = temp.age;
				temp.name = heros[j].name;
				heros[j].name = heros[j + 1].name;
				heros[j + 1].name = temp.name;
				temp.sex = heros[j].sex;
				heros[j].sex = heros[j + 1].sex;
				heros[j + 1].sex = temp.sex;

			}
		}
	}
	for (int a = 0; a < length; a++) {
		cout << heros[a].name << "今年" << heros[a].age << "岁，是个" <<
			heros[a].sex << "生" << endl;
	}
}
int main() {
	hero heros[5] = {
		{"刘备",23,"男"},
		{"关羽",22,"男"},
		{"张飞",21,"男"},
		{"赵云",20,"男"},
		{"诸葛亮",50,"男"},
	};
	seq(heros,5);
	system("pause");
	return 0;
}

```

### 9 通讯录管理系统

#### 9.1 系统需求

通讯录是一个可以记录亲人好友信息的工具，本教程利用c++实现通讯录管理系统

系统中需要实现的功能如下：

* 添加联系人：向通讯录中添加新联系人，包含姓名、性别、年龄、电话、住址，最多纪录一千人
* 显示联系人：显示通讯录中所有联系人信息
* 删除联系人：按照姓名删除指定联系人
* 查找联系人：按照姓名查看指定联系人信息
* 修改联系人：按照姓名重新修改指定联系人
* 清空联系人：清空所有信息
* 退出通讯录

#### 9.2 创建项目

创建项目步骤：

* 创建新项目
* 添加文件

##### 9.2.1 创建项目

##### 9.2.2 创建文件

##### 9.2.3 菜单功能

功能描述：用户选择功能的界面

步骤：

* 封装函数显示该界面
* 在main函数中调用封装好的函数

##### 9.2.4 退出

功能描述：退出通讯录

思路：根据用户不同的选择，进入不同的功能，使用switch分支结构，对整体架构进行搭建

##### 9.2.5 添加联系人

功能描述：实现添加联系人的功能，联系人上限为1000人，联系人信息包括（姓名、性别、年龄、电话、住址）

添加联系人实现步骤：

* 设计联系人结构体
* 设计通讯录结构体
* main函数中创建通讯录
* 封装添加联系人函数
* 测试联系人功能

###### 9.2.5.1 设计联系人结构体

```
```

# C++核心编程

### 1 内存分区模型

C++程序运行时，将内存大方向划分为四个区域

* 代码区：存放函数体的二进制代码，由操作系统进行管理
* 全局区：存放全局变量和静态变量以及常量
* 栈区：由编译器自动分配释放，存放函数的参数值，局部变量等
* 堆区：由程序员分配和释放，程序员不是放，程序结束由操作系统回收

内存四区的意义：

不同区域存放的数据，赋予不同的生命周期，给更大灵活度的编程

#### 1.1 程序运行前

在程序编译后，生成了exe可执行程序，为执行该程序前分为两个区域

代码区：

​	存放CPU执行的机器命令

​	代码区是共享的，共享的目的是对于频繁被执行的程序，只需要在内存中有一份代码即可

​	代码区是只读的，使其只读的原因是防止程序意外修改其指令

全局区：

​	全局变量和静态变量存放在此

​	全局区还包含了常量区，字符串常量和其他常量也存放在此

​	该区域的数据在程序结束后由系统释放

总结：

1. C++中在程序运行前分为全局区和代码区
2. 代码区的特点是共享和只读
3. 全局区中存放全局变量、静态变量和常量
4. 常量区中存放const修饰的全局常量和字符串常量

#### 1.2 程序运行后

**栈区：**

​	由编译器子佛那个分配释放，存放函数的参数值，局部变量等

​	注意事项：不要返回局部变量的地址，栈区开辟的数据由编译器自动释放

```c++
int * func(int b) {	// 形参数据也会放在栈区
	int a = 100;	// 局部变量，存放在栈区，栈区的数据在函数执行完后自动释放
	return &a;		// 返回局部变量地址
}
int main() {
	int a = 10;
	int* p = func(a);
	cout << *p << endl;	// 第一次可以打印正确数字，是因为编译器做了保留
	cout << *p << endl;	// 第二次这个数据就不再保留了
	system("pause");
	return 0;
}

```

**堆区**

​	由程序员分配释放，如果程序员不释放，程序结束时由操作系统挥手

​	在C++中主要利用new在堆区开辟内存

```c++
int * func() {	
	int* a = new int(10);
	return a;
}
int main() {
	int* p = func();
	cout << *p << endl;
	cout << *p << endl;
	cout << *p << endl;
	cout << *p << endl;
	system("pause");
	return 0;
}

```

**总结**

堆区数据由程序员管理开辟和释放

堆区数据利用new关键字进行开辟内存

#### 1.3 new操作符

C++利用new操作符在堆区开辟数据

堆区开辟的数据，由程序员手动开辟，手动释放，释放利用操作符delete

语法：`new 数据类型（初始值）`

利用new关键字创建的数据会返回该数据对应的类型的指针，例如`new int(10)`会返回整型指针

```c++
int * func1() {	
	int* a = new int(10);
	return a;

}
int* func2() {
	int* a = new int[10];
	for (int i = 0; i < 10; i++) {
		a[i] = 100 + i;
	}
	for (int i = 0; i < 10; i++) {
		cout << a[i] << endl;
	}
	return a;
}
void test01() {
	int* p = func1();
	cout << *p << endl;
	delete p;
}
void test02() {
	int* p = func2();
	delete[] p;

}
int main() {
	test01();
	test02();
	system("pause");
	return 0;
}

```

### 2 引用

#### 2.1 引用的基本使用

作用：给函数起别名

语法：`数据类型 &别名 = 原名`

```c++
int main() {
	int a = 10;
	int& b = a;
	cout << a << endl;
	cout << b << endl;
	b = 100;
	cout << a << endl;
	cout << b << endl;
	system("pause");
	return 0;
}

```

#### 2.2 引用注意事项
#### 2.3 引用做函数参数

作用：函数传参时，可以利用引用的技术让形参修饰实参

优点：可以简化指针修改实参

```c++
// 值传递
void change1(int a,int b) {
	int temp = a;
	a = b;
	b = temp;
 }
// 地址传递
void change2(int* a, int* b) {
	int temp = *a;
	*a = *b;
	*b = temp;
}
// 引用传递
void change3(int &a,int &b) {
	int temp = a;
	a = b; 
	b = temp;
}
int main() {
	int a = 10;
	int b = 100;
	change1(a,b);
	cout << "值传递"<<  a << b << endl;
	change2(&a, &b);
	cout <<"地址传递" << a << b << endl;
	change3(a, b);
	cout << "引用传递" << a << b << endl;
	system("pause");
	return 0;
}

```

`通过引用参数产生的效果是同按地址传递一样的，引用的语法更加简单清楚`

#### 2.4 引用做函数返回值

作用：引用是可以作为函数的返回值存在的

注意：**不要返回局部变量引用**

用法：函数调用作为左值

```c++
int& test1() {
	int a = 10; return a;
}
int& test2() {
	int a = 10;
	return a;
}
int main() {
	int& a = test1();
	cout << a << endl;	// 这是正常输出
    cout << a << endl;	// 这是不正常输出
	int& ref = test2();
	cout << ref << endl;
	test2() = 1000;
	cout << ref << endl;
	system("pause");
	return 0;
}
```



#### 2.5 引用的本质

本质：引用的本质在C++内部实现是一个指针常量

```c++
// 发现是引用，转换为int * const ref = &a;
void func(int& ref) {
	ref = 100;	// ref是引用，转换为*ref = 100；
}
int main() {
	int a = 10;
	// 自动转换为 int * const ref = &a ;指针常量是指针指向不可更改，也说明为什么引用不可更改
	int& ref = a;
	ref = 20;// 内部发现ref是引用，自动帮我们转换为：*ref = 20;
	cout << "a:" << a << endl;
	cout << "ref:" << ref << endl;
	system("pause");
	return 0;
}
```

结论：C++推荐使用引用技术，因为语法方便，引用本质是指针常量，但是所有的指针操作编译器都帮我们做了

#### 2.6 常量引用

作用：常量引用主要是用来修饰形参，防止误操作

在函数形参列表中，可以加const修饰形参，防止形参改变实参

```c++
void change(const int& a) {
	cout << "change函数输出" << a << endl;
}
int main() {
	// int& ref = 10;// 引用本身需要一个合法的内存空间，因此返回这行错误
	const int& ref = 10;// 加入const就可以了，编译器优化代码：int temp = 10;int &ref = temp;
	int a = 10;
	change(a);
	cout << "main函数输出" << a << endl;
	system("pause");
	return 0;
}
```

### 3 函数提高

#### 3.1 函数默认参数

在C++中，函数的形参列表中的形参是可以有默认值的

语法：`返回值类型 函数名（参数 = 默认值）{}`

```c++
// 函数声明有默认参数，函数实现就不能有默认参数
// 声明和实现只能有一个默认参数
void aa(int a,int b);
void aa(int a = 10, int b = 20) {
	cout << a + b << endl;
}
int main() {
	aa(50,60);
	system("pause");
	return 0;
}
```

####  3.2 函数占位参数

C++中函数的形参列表里可以有占位参数，用来展位，调用函数时必须填补该位置

语法:`返回值类型 函数名 （数据类型）{}`

现阶段函数的展位参数存在意义不大，后面的课程中会用到该技术

```c++
// 占位参数还可以有默认参数
void aa(int a,int) {
	cout << a  << endl;
}
int main() {
	aa(50，10); // 占位参数必须填补
	system("pause");
	return 0;
}
```



#### 3.3 函数重载

##### 3.3.1 函数重载概述

作用：函数名可以相同，提高复用性

函数重载满足条件：

	1. 同一个作用域下
	1. 函数名相同
	1. 函数参数类型不同，或者个数不同，或者顺序不同

注意：函数的返回值不可以作为函数重载的条件

```c++

void aa(int a，int) {
	cout << "it is aa func123" << endl;
}
// 函数的返回值不可以做为函数重载的条件
int  aa(float a) {
	cout << "it is aa func" << endl;
	return 1;
	
}
int main() {
	aa(50);
	aa(50.1);
	system("pause");
	return 0;
}
```

##### 3.3.2 函数重载的注意事项

* 引用作为重载条件
* 函数重载碰到函数默认参数

```c++
// 函数重载的注意事项
// 1. 引用作为重载条件
void aa(int& a) {	
	cout << "this is aaaa" << endl;
}
void aa(const int& a) {
	cout << "this is aa" << endl;
}
// 2. 函数重载碰到默认参数
void bb(int a,int b = 10) {
	cout << "bb is a diaoyong 111111" << endl;
}
void bb(int a) {
	cout << "bb is a diaoyong " << endl;
}
int main() {
	int a = 10;
	int& b = a;
	aa(b);
	aa(10);
    ////
    bb(a);  //此处不对   会出现二义性
    
	system("pause");
	return 0;
}
```

### 4 类和对象

C++面向对象的三大特性为：封装继承多态

C++认为万事万物皆为对象，对象上有其属性和行为

例如：

​	人可以作为对象，有姓名性别年龄身高等属性

​	车也可以作为对象，具有轮胎方向盘车灯等属性

​	具有相同性质的对象，我们可以抽象成为类，人属于人类，车属于车类

#### 4.1 封装

##### 4.1.1 封装的意义

封装是C++面向对象三大特征之一

封装的意义：

	1. 将属性和行为作为一个整体，表现生活中的事务
	1. 将属性和行为加以权限控制

封装意义一：

​	在设计类的时候，属性和行为写在一起，表现事物

语法：`class 类名 {访问权限：属性/行为}`

示例1：设计一个圆类，求圆周长

示例2：设计一个学生类，有学号姓名，可以给学号姓名赋值，可以显示学生的姓名和学号

```c++
// 圆求周长公式  r = 2*PI*r
class circle {
	// 访问权限
	public: // 公共权限
	// 属性
	int C_r;
	// 行为  获取周长
	double claculate() {
		return 2 * PI * C_r;
	}

};
class Student {
public:
	string name;
	string num;
	void print() {
		cout << name << "的学号是：" << num << endl;
	}
};
int main() {
	circle c1;
	c1.C_r = 10;
	cout << c1.claculate() << endl;
	Student s1;
	s1.name = "mazhonghao";
	s1.num = "1713010247";
	s1.print();
	system("pause");
	return 0;
}
```

封装意义二：

类在设计时，可以把属性和行为放在不同的权限下，加以控制 访问权限有三种

1. public		公共权限        类内可以访问  类外也可以访问
2. protected   保护权限        类内可以访问   类外不可以访问   儿子可以访问父亲的保护内容
3. private       私有权限        类内可以访问   类外不可以访问    儿子不可以访问父亲的私有内容

##### 4.1.2 class和struct的区别

在C++中struct和class唯一的区别就在于默认的访问权限不同

区别：

* struct默认权限为公共
* class默认权限为私有

##### 4.1.3 将成员属性设为私有

优点1：将所有成员属性设置为私有，可以自己控制读写权限

优点2：对于读写权限，我们可以检测数据的有效性

```c++
class People {
public:
	void setName(string a) {
		name = a;
	}
	string getName() {
		return name;
	}
	string getNum() {
		return num;
	}
private:
	// name可读可写
	string name;
	string num;

};
int main() {
	People p1;
	p1.setName("马中豪");
	cout << p1.getName() << endl;
	system("pause");
	return 0;
}
```

案例：设计立方体类

设计立方体Cube，求立方体的面积和体积  分别用全局函数和成员函数判断两个立方体是否相等

```C++
class Cube {
public:
	void setL(int a) {
		l = a;
	}
	void setW(int b) {
		w = b;
	}
	void setH(int c) {
		h = c;
	}
	int getL() {
		return l;
	}
	int getW() {
		return w;

	}
	int getH() {
		return h;
	}
	void measureCube() {
		cout << "立方体的表面积是：" << 2 * l * w + 2 * l * h + 2 * w * h << endl;
	}

	void bulkCube(){
		cout << "立方体的体积是：" << l * w * h << endl;
	}
	void chengyuan(Cube b) {
		if (l == b.l && w == b.w && h == b.h) {
			cout << "这两个立方体相等" << endl;
		}
	}
private:
	int l;
	int w;
	int h;
};
void judgementCube(Cube a,Cube b) {
	int l1, w1, h1;
	int l2, w2, h2;
	l1 = a.getL();
	w1 = a.getW();
	h1 = a.getH();
	l2 = a.getL();
	w2 = a.getW();
	h2 = a.getH();
	if (l1 == l2 && w1 == w2 && h1 == h2) {
		cout << "这两个立方体相等" << endl;
	}

}
int main() {
	Cube a;
	Cube b;
	a.setH(10);
	a.setW(10);
	a.setL(10);
	b.setH(10);
	b.setW(10);
	b.setL(10);
	a.measureCube();
	a.bulkCube();
	b.measureCube();
	b.bulkCube();
	judgementCube(a, b);
	a.chengyuan(b);
	system("pause");
	return 0;
}
```

#### 4.2 对象的初始化和清理

* 生活中我们买的电子产品都会有出厂设置，在某一天我们不用的时候也会删除一下自己的信息数据保证安全
* C++中的面向对象来源于生活，每个对象也都会有初始设置 以及对象销毁前的清理数据的设置

##### 4.2.1 构造函数和析构函数

对象的初始化和清理也是两个非常重要的安全问题

* 一个对象或者变量没有出示状态，对其使用后果是未知
* 同样的使用完一个对象或者变量，没有及时清理，也会造成一定的安全问题

C++利用了构造函数和析构函数解决上述问题，这两个函数将会被编译器自动调用，完成对象初始化和清理工作。对象的初始化和清理工作是编译器强制要我们做的事情，因此，如果我们不提供构造和析构，编译器会提供编译器提供的构造函数和析构函数是空实现。

* 构造函数:主要作用在于创建对象时为对象的成员属性赋值，构造函数由编译器自动调用，无需手动调用
* 析构函数：主要作用在于对象销毁前系统自动调用，执行一些清理工作

构造函数语法：`类名(){}`

1. 构造函数，没有返回值也不写void
2. 函数名称与类名相同
3. 构造函数可以有参数，因此可以发生重载
4. 程序在调用对象时会自动调用构造，无需手动调用，而且只会调用一次

析构函数语法: `~类名（）{}`

1. 析构函数，没有返回值也不写void
2. 函数名称与类名相同，在名称前面加符号~
3. 析构函数不可以有参数，因此不可以发生重载
4. 程序在对象销毁前会自动调用析构，无需手动调用，而且只会调用一次

```c++
class Person {
	public:
	Person() {
		cout << "zheshi gouzaohanshu " << endl;
	}

	~Person() {
		cout << "xigouhanshu" << endl;
	}
};
// 
void test01() {
	Person p; // 这是在栈区上的数据
}
int main() {
	test01();
	system("pause");
	return 0;
}
```

##### 4.2.2 构造函数的分类及调用

两种分类方式：

1. 按参数分类：有参构造和无参构造
2. 按类型分类：普通构造和拷贝构造

三种调用方式：

1. 括号法
2. 显示法
3. 隐式转换法

```c++
class Person {
public:
	// 无参构造函数
	Person() {
		cout << "structure function" << endl;
	}
	// 有参构造函数
	Person(int a) {
		cout << "有参调用" << endl;

	}
	// 拷贝构造函数
	Person(const Person &p) {

	}
	// 析构
	~Person() {
		cout << "distructor function" << endl;
	}

};
// 
void test01() {

	// 1. 括号法
	//Person p1; // 默认调用
	//Person p2(10);	// 有参构造函数
	//Person p3(p1);  // 拷贝构造函数
	// notice: 调用默认构造函数的时候，不要加（），加了括号编译器会认为这是函数声明
	
	// 2. 显示法
	//Person p1; // 默认调用
	Person p2 = Person(10);	// 有参构造函数
	Person p3 = Person(p2);  // 拷贝构造函数
	//Person(10); // 匿名对象，特点：当前执行结束后，系统会立即回收掉匿名对象
	// notice：不要利用拷贝构造函数，初始化匿名对象，编译器会认为Person (p3) == Person p3

	// 3. 隐式转换法
	Person p4 = 10; // 相当于写了Perosn p4 = Person(10)
	Person p4 = p3; // 拷贝构造
}
int main() {

	system("pause");
	return 0;
}
```

##### 4.2.3 拷贝构造函数的调用时机

c++中拷贝构造函数调用时机通常有三种情况

* 使用一个已经创建完毕的对象来初始化一个新对象
* 值传递的方式给函数参数传值
* 以值方式返回局部对象

```c++
class Person {
public:
	// 无参构造函数
	Person() {
		cout << "structure function" << endl;
	}
	// 有参构造函数
	Person(int a,string b) {
		cout << "有参构造函数" << endl;
		age = a;
		sex = b;
	}
	// 拷贝构造函数
	Person(const Person &p) {
		age = p.age;
		sex = p.sex;
	}
	int age;
	string sex;
	// 析构
	~Person() {
		cout << "distructor function" << endl;
	}

};
// 
Person test03() {
	Person p;
	return p;
}

void test02(Person p) {

}
void test01() {
	Person p1(10,"nan");
	Person p2 = p1;
	cout << p2.age << p2.sex<< endl;
}
int main() {
	// test01();
	test03();
	system("pause");
	return 0;
}
```

##### 4.2.4 构造函数的调用规则

默认情况下，c++编译器至少给一个类添加三个函数

1. 默认构造函数，无参，函数体为空
2. 默认析构函数，无参，函数体为空
3. 默认拷贝构造函数，对属性值进行拷贝

构造函数调用规则如下：

* 如果用户定义有参构造函数，c++不再提供默认无参构造，但会提供默认拷贝构造
* 如果用户定义拷贝构造，c++不会再提供其他构造函数

```C++
class Person {
public:
	/*Person(int a) {
		age = a;
		cout << "有参构造函数" << age<<endl;
	 }*/
	int age;
	Person(const Person& p) {
		age = p.age;
	}
};
void test() {
	Person p1;  // 这是错的
	Person p2 = p1;
	cout << p2.age << endl;
}
int main() {
	test();
	system("pause");
	return 0;
}
```

##### 4.2.5 深拷贝与浅拷贝

深浅拷贝时面试经典问题，也是常见的一个坑

浅拷贝：简单的赋值拷贝操作

深拷贝：在堆区重新申请空间，进行拷贝操作

```c++
class Person {
public:
	Person() {
		cout << "person 的默认构造函数调用" << endl;
	}
	Person(int a,int h) {
		age = a;
		height = new int(h);
		cout << "person 的有参构造函数调用" << endl;
	}
	// 自定义拷贝构造函数,实现深拷贝
	Person(const Person& p) {
		cout << "自定义的拷贝构造函数" << endl;
		age = p.age;
		height = new int(*p.height);
	}
	~Person() {
		// 将堆区的数据做释放操作
		if (height != NULL) {
			delete height;
			height = NULL;
		}
		cout << "person 的析构函数调用" << endl;
	}
	int age;
	int* height;
};
void test01() {

	Person p1(10,180);
	cout << "p1的年龄是:"<<p1.age<< *p1.height << endl;
	Person p2(p1);
	cout << "p2的年龄是:" << p2.age << *p2.height << endl;

}
int main() {
	test01();
	system("pause");
	return 0;
}
```

`总结：如果属性有在堆区开辟的，一定要自己提供拷贝构造函数，防止浅拷贝带来的问题`

##### 4.2.6 初始化列表

作用：c++提供了初始化列表语法，用来初始化属性

语法：`构造函数（）：属性1（值1），属性2（值2）....{}`

```c++
class Person {
public :
	//传统初始化方法
	//Person(int a, int b, int c) {
	//	aa = a;
	//	bb = b;
	//	cc = c;
	//}
	// 初始化列表
	Person(int a,int b,int c) :aa(a), bb(b), cc(c) {

	}
	int aa, bb, cc;
};
int main() {
	//Person p1(1, 2, 3);
	Person p1(4,5,6);
	cout << p1.aa << p1.bb << p1.cc << endl;
	system("pause");
	return 0;
}
```

##### 4.2.7 类对象作为类成员

c++类中的成员可以是另一个类的对象，我们称该成员为对象成员

例如：

```c++
class A();
class B{
A a;
}
```

B类中有对象A作为成员，A为对象成员

那么当创建B对象时，A与B的构造和析构的顺序是谁先谁后

```c++
class A {
public :
	A() {
		cout << "A的默认构造函数" << endl;
	}
	~A() {
		cout << "A的析构函数" << endl;
	}
};
class B {
public:
	B() {
		cout << "B的默认构造函数" << endl;
	}
	~B() {
		cout << "B的析构函数" << endl;
	}
	A a;
};
int main() {
	B b;
	system("pause");
	return 0;
}
/*
当其他类对象作为本类的成员时，构造函数先构造其他类对象，再构造自身，析构相反
	输出为：
	A的默认构造函数
	B的默认构造函数
	A的析构函数
	B的析构函数
*/
```

##### 4.2.8 静态成员

静态成员就是在成员变量和成员函数前加上关键字static，称为静态成员

静态成员分为：

* 静态成员变量
  * 所有对象共享同一份数据
  * 在编译阶段分配内存
  * 类内声明，类外初始化
* 静态成员函数
  * 所有对象共享同一个函数
  * 静态成员函数只能访问静态成员变量

#### 4.3 C++对象模型和this指针

##### 4.3.1 成员变量和成员函数分开存储

在c++中，类内的成员变量和成员函数分开存储

只有非静态成员变量才属于类的对象上

```c++
class Person {
	int age1;			// 非静态成员变量，属于类的对象上
	static int age2;	// 静态成员变量  不属于类对象上
	void func() {		// 非静态成员函数  不属于类的对象上

	}
	static void func1(){} // 静态成员函数  不属于类对象上
};
void aa() {
	Person p;
	// 空对象占用的内存空间为：1
	// C++编译器会给每隔空对象也分配一个字节空间，区分空对象占内存的位置
	// 每个空对象也应该有一个独一无二的内存地址
	cout << sizeof(p) << endl;
}
void bb() {
	Person p;
	cout << sizeof(p) << endl;

}
int main() {
	bb();
	system("pause");
	return 0;
}
```

##### 4.3.2 this指针概念

通过4.3.1我们知道在C++中成员变量和成员函数是分开存储的

每一个非静态成员函数只会诞生一份函数实例，也就是说多个同类型的对象会共用一块代码

qu：这一块代码是如何区分哪个对象调用自己的呢？

C++通过提供特殊的对象指针，this指针，解决上述问题，this指针指向被调用的成员函数所属的对象

this指针是隐含每一个非静态成员函数内的一种指针

this指针不需要定义，直接使用即可

this指针的用途：

* 当形参和成员变量同名时，可以用this指针区分
* 在类的非静态成员函数中返回对象本身，可使用return *this

```c++
class Person {
public:
	Person(int age) {
		// this指针指向的是被调用的成员函数  所属的对象
		this->age = age;
	}
	// 不加&就是只返回值  加&返回的就是对象
	Person& personAdd(Person& p) {
		this->age += p.age;
		// this指向p2的指针，而*this指向的就是p2这个对象的本体
		return *this;
	}
	int age;
};
void test01() {
	Person p1(18);
	cout << p1.age << endl;
}
void test02() {
	Person p1(10);
	Person p2(16);
	// 链式编程思想
	p2.personAdd(p1).personAdd(p1);
	cout << p2.age << endl;
}
int main() {
	test02();
	system("pause");
	return 0;
}
```

##### 4.3.3 空指针访问成员函数

c++中空指针也是可以调用成员函数的，但是也要注意有没有用到this指针

如果用到this指针，需要加以判断保证代码健壮性

```c++
class Person {
public:
	void showClassName() {
		cout << "this is Person class" << endl;
	}
	void showPersonAge() {
		if (this == NULL) {
			return;
		}
		else {
			cout << age << endl;

		}
	}
	int age;
};

int main() {
	Person* p = NULL;
	p->showClassName();
	p->showPersonAge();
	system("pause");
	return 0;
}
```

##### 4.3.4 const修饰成员函数

常函数：

* 成员函数后加const后我们称这个函数为常函数
* 常函数内不可以修改成员属性
* 成员属性声明时加关键字mutable后，在常函数中依然可以修改

常对象：

* 声明对象前加const称该对象为常对象
* 常对象只能调用常函数

```c++
class Person {
public:
	// this的本质是指针常量，指针的指向是不可以修改的
	// 在成员函数后面加const，修饰的是this指向，让this指向的值也不可以修改
	void showPerson() const{
		a = 100;
	}
mutable	int a; // 特殊变量，即使在常函数中，也可以修改这个值，加mutable关键字
};

int main() {
	const Person p; // 在对象前加const，变为常对象
	p.a = 200; // 特殊变量
	system("pause");
	return 0;
}
```

#### 4.4 友元

生活中你的家有客厅（public），有你的卧室（private）

客厅所有来的客人都可以进，但是你的卧室是私有的，只有你能进

但是也可以允许好朋友进

在程序里，有些私有属性，也想让类外特殊的一些函数或者类进行访问，就需要用到友元的技术

友元的目的就是让一个函数或者类  访问另一个类中的私有成员

友元的关键字为friend

友元的三种实现

* 全局函数做友元
* 类做友元
* 成员函数做友元 

##### 4.4.1 全局函数做友元

```c++
class Building {
// 告诉编译器 这个函数是友元
	friend void goodGuy(Building* building);
public:void visite() {
	sittingRoom = "客厅";
	bedRoom = "卧室";
}
public:
	string sittingRoom;
private:
	string bedRoom;
};
void goodGuy(Building *building) {
	cout << "好朋友在访问：" << building->sittingRoom << endl;
	cout << "好朋友在访问：" << building->bedRoom << endl;

}
void test01() {
	Building building;
	building.visite();
	goodGuy(&building);
}
int main() {
	test01();
	system("pause");
	return 0;
}
```



##### 4.4.2 类做友元

```c++
// Building类声明
class Building;
// GoodGuy类声明及定义
class GoodGuy {
public:
	// 公共方法
	// 构造函数
	GoodGuy();
	// visite函数
	void visite();
private:
	// 私有成员
	Building* building;
};
class Building {
	// 告诉编译器 goodguy类是building的友元，可以访问到building类中的私有内容
	friend class GoodGuy;
public:
	// 构造函数
	Building();
public:string sittingRoom;
private:string bedRoom;
};
// 类外定义构造函数
Building::Building() {
	// 初始化成员
	this->bedRoom = "卧室";
	this->sittingRoom = "客厅";
}
// 类外定义构造函数
GoodGuy::GoodGuy() {
	// 构造GoodGuy对象时创建Building对象  初始化指针  堆区
	building = new Building;
}
void GoodGuy::visite() {
	cout << "好朋友正在访问：" << building->sittingRoom << endl;
	cout << "好朋友正在访问：" << building->bedRoom << endl;
}
void test01() {
	Building building;
	GoodGuy goodGuy;
	goodGuy.visite();
}
int main() {
	test01();
	system("pause");
	return 0;
}
```



##### 4.4.3 成员函数做友元

```c++
class Building;
class GoodGuy {
public:
	GoodGuy();
	void visite(); // 让visite函数可以访问Building中的私有成员
	void visite2(); // 让visite2函数不可以访问Building中的私有成员
	Building *building;
};
class Building {
	// 告诉编译器，GoodGuy类下的visite成员函数作为本类的好朋友，可以访问私有成员变量
	friend void GoodGuy::visite();
public:string sittingRoom;
	  Building();
private:string bedRoom;
};
Building::Building() {
	sittingRoom = "客厅";
	bedRoom = "卧室";
}
GoodGuy::GoodGuy() {
	building = new Building;  // 创建堆区维护building对象
}
void GoodGuy::visite() {
	cout << "visite func is visting" << building->sittingRoom << endl;
	cout << "visite func is visting" << building->bedRoom << endl;
}
void GoodGuy::visite2() {
	cout << "visite func is visting" << building->sittingRoom << endl;
}
void test01() {
	GoodGuy gg;
	gg.visite();
	gg.visite2();
}
int main() {
	test01();
	system("pause");
	return 0;
}
	
```

#### 4.5 运算符重载

运算符重载概念：对已有的运算符进行重新定义，赋予其新功能，以适应不同的数据类型

##### 4.5.1 加号运算符重载

作用：实现两个自定义数据类型相加的运算
