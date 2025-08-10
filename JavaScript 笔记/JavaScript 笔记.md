

# JavaScript 笔记



## 简介

JavaScript 写出来的程序被称为**脚本**，可以直接运行在 HTML 网页中，在页面加载的时候会自动执行。

脚本**以纯文本的形式运行，不需要提前编译即可运行**。

JavaScript 与 Java 完全不同，有自己的语言规范 **ECMAScript**。

JavaScript 不仅可以在浏览器中执行，也可以在服务端执行，可以在搭载任意 **JavaScript 引擎**的设备中执行。

浏览器中嵌入了 JavaScript 引擎，也被称作 **“JavaScript 虚拟机”**，不同的引擎有不同的代号：

- **V8：** Chrome、Opera 和 Edge 中的 JavaScript 引擎
- **SpiderMonkey：** Firefox 中的 JavaScript 引擎
- **Chakra：** IE 中的 JavaScript 引擎
- **JavaScriptCore、SquirrelFish、Nitro：** 在 Safari 中并行使用的 JavaScript 引擎

JavaScript 引擎的工作步骤：

1. 读取脚本

2. 将脚本转化（“编译”）为机器语言

3. 运行机器语言代码

引擎会对每个步骤进行优化，在运行时监视脚本，分析获得的信息进一步优化机器语言代码。

JavaScript 的能力取决于它的运行环境，在浏览器中无法访问 CPU 和 内存，但在 Node.js 中可以读取、写入任意文件，执行网络请求等函数。

JavaScript 与其它编程语言主要不同之处：

- **与 HTML、CSS 完全集成**
- **简单的事，简单地完成**
- **被所有的主流浏览器支持，并且默认开启**

有很多其它语言可以编译为 JavaScript，提供更多的功能，这些语言有：

- [CoffeeScript](https://coffeescript.org/)：JavaScript 的一种语法糖，可以编写更清晰简洁的代码
- [TypeScript](https://www.typescriptlang.org/)：添加 “严格的数据类型” 以简化开发，更好地支持复杂系统的开发，由微软开发
- [Flow](https://flow.org/)：与 TypeScript 类似，不过是以另外一种方式实现，由 Facebook 开发。
- [Dart](https://www.dartlang.org/)：一门独立的语言，有自己的引擎，该引擎在非浏览器环境中运行（例如手机应用），它也可以被编译成 JavaScript，由 Google 开发
- [Brython](https://brython.info/)：Python 到 JavaScript 的转译器
- [Kotlin](https://kotlinlang.org/docs/reference/js-overview.html)：编写出的程序可以在浏览器和 Node 环境中运行



##  手册与规范

**规范**

- **规范草案：** https://tc39.es/ecma262/
- **即将纳入规范的新特性：** https://github.com/tc39/proposals

**手册**

- **MDN：** https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference

更加推荐使用搜索引擎输入 `MDN [关键字]` 来查询。

**兼容性表**

- **查看功能的支持表：** [https://caniuse.com](https://caniuse.com/) 
- **列有语言功能以及引擎是否支持这些功能的表格：** https://compat-table.github.io/compat-table/



## 代码编辑器

代码编辑器主要分为：IDE（集成开发环境）和轻量编辑器。



**IDE**

IDE 编辑器具有强大功能，是一个完整的 “开发环境”，通常来说有以下两个 IDE 推荐使用：

- [Visual Studio Code](https://code.visualstudio.com/)（跨平台，免费）
- [WebStorm](https://www.jetbrains.com/webstorm/)（跨平台，收费，目前对个人使用免费）



**轻量编辑器**

虽然没有 IDE 那么强大的功能，但是启动速度快，使用简单，主要用来快速打开和编辑文件。

轻量编辑器也可以通过安装各种插件来实现 IDE 的语法分析和代码补全功能，所以 “轻量编辑器” 和 IDE 也没有严格的界限。

推荐的轻量编辑器：

- [Sublime Text](http://www.sublimetext.com/)（跨平台，共享软件）
- [Vim](http://www.vim.org/)
- [Emacs](https://www.gnu.org/software/emacs/)

**代码编辑器没有最好的，取决于个人的习惯和喜好。**



## 开发者控制台

控制台可以用来查看错误、执行命令、检查变量，**推荐使用 Chrome 或 Firefox 进行开发**，因为它们有最好的开发者工具。

大多浏览器都是通过 `F12` 来打开开发者工具。

**Chrome 直接打开控制台快捷键**

- Mac：`Command + Option + J` 或者 `Command + Option + I`
- Windows：`Ctrl + Shift + J` 或者 `Ctrl + Shift + I`

**Firefox 直接打开控制台快捷键**

- Mac：`Command + Option + K`
- Windows：`Ctrl + Shift + K`

**Safari 直接打开控制台快捷键**

- Mac：`Command + Option + C`

**⚠️ 注意：** Safari 需要**先提前在设置中开启 “网页开发者功能”** ，“设置” -> “高级” -> “显示网页开发者功能”。

![image-20250601091238441](images/image-20250601091238441.png)

在控制台中 `>` 标志处表示命令行，可以输入 JavaScript 命令，按下 `Enter` 执行，如果需要输入多行代码则使用 `Shift + Enter` 来进行换行。

![image-20250601092116006](images/image-20250601092116006.png)



## script 标签

`<script>` 标签可以将 JavaScript 程序插入到 HTML 文档的任意位置。

```html
<!DOCTYPE HTML>
<html>
<body>
  <p>script 标签之前...</p>
  <script>
    alert('Hello, world!');
  </script>
  <p>...script 标签之后</p>
</body>
</html>
```

当浏览器遇到了 `<script>` 标签，内部代码会自动运行。

`<script>` 标签有以下几个特性（attribute）：

- **`type`：** 在过去需要指定为 `type="text/javascript"`，现在不再需要，现代 HTML 标准已经完全改变了此特性的含义，用于指定 JavaScript 模块 `type="module"`，**`type` 特性是可选的**

- **`language`：** 在过去用于指定脚本使用的语言，现在没有任何意义，语言默认是 JavaScript，**不需要再使用它**

- **`src`：** 用于引入外部 JavaScript 代码

  ```html
  <script src="/path/to/script.js"></script>
  ```

  可以是相对路径，也可以是绝对路径引入。

  如果要引入多个脚本，需要使用多个标签。

  ```html
  <script src="/js/script1.js"></script>
  <script src="/js/script2.js"></script>
  ...
  ```

  **⚠️ 注意：** 

  - 只有最简单的脚本才嵌入到 HTML 中。**更复杂的脚本推荐存放在单独的文件中**，使用独立文件的好处是浏览器会下载它，并保存在浏览器的缓存中，之后再访问该文件就是从缓存中获取，而不是下载，可以节省流量，使页面加载更快。

  - **如果设置了** `src` **特性，**`<script>` **标签的内容将会被忽略**

    ```html
    <script src="file.js">
      alert(1); // 此内容会被忽略，因为设定了 src
    </script>
    ```

    如果要上述代码正常工作，可以将它们分成两个标签。

    ```html
    <script src="file.js"></script>
    <script>
      alert(1);
    </script>
    ```

    

**脚本前后的注释**

```html
<script type="text/javascript"><!--
    ...
//--></script>
```

这些注释是用于不支持 `<script>` 标签的古老的浏览器隐藏 JavaScript 代码的，**现代 JavaScript 已经不这样使用了**。



## 代码结构



**语句**

语句是执行行为（action）的语法结构和命令，例如：`alert('Hello, world!');` 就是用来显示消息的语句。

可以在代码中编写任意数量的语句，语句之间可以使用分号进行分割。

```js
alert('Hello'); alert('World');
```

通常每个语句独占一行，用来提高语句的可读性。

```js
alert('Hello');
alert('World');
```



**分号**

当存在换行符（line break）时，大多数情况下可以省略分号。

```js
alert('Hello')
alert('World')
```

这时 JavaScript 会将换行符理解为 “隐式” 的分号，这也被称为**自动分号插入**。

并不是所有换行符都会理解为分号

```js
alert(3 +
1
+ 2);
```

代码输出结果是 `6`，这里 JavaScript 没有插入分号，因为如果插入分号，一行以 `+` 号结尾，就不是一个 “完整的表达式”。



**存在 JavaScript 无法确定是否真的需要自动插入分号的情况**

```js
alert('Hello');

[1, 2].forEach(alert);
```

这段代码在有分号的时候是先显示 `Hello`，然后显示 `1`，再然后是 `2`。

如果不加分号是这样的

```js
alert('Hello')

[1, 2].forEach(alert)
```

输出结果为先显示 `Hello`，后面不会再有数字出现，然后控制台出现报错信息。

![image-20250601101128948](images/image-20250601101128948.png)

上述代码会被 JavaScript 理解为

```js
alert('Hello')[1, 2].forEach(alert);
```

**⚠️ 注意：** 虽然大多数的时候可以省略分号，**但最好不要省略分号**。



## 注释

注释用于描述代码它做了什么和为什么要这样做。不会影响代码的执行，引擎会忽略它们。

- 单行注释

  ```js
  // 这行注释独占一行
  alert('Hello');
  
  alert('World'); // 这行注释跟随在语句后面
  ```

- 多行注释

  ```js
  /* 两个消息的例子。
  这是一个多行注释。
  */
  alert('Hello');
  alert('World');
  ```

**⚠️ 注意：**

- 大多数的编辑器都支持使用 `Ctrl + /` 快捷键添加单行注释，`Ctrl + Shift + /` 进行多行注释

- **多行注释不支持嵌套注释**，例如下面这段代码注释会出问题

  ```js
  /*
    /* 嵌套注释 ?!? */
  */
  alert('World');
  ```

- 注释虽然会增加代码量，但很多工具会在代码构建打包时缩减代码，移除注释，这样注释就不会产生任何影响。



## 现代模式 'use strict'

在过去 JavaScript 不断的向前发展，一直在增加新的特性，同时保持旧的功能没有改变，这样做有利于兼容旧的代码，**缺点就是 JavaScript 创造者的任何错误或不完善的决定也将永远被保留在 JavaScript 语言中**。

直到 2009 年 ECMAScript 5 (ES5) 的出现，改变了这个情况，增加了新的语言特性的同时又修改了一些已经存在的特性。但为了确保旧的功能能够使用，所以大部分修改默认是不生效的，需要使用一个特殊的指令 `'use strict'` 来告诉浏览器启用这些特性。



**'use strict'**

该指令像一个字符串，双引号和单引号都可以使用。

```js
'use strict';
// 代码以现代模式工作
...
```

**⚠️ 注意：**

- **必须确保 `'use strict'` 出现在脚本的最顶部**，否则严格模式无法启用，**只有注释可以出现在 `'use strict'` 的上面**

  ```js
  alert('some code');
  // 下面的 "use strict" 会被忽略，必须在最顶部。
  
  'use strict';
  
  // 严格模式没有被激活
  ```

- `'use strict'`  也可以放在函数体的顶部，这样可以只在该函数中启用严格模式，不过**通常会在整个脚本中启用严格模式**

- **没有办法取消 `'use strict'`**，一旦进入了严格模式，就没有回头路了

- **在浏览器的开发者控制台中，默认是不启用 `'use strict'` 严格模式**

  如果需要启用严格模式，可以在控制台搭配 `Shift + Enter` 来换行输入多行代码，将 `'use strict'`放在代码的顶部。

  ```js
  'use strict'; <Shift+Enter 换行>
  //  ...你的代码
  <按下 Enter 以运行>
  ```

  对于旧版本的浏览器，可以将代码放入以下的包装器中。

  ```js
  (function() {
    'use strict';
    
    // ...你的代码...
  })()
  ```
  
- **建议始终使用严格模式开发，在现代 JavaScript 支持的 `class` 和 `module` 中会自动启用 `'use strict'`**，所以如果使用它们就不需要手动添加 `'use strict'`



## 变量

变量是数据的 “命名存储”，在 JavaScript 中**使用 `let` 关键字创建一个变量**。

```js
let message;
```

这段代码表示**声明**或者**定义**了一个名为 `message` 的变量，可以**通过赋值运算符 `=` 为变量添加数据**。

```js
let message;
message = 'Hello'; // 将字符串 'Hello' 保存在名为 message 的变量中
```

此时字符串 `Hello` 已经保存到与该变量相关联的内存区域，我们可以通过**变量名称**来访问它。

```js
let message;
message = 'Hello';

alert(message); // 显示变量内容
```

可以简化写法，将变量定义和赋值合并为一行。

```js
let message = 'Hello'; // 定义变量，并且赋值

alert(message); // Hello
```

可以在一行声明多个变量。

```js
let user = 'CodePencil', age = 22, message = 'Hello';
```

**⚠️ 注意：** 这样可读性较差，**推荐一行只声明一个变量**，例如下面这样：

```js
let user = 'CodePencil';
let age = 22;
let message = 'Hello';
```

当然也可以写成下面这样：

```js
let user = 'CodePencil',
  age = 22,
  message = 'Hello';
```

**⚠️ 注意：** 过去定义变量使用的是 `var`，与 `let` 大体相同，但是存在微妙的差别，**更加推荐使用 `let`**。

前面的变量 `message` 可以看做是标有 `message` 的盒子，盒子里的值为 `Hello`。

![image-20250601123340455](images/image-20250601123340455.png)

对变量重新赋值，就相当于先把变量盒子中原来的值删除，再放入新的值。

```js
let message;

message = 'Hello';

message = 'World'; // 值改变了

alert(message); // World
```

![image-20250601123528350](images/image-20250601123528350.png)

**⚠️ 注意：** 重复声明变量两次会触发错误，例如下面这段代码。

```js
let message = "This";

// 重复声明 message 变量会触发错误
let message = "That"; // Uncaught SyntaxError: Identifier 'message' has already been declared.
```

我们应该**对同一个变量只声明一次**，之后在不使用 `let` 的情况下对其引用。



**变量命名**

JavaScript 的变量命名有两个限制：

1. **变量名称只能包含字母、数字、符号 `$` 和 `_`**
2. **变量名称首字符不能是数字**

```js
let userName; // 有效命名
let 123test; // 无效命名
```

如果命名包括多个单词，通常采样驼峰式命名法（camelCase），**JavaScript 中的变量名称区分大小写，也允许使用非英文字符，但不推荐**。



**保留字**

JavaScript 有一张[保留字段列表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#保留字)，这里面的**保留字都无法用作变量名使用**，例如：`let`、`class` 等。



**未采用 `use strict` 下的赋值**

在早期，可以不使用 `let` 进行变量声明，直接通过赋值来创建一个变量。

```js
num = 5; // 如果变量 "num" 不存在，就会被创建

alert(num); // 5
```

但是这样做是糟糕的做法，**在严格模式下会报错**。

```js
'use strict';

num = 5; // Uncaught ReferenceError: num is not defined.
```



**常量**

常量用于声明一个**常数（不变）变量**，使用 `const` 而非 `let`。

```js
const myBirthday = '06.02.2002';
```

**`const` 声明的变量的值无法进行修改**，如果尝试修改会触发错误。

```js
const myBirthday = '06.02.2002';
myBirthday = '01.01.2002'; // Uncaught TypeError: Assignment to constant variable.
```

当确定一个变量的值不会发生改变的时候，就可以使用 `const` 来确保这个行为。



**大写形式的常量**

通常是将常量作为别名来使用，以便记住那些在执行之前就难以记忆的值。

使用大写字母和下划线来命名常量，例如下面这样的颜色值。

```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

好处：

- `COLOR_ORANGE` 比 `#FF7F00` 更容易记忆
- `COLOR_ORANGE` 比 `#FF7F00` 更不容易输错
- 阅读代码时，`COLOR_ORANGE` 比 `#FF7F00` 更易懂

简单来说，**大写命名的常量仅用作 “硬编码（hard-coded）” 值的别名**，对于在执行期间被 “计算” 出来，但初始赋值之后就不会改变的常量，依旧使用**常规命名（驼峰式命名法（camelCase））**，例如：

```js
const pageLoadTime = /* 网页加载所需的时间 */;
```

`pageLoadTime` 的值在页面加载之前是未知的，所以采用常规命名。



**正确命名变量**

一个变量名应该有一个清晰、明显的含义，对其存储的数据进行描述。

命名一个变量可以遵守以下规则：

- 使用易读的命名，比如 `userName` 或者 `shoppingCart`
- 不使用诸如 `a`、`b`、`c` 这种缩写和短名称
- 变量名在能够准确描述变量的同时要足够简洁，如果使用 `data` 和 `value`，这样的名称等于什么都没说，**不过如果能非常明显地从上下文知道数据和值所表达的含义，使用它们也是可以的**
- 术语要和团队保持一致，例如网站的访客称为 “用户”，那可以取名 `currentUser` 或者 `newUser`，而不是使用 `currentVisitor` 或者 `newManInTown`



**复用变量还是新建变量**

在开发时如果重用现有的变量，而不是声明一个新的变量，那么这变量就像是被扔进不同东西盒子，但没有改变它的贴纸，里面是什么东西谁也不知道，导致在调试代码的时候损失数十倍时间。

**所以推荐始终额外声明一个变量而不是复用现有的变量**，现代 JavaScript 压缩器和浏览器能够对代码进行很好的优化，所以不会产生性能问题，**并且为不同值使用不同变量可以帮助引擎对代码进行优化**。



## 数据类型

在 JavaScript 中一共**有 8 种数据类型**，可以细分为以下两大类：

- **原始类型（7种）：** `number`、`bigint`、`string`、`boolean`、`null`、`undefined`、`symbol`
- **引用类型（1种）：** `object`

**JavaScript 是 “动态类型”（dynamically typed）的编程语言**，一个变量的可以前一刻是字符串，后一刻存储一个数字。



**Number 类型**

`number` 类型可以表示整数和浮点数，数字可以有很多操作，例如：乘法 `*`、除法 `/`、加法 `+`、减法 `-` 等等。

除了常规数字，**还有 “特殊数值”：`Infinity`、`-Infinity` 和 `NaN`**。

- `Infinity` 表示数学概念中的无穷大 ∞，是一个**比任何数字都大的特殊值**

  可以通过除以 `0` 来得到它

  ```js
  alert( 1 / 0 ); // Infinity
  ```

  也可以在代码中直接使用它

  ```js
  alert( Infinity ); // Infinity
  ```

- `NaN` 表示一个计算错误，是**一个不正确的或者一个未定义的数学操作所得到的结果**

  ```js
  alert( 'not a number' / 2 ); // NaN，这样的除法是错误的
  ```

  `NaN` 是粘性的，任何对 `NaN` 的进一步数学运算都会返回 `NaN`，例如下面这样：

  ```js
  alert( NaN + 1 ); // NaN
  alert( 3 * NaN ); // NaN
  alert( 'not a number' / 2 - 1 ); // NaN
  ```

  **⚠️ 注意：**

  - **`NaN ** 0` 是一个例外，其结果为 `1`**
  - `NaN` 可以确保 JavaScript 中做数学运算是安全的，不会因为计算错误导致脚本停止，在最坏的情况下，也只会得到 `NaN` 的结果
  - “特殊数值” 虽然在直觉上会觉得它们不是数字，但它们都属于 `number` 类型



**BigInt 类型**

在 JavaScript 中，`number` 类型无法安全地表示大于 `(2^53-1)`（即 `9007199254740991`），或小于 `-(2^53-1)` 的整数。

具体来说就是 `number` 类型可以存储更大的整数（最多 `1.7976931348623157 * 10308`），但超出安全整数范围 `±(2^53-1)` 会出现**精度问题**，因为不是所有数字都适合固定的 64 位存储，此时可能存储的是“近似值”。

```js
// 两个数字（正好超出了安全整数范围）是相同的
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

简单来说**所有大于 `(2^53-1)` 的奇数都不能用 `Number` 类型存储**。

在大多数情况下，`±(2^53-1)` 范围就足够了，但有时候需要整个范围非常大的整数，例如用于密码学或微秒精度的时间戳。

`BigInt` 类型就可以解决这个问题，它可以用于表示**任意长度的整数**，通过将 `n` 添加到整数字段的末尾来创建 `BigInt` 类型。

```js
// 尾部的 n 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

**⚠️ 注意：** `BigInt` 类型是最近被添加到 JavaScript 语言中的，存在兼容性问题，**目前只有 IE 浏览器不支持**。



**String 类型**

在 JavaScript 中有三种创建字符串的方式：

1. 双引号：`"Hello"`
2. 单引号：`'Hello'`
3. 反引号：`` `Hello` ``

单引号和双引号都是 “简单” 引用，几乎没什么区别，反引号是**功能扩展**引号，允许我们将变量和表达式包装在 `${...}` 中，来将它嵌入到字符串中。

```js
let name = 'CodePencil';

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, CodePencil!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

**⚠️ 注意：**

- `${...}` 只能在反引号中使用
- 在 JavaScript 中，**只有一种 `string` 类型，一个字符串可以包含零个（为空）、一个或多个字符**



**Boolean 类型**

`boolean` 类型只包含两个值：`true` 和 `false`。

这类值通常用来存储 yes 或 no 的值，例如：`true` 意味着 “yes，正确”，`false` 意味着 “no，不正确”。

布尔值也可以作为比较的结果：

```js
let isGreater = 4 > 1;

alert( isGreater ); // true（比较的结果是 "yes"）
```



**null 类型**

`null` 类型构成了一个独立的类型，只包含 `null` 值，**表示一个代表 “无”、“空” 或 “值未知” 的特殊值**。

```js
let age = null;
```

例如上述代码表示 `age` 是未知。



**undefined 类型**

特殊值 `undefined` 和 `null` 一样自成类型，**表示未被赋值或者未初始化**。

```js
let age;

alert(age); // undefined
```

如果一个变量声明了，但是没有赋值，则它的值就是 `undefined`。

**⚠️ 注意：** 虽然从技术上可以显式地将 `undefined` 赋值给变量，**但是不推荐这样做，通常使用 `null` 来将一个 “空” 或者 “未知” 的值写入变量中**，而 `undefined` 则保留作**为未进行初始化的事物的默认初始值**，这样便于区分变量的值是未初始化还是变量的值为空。



**Object 类型**

`object` 类型是一个特殊的类型，其它所有的数据类型都被称为 “原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他），而 `object` 类型用于储存数据集合和更复杂的实体。



**Symbol 类型**

`symbol` 类型用于创建对象的唯一标识符。



**typeof 运算符**

`typeof` 运算符可以返回参数的类型，`typeof x` 的调用会**以字符串的形式**返回数据类型：：

```js
typeof undefined // 'undefined'

typeof 0 // 'number'

typeof 10n // 'bigint'

typeof true // 'boolean'

typeof 'foo' // 'string'

typeof Symbol('id') // 'symbol'

typeof Math // 'object'

typeof null // 'object'

typeof alert // 'function'
```

**⚠️ 注意：**

- `Math` 是一个提供数学运算的内建 `object`

- `typeof null` 的结果为 `'object'`，这是官方承认的 `typeof` 的错误，来自于 JavaScript 语言的早期阶段，为了兼容性而保留下来，**`null` 有自己的类型，它是一个特殊值**

- `typeof alert` 的结果为 `'function'`，因为 `alert` 在 JavaScript 语言中是一个函数，但 JavaScript 没有  `function` 类型，函数隶属于 `object` 类型，但是 `typeof` 对函数却返回了 `'function'`，这也是 JavaScript 语言早期的问题，但这个行为在实际编程中非常方便
- 也有人使用 `typeof(x)` 的语法，与 `typeof x` 相同，**括号不是 `typeof` 的一部分，它只是数学运算分组的括号**，例如：`(2 + 2)`



## 交互：alert、prompt 和 confirm



**alert**

用来显示信息。

```js
alert("Hello World");
```

![image-20250601161621237](images/image-20250601161621237.png)

**⚠️ 注意：** 弹出信息的小框称为**模态窗（modal）**，这意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到处理完模态窗（例如这里点 “确定” 按钮）。



**prompt**

显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。

`prompt` 函数接收两个参数：

```js
const result = prompt(title, [default]);
```

- **`title`：** 显示给用户的文本
- **`default`：** 指定 input 输入框的初始值，**该参数是可选的**

例如：

```js
const age = prompt('How old are you?', 100);
```

![image-20250601182956730](images/image-20250601182956730.png)

访问者可以在提示输入框中输入内容，然后按 “确定” 键，然后我们在 `result` 中获取该文本。如果用户按取消键或者按 `Esc` 键取消输入，那我们在 `result` 中得到的是 `null`。

**⚠️ 注意：** 在 IE 浏览器中第二个参数如果不提供的话，默认会是 `'undefined'`，为了 prompt 始终有好的效果，**建议始终提供第二个参数**，就像下面这样。

```js
const test = prompt('Test', ''); // <-- 用于 IE 浏览器
```



**confirm**

显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。

```js
const result = confirm(question);
```

例如：

```js
const isBoss = confirm("Are you the boss?");

alert( isBoss ); // 如果 “确定” 按钮被按下，则显示 true
```

![image-20250601183649473](images/image-20250601183649473.png)

点击确定返回 `true`，点击取消或者按 `Esc` 键返回 `false`。



前面这些方法都是模态的：它们会**暂停脚本的执行**，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。

上述所有方法共有两个限制：

1. 模态窗口位置由浏览器决定，通常在页面中心，无法修改
2. 模态窗口外观由浏览器决定，无法修改



## 类型转换



**字符串转换**

将值转换为字符串形式。

- `alert(value)` 会先将 `value` 转换为字符串类型，然后再显示这个值

- `String(value)` 显式地讲 `value` 转换为字符串类型

  ```js
  let value = true;
  alert(typeof value); // 'boolean'
  
  value = String(value); // 现在，值是一个字符串形式的 'true'
  alert(typeof value); // string
  ```

  `false` 变成 `'false'`、`null` 变成 `'null'`、`0` 变成 `'0'` 等。



**数字型转换**

在**算术函数和表达式**中，会自动进行 `number` 类型转换。

例如在除法 `/` 用于非 `number` 类型时：

```js
alert( '6' / '2' ); // 3
```

上述代码中 `string` 类型的值被自动转换成 `number` 类型后进行计算。

也可以通过 `Number(value)` 显式地将 `value` 转化为 `number` 类型。

```js
const str = '123';
alert(typeof str); // string

const num = Number(str); // 变成 number 类型 123

alert(typeof num); // number
```

**⚠️ 注意：** 如果该字符串不是有效的数字，则转换结果为 `NaN`，例如下面这样：

```js
const age = Number("an arbitrary string instead of a number");

alert(age); // NaN，转换失败
```

具体转换规则如下：

| 值                | 变成                                                         |
| :---------------- | :----------------------------------------------------------- |
| `undefined`       | `NaN`                                                        |
| `null`            | `0`                                                          |
| `true` 和 `false` | `1` 和 `0`                                                   |
| `string`          | 去掉首尾空白字符（空格、换行符 `\n`、制表符 `\t` 等）后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中 “读取” 数字。当类型转换出现 error 时返回 `NaN`。 |

具体例子：

```js
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

**⚠️ 注意：**

- `undefined` 变成 `NaN`，`null` 变成数字 `0`
- 大多数数学运算符都会进行上述转换



**布尔型转换**

通常发生在**逻辑运算**中，也可以使用 `Boolean(value)` 显式地进行转换。

具体转换规则如下：

| 值                                    | 变成    |
| :------------------------------------ | :------ |
| `0`, `null`, `undefined`, `NaN`, `""` | `false` |
| 其他值                                | `true`  |

**⚠️ 注意：** 字符串 `'0'` 和非空的字符串 `' '` 进行布尔型转换时，输出结果都为 `true`。



## 算数运算符

```js
5 * 2
```

**运算元：** 也称为参数，是指运算符应用的对象，例如上面有两个运算元，左运算元 `5` 和右运算元 `2`。

**一元运算符：** 指一个运算符对应的只有一个运算元，例如一元负号运算符。

```js
let x = 1;

x = -x;
alert( x ); // -1，一元负号运算符生效
```

**二元运算符：** 指一个运算符拥有两个运算元，例如下面这样。

```js
let x = 1, y = 3;
alert( y - x ); // 2，二元运算符减号做减运算
```



**数学运算**

JavaScript 支持以下数学运算符：

- 加法 `+`
- 减法 `-`
- 乘法 `*`
- 除法 `/`
- 取余 `%`
- 求幂 `**`



**取余**

```js
alert( 5 % 2 ); // 1，5 除以 2 的余数
alert( 8 % 3 ); // 2，8 除以 3 的余数
```



**求幂**

求幂运算 `a ** b` 将 `a` 提升至 `a` 的 `b` 次幂。

在数学运算中表示为：

![image-20250602064852069](images/image-20250602064852069.png)

```js
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
```

幂运算也适用于**非整数**。

```js
alert( 4 ** (1/2) ); // 2（1/2 次方与平方根相同)
alert( 8 ** (1/3) ); // 2（1/3 次方与立方根相同)
```



**二元运算符 + 连接字符串**

通常，加号 `+` 用于求和，但**如果任意一个运算元是字符串，那么另一个运算元也将被转化为字符串**。

```js
alert( '1' + 2 ); // '12'
alert( 2 + '1' ); // '21'
```

**⚠️ 注意：** 不管这个字符串运算元在左边还是右边，都会发生同样的 “字符串拼接” 行为。

其它复杂的例子：

```js
alert(2 + 2 + '1' ); // '41'，不是 '221'
```

这里运算符是按从左到右的顺序工作的，先计算 `2 + 2` 得到 `4`，然后再跟 `'1'` 拼接为字符串 `'41'`。

如果反过来最左边的是字符串运算元，那么结果大不相同。

```js
alert('1' + 2 + 2); // '122'，不是 '14'
```

**⚠️ 注意：只有二元 `+` 运算符会拼接字符串，其它运算符只对数字起作用，并且总是会其转换为数字**。

```js
alert( 6 - '2' ); // 4，将 '2' 转换为数字
alert( '6' / '2' ); // 3，将两个运算元都转换为数字
```



**一元运算符 +**

一元运算符 `+` 对于数字没有任何作用，但**如果运算元不是数字，则加号 `+` 会将其转化为数字**。

```js
// 对数字无效
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// 转化非数字
alert( +true ); // 1
alert( +'' );   // 0
```

效果和 `Number(...)` 相同，但是更加简短。



**运算符优先级**

当一个表达式拥有超过一个运算符时，执行的顺序由**运算符的优先级**决定，所有运算符都有优先级顺序。

例如：`1 + 2 * 2` 是先计算乘法，再计算加法，**因为乘法的优先级比加法高**。

**圆括号拥有最高优先级**，可以用来调整运算顺序，例如：`(1 + 2) * 2`。

 JavaScript 中每个运算符都有对应的优先级数字，数字越大，越先执行。如果优先级相同，则按照由左至右的顺序执行。

| 优先级 | 名称     | 符号 |
| :----- | :------- | :--- |
| 15     | 一元加号 | `+`  |
| 15     | 一元负号 | `-`  |
| 14     | 求幂     | `**` |
| 13     | 乘号     | `*`  |
| 13     | 除号     | `/`  |
| 12     | 加号     | `+`  |
| 12     | 减号     | `-`  |
| 2      | 赋值符   | `=`  |

完整的优先级表可以参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence#汇总表)。



**赋值运算符**

再优先级表中它的优先级最低，只有 `2`，这也是为什么 `=` 最后才执行的原因。

```js
let x = 2 * 2 + 1;
alert( x ); // 5
```

**⚠️ 注意：** 在 JavaScript 中所有运算符都会返回一个值，例如：`1 + 1` 返回的是 `2` 等等，对于 `=` 也是如此。

语句 `x = value` 将值 `value` 写入 `x` **然后返回 value**。

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

上述代码中 `(a = b + 1)` 先将 `b + 1` 的值写入 `a`，然后再返回 `b + 1` 的值。

**⚠️ 注意：** 不推荐写上面形式的代码，不利于代码的清晰和可读。



**链式赋值（Chaining assignments）**

```js
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

**链式赋值是从右往左进行计算**，首先对最右边的表达式 `2 + 2` 求值，然后将其赋给左边的变量：`c`、`b` 和 `a`。

**⚠️ 注意：** 出于可读性，最好将这种代码分成几行，像下面这样：

```js
let a, b, c;

c = 2 + 2;
b = c;
a = c;
```



**原地修改**

对一个变量做运算，然后将新的结果存在在同一个变量中。

```js
let n = 2;
n = n + 5;
n = n * 2;
```

上述代码可以简化为：

```js
let n = 2;
n += 5; // 等同于 n = n + 5
n *= 2; // 等同于 n = n * 2
```

**⚠️ 注意：** 

- 所有算术和位运算符都有简短的 “修改并赋值” 运算符，例如：`/=` 和 `-=` 等

- 这类运算符的优先级与**赋值运算符的优先级相同**，在大多数其它运算之后执行，例如：

  ```js
  let n = 2;
  n *= 3 + 5;
  alert( n ); // 16 （右边部分先被计算，等同于 n *= 8）
  ```

  

**自增、自减**

- **自增运算符 `++`：** 将变量与 1 相加

  ```js
  let counter = 2;
  counter++; // 等同于 counter = counter + 1
  alert( counter ); // 3
  ```

- **自减运算符 `--`：** 将变量与 1 相减

  ```js
  let counter = 2;
  counter--; // 等同于 counter = counter - 1
  alert( counter ); // 1
  ```

**⚠️ 注意：自增和自减只能用于变量**，例如使用 `5++` 就会报错。

运算符 `++` 和 `--` 可以放在变量前，也可以放在变量后。

- 当运算符置于变量后，被称为 **“后置形式”**：`counter++`
- 当运算符置于变量前，被称为 **“前置形式”**：`++counter`

**相同点：** 将变量 `counter` 与 `1` 相加。

**不同点：** 它们的返回值不同，例如：

- 前置形式，对 `counter` 做自增运算，返回的是新值 `2`

  ```js
  let counter = 1;
  let a = ++counter;
  
  alert(a); // 2
  ```

- 后置形式，也是对 `counter` 做自增运算，但返回的值是旧值 `1`

  ```js
  let counter = 1;
  let a = counter++;
  
  alert(a); // 1
  ```

简单来说

- 当想要对变量进行自增操作，并且需要**立刻使用自增后的值**，则使用 “前置形式”
- 当想要对变量进行自增操作，并且需要**使用自增之前的值**，则使用 “后置形式”

**⚠️ 注意：** `++/--` 运算符的优先级比绝大部分的算数运算符要高，例如：

```js
let counter = 1;
alert( 2 * ++counter ); // 4
```



**位运算符**

位运算符把运算元当做 32 位整数，并在它的**二进制形式上进行操作**。

有以下位运算符：

- 按位与 ( `&` )
- 按位或 ( `|` )
- 按位异或 ( `^` )
- 按位非 ( `~` )
- 左移 ( `<<` )
- 右移 ( `>>` )
- 无符号右移 ( `>>>` )

通常这些运算符很少被使用，一般是我们需要在最低级别（位）上操作数字时才使用，在 Web 开发中很少使用它们，但在某些特殊领域中它们非常有用，例如密码学。



**逗号运算符**

逗号运算符是最少见最不常使用的运算符之一，能让我们处理多个表达式，使用 `,` 将它们分开。

每个表达式都运行了，但是**只有最后一个的结果会被返回**。

```js
let a = (1 + 2, 3 + 4);
alert( a ); // 7（3 + 4 的结果）
```

上述代码中，第一个表达式 `1 + 2` 运行了，但是它的结果被丢弃了。随后计算 `3 + 4`，并且该计算结果被返回。

**⚠️ 注意： 逗号运算符的优先级非常低，比 `=` 还要低**，所以前面代码中必须要加上 `()`，不然就变成了 `let a = 1 + 2, 3 + 4;`，等同于 `a = 3, 7`，`7` 会被忽略不会再执行。

逗号运算符通常用在 `for` 循环中，例如下面这样：

```js
// 一行上有三个运算符
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```



## 比较运算符

在 JavaScript 中有以下几个比较大小的运算符：

- 大于 `a > b`
- 小于 `a < b`
- 大于等于 `a >= b`
- 小于等于 `a <= b`
- 相等 `a == b`
- 不相等 `a != b`
- 严格相等 `a === b`
- 严格不相等 `a !== b`

**所有比较运算符都返回布尔值**。

```js
alert( 2 > 1 );  // true
alert( 2 == 1 ); // false
alert( 2 != 1 ); // true
```



**字符串比较**

在比较字符串之间的大小时，JavaScript 会**按照 Unicode 编码顺序进行比较**。

简单来说，**字符串是按字符（母）逐个进行比较的**。

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

比较过程如下：

1. 首先比较两个字符串的首位字符大小
2. 如果一方字符较大（或较小），则该字符串大于（或小于）另一个字符串。比较结束
3. 否则，如果两个字符串的首位字符相等，则继续取出两个字符串各自的后一位字符进行比较
4. 重复上述步骤进行比较，直到比较完成某字符串的所有字符为止
5. 如果两个字符串的字符同时用完，那么则判定它们相等，否则未结束（还有未比较的字符）的字符串更大



**不同类型之间的比较**

在对不同类型的值进行比较时，JavaScript 会**首先将其转化为数字（`number`）类型后再进行比较**。

```js
alert( '2' > 1 ); // true，字符串 '2' 会被转化为数字 2
alert( '01' == 1 ); // true，字符串 '01' 会被转化为数字 1
```

对于布尔值来说，`true` 会被转化为 `1`、`false` 转化为 `0`。

```js
alert( true == 1 ); // true
alert( false == 0 ); // true
```



**严格相等**

普通的相等 `==` 无法区分出 `0` 和 `false`，也无法区分空字符串 `''` 和 `false`。

```js
alert( 0 == false ); // true
alert( '' == false ); // true
alert( 0 == '' ); // true
```

因为在比较不同类型的值时，**处于相等判断符号 `==` 两侧的值会先被转化为数字**，它们转换后的值都为 `0`。

如果需要区分则需要使用**严格相等运算符 `===`**，它在**进行比较时不会做任何的类型转换**。

如果 `a` 和 `b` 属于不同的数据类型，`a === b` 会立刻返回 `false`，例如下面这样：

```js
alert( 0 === false ); // false
```

**同样也有严格不相等运算符 `!==`**。



**null 和 undefined 进行比较**

- 使用严格相等 `===` 比较时

  ```js
  alert( null === undefined ); // false
  ```

- 使用非严格相等 `==` 比较时

  ```js
  alert( null == undefined ); // true
  ```

**⚠️ 注意：** 

- 在非严格相等 `==` 中，**`null` 和 `undefined` 不会进行类型转换，并且两者相等**

  ```css
  alert( null == 0 ); // false
  alert( null == undefined); // true
  
  alert( null == null); // true
  alert( undefined == undefined); // true
  ```

- 当使用数学式或其他比较方法 `<`、`>`、` <=`、`>=` 时

  - **`null` 被转化为 `0`**

    ```js
    alert( null > 0 );  // false
    alert( null == 0 ); // false, 非严格相等中，null 不会转换为 0
    alert( null >= 0 ); // true
    ```

  - **`undefined` 转换为 `NaN`**

    ```js
    alert( undefined > 0 ); // false
    alert( undefined < 0 ); // false
    alert( undefined == 0 ); // false, 非严格相等中，undefined 不会转换为 NaN
    ```



## 条件分支：if 和 ?

**if 语句**

`if(...)` 语句计算括号里的条件表达式，如果计算结果是 `true`，就会执行对应的代码块。

```js
if (year == 2025) alert( 'You are right!' );
```

如果有多条语句，**必须**要将执行的代码放入 `{}` 中。

```js
if (year == 2025) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
```

**⚠️ 注意：建议每次使用 `if` 语句都用大括号 `{}` 来包装代码块，即使只有一条语句**，这样可以提高代码可读性。



**布尔转换**

`if(...)` 语句会计算括号内的表达式，并**将计算结果转换为布尔型**，遵守前面学的**布尔型转换**规则。

```js
if (0) { // 0 转换为 false
  ...
}

if (1) { // 0 转换为 true
  ...
}
```



**else 语句**

`if` 语句中可以包含一个**可选的 `else` 块**，如果判断条件不成立，就会执行它内部的代码。

```js
if (year == 2025) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // 2025 以外的任何值
}
```



**多个条件 else if**

当一个条件有多个变体时，可以通过使用 `else if` 子句实现。
```js
const year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

上述代码先检查 `year < 2015`，如果条件不符合，就会转到下一个条件 `year > 2015`，如果这个也不符合就显示最后 `else` 块中的语句。

**⚠️ 注意：** 可以有更多的的 `else if`，**结尾的 `else` 是可选的**。



**条件运算符 ?**

当需要根据一个条件去赋值一个变量时可以使用条件运算符。

这个运算符通过问号 `?` 表示。有时它被称为**三元运算符**。

```js
const result = condition ? value1 : value2;
```

上述代码中，当 `condition` 为真时，返回 `value1`，否则返回 `value2`。

**使用括号可以增强可读性**，例如下面这样：

```js
const accessAllowed = (age > 18) ? true : false;
```

**问号运算符的优先级较低**，会在比较运算符 `>` 之后执行。

多个 `?` 可以嵌套使用，类似于 `else if` 语句，例如下面这样。

```js
const age = prompt('age?', 18);

const message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

**⚠️ 注意：** 不推荐下面这种情况下使用 `?` 替代 `if` 语句。

```js  
const company = prompt('Which company created JavaScript?', '');

(company === 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```

**这里不是把结果赋值给变量，而是根据条件执行不同的代码**，使用 `if` 语句实现更加的直观。

```js
const company = prompt('Which company created JavaScript?', '');

if (company === 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
```



## 逻辑运算符

在 JavaScript 中有四个逻辑运算符：

- 或 `||`
- 与 `&&`
- 非 `!`
- 空值合并运算符 `??`

**这些运算符可以应用于任意类型的值，它们的返回结果也可以是任意类型，而不仅仅是布尔值**。



**或 `||`**

参与运算的任意一个参数为 `true`，返回的结果就为 `true`。

```js
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

如果操作数不是布尔类型，会被转换为布尔值来进行计算，例如下面这样：

```js
if (1 || 0) { // 等同于 if( true || false )
  alert( 'truthy!' );
}
```



**或运算寻找第一个真值**

在 JavaScript 中对或 `||` 运算符有提供附加的特性。

```js
result = value1 || value2 || value3;
```

或运算符 `||` 做了如下的事情：

- 从左到右依次计算操作数
- 处理每一个操作数时，**都将其转化为布尔值**，如果结果是 `true`，就停止计算，返回这个**操作数的初始值**
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），则**返回最后一个操作数**

例如：

```js
alert( 1 || 0 ); // 1

alert( null || 1 ); // 1
alert( null || 0 || 1 ); // 1

alert( undefined || null || 0 ); // 0
```



**短路求值（Short-circuit evaluation）**

指 `||` 运算符如果第一个参数为真值，会立即返回该值，**后面的参数不会进行转换和处理**。

```js
true || alert('not printed'); // alert 不会执行
false || alert('printed');
```

可以利用这个特性，只在左侧的条件为假时才执行命令。



**与 `&&`**

参与运算的所有参数都为 `true`，返回的结果才为 `true`。

```js
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

就像或运算一样，与运算的操作数可以是任意类型的值，会被转换为布尔值来进行计算。

```js
if (1 && 0) { // 等价于 true && false
  alert( "won't work, because the result is falsy" );
}
```



**与运算寻找第一个假值**

```js
result = value1 && value2 && value3;
```

与运算 `&&` 做了如下的事：

- 从左到右依次计算操作数
- 在处理每一个操作数时，都将其转化为布尔值，如果结果是 `false`，就停止计算，并返回这个**操作数的初始值**
- 如果所有的操作数都被计算过（也就是，转换结果都是 `true`），则返回**最后一个操作数**

```js
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

**⚠️ 注意：** 

- **与运算 `&&` 或运算 `||` 之前进行**，例如：`a && b || c && d` 等同于 `(a && b) || (c && d)`

- **不要用 `||` 或 `&&` 来取代`if`**，例如下面这样：

  ```js
  let x = 1;
  
  (x > 0) && alert( 'Greater than zero!' );
  ```

  这样缺乏可读性，换成 `if` 更加明显。

  ```js
  let x = 1;
  
  if (x > 0) alert( 'Greater than zero!' );
  ```



**非 `!`**

```js
result = !value;
```

逻辑非运算符接受一个参数，计算过程如下：

1. 将操作数转化为布尔类型：`true/false`
2. 返回相反的值

```js
alert( !true ); // false
alert( !0 ); // true
```

可以通过 `!!` 将某个值转换为布尔类型：

```js
alert( !!'non-empty string' ); // true
alert( !!null ); // false
```

等同于 `Boolean` 函数的效果。

```js
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```

**⚠️ 注意： 非运算符 `!` 的优先级在所有逻辑运算符里面最高**，所以它总是在 `&&` 和 `||` 之前执行。



**空值合并运算符 ?? **

当一个值既不是 `null` 也不是 `undefined` 时，我们将其称为 **“已定义的（defined）”**。

`a ?? b` 的结果是：

- 如果 `a` 是已定义的，则结果为 `a`
- 如果 `a` 不是已定义的，则结果为 `b`

等同于

```js
(a !== null && a !== undefined) ? a : b;
```

**`??` 和 `||` 的优先级一样，都是 `3`**，仅略高于 `?` 和 `=`，所以在大多数其它运算（例如 `+` 和 `*`）之后计算，所以在计算时可能需要添加括号来调整计算顺序。

```js
let height = null;
let width = null;

// 重要：使用括号
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

`||` 和 `??` 之间的重要区别是：

- `||` 返回第一个**真**值
- `??` 返回第一个**已定义的**值

简单来说就是 **`||` 无法区分 `false`、`0`、空字符串 `""` 和 `null`、`undefined`**，例如下面这样。

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

上述代码中高度 `0` 通常是一个有效值，不应该被替换换位默认值， `??` 运算得到的是正确的结果。

**⚠️ 注意：** 出于安全原因，**JavaScript 禁止将 `??` 运算符与 `&&` 和 `||` 运算符一起使用**

```js
let x = 1 && 2 ?? 3; // Uncaught SyntaxError: Unexpected token '??'
```

这样做是为了避免开发者从 `||` 切换到 `??` 时的编程错误。

可以通过明确使用括号来解决这个问题。

```js
let x = (1 && 2) ?? 3; // 正常工作了

alert(x); // 2
```



## 循环：while 和 for

常用于重复执行一些操作。

**while 循环**

当循环条件 `condition` 为真时，执行循环体的代码。

```js
while (condition) {
  // 循环体
}
```

例如：

```js
let i = 0;
while (i < 3) { // 依次显示 0、1、2
  alert( i );
  i++;
}
```

循环体的单次执行叫做**一次迭代**，上述代码的循环共进行了三次迭代。

任何变量和表达式都可以是循环条件，在 `while` 中的循环条件会被计算为布尔值。

也可以通过 `while(true)` 来构造 “无限” 循环。

**⚠️ 注意： 单行循环体可以不需要使用大括号**。

```js
let i = 3;
while (i) alert(i--);
```



**do...while 循环**

循环首先执行循环体中的代码，然后检查条件，当条件为真时，重复执行循环体。

```js
do {
  // 循环体
} while (condition);
```

例如：

```js
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3); // 依次显示 0、1、2
```

**⚠️ 注意：** 

- `do...while` 循环无论条件是否为真，**`do...while` 的循环体至少执行一次**
- 该形式语法用的比较少，**通常更加倾向使用 `while(...) {...}`**



**for 循环**

语法格式如下：

```js
for (begin; condition; step) {
  // 循环体
}
```

例如：

```js
for (let i = 0; i < 3; i++) { // 依次显示 0、1、2
  alert(i);
}
```

上述代码运行步骤如下：

| 语句段         |             |                                                  |
| :------------- | :---------- | :----------------------------------------------- |
| begin          | `let i = 0` | 进入循环时执行一次                               |
| condition      | `i < 3`     | 在每次循环迭代之前检查，如果为 `false`，停止循环 |
| body（循环体） | `alert(i)`  | 条件为真时，重复运行                             |
| step           | `i++`       | 在每次循环体迭代后执行                           |

上述代码中的 “计数” 变量 `i` 是在循环中声明的，叫做 **“内联” 变量声明，只在循环中可见**。

```js
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // 错误，没有这个变量
```

除了在循环中声明变量，还可以使用外部现有的变量。

```js
let i = 0;

for (i = 0; i < 3; i++) { // 使用现有的变量
  alert(i); // 0, 1, 2
}

alert(i); // 3，可见，因为是在循环之外声明的
```

`for` 循环中的任何语句段都可以被省略。

- 省略 `begin` 部分

  ```js
  let i = 0; // 我们已经声明了 i 并对它进行了赋值
  
  for (; i < 3; i++) { // 不再需要 begin 语句段
    alert( i ); // 0, 1, 2
  }
  ```

- 省略 `step` 部分

  ```js
  let i = 0;
  
  for (; i < 3;) {
    alert( i++ );
  }
  ```

  该循环等同于 `while (i < 3)`。

- 删除所有部分，从而创建一个无限循环

  ```js
  for (;;) {
    // 无限循环
  }
  ```

  **⚠️ 注意：`for` 的两个 `;` 必须存在**，否则会出现语法错误。



**跳出循环**

使用 `break` 指令**强制停止循环**，例如下面这段代码。

```js
let sum = 0;

while (true) {
  let value = +prompt('Enter a number', '');
  if (!value) break; // 输入空行或取消输入时停止循环
  sum += value;
}

alert( 'Sum: ' + sum );
```

`break` 跳转循环后将控制权交给循环后的第一行，在上述代码中即 `alert`。



**继续下一次迭代**

使用 `continue` 指令**不会停止整个循环，而是停止当前这一次迭代，并启动新的一轮循环（如果条件允许的话）。**

```js
for (let i = 0; i < 10; i++) {

  // 如果为真，跳过循环体的剩余部分。
  if (i % 2 == 0) continue;

  alert(i); // 1，然后 3，5，7，9
}
```

上述代码中对于偶数的 `i` 值，`continue` 指令会停止本次循环的执行，将控制权传递给下一次 `for` 循环的迭代，所以 `alert` 仅被奇数值调用。

**`continue` 指令有利于减少嵌套**，如果不用 `continue` 指令就会像下面这样多一层嵌套：

```js
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert( i );
  }
}
```

**⚠️ 注意： 非表达式的语法结构不能与三元运算符 `?` 一起使用**，所以 `break/continue` 这样的指令是不允许和三元运算符 `?` 一起使用的，例如下面这段代码：

```js
(i > 5) ? alert(i) : continue; // Uncaught SyntaxError: Unexpected token 'continue'
```

上述代码会停止运行，并显示有语法错误。

**表达式：** 可以**产生一个值的代码片段**，比如：

```js
1 + 2      // 3
a > b      // true 或者 false
func()     // undefined
x ? y : z  // y 或者 z
```



**break/continue 标签**

当需要从多层嵌套的循环中跳出来时，使用普通 `break` 只会打破内部循环，此时就需要使用 `break/continue` 标签。

**标签** 是在循环之前带有冒号的标识符：

```js
labelName: for (...) {
  ...
}
```

`break <labelName>` 语句可以跳出循环至标签处，例如下面这段代码：

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
		
    if (!input) break outer; // 如果是空字符串或被取消，则中断并跳出这两个循环
  }
}

alert('Done!');
```

上述代码标签名是 `outer`，通过 `break outer` 跳出循环到 `outer` 标签处，然后将控制权交给 `alert('Done!')` 处。

`continue` 指令也可以和标签一起使用，**可以执行跳转到标记循环的下一次迭代**。

**⚠️ 注意：标签并不允许跳转到代码的任意位置**，例如：

```js
break label;  // 跳转至下面的 label 处（无效）

label: for (...)
```

**`break` 指令必须在代码块或者循环体内部中**，从技术上讲，任何被标记的代码块都有效。

```js
label: {
  // ...
  break label; // 有效
  // ...
}
```

不过 99.9% 的情况下 `break` 都被用在循环体内。

**⚠️ 注意： `continue` 只能放在循环体内部**，不能像 `break` 可以放在代码块中。



## swtich 语句

`switch` 语句可以替代多个 `if` 判断，为多分支选择的情况提供了一个更具描述性的方式。

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

上述代码中，`swtich` 语句首先判断 `x` 值与第一个 `case` 后的值（也是就是 `value1`）是否**严格相等**，然后再比较第二个 `case`（`value2`），以此类推。

- 如果相等，`switch` 语句就执行相应 `case` 下的代码块，**直到遇到最靠近的 `break` 语句（或者直到 `switch` 语句末尾）**
- 如果没有符合的 `case`，则执行 `default` 代码块

**⚠️ 注意：**

- **`switch` 语句中的比较都是严格相等 `===` 的**

- **`switch` 语句中至少有一个 `case` 代码块**和一个可选的 `default` 代码块

- 如果没有 `break`，程序将不经过任何检查就继续执行下一个 `case`

  ```js
  let a = 2 + 2;
  
  switch (a) {
    case 3:
      alert( 'Too small' );
    case 4:
      alert( 'Exactly!' );
    case 5:
      alert( 'Too big' );
    default:
      alert( "I don't know such values" );
  }
  ```

  上述代码会连续执行的三个 `alert`，分别是：

  ```js
  alert( 'Exactly!' );
  alert( 'Too big' );
  alert( "I don't know such values" );
  ```

- `switch` 和 `case` 允许使用任意表达式，例如下面这样：

  ```js
  let a = "1";
  let b = 0;
  
  switch (+a) {
    case b + 1:
      alert("this runs, because +a is 1, exactly equals b+1");
      break;
    default:
      alert("this doesn't run");
  }
  ```

  会执行 `alert("this runs, because +a is 1, exactly equals b+1");`。



**case 分组**

可以将共享同一段代码的几个 `case` 分为一组。

```js
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;
  case 3: // 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
  default:
    alert('The result is strange. Really.');
}
```

上述代码中当 `a` 是 `3` 或者 `5` 时，都会显示相同的信息。

**⚠️ 注意：** `case` 分组的能力其实是 `switch` 语句没有 `break` 时的副作用，没有 `break` 时会从 `case3` 执行到 `case5`。



## 函数

函数是程序的主要构建块，可以使一段代码被调用多次，不需要写重复的代码。



**函数声明**

```js
function name(parameter1, parameter2, ... parameterN) {
  // 函数体 body
}
```

`function` 关键字首先出现，然后再是**函数名**，括号中的是**参数列表**（使用逗号分隔，参数列表可以为空），最后花括号之间的代码是**函数体**，例如：

```js
function sum(a, b) {
  return a + b;
}
```

通过 `sum()` 可以调用函数。

```js
function sum(a, b) {
  return a + b;
}

sum(1, 3); // 4
sum(2, 5); // 7
```



**局部变量**

函数中声明的变量**只在该函数内部可见**。

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // 局部变量
  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // ReferenceError: message is not defined
```



**外部变量**

函数可以访问外部的变量。

```js
let userName = 'CodePencil';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, CodePencil
```

函数也可以修改外部变量。

```js
let userName = 'CodePencil';

function showMessage() {
  userName = 'Bob'; // 修改外部变量
  let message = 'Hello, ' + userName;
  alert(message);
}

alert(userName); // CodePencil

showMessage(); // Hello, Bob

alert(userName); // Bob
```

**⚠️ 注意：** 当函数内声明了**同名的变量**（局部变量），就不会使用函数外的变量。

```js
let userName = 'Bob';

function showMessage() {
  let userName = 'CodePencil'; // 声明一个局部变量

  let message = 'Hello, ' + userName; // CodePencil
  alert(message);
}

showMessage(); // Hello, CodePencil

alert(userName); // Bob，未被更改，函数没有访问外部变量
```

**⚠️ 注意：** 

- **任何函数之外声明的变量被称为全局变量**，例如上述代码中函数外的 `userName` 变量，全局变量在任意函数中都是可见的（除非被局部变量遮蔽）
- 现代开发很少甚至没有全局变量，大多数变量都存在于函数之中，不过有时候，全局变量能够用于存储项目级别的数据



**参数**

- 参数（parameter）是函数**声明**中括号内列出的变量（它是函数声明时的术语）

  ```js
  function sum(a, b) { // a，b 都是 parameter
    return a + b;
  }
  ```

- 参数（argument）是**调用**函数时传递给函数的值（它是函数调用时的术语）

  ```js
  sum(1, 3); // 1, 3 都是 argument
  ```

修改函数内部的参数，在函数外部看不到更改。

```js
function showMessage(from, text) {
  from = '*' + from + '*'; // 修改的是复制的变量值副本
  alert(from + ': ' + text);
}

let from = 'CodePencil';
showMessage(from, 'Hello'); // *CodePencil*: Hello

// from 值相同，函数修改了一个局部的副本
alert(from); // CodePencil
```



**默认值**

如果函数调用，**有参数（parameter）但没有提供，相应的值就会变成 `undefined`**。

```js
function showMessage(from, text) {
  from = '*' + from + '*';
  alert(from + ': ' + text);
}

let from = 'CodePencil';
showMessage(from); // *CodePencil*: undefined
```

可以通过 `=` 为函数参数（parameter）指定默认值。

```js
function showMessage(from, text = 'no text given') { // 为 text 参数指定默认值
  from = '*' + from + '*';
  alert(from + ': ' + text);
}

let from = 'CodePencil';
showMessage(from); // *CodePencil*: no text given
```

上述代码中当 `text` 参数没传递时，将会使用默认值 `no text given`。

默认值也可以是一个复杂的表达式。

```js
function showMessage(from, text = anotherFunction()) {
  ...
}
```

当 `text` 参数没传递时，`anotherFunction` 函数会被调用，反之不会调用。

**⚠️ 注意：** 对于不支持默认参数的浏览器中，可以使用以下方式来兼容。

```js
function showMessage(from, text) {
  if (text === undefined) { // 显式检查是否为 undefined
    text = 'no text given';
  }

  alert(from + ": " + text);
}
```

也可以使用 `||` 运算符。

```js
function showMessage(from, text) {
  text = text || 'no text given';
  ...
}
```

如果 `text` 的值为假值，则分配默认值。



**返回值**

函数可以将一个值返回作为调用函数的结果。

```js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3
```

**`return` 指令可以在函数的任意位置**，当执行 `return` 时，函数停止，并将值返回给调用函数的地方（例如：上述代码会返回给 `result` 变量）。

一个函数中可以有多个 `return`。

```js
function checkAge(age) {
  if (age >= 18) { // 比较 age 大小返回不同的值
    return true;
  } else {
    return confirm('Got a permission from the parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}
```

**⚠️ 注意：**

- 可以只使用 `return` 但没有返回值也是可行的，但会导致**函数立即退出**。

  ```js
  function showMovie(age) {
    if (!checkAge(age)) {
      return; // 使用空值 return
    }
    alert('Showing you the movie');
  }
  ```

  上述代码中，如果 `checkAge` 返回 `false`，则会执行 `return` 指令停止函数，导致后面的 `alert` 语句不会执行。

- **空值的** `return` **或没有** `return` **的函数返回值都为** `undefined`

  ```js
  function doNothing() { /* 没有代码 */ }
  
  alert( doNothing() === undefined ); // true
  ```

  ```js
  function doNothing() {
    return;
  }
  
  alert( doNothing() === undefined ); // true
  ```

- **不要在 `return` 与返回值之间添加新行**

  ```js
  return
   (some + long + expression + or + whatever * f(a) + f(b))
  ```

  上述代码换行等价于下列代码，**`return` 后面的语句不会执行**，实际返回的是空值。

  ```js
  return;
   (some + long + expression + or + whatever * f(a) + f(b))
  ```

  如果想写成跨多行的形式，需要在 `return` 同一行，并且按如下方式使用括号。

  ```js
  return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )
  ```



**函数命名**

函数是行为（action），所以函数名通常是动词，**应该简短且尽可能准确地描述函数的作用**。

普遍的做法是使用动词前缀来开始一个函数。

- `"get…"` 返回一个值
- `"calc…"` 计算某些内容
- `"create…"` 创建某些内容
- `"check…"` 检查某些内容并返回 `boolean` 值
- `"show…"` 显示某些内容

例如下面这些例子：

```js
showMessage(..)     // 显示信息
getAge(..)          // 返回 age 值
calcSum(..)         // 计算求和并返回结果
createForm(..)      // 创建表单（通常会返回它）
checkPermission(..) // 检查权限并返回 true/false
```

**⚠️ 注意：**

- **一个函数应该只包含函数名所指定的功能，不做更多与函数名无关的功能**，如果一个函数的功能很复杂，应该把该函数拆分为几个小的函数

- 一个单独的函数不仅更容易测试和调试，**它的存在本身就是一个很好的注释**

  ```js
  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert(i); // 一个素数
    }
  }
  ```

  上述代码我们可以将判断素数的部分拆分为一个单独的函数，就像下面这样。

  ```js
  function showPrimes(n) {
    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // 一个素数
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }
  ```

  通过 `isPrime` 函数名可以清晰的看出函数的行为，不需要通过注释和代码，这样的代码称为**自描述**。



## 函数表达式

在 JavaScript 中函数不是一个 “神奇的语言结构”，而是一种**特殊的值**。

字符串或数字等常规值代表**数据**。

函数可以被视为一个**行为（action）**。

- **函数声明**

  ```js
  function sayHi() {
    alert('Hello');
  }
  ```

-  **函数表达式**

  ```js
  let sayHi = function() {
    alert('Hello');
  };
  ```

**⚠️ 注意：**

- 上述两种创建方式虽然不同，但都是在 `sayHi` 变量中存储了一个函数

  ```js
  function sayHi() {
    alert('Hello');
  }
  
  alert(sayHi); // 显示函数代码
  ```

  上述代码中 **`alert(sayHi);` 不会执行函数，因为 `sayHi` 没有加括号**，所以只会显示函数的源码，如下图。

  ![image-20250606074913246](images/image-20250606074913246.png)

- **函数表达式结尾有一个分号 `;`，这个分号不是函数语法的一部分**，而是赋值语句的一部分，例如：

  ```js
  let sayHi = 5;
  ```

- 函数表达式中 `function` 关键字后面没有函数名，**函数表达式允许省略函数名**



**回调函数**

```js
function ask(question, yes, no) {
  if ( confirm(question) ) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  alert('You agreed.');
}

function showCancel() {
  alert('You canceled the execution.');
}

// 函数 showOk 和 showCancel 被作为参数传入到 ask
ask('Do you agree?', showOk, showCancel);
```

上述代码中 `ask` 函数的参数值 `showOk` 和 `showCancel` 被称为**回调函数**或者**回调**，也可以使用**匿名函数**来简化代码：

```js
function ask(question, yes, no) {
  if ( confirm(question) ) {
    yes();
  } else {
    no();
  }
}

ask(
  'Do you agree?',
  function() { alert('You agreed.'); },
  function() { alert('You canceled the execution.'); }
);
```

**⚠️ 注意：** 上述代码中 `ask` 函数中的两个匿名函数因为没有分配变量，所以在 `ask` 函数的外部无法访问。



**函数声明和函数表达式的区别**

首先是两者在语法上不同：

- **函数声明**：在主代码流中声明为单独的语句的函数

  ```js
  // 函数声明
  function sum(a, b) {
    return a + b;
  }
  ```

- **函数表达式**：在一个表达式中或另一个语法结构中创建的函数，例如下面这个函数是在赋值表达式 `=` 右侧创建的

  ```js
  // 函数表达式
  let sum = function(a, b) {
    return a + b;
  };
  ```

其次是两者在 JavaScript 引擎创建函数时机上的不同：

- **在函数声明被定义之前，它就可以被调用**

  ```js
  sayHi('John'); // Hello, John
  
  function sayHi(name) {
    alert(`Hello, ${name}`);
  }
  ```

  之所以会这样是因为内部算法的缘故，当 JavaScript **准备**运行脚本时，**首先会在脚本中寻找全局函数声明，并创建这些函数**。

  **⚠️ 注意：在严格模式下，当一个函数声明在一个代码块内时，它在代码块中的任何位置都是可见的，但是在代码块外不可见 **，例如下面这样：

  ```js
  let age = prompt('What is your age?', 18);
  
  // 有条件地声明一个函数
  if (age < 18) {
  
    function welcome() {
      alert('Hello!');
    }
  
  } else {
  
    function welcome() {
      alert('Greetings!');
    }
  
  }
  
  welcome(); // Uncaught ReferenceError: welcome is not defined
  ```

  上述代码中**如果需要 `welcome` 在 `if` 外可见，可以使用函数表达式**。

  ```js
  let age = prompt('What is your age?', 18);
  
  let welcome;
  
  if (age < 18) {
  
    welcome = function() {
      alert('Hello!');
    };
  
  } else {
  
    welcome = function() {
      alert('Greetings!');
    };
  
  }
  
  welcome(); // 可以正常运行
  ```

  

- **函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用**

  ```js
  sayHi('John'); // Uncaught ReferenceError: sayHi is not defined
  
  let sayHi = function(name) {
    alert(`Hello, ${name}`);
  };
  ```



## 箭头函数

创建函数的另外一种简单的语法，通常比函数表达式更好。

```js
let func = (arg1, arg2, ..., argN) => expression;
```

上述代码中创建了一个函数 `func`，它接收多个参数 `arg1..argN`，然后使用参数对右侧的 `expression` 求值并返回其结果，例如：

```js
let sum = (a, b) => a + b;

alert( sum(1, 2) ); // 3
```

- 如果只有一个参数**可以不使用括号**

  ```js
  let double = n => n * 2;
  
  alert( double(3) ); // 6
  ```

- 如果没有参数，**需要保留空的括号**

  ```js
  let sayHi = () => alert('Hello!');
  
  sayHi();
  ```

箭头函数可以像函数表达式一样使用。

```js
let age = prompt('What is your age?', 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert('Greetings!');

welcome();
```



**多行箭头函数**

如果函数内有多行的表达式或语句，需要使用 `{}` 括起来，并需要包含 `return` 才能返回值。

```js
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 return
};

alert( sum(1, 2) ); // 3
```



## 在浏览器中调试

**调试**是指在一个脚本中找出错误并修复的过程。所有的现代浏览器和大多数其它环境都支持调试工具，**推荐使用 Chrome**。



**资源面板**

![image-20250607上午83424025](images/image-20250607082153060.png)

1. **文件导航（File Navigator）区域：** 列出了 HTML、JavaScript、CSS 和图片等资源，浏览器扩展程序的资源也会在这里显示
1. **代码编辑（Code Editor）区域：** 展示源码
1. **JavaScript 调试（JavaScript Debugging）区域：** 用于调试的，可以查看断点、观察表达式的值以及变量作用域，还有调用栈等信息



**控制台**

按下 `Esc`，下方会出现一个控制台，可以输入一些命令然后按下 `Enter` 来执行。

![image-20250607084903618](images/image-20250607084903618.png)



**断点**

**断点是调试器自动暂停 JavaScript 执行的地方**。

点击代码编辑区域代码行前的数字，就可以设置一个断点，例如下面给 `4`、`8` 行各设置一个断点。

![image-20250607085528064](images/image-20250607085528064.png)

- 在右侧面板中可以找到断点的列表，点击可以快速跳转到代码中的断点

- 取消前面的勾选可以临时禁用对应的断点
  
  ![image-20250608081318520](images/image-20250608081318520.png)
  
- 可以通过右键单击并选择来删除一个断点

  ![image-20250608081241673](images/image-20250608081241673.png)

- 在行号前右键单击修改可以创建一个条件断点，**只有当给定的表达式为真时才会被触发，适合需要在特定的变量值或参数的情况下暂停程序执行时的调试**

  ![image-20250608081141490](images/image-20250608081141490.png)

  ![image-20250608081537541](images/image-20250608081537541.png)

**debugger 命令**

可以在代码中使用 `debugger` 命令来暂停代码的执行。

```js
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // 调试器会在这停止

  say(phrase);
}
```

**⚠️ 注意：** `debugger` 命令只有在开发者工具打开时才有效，否则浏览器会忽略它。



**暂停并查看**

![image-20250608082106132](images/image-20250608082106132.png)

1. **监视（Watch）：显示任意表达式的当前值** 

   可以通过点击加号 `+`，然后输入一个表达式，调试器将显示它的值，并在执行过程中自动重新计算该表达式。

2. **断点（Breakpoints）：显示当前的断点以及断点所在的文件及行号**

3. **作用域（Scope）：显示当前的变量**

   - “本地（`Local`）” 显示**当前函数中的变量**，可以在源代码中看到它们的值高亮显示了出来
     ![image-20250608082933882](images/image-20250608082933882.png)
   - “全局（`Global`）” 显示全局变量（**不在任何函数中**）

4. **调用堆栈（Call Stack）：显示嵌套的调用链**

   上图中调试器正在 `hello()` 的调用链中，被 `index.html` 中的一个脚本调用（因为这里没有函数，所以显示 “匿名（anonymous）”）。



**跟踪执行**

![image-20250608083541813](images/image-20250608083541813.png)

1. **继续执行脚本：快捷键 `F8`** 

   如果没有其它断点，程序会继续执行，并且调试器不会再控制程序。

2. **跳过下一个函数调用：快捷键 `F10`**

   运行下一条（即当前行）指令，如果是函数调用则不会进入函数中。

   **⚠️ 注意：** 这里的函数指的是：不是内建的如 `alert` 函数等，而是我们自己写的函数。

3. **进入下一个函数调用：快键键 `F11`** 

   运行下一条（即当前行）指令，如果是函数是异步函数，则会等待一段时间后再执行，反之与单步调试类似。

4. **跳出当前函数：快键键 `Shift+F11`**

   继续执行当前函数内的剩余代码，并暂停在调用当前函数的下一行代码处。

   适用于使用单步调试偶然进入到一个嵌套调用，但是又对这个函数不感兴趣时，想要尽可能的继续执行到最后的情况。

5. **单步调试：快键键 `F9`**

   运行下一条语句。

   如果一次接一次地点击此按钮，整个脚本的所有语句会被逐个执行。

6. **启用/停用断点**

   一个批量操作断点是否启用的开关。



**出现错误时自动暂停脚本执行**

![image-20250608090007233](images/image-20250608090007233.png)

如果勾选启动这两个功能，在开发者工具开着的情况下，任何脚本执行错误都会导致该脚本执行自动暂停，然后就可以分析变量为什么出错。



**继续执行到此处**

在调试开始的情况下，在代码中的某一行上右键，可以看到 **“继续执行到此处（Continue to here）”** 的选项。

适用于想要向前移动很多步到某一行为止，但是又懒得设置一个断点。

![image-20250608090431664](images/image-20250608090431664.png)



**日志记录**

通过 `console.log` 函数将内容输出在控制台中。

```js
console.log('Hello World');
```

在代码中有足够的日志记录，那么可以从记录中看到发生了什么，而不需要借助调试器。



## 代码风格

代码必须尽可能的清晰和易读。



**花括号**

- 如果代码短的话，可以只写成一行

  ```js
  if (n < 0) alert(`Power ${n} is not supported`);
  ```

- 最好的方式，这样更具有可读性

  ```js
  if (n < 0) {
    alert(`Power ${n} is not supported`);
  }
  ```



**行的长度**

没有人喜欢读一长串代码，最好将代码分割一下。

```js
// 回勾引号 ` 允许将字符串拆分为多行
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;
```

对于 `if` 语句：

```js
if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}
```

**⚠️ 注意：** 一行代码的最大长度应该在团队层面上达成一致，通常是 80 或 120 个字符。



**缩进**

- **水平方向上的缩进：2 或 4 个空格**

  一个水平缩进通常由 2 或 4 个空格或者 “Tab” 制表符（Tab 键）构成，目前空格使用更普遍一点。

  ```js
  show(
    parameters,
    aligned, // 左边有 2 个空格
    one,
    after,
    another
    ) {
    // ...
  }
  ```

- **垂直方向上的缩进：用于将代码拆分成逻辑块的空行**

  即使是单个函数通常也被分割为数个逻辑块。

  ```js
  function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    //              <--
    return result;
  }
  ```

  **⚠️ 注意：** 插入一个额外的空行有助于使代码更具可读性，写代码时，**不应该出现连续超过 9 行都没有被垂直分割的代码**。



**分号**

每一个语句后面都应该有一个分号，即使 JavaScript 可以省略分号。

**⚠️ 注意：** 有经验的 JavaScript 程序员可以选择无分号的代码风格，否则最好还是使用分号来避免可能出现的陷阱。



**嵌套的层级**

尽量避免代码嵌套层级过深。

- 不好的做法

  ```js
  function pow(x, n) {
    if (n < 0) {
      alert("Negative 'n' not supported");
    } else {
      let result = 1;
  
      for (let i = 0; i < n; i++) {
        result *= x;
      }
  
      return result;
    }
  }
  ```

- 好的做法

  ```js
  function pow(x, n) {
    if(n < 0) {
      alert("Negative 'n' not supported");
      return;
    }
  
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  ```

  第二个代码比第一个代码更具有可读性，`n < 0` 特殊情况在一开始就被处理。



**函数位置**

有三种方式来组织函数定义和函数使用代码的位置。

1. 在调用函数的代码**上方**声明函数

   ```js
   // 函数声明
   function createElement() {
     ...
   }
   
   function setHandler(elem) {
     ...
   }
   
   function walkAround() {
     ...
   }
   
   // 调用函数的代码
   let elem = createElement();
   setHandler(elem);
   walkAround();
   ```

2. 先写调用函数的代码，再写声明函数

   ```js
   // 调用函数的代码
   let elem = createElement();
   setHandler(elem);
   walkAround();
   
   // 函数声明
   function createElement() {
     ...
   }
   
   function setHandler(elem) {
     ...
   }
   
   function walkAround() {
     ...
   }
   ```

3. 混合使用

   ```js
   // 调用函数的代码
   let elem = createElement();
   
   // 函数声明
   function createElement() {
     ...
   }
   
   // 调用函数的代码
   setHandler(elem);
   
   // 函数声明
   function setHandler(elem) {
     ...
   }
   
   // 调用函数的代码
   walkAround();
   
   // 函数声明
   function walkAround() {
     ...
   }
   ```

**⚠️ 注意：** 大多数情况下，使用第二种方式更好，因为在阅读代码时，我们首先想要知道的是它执行了哪些函数，不一定要阅读这些函数具体的内容



**风格指南**

有很多受欢迎现成的风格指南：

- [Google JavaScript 风格指南](https://google.github.io/styleguide/jsguide.html)
- [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)
- [Idiomatic.JS](https://github.com/rwaldron/idiomatic.js)
- [StandardJS](https://standardjs.com/)



**自动检查器**

检查器（Linters）是可以自动检查代码样式，还可以发现一些代码错误。

有很多出名的代码检查工具：

- [JSLint](https://www.jslint.com/)：最早一批检查器之一
- [JSHint](https://www.jshint.com/)：比 JSLint 多了更多设置
- [ESLint](https://eslint.org/)：最新的一个检查器

**推荐使用 ESLint，目前也是前端中用的最多的检查器之一**。



##  注释

**在好的代码中，“解释性” 的注释应该是最少的。**

不推荐像下面这样的注释：

```js
// 这里的代码会先做这件事（……）然后做那件事（……）
// ……谁知道还有什么……
very;
complex;
code;
```

一个很棒的原则：“如果代码不够清晰以至于需要一个注释，那么或许它应该被重写。”



**用函数替代注释**

用一个函数来代替一个代码片段是更好的

```js
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // 检测 i 是否是一个质数（素数）
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
```

上述代码可以调整为

```js
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
```



**为代码块创建函数替代注释**

```js
// 在这里我们添加威士忌
for(let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop);
  add(drop, glass);
}

// 在这里我们添加果汁
for(let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato);
  let juice = press(tomato);
  add(juice, glass);
}
```

上述代码可以调整为
```js
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    smell(drop);
    add(drop, glass);
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, glass);
  }
}
```

函数本身就可以说明功能，所以可以不需要注释，每一个函数做什么、需要什么和返回什么都非常地清晰。

**⚠️ 注意：** 在实际开发中，**不能完全避免 “解释型” 注释**，例如在一些复杂的算法中，会有一些出于优化的目的而做的一些巧妙的 “调整”，但通常情况下，应该尽可能地保持代码的简单和 “自我描述” 性。



**好的注释**

一种专门用于记录函数的语法  JSDoc，可以用来描述函数的用法、参数和返回值。

```js
/**
 * 返回 x 的 n 次幂的值
 *
 * @param {number} x 要改变的值。
 * @param {number} n 幂数，必须是一个自然数
 * @return {number} x 的 n 次幂的值
 */
function pow(x, n) {
  ...
}
```

在类似 VSCode、WebStorm 这样的编辑器中，都可以很好地理解和使用这些注释，来提供自动补全和一些自动化代码检查工作。

像 [JSDoc 3](https://github.com/jsdoc/jsdoc) 这样的工具，可以通过注释直接生成 HTML 文档。



## Polyfill 和转译器

JavaScript 语言在稳步发展，有很多新的特性在老的浏览器上无法很好的支持，所以要让现代的代码能够正常运行在旧引擎的浏览器上，需要使用 Polyfill 和转译器。



**转译器（Transpilers）**

**转译器是一种可以将源码转译为另一种源码的软件**，它可以解析现代代码，并使用旧的语法结构进行重写，使其可以在旧的引擎上工作。

例如在 ES2020 之前没有 “空值合并运算符” `??`，旧的引擎不明白 `height = height ?? 100` 这段代码的含义，所以需要使用转译器。

-  在运行转译器之前：

  ```js
  height = height ?? 100;
  ```

- 运行转译器之后：

  ```js
  height = (height !== undefined && height !== null) ? height : 100;
  ```

通常，会在自己的计算机上运行转译器，然后将转译后的代码部署到服务器。

[Babel](https://babeljs.io/) 是最著名的转译器之一，通常会在现代项目构建系统（例如 [Webpack](https://webpack.js.org/)）中集成转译器，在每次代码更改时自动运行转译器的方法。



**垫片（Polyfills）**

新的语言特性可能不仅包括语法结构和运算符，还可能包括内建函数。

垫片可以用来添加缺少的特性。

例如 `Math.trunc(n)` 是一个 “截断” 数字小数部分的函数，在旧的 JavaScript 引擎中不支持，此时谈论的是新函数，而不是语法更改，因此无需在转译任何内容，而是要**补全缺失的函数。**

```js
if (!Math.trunc) { // 如果没有这个函数
  // 实现它
  Math.trunc = function(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

`Math.ceil` 和 `Math.floor` 老的 JavaScript 引擎都支持。

[Core.js](https://github.com/zloirock/core-js) 是著名的 Polyfill 库之一，支持很多特性，允许只包含需要的特性。



## 对象

原始类型的值只能存储一种东西（字符串，数字或者其他），但对象可以用来存储键值对和更复杂的实体。



**创建对象**

有以下两种语法可以创建一个空的对象。

```js
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
```



**对象属性**

可以在创建对象的时候，立即将一些属性以**键值对**的形式放入 `{...}` 中。

```js
let user = {
  name: 'CodePencil',  // 键 name，值 CodePencil
  age: 23,             // 键 age，值 23
};
```

位于冒号 `:` 前面的是键（`key`）,也叫做属性名，值（`value`）在冒号的后面。

也可以使用多字词语作为属性名，但是**必须加上引号：**

```js
let user = {
  name: 'CodePencil',
  age: 23,
  'likes birds': true,  // 多词属性名必须加引号
};
```

**⚠️ 注意：列表中的最后一个属性应以逗号结尾**，这叫做尾随（trailing）或悬挂（hanging）逗号，便于添加、删除和移动属性。



**访问属性值**
可以使用点操作符 `.` 访问属性值。

```js
alert(user.name); // CodePencil
alert(user.age); // 23
```



**修改属性**

可以通过 `=` 来修改对象属性的值，**属性的值可以是任意类型**，例如添加布尔类型。

```js
user.isAdmin = true;
```



**删除属性**

可以使用 `delete` 操作符来移除属性。

```js
delete user.age;
```



**方括号**

对于多字词语的属性，无法使用点操作符 `.` 。

```js
// 这将提示有语法错误
user.likes birds = true; // Uncaught SyntaxError: Unexpected identifier 'birds'
```

JavaScript 会认为在处理 `user.likes`，然后遇到意外的 `birds` 时给出语法错误。

**点符号要求 `key` 是有效的变量标识符。这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 `$` 和 `_`）。**

这时可以使用方括号，可以用于任何字符串。

```js
let user = {};

// 设置
user['likes birds'] = true;

// 读取
alert(user['likes birds']); // true

// 删除
delete user['likes birds'];
```

**⚠️ 注意：** 方括号中的字符串要放在引号中，单引号或双引号都可以。

方括号中也支持通过任意表达式来获取属性名的方式。

```js
let key = 'likes birds';

user[key] = true; // 等价于 user['likes birds'] = true;
```

但点符号 `.` 不支持这样。

```js
let user = {
  name: 'CodePencil',
  age: 23,
};

let key = 'name';
alert(user.key); // undefined
```



**计算属性**

创建一个对象时，可以在对象字面量中使用方括号，这被称为计算属性。

```js
let fruit = prompt('Which fruit to buy?', 'apple');

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert(bag.apple); // 5 如果 fruit='apple'
```

也支持使用更复杂的表达式：

```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5, // bag.appleComputers = 5
};
```

**⚠️ 注意：** 

- 当属性名是已知且简单的时候，就使用点符号
- 如果需要一些更复杂的内容，就使用方括号



**属性简写**

在实际开发中，通常用已存在的变量当做属性名。

```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ……其他的属性
  };
}

let user = makeUser('CodePencil', 23);
alert(user.name); // CodePencil
```

上述代码中属性名跟变量名一样，此时可以使用一种**属性值缩写**方法，使属性名变得更短。

```js
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,  // 与 age: age 相同
    // ...
  };
}
```

属性名简写方式可以和正常方式混用。

```js
let user = {
  name,   // 与 name:name 相同
  age: 30,
};
```



**属性名限制**

- **属性名可以是任何字符串或者 `symbol`，使用 JavaScript 的保留字也没问题**

  ```js
  let obj = {
    for: 1,
    let: 2,
    return: 3,
  };
  
  alert( obj.for + obj.let + obj.return );  // 6
  ```

- **其它类型的属性名会被自动转换为字符串**

  ```js
  let obj = {
    0: 'test', // 等同于 '0': 'test'
  };
  
  // 都会输出相同的属性（数字 0 被转为字符串 '0'）
  alert(obj['0']); // test
  alert(obj[0]);   // test (相同的属性)
  ```


**⚠️ 注意：** 名为 `__proto__` 的属性，不能将它设置为一个非对象的值。

```js
let obj = {};
obj.__proto__ = 5; // 分配一个数字
alert(obj.__proto__); // [object Object]
```

上述代码中赋值结果与预期不符，具体解决方案可以参考原型链相关的内容。



**属性存在测试符 “in” 操作符**

JavaScript 的对象中能够访问任何属性，即使属性不存在也不会报错。

读取不存在的属性只会得到 `undefined`，可以通过以下方式判断属性是否存在。

```js
let user = {};

alert( user.noSuchProperty === undefined ); // true 表示该属性不存在
```

也可以使用操作符 `in` 来检测属性是否存在。

语法：

```js
'key' in object
```

例如：

```js
let user = { age: 23, };

let key = 'age';
alert(key in user); // true，属性 'age' 存在
```

**⚠️ 注意：** 如果对象中一个属性存在，但是存储的值是 `undefined` 的时候，只能使用 `in` 符号来检测属性是否存在。

```js
let obj = {
  test: undefined,
};

alert(obj.test); // 显示 undefined，所以属性不存在？

alert('test' in obj); // true，属性存在！
```

通常情况下不应该给对象的属性赋值 `undefined`，会用 `null` 来表示未知的或者空的值。



**for in 遍历对象属性**

用于遍历一个对象的所有键（`key`）。

语法：

```js
for (key in object) {
  // 对此对象属性中的每个键执行的代码
}
```

例如：

```js
let user = {
  name: 'CodePencil',
  age: 23,
  isAdmin: true,
};

for (let key in user) {
  // keys
  alert(key);  // name, age, isAdmin
  // 属性键的值
  alert(user[key]); // CodePencil, 23, true
}
```

也可以用其他属性名来替代 `key`，例如 `for(let prop in obj)` 也很常用。



**对象属性顺序**

使用 `for in` 遍历对象属性有特别的顺序，**整数属性会被进行排序，其他属性则按照创建的顺序显示**。

```js
let codes = {
  '49': 'Germany',
  '41': 'Switzerland',
  '44': 'Great Britain',
  '1': 'USA',
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

**整数属性：** 指的是一个可以在不做任何更改的情况下与一个整数进行相互转换的字符串。

例如 `'49'` 是一个整数属性名，因为我们把它转换成整数，再转换回来，它还是一样的，但是 `'+49'` 和 `'1.2'` 就不行了：

```js
// Number(...) 显式转换为数字
// Math.trunc 是内建的去除小数部分的方法。
alert( String(Math.trunc(Number('49'))) );  // '49'，相同，整数属性
alert( String(Math.trunc(Number('+49'))) ); // '49'，不同于 '+49' ⇒ 不是整数属性
alert( String(Math.trunc(Number('1.2'))) ); // '1'，不同于 '1.2' ⇒ 不是整数属性
```

对于非整数属性，就按照创建时的顺序来排序，例如：

```js
let user = {
  name: 'John',
  surname: 'Smith'
};
user.age = 25; // 增加一个

// 非整数属性是按照创建的顺序来排列的
for (let prop in user) {
  alert( prop ); // name, surname, age
}
```

如果同时有整数属性和非整数属性，则会先输出整数属性（从小到大），再输出非整数属性（添加顺序），例如：

```js
let codes = {
  name: 'CodePencil',
  44: 'Great Britain',
  1: 'USA',
};

codes.age = 23;

for (let code in codes) {
  alert(code); // 1, 44, name, age
}
```



## 对象复制和引用

对象： “通过引用” 存储和复制的。

原始类型：字符串、数字、布尔值等总是 “作为一个整体” 复制。



例如将 `message` 复制到 `phrase`。

```js
let message = 'Hello!';
let phrase = message;
```

![image-20250609100335727](images/image-20250609100335727.png)



但对象不是这样。

**赋值了对象的变量存储的不是对象本身，而是该对象 “在内存中的地址”，简单来说就是对该对象的 “引用”**。

```js
let user = {
  name: 'John',
};
```

![image-20250609103752828](images/image-20250609103752828.png)

所以当一个对象变量被复制，**其实是引用被复制，而该对象自身并没有被复制**。

```js
let user = { name: 'John' };

let admin = user; // 复制引用
```

![image-20250609104149309](images/image-20250609104149309.png)

```js
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // 通过 'admin' 引用来修改

alert(user.name); // 'Pete'，修改能通过 'user' 引用看到
```



**对象比较**

只有当两个对象为同一对象时，两者才相等。

- 这里 `a` 和 `b` 两个变量都引用同一个对象，所以它们相等

  ```js
  let a = {};
  let b = a; // 复制引用
  
  alert(a == b);  // true，都引用同一对象
  alert(a === b); // true
  ```

- 两个独立的对象则并不相等，即使它们都是 `{}`

  ```js
  let a = {};
  let b = {}; // 两个独立的对象
  
  alert( a == b ); // false
  ```

对于 `obj1 > obj2` 的比较，或者跟一个原始类型值的比较 `obj == 5` 时，**对象都会被转换为原始值**。

**⚠️ 注意：** 通常来说很少需要这样的比较，通常是在编程错误的时候才会出现这种情况。



**浅拷贝**

如果要复制一个对象，可以通过遍历已有对象的属性，在原始类型值的层面复制它们。

```js
let user = {
  name: 'John',
  age: 23,
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

clone.name = 'CodePencil';

alert(user.name); // 原来的对象中的 name 属性依然是 John
```

也可以使用 `Object.assign` 方法达到同样的效果。

语法：

```js
Object.assign(dest, [src1, src2, src3...])
```

- `dest` 是指目标对象
- `src1, ..., srcN` 是指源对象（可按需传递多个参数）

该方法可以**将第二个开始的所有参数的属性都被拷贝到第一个参数的对象中**，重写前面的例子：

```js
let user = {
  name: 'John',
  age: 23,
};

let clone = Object.assign({}, user);
```

上述代码中 `Object.assign` 将 `user` 对象中所有的属性都拷贝到一个空对象中，并返回这个新的对象。



**深拷贝**

如果对象的属性是其它对象的引用。

```js
let user = {
  name: 'CodePencil',
  sizes: {
    height: 182,
    width: 50,
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true，同一个对象
```

使用 `Object.assign` 克隆的新对象的 `sizes` 属性依旧是引用形式被拷贝。

这时需要使用递归并进行拷贝循环来检查 `user[key]` 的每个值，如果它是一个对象，那么也复制它的结构。

**推荐使用 lodash 库的 [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep)**。



**使用 const 声明的对象也是可以被修改的**

```js
const user = {
  name: 'John',
};

user.name = 'CodePencil'; // 这行不会报错

alert(user.name); // CodePencil
```

上述代码中 `user` 变量**必须始终引用同一个对象**，但该对象的属性可以被自由修改。



## 垃圾回收

JavaScript 的内存管理是自动、无形的，创建的变量、对象、函数...这一切都会占用内存。



**可达性（Reachability）**

JavaScript 中主要的内存管理概念是**可达性**。

**可达： 是指那些以某种方式可访问或可用的值，它们被存储在内存中**。



以下是**固有可达集合**，这些值明显不能被释放：

- 当前执行的函数，它的局部变量和参数

- 当前嵌套调用链上的其它函数、它们的局部变量和参数

- 全局变量

- （还有一些其他的，内部实现，例如：比如闭包环境、定时器队列等）

这些值都被称作为**根（roots）**。



如果一个值可以**从根通过引用或者引用链进行访问**，则认为该值是可达的，例如下面的例子：

```js
// user 具有对这个对象的引用
let user = {
  name: 'John'
};
```

`user` 是全局变量，引用了对象 `{name：'John'}`，此时该对象是可达的。

![image-20250610075405826](images/image-20250610075405826.png)

如果 `user` 变量的值被重写，则该引用就没了：

```js
user = null;
```

![image-20250610075556694](images/image-20250610075556694.png)

此时对象 `{name：'John'}` 变成不可达了，垃圾回收器会认为它是垃圾数据并进行回收，然后释放内存。



如果同时有两个变量引用同一个对象。

```js
let user = {
  name: 'John'
};

let admin = user;
```

![image-20250610075910967](images/image-20250610075910967.png)

此时如果执行之前的操作

```js
user = null;
```

对象 `{name：'John'}` 依旧可达，因为它还被 `admin` 这个全局变量所引用，因此它必须被保留在内存中，如果我们再对 `admin` 变量赋值为 `null`，那么该对象就变为不可达，会被删除。



**相互关联的对象**

```js
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: 'John'
}, {
  name: 'Ann'
});
```

`marry` 函数让两个对象相互引用，使它们 “结婚”，并返回一个包含着两个对象的一个对象，此时内存结构如下图：

![image-20250610080501072](images/image-20250610080501072.png)

全局变量 `family` 引用着一个对象，这对象又引用着两个对象，两个对象之间又相互引用，此时所有对象都是可达的。

此时如果移除两个引用：

```js
delete family.father;
delete family.mother.husband;
```

![image-20250610080844126](images/image-20250610080844126.png)

此时再也没有对 `John` 对象的引用，**对外引用不重要，只有传入引用才可以使对象可达**，所以此时 `John` 对象不可达，将从内存中删除。

最后的结果：

![image-20250610081150417](images/image-20250610081150417.png)



如果几个对象之间相互引用，但是**外部没有对其任意对象的引用**，那么这些对象也可能是不可达的，并从内存中删除，例如对前面的例子：

```js
family = null;
```

![image-20250610082443548](images/image-20250610082443548.png)

上图中，虽然 `John` 对象和 `Ann` 对象之间依旧相互引用，但没了外部对其的引用，它就变成了一座 “孤岛”，将从内存中删除。



**内部算法**

垃圾回收的基本算法被称为 “mark-and-sweep”。

定期执行以下“垃圾回收”步骤：

1. 垃圾收集器找到所有的根，并 “标记”（记住）它们
2. 然后它遍历并 “标记” 来自它们的所有引用
3. 然后它遍历标记的对象并标记 **它们的** 引用，所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象
4. ...如此操作，直到所有可达的（从根部）引用都被访问到
5. 没有被标记的对象都会被删除



例如有以下内存结构：

![image-20250610083219213](images/image-20250610083219213.png)

1. 标记所有的根

   ![image-20250610083427227](images/image-20250610083427227.png)

2. 跟随它们的引用标记它们所引用的对象

   ![image-20250610083635844](images/image-20250610083635844.png)

3. 如果还有引用的话，重复第二步，继续标记

   ![image-20250610083830254](images/image-20250610083830254.png)

4. 无法通过这个过程访问到的对象，被认为是不可达，会从内存中删除

   ![image-20250610084004393](images/image-20250610084004393.png)

这个过程类似于从根溢出一大桶油漆，它流经所有引用并标记所有可达到的对象，然后移除未标记的。

**⚠️ 注意：** 

- JavaScript 引擎做了许多优化，使垃圾回收运行速度更快，并且不会对代码执行引入任何延迟
- 还有其它的垃圾回收算法的优化和风格，不过大多都是类似的



## 对象方法，this



**对象方法**

对象属性中的函数被称为**方法**。

```js
let user = {
  name: 'CodePencil',
  age: 23,
};

user.sayHi = function() {
  alert('Hello!');
};

user.sayHi(); // Hello!
```

也可以提前声明函数，然后再赋值给对象。

```js
let user = {
  name: 'CodePencil',
  age: 23,
};

// 首先，声明函数
function sayHi() {
  alert('Hello!');
}

// 然后将其作为一个方法添加
user.sayHi = sayHi;

user.sayHi(); // Hello!
```



**方法简写**

在对象字面量中，可以使用更短的语法来声明方法。

```js
let user = {
  sayHi: function() {
    alert('Hello');
  }
};
```

可以简化为：

```js
let user = {
  sayHi() {
    alert('Hello');
  }
};
```

**⚠️ 注意：** 这两种方式并不完全相等，在对象继承方面有一些细微的差别，**不过通常情况下更短的语法是首选**。



**方法中的 "this"**

通常对象的方法需要访问对象中存储的信息才能完成工作，**为了访问该对象，在方法中可以使用 `this` 关键字**。

在 JavaScript 中 **`this` 关键字的值是在代码运行时计算出来的，取决于代码上下文**。

简单来说，`this` 的值就是 `.` 之前的对象，即调用该方法的对象。

```js
let user = {
  name: 'CodePencil',
  age: 23,

  sayHi() {
    // this 指的是 “当前的对象”
    alert(this.name);
  }

};

user.sayHi(); // CodePencil
```

在 `user.sayHi();` 执行过程中，`this` 的值为 `user`。

**⚠️ 注意：** 前面的例子也可以不使用 `this`，通过外部变量来实现，但这样的代码是不可靠的，例如：

```js
let user = {
  name: 'CodePencil',
  age: 23,

  sayHi() {
    alert(user.name); // 'user' 替代 'this'
  }

};

let admin = user;
user = null;
admin.sayHi(); // Uncaught TypeError: Cannot read properties of null (reading 'name')
```

上述代码将 `user` 复制给另一个变量 `admin`，并赋 `null` 给 `user`，导致它访问错误的对象。



**"this" 不受限制**

在 JavaScript 中 `this` 可以用于任何函数，即使它不是对象方法。

```js
function sayHi() {
  alert(this);
}

sayHi(); // undefined
```

**⚠️ 注意：** 在没有对象的情况下调用函数，**严格模式下的 `this` 值为 `undefined`**，此时如果尝试访问 `this.name` 将会报错，**在非严格模式下，`this` 值为全局对象**（在浏览器中是 `window`），这是一个历史行为。



**箭头函数没有自己的 "this"**

在箭头函数中引用 `this`，`this` 的值取决于外部 “正常的” 函数。

```js
let user = {
  name: 'CodePencil',
  sayHi() {
    let arrow = () => alert(this.name);
    arrow();
  }
};

user.sayHi(); // CodePencil
```

上述代码中 `arrow()` 使用的 `this` 来自于外部的 `user.sayHi()` 方法。

**⚠️ 注意：** 当不想要一个独立的 `this`，想从外部上下文中获取时它很有用。



## 构造器和操作符 new

常规的 `{...}` 对象字面量允许创建一个对象，但有时候需要创建很多类似的对象，这时可以使用构造函数和 `new` 操作符来实现。



**构造函数**

构造函数的主要目的就是**实现可重用的对象创建代码**。

构造函数本质上是常规函数，不过有以下两个约定：

1. **函数名以大写字母开头**
2. **只能使用 `new` 操作符来执行函数**

```js
function User(name) { // 函数名以大写字母开头
  this.name = name;
  this.isAdmin = false;
}

let user = new User('CodePencil'); // 使用 new 操作符来执行函数

alert(user.name);    // CodePencil
alert(user.isAdmin); // false
```



**构造函数执行步骤**

当一个函数被使用 `new` 操作符执行时，它按照以下步骤：

1. **创建一个新的空对象并分配给 `this`**
2. **函数体执行，通常会修改 `this`，为其添加新的属性或方法**
3. **返回 `this` 的值**

拿前面 `new User(...)` 来说就是做了以下类似的事情：

```js
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

**⚠️ 注意：** 

- 从技术上讲，任何函数（除了箭头函数，它没有自己的 `this`）都可以作为构造函数（构造器），都可以通过 `new` 来运行，并执行上述的算法，“首字母大写”是一个共同的约定，以明确表示一个函数将被使用 `new` 来运行

- 如果有许多行用于创建单个复杂对象的代码，可以将它们封装在一个立即调用的构造函数中，例如下面这样：

  ```js
  // 创建一个函数并立即使用 new 调用它
  let user = new function() {
    this.name = 'CodePencil';
    this.isAdmin = false;
  
    // ……用于用户创建的其他代码
    // 也许是复杂的逻辑和语句
    // 局部变量等
  };
  ```

  **⚠️ 注意：** 上述构造函数不能被再次调用，因为它没有保存在任何地方，只是被创建和调用，**该技巧便于封装构建单个对象的代码，而无需将来重用**。



**构造器模式检测 new.target**

在一个函数的内部，可以通过 `new.target` 属性来检查它是否被使用 `new` 进行调用了。

对于常规调用，它为 `undefined`，但对于使用 `new` 的调用，则等于该函数：

```js
function User() {
  alert(new.target);
}

// 不带 new：
User(); // undefined

// 带 new：
new User(); // function User { ... }
```

可以利用该属性让 `new` 调用和常规调用都做相同的工作，例如下面这样：

```js
function User(name) {
  if(!new.target) {
    return new User(name);
  }

  this.name = name;
}

let user = User('CodePencil'); // 将调用重定向到新用户
alert(user.name); // CodePencil
```

**⚠️ 注意：** 该技巧用在库中可以使语法更加灵活，在调用函数时，无论是否使用了 `new`，程序都能工作，但到处使用它也不是一件好事，因为省略了 `new` 使得很难观察代码中到底是创建对象还是普通调用函数。



**构造器的 return**

通常构造器没有 `return` 语句，它的任务就是将所有必要的东西写入 `this`，并自动转换为结果。

如果构造器中有 `return` 语句，会按照以下规则返回结果：

- **如果 `return` 返回的是一个对象，则返回这个对象，而不是 `this`**
- **如果 `return` 返回的是一个原始类型，则忽略**

例如：

- 通过 `return` 返回一个对象覆盖 `this`

  ```js
  function BigUser() {
  
    this.name = 'CodePencil';
  
    return { name: 'John' };  // <-- 返回这个对象
  }
  
  alert( new BigUser().name );  // John，得到了那个对象
  ```

- `return` 返回为空（或者其它原始类型值也可以）

  ```js
  function SmallUser() {
  
    this.name = 'CodePencil';
  
    return; // <-- 返回 this
  }
  
  alert( new SmallUser().name );  // CodePencil
  ```

**⚠️ 注意：** 如果没有参数，我们可以省略 `new` 后的括号，例如下面这样：

```js
let user = new User; // <-- 没有参数
// 等同于
let user = new User();
```

**但省略括号不被认为是一种 “好风格”，不推荐**。



**构造器中的方法**

构造器不仅可以将属性添加到 `this` 中，还可以添加方法，例如下面这样：

```js
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert('My name is: ' + this.name);
  };
}

let user = new User('CodePencil');

user.sayHi(); // My name is: CodePencil
```



## 可选链

例如当 `user` 对象中 `address` 属性（假设是可选属性）不存在时读取 `address.street` 会发生以下错误：

```js
let user = {};

alert(user.address.street); // Uncaught TypeError: Cannot read properties of undefined (reading 'street')
```

上述代码可以使用 `if` 或者条件运算符 `?` 对该值进行检查，像下面这样：

```js
let user = {};

alert(user.address ? user.address.street : undefined); // undefined（不报错）
```

也可以使用 `&&` 运算符：

```js
let user = {};

alert(user.address && user.address.street); // undefined（不报错）
```

但是上述代码都重复写了好几遍对象属性名 `user.address`，这时可以使用可选链 `?.` 来解决这个问题。



**如果可选链 `?.` 前面的值为 `undefined` 或者 `null`，它会停止运算并返回 `undefined`**。

```js
let user = {};

alert(user.address?.street); // undefined（不报错）
```

上述代码简单来说：

- 如果 `user.address` 存在，则结果与 `user.address.street` 相同
- 否则（当 `user.address` 为 `undefined/null` 时）则返回 `undefined`

这样代码更加简洁明了，不用重复写好几遍属性名。



即使前面代码中 `user` 对象不存在，可以使用以下方法来读取：

```js
let user = null;

alert(user?.address.street); // undefined（不报错）
```

**⚠️ 注意：** 

- `?.` 语法使其前面的值成为可选值，但不会对其后面的起作用，例如在 `user?.address.street` 中，`?.` 允许 `user` 为 `null/undefined`，但是这仅对于 `user` 对象，**更深层次的属性是通过常规方式访问的**

- **不要过度使用可选链**，如果 `user` 对象必须存在，但是 `address` 是可选的，应该写成 `user.address?.street` 而不是 `user?.address?.street`，如果当  `user` 恰巧为 `undefined`，滥用可选链会导致我们看不到错误，导致调试更加困难

- **`?.` 前的变量必须已声明（例如 `let/const/var user` 或作为一个函数参数）**，可选链仅适用于已声明的变量

  ```js
  user?.address; // Uncaught ReferenceError: user is not defined
  ```




**短路效应**

如果 `?.` 左边的部分不存在，就会立即停止运算（“短路效应”）。

```js
let user = null;
let x = 0;

user?.sayHi(x++);
alert(x); // 0，因为代码执行没有到达 sayHi 调用和 x++，所以 x 的值没有增加
```



**其它变体：?.()，?.[]**

可选链 `?.` 不是一个运算符，而是一个特殊的语法结构，**还可以与函数和方括号一起使用**。

```js
let userAdmin = {
  admin() {
    alert('I am admin');
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // 啥都没发生（没有这样的方法）
```

上述代码中，如果 `admin` 方法不存在，则不调用函数，反之会调用函数。



也可以使用 `[]` 而不是点符号 `.` 来访问属性，例如：

```js
let key = 'name';

let user1 = {
  name: 'CodePencil',
};

let user2 = null;

alert(user1?.[key]); // CodePencil
alert(user2?.[key]); // undefined
```

上述代码中如果对象存在则读取属性，反之则不读取属性。



**与 delete 一起使用**

`?.` 还可以与 `delete` 一起使用：

```js
delete user?.name;
```

上述代码中，如果 `user` 存在，则删除 `name` 属性，反之不会删除 `name` 属性。

**⚠️ 注意：`?.` 可以安全地读取或删除属性，但不能写入**，例如下面这样：

```js
let user = null;

user?.name = 'John'; // Uncaught SyntaxError: Invalid left-hand side in assignment
// 等同于：undefined = 'John'
```



## symbol 类型



**symbol**

`symbol` 值表示唯一标识符，可以通过 `Symbol()` 来创建：

```js
let id = Symbol();
```

创建时也可以给 `symbol` 一个描述（也称为 `symbol` 名），便于代码调试：

```js
let id = Symbol('id'); // id 是描述为 'id' 的 symbol
```

**⚠️ 注意：**

- **描述只是一个标签，不影响任何东西，`symbol` 始终确保是唯一**，即使描述相同的 `symbol` 它们也不相等：

  ```js
  let id1 = Symbol('id');
  let id2 = Symbol('id');
  
  alert(id1 == id2); // false
  ```

- **`symbol` 不会被自动转换为字符串**

  ```js
  let id = Symbol('id');
  alert(id); // Uncaught TypeError: Failed to execute 'alert' on 'Window': Cannot convert a Symbol value to a string
  ```

  虽然 JavaScript 中的大多数值都支持字符串的隐式转换，但 `symbol` 比较特殊，这是一种防止混乱的“语言保护”，因为字符串和 `symbol` 有本质上的不同，不应该意外地将它们转换成另一个。

  如果真的需要显示一个 `symbol`，可以调用它的 `.toString()`。

  ```js
  let id = Symbol('id');
  alert(id.toString()); // Symbol(id)
  ```

  或者通过 `symbol.description` 只显示描述（description）。

  ```js
  let id = Symbol('id');
  alert(id.description); // id
  ```



**隐藏属性**

`symbol` 允许创建对象的 “隐藏” 属性，使代码的其它任何部分都不能意外访问或重写这些属性。

假如使用第三方的代码的 `user` 对象，我们想给它添加一些属性：

```js
let user = { // 属于另一个代码
  name: 'CodePencil',
};

let id = Symbol('id');
let user[id] = 1;

alert(user[id]); /// 1
```

上述代码中 `user` 对象是属于另一个代码库的，给它添加字段是不安全的，可能会不小心覆盖原有字段的值，但使用 `symbol` 是安全的，因为 `symbol` 是唯一的，不会覆盖 `user` 对象中的属性。



**对象字面量中的 symbol**

在对象字面量 `{...}` 使用 `symbol`，需要使用方括号 `[]`。

```js
let id = Symbol('id');

let user = {
  name: 'CodePencil',
  [id]: 123,
};
```



**symbol 在 for...in 中会被跳过**

`symbol` 属性不会参与 `for...in` 循环。

```js
let id = Symbol('id');
let user = {
  name: 'CodePencil',
  age: 23,
  [id]: 123
};

for (let key in user) alert(key); // name, age（没有 symbol）

// 使用 symbol 任务直接访问
alert('Direct: ' + user[id]); // Direct: 123
```

**⚠️ 注意： **

- **`Object.keys(user)` 也会忽略 `symbol`**，因为这是一般 “隐藏符号属性” 原则的一部分，避免另一个脚本或者库遍历对象访问到符号属性

- 从技术上讲，`symbol` 不是 100% 隐藏的，可以使用内建方法 ` Object.getOwnPropertySymbols(obj) ` 来获取所有的 `symbol`，也可以使用 `Reflect.ownKeys(obj)` 返回一个对象所有的键（包括 `symbol`）

-  **`Object.assign` 会同时复制字符串和符号属性**

  ```js
  let id = Symbol('id');
  let user = {
    [id]: 123
  };
  
  let clone = Object.assign({}, user);
  
  alert( clone[id] ); // 123
  ```

  这样设计是对的，因为当克隆或者合并一个 `object` 时，通常希望**所有**属性被复制（包括像 `id` 这样的 `symbol`）。



**全局 symbol**

通常所有的 `symbol` 都是不同的，即使它们有相同的名字，如果想要名字相同的 `symbol` 具有相同的实体，可以使用**全局 `symbol` 注册表**，它可以确保每次访问相同名字的 `symbol` 时，返回的都是相同的 `symbol`。

语法：

```js
Symbol.for(key); 
```

表示从全局 `symbol` 注册表中读取 `key` 名字的 `symbol`，如果不存在则创建。

例如：

```js
// 从全局注册表中读取
let id = Symbol.for('id'); // 如果该 symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for('id');

// 相同的 symbol
alert( id === idAgain ); // true
```

全局 `symbol` 注册表中的 `symbol` 被称为**全局 `symbol`**，用于在一个应用程序范围内在代码中可以随处访问 `symbol`。



**Symbol.keyFor**

`Symbol.for(key)` 是按名字返回一个**全局 `symbol`**，也可以通过全局 `symbol` 来返回一个名字。

语法：

```js
Symbol.keyFor(symbol);
```

例如：

```js
// 通过 name 获取 symbol
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

// 通过 symbol 获取 name
alert(Symbol.keyFor(sym));  // name
alert(Symbol.keyFor(sym2)); // id
```

**⚠️ 注意：** `Symbol.keyFor` 内部使用全局 `symbol` 注册表来查找 `symbol` 的键，所以**它不适用于非全局 `symbol`**，如果 `symbol` 不是全局的，它将无法找到它并返回 `undefined`，例如：

```js
let globalSymbol = Symbol.for('name');
let localSymbol = Symbol('name');

alert(Symbol.keyFor(globalSymbol)); // name，全局 symbol
alert(Symbol.keyFor(localSymbol)); // undefined，非全局 symbol

alert(localSymbol.description); // name
```

不过所有 `symbol` 都具有 `description` 属性。

```js
let globalSymbol = Symbol.for('name');
let localSymbol = Symbol('name');

alert(Symbol.keyFor(globalSymbol)); // name，全局 symbol
alert(Symbol.keyFor(localSymbol)); // undefined，非全局

alert(localSymbol.description); // name
```



**系统 Symbol**

JavaScript 内部有很多 ”系统“ `symbol`，可以使用它们来微调对象的各个方面，例如：

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- ……等等

完整的列表可以参考 [ECMAScript® 2026 Language Specification](https://tc39.es/ecma262/#sec-well-known-symbols)。



## 对象原始值转换



**转换规则**

1. **对象转换为布尔值始终为 `true`**，`{}` 也是为 `true`
2. **对象转换为数字发生在对象相减或者应用数学函数时**
3. **对象转换为字符串发生在像 `alert(obj)` 这样的上下文中**



**hint**

对象的类型转换在各种情况下有三种变体，它们都称为 **hint**。

- **`'string'`**

  对象转换到字符串，当**对一个对象执行期望是字符串的操作**时，例如下面的例子：

  ```js
  // 输出
  alert(obj);
  
  // 将对象作为属性键
  anotherObj[obj] = 123;
  ```

- **`'number'`**

  对象转换到数字，**当进行数学运算时**，例如下面的例子：

  ```js
  // 显式转换
  let num = Number(obj);
  
  // 数学运算（除了二元加法）
  let n = +obj; // 一元加法
  let delta = date1 - date2;
  
  // 小于/大于的比较
  let greater = user1 > user2;
  ```

  **⚠️ 注意：** 大多数内建的数学函数也有这种转换。

- **`'default'`**

  在少数情况下发生，**当运算符 “不确定” 期望值的类型时**。

  - 二元加法 `+` 可以用于字符串的连接，也可以用于数字的相加，所以二元加法得到对象类型的参数时，无法确定期望值的类型，所以依据 `'default'` hint 来进行转换

    ```js
    let num = obj1 + obj2; // 二元加法使用 'default' hint
    ```

  - 当对象被用于字符串、数字或 `symbol` 进行 `==` 比较时，也无法确定进行哪种转换，所以也是依据 `'default'` hint 来进行转换

    ```js
    if (user == 1) { ... }; // obj == number 使用 'default' hint
    ```

    **⚠️ 注意：** 虽然 `<` 和 `>` 也可以同时用于字符串和数字，但是它们都使用 `'number'` hint，而不是 `'default'`，这是**历史原因**。



**为了进行转换，JavaScript 尝试查找并调用三个对象的方法**

1. 首先调用 `obj[Symbol.toPrimitive](hint)`，该方法是带有 `symbol` 键 `Symbol.toPrimitive`（系统 symbol）的方法，如果该方法存在的话
2. 否则，如果 hint 是 `'string'`，先调用 `toString` 方法，如果它不存在，则再调用 `valueOf` 方法
3. 否则，如果 hint 是 `'number'` 或 `'default'`，先调用 `valueOf` 方法，如果它不存在，则再调用 `toString` 方法



**Symbol.toPrimitive**

如果 `Symbol.toPrimitive` 方法存在，它会被**用于所有 hint**，不需要其它方法。

```js
// hint 参数的值是 'string'、'number' 或 'default' 中的一个
obj[Symbol.toPrimitive] = function(hint) { 
  // 这里是将此对象转换为原始值的代码
  // 它必须返回一个原始值
}
```

例如：

```js
let user = {
  name: 'CodePencil',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint === 'string' ? `{name: '${this.name}'}` : this.money;
  }
};

// 转换演示：
alert(user); // hint: string -> {name: 'CodePencil'}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

上述代码中根据转换的不同，`user` 变成一个字符串或者一个金额。



**toString/valueOf**

如果没有 `Symbol.toPrimitive` 方法，JavaScript 会尝试寻找 `toString` 和 `valueOf` 方法。

- **对于 `'string'` hint：** 先调用 `toString` 方法，如果它不存在，则调用 `valueOf` 方法（因此，对于字符串转换，优先调用 `toString`）
- **对于 `'number'` 和 `'default'` hint：** 先调用 `valueOf` 方法，如果它不存在，则调用 `toString` 方法（因此，对于数学运算，优先调用 `valueOf` 方法）

**这些方法必须返回一个原始值**。如果 `toString` 或 `valueOf` 返回了一个对象，那么返回值会被忽略（和这里没有方法的时候相同）。

**默认情况下，普通对象具有 `toString` 和 `valueOf` 方法：**

- `toString` 方法返回一个字符串 `'[object Object]'`
- `valueOf` 方法返回对象自身

```js
let user = {name: 'CodePencil'};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

**⚠️ 注意：默认的 `valueOf` 只是为了完整起见，它默认返回对象本身，因此被忽略**，这是历史原因，可以假设它根本就不存在。

例如：

```js
let user = {
  name: 'CodePencil',
  money: 1000,

  // 对于 hint='string'
  toString() {
    return `{name: "${this.name}"}`;
  },

  // 对于 hint='number' 或 'default'
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: 'CodePencil'}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```

如果希望有一个 “全能” 的地方来处理所有原始转换，**可以只实现对象的 `toString` 方法处理所有原始转换**。

```js
let user = {
  name: 'CodePencil',
  toString() {
    return this.name;
  }
};

alert(user); // toString -> CodePencil
alert(user + 500); // toString -> CodePencil500
```

**⚠️ 注意：** `valueOf` 方法不能像 `toString` 方法处理所有原始转换，因为对于 `'string'` hint 来说，会先执行 `toString` 方法返回默认值 `'[object Object]'`，而 `toString` 方法之所以可以处理所有原始转换，主要还是因为 `valueOf` 默认情况下的返回会被忽略，所以就会默认执行 `toStirng`。



**转换可以返回任何原始类型**

没限制 `toString` 一定要返回字符串，或 `Symbol.toPrimitive` 方法是否为 `'number'` hint 时返回数字。

**唯一强制性的事情是：`toStirng`、`valueOf`、`Symbol.toPrimitive` 必须返回一个原始值，而不是对象**。

**⚠️ 注意：** 因为历史原因，如果 `toString` 或 `valueOf` 返回一个对象，则不会出现 error，但是这种值会被忽略（就像这种方法根本不存在），这是因为在 JavaScript 语言发展初期，没有很好的 error 的概念，相反 `Symbol.toPrimitive` 更加严格，必须返回一个原始值，否则就会出现 error。



**进一步的转换**

如果将对象作为参数传递，则会出现两个运算阶段：

1. 对象被转换为原始值（通过前面描述的规则）
2. 如果还需要进一步计算，则生成的原始值会被进一步转换

```js
let obj = {
  toString() {
    return '2';
  }
};

alert(obj * 2); // 4
```

上述代码的转换过程如下：

1. 先将 `obj` 对象转换为原始值 `'2'`
2. 因为 `'2' * 2` 会做进一步转换，变为 `2 * 2`

所以最终的结果为 `4`。



## 原始类型的方法

原始值和对象之间的区别：

**原始值：**

- 是原始类型中的一种值
- 在 JavaScript 中有 7 种原始类型：`string`，`number`，`bigint`，`boolean`，`symbol`，`null` 和 `undefined`

**对象：**

- 能够存储多个值作为属性

- 可以使用大括号 `{}` 创建对象，JavaScript 中还有其他种类的对象，例如函数就是对象

- 还可以把一个函数作为对象的属性

  ```js
  let user = {
    name: 'CodePencil',
    sayHi: function() {
      alert('Hello World!');
    }
  };
  
  user.sayHi(); // Hello World!
  ```

  **⚠️ 注意：** 对象的这些特性（feature）都是有成本的，**对象比原始值 “更重”，需要额外的资源来支持运作**。



**当做对象的原始类型**

在 JavaScript 中为了让原始类型也可以调用方法，并且保持原始类型的简单轻量，会根据以下流程来处理：

1. 原始类型仍然是原始的，存储单个值
2. JavaScript 允许访问字符串，数字，布尔值和 symbol 的方法和属性
3. 为了使第二点起作用，**创建了提供额外功能的特殊 “对象包装器” ，使用后即被销毁**

“对象包装器” 对每种原始类型都是不同的，它们被称为 `String`、`Number`、`Boolean`、`Symbol` 和 `BigInt`，所以它们提供了不同的方法。



例如字符串方法 `str.toUpperCase()` 会返回一个大写字符串的字符串。

```js
let str = 'Hello';

alert( str.toUpperCase() ); // HELLO
```

上述代码实际发生的情况如下：

1. 字符串 `str` 是一个原始值，所以在访问其属性时，会**创建一个包含字符串字面值的特殊对象**，并且具有可用的方法，例如：`toUpperCase()`
2. `toUpperCase` 方法运行并返回一个新的字符串，由 `alert` 显示
3. 销毁第一步创建的特殊对象，保证字符串 `str` 依旧是轻量的

**⚠️ 注意：** 

- JavaScript 引擎高度优化了这个过程，它甚至可能跳过创建额外的对象，但是它仍然必须遵守规范，表现得好像它创建了一样

- **构造器 `String/Number/Boolean` 仅供 JavaScript 内部使用**，由于历史原因，在 JavaScript 中也可以通过 `new Number(1)` 等语法去创建原始类型，但是**不推荐这样使用**，例如：

  ```js
  alert( typeof 0 ); // 'number'
  alert( typeof new Number(0) ); // 'object'
  ```

  因为对象转换为布尔值始终为 `true`，会导致如下结果：

  ```js
  let zero = new Number(0);
  
  if (zero) { // zero 为 true，因为它是一个对象
    alert( 'zero is truthy?!?' );
  }
  ```

  不过可以调用不带 `new` 的 `String/Number/Boolean` 函数将一个值转换为相应的类型。

  ```js
  let num = Number('123'); // 将字符串转成数字
  ```

- **`null`、`undefined` 是例外，它们没有对应的 “对象包装器”，也没有提供任何方法**

  ```js
  alert(null.test); // TypeError: Cannot read properties of null (reading 'test')
  ```

- **无法给原始类型添加属性**

  ```js
  let str = 'Hello';
  str.test = 5;
  alert(str.test);
  ```

  上述代码中

  - 严格模式 `use strict` 下，`str.test = 5` 语句会报错
  - 非严格模式下，`str.test` 的值为 `undefined`

  具体发生的操作如下：

  1. 当访问 `str` 的属性时，一个 “对象包装器” 被创建了
  2. 在严格模式下，向其添加属性会报错
  3. 否则，在非严格模式下，会继续添加属性，然后对象获得了 `test` 属性后，销毁 “对象包装器”

  所以 `alert(str.test)` 没有返回该属性的值。



## 数字类型

在 JavaScript 中，常规数字以 64 位的格式 IEEE-754 存储，也称为 “双精度浮点数”。



**编写数字的更多方法**

- 直接写数字

  ```js
  let billion = 1000000000;
  ```

- 使用 `_` 作为分隔符

  ```js
  let billion = 1_000_000_000;
  ```

  **⚠️ 注意：** 这里 `_` 扮演了语法糖的角色，使数字更具可读性，JavaScript 引擎会忽略数字之间的 `_`。

- 通过 `e` 来缩写数字

  - **`e` 后面的数是正数**

      ```js
      let billion = 1e9; // 等价于 1000000000 或者 1_000_000_000
      ```
    
     `e` 后面的正数表示乘以 `1` 后面跟着给定数量的 `0` 的数字：
    
      ```js
      1e3 === 1 * 1000; // e3 表示 *1000
      ```
    
  - **`e` 后面的数是负数**
  
    ```js
    let mcs = 1e-6; // 等价于 0.000001
    ```
  
    `e` 后面的负数表示除以 `1` 后面跟着给定数量的 `0` 的数字：
  
    ```js
    1e-6 === 1 / 1000000; // e-6 表示 /1000000
    ```



**十六进制、二进制和八进制**

在 JavaScript 中可以通过**在数字前添加前缀**来表示二进制、八进制和十六进制的数字系统。

- 二进制，使用 `0b` 前缀表示

  ```js
  let a = 0b11111111; // 二进制形式的 255
  ```

- 八进制，使用 `0o` 前缀表示

  ```js
  let a = 0o377; // 八进制形式的 255
  ```

- 十六进制，使用 `0x` 前缀表示

  ```js
  let a = 0xff; // 十六进制形式的 255
  ```

**⚠️ 注意：** JavaScript 只有这三种进制支持这种写法，其它进制应该使用函数 `parseInt`。



**toString(base)**

方法 `num.toString(base)` 返回指定 `base` 数字系统中 `num` 的**字符串表示形式**。

```js
let num = 255;

alert( num.toString(16) ); // ff
alert( num.toString(2) ); // 11111111
```

**`base` 的范围支持 `2` 到 `36`，默认不传的情况下为 `10`。**

**⚠️ 注意：**

- `base=36` 是最大进制，数字可以是 `0..9` 或 `A..Z`，所有的拉丁字母都被用于表示数字

- 可以使用 `..` 直接在一个数字上调用一个方法

  ```js
  alert( 123456..toString(36) ); // 2n9c
  ```

  上述代码如果只使用 `123456.toString(36)` 会出现一个 error，因为 JavaScript 语法隐含了第一个点之后的部分为小数部分，再放一个点告诉 JavaScript 小数部分为空，也可以写成下面这种形式

  ```js
  alert( (123456).toString(36) ); // 2n9c
  ```



**舍入**

有几个对数字进行舍入的内建函数：

**`Math.floor`**

向下舍入：`3.1` 变成 `3`，`-1.1` 变成 `-2`。



**`Math.ceil`**

向上舍入：`3.1` 变成 `4`，`-1.1` 变成 `-1`。



**`Math.round`**

向最近的整数舍入：`3.1` 变成 `3`，`3.6` 变成 `4`，中间值 `3.5` 变成 `4`，简单来说就是**四舍五入**。



**`Math.trunc`**

移除小数点后的所有内容而**没有舍入**：`3.1` 变成 `3`，`-1.1` 变成 `-1`。

**⚠️ 注意：** IE 浏览器不支持这个方法。



**将数字舍入小数点后 `n` 位**

例如有一个数字 `1.2345`，想将它舍入到小数点后两位，得到 `1.23`，有以下两种方式可以实现：

1. 乘除法

   先将数字乘以 `100`，再调用舍入函数，然后将其除回。

   ```js
   let num = 1.23456;
   
   alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
   ```

2. 使用 `toFixed(n)` 函数将数字舍入到小数点后 `n` 位，并**以字符串形式返回结果**

   ```js
   let num = 1.23456;
   alert( num.toFixed(2) ); // '1.23'
   ```

   这会向上或向下舍入到最接近的值，类似于 `Math.round`：

   ```js
   let num = 12.36;
   alert( num.toFixed(1) ); // '12.4'
   ```

   **⚠️ 注意：** 如果小数部分比所需要的短，则会在结尾添加零，例如下面这样：

   ```js
   let num = 12.34;
   alert( num.toFixed(5) ); // '12.34000'，在结尾添加了 0，以达到小数点后五位
   ```

   `toFixed(n)` 的结果是一个字符串，可以使用一元加号或 `Number()` 将其转换为数字，例如 `+num.toFixed(5)`。



**不精确的计算**

数字是以 64 位格式 IEEE-754 表示的，其中 52 位用于存储数字，11 位用于存储小数点的位置，而 1 位用于存储符号。

- 如果一个数字很大，可能会溢出 64 位存储，变成一个特殊的数值 `Infinity`

  ```js
  alert(1e500); // Infinity
  ```

- 小数精度损失

  ```js
  alert( 0.1 + 0.2 == 0.3 ); // false
  ```

  上述代码不相等的原因，主要是因为 `0.1 + 0.2` 的结果不是 `0.3`，而是：

  ```js
  alert( 0.1 + 0.2 ); // 0.30000000000000004
  ```

  之所以会出现这个情况主要是因为**一个数字以二进制的形式存储在内存中，但二进制数字系统无法精确存储 `0.1` 和 `0.2`**。

  具体分析如下：

  `0.1` 就是 `1` 除以 `10`，即 `1/10`，在十进制数字系统中，这样的数字很容易表示，但是如果表示 `1/3`，就变成了无限循环小数 `0.33333(3)`，因为在十进制数字系统中，可以保证以 `10` 的整数次幂作为除数能够正常工作，但是以 `3` 作为除数则不能。

  同样在二进制数字系统中，可以保证**以 `2` 的整数次幂作为除数能够正常工作**，但 `0.1` 和 `0.2` 分别表示 `1/10` 和 `1/5`，所以在二进制数字系统中都无法精确存储。

  **IEEE-754 数字格式会将数字舍入到最接近的可能数字来解决此问题**，这些舍入规则通常不允许我们看到“极小的精度损失”，但是它确实存在，例如：

  ```js
  alert( 0.1.toFixed(20) ); // 0.10000000000000000555
  ```

  所以当对两个数字进行求和时，它们的 “精度损失” 会叠加起来，这也就是 `0.1 + 0.2` 的结果不是 `0.3` 主要原因。

  **⚠️ 注意：** 不止是 JavaScript，其它编程语言也存在同样的问题，因为它们基于的是相同的数字格式。

  

  **如何解决精度问题**

  - 使用 `toFixed(n)` 方法对结果进行舍入（**最可靠**）

    ```js
    let sum = 0.1 + 0.2;
    alert( sum.toFixed(2) ); // '0.30'
    ```

    **⚠️ 注意：** 上述代码中 `toFixed(n)` 总是返回一个字符串，它确保小数点后有 2 位数字，所以**要记得将它转换为一个数字**。

  - 使用乘除法

    ```js
    alert( (0.1 * 10 + 0.2 * 10) / 10  ); // 0.3
    alert( (0.28 * 100 + 0.14 * 100) / 100 ); // 0.4200000000000001
    ```

    上述将数字临时乘以 100（或更大的数字），将其转换为整数，进行数学运算，然后再除回。当我们使用整数进行数学运算时，误差会有所减少。

    **⚠️ 注意：** 

    - 乘/除法可以减少误差，但**不能完全消除误差**，所以在开发时尽量避免小数，如果无法避免则在必要时剪掉其 “尾巴” 进行舍入即可

    - JavaScript 中不会对精度损失这类事件触发 error，会尽最大努力使数字符合所需的格式，例如：

      ```js
      // Hello！我是一个会自我增加的数字！
      alert(9999999999999999); // 显示 10000000000000000
      ```

      上述代码中有 64 位来表示该数字，其中 52 位可用于存储数字，但这范围还不够，超过这个范围之后，**尾数太长，低位数字就会被截掉或四舍五入**。

    - JavaScript 中有两个符号不同的零 `0` 和 `-0`，因为在存储时，使用一位来存储符号，因此对于包括零在内的任何数字，可以设置这一位或者不设置，在大多数情况下，这种区别并不明显，因为**运算符将它们视为相同的值**



**isFinite 和 isNaN**

JavaScript 中有两个特殊的数值：

- `Infinity` 和 `-Infinity`，比任何数值都大（小）
- `NaN` 表示一个 error

**⚠️ 注意：** 虽然它们都属于 `number` 类型，但不是 “普通” 数字，需要使用专门用于检查它们的特殊函数。

- `isNaN(value)` 会将参数转换为数字，如果是 `NaN` 则返回 `true`

  ```js
  alert( isNaN(NaN) );   // true
  alert( isNaN('str') ); // true
  alert( isNaN('123') ); // false
  ```

  **⚠️ 注意：** 之所以需要这个函数，是因为 **`NaN` 不等于任何东西，包括它自身**：

  ```js
  alert(NaN === NaN); // false
  ```

- `isFinite(value)` 会将参数转换为数字，如果是常规数字而不是 `NaN`、`Infinity`、`-Infinity`，则返回 `true`

  ```js
  alert( isFinite('15') );  // true
  alert( isFinite('str') ); // false，因为是一个特殊的值：NaN
  alert( isFinite(Infinity) ); // false，因为是一个特殊的值：Infinity
  ```

  `isFinite(value)` 常被用于验证字符串值是否为常规数字 ：

  ```js
  const num = +prompt('Enter a number', '');
  
  // 结果会是 true，除非你输入的是 Infinity、-Infinity 或不是数字
  alert( isFinite(num) );
  ```

  **⚠️ 注意：** 在所有数字函数中，包括 `isFinite`，**空字符串或仅有空格的字符串均被视为 `0`**。



**Object.is**

`Object.is` 是一个特殊的内建方法，它类似于 `===` 一样对值进行比较，但对于两种边缘情况更可靠：

1. **它适用于 `NaN`：`Object.is(NaN, NaN) === true`**
2. **可以区分 `0` 和 `-0` 是不同的：`Object.is(0, -0) === false`**，从技术上讲这是对的，因为在内部，数字的符号位可能会不同，即使其他所有位均为零

**⚠️ 注意：** 在除了以上两种的其它情况下，`Object.is(a, b)` 与 `a === b` 相同。



**parseInt 和 parseFloat**

**使用 `+` 或 `Number()` 进行数字转换是严格的，如果一个值不完全是数字，就会失败转换为  `NaN`**，例如：

```js
alert( +'100px' ); // NaN
```

**⚠️ 注意：** 唯一的例外是字符串开头或结尾的空格，因为它们会被忽略。

但是开发中经常会遇到带有单位的值，例如：`100px`、`50%`，有时候希望从中提取出一个数值，这就是 `parseInt` 和 `parseFloat` 的作用。

它们可以从字符串中 “读取” 数字，直到无法读取为止，如果发生 error，则返回收集到的数字。

```js
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12，只有整数部分被返回了
alert( parseFloat('12.3.4') ); // 12.3，在第二个点出停止了读取
```

**⚠️ 注意：** 当没有数字可读时依旧会返回 `NaN`：

```js
alert( parseInt('a123') ); // NaN，第一个符号停止了读取
```

`parseInt()` 函数具有第二个参数，用来指定数字系统的基数，因此 `parseInt` 还可以解析十六进制数字、二进制数字等的字符串：

```js
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255，没有 0x 仍然有效
alert( parseInt('2n9c', 36) ); // 123456
```



**其它数学函数**

JavaScript 中有一个内建的 Math 对象，它包含了一个小型的数学函数和常量库。

- **`Math.random()`：** 返回一个从 0 到 1 的随机数（不包括 1）

  ```js
  alert( Math.random() ); // 0.1234567894322
  alert( Math.random() ); // 0.5435252343232
  alert( Math.random() ); // ... (任何随机数)
  ```

- **`Math.max(a, b, c...)`：** 从任意数量的参数中返回最大值

  ```js
  alert( Math.max(3, 5, -10, 0, 1) ); // 5
  ```

- **`Math.min(a, b, c...)`：** 从任意数量的参数中返回最小值

  ```js
  alert( Math.min(1, 2) ); // 1
  ```

- **`Math.pow(n, power)`：** 返回 `n` 的给定（power）次幂

  ```js
  alert( Math.pow(2, 10) ); // 2 的 10 次幂 = 1024
  ```

  

## 字符串

在 JavaScript 中，**字符串的内部格式始终是 UTF-16，不依赖于页面编码**，所以字母、数字等常用字符都占用 2 个字节，而非 1 个字节。



**引号种类**

- 单引号

  ```js
  let str = 'Hello World';
  ```

- 双引号

  ```js
  let str = "Hello World";
  ```

- 反引号

  ```js
  let str = `Hello World`;
  ```

其中单引号和双引号基本相同，但反引号允许通过 `${…}` 将任何表达式嵌入到字符串中。

```js
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

反引号也支持字符串换行

```js
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // 客人清单，多行显示
```

**⚠️ 注意：** 单引号和双引号不支持这种直接换行的写法。



**特殊字符**

虽然单引号和双引号不支持直接换行的写法，但可以使用换行符 `\n` 来换行：

```js
let str1 = 'Hello\nWorld'; // 使用换行符创建的两行字符串

// 使用反引号和普通的换行创建的两行字符串
let str2 = `Hello
World`;

alert(str1 === str2); // true
```

还有其它的特殊字符：

| 字符                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| `\n`                                    | 换行                                                         |
| `\r`                                    | 在 Windows 文本文件中，两个字符 `\r\n` 的组合代表一个换行。而在非 Windows 操作系统上，它就是 `\n`。这是历史原因造成的，大多数的 Windows 软件也理解 `\n`。 |
| `\'`, `\"`                              | 引号                                                         |
| `\\`                                    | 反斜线                                                       |
| `\t`                                    | 制表符                                                       |
| `\b`, `\f`, `\v`                        | 退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了。       |
| `\xXX`                                  | 具有给定十六进制 Unicode `XX` 的 Unicode 字符，例如：`'\x7A'` 和 `'z'` 相同。 |
| `\uXXXX`                                | 以 UTF-16 编码的十六进制代码 `XXXX` 的 Unicode 字符，例如 `\u00A9` —— 是版权符号 `©` 的 Unicode。它必须正好是 4 个十六进制数字。 |
| `\u{X…XXXXXX}`（1 到 6 个十六进制字符） | 具有给定 UTF-32 编码的 Unicode 符号。一些罕见的字符用两个 Unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。 |

Unicode 使用示例：

```js
alert('\u00A9'); // ©
alert('\u{20331}'); // 佫，罕见的中国象形文字（长 Unicode）
alert('\u{1F60D}'); // 😍，笑脸符号（另一个长 Unicode）
```

**⚠️ 注意：** 所有的特殊字符都以反斜杠字符 `\` 开始。



**在字符串中插入一个引号**

```js
alert('I\'m CodePencil'); // I'm CodePencil
```

只有与外部闭合引号相同的引号才需要转义，所以更好的做法是改用双引号或者反引号：

```js
alert(`I'm CodePencil`); // I'm CodePencil
alert("I'm CodePencil"); // I'm CodePencil
```

**⚠️ 注意：** 在 JavaScript 中反斜杠 `\` 用于正确读取字符串，然后消失，所以内存中的字符串没有 `\` 。

如果需要显示一个实际的反斜杠 `\`，只需要将其书写两次 `\\`：

```js
alert(`The backslash: \\`); // The backslash: \
```



**字符串长度**

`length` 属性表示字符串的长度。

```js
alert(`My\n`.length); // 3
```

**⚠️ 注意：** 上述代码中 `\n` 是一个单独的 “特殊” 字符，所以长度确实是 `3`。



**访问字符**

要获取字符串在 `pos` 位置的字符，有以下两种方式：

- 使用方括号 `[pos]`

  ```js
  let str = `Hello`;
  alert(str[0]); // H
  ```

- 使用 `charAt(pos)` 方法

  ```js
  let str = `Hello`;
  alert( str.charAt(0) ); // H
  ```

**⚠️ 注意：** 方括号 `[pos]` 是获取字符的一种现代化方法，而 `charAt` 是历史原因才存在的，它们之间区别是：

```js
let str = 'Hello';

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // ''（空字符串）
```

如果没有找到字符，**`[pos]` 会返回 `undefined`，而 `charAt(pos)` 会返回一个空字符串**。

也可以使用 `for..of` 遍历字符：

```js
for (let char of 'Hello') {
  alert(char); // H,e,l,l,o
}
```



**字符串是不可变的**

在 JavaScript 中，字符串是不可更改的。

```js
let str = 'Hi';

str[0] = 'h'; // TypeError: Cannot assign to read only property '0' of string 'Hi'
alert(str[0]); // 无法运行
```

通常的解决方法是创建一个新的字符串，将其分配给 `str`：

```js
let str = 'Hi';

str = 'h' + str[1];
alert(str); // hi
```



**改变大小写**

通过使用 `toLowerCase()` 和 `toUpperCase()` 改变字符串的大小写：

```js
alert( 'CodePencil'.toUpperCase() ); // CODEPENCIL
alert( 'CodePencil'.toLowerCase() ); // codepencil
```



**查找子字符串**

- **str.indexOf(substr, pos)**

  从给定位置 `pos` 开始，在 `str` 中查找 `substr`，如果没有找到，则返回 `-1`，否则返回匹配成功的位置。

  ```js
  let str = 'Widget with id';
  
  alert( str.indexOf('Widget') ); // 0，因为 'Widget' 一开始就被找到
  alert( str.indexOf('widget') ); // -1，没有找到，检索是大小写敏感的
  
  alert( str.indexOf('id') ); // 1，'id' 在位置 1 处（……idget 和 id）
  ```

  第二个参数 `pos` 是可选的，用于从给定的位置开始检索。

  ```js
  let str = 'Widget with id';
  
  alert( str.indexOf('id', 2) ) // 12
  ```

  **⚠️ 注意：** 在 `if` 中使用 `indexOf` 不太方便，因为 `if` 会把 `-1` 当做 `true`，而匹配项的下标 `0` 当做 `false`，例如：

  ```js
  let str = 'Widget with id';
  
  if ( str.indexOf('Widget') ) { // 不正常工作
    alert('We found it'); 
  }
  ```

  所以应该检查 `-1`：

  ```js
  let str = 'Widget with id';
  
  if ( str.indexOf('Widget') !== -1 ) { // 正常工作
    alert('We found it'); 
  }
  ```

  有一个老技巧 `~` 运算符，它将数字转换为 32 位整数（如果存在小数部分，则删除小数部分），然后对其二进制表示形式中的所有位均取反。

  简单来说就是对于 32 位整数，`~n` 等于 `-(n+1)`。

  ```js
  alert( ~2 ); // -3，和 -(2+1) 相同
  alert( ~1 ); // -2，和 -(1+1) 相同
  alert( ~0 ); // -1，和 -(0+1) 相同
  alert( ~-1 ); // 0，和 -(-1+1) 相同
  ```

  所以可以用于 `indexOf` 的检查：

  ```js
  let str = 'Widget with id';
  
  if ( ~str.indexOf('Widget') ) { // 正常工作
    alert('We found it'); 
  }
  ```

  **⚠️ 注意：** 由于 `~` 运算符将大数字截断为 32 位整数，因此存在给出 `0` 的其他数字，最小的数字是 `~4294967295 === 0`，**这种检查只有在字符串没有那么长的情况下才是正确的**，通常只有在旧代码中看到这个技巧，现代推荐使用 `.includes` 方法。

  

- **str.lastIndexOf(substr, pos)**

  该方法与 `str.indexOf(substr, pos)` 用法相同，不过是从字符串的末尾开始搜索到头。
  
  
  
- **str.includes(substr, pos)**

  该方法相比 `indexOf` 更加现代，根据 `str` 中是否包含 `substr` 来返回 `true/false`。

  ```js
  alert( 'Widget with id'.includes('Widget') ); // true
  alert( 'Hello'.includes('Bye') ); // false
  ```

  第二个参数 `pos` 是可选的，设置搜索的起始位置。

  ```js
  alert( 'Widget'.includes('id') ); // true
  alert( 'Widget'.includes('id', 3) ); // false, 从位置 3 开始没有 id
  ```

  

- **str.startsWith(substr, pos)**

  该方法用于检查 `str` 是否以 `substr` 开头，如果是则返回 `true`，反之为 `false`。

  ```js
  alert( 'Widget'.startsWith('Wid') ); // true，'Widget' 以 Wid 开始
  ```

  第二个参数 `pos` 是可选的，设置搜索的起始位置。

  

- **str.endsWith(substr, pos)**

  该方法用于检查 `str` 是否以 `substr` 结尾，如果是则返回 `true`，反之为 `false`。

  ```js
  alert( 'Widget'.endsWith('get') ); // true，'Widget' 以 get 结尾
  ```

  第二个参数 `pos` 是可选的，设置搜索的起始位置。



**获取子字符串**

- **str.slice(start [, end])**

  返回字符串从 `start` 到（但不包括）`end` 的部分。

  ```js
  let str = 'CodePecnil';
  alert( str.slice(0, 5) ); // 'CodeP'，从 0 到 5 的子字符串（不包括 5）
  alert( str.slice(0, 1) ); // 'C'，从 0 到 1，但不包括 1，所以只有在 0 处的字符
  ```

  如果没有第二个参数，`slice` 会一直运行到字符串末尾。

  ```js
  let str = 'CodePencil';
  alert( str.slice(2) ); // 'dePencil'
  ```

  `start/end` 的值也可以是负值，表示起始位置从字符串**结尾计算**：

  ```js
  let str = 'CodePencil';
  
  // 从右边的第四个位置开始，在右边的第一个位置结束
  alert( str.slice(-4, -1) ); // 'nci'
  ```

  **⚠️ 注意：** 如果 `start` 大于 `end`，会返回空字符串：

  ```js
  let str = 'CodePencil';
  alert( str.slice(2, 0) ); // ''
  ```

  

- **str.substring(start [, end])**

  返回字符串从 `start` 到（但不包括）`end` 的部分，功能与 `slice` 类似，但**它允许 `start` 大于 `end`**。

  ```js
  let str = 'CodePecnil';
  alert( str.substring(0, 6) ); // 'CodePe'
  alert( str.substring(6, 0) ); // 'CodePe'
  ```

  **⚠️ 注意：** `start/end` 的值不支持负值，它们被视为 `0`。

  

- **str.substr(start [, length])**

  返回字符串从 `start` 开始的给定 `length` 的部分。

  ```js
  let str = 'CodePecnil';
  alert( str.substr(0, 6) ); // 'CodePe'
  ```

  第一个参数可以是负值，从字符串结尾开始计算。

  ```js
  let str = 'CodePecnil';
  alert( str.substr(-2, 2) ); // 'il'
  ```

  **⚠️ 注意：`substr` 已经被弃用，不推荐使用，推荐优先使用 `slice`**。



**字符串比较**

在 JavaScript 中，所有字符串都使用 UTF-16 编码，每个字符都有对应的数字代码，**字符通过数字代码进行比较**，有如下方法可以获取数字代码表示的字符以及字符所对应的数字代码。

- **str.codePointAt(pos)**

  返回在 `pos` 位置的字符对应的数字代码。

  ```js
  // 不同的字母有不同的代码
  alert( 'z'.codePointAt(0) ); // 122
  alert( 'Z'.codePointAt(0) ); // 90
  ```

  

- **String.fromCodePoint(code)**

  通过数字代码创建对应的字符。

  ```js
  alert( String.fromCodePoint(90) ); // Z
  ```

  也可以传入 `\u` 后跟十六进制代码来创建字符。

  ```js
  // 在十六进制系统中 90 为 5a
  alert('\u005a'); // Z
  ```

  
  
- **str.localeCompare(str2)**

  不同语言的字母都不相同，所以浏览器需要知道要比较的语言，现代浏览器都支持国际化标准 ECMA-402。

  它提供了一种特殊的方法来比较不同语言的字符串，遵循对应语言的规则。

  调用 `str.localeCompare(str2)` 会根据语言规则返回一个整数：

  - 如果 `str` 排在 `str2` 前面，则返回负数。
  - 如果 `str` 排在 `str2` 后面，则返回正数。
  - 如果它们在相同位置，则返回 `0`。

  ```js
  alert( 'Österreich'.localeCompare('Zealand') ); // -1
  ```

  ``str.localeCompare(str2)`` 还支持两个额外的参数，第二个参数用于指定语言（默认语言从环境中读取），第三个参数用于设置区分大小写或者增加附加规则（例如可以添加将 `'a'` 和 `'á'` 视作相同字符的规则）。

  **⚠️ 注意：** IE10 浏览器需哟安装额外的库 [Intl.JS](https://github.com/andyearnshaw/Intl.js/) 才能支持这个方法。



**代理对**

在 JavaScript 中所有常用的字符都是一个 2 字节的代码，但 2 字节只允许 65536 个组合，对于显示一些符号是不够的，所以**稀有的 “符号” 都使用 “代理对” （一对 2 字节的符号）进行编码，这些符号的长度是 `2`**。

```js
alert( '𝒳'.length ); // 2，大写数学符号 X
alert( '😂'.length ); // 2，笑哭表情
alert( '𩷶'.length ); // 2，罕见的中国象形文字
```

**⚠️ 注意：** 上述代码中每个字符串都只有一个符号，但 `length` 却显示为 `2`，是因为 JavaScript 早期版本因历史原因未能正确处理代理对，导致操作 Unicode 扩展字符时会出现错误。

导致获取字符非常麻烦：

```js
alert( '𝒳'[0] ); // 代理对的一部分
alert( '𝒳'[1] ); // 代理对的另一部分
```

从技术角度来说，代理对也是可以通过代码检测到的：如果一个字符的代码在 `0xd800..0xdbff` 范围内，那么它是代理对的第一部分，下一个字符（第二部分）必须在 `0xdc00..0xdfff` 范围中，这些范围是按照标准专门为代理对保留的。

**只有 `String.fromCodePoint` 和 `str.codePointAt` 等方法可以正确处理代理对，但这些方法都是后来出现的，旧版浏览器不支持**，在此之前只有 `String.fromCharCode` 和 `str.charCodeAt`，功能与前者相同，但是无法正确处理代理对，例如：

```js
// 可以正确处理代理对
alert( '😂'.codePointAt(0) ); // 128514
alert( String.fromCodePoint(128514) ); // 😂

// 无法正确处理代理对
alert( '😂'.charCodeAt(0) ); // 55357
alert( String.fromCharCode(55357) ); // '\uD83D'
```



**变音符号和规范化**

在许多语言中，都有一些由基本字符组成的符号，在其上方/下方有一个标记，例如，字母 `a` 可以是 `àáâäãåā` 的基本字符，**最常见的 “复合” 字符在 UTF-16 表中都有自己的代码，但不是全部，因为可能的组合太多**。

**为了支持任意组合，UTF-16 支持多个 Unicode 字符：基本字符紧跟 “装饰” 它的一个或多个 “标记” 字符**。

例如：在 `S` 后跟一个特殊的 “dot above” 字符（代码 `\u0307`），显示为 Ṡ。

```js
alert('S\u0307'); // Ṡ
```

可以在字母上方（或下方）添加额外的标记，例如：再追加一个字符 “dot below”（代码 `\u0323`）：

```js
alert('S\u0307\u0323'); // Ṩ
```

上述写法虽然很灵活，但是存在一个问题：**两个视觉上看起来相同的字符，可以用不同的 Unicode 组合表示**。

```js
const s1 = 'S\u0307\u0323'; // Ṩ，S + 上点 + 下点
const s2 = 'S\u0323\u0307'; // Ṩ，S + 下点 + 上点

alert( s1 === s2 ); // false，只是看起来相同
```

为了解决这问题，有一个 “Unicode 规范化” 算法，它将每个字符串都转化成单个 “通用” 格式，通过 `str.normalize()` 实现。

```js
const s1 = 'S\u0307\u0323'; // Ṩ，S + 上点 + 下点
const s2 = 'S\u0323\u0307'; // Ṩ，S + 下点 + 上点

alert( s1.normalize() === s2.normalize() ); // true
```

`normalize()` 实际上将一个 3 个字符组成的序列合并为一个：`\u1e68`，并且可以正确的返回字符串的 `length`。

```js
alert('S\u0307\u0323'.length); // 3，不正确
alert('S\u0307\u0323'.normalize().length); // 1，正确
alert('S\u0307\u0323'.normalize() === '\u1e68'); // true
```

**⚠️ 注意：** 并且任何 “复合” 字符都可以使用 `normalize()` 返回对应的代码，上述代码因为符号 `Ṩ` 是 “常用” 的，所以 UTF-16 创建者把它包含在主表中并给它了对应的代码，具体的规则和变体可以参考 [Unicode 规范化形式](https://www.unicode.org/reports/tr15/)。



## 数组

数组用于存储**有序集合**，里面的元素都是按顺序排列。



**声明**

创建一个空数组有以下两种方式：

```js
let arr = new Array();
let arr = [];
```

**⚠️ 注意：** 绝大多数情况都使用第二种方式，可以在方括号中添加初始元素。

```js
let fruits = ['Apple', 'Orange', 'Plum'];
```

数组中的元素从 `0` 开始编号，可以通过方括号中的数字获取元素：

```js
let fruits = ['Apple', 'Orange', 'Plum'];

alert( fruits[0] ); // 'Apple'
alert( fruits[1] ); // 'Orange'
alert( fruits[2] ); // 'Plum'
```

除了获取元素，也可以用来替换对应位置的元素：

```js
fruits[1] = 'Lemon'; // 此时变成了 ['Apple', 'Lemon', 'Plum']
```

也可以再添加一个元素：

```js
fruits[3] = 'Pear'; // 此时变成了 ['Apple', 'Lemon', 'Plum', 'Pear']
```

`length` 属性的值是数组中元素的总个数：

```js
let fruits = ['Apple', 'Orange', 'Plum'];

alert(fruits.length); // 3
```

可以使用 `alert` 来显示整个数组。

```js
let fruits = ['Apple', 'Orange', 'Plum'];

alert(fruits); // Apple,Orange,Plum
```

数组跟对象一样，内部可以存储任何类型的元素。

```js
let arr = [ 'Apple', { name: 'CodePencil' }, true, function() { alert('hello'); } ];
```

**⚠️ 注意：** 和对象属性一样，**推荐数组中每个元素以逗号结尾**，便于移动、插入和移除项。

```js
let fruits = [
  'Apple', 
  'Orange', 
  'Plum',
];
```



**使用 at 获取数组中最后一个元素**

我们可以显式计算最后一个元素的索引来获取数组中最后一个元素：

```js
let fruits = ['Apple', 'Orange', 'Plum'];
alert( fruits[fruits.length - 1] ); // Plum
```

但是这样的写法有点麻烦，变量名重复写了两次，可以使用更简短的语法：

```js
let fruits = ['Apple', 'Orange', 'Plum'];
alert( fruits.at(-1) ); // Plum
```

`arr.at(i)` 简单来说：

- 如果 `i >= 0`，则与 `arr[i]` 完全相同
- 如果 `i < 0`，它则从数组的尾部向前数，例如：`-1` 表示倒数第一个元素



**pop/push, shift/unshift 方法**

**队列（Queue）**是最常见的使用数组的方法之一。

![image-20250620080339207](images/image-20250620080339207.png)

- `push` 在队列的末尾添加一个元素
- `shift` 取出队列首端的一个元素，整个队列往前移，使原先排第二的元素现在排在了第一

这两种操作数组都支持，对于队列来说，最先放进去的内容是最先接收，叫做 **FIFO（First-In-First-Out），即先进先出法则**。



**堆栈（Stack）**也是常见的使用数组的方法之一。

![image-20250620083412788](images/image-20250620083412788.png)

- `push` 在末端添加一个元素
- `pop` 从末端取出一个元素

所以新元素的添加和取出都是从 **“末端”** 开始的，对于栈来说，最后放进去的内容是最先接收的，叫做 **LIFO（Last-In-First-Out），即后进先出法则**。

在 JavaScript 中，数组既可以用作队列，也可以用作栈，在计算机科学中，允许这样的操作的数据结构被称为 **双端队列（Deque）**。



**作用于数组末端的方法：**

- **`pop`**

  取出并返回数组最后一个元素。

  ```js
  let fruits = ['Apple', 'Orange', 'Plum'];
  alert( fruits.pop() ); // Plum
  ```

  **⚠️ 注意：** `fruits.pop()` 与 `fruits.at(-1)` 不同，虽然它们都返回数组最后一个元素，但前者同时会删除数组的最后一个元素，进而修改了原数组。

- **`push`**

  在数组的末端添加一个元素。

  ```js
  let fruits = ['Apple', 'Orange'];
  fruits.push('Lemon');
  alert(fruits); // Apple,Orange, Lemon
  ```

  **⚠️ 注意：** `fruits.push(...)` 与 `fruits[fruits.length] = ...` 是一样的。



**作用于数组首端的方法：**

- **`shift`**

  取出数组第一个元素并返回它。

  ```js
  let fruits = ['Apple', 'Orange', 'Plum'];
  alert( fruits.shift() ); // Apple
  alert(fruits); // Orange,Plum
  ```

- **`unshift`**

  在数组的首端添加元素。

  ```js
  let fruits = ['Orange', 'Plum'];
  fruits.unshift('Apple');
  alert(fruits); // Apple,Orange,Plum
  ```




**`push` 和 `unshift` 方法都可以一次添加多个元素：**

```js
let fruits = ['Apple'];

fruits.push('Orange', 'Peach');
fruits.unshift('Pineapple', 'Lemon');

alert(fruits); // Pineapple,Lemon,Apple,Orange,Peach
```



**内部**

数组是一种特殊的对象，使用方括号来访问属性 `arr[0]` 是来自于对象的语法，本质上与 `obj[key]` 相同。

数组扩展了对象，特供了特殊的方法来处理有序的数据集合以及 `length` 属性。

数组跟对象一样都是通过引用来复制的：

```js
let fruits = ['Apple'];

let arr = fruits; // 通过引用复制 (两个变量引用的是相同的数组)
alert(arr === fruits); // true
arr.push('Pear'); // 通过引用修改数组

alert(fruits); // Apple,Pear
```

**⚠️ 注意：** 

- 数组真正特殊的是它内部的实现，JavaScript 引擎尝试把数组内的元素一个接一个地存储在连续的内存区域，还有一些其它的优化，使得数组运行得非常快

- 可以不像 “有序集合” 那样使用数组，而是像常规对象那样使用数组，是这样使用会导致对数组的优化不生效了，例如下面这样：

  ```js
  let fruits = []; // 创建一个数组
  
  fruits[99999] = 5; // 分配索引远大于数组长度的属性
  
  fruits.age = 25; // 创建一个具有任意名称的属性
  ```

  上述操作是可以的，因为数组是基于对象，可以添加任何属性，但是 JavaScript 引擎会发现像使用常规对象一样使用数组，那么针对数组的优化就不再适用了，然后对应的优化就会被关闭。

  常见的误用数组的方式：

  - **添加一个非数字的属性**，比如 `arr.test = 5`
  - **制造空洞**，比如：添加 `arr[0]`，然后添加 `arr[1000]` (它们中间什么都没有)
  - **以倒序填充数组**，比如 `arr[1000]`，`arr[999]` 等等



**性能**

`push/pop` 方法运行的比较快，而 `shift/unshift` 比较慢。

![image-20250621102402447](images/image-20250621102402447.png)

- `shift` 操作：
  1. 移除索引为 `0` 的元素
  2. 把所有的元素向左移动，把索引 `1` 改成 `0`，`2` 改成 `1` 以此类推，对其重新编号
  3. 更新 `length` 属性
- `unshift` 操作：
  1. 把所有的元素向右移动，把索引 `0` 改成 `1`，`1` 改成 `2` 以此类推，对其重新编号
  2. 再插入元素到索引 `0` 的位置
  3. 更新 `length` 属性

**数组里的元素越多，移动它们就要花越多的时间，也就意味着越多的内存操作，**所以 `shift/unshift` 比较慢。

而 **`push/pop` 不需要移动任何元素**，只需要再数组末端插入或者移除元素，并更新 `length` 属性就可以了，所以 `push/pop` 比较快。



**循环**

遍历数组有以下几种方式：

- **`for` 循环**

  ```js
  let arr = ['Apple', 'Orange', 'Pear'];
  
  for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
  }
  ```

  

- **`for..of`**

  ```js
  let arr = ['Apple', 'Orange', 'Pear'];
  
  for (let fruit of fruits) {
    alert(fruit);
  }
  ```

  **⚠️ 注意：** 

  - `for..of` 不能获取当前元素索引值，只能获取元素值

  - 数组也是对象，所以也可以使用 `for..in` 来遍历数组，**但是不推荐**

    ```js
    let arr = ['Apple', 'Orange', 'Pear'];
    
    for (let key in arr) {
      alert(arr[key]);
    }
    ```

    使用 `for..in` 遍历数组存在以下几个问题：

    1. `for..in` 循环会遍历**所有属性**，不仅仅是数字属性，在浏览器和其它环境中有一种称为 **“类数组”** 的对象，它们**看似是数组（有 `length` 和索引属性）**，但是也可能有其它的非数字的属性和方法，`for..in` 会把它们全部列出来
    2. **`for..in` 只适用于普通对象，并做了对应的优化，但是优化不适用于数组**，因此速度要慢 10~100 倍

    所以通常来说，**不应该用 `for..in` 来处理数组**。



**关于 length**

当修改数组的时候，`length` 属性会自动更新，但它实际上**不是数组里元素的个数，而是数组里最大的数字索引值加一**。

```js
let fruits = [];
fruits[123] = 'Apple';

alert(fruits.length); // 124
```

上述代码中数组中只有一个元素，但这个元素的索引值很大，所以数组的 `length` 也会很大。

**`length` 属性是可写的**，例如：

```js
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // 截断到只剩 2 个元素
alert(arr); // 1,2

arr.length = 5; // 又把 length 加回来
alert(arr[3]); // undefined：被截断的那些数值并没有回来
```

**所以清空数组最简单的方法是：`arr.length = 0;`**



**new Array()**

`new Array()` 是创建数组的另一种语法：

```js
let arr = new Array('Apple', 'Orange', 'Pear');
```

**但它很少被使用，因为使用方括号 `[]` 更简洁。**

**⚠️ 注意：** 使用 `new Array()` 语法还存在一个棘手的特性，如果使用单个参数（即数字）调用 `new Array`，那么它会创建一个**指定了长度，却没有任何项**的数组，例如下面这样：

```js
const arr = new Array(2); // 会创建一个 [2] 的数组吗？

alert(arr[0]); // undefined！没有元素。

alert(arr.length); // 2
```

所以通常创建数组还是使用方括号，除非就是想创建一个指定长度的空数组。



**多维数组**

数组里的项也可以是数组。

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert(matrix[1][1]); // 5
```



**toString**

**数组有自己的 `toString` 方法的实现**，会返回以逗号隔开的元素列表。

```js
let arr = [1, 2, 3];

alert(arr); // 1,2,3
alert(String(arr) === '1,2,3'); // true
```

当参与运算时进行类型转换：

```js
alert([] + 1);    // '1'
alert([1] + 1);   // '11'
alert([1,2] + 1); // '1,21'
```

**⚠️ 注意：** 数组没有 `Symbol.toPrimitive`，也没有 `valueOf`，**只能执行 `toString` 进行转换**。



**不要使用 == 比较数组**

在 JavaScript 中不应该使用 `==` 运算符比较数组，该运算符不会对数组进行特殊处理，它会像处理任意对象那样处理数组。

```js
alert([] == []); // false
alert([0] == [0]); // false
```

上述代码中这些数组是不同的对象，所以不相等，**`==` 运算符不会进行逐项比较**。

但与原始类型比较可能会产生奇怪的结果：

```js
alert(0 == []); // true
alert('0' == []); // false
```

上述代码转换过程如下：

1. 数组 `[]` 先是被转换为原始类型，但因为数组只能执行 `toString` 进行转换，所以 `[]` 转换为了 `''`

   ```js
   alert(0 == '');
   alert('0' == '');
   ```

2. 然后再是原始类型之间的比较

   ```js
   alert(0 == 0); // true
   alert('0' == ''); // false
   ```

所以对数组进行比较时，**最好不要使用 `==` 运算符**，而是通过循环或者迭代方法逐项比较它们。 



## 数组方法

除了前面的 `push`、`pop`、`shift`、`unshift` 方法，数组还有其它几种方法。



**splice**

`splice` 是处理数组的瑞士军刀，可以删除、替换和插入元素。

语法：

```js
arr.splice(start[, deleteCount, elem1, ..., elemN]);
```

从索引 `start` 开始修改 `arr`：删除 `deleteCount` 个元素并在当前位置插入 `elem1, ..., elemN`，**最后返回被删除的元素所组成的数组**。



- **删除元素**

  ```js
  let arr = ['I', 'study', 'JavaScript'];
  
  arr.splice(1, 1); // 从索引 1 开始删除 1 个元素，也就是 'study'
  
  alert(arr); // I,JavaScript
  ```

  **⚠️ 注意：**

  - 数组也是对象，也可以使用 `delete` 来删除数组中的元素，但是这样操作**不会移动剩下元素的位置并释放占据的位置**，应当使用数组的方法来操作数组

    ```js
    let arr = ['I', 'study', 'JavaScript'];
    
    delete arr[1]; // 删除 'study'
    
    alert(arr[1]); // undefined
    
    alert(arr.length); // 3
    ```

    

  - 当 `splice` 中只填写了 `start` 参数时，**将删除从索引 `start` 开始的所有数组项**

    ```js
    let arr = ['I', 'study', 'JavaScript'];
    
    arr.splice(1);
    
    alert(arr); // I
    ```

    

- **替换元素**

  ```js
  let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
  
  // 删除数组的前三项，并使用其它内容代替它们
  arr.splice(0, 3, "Let's", 'dance');
  
  alert(arr); // Let's,dance,right,now
  ```



- **插入元素**

  将 `deleteCount` 设置为 `0`，`splice` 方法就能够**插入元素而不用删除任何元素**

  ```js
  let arr = ['I', 'study', 'JavaScript'];
  
  arr.splice(2, 0, 'complex', 'language');
  
  alert(arr); // I,study,complex,language,JavaScript
  ```

  

**slice**

与字符串的 `str.slice` 方法类似，用于将从索引 `start` 到 `end`（不包括 `end`）的数组项复制到一个新的数组。

语法：

```js
arr.slice([start], [end]);
```

**`start` 和 `end` 都可以是负数**，在这种情况下，从末尾计算索引。

例如：

```js
let arr = ['t', 'e', 's', 't'];

alert( arr.slice(1, 3) ); // e,s

alert( arr.slice(-2) ); // s,t
```

**⚠️ 注意：** 可以不带参数地调用它，`arr.slice()` 会创建一个 `arr` 的副本，通常用于获取数组的副本。



**concat**

创建一个新数组，其中包含来自于其他数组和其他项的值。

语法：

```js
arr.concat(arg1, arg2...);
```

**它接受任意数量的参数，数组或值都可以**，如果参数 `argN` 是一个数组，那么其中的所有元素都会被复制，否则将复制参数本身。

例如：

```js
let arr = [1, 2];

// 从 arr 和 [3,4] 创建一个新数组
alert( arr.concat([3, 4]) ); // 1,2,3,4

// 从 arr、[3,4] 和 [5,6] 创建一个新数组
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// 从 arr、[3,4]、5 和 6 创建一个新数组
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

**⚠️ 注意：** 

- 通常它只复制数组中的元素，对于其它对象，即使看起来像数组一样，但仍然会被作为一个整体添加

  ```js
  let arr = [1, 2];
  
  let arrayLike = {
    0: 'something',
    length: 1,
  };
  
  alert( arr.concat(arrayLike) ); // 1,2,[object Object]
  ```

  

- 如果类数组对象具有 `Symbol.isConcatSpreadable` 属性，那么它就会被 `concat` 当作一个数组来处理

  ```js
  let arr = [1, 2];
  
  let arrayLike = {
    0: 'something',
    1: 'else',
    length: 1,
    [Symbol.isConcatSpreadable]: true,
  };
  
  alert( arr.concat(arrayLike) ); // 1,2,something,else
  ```



**forEach**

`arr.forEach` 方法允许为数组的每个元素都运行一个函数。

语法：

```js
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

`item` 是当前项，`index` 是当前项的下标，`array` 是原数组。

例如：

```js
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

// 输出结果依次为：
// Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
// Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
// Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
```

**⚠️ 注意：** 该函数的结果如果有返回，会被抛弃和忽略。



**indexOf / lastIndexOf 和 includes**

这些方法与字符串的方法相同，不过这里是针对数组项而非字符进行操作。

- **`arr.indexOf(item, from)`：** 从索引 `from` 开始搜索 `item`，如果找到则返回索引，否则返回 `-1`
- **`arr.lastIndexOf(item, from)`：** 与 `indexof` 相同，但从右向左查找
- **`arr.includes(item, from)`：** 从索引 `from` 开始搜索 `item`，如果找到则返回 `true`，否则返回 `false`

例如：

```js
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true
```

**⚠️ 注意：** 

- `indexOf` 和 `includes` 使用严格相等 `===` 进行比较

- **方法 `includes` 可以正确处理 `NaN`**

  ```js
  const arr = [NaN];
  alert( arr.indexOf(NaN) ); // -1（错，应该为 0）
  alert( arr.includes(NaN) );// true（正确）
  ```

  因为 `includes` 是在比较晚的时候才被添加到 JavaScript 中的，并且在内部使用了更新了的比较算法



**findIndex / findLastIndex 和 find**

这三个方法通常用于对象数组（即数组中的元素都是对象）。

- **`findIndex`**

  用于寻找具有特定条件的**对象的索引，而不是元素本身**，如果没有找到则返回 `-1`。

  语法：

  ```js
  let result = arr.findIndex(function(item, index, array) {
    // 如果返回 true，则返回 index 并停止迭代
    // 对于假值（falsy）的情况，则返回 -1
  });
  ```

  依次对数组中的每个元素调用该函数：

  - `item` 是元素
  - `index` 是它的索引
  - `array` 是数组本身

  例如：

  ```js
  let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'},
  ];
  
  alert( users.findIndex(user => user.name === 'John') ); // 0
  alert( users.findIndex(user => user.name === 'CodePencil') ); // -1
  ```

  

- **`findLastIndex`**

  与 `findIndex` 语法相同，**但从右向左搜索**。

  ```js
  let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'John'},
  ];
  
  alert( users.findIndex(user => user.name === 'John') ); // 0
  alert( users.findLastIndex(user => user.name === 'John') ); // 3
  ```



- **`find`**

  与 `findIndex` 语法相同，但是它返回的**不是元素索引，而是元素本身**，如果没有找到则返回 `undefined`。

  ```js
  let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'},
  ];
  
  let user = users.find(item => item.id === 1);
  
  alert(user.name); // John
  alert( users.find(item => item.id === 4) ); // undefined
  ```

  
  
- **`filter`**

  `filter` 返回所有匹配元素组成的数组。

  语法：

  ```js
  let results = arr.filter(function(item, index, array) {
    // 如果 true item 被 push 到 results，迭代继续
    // 如果什么都没找到，则返回空数组
  });
  ```

  例如：

  ```js
  let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'},
  ];
  
  // 返回前两个用户的数组
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2
  ```



- **`map`**

  `map` 对数组的每个元素都调用函数，并返回结果数组。

  语法：

  ```js
  let result = arr.map(function(item, index, array) {
    // 返回新值而不是当前元素
  });
  ```

  例如：

  ```js
  let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
  
  alert(lengths); // 5,7,6
  ```

  

- **`sort`**

  `arr.sort` 方法对数组进行**原位（in-place）**排序（指修改原数组，而非生成一个新数组），更改元素的顺序。

  语法：

  ```js
  let arr = [15, 1, 2];
  
  // 该方法重新排列 arr 的内容
  arr.sort();
  
  alert(arr);  // 1,15,2
  ```

  **⚠️ 注意：**

  - **`arr.sort` 方法还会返回排序后的数组**，但是在平常开发中返回值通常不会去使用，因为已经修改了原数组本身

  - 上述代码的排序结果不对，是因为 `arr.sort` 中的元素**默认按字符串进行排序**，如果要使用自己的排序顺序，需要提供一个函数作为 `arr.sort` 的参数

    ```js
    function compareNumeric(a, b) {
      if (a > b) return 1;   // 如果第一个值比第二个值大
      if (a === b) return 0; // 如果两个值相等
      if (a < b) return -1;  // 如果第一个值比第二个值小
    }
    
    let arr = [1, 15, 2];
    
    arr.sort(compareNumeric);
    
    alert(arr); // 1,2,15
    ```

    上述代码中 `arr.sort` 内部的算法会将一个元素与多个其他元素进行比较，会尝试尽可能少的比较。

    **⚠️ 注意：**

    - 比较函数可以返回任何数字，**返回一个正数表示 `a` 应该排在 `b` 后面，返回一个负数表示 `a` 应该排在 `b` 前面，返回 `0` 表示顺序不变**，所以前面的代码可以简化为：

      ```js
      let arr = [1, 15, 2];
      
      arr.sort(function(a, b) { 
        return a - b;
      });
      
      alert(arr); // 1,2,15
      ```

      代码中的 `a` 和 `b` 表示待比较的两个元素，它们不一定是原数组中**相邻**或**有固定位置的**元素，在排序过程中具体选择哪两个元素进行比较取决于浏览器内部的排序算法。

      

    - 对于不同地区的字母，最好使用 `str.localeCompare` 正确地对字母进行排序

      例如用德语对几个国家/地区进行排序：

      ```js
      let countries = ['Österreich', 'Andorra', 'Vietnam'];
      
      alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich（错的）
      alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam（对的！）
      ```

      

- **`reverse`**

  `arr.reverse` 方法对数组进行**原位（in-place）**颠倒，也会返回颠倒后的数组 `arr`。

  ```js
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();
  
  alert(arr); // 5,4,3,2,1
  ```

  

- **`split`**

  `str.split` 通过给定的分隔符 `delim` 将字符串分割成一个数组。

  ```js
  let names = 'Bilbo, Gandalf, Nazgul';
  let arr = names.split(', '); // 此时 arr = ['Bilbo', 'Gandalf', 'Nazgul']
  ```

  `split` 还支持可选的第二个数字参数，用于限制数组的长度，如果提供了，额外的元素会被忽略。

  ```js
  let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
  alert(arr); // Bilbo, Gandalf
  ```

  空参数的 `split` 可以将字符串拆分为字母数组：

  ```js
  let str = 'test';
  alert( str.split('') ); // t,e,s,t
  ```

  

- **`join`**

  `arr.join(glue)` 与 `split` 相反，用于将数组中的每一项通过给定的 `glue` 粘合为一个字符串。

  ```js
  let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
  let str = arr.join(';'); // 使用分号 ; 将数组粘合成字符串
  alert(str); // Bilbo;Gandalf;Nazgul
  ```

  

- **`reduce`**

  用于根据数组计算单个值。

  语法：

  ```js
  let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);
  ```

  该函数按顺序应用于每个数组元素，并将返回结果 “搬运（carry on）” 到下一个调用。

  参数：

  - `accumulator` 是上一个函数调用的结果，第一次等于 `initial`（如果提供了 `initial` 的话）
  - `item` 当前的数组元素
  - `index` 当前索引
  - `arr` 数组本身

  简单来说第一个参数就是一个累加器，用于存储所有先前执行的结果，最后它成为 `reduce` 的结果。

  例如：

  ```js
  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);
  
  alert(result); // 15
  ```

  上述代码具体的执行过程如下：

  |             | `sum` | `current` | `result` |
  | :---------- | :---- | :-------- | -------- |
  | 第 1 次调用 | `0`   | `1`       | `1`      |
  | 第 2 次调用 | `1`   | `2`       | `3`      |
  | 第 3 次调用 | `3`   | `3`       | `6`      |
  | 第 4 次调用 | `6`   | `4`       | `10`     |
  | 第 5 次调用 | `10`  | `5`       | `15`     |

  也可以省略初始值：

  ```js
  let arr = [1, 2, 3, 4, 5];
  
  // 删除 reduce 的初始值（没有 0）
  let result = arr.reduce((sum, current) => sum + current);
  
  alert( result ); // 15
  ```

  结果跟前面的代码一样，因为**如果没有初始值，那么 `reduce` 会将数组的第一个元素作为初始值，并从第二个元素开始迭代**。

  它的计算过程如下：

  |             | `sum` | `current` | `result` |
  | :---------- | :---- | :-------- | -------- |
  | 第 1 次调用 | `1`   | `2`       | `3`      |
  | 第 2 次调用 | `3`   | `3`       | `6`      |
  | 第 3 次调用 | `6`   | `4`       | `10`     |
  | 第 4 次调用 | `10`  | `5`       | `15`     |

  **⚠️ 注意：** 如果数组为空，那么在没有初始值的情况下调用 `reduce` 会导致错误。

  ```js
  let arr = [];
  
  // 如果初始值存在，则 reduce 将为空 arr 返回它（即这个初始值）。
  arr.reduce((sum, current) => sum + current); // TypeError: Reduce of empty array with no initial value
  ```

  **所以建议始终指定初始值。**

  

- **`reduceRight`**

  与 `arr.reduce` 相同，不过遍历方向是从右到左。



**Array.isArray**

因为数组是基于对象的，在 JavaScript 中不是单独的数据类型，所以**只靠 `typeof` 无法区分普通对象和数组**：

```js
alert(typeof {}); // object
alert(typeof []); // object（相同）
```

所以有一种特殊的方法来判断：`Array.isArray(value)`，如果 `value` 是一个数组，则返回 `true`，反之返回 `false`。

```js
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
```



**大多数方法都支持 thisArg**

前面几乎所有调用函数的数组方法，如：`find`、`filter`、`map`（除了 `sort`）等都支持一个可选的附加参数 `thisArg`。

完整的语法如下：

```js
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg 是可选的最后一个参数
```

**`thisArg` 参数的值用于在 `func` 运行时作为 `this`**。

例如：

```js
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// 找到 army.canJoin 返回 true 的 user
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```

上述代码中，如果使用的是 `users.filter(army.canJoin)`，那么 `army.canJoin` 将被作为独立函数调用，并且这时 `this=undefined`，从而导致报错，也可以使用箭头函数。

```js
// 找到 army.canJoin 返回 true 的 user
let soldiers = users.filter( user => army.canJoin(user) );
```

箭头函数在日常开发中的使用频率比使用 `thisArg` 高，也更加容易理解。



## Iterable object 可迭代对象

**可迭代（Iterable）**对象是数组的泛化（泛化指：更通用、更宽泛），这个概念是说任何对象都可以被定制为可以在 `for..of` 中循环使用的对象。

数组是可迭代的，不仅仅是数组。很多其它内建对象也都是可迭代的，例如字符串也是可迭代的。



**Symbol.iterator**

有一个对象，它并不是数组，但是看上去很适合使用 `for..of` 循环，例如：

```js
let range = {
  from: 1,
  to: 5,
};
```

为了让 `range` 对象可迭代，需要为对象添加一个名为 `Symbol.iterator` 的方法（一个专门用于使对象可迭代的内建 `symbol`）。

1. **当 `for..of` 循环启动时，它会调用这个方法**（如果没找到，就会报错），这个方法必须返回一个**迭代器（iterator）**—— 一个有 `next` 方法的对象
2. 从此开始，`for..of` **仅适用于这个被返回的对象**
3. 当 `for..of` 循环希望取得下一个数值，它就调用这个对象的 `next()` 方法
4. **`next()` 方法返回的结果必须是 `{done: Boolean, value: any}`**，当 `done = true` 时，表示循环结束，否则 `value` 是下一个值

完整的实现如下：

```js
let range = {
  from: 1,
  to: 5,
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {
  
  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
  return {
		current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
       	return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 现在它可以运行了！
for (let num of range) {
  alert(num); // 1, 然后依次是 2, 3, 4, 5
}
```

**⚠️ 注意：** 可迭代对象的核心功能：**关注点分离**。

- `range` 对象自身没有 `next()` 方法
- 相反，是通过调用 `range[Symbol.iterator]()` 创建了另一个对象，即所谓的 “迭代器” 对象，并且它的 `next` 会为迭代生成值，所以迭代器对象和与其进行迭代的对象是分开的



在技术上也可以将它们进行合并，并使用 `range` 自身作为迭代器来简化代码。

```js
let range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    // 记忆当前迭代进程
    this.current = this.from;
    return this;
  },
  
  next() {
    if(this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后依次是 2, 3, 4, 5
}
```

上述代码的 `range[Symbol.iterator]()` 返回的是 `range` 对象自身：它包括了必需的 `next()` 方法，并通过 `this.current` 记忆了当前的迭代进程。

**⚠️ 注意：** 

- 上述代码有个缺点，**无法同时在对象上运行两个 `for..of` 循环，因为它们共享同一个迭代器，即对象本身**，但是两个并行的 `for..of` 很罕见
- **无穷迭代器（iterator）**也是可以实现的，例如，将上述代码中的 `range` 设置为 `range.to = Infinity`，这时 `range` 成为了无穷迭代器，这种对象的 `for..of` 循环将不会停止，但可以通过使用 `break` 来停止它



**字符串是可迭代的**

数组和字符串是使用最广泛的内建可迭代对象。

```js
for (let char of 'test') {
  // 触发 4 次，每个字符一次
  alert(char); // t, 然后依次是 e, s, t
}
```

对于代理对，`for..of` 也可以正常工作：

```js
let str = '𝒳😂';

for (let char of str) {
  alert(char); // 𝒳，然后是 😂
}
```



**显式调用迭代器**

```js
let str = 'Hello';

// 和 for..of 做相同的事
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
 	alert(result.value);
}
```

上述代码创建了一个迭代器，并通过 `while` 手动获取值。

**⚠️ 注意：** 很少需要这样做，但是比 `for..of` 给了更多的控制权，例如可以拆分迭代过程：迭代一部分，然后停止，做一些其它处理，然后再恢复迭代。



**可迭代（iterable）和类数组（array-like）**

- **可迭代对象：** 指实现了 `Symbol.iterator` 方法的对象
- **类数组：** 指具有索引和 `length` 属性的对象，看起来很像数组

在实际开发中可能会遇到**既是可迭代对象也是类数组对象**，例如字符串，即是可迭代的（`for..of` 对它们有效），又是类数组的（它们有数值索引和 `length` 属性）

**⚠️ 注意：** 一个可迭代对象也许不是类数组对象，反之亦然，类数组对象可能也不可迭代，例如：

```js
let arrayLike = { // 有索引和 length 属性 => 类数组对象
  0: 'Hello',
  1: 'World',
  length: 2,
};

// arrayLike 不是一个可迭代对象
for (let item of arrayLike) {}  // Uncaught TypeError: arrayLike is not iterable
```



**Array.from**

可迭代对象和类数组对象通常都**不是数组**，它们没有 `push` 和 `pop` 等方法，如果想像数组一样操作需要先将它们转换为一个真正的数组，可以使用全局方法 `Array.from`。

该方法**可以接受一个可迭代对象或类数组的值**，然后创建一个新的数组，并将该对象的所有元素复制到这个新数组。

```js
let arrayLike = { // 类数组对象
  0: 'Hello',
  1: 'World',
  length: 2,
};

let arr = Array.from(arrayLike);
alert( arr.pop() ); // World（pop 方法有效）
```

如果是可迭代对象，也是同样：

```js
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  },
};

let arr = Array.from(range);
alert(arr); // 1,2,3,4,5
```

`Array.from` 完整语法还支持一个可选的 “映射（mapping）” 函数：

```js
Array.from(obj[, mapFn, thisArg]);
```

可选的第二个参数 `mapFn` 可以是一个函数，该函数会在对象中的元素被添加到数组前，应用于每个元素，第三个参数 `thisArg` 允许为该函数设置 `this`。

```js
// 假设 range 来自上文例子中

// 求每个数的平方
let arr = Array.from(range, num => num * num);
alert(arr); // 1,4,9,16,25
```



可以使用 `Array.from` 将一个字符串转换为单个字符的数组：

```js
let str = '𝒳😂';

// 将 str 拆分为字符数组
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2
```

`Array.from` 依赖于字符串的可迭代特性，因此就像 `for..of` 一样，可以正确地处理代理对，**但 `str.split` 无法正确处理代理对**：

```js
let str = '𝒳😂';

// 将 str 拆分为字符数组
let chars = str.split('');

alert(chars[0]); // 第一个代理对的一部分
alert(chars[1]); // 第一个代理对的另一部分
alert(chars.length); // 4
```

所以可以基于 `Array.from` 创建一个支持代理对的 `slice` 方法：

```js
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// 原生方法不支持识别代理对
alert( str.slice(1, 3) ); // 乱码
```



## Map

`Map` 是一个带键的数据项的集合，就像一个 `Object` 一样，但**它与 `Object` 最大的差别是 `Map` 允许任何类型的键（key）**。

它的方法和属性如下：

- `new Map()` —— 创建 map
- `map.set(key, value)` —— 根据键存储值，**并返回 map 本身**
- `map.get(key)` —— 根据键来返回值，如果 `map` 中不存在对应的 `key`，则返回 `undefined`
- `map.has(key)` —— 如果 `key` 存在则返回 `true`，否则返回 `false`
- `map.delete(key)` —— 删除指定键的值
- `map.clear()` —— 清空 map
- `map.size` —— 返回当前 map 中元素的个数

例如：

```js
let map = new Map();

map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键

// Map 则会保留键的类型，所以下面这两个结果不同：
alert( map.get(1) ); // 'num1'
alert( map.get('1') ); // 'str1'

alert(map.size); // 3
```

`Map` 与对象不同，键不会被转换成字符串，键可以是任何类型。

**⚠️ 注意：** 虽然 `map[key]` 也有效，例如可以设置 `map[key] = 2`，但这样会将 `map` 视为普通对象，**应该使用 `map` 方法：`set` 和 `get` 等**。



**Map 还可以使用对象作为键**

```js
let codepencil = { name: 'CodePencil' };

// 存储每个用户的来访次数
let visitsCountMap = new Map();

// codepencil 是 Map 中的键
visitsCountMap.set(codepencil, 123);

alert( visitsCountMap.get(codepencil) ); // 123
```

**⚠️ 注意：** 使用对象作为键是 `Map` 最值得注意和重要的功能之一，但在 `Object` 中，无法使用对象作为键，例如：

```js
let john = { name: 'John' };
let ben = { name: 'Ben' };

let visitsCountObj = {};

visitsCountObj[ben] = 234; // 尝试将对象 ben 用作键
visitsCountObj[john] = 123; // 尝试将对象 john 用作键，但我们会发现使用对象 ben 作为键存下的值会被替换掉

// 变成这样了！
alert( visitsCountObj['[object Object]'] ); // 123
```



**`Map` 是怎么比较键的**

`Map` 使用 [SameValueZero](https://tc39.github.io/ecma262/#sec-samevaluezero) 算法来比较键是否相等，它和严格等于 `===` 差不多，但**区别是 `NaN` 被看成是等于 `NaN`，所以 `NaN` 也可以被用作键**，这个算法不能被改变或者自定义。



**链式调用**

每一次 `map.set` 调用都会返回 map 本身，所以可以进行 “链式” 调用。

```js
map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');
```



**Map 迭代**

要在 `map` 里使用循环，可以使用如下三种方式：

- `map.keys()` —— 遍历并返回一个包含所有键的**可迭代对象**
- `map.values()` —— 遍历并返回一个包含所有值的**可迭代对象**
- `map.entries()` —— 遍历并返回一个包含所有实体 `[key, value]` 的**可迭代对象，`for..of` 在默认情况下使用这个**

例如：

```js
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
  alert(entry); // cucumber,500 (and so on)
}
```

**⚠️ 注意：** 

- **`Map` 的迭代顺序和插入值的顺序相同**

- `Map` 也有 `forEach` 方法，与 `Array` 类似

  ```js
  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500
  });
  ```
  



**Object.entries**

当创建一个 `Map` 后，可以传入一个**带有键/值对的数组（或其它可迭代对象）来进行初始化**，例如：

```js
// 键值对 [key, value] 数组
let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);

alert( map.get('1') ); // str1
```

如果想从一个已有的普通对象来创建一个 `Map`，可以使用内置的方法 `Object.entries(obj)`，该方法返回对象的键/值对数组，格式完全按照 `Map` 所需的格式。

```js
let obj = {
  name: 'CodePencil',
  age: 23,
};

let map = new Map( Object.entries(obj) );
alert( map.get('name') ); // CodePencil
```

上述代码中 `Object.entries(obj)` 返回键/值对数组：`[ ["name","CodePencil"], ["age", 23] ]`，这是 `Map` 需要的格式。



**Object.fromEntries**

`Object.fromEntries` 的作用和 `Object.entries` 是相反的：给定一个具有 `[key, value]` 键/值对的数组，它会根据给定数组创建一个对象，例如：

```js
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// 现在 prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
```

我们也可以将 `Map` 转换为一个对象：

```js
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries( map.entries() ); // 创建一个普通对象
// 此时 obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

上述代码中调用 `map.entries()` 将返回一个可迭代的键/值对，这刚好是 `Object.fromEntries` 所需要的格式，也可以简化为：

```js
let obj = Object.fromEntries(map); // 省掉 .entries()
```

上述代码作用是一样的，**因为 `Object.fromEntries` 期望得到一个可迭代的对象作为参数，`map` 的标准迭代会返回跟 `map.entries()` 一样的键/值对**。



## Set

`Set` 是一个特殊的类型集合，它是**值的集合（没有键），它的每一个值都只能出现一次**。

它的方法和属性如下：

- `new Set(iterable)` —— 创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中
- `set.add(value)` —— 添加一个值，**返回 set 本身**
- `set.delete(value)` —— 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`
- `set.has(value)` —— 如果 `value` 在 set 中，返回 `true`，否则返回 `false`
- `set.clear()` —— 清空 set
- `set.size` —— 返回元素个数

它的主要特点是，**重复使用同一个值调用 `set.add(value)` 不会发生任何改变**，例如下面的例子：

```js
let set = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// visits，一些访客来访好几次
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set 只保留不重复的值
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John（然后 Pete 和 Mary）
}
```

**⚠️ 注意：** 上述代码也可以使用数组实现，如果使用数组，**用 `arr.find` 在每次插入值时检查是否重复会导致性能变差，因为这个方法会遍历整个数组来检查每个元素**，所以更推荐使用 `Set` 来做唯一性的检查，因为 `Set` 内部对唯一性检查进行了更好的优化。



**Set 迭代**

可以使用 `for..of` 或者 `forEach` 来遍历 `Set`。

```js
let set = new Set(['oranges', 'apples', 'bananas']);

for (let value of set) alert(value);

set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

**⚠️ 注意：** `forEach` 回调函数有三个参数：一个 `value`，然后是**同一个值** `valueAgain`，最后是目标对象，同一个值在参数里出现了两次，**`forEach` 的回调函数有三个参数，是为了与 `Map` 兼容**，便于特定情况下转换为 `Map` 或者普通对象。

`Map` 中用于迭代的方法在 `Set` 中也同样支持：

- `set.keys()` —— 遍历并返回一个包含所有值的**可迭代对象**
- `set.values()` —— 与 `set.keys()` 作用相同，这是为了兼容 `Map`
- `set.entries()` —— 遍历并返回一个包含所有的实体 `[value, value]` 的**可迭代对象**，它的存在也是为了兼容 `Map`



## WeakMap

JavaScript 引擎**在值 “可达” 和可能被使用时会将其保持在内存中**。

**对象、数组等数据结构在内存中时，它们内部的子元素（如对象属性、数组的元素）都被认为是可达的**，所以当把一个对象放入一个数组中时，只要这个数组存在，那么这个对象也存在，例如：

```js
let john = { name: 'john' };

let array = [john];

john = null; // 覆盖引用
```

上述代码中 `john` 引用的对象因为存储在了 `array` 中，所以**不会被垃圾回收**，依旧可以通过 `array[0]` 获取到它。

所以这就会出现一个问题，**当使用对象作为 `Map` 的键，当 `Map` 存在时，该对象也将存在，它会占用内存，并且不会被垃圾回收**，例如：

```js
let john = { name: 'john' };

const map = new Map();
map.set(john, '...');

john = null;
```

所以要解决这个问题，可以使用 `WeakMap`，**`WeakMap` 在这方面有着根本上的不同，它不会阻止垃圾回收机制对作为键的对象的回收**。



`WeakMap` 和 `Map` 的不同点就是，**`WeakMap` 的键必须是对象，不能是原始值：**

```js
const weakMap = new WeakMap();

const obj = {};

weakMap.set(obj, 'ok'); // 正常工作（以对象作为键）

// 不能使用字符串作为键
weakMap.set('test', 'Whoops'); // Uncaught TypeError: Invalid value used as weak map key
```

前面的例子可以使用 `WeakMap` 来重写：

```js
let john = { name: 'John' };

let weakMap = new WeakMap();
weakMap.set(john, '...');

john = null; // 覆盖引用
```

上述代码与常规的 `Map` 相比，`john` 仅仅是作为 `WeakMap` 的键而存在的，**当外部没有其它变量引用 `john`，它将会被从 WeakMap（和内存）中自动删除**。

`WeakMap` 只有以下的方法：

- `weakMap.get(key)`
- `weakMap.set(key, value)`
- `weakMap.delete(key)`
- `weakMap.has(key)`

**⚠️ 注意：**

- **`WeakMap` 不支持迭代以及 `keys()`，`values()` 和 `entries()` 方法**，所以没有办法获取 `WeakMap` 的所有键或值
- 之所以有这种限制，是因为技术原因，当一个对象丢失了其它所有的引用，那么它将被垃圾回收机制自动回收，在从技术的角度并不能准确知道**何时会被回收**，这些都是由 JavaScript 引擎决定的，JavaScript 引擎可能会选择立即执行内存清理，如果现在正在发生很多删除操作，那么 JavaScript 引擎可能就会选择等一等，**因此，从技术上讲，`WeakMap` 的当前元素的数量是未知的**



**WeakMap 使用场景**

- 额外数据存储

  ```js
  // visitsCount.js
  let visitsCountMap = new WeakMap(); // weakmap: user => visits count
  
  // 递增用户来访次数
  function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
  }
  
  let john = { name: 'John' };
  
  countUser(john); // 记录他的访问次数
  
  // 不久之后，john 离开了
  john = null;
  ```

  当 `john` 这个对象不可达时，会连同它作为 `WeakMap` 里的键所对应的信息**自动从内存中删除**，无需手动清理。

  

- 缓存

  可以存储（“缓存”）函数的结果，以便将来对同一个对象的调用可以重用这个结果。

  ```js
  let cache = new WeakMap();
  
  // 计算并记结果
  function process(obj) {
    if (!cache.has(obj)) {
      let result = /* 计算结果 */;
  
      cache.set(obj, result);
    }
  
    return cache.get(obj);
  }
  
  let result1 = process(obj);
  let result2 = process(obj);
  
  // 稍后，我们不再需要这个对象时
  obj = null;
  ```

  上述代码中，当对应的对象不可达时，对应的缓存结果会自动从内存中删除。



## WeakSet

`WeakSet` 与 `Set` 类似，但是我们**只能向 `WeakSet` 添加对象（而不能是原始值）**。

**`WeakSet` 中的对象只有可达时，才能留在 `WeakSet` 中**。

跟 `Set` 一样，`WeakSet` 支持 `add`，`has` 和 `delete` 方法，**不支持 `size` 和 `keys()`，并且不可迭代**。

`WeakSet` 可以作为额外的存储空间。**但并非针对任意数据，而是针对“是/否”的事实**，例如可以用来追踪访问过网站的用户。

```js
const visitedSet = new WeakSet();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

visitedSet.add(john); // John 访问了
visitedSet.add(pete); // 然后是 Pete
visitedSet.add(john); // John 再次访问

// 检查 John 是否来访过？
alert( visitedSet.has(john) ); // true

// 检查 Mary 是否来访过？
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet 将被自动清理(即自动清除其中已失效的值 john)
```



## Object.keys，values，entries

普通对象也支持类似 `map.keys()`，`map.values()` 和 `map.entries()` 等方法，但是语法上有些不同：

- **`Object.keys(obj)`** —— 返回一个包含该对象所有的键的**数组**
- **`Object.values(obj)`** —— 返回一个包含该对象所有的值的**数组**
- **`Object.entries(obj)`** —— 返回一个包含该对象所有 `[key, value]` 键值对的**数组**

例如：

```js
let user = {
  name: 'CodePenil',
  age: 23,
};

// 遍历所有的键
for (let key of Object.keys(user)) {
  alert(key); // name, then age
}

// 遍历所有的值
for (let value of Object.values(user)) {
  alert(value); // CodePenil, then 23
}

// 遍历所有的键值对
for (let [key, value] of Object.entries(user)) {
  alert(`键：${key}，值：${value}`); // 键：name，值：CodePenil, then 键：age，值：23
}
```

**⚠️ 注意：** 与 `for..in` 循环一样，**Object.keys/values/entries 会忽略 symbol 属性**，如果想要 Symbol 类型的键可以使用 `Object.getOwnPropertySymbols`，它会返回一个只包含 Symbol 类型的键的数组，也可以使用 `Reflect.ownKeys(obj)`，它会返回**所有**键。



**转换对象**

对象缺少数组存在的许多方法，例如 `map` 和 `filter` 等，如果想使用它们需要先**对数组进行转换**，具体转换步骤如下：

1. 使用 `Object.entries(obj)` 从 `obj` 获取由键/值对组成的数组
2. 对该数组使用数组方法，例如 `map`，对这些键/值对进行转换
3. 对结果数组使用 `Object.fromEntries(array)` 方法，将结果转回成对象

例如有一个带有价格的对象，将它们的属性值加倍：

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat); // 8
```



## 解构赋值

JavaScript 中最常用的两种数据结构是 `Object` 和 `Array`。

当把它们传递给函数时，**函数可能不需要整个对象/数组，只需要其中的一部分**，这时可以使用**解构赋值**。



**数组解构**

```js
// 我们有一个存放了名字和姓氏的数组
let arr = ['John', 'Smith']

// 解构赋值
// 设置 firstName = arr[0]
// 以及 surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
```

**⚠️ 注意：** 

- 解构并不意味着破坏，它只是 “拆开” 了数组或对象，将其中的各元素复制给一些变量，**原来的数组或对象自身没有被修改**

- 可以通过添加额外的逗号来丢弃数组中不想要的元素

  ```js
  // 不需要第二个元素
  let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
  
  alert(title); // Consul
  ```

  上述代码中，数组的第二个元素被跳过了，从而第三个元素赋值给了 `title` 变量，数组剩下的元素也都被跳过了。
  
- **等号的右侧可以是任何可迭代对象**，例如：

  ```js
  let [a, b, c] = 'abc'; // ['a', 'b', 'c']
  let [one, two, three] = new Set([1, 2, 3]);
  ```

  上述情况中，解构赋值是**通过迭代右侧的值来完成工作的**，这是一种用于对在 `=` 右侧的值上调用 `for..of` 并进行赋值的操作的**语法糖**。

  

- **等号的左侧可以赋值任何内容**

  例如可以直接赋值给对象的属性：

  ```js
  let user = {};
  [user.name, user.surname] = 'John Smith'.split(' ');
  
  alert(user.name); // John
  alert(user.surname); // Smith
  ```

- **与 .entries() 方法进行循环操作**

  ```js
  let user = {
    name: 'CodePecnil',
    age: 23
  };
  
  // 使用循环遍历键—值对
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:CodePencil, then age:23
  }
  ```

  使用 `Map` 代码更加简单：

  ```js
  let user = new Map();
  user.set('name', 'CodePencil');
  user.set('age', 23);
  
  // Map 是以 [key, value] 对的形式进行迭代的，非常便于解构
  for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
  }
  ```

  

- **可以利用解构赋值来实现交换变量值的技巧**

  ```js
  let guest = 'Jane';
  let admin = 'Pete';
  
  // 使得 guest = 'Pete'，admin = 'Jane'
  [guest, admin] = [admin, guest];
  
  alert(`${guest} ${admin}`); // Pete Jane（成功交换！）
  ```

  上述代码创建了一个由两个变量组成的临时数组，并且立即以颠倒的顺序对其进行了解构赋值。



**其余的 ...**

如果数组比左侧的列表长，那么其余的数组项会被忽略，**如果还想收集其余数组项，可以使用 `...` 再加一个参数来获取其余数组项**：

```js
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

// rest 是包含从第三项开始的其余数组项的数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

上述代码中 `rest` 就是数组中剩余元素组成的数组，变量名不一定要使用 `rest`，也可以使用其它的变量名，**只要确保它前面有三个点，并且在解构赋值的最后一个参数位置上**。



**默认值**
如果数组比左侧的变量列表短，**缺少的对应变量会被赋值 `undefined`**：

```js
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

如果要给未赋值的变量一个默认值，可以使用 `=` 来提供：

```js
// 默认值
let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

alert(name);    // Julius（来自数组的值）
alert(surname); // Anonymous（默认值被使用了）
```

默认值可以是更加复杂的表达式，也可以是函数调用，这些表达式或函数只会在这个**变量未被赋值的时候才会被计算**，例如：

```js
// 只会提示输入姓氏
let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius'];

alert(name);    // Julius（来自数组）
alert(surname); // 输入的值
```



**对象解构**

解构赋值同样适用于对象，基本语法如下：

```js
let {var1, var2} = {var1:…, var2:…};
```

在等号的右侧是一个已经存在的对象，可以把它拆分到变量中，等号的左侧包含了对象相应属性的一个**类对象 “模式（pattern）”**。

例如：

```js
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

上述代码中，属性 `options.title`、`options.width` 和 `options.height` 值被赋给了对应的变量。

**⚠️ 注意：** 

- 左侧变量的顺序并不重要

- 可以使用已有的变量，而不用 `let`，但这存在一个陷阱

  ```js
  let title, width, height;
  
  {title, width, height} = {title: 'Menu', width: 200, height: 100}; // SyntaxError: Unexpected token '='
  ```

  上述代码无法正常运行，问题在于 JavaScript 把主代码流（即不在其他表达式中）的 `{...}` 当做一个代码块。

  可以**将整个赋值表达式用括号 `(...)` 包起来**：

  ```js
  let title, width, height;
  
  // 现在就可以了
  ({title, width, height} = {title: "Menu", width: 200, height: 100});
  
  alert( title ); // Menu
  ```



等号左侧的模式（pattern）可以更加复杂，**可以指定属性和变量之间的映射关系，用来将一个属性赋值给另一个名字的变量**。

```js
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

上述代码中冒号的语法是 “从对象中什么属性的值：赋值给哪个变量”，在上述代码中属性 `width` 被赋值给了 `w`，属性 `height` 被赋值给了 `h`，属性 `title` 被赋值给了同名变量。



对于可能缺失的属性，也可以使用 `=` 设置默认值，例如：

```js
let options = {
  title: 'Menu',
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

默认值可以是更加复杂的表达式，也可以是函数调用，这些表达式或函数只会在这个**变量未被赋值的时候才会被计算**，例如：

```js
let options = {
  title: 'Menu',
};

let {width = prompt('width?'), title = prompt('title?')} = options;

alert(title);  // Menu
alert(width);  // (prompt 的返回值)
```

**还可以将冒号和等号结合起来**：

```js
let options = {
  title: 'Menu',
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```



**剩余模式 ...**

如果对象拥有的属性数量比左侧的提供的变量数据多，那么其余的属性会被忽略，**如果还想收集其余数组项，可以使用 `...` 再加一个参数来获取其余属性**：

```js
let options = {
  title: 'Menu',
  height: 200,
  width: 100
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象
let {title, ...rest} = options;

// 现在 title = 'Menu', rest = { height: 200, width: 100 }
alert(rest.height);  // 200
alert(rest.width);   // 100
```

**⚠️ 注意：** 一些较旧的浏览器不支持此功能（例如 IE，需要使用 Babel 对其进行 polyfill）



**嵌套解构**

如果一个对象或数组嵌套了其他的对象和数组，可以通过在等号左侧使用更复杂的模式（pattern）来提取更深层的数据。

```js
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

let {
  size: { // 把 size 赋值到这里
    width,
    height
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = 'Menu' // 在对象中不存在（使用默认值）
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
```

上述代码中，对象 `options` 的所有属性，除了 `extra` 属性在等号左侧不存在，都被赋值给了对应的变量：

![image-20250628152239996](images/image-20250628152239996.png)



**智能函数参数**

如果一个函数有很多参数，其中大部分的参数都是可选的，例如：

```js
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
```

这样的函数存在如下问题：

- **记忆如此多的参数的顺序是一个很大的负担**

- **大部分的参数只需采用默认值的情况下，调用这个函数时会需要写大量的 `undefined`**

  ```js
  // 在采用默认值就可以的位置设置 undefined
  showMenu("My Menu", undefined, undefined, ['Item1', 'Item2']);

为了解决上述两个问题，**可以用一个对象来传递所有参数，而函数负责把这个对象解构成各个参数**。

```js
// 我们传递一个对象给函数
let options = {
  title: 'My menu',
  items: ['Item1', 'Item2'],
};

showMenu(options);

// 函数把对象解构成变量
function showMenu({title = 'Untitled', width = 200, height = 100, items = []}) {
  // title, items – 提取于 options，
  // width, height – 使用默认值
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}
```

也可以使用带有嵌套对象和冒号映射的更加复杂的解构：

```js
let options = {
  title: 'My menu',
  items: ['Item1', 'Item2'],
};

showMenu(options);

function showMenu({
  title = 'Untitled',
  width: w = 100,  // 宽度赋值给变量 w
  height: h = 200, // 高度赋值给变量 h
  items: [item1, item2] // items 中的元素按顺序分别赋值给变量 item1 和 item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}
```

**⚠️ 注意：想让所有的参数都使用默认值，应该传递一个空对象：**

```js
showMenu({}); // 正确，所有值都取默认值

showMenu(); // 这样会导致错误，不传参数等价于对 undefined 进行解构，所以报错
```

也可以**通过定空对象 `{}` 为整个参数对象的默认值**来解决这个问题：

```js
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
```

上述代码中，**整个参数对象的默认是 `{}`，因此总会有内容可以用来解构**。



## 日期和时间

JavaScript 中有一个内建的对象 `Date`，用来存储日期和时间，并提供了日期/时间的管理方法。

**⚠️ 注意：Date 在默认的类型转换中优先调用 `toString()`，而不是 `valueOf()`**。



**创建**

- **`new Date()`**

  通过 `new Date()` 来创建一个新的 `Date` 对象。

  ```js
  const now = new Date();
  alert(now); // 显示当前的日期/时间
  ```
  
  

- **`new Date(milliseconds)`**

  创建一个 `Date` 对象，其时间等于 1970 年 1 月 1 日 UTC+0 之后经过的毫秒数（1/1000 秒）

  ```js
  const Jan01_1970 = new Date(0); // 0 表示 01.01.1970 UTC+0
  alert(Jan01_1970);
  
  // 现在增加 24 小时，得到 02.01.1970 UTC+0
  const Jan02_1970 = new Date(24 * 3600 * 1000);
  alert(Jan02_1970);
  ```

  `milliseconds` 表示自 1970-01-01 00:00:00 以来经过的毫秒数，该整数被称为**时间戳**。

  在 1970-01-01 00:00:00 之前的日期需要使用**带有负的时间戳**：

  ```js
  // 现在减少 24 小时，得到 12.31.1969 UTC+0
  const Dec31_1969 = new Date(-24 * 3600 * 1000);
  alert(Dec31_1969);
  ```

  

- **`new Date(datestring)`**

  **如果只有一个参数，并且是字符串，那么它会被自动解析**，解析算法和 `Date.parse` 所使用的算法相同。

  ```js
  const date = new Date('2025-06-29');
  alert(date);
  ```

  **⚠️ 注意：** 如果未指定具体时间，假定时间为格林尼治标准时间（GMT）的午夜零点，**运行代码时会根据用户的时区自动进行调整**，例如:

  ```js
  let date = new Date('2017-01-26');
  alert(date);
  // 结果可能是
  // Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
  // 或
  // Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)
  ```

  

- **`new Date(year, month, date, hours, minutes, seconds, ms)`**

  使用当前时区中给定的组件来创建日期，**只有前两个参数是必须的**。

  - `year` 应该是四位数，为了兼容性也接受 2 位数，并将其视为 `19xx`，例如 `98` 与 `1998` 相同，**建议始终使用 4 位数**
  - `month` 计数从 `0`（一月）开始，到 `11`（十二月）结束
  - `date` 是当月的具体某一天，如果缺失，则为默认值 `1`
  - 如果 `hours/minutes/seconds/ms` 缺失，则均为默认值 `0`

  例如：

  ```js
  new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
  new Date(2011, 0, 1); // 同样，时分秒等均为默认值 0
  ```

  

  时间度量最大精确到 1 毫秒（1/1000 秒）：

  ```js
  let date = new Date(2011, 0, 1, 2, 3, 4, 567);
  alert( date ); // 1.01.2011, 02:03:04.567
  ```

  上述代码中 567 表示 567 毫秒，等于 0.567 秒。



**访问日期组件**

- **`getFullYear()`** —— 获取年份（4 位数）

  **⚠️ 注意：不是 `getYear()`，而是 `getFullYear()`**，很多 JavaScript 引擎都实现了一个非标准化的方法 `getYear()`，不推荐使用这个方法。它有时候可能会返回 2 位的年份信息，**永远不要使用它**。

- **`getMonth()`** —— 获取月份，**从 0 到 11**

- **`getDate()`** —— 获取当月的具体日期，从 1 到 31

- **`getHours()`** —— 获取小时，从 0 到 23

- **`getMinutes()`** —— 获取分钟，从 0 到 59

- **`getSeconds()`** —— 获取秒，从 0 到 59

- **`getMilliseconds`** —— 获取毫秒，从 0 到 999

- **`getDay()`** —— 获取一周中的第几天(星期)，**从 `0`（星期日）到 `6`（星期六），第一天始终是星期日，某些国家可能不是这样的习惯，但这不能被改变**

**⚠️ 注意：** 以上的所有方法返回的组件都是基于当地时区（根据当地时区自动调整返回结果）。



如果需要基于 UTC（协调世界时），可以使用对应的 `getUTC*()` 方法，它们会返回基于 UTC+0 时区的日、月、年等：

- **`getUTCFullYear()`**
- **`getUTCMonth()`**
- **`getUTCDay()`**

只需要在 `'get'` 之后插入 `UTC` 即可，例如：

```js
//  当前日期
let date = new Date();

// 当地时区的小时数
alert( date.getHours() );

// 在 UTC+0 时区的小时数（非夏令时的伦敦时间）
alert( date.getUTCHours() );
```

**⚠️ 注意：** 除了上述给定的方法，还有两个没有 UTC 变体的特殊方法：

- **`getTime()`** —— 返回日期的时间戳

- **`getTimezoneOffset()`** —— 返回 UTC 与本地时区之间的时差，**以分钟为单位**

  ```js
  // 如果你在时区 UTC-1，输出 60
  // 如果你在时区 UTC+3，输出 -180
  alert( new Date().getTimezoneOffset() );
  ```



**设置日期组件**

有下列方法可以设置日期/时间组件：

- `setFullYear(year, [month], [date])`
- `setMonth(month, [date])`
- `setDate(date)`
- `setHours(hour, [min], [sec], [ms])`
- `setMinutes(min, [sec], [ms])`
- `setSeconds(sec, [ms])`
- `setMilliseconds(ms)`
- `setTime(milliseconds)`

以上方法除了 `setTime()` 都有 UTC 变体，例如：`setUTCHours()`。

有些方法可以一次性设置多个组件，比如 `setHours`，未提及的组件不会被修改：

```js
let today = new Date();

today.setHours(0);
alert(today); // 日期依然是今天，但是小时数被改为了 0

today.setHours(0, 0, 0, 0);
alert(today); // 日期依然是今天，时间为 00:00:00。
```



**自动校准**

**自动校准**是 `Date` 对象的一个非常方便的特性，可以设置超范围的数值，它会自动校准，例如：

```js
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // 是 1st Feb 2013
```

超出范围的日期组件将会被自动分配。

例如要在日期 “28 Feb 2016” 上加 2 天，结果可能是 “2 Mar” 或 “1 Mar”，因为存在闰年，但不需要考虑这些，只需要直接加 2 天，剩下的 `Date` 对象会帮我们处理：

```js
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016
```



还可以设置 `0` 甚至是负值，例如：

```js
let date = new Date(2016, 0, 2); // 2016 年 1 月 2 日

date.setDate(1); // 设置为当月的第一天
alert(date);

date.setDate(0); // 天数最小可以设置为 1，所以这里设置的是上一月的最后一天
alert(date); // 31 Dec 2015
```

**⚠️ 注意：** `date.setDate(0)` 可以获取上个月的最后一天。



**日期转换为数字，日期差值**

当 `Date` 对象被转化为数字时，得到的是对应的时间戳，与使用 `date.getTime()` 的结果相同：

```js
let date = new Date();
alert(+date); // 以毫秒为单位的数值，与使用 date.getTime() 的结果相同
```

**⚠️ 注意：** 日期可以相减，相减的结果是以毫秒为单位时间差，这个作用可以用于时间测量：

```js
let start = new Date(); // 开始测量时间

// 执行一些耗时的任务
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

alert(`循环耗时 ${end - start} ms`);
```



**Date.now()**

如果仅仅想要测量时间间隔而不需要 `Date` 对象，可以使用 `Date.now()` 返回当前的时间戳。

它相当于 `new Date().getTime()`，但**它不会创建中间的 `Date` 对象**，所以它更快，而且**不会对垃圾回收造成额外的压力**。

这种方法很多时候因为方便，又或是因性能方面的考虑而被采用。

```js
let start = Date.now(); // 从 1 Jan 1970 至今的时间戳

// 执行一些耗时的任务
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // 完成

alert(`循环耗时 ${end - start} ms`); // 相减的是时间戳，而不是日期
```

**⚠️ 注意：** 有时候需要更加精准的时间度量，JavaScript 自身并没有测量微秒的方法（百万分之一秒），但大多数运行环境会提供，例如：浏览器有 **`performance.now()` 方法**来给出从页面加载开始的以毫秒为单位的微秒数（精确到毫秒的小数点后三位）：

```js
alert(`Loading started ${performance.now()}ms ago`);
// 类似于 "Loading started 34731.26000000001ms ago"
// .26 表示的是微秒（260 微秒）
// 小数点后超过 3 位的数字是精度错误，只有前三位数字是正确的
```

Node.js 可以通过 `microtime` 模块或使用其他方法，从技术上讲，几乎所有的设备和环境都允许获取更高精度的时间数值，只不过不是使用 `Date` 对象。



**基准测试（Benchmarking）**

对一个很耗 CPU 性能的函数进行可靠的基准测试（Benchmarking）时，需要谨慎一点。

例如计算以下两个计算日期差值的函数：哪个更快？

这种性能测量通常称为 **“基准测试（benchmark）”**。

```js
// 我们有 date1 和 date2，哪个函数会更快地返回两者的时间差？
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}
```

首先想到的方法可能是连续运行两者很多次，并计算所消耗的时间差，因为两个函数过于简单，所以必须执行至少 100000 次。

```js
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  const date1 = new Date(0);
  const date2 = new Date();
  
  let start = Date.now();
  
  for (let i = 0; i < 100000; i++) f(date1, date2);
  
  return Date.now() - start;
}

alert('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
alert('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');
```

上述代码运行才结果来看 `getTime()` 这种方式快得多，因为它没有进行类型转换，对引擎优化来说更加简单。

但是这样的基准测试存在一个问题：如果当运行 `bench(diffSubtract)` 的同时，CPU 还在并行处理其他事务，并且这也会占用资源，然而运行 `bench(diffGetTime)` 的时候，并行处理的事务完成了，从而**可能会导致错误的结论**。

**为了得到更加可靠的度量，整个度量测试包应该重新运行多次。**

```js
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// 交替运行 bench(diffSubtract) 和 bench(diffGetTime) 各 10 次
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

alert('Total time for diffSubtract: ' + time1 + 'ms');
alert('Total time for diffGetTime: ' + time2 + 'ms');
```

现代的 JavaScript 引擎的先进优化策略只对执行很多次的 “hot code” 有效（对于执行很少次数的代码没有必要优化），所以上述代码中**第一次执行的优化程度不高，可能需要增加一个预热步骤**。

```js
// 在主循环中增加预热环节
bench(diffSubtract);
bench(diffGetTime);

// 开始度量
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}
```

**⚠️ 注意：** 进行微型基准测试时要小心，现代的 JavaScript 引擎执行了很多优化，与正常编写的代码相比，它们**可能会改变 “人为编写的专用于测试的代码” 的执行流程**，特别是在我们对很小的代码片段进行基准测试时，如果需要深入理解性能问题，需要学习 JavaScript 引擎的工作原理，之后可能就再也不需要进行微型基准测试了。



**对字符串调用 Date.parse**

`Date.parse(str)` 方法可以从一个字符串中读取日期。

**字符串的格式应该为：`YYYY-MM-DDTHH:mm:ss.sssZ`**，其中：

- `YYYY-MM-DD` —— 日期：年-月-日
- 字符 `T` 是一个分隔符
- `HH:mm:ss.sss` —— 时间：小时，分钟，秒，毫秒
- 可选字符 `'Z'` 为 `+-hh:mm` 格式的时区，单个字符 `Z` 代表 UTC+0 时区

简短形式也是可以的，比如 `YYYY-MM-DD` 或 `YYYY-MM`，甚至可以是 `YYYY`。

`Date.parse(str)` 调用会解析给定格式的字符串，并**返回时间戳**，如果**给定字符串的格式不正确，则返回 `NaN`**。

例如：

```js
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417
```

可以通过时间戳来立即创建一个 `new Date` 对象：

```js
let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
alert(date);
```



## JSON

如果有一个复杂的对象，需要转换为字符串，用来通过网络发送或者在日志中输出它，可以使用 **JSON（JavaScript Object Notation）**。

**JSON 是表示值和对象的通用格式**，在 [RFC 4627](https://tools.ietf.org/html/rfc4627) 标准中有对其的描述。最初它是为 JavaScript 而创建的，但许多其他编程语言也有用于处理它的库。

JavaScript 提供了如下方法：

- `JSON.stringify` 将对象转换为 JSON
- `JSON.parse` 将 JSON 转换回对象

例如 `JSON.stringify` 一个 `student` 对象：

```js
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // string
alert(json);
```

上述代码中方法 `JSON.stringify(student)` 接收对象并将其转换为字符串，得到的 `json` 字符串是一个被称为 **JSON 编码（JSON-encoded）** 或 **序列化（serialized）** 或 **字符串化（stringified）** 或 **编组化（marshalled）** 的对象。

**⚠️ 注意：** JSON 编码的对象与对象字面量有几个重要的区别：

- **字符串使用双引号，JSON 中没有单引号或反引号**，所以 `'John'` 被转换为 `"John"`

- **对象属性名称也是双引号的，这是强制性的**，所以 `age: 30` 被转换成 `"age": 30`

- **`JSON.stringify` 也可以应用于原始（primitive）数据类型**，支持以下数据类型：

  - Objects `{ ... }`
  - Arrays `[ ... ]`
  - Primitives：
    - strings
    - numbers
    - boolean values `true/false`
    - `null`

  例如：

  ```js
  // 数字在 JSON 还是数字
  alert( JSON.stringify(1) ) // 1
  
  // 字符串在 JSON 中还是字符串，只是被双引号扩起来
  alert( JSON.stringify('test') ) // "test"
  
  alert( JSON.stringify(true) ); // true
  
  alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
  ```

  JSON 是语言无关的纯数据规范，因此**一些特定于 JavaScript 的对象属性会被 `JSON.stringify` 跳过**，即：

  - 函数属性（方法）
  - Symbol 类型的键和值
  - 存储 `undefined` 的属性

  ```js
  let user = {
    sayHi() { // 被忽略
      alert('Hello');
    },
    [Symbol('id')]: 123, // 被忽略
    something: undefined // 被忽略
  };
  
  alert( JSON.stringify(user) ); // {}（空对象）
  ```

  

- **JSON 支持嵌套对象转换**

  ```js
  let meetup = {
    title: 'Conference',
    room: {
      number: 23,
      participants: ['john', 'ann'],
    },
  };
  
  alert( JSON.stringify(meetup) );
  /* 整个结构都被字符串化了
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */
  ```

  

- **JSON 不支持循环引用的对象**

  ```js
  let room = {
    number: 23
  };
  
  let meetup = {
    title: 'Conference',
    participants: ['john', 'ann'],
  };
  
  meetup.place = room;       // meetup 引用了 room
  room.occupiedBy = meetup; // room 引用了 meetup
  
  JSON.stringify(meetup); // Error: Converting circular structure to JSON
  ```

  上述代码转换失败，因为循环引用：`room.occupiedBy` 引用了 `meetup`，`meetup.place` 引用了 `room`：

  ![image-20250629104341256](images/image-20250629104341256.png)



**排除和转换：replacer**

`JSON.stringify` 的完整语法是：

```js
let json = JSON.stringify(value[, replacer, space]);
```

- **`value`：** 要编码的值
- **`replacer`：** 要编码的属性数组或映射函数 `function(key, value)`
- **`space`：** 用于格式化的空格数量

大多数情况下，`JSON.stringify` 只使用第一个参数，如果需要微调替换过程，例如过滤掉循环引用，可以使用 `JSON.stringify` 的第二个参数。

如果传递一个属性数组给它，那么只有这些属性会被编码。

```js
let room = {
  number: 23
};

let meetup = {
  title: 'Conference',
  participants: [{name: 'John'}, {name: 'Alice'}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}
```

上述代码中 `participants` 是空的，因为 `name` 不在列表中，可以包含除了会导致循环引用的 `room.occupiedBy` 之外的所有属性：

```js
let room = {
  number: 23
};

let meetup = {
  title: 'Conference',
  participants: [{name: 'John'}, {name: 'Alice'}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
```

现在除 `occupiedBy` 以外的所有内容都被序列化了，**但是属性的列表太长了**。

这时可以使用一个函数代替数组作为 `replacer`。

**该函数会为每个 `(key,value)` 对调用并返回 “已替换” 的值，该值将替换原有的值，如果返回 `undefined` ，则跳过该值**。

```js
let room = {
  number: 23
};

let meetup = {
  title: 'Conference',
  participants: [{name: 'John'}, {name: 'Alice'}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key === 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/
```

 **⚠️ 注意：** 

- `replacer` 函数会获取每个键/值对，包括嵌套对象和数组项。它被递归地应用，**`replacer` 中的 `this` 的值是包含当前属性的对象**
- 第一个调用很特别，它是**使用特殊的 “包装对象” 制作的：`{"": meetup}`**，第一个 `(key, value)` 对的键是空的，并且该值是整个目标对象，也是上面的示例中第一行是 `":[object Object]"` 的原因，是所以这样是为了给 `replacer` 提供尽可能多的功能：如果有必要，它有机会分析并替换/跳过整个对象



**格式化：space**

`JSON.stringify(value, replacer, spaces)` 的第三个参数是用于**优化格式的空格数量**。

所有字符串化的对象默认都没有缩进和额外的空格，这没有什么问题，**`space` 参数专门用于调整出更美观的输出**。

```js
let user = {
  name: 'John',
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  }
};

alert(JSON.stringify(user, null, 2));
/* 两个空格的缩进：
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* 对于 JSON.stringify(user, null, 4) 的结果会有更多缩进：
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
```

上述代码中 `space = 2` 告诉 JavaScript 在多行中显示嵌套的对象，对象内部缩进 2 个空格。

 **⚠️ 注意：第三个参数也可以是字符串**，这种情况下，**字符串用于缩进，而不是空格的数量**。

```js
const user = {
  name: 'Alice',
  age: 30,
  skills: ['JavaScript', 'Python']
};

alert(JSON.stringify(user, null, '*'))
/*
每一层缩进使用一个 *，嵌套越深，* 的数量越多（逐层叠加）

{
*"name": "Alice",
*"age": 30,
*"skills": [
**"JavaScript",
**"Python"
*]
}
*/
```



**自定义 toJSON**

像 `toString` 进行字符串转换，**对象也可以提供 `toJSON` 方法来进行 JSON 转换，如果可用，`JSON.stringify` 会自动调用它**。

```js
let room = {
  number: 23
};

let meetup = {
  title: 'Conference',
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

alert( JSON.stringify(meetup) );

/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",
    "room": {"number":23}
  }
*/
```

上述代码中 `date` 变成了一个字符串，因为所**有日期对象都有一个内建的 `toJSON` 方法来返回这种类型的字符串**。

为对象 `room` 添加一个自定义的 `toJSON`：

```js
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: 'Conference',
  room
};

alert( JSON.stringify(room) ); // 23
alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```

就像上述代码一样，**`toJSON` 既可以用于直接调用 `JSON.stringify(room)` 也可以用于当 `room` 嵌套在另一个编码对象中时**。



**JSON.parse**

要解析 JSON 字符串，需要使用 `JSON.parse` 方法。

语法：

```js
let value = JSON.parse(str, [reviver]);
```

- **`str`：** 要解析的 JSON 字符串
- **`reviver`：** 可选的函数 function(key,value)，该函数将为每个 `(key, value)` 对调用，并可以对值进行转换

例如：

```js
// 字符串化数组
let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
```

对于嵌套对象：

```js
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1
```

 **⚠️ 注意：** 

- JSON 字符串中不支持注释，向 JSON 添加注释无效
- 还有另一种名为 [JSON5](http://json5.org/) 的格式，它允许未加引号的键，也允许注释等，但它是一个独立的库，不在语言规范中，JSON 标准之所以严格是为够简单，可靠且快速地实现解析算法



**使用 reviver**

例如当从服务器上获取了一个字符串化的 `meetup` 对象。

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
```

现在需要**反序列（deserialize）**，把它转换回 JavaScript 对象，调用 `JSON.parse` 来完成：

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);
alert( meetup.date.getDate() ); // VM1590:4 Uncaught TypeError: meetup.date.getDate is not a function
```

上述代码报错的原因：`meetup.date` 的值是一个字符串，而不是 `Date` 对象，没有 `getDate` 方法。

这时可以将 reviver 函数传递给 `JSON.parse` 作为第二个参数，让其它属性 “原样” 返回所有值，但是 `date` 属性的值会变成 `Date` 类型：

```js
const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

const meetup = JSON.parse(str, function(key, value) {
  if (key === 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 30
```

 **⚠️ 注意：** reviver 函数也同样适用于嵌套对象。



## 递归和堆栈

**递归**是一种编程模式，表示从自身调用函数（自调用），递归函数可用于以更优雅的方式解决问题。

例如实现一个 `pow(x, n)` 函数，它可以计算 `x` 的 `n` 次方。

主要有以下两种实现方式：

- **迭代思路：** 使用 `for` 循环

  ```js
  function pow(x, n) {
    let result = 1;
  
    // 在循环中，用 x 乘以 result n 次
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert( pow(2, 3) ); // 8
  ```

  

- **递归思路：** 简化任务，调用自身

  ```js
  function pow(x, n) {
    return n == 1 ? x : (x * pow(x, n - 1));
  }
  
  alert( pow(2, 3) ); // 8
  ```

  1. 当 `n == 1`，所有事情都会很简单，这叫做**基础的递归**，它会立即产生明显的结果：`pow(x, 1)` 等于 `x`
  2. 否则，我们可以用 `x * pow(x, n - 1)` 表示 `pow(x, n)`，这叫做**一个递归步骤**：将任务转化为更简单的行为（`x` 的乘法）和更简单的同类任务的调用（带有更小的 `n` 的 `pow` 运算）

  简单来说就是 `pow` **递归地调用自身** 直到 `n == 1`。

  ![image-20250629142818042](images/image-20250629142818042.png)
   **⚠️ 注意：** 
  
  - **递归解通常比迭代解更短**
  - 最大的嵌套调用次数（包括首次）被称为**递归深度**，例如前面的例子中，它正好为 `n`，最大递归深度受限于 JavaScript 引擎。通常来说，**引擎在最大迭代深度为 10000 及以下时是可靠的**，有些引擎可能允许更大的最大深度，但是对于大多数引擎来说，100000 可能就超出限制了，一些浏览器支持**尾部调用优化**，但目前它们还没有被完全支持，只能用于简单场景，虽然限制了递归的应用，但是递归仍然被广泛使用，递归思维方式会使代码更简单，更容易维护



**执行上下文和堆栈**

正在运行的函数的执行过程的相关信息被存储在其**执行上下文**中。

执行上下文是一个内部的数据结构，它包含有关函数执行时的详细细节：**当前控制流所在的位置，当前的变量，`this` 的值，以及其它的一些内部细节**。

一个函数调用**仅具有一个**与其相关联的执行上下文。

当一个函数进行**嵌套调用（调用自己（递归），也可能是调用其它函数）**时，执行的过程如下：

1. 当前函数被暂停
2. 与它关联的执行上下文被一个叫做**执行上下文堆栈**的特殊数据结构保存
3. 执行嵌套调用
4. 嵌套调用结束后，从堆栈中恢复之前的执行上下文，并**从停止的位置恢复外部函数**

例如前面 `pow(2, 3)` 的执行过程如下：

在调用 `pow(2, 3)` 的开始，执行上下文（context）会存储变量：`x = 2, n = 3`，执行流程在函数的第 `1` 行。

可以将其描绘为：

![image-20250629143932032](images/image-20250629143932032.png)

当函数开始执行的时候，条件 `n == 1` 结果为假，所以执行流程进入 `if` 的第二分支。

```js
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1); // 执行到此处
  }
}

alert( pow(2, 3) );
```

变量相同，但是**行改变了**，因此现在的上下文是：

![image-20250629144111954](images/image-20250629144111954.png)

为了计算 `x * pow(x, n - 1)`，需要使用带有新参数的新的 `pow` 子调用 `pow(2, 2)`。

为了执行嵌套调用，JavaScript 会在**执行上下文堆栈**中记住当前的执行上下文。

执行过程如下：

1. 当前上下文被 “记录” 在堆栈的顶部
2. 为子调用创建新的上下文
3. 当子调用结束后 —— 前一个上下文被从堆栈中弹出，并继续执行

下面是进入子调用 `pow(2, 2)` 时的上下文堆栈：

![image-20250629144627814](images/image-20250629144627814.png)

新的当前执行上下文位于顶部（粗体显示），之前记住的上下文位于下方，当子调用完成后，很容易恢复上一个上下文，因为**它既保留了变量，也保留了当时所在代码的确切位置**。

重复该过程：在第 `5` 行生成新的子调用，现在的参数是 `x=2`, `n=1`。

新的执行上下文被创建，前一个被压入堆栈顶部：

![image-20250629144939807](images/image-20250629144939807.png)

此时，有 2 个旧的上下文和 1 个当前正在运行的 `pow(2, 1)` 的上下文。

在执行 `pow(2, 1)` 时，与之前的不同，条件 `n == 1` 为真，因此 `if` 的第一个分支生效：

```js
function pow(x, n) {
  if (n == 1) {
    return x; // 执行到此处
  } else {
    return x * pow(x, n - 1);
  }
}
```

此时不再有更多的嵌套调用，所以函数结束，返回 `2`。

函数完成后，就不再需要其执行上下文了，因此它被从内存中移除。前一个上下文恢复到堆栈的顶部。

![image-20250629145142375](images/image-20250629145142375.png)

恢复执行 `pow(2, 2)`。它拥有子调用 `pow(2, 1)` 的结果，因此也可以完成 `x * pow(x, n - 1)` 的执行，并返回 `4`。

然后，前一个上下文被恢复：

![image-20250629145911695](images/image-20250629145911695.png)

它结束后，得到了最终的结果 `pow(2, 3) = 8`。

本示例中的递归深度为：**3**，从前面的插图我们可以看出，**递归深度等于堆栈中上下文的最大数量**。

 **⚠️ 注意：执行上下文占用内存**，在前面的例子中 `n` 次方需要存储 `n` 个上下文，以供更小的 `n` 值进行计算使用，所以**递归算法更占内存，而循环算法更节省内存**：

```js
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

迭代 `pow` 的过程中**仅使用了一个执行上下文**用于修改 `i` 和 `result`。它的内存要求小，并且是固定了，不依赖于 `n`。

**任何递归都可以用循环来重写，通常循环变体更有效**，但有时重写很难，尤其是函数根据条件使用不同的子调用，然后合并它们的结果，或者分支比较复杂时，而且有些优化可能没有必要，完全不值得。

递归可以使代码更短，更易于理解和维护，但不是每个地方都需要优化，大多数时候只需要一个好代码，这就是为什么要使用它。



**递归遍历**

递归的一个重要应用就是递归遍历。

假如有一家公司，人员结构可以表示为一个对象：

```js
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};
```

需要一个函数来获取所有薪资的总数，使用迭代方式并不容易，因为结构比较复杂，但可以使用递归来实现。

```js
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0); // 求数组的和
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 递归调用所有子部门，对结果求和
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 7700
```

上述代码适用于任何层次的子部门嵌套。



**递归结构**

递归（递归定义的）数据结构是一种部分复制自身的结构。

前面的公司结构是递归结构，一个公司的**部门**是：

- 人员数组
- 或一个**部门**对象



 Web 开发中的 HTML 和 XML 文档也是递归结构，在 HTML 文档中，一个 **HTML 标签**可能包括以下内容：

- 文本片段
- HTML 注释
- 其它 **HTML 标签**（它有可能又包括文本片段、注释或其它标签等）



**链表**

链表也是一种递归结构。

如果我们要存储一个有序的对象列表，通常来说会选择数组：

```js
let arr = [obj1, obj2, obj3];
```

但是使用数组有一个问题，**“删除元素” 和 “插入元素” 的操作代价非常大**，因为这些操作必须对所有元素重新编号，如果数组内的元素很多，会很耗时。

如果我们确实需要快速插入/删除，可以选择种叫做**链表**的数据结构。

**链表元素** 是一个使用以下元素通过递归定义的对象：

- `value`
- `next` 属性引用下一个**链表元素**或者代表末尾的 `null`

例如：

```js
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
```

图形表示为：

![image-20250629151618788](images/image-20250629151618788.png)

一段用来创建链表的代码：

```js
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
```

上述代码有很多个对象，每一个都有 `value` 和指向邻居的 `next`，变量 `list` 是链条中的第一个对象，因此顺着 `next` 指针，可以抵达任何元素。

该链表可以很容易被拆分为多个部分，然后再重新组装回去：

```js
let secondList = list.next.next;
list.next.next = null;
```

![image-20250629151813378](images/image-20250629151813378.png)

也可以将合并链表：

```js
list.next.next = secondList;
```



也可以在任何位置插入或移除元素：

```js
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// 将新值添加到链表头部
list = { value: 'new item', next: list };
```

![image-20250629152010745](images/image-20250629152010745.png)

与数组不同，**链表没有大规模重排**，可以很容易地重新排列元素。

**⚠️ 注意：** 链表主要的缺点就是无法很容易地通过元素的编号获取元素，但在数组中很容易：例如 `arr[n]` 是一个直接引用，**但在链表中需要从起点元素开始，顺着 `next` 找 `N` 次才能获取到第 `N` 个元素**。

链表可以得到增强：

- 我们可以在 `next` 之外，再添加 `prev` 属性来引用前一个元素，以便轻松地往回移动
- 我们还可以添加一个名为 `tail` 的变量，该变量引用链表的最后一个元素
- 链表的数据结构可能会根据我们的需求而变化



## Rest 参数与 Spread 语法

**Rest 参数**

在 JavaScript 中，无论函数是如何定义的，你都可以在调用它时传入任意数量的参数。

例如：

```js
function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );
```

上述代码不会因为传入过多的参数而报错，但只有前两个参数被求和了。

可以**在函数定义中声明一个数组来收集参数**，语法为：`...变量名`，这将会声明一个数组并指定其名称，这三个点的语义就是 **“收集剩余的参数并存进指定数组中”**。

例如需要把所有的参数都放到数组 `args` 中：

```js
function sumAll(...args) { // 数组名为 args
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

也可以选择将前几个参数获取为变量，并将剩余的参数收集起来，例如：

```js
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // 剩余的参数被放入 titles 数组中
  // titles = ['Consul', 'Imperator']
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName('Julius', 'Caesar', 'Consul', 'Imperator');
```

**⚠️ 注意：Rest 参数必须在参数列表的末尾**，Rest 参数会收集剩余的所有参数，因此下面这种用法没有意义，并且会导致错误：

```js
function f(arg1, ...rest, arg2) { // arg2 在 ...rest 后面？！
  // Uncaught SyntaxError: Rest parameter must be last formal parameter
}
```

`...rest` 必须写在参数列表的最后。



**arguments 变量**

有一个名为 `arguments` 的特殊对象可以在函数中被访问，该对象**以参数在参数列表中的索引作为键，存储所有参数**。

**`arguments` 对象既是一个类数组，也是一个可迭代对象**。

例如：

```js
function showName() {
  alert(arguments.length);
  alert(arguments[0]);
  alert(arguments[1]);

  // 它是可遍历的
  // for(let arg of arguments) alert(arg);
}

// 依次显示：2，Julius，Caesar
showName('Julius', 'Caesar');

// 依次显示：1，Ilya，undefined（没有第二个参数）
showName('Ilya');
```

在**过去 JavaScript 中不支持 Rest 参数语法**，使用 `arguments` 是获取函数所有参数的唯一方法，现在它仍然有效，我们可以在一些老代码里找到它。

**⚠️ 注意：** 

- **`arguments` 不是数组，所以不支持数组方法**，而 Rest 参数则是数组

- **`arguments` 始终包含所有参数，不能像 Rest 参数那样只截取参数的一部分**

- **箭头函数没有 `arguments`**，访问到的 `arguments` 并不属于箭头函数，而是属于箭头函数外部的 “普通” 函数

  ```js
  function f() {
    let showArg = () => alert(arguments[0]);
    showArg();
  }
  
  f(1); // 1
  ```



**Spread 语法**

例如内建函数 `Math.max` 会返回参数中最大的值：

```js
alert( Math.max(3, 5, 1) ); // 5
```

如果有一个数组，直接传入 `Math.max` 是不会奏效的，因为 `Math.max` 期望的是列表形式的数值型参数，而不是一个数组：

```js
let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN
```

这时可以使用 **Spread 语法**解决这个问题，它看起来和 Rest 参数很像，也使用 `...`，**但是二者的用途完全相反**。



当在函数中使用 `...arr` 时，它会把可迭代对象 `arr` “展开” 到参数列表中：

```js
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5（spread 语法把数组转换为参数列表）
```



可以用这种方式传递多个可迭代对象：

```js
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8
```



可以将 Spread 语法与常规值结合使用：

```js
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25
```



也可以用 Spread 语法来合并数组：

```js
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15（0，然后是 arr，然后是 2，然后是 arr2）
```



**Spread 语法可以操作任何可迭代对象**，例如将字符串转换为字符数组：

```js
let str = 'Hello';

alert([...str]); // H,e,l,l,o
```



**Spread 语法内部使用了迭代器来收集元素，与 `for..of` 的方式相同**，上面这个例子也可以使用 `Array.from` 来实现：

```js
let str = 'Hello';

// Array.from 将可迭代对象转换为数组
alert( Array.from(str) ); // H,e,l,l,o
```

上述运行结果与 `[...str]` 相同，**不过 `Array.from(obj)` 和 `[...obj]` 存在一个细微的差别：**

- `Array.from` **适用于类数组对象也适用于可迭代对象**

- Spread 语法在**需要元素的上下文（例如：数组、函数调用）**中使用，**只能用于可迭代对象**，在**需要属性（键值对）的上下文**中使用，**可以用于任何对象**

  ```js
  let range = {
    from: 1,
    to: 5
  };
  
  range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  const spreadInArr = [ ...range ]; // 需要元素的上下文
  const spreadInObj = { ...range }; // 需要键值对的上下文
  console.log(spreadInArr, spreadInObj);
  
  // [1, 2, 3, 4, 5]
  // {from: 1, to: 5, Symbol(Symbol.iterator): ƒ}
  ```

  所以**对于将一些 “东西” 转换为数组的任务，`Array.from` 更加通用**。



**复制 array /object**

Spread 语法可以做与 `Object.assign()` 同样的事情（**浅拷贝对象**）。

```js
let arr = [1, 2, 3];

let arrCopy = [...arr]; // 将数组 Spread 到参数列表中，然后将结果放到一个新数组

// 两个数组中的内容相同吗？
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// 两个数组相等吗？
alert(arr === arrCopy); // false（它们的引用是不同的）

// 修改我们初始的数组不会修改副本：
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3
```

也可以使用同样的方式来复制一个对象：

```js
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // 将对象 Spread 到参数列表中，然后将结果返回到一个新对象

// 两个对象中的内容相同吗？
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// 两个对象相等吗？
alert(obj === objCopy); // false（它们的引用是不同的）

// 修改我们初始的对象不会修改副本：
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
```

这种方式比使用 `let arrCopy = Object.assign([], arr)` 复制数组，或使用 `let objCopy = Object.assign({}, obj)` 复制对象来说更为简便，所以只要情况允许，**更推荐使用它**。



**如何区分 Rest 语法和 Spread 语法**

- 若 `...` 出现在**函数参数列表的最后**，它是 Rest 语法，它会把参数列表中剩余的参数收集到一个数组
- 若 `...` 出现在**函数调用或类似的表达式**中，那它就是 Spread 语法，它会把一个数组展开为列表



## 变量作用域，闭包

JavaScript 中函数被创建之后，外部变量发生了变化会怎样？函数会获得新值还是旧值？

函数作为参数（argument）传递并在代码中的另一个位置调用它，该函数将访问的是新位置的外部变量吗？



**代码块**

如果在代码块 `{...}` 内声明了一个变量，那这个变量只能会在该代码块内可见，例如：

```js
{
  let message = 'Hello'; // 只在此代码块内可见

  alert(message); // Hello
}

alert(message); // Uncaught ReferenceError: message is not defined
```

可以用它来隔离一段代码，该代码执行自己的任务，并使用仅属于自己的变量：

```js
{
  // 显示 message
  let message = 'Hello';
  alert(message);
}

{
  // 显示另一个 message
  let message = 'Goodbye';
  alert(message);
}
```

**⚠️ 注意：** 如果没有代码块隔离，上述代码将会报错。

```js
// 显示 message
let message = 'Hello';
alert(message);

// 显示另一个 message
let message = 'Goodbye'; // Uncaught SyntaxError: Identifier 'message' has already been declared
alert(message);
```

因为 `let` 声明的变量无法重复声明，`const` 也是同理。



**对于 `if`，`for` 和 `while` 等，在 `{...}` 中声明的变量也仅在内部可见**：

```js
if (true) {
  let phrase = 'Hello!';

  alert(phrase); // Hello!
}

alert(phrase); // Uncaught ReferenceError: phrase is not defined
```

对于 `for` 和 `while` 循环也是这样：

```js
for (let i = 0; i < 3; i++) {
  // 变量 i 仅在这个 for 循环的内部可见
  alert(i); // 0，然后是 1，然后是 2
}

alert(i); // Uncaught ReferenceError: i is not defined
```

**⚠️ 注意：** 从视觉上看，`let i` 位于 `{...}` 之外，但 **`for` 构造很特殊：在其中声明的变量被视为块的一部分**。



**嵌套函数**

如果一个函数是在另一个函数中创建的，该函数就被称为 **“嵌套” 函数**。

例如：

```js
function sayHiBye(firstName, lastName) {

  // 辅助嵌套函数使用如下
  function getFullName() {
    return firstName + ' ' + lastName;
  }

  alert( 'Hello, ' + getFullName() );
  alert( 'Bye, ' + getFullName() );

}
```

上述代码中创建**嵌套函数** `getFullName()` 是为了更加方便，它可以访问外部变量，因此可以返回全名。

**也可以返回一个嵌套函数，作为一个新对象的属性或作为结果返回，之后可以在其他地方使用，不论在哪里调用，它仍然可以访问相同的外部变量**，例如：

```js
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
```



**词法环境**

1. **变量**

   在 JavaScript 中，每个**运行的函数，代码块 `{...}` 以及整个脚本**，都有一个被称为**词法环境（Lexical Environment）**的内部（隐藏）的关联对象。

   词法环境对象由两部分组成：

   1. **环境记录（Environment Record）：** 存储所有局部变量作为其属性（包括一些其他信息，例如 `this` 的值）的对象
   2. 对**外部词法环境**的引用：与外部代码相关联

   一个变量只是**环境记录**这个特殊的内部对象的一个属性，**获取或修改变量意味着获取或修改词法环境中的一个属性**

   例如下面这段**没有函数的简单代码**只有一个词法环境：

   ![image-20250630080518003](images/image-20250630080518003.png)

   这个词法环境与整个脚本相关联，也就是所谓的**全局词法环境**。

   上图中矩形表示环境记录（变量存储），箭头表示外部引用，**全局词法环境的没有外部引用**，所以箭头指向了 `null`。

   随着代码开始并继续运行，词法环境发生了变化。

   ![image-20250630080911167](images/image-20250630080911167.png)

   右侧展示了执行过程中全局词法环境的变化：

   1. 当脚本开始运行，词法环境**预先填充了所有声明的变量**

      这些声明的变量处于 **“未初始化（Uninitialized）”** 状态，这是一种特殊的内部状态，这意味着**引擎知道变量，但是在用 `let` 声明前，不能引用它**

   2. 然后 `let phrase` 定义出现了，但它尚未被赋值，因此它的值为 `undefined`，**从这一刻起，就可以使用变量了**

   3. `phrase` 被赋予了一个值

   4. `phrase` 的值被修改

   **⚠️ 注意：**

   - **词法环境是一个规范对象**，只存在于[语言规范](https://tc39.es/ecma262/#sec-lexical-environments)的 “理论” 层面，用于描述事物是如何工作的，**无法在代码中获取该对象并直接对其进行操作**
   - 但 JavaScript 引擎同样可以优化它，比如清除未被使用的变量以节省内存和执行其他内部技巧等
   - 变量暂时无法使用的区域（从代码块的开始到 `let`）有时被称为 **“死区”**

     ```js
     function func() {
       // 引擎从函数开始就知道局部变量 x，
       // 但是变量 x 一直处于“未初始化”（无法使用）的状态，直到遇到 let，此时“死区”结束
       // 因此报错
       console.log(x); // ReferenceError: Cannot access 'x' before initialization
     
       let x = 2;
     }
     ```

   

2. **函数声明**

   一个函数就是一个值，就像变量一样，**不同之处在于函数声明的初始化会被立即完成**。

   当创建了一个词法环境时，**函数声明会立即变为即用型函数**（不像 `let` 那样到了声明处才可以使用），这也就是为什么可以在函数声明之前调用函数原因。

   例如添加一个函数时全局词法环境的初始状态：

   ![image-20250630082908805](images/image-20250630082908805.png)

   **⚠️ 注意：这种行为仅适用于函数声明**，不适用于将函数分配给变量的函数表达式，例如 `let say = function(name)...`。




3. **内部和外部的词法环境**

   **在一个函数运行时，在调用刚开始时**，会自动创建一个新的词法环境以存储这个调用的局部变量和参数。

   例如，对于 `say('John')`，像下面这样（当前执行位置在箭头标记的那一行上）：

   ![image-20250630083805695](images/image-20250630083805695.png)

   在这个函数调用期间，有两个词法环境：**内部一个（用于函数调用）和外部一个（全局）**：

   - 内部词法环境与 `say` 的当前执行相对应，它具有一个单独的属性：`name`，函数的参数，因为调用的是 `say('John')`，所以 `name` 的值为 `'John'`
   - 外部词法环境是全局词法环境，它具有 `phrase` 变量和函数本身

   内部词法环境引用了外部的全局词法环境。

   **当代码要访问一个变量时 —— 首先会搜索内部词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境**。

   如果在任何地方都找不到这个变量，那么**在严格模式下就会报错**（在非严格模式下，为了向下兼容，给未定义的变量赋值会创建一个全局变量）。

   对于上面这个示例，它变量搜索过程如下：

   - 对于 `name` 变量，当 `say` 中的 `alert` 试图访问 `name` 时，会立即在内部词法环境中找到它
   - 当它试图访问 `phrase` 时，因为内部没有 `phrase`，它顺着对外部词法环境的引用找到了它

   ![image-20250630084617989](images/image-20250630084617989.png)

   

4. **返回函数**

   回到前面 `makeCounter` 的例子：

   ```js
   function makeCounter() {
     let count = 0;
   
     return function() {
       return count++;
     };
   }
   
   let counter = makeCounter();
   ```

   每次 `makeCounter()` 调用的开始，都会创建一个新的词法环境对象，以存储该 `makeCounter` 运行时的变量。

   因此，有两层嵌套的词法环境，就像上面的示例一样：

   ![image-20250630084919093](images/image-20250630084919093.png)

   不同的是，在执行 `makeCounter()` 的过程中创建了一个仅占一行的嵌套函数：`return count++`，但尚未运行它，只是创建了它。

   **JavaScript 中所有函数 “诞生” 时都会记住创建它们的词法环境**，所有函数都有名为 `[[Environment]]` 的隐藏属性，该属性保存了对创建该函数的词法环境的引用。

   ![image-20250630085216674](images/image-20250630085216674.png)

   所以 `counter.[[Environment]]` 有对 `{count: 0}` 词法环境的引用，这就是函数记住它创建于何处的方式，与函数被在哪儿调用无关，**`[[Environment]]` 引用在函数创建时被设置并永久保存**。
   
   当调用 `counter()` 时，会为该调用创建一个新的词法环境，并且**其外部词法环境引用获取于 `counter.[[Environment]]`**：
   
   ![image-20250630102907080](images/image-20250630102907080.png)
   
   所以当 `counter()` 中的代码查找 `count` 变量时，首先搜索自己的词法环境（为空，因为那里没有局部变量），然后是外部 `makeCounter()` 的词法环境，并且**在哪里找到就在哪里修改**。
   
   **在变量所在的词法环境中更新变量。**
   
   最后执行的状态为：
   
   ![image-20250630103125757](images/image-20250630103125757.png)
   
   如果调用 `counter()` 多次，`count` 变量将在同一位置增加到 `2`，`3` 等。



**闭包**

闭包是**指一个函数可以记住其外部变量并可以访问这些变量**，在 JavaScript 中，所有函数（**除了 `new Function` 方式创建的函数**）都是天生闭包的，因为 **JavaScript 中的函数会自动通过隐藏的 `[[Environment]]` 属性记住创建它们的位置**，所以它们都可以访问外部变量。



**垃圾回收**

通常函数调用完成后，会将其对应词法环境和其中的所有变量从内存中删除，因为没有任何对它们的引用，与 JavaScript 中的任何其他对象一样，**词法环境仅在可达时才会被保留在内存中**。

如果有**一个嵌套的函数在函数结束后仍然可达，则它将具有引用词法环境的 `[[Environment]]` 属性**。

例如：

```js
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // g.[[Environment]] 存储了对相应 f() 调用的词法环境的引用
```

**⚠️ 注意：** 如果多次调用 `f()`，并且返回的函数被保存，那么所有相应的词法环境对象也会保留在内存中，例如下面这样：

```js
function f() {
  let value = Math.random();

  return function() { alert(value); };
}

// 数组中的 3 个函数，每个都与来自对应的 f() 的词法环境相关联
let arr = [f(), f(), f()];
```



当词法环境对象变得不可达时，它就会死去，**至少有一个嵌套函数引用它时才存在**。

例如：嵌套函数被删除后，其封闭的词法环境（以及其中的 `value`）也会被从内存中删除。

```js
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // 当 g 函数存在时，该值会被保留在内存中

g = null; // 现在内存被清理了，因为嵌套函数没了，也就没了 [[Environment]] 属性引用封闭的词法环境（不可达）
```



**实际开发中的优化**

理论上当函数可达时，它外部的所有变量也都将存在。

但**在实际中，JavaScript 引擎会试图优化它**，会分析变量的使用情况，**如果从代码中可以明显看出有未使用的外部变量，那么就会将其删除**。

**在 V8（Chrome，Edge，Opera）中的一个重要的副作用是，此类变量在调试中将不可用。**

例如打开 Chrome 浏览器的开发者工具，并尝试运行下面的代码，当代码执行暂停时，在控制台中输入 `alert(value)`。

```js
function f() {
  let value = Math.random();

  function g() {
    debugger; // 在 Console 中：输入 alert(value); No such variable!
  }

  return g;
}

let g = f();
g();
```

上述代码理论上应该是可以访问的，但是**引擎把它优化掉了**。

**⚠️ 注意：** 这个不是调试器的 bug，而是 V8 的一个特别的特性。



## var

在 JavaScript 中声明变量有以下三种方式：

- `let`
- `const`
- `var`

**⚠️ 注意：** `var` 是早期 JavaScript 声明变量的一种方式，**现代脚本中一般不再使用它**。



**var 没有块级作用域**

用 `var` 声明的变量，**只有函数作用域和全局作用域，没有块级作用域**。

例如：

```js
if (true) {
  var test = true; // 使用 var 而不是 let
}

alert(test); // true
```

上述代码中 `var` 会**忽略**代码块，所有了一个全局变量 `test`，而 `let` 不会这样：

```js
if (true) {
  let test = true; // 使用 let
}

alert(test); // Uncaught ReferenceError: test is not defined
```



对于循环也是这样的，`var` 声明的变量**没有块级作用域也没有循环局部作用域**：

```js
for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}

alert(i);   // 10，i 在循环结束后仍可见，它是一个全局变量
alert(one); // 1，one 在循环结束后仍可见，它是一个全局变量
```



如果一个代码块位于函数的内部，**`var` 声明的变量的作用域将为函数作用域**：

```js
function sayHi() {
  if (true) {
    var phrase = 'Hello';
  }

  alert(phrase); // Hello，能正常工作
}

sayHi();
alert(phrase); // Uncaught ReferenceError: phrase is not defined
```

 **`var` 可以穿透了 `if`，`for` 和其它代码块**，是因为早期 JavaScript 中没有词法环境。



**var 允许重新声明**

`let` 声明变量在同一个作用域下将同一个变量重复声明两次，则会出现错误：

```js
let user;
let user; // SyntaxError: Identifier 'user' has already been declared
```

但是使用 `var` 可以重复声明一个变量，如果对一个已经声明的变量使用 `var`，这条新的声明语句的 `var` 会被忽略。

```js
var user = 'Pete';
var user = 'John'; // 这个 var 无效（因为变量已经声明过了）

alert(user); // John
```



**var 声明的变量，可以在其声明语句前被使用**

在函数开始的时候，就会处理 `var` 声明（脚本启动对应全局变量），简单来说就是 **`var` 声明的变量会在函数开头被定义，与它在代码中定义的位置无关**。

例如：

```js
function sayHi() {
  phrase = 'Hello';

  alert(phrase); // Hello

  var phrase;
}
sayHi();
```

在技术上等价于下面的代码：

```js
function sayHi() {
  var phrase;
  
  phrase = 'Hello';

  alert(phrase); // Hello
}
sayHi();
```



在代码块中的也是一样：

```js
function sayHi() {
  phrase = 'Hello';

  if (false) {
    var phrase;
  }

  alert(phrase); // Hello
}
sayHi();
```

等价于

```js
function sayHi() {
  var phrase;
  
  phrase = 'Hello';

  if (false) {
  }

  alert(phrase); // Hello
}
sayHi();
```

`var` 的这种行为被称为 **“提升”**（英文为 “hoisting” 或 “raising”），所有的 `var` 都被提升到函数的顶部。

**⚠️ 注意：** 声明会被提升，但是赋值不会。

例如：

```js
function sayHi() {
  alert(phrase);  // undefined

  var phrase = 'Hello';
}

sayHi();
```

等价于

```js
function sayHi() {
  var phrase;
  
  alert(phrase); // undefined

  phrase = 'Hello';
}

sayHi();
```

上述代码中声明在函数刚开始执行的时候（“提升”）就被处理了，所以 `phrase` 变量存在不会报错，但是它还没赋值，所以显示 ` undefined`。



**IIFE**

**因为过去 `var` 声明的变量没有块级作用域**，所以程序员们就发明了一种**模仿块级作用域的方法**，这种方法被称为 **“立即调用函数表达式”**（immediately-invoked function expressions，简称 **IIFE**）。

看起来像这样：

```js
(function() {
  var message = 'Hello';
  alert(message); // Hello
})();
```

上述代码创建了一个函数表达式并立即调用，所以代码立即执行并拥有了自己的私有变量。



这里函数表达式被括号 `(function {...})` 包裹起来，是因为当 JavaScript 引擎在主代码中遇到 `function` 时，会把它当成一个函数声明的开始，但是函数必须要有函数名，所以就会导致错误：

```js
// 尝试声明并立即调用一个函数
function() { // SyntaxError: Function statements require a function name
  var message = 'Hello';
alert(message);
}();
```

即使给它加上了函数名，它仍然不工作：

```js
function go() { // SyntaxError: Unexpected token ')'
  var message = 'Hello';
  alert(message);
}(); // 不能立即调用函数声明
```

所以需要使用圆括号把该函数表达式包起来，来告诉 JavaScript，这个函数是在另一个表达式的上下文中创建的，因此它是一个函数表达式，它不需要函数名，可以立即调用。

除了使用括号，还可以使用其它方式来告诉 JavaScript，这里用的是函数表达式：

```js
// 创建 IIFE 的方法

(function() {
  alert('Parentheses around the function');
})();

(function() {
  alert('Parentheses around the function');
}());

!function() {
  alert('Parentheses around the function');
}();

+function() {
  alert('Parentheses around the function');
}();
```

上面的所有情况中，都声明了一个函数表达式并立即运行它。

**⚠️ 注意：** 如今没有理由编写这样的代码。



## 全局对象

全局对象提供可以在任何地方使用的变量和函数，**默认情况下，这些全局变量内建于语言或环境中**。

在浏览器中，全局对象是 `window`，在 Node.js 中，全局对象是 `global`，其它环境可能用的是别的名字。

`globalThis` 最近作为**全局对象的标准名称**加入到了 JavaScript 中，**所有环境都应该支持该名称**，所有主流浏览器都支持它。

如果脚本只在浏览器中运行，只要使用 `window` 即可，如果可能会在其它环境中运行，最好使用 `globalThis`。

全局对象的所有属性都可以被直接访问：

```js
alert('Hello');
// 等同于
window.alert('Hello');
```

**在浏览器中，使用 `var`（而不是 `let/const`）声明的全局函数和变量会成为全局对象的属性**。

```js
var gVar = 5;
alert(window.gVar); // 5（成为了全局对象的属性）
```

**函数声明（特指在主代码流中具有 `function` 关键字的语句，而不是函数表达式）也有这样的效果**。

**⚠️ 注意：** 不要依赖这种行为，这种行为是出于兼容性而存在的，现代脚本使用 JavaScript modules 则会发生这种事情。

如果使用 `let` 就不会发生这种情况：

```js
let gLet = 5;

alert(window.gLet); // undefined（不会成为全局对象的属性）
```

如果一个值非常重要，想在全局范围内可用，可以直接将其作为属性写入：

```js
// 将当前用户信息全局化，以允许所有脚本访问它
window.currentUser = {
  name: 'CodePencil'
};

// 代码中的另一个位置
alert(currentUser.name); // CodePencil

// 如果也有一个名为 currentUser 的局部变量，最好从 window 显式地获取它
alert(window.currentUser.name); // CodePencil
```

**⚠️ 注意：**

- **一般不建议使用全局变量，全局变量应尽可能的少**，与使用外部变量或全局变量相比，函数获取 “输入” 变量并产生特定 “输出” 的代码设计更加清晰，不易出错且更易于测试
- 推荐使用直接的方式访问全局对象的属性，如 `window.x`。



**使用 polyfills**

可以使用全局对象来测试对现代语言功能的支持。

例如，测试是否存在内建的 `Promise` 对象（在版本特别旧的浏览器中不存在）：

```js
if (!window.Promise) {
  alert('您的浏览器非常旧！');
}
```

如果没有，可以创建 polyfills：**添加环境不支持但在现代标准中存在的功能**。

```js
if (!window.Promise) {
  window.Promise = ... // 定制实现现代语言功能
}
```



## 函数对象，NFE

在 JavaScript 中，函数的类型是对象，可以把函数想象为可被调用的 **“行为对象（action object）”**，不仅可以调用它们，还能把它们当作对象来处理：增/删属性，按引用传递等。



**属性 name**

函数对象包含一些常用的属性。

例如函数的名字可以通过属性 `name` 来访问：

```js
function sayHi() {
  alert('Hi');
}

alert(sayHi.name); // sayHi
```

函数的名称赋值逻辑很智能，**即使函数被创建时没有名字，名称赋值的逻辑也能给它赋予一个正确的名字**，然后进行赋值：

```js
const sayHi = function () {
  alert('Hi');
};

alert(sayHi.name); // sayHi
```

当以默认值方式完成赋值时也有效：

```js
function f(sayHi = function() {}) {
  alert(sayHi.name); // sayHi
}

f();
```

在规范中把这种特性叫做**上下文命名**，如果函数自己没有提供，那么在赋值中，会根据上下文来推测一个。

在对象的中的方法也有名字：

```js
const user = {
  sayHi() {
    // ...
  },
  
  sayBye: function() {
    // ...
  },
};

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye
```

**⚠️ 注意：也存在无法推测名字的情况**，属性 `name` 是空的，例如：

```js
// 函数是在数组中创建的
let arr = [function() {}];

alert(arr[0].name); // <空字符串>
```

不过大多数函数都是有名字的。



**属性 length**

函数还有另一个内建属性 `length`，它返回函数参数（**这里的参数特指函数声明时的参数（形参 parameter）**）的个数。

```js
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```

**⚠️ 注意：Rest 参数不参与计数**。

通常在开发中属性 `length` 在操作其它函数中用作**内省/运行时检查**，例如：

当用户提供了自己的答案后，函数会调用那些 `handlers`，可以传入两种 `handlers`：

- 一种是无参函数，它仅在用户给出肯定回答时被调用
- 一种是有参函数，它在两种情况都会被调用，并且返回一个答案

```js
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// 对于肯定的回答，两个 handler 都会被调用
// 对于否定的回答，只有第二个 handler 被调用
ask('Question?', () => alert('You said yes'), result => alert(result));
```

上述代码就是**多态性**的例子，根据参数的类型，或者在具体情景下的 `length` 来做不同的处理。



**自定义属性**

函数也是对象，所以可以添加自定义的属性，例如：

```js
function sayHi() {
  alert('Hi');

  // 计算调用次数
  sayHi.counter++;
}

sayHi.counter = 0; // 初始值

sayHi(); // Hi
sayHi(); // Hi

alert(`调用了 ${sayHi.counter} 次`); // 调用了 2 次
```

**⚠️ 注意：`sayHi.counter = 0` 不会在函数内部定义一个局部变量 `counter`**，只是作为函数对象的属性，属性 `counter` 和变量 `let counter` 是毫不相关的两个东西。



函数属性有时会用来替代闭包，例如下面用闭包实现计数器的例子：

```js
function makeCounter() {
  let count = 0;
  
  return function() {
    return count++;
  }
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
```

可以用函数属性实现相同的功能：

```js
function makeCounter() {
  
  function counter() {
    return counter.count++;
  }
  
  counter.count = 0;
  
  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
```

上述代码中 **`count` 被直接存储在函数里，而不是它外部的词法环境**。

**⚠️ 注意：** 两种写法最大的区别是：闭包写法的 `count` 的值位于外层（函数）变量中，外部的代码无法访问到它，只有嵌套的函数可以修改它，而函数属性方式的 `count` 值可以被外部代码修改，像下面这样：

```js
function makeCounter() {
  
  function counter() {
    return counter.count++;
  }
  
  counter.count = 0;
  
  return counter;
}

let counter = makeCounter();

counter.count = 10; // 外部代码可以直接修改函数的 count 属性
alert( counter() ); // 10
```



**命名函数表达式**

命名函数表达式（NFE，Named Function Expression），**指带有名字的函数表达式的术语**。

例如：

```js
let sayHi = function(who) {
  alert(`Hello, ${who}`);
};
```

可以给这个函数表达式添加一个名字：

```js
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};
```

**⚠️ 注意：** 

- 上述代码**仍然是一个函数表达式**，在 `function` 后面加一个名字 `func` **没有使它成为一个函数声明**

- 上述代码添加的 `func` 有两个特殊的地方：

  1. **它允许函数在内部引用自己**
  2. **它在函数外是不可见的**

  例如：

  ```js
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func('Guest'); // 使用 func 再次调用函数自身
    }
  };
  
  sayHi(); // Hello, Guest
  
  // 但这不工作：
  func(); // ReferenceError: func is not defined
  ```

  虽然大多数情况也可以这样做：

  ```js
  let sayHi = function(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      sayHi('Guest');
    }
  };
  ```

  但是这段代码存在一个问题：**`sayHi` 的值可能会被函数外部的代码改变（原变量被修改），导致内部调用报错：**

  ```js
  let sayHi = function(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      sayHi('Guest'); // Uncaught TypeError: sayHi is not a function
    }
  };
  
  // 原变量 sayHi 被函数外部代码修改
  let welcome = sayHi; 
  sayHi = null;
  
  welcome();
  ```

  所以**给函数表达式添加名字就是为了解决这类问题的**，修复后代码如下：

  ```js
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func('Guest'); // 现在一切正常
    }
  };
  
  let welcome = sayHi;
  sayHi = null;
  
  welcome(); // Hello, Guest
  ```

  `func` 是一个 “内部函数名”，**是函数可以可靠地调用自身的方式**。

  **⚠️ 注意：** 函数声明方式创建的函数没有添加内部名称的语法。



## new Function 语法

该语法是创建函数的一种方式，**通常很少被使用，但有时候只能选择它**。

创建函数的语法：

```js
let func = new Function([arg1, arg2, ...argN], functionBody);
```

该函数是通过使用参数 `arg1...argN` 和给定的 `functionBody` 创建的。

例如：

```js
let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3
```

也没有参数，只有函数体：

```js
let sayHi = new Function('alert("Hello")');

sayHi(); // Hello
```

该方法与其它创建函数的方法相比，最大的不同是：**运行时通过参数传递过来的字符串来创建函数，而非程序员提前写好的函数代码**，也就是说 `new Function` 允许将任意字符串变为函数，例如可以从服务器接收一个新的函数并执行它：

```js
let str = ... 动态地接收来自服务器的代码 ...

let func = new Function(str);
func();
```

**⚠️ 注意：** `new Function` 创建函数的使用场景非常特殊，**只有在从服务器获取代码或者动态地从模板编译函数时才会使用**。



**闭包**

通常 JavaScript 中的闭包是指使用一个特殊的属性 `[[Environment]]` 来记录函数自身的创建时的环境的函数，具体指向了函数创建时的词法环境。

如果使用 `new Function` 创建一个函数，该函数的 `[[Environment]]` 并**不指向函数创建时的词法环境**，而是指向**全局环境**。

所以此类函数**无法访问外部（outer）变量，只能访问全局变量**。

```js
function getFunc() {
  let value = 'test';

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // Uncaught ReferenceError: value is not defined
```

与常规函数的比较：

```js
function getFunc() {
  let value = 'test';

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // test，从 getFunc 的词法环境中获取的
```

`new Function` 之所以这样设计，是因为在编写代码时，`new Function` 中的实际代码是不知道的，可能会从服务器或者其它来源获取，如果这个函数能访问外部（outer）变量，可能会发生以下问题：

通常在将 JavaScript 发布到生产环境的时候，需要先使用**压缩程序（minifier）**对其进行压缩，会删除多余的注释和空格等压缩代码，**其中会将局部变量命名为较短的变量**。

例如，如果一个函数有 `let userName`，压缩程序会把它替换为 `let a`（如果 a 已被占用了，那就使用其他字符），剩余的局部变量也会被进行类似的替换。

一般来说这样的替换是安全的，毕竟这些变量是函数内的局部变量，函数外的任何东西都无法访问它，在函数内部，**压缩程序会替换所有使用了这些变量的代码**，压缩程序很聪明，它会分析代码的结构，而不是呆板地查找然后替换，因此它不会 “破坏” 你的程序。

在这种情况下，如果使 `new Function` 可以访问自身函数以外的变量，它很有可能无法找到重命名（压缩替换后）的 `userName`，因为新函数的创建发生在代码压缩以后，变量名已经被替换了。

**所以即使可以在 `new Function` 中访问外部词法环境，也会受挫于压缩程序。**

**⚠️ 注意：** 在需要向 `new Function` 创建出的新函数传递数据时，**必须显式地通过参数进行传递**，例如：

- 不好的做法

  ```js
  const globalVar = 10; // globalVar 可能会被压缩程序替换被别的名称
  const func = new Function('globalVar', 'return globalVar');
  
  console.log( func() ); // 不安全
  ```

- 好的做法

  ```js
  const globalVar = 10; // globalVar 可能会被压缩程序替换被别的名称，但是最后一行调用中的参数名也会同步被替换
  const func = new Function('globalVar', 'return globalVar');
  
  console.log( func(globalVar) ); // 安全
  ```



**其它创建方式**

由于历史原因，参数也可以按逗号分隔符的形式给出，例如下面三种声明的含义相同：

```js
new Function('a', 'b', 'return a + b'); // 基础语法
new Function('a,b', 'return a + b'); // 逗号分隔
new Function('a , b', 'return a + b'); // 逗号和空格分隔
```



## setTimeout 和 setInterval

有时候不想立即执行函数，而是等待特定一段时间之后再执行，这就是所谓的 **“计划调用（scheduling a call）”**。

有以下两种方式可以实现：

- `setTimeout` 允许将函数**推迟到一段时间间隔之后再执行**
- `setInterval` 允许将函数**每隔一段时间间隔连续重复执行**

**⚠️ 注意：** 上述两个方法**不在 JavaScript 的规范中**，但大多数运行环境都有内建的调度程序，并且提供了这些方法，**所有浏览器以及 Node.js 都支持这两个方法**。



**setTimeout**

语法：

```js
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
```

- **`func|code`：** 要执行的函数或代码字符串， 一般传入的都是函数

  **⚠️ 注意：** 由于历史原因，**支持传入代码字符串，但不推荐使用**。

- **`delay`：** 执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），**默认值是 0**

- **`arg1, arg2...`：** 要传入被执行函数（或代码字符串）的参数列表（**IE9 以下不支持**）

例如：

```js
function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000); // 会在 1 秒后执行
```

带参数的情况：

```js
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, 'Hello', 'John'); // Hello, John
```

**如果第一个参数传入的是字符串，JavaScript 会自动为其创建一个函数**。

```js
setTimeout('alert("Hello")', 1000); // 1 秒后显示 Hello
```

但不推荐使用字符串，上述代码可以使用箭头函数替代：

```js
setTimeout(() => alert('Hello'), 1000); // 1 秒后显示 Hello
```

**⚠️ 注意：** 第一个参数传入一个函数，但不要执行它，例如下面的写法是错误的：

```js
function sayHi() {
  alert('Hello');
}

// 错误
setTimeout(sayHi(), 1000); // 会立即显示 Hello，而不是等待 1 秒后显示
```

**`setTimeout` 期望得到的是一个对函数的引用**，上述代码中的 `sayHi()` 是在执行函数，实际上传入的是 `setTimeout` 的是**函数的执行结果**，在上述代码中也就是 `undefined`，实际上没有任何调度。



**用 clearTimeout 来取消调度**

`setTimeout` 在调用时会返回一个 **“定时器标识符（timer identifier）”**，可以通过使用它来取消执行。

取消调度语法：

```js
let timerId = setTimeout(...);
clearTimeout(timerId);
```

例如：

```js
let timerId = setTimeout(() => alert('永远不会执行'), 1000);
alert(timerId); // 定时器标识符

clearTimeout(timerId);
alert(timerId); // 还是这个标识符（并没有因为调度被取消了而变成 null）
```

**⚠️ 注意：** 定时器标识符在浏览器中是一个数字，但在其它环境中，可能是其它的东西，例如 Node.js 返回的是一个定时器对象，这个对象包含一系列方法，这些方法没有统一的规范定义，所以这没什么问题，针对浏览器环境，定时器在 HTML5 的标准中有详细描述，可以参考[timers section](https://www.w3.org/TR/html5/webappapis.html#timers)。



**setInterval**

`setInterval` 和 `setTimeout` 的语法相同：

```js
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);
```

虽然参数的意义相同，但是 **`setInterval` 不像 `setTimeout` 只能执行一次，而是根据给定的间隔时间周期性执行**。

如果要组织后续的调用，可以使用 **`clearInterval(timerId)`**，例如：

```js
// 每 2 秒重复一次
let timerId = setInterval(() => alert('tick'), 2000);

// 5 秒之后停止
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

**⚠️ 注意：** **alert 弹窗显示的时候计时器依然在进行计时**，在大多数浏览器中，包括 Chrome 和 Firefox，在显示 `alert/confirm/prompt` 弹窗时，内部的定时器仍旧会继续执行，所以在运行上面的代码时，**如果一定时间内没有关掉 `alert` 弹窗，那么在关闭弹窗后，下一个 `alert` 会立即显示，两次 `alert` 之间的时间间隔将小于 2 秒**。



**嵌套的 setTimeout**

周期性调度有两种方式。

一种是使用 `setInterval`，另外一种就是嵌套的 `setTimeout`，例如：

```js
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000);
}, 2000);
```

上述代码中，`setTimeout` 在当前这一次函数执行完时立即调度下一次调用。

**嵌套的 `setTimeout` 要比 `setInterval` 更加灵活**，这种方式可以根据当前执行结果来调度下一次调用，使下一次调用可以与当前这一次不同。

例如：实现一个服务（server），每间隔 5 秒向服务器发送一个数据请求，但如果服务器过载了，那么就要降低请求频率，比如将间隔增加到 10、20、40 秒等。

```js
let delay = 5000;

setTimeout(function request() {
  // ...发送请求...
  
  if(request failed due to server overload) { // 由于服务器过载，请求失败
    // 下一次执行的间隔是当前的 2 倍
    delay *= 2;
  }
  
  setTimeout(request, delay);
}, delay);
```

如果调度的函数占用大量 CPU，**可以测量执行所需要花费的时间，并安排下次调用是应该提前还是推迟**。



**嵌套的 `setTimeout` 相较于 `setInterval` 能够更精确地设置两次执行之间的延时**

对比以下两个代码：

- 使用 `setInterval`

  ```js
  let i = 1;
  
  setInterval(function() {
    func(i++);
  }, 100);
  ```

- 使用嵌套的 `setTimeout`：

  ```js
  let i = 1;
  
  setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
  }, 100);
  ```

对于 `setInterval` 来说，内部的调度程序会每间隔 100 毫秒执行一次 `func(i++)`：

![image-20250703091122257](images/image-20250703091122257.png)

从上图中可以看出，**使用 `setInterval` 时，`func` 函数的实际调用间隔要比代码中设定的时间间隔要短**，因为 `func` 的执行所花费的时间 “消耗” 了一部分间隔时间。

如果 `func` 的执行所花费的时间比我们预期的时间更长，并且超出了 100 毫秒，这种情况下，JavaScript 引擎会等待 `func` 执行完成，然后检查调度程序，如果时间到了，则**立即再次执行它**。

所以在极端情况下，如果函数每次执行时间都超过 `delay` 设置的时间，那么**每次调用之间将完全没有停顿**。



而对于嵌套的 `setTimeout` **就能确保延时的固定**，以下是嵌套的 `setTimeout` 的示意图：

![image-20250703091643166](images/image-20250703091643166.png)

因为**下一次调用是在前一次调用完成时再调度的**。



**垃圾回收和 setInterval/setTimeout 回调（callback）**

当一个函数传入 `setInterval/setTimeout` 时，将**为其创建一个内部引用，并保存在调度程序中**，这样即使这个函数没有其他引用，也能**防止垃圾回收器（GC）将其回收**。

```js
// 在调度程序调用这个函数之前，这个函数将一直存在于内存中
setTimeout(function() {...}, 100);
```

对于 `setInterval`，传入的函数也是一直存在于内存中，**直到 `clearInterval` 被调用**。

**⚠️ 注意：** 函数引用了外部变量（闭包），那么只要这个函数还存在，外部变量也会随之存在，它们可能比函数本身占用更多的内存，因此，当不再需要调度函数时，最好取消它，即使这是个（占用内存）很小的函数。



**零延时的 setTimeout**

有一种特殊的用法：`setTimeout(func, 0)` 或者是 `setTimeout(func)`。

这样调度可以让 `func` 尽快执行，但只有在当前正在执行的脚本执行完成后，调度程序才会调用它，也就是**该函数被调度在当前脚本执行完成“之后” 立即执行**。

```js
setTimeout(() => alert('World'));

alert('Hello');
```

上述代码会显示 `Hello`，然后才是 `World`，之所以会这样，是因为第一行代码 “将调用安排到日程（calendar）0 毫秒处”，但是调度程序只有在当前脚本执行完毕时才会去 “检查日程”，所以先输出 `Hello`，然后才输出 `World`。

**⚠️ 注意：** 零延时实际上不为零，**在浏览器环境下，嵌套定时器的运行频率是受限制的**，根据 [HTML5 标准](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) 所讲：**“经过 5 重嵌套定时器之后，时间间隔被强制设定为至少 4 毫秒”**，可以通过 `timers` 数组记录上一次调用的实际时间：

```js
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // 保存前一个调用的延时
  
  if(start + 100 < Date.now()) { // 100 毫秒之后，显示延时信息
    alert(times);
  } else {
    setTimeout(run); // 否则重新调度
  }
});
// 输出示例
// 0,0,0,0,0,0,5,10,14,19,23,28,32,37,41,46,50,55,60,64,69,73,78,83,87,92,96,101
```

上述代码中 `timer` 数组里存放的是每次定时器运行的时刻与 `start` 的差值，所以数字只会越来越大，实际上前后调用的延时是数组值的差值。示例中前几次都是 `0`，所以 `0 - 0 = 0` 延时为 `0`。

可以看到前面几次定时器是立即执行的，之后可以看到 `0, 5,10,14,19...`，两次调用之间**必须经过 4 毫秒以上的强制延时**。

**使用 `setInterval` 也会发生类似的情况**，`setInterval(f)` 会以零延时运行几次 `f`，然后以 4 毫秒以上的强制延时运行。

这个限制来源于过去，许多脚本都依赖于此，所以这个机制也就存在至今。

但对于服务端的 JavaScript，就没有这个限制，并且还有其它调度即时异步任务的方式，例如 Node.js 的 `setImmediate`，所以**这个限制只针对浏览器**。



**所有的调度方法都不能保证确切的延时**

例如，浏览器内的计时器可能由于许多原因而变慢：

- CPU 过载
- 浏览器页签处于后台模式
- 笔记本电脑用的是省电模式

这些因素，可能会将定时器的最小计时器分辨率（最小延迟）增加到 300ms 甚至 1000ms，具体以浏览器及其设置为准。



## 装饰器和转发，call/apply

JavaScript 在处理函数时提供了非法的灵活性，它们可以被传递，用作对象，也可以**转发（forward）**调用或者**装饰（decorate）**它们。



**透明缓存**

例如有一个 CPU 重负载的函数 `slow(x)`，但它的结果是稳定的，对于相同的 `x`，它总是返回相同的结果。

这时可能希望将结果缓存（记住）下来，以避免在重新计算上花费额外的时间，可以**创建一个包装器（wrapper）函数来为 `slow(x)` 函数增加缓存功能，而不是直接将这个功能添加到 `slow(x)` 中**。

```js
function slow(x) {
  // 这里可能会有重负载的 CPU 密集型工作
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  const cache = new Map();
  
  return function(x) {
    if(cache.has(x)) {
      return cache.get(x);
    }
    
    const result = func(x);
    cache.set(x, result);
    
    return result;
  }
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) 被缓存下来了，并返回结果
alert( 'Again: ' + slow(1) ); // 返回缓存中的 slow(1) 的结果

alert( slow(2) ); // slow(2) 被缓存下来了，并返回结果
alert( 'Again: ' + slow(2) ); // 返回缓存中的 slow(2) 的结果
```

上述代码中 `cachingDecorator` 是一个**装饰器（decorator）**：一个特殊的函数，它接受另一个函数并改变它的行为。

可以为任何函数调用 `cachingDecorator`，它将返回缓存包装器，将缓存代码和函数主代码分开，可以使主函数代码变得更简单。

简单来说使用装饰器有以下几点好处：

- `cachingDecorator` 是可复用的，可以将它应用于其它函数
- 缓存逻辑是独立的，它没有增加 `slow` 本身的复杂性
- 可以组合多个装饰器（其它装饰器将遵循同样的逻辑）



**使用 func.call 设定上下文**

前面的装饰器代码不适用于对象方法，例如：

```js
// 将对 worker.slow 的结果进行缓存
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // 可怕的 CPU 过载任务
    alert('Called with ' + x);
    return x * this.someMethod();
  }
};

function cachingDecorator(func) {
  const cache = new Map();
  
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    
    const result = func(x);
    cache.set(x, result);
    
    return result;
  }
}

alert( worker.slow(1) ); // 原始方法有效

worker.slow = cachingDecorator(worker.slow); // 现在对其使用装饰器

alert( worker.slow(2) ); // Uncaught TypeError: this.someMethod is not a function
```

上述代码再尝试访问 `this.someMethod` 的时候失败了，因为**在调用 `func(x)` 的时候，这样调用函数将得到 `this = undefined`**，跟像下面这样调用相同：

```js
let func = worker.slow;
func(2);
```

本质原因是：**包装器将调用传递给原始方法，但没有上下文 `this`，所以发生了错误**。

要解决这个问题，可以使用一个特殊的内建函数方法 **`func.call(context, …args)`**，它**可以调用函数并显式设置 `this`**。

语法：

```js
func.call(context, arg1, arg2, ...);
```

它运行 `func`，将第一个参数作为 `this`，后面的作为参数（arguments）。

例如下面两个调用几乎相同：

```js
func(1, 2, 3);
func.call(obj, 1, 2, 3)
```

唯一的区别是 `func.call` 还会将 `this` 设置为 `obj`。

例如可以在不同对象的上下文中调用 `sayHi`：

```js
function sayHi() {
  alert(this.name);
}

let user = { name: 'John' };
let admin = { name: 'Admin' };

// 使用 call 将不同的对象传递为 this
sayHi.call(user); // John
sayHi.call(admin); // Admin
```

所以前面的问题只需要像下面这样修改就可以了：

```js
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert('Called with ' + x);
    return x * this.someMethod();
  }
};

function cachingDecorator(func) {
  const cache = new Map();
  
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    
    const result = func.call(this, x); // 现在 this 被正确传递了
    cache.set(x, result);
    
    return result;
  }
}

worker.slow = cachingDecorator(worker.slow); // 现在对其使用装饰器

alert( worker.slow(2) ); // 工作正常
alert( worker.slow(2) ); // 工作正常，没有调用原始函数（使用的缓存）
```



**传递多个参数**

前面的写法只适用于单参数函数，如果要传入多个参数，可以使用如下方式：

```js
let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // 通过多个参数生成 key
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // 通过 Spread 将可迭代对象 arguments 拆分为多个参数

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert( worker.slow(3, 5) ); // 8
alert( 'Again ' + worker.slow(3, 5) ); // 8 (从缓存中获取)
```

除了上面的方法，也可以**使用 `func.apply(this, arguments)` 代替 `func.call(this, ...arguments)`**。

内建方法 `func.apply` 的语法是：

```js
func.apply(context, args);
```

它运行 `func` 设置 `this=context`，并使用**类数组对象 `args` 作为参数列表**。

`call` 和 `apply` 之间唯一的语法区别：**`call` 期望一个参数列表，而 `apply` 期望一个包含这些参数的类数组对象**。

所以以下两个调用是相同的：

```js
func.call(context, ...args);
func.apply(context, args);
```

两者细微的差别：

- Spread 语法 `...` 允许将**可迭代对象** `args` 作为列表传递给 `call`
- `apply` 只接受**类数组** `args`

**⚠️ 注意：** 对于即可迭代又是类数组的对象（例如：数组），`call` 或 `apply` 都可以，**但是 `apply` 可能会更快些，因为大多数 JavaScript 引擎在内部对其进行了优化**。



**呼叫转移（调用转发）**

将所有参数连同上下文一起传递给另一个函数被称为 “呼叫转移（call forwarding）”。

它的最简形式：

```js
let wrapper = function() {
  return func.apply(this, arguments);
};
```

当在外部代码中调用包装器 `wrapper` 时，它与原始函数 `func` 的调用是无法区分的（几乎一样）。

**⚠️ 注意：** 呼叫转移通常是使用 `apply` 完成的。



**借用方法**

前面代码中哈希函数目前只适用于两个参数，例如：

```js
function hash(args) {
  return args[0] + ',' + args[1];
}
```

如果想让它适用于任何数量的 `args`，使用 `arr.join` 方法是不行的：

```js
function hash(args) {
  return args.join(','); // TypeError: arguments.join is not a function
}
```

因为前面中代码中，调用 `hash(arguments)`，`arguments` 对象虽然既是可迭代对象也是类数组对象，但**它不是真正的数组，没有数组方法 `join`**。

这时可以使用一种简单的方法使用数组的 `join` 方法：

```js
function hash() {
  alert( [].join.call(arguments) ); // 1,2
}

hash(1, 2);
```

上述代码中所使用的技巧被称为**方法借用（method borrowing）**，从常规数组 `[].join` 借用方法 `join`，并使用 `[].join.call` 在 `arguments` 的上下文中运行它。

为什么它有效，原生方法 `arr.join(glue)` 的内部算法非常简单，具体内部算法如下：

1. 让 `glue` 成为第一个参数，如果没有参数，则使用逗号 `','`
2. 让 `result` 为空字符串
3. 将 `this[0]` 添加到 `result` 中
4. 添加 `glue` 和 `this[1]` 到 `result` 中
5. 添加 `glue` 和 `this[2]` 到 `result` 中
6. ...以此类推，直到 `this.length` 项目被粘在一起
7. 返回 `result`

从技术上讲，**这种编写方式允许是故意允许任何类数组的 `this`**，这不是巧合，很多方法都遵循这种做法。



**装饰器和函数属性**

通常来说使用装饰器替换一个函数或者一个方法是安全的，**如果原始函数有属性，则装饰后的函数将不再提供这些属性**，所以使用时需要小心。

一些装饰器会提供自己的属性，例如装饰器会计算一个函数被调用了多少次以及花费了多少时间，并通过包装器属性公开（expose）这些信息。

**也存在一种创建装饰器的方法，可以保留函数属性的访问权限，但需要使用特殊的 `Proxy` 对象来包装函数**。



**防抖装饰器**

防抖（Debounce）是**在 ms 毫秒（如 300ms）后没有再触发动作后才真正执行一次函数**。

- **延迟执行**

  ```js
  function debounce(f, ms) {
    let timer = null;
  
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  ```

  每次触发都会清除 timer，只有最后一次生效。

  **使用场景：** 输入框搜索，用户停止输入才触发。

  

- **立即执行**

  ```js
  function debounce(f, ms) {
    let isCooldown = false; // 判断是否处于冷却时间
  
    return function () {
      if (isCooldown) return;
  
      isCooldown = true;
      f.apply(this, arguments);
  
      setTimeout(() => {
        isCooldown = false;
      }, ms);
    };
  }
  ```

  第一次触发立即执行，之后冷却时间内触发无无效。

  **使用场景：** 防止按钮连点，提交重复请求。



**节流装饰器**

节流（Throttle）是**指每 ms 毫秒（如 300ms）执行执行一次**。

```js
function throttle(f, ms) {
  let savedThis = null;
  let savedArgs = null;
  let isThrottle = false;

  function wrapper() {
    if (isThrottle) {
      savedThis = this;
      savedArgs = arguments;
      return;
    }

    isThrottle = true;
    f.apply(this, arguments);

    setTimeout(() => {
      isThrottle = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
      }
    }, ms);
  }

  return wrapper;
}
```

上述代码**每隔给定间隔时间最多调用一次，并且最后一次调用不能忽略**。

**使用场景：** 页面滚动（scroll）事件、窗口大小调整（resize）、拖拽（drag）事件、鼠标移动事件。



## 函数绑定

当对象的方法作为回调进行传递时，经常会出现丢失 `this` 的问题。



**丢失 this**

例如使用 `setTimeout` 时会出现 `this` 丢失的情况：

```js
let user = {
  firstName: 'CodePencil',
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```

上述代码中虽然 `setTimeout` 获取到的函数 `user.sayHi`，但是它与对象分离开了，所以最后一行等价于：

```js
let f = user.sayHi;
setTimeout(f, 1000); // 丢失了 user 上下文
```

**⚠️ 注意：浏览器中 `setTimeout` 有些特殊，它在调用函数时，会设置 `this = window`**（对于 Node.js，`this` 则会变为计时器（timer）对象），所以**上述代码中 `this.firstName` 试图获取的是 `window.firstName`，但这个变量并不存在**，在其它类似的情况下，通常 `this` 会变为 `undefined`。



**包装器**

要解决前面的问题，最简单的方案是可以**使用一个包装函数**：

```js
let user = {
  firstName: 'CodePencil',
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000); //  Hello, CodePencil!
```

上述代码存在一个小漏洞，如果在 `setTimeout` 触发之前，`user` 的值发生了改变，将会调用错误的对象：

```js
let user = {
  firstName: 'CodePencil',
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000); // Another user in setTimeout!

// user 的值在不到 1 秒的时间内发生了改变
user = {
  sayHi() { alert('Another user in setTimeout!'); }
};
```

使用 `bind` 解决方案就不存在这个问题。



**bind**

函数提供一个内建方法 `bind`，可以绑定 `this`。

语法：

```js
let boundFunc = func.bind(context);
```

**`func.bind(context)` 的返回结果是一个类似于函数的 “外来对象”，可以像函数一样被调用，并且透明地（transparently）将调用传递给 `func` 并设定 `this=context`**。

简单来说 `boundFunc` 调用就像绑定了 `this` 的 `func`。

例如：

```js
let user = {
  firstName: 'CodePencil',
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // CodePencil
```

上述代码中 `func.bind(user)` 作为 `func` 的 “绑定的（bound）变体”，绑定了 `this=user`。

**所有的参数（arguments）都被 “原样” 传递给了初始的 `func`**，例如：

```js
let user = {
  firstName: 'CodePencil',
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// 将 this 绑定到 user
let funcUser = func.bind(user);

funcUser('Hello'); // Hello, CodePencil
```

在 `setTimeout` 触发之前，`user` 的值发生了改变，**函数上下文依旧是正确**的：

```js
let user = {
  firstName: 'CodePencil',
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user);

// 可以在与对象分离的情况下运行它
sayHi(); // Hello, CodePencil!

setTimeout(sayHi, 1000); // Hello, CodePencil!

// user 的值在不到 1 秒的时间内发生了改变
user = {
  sayHi() { alert('Another user in setTimeout!'); }
};
```

上述代码中将 `sayHi` 方法绑定到了 `user`，即使 `user` 对象不到 1 秒内发生了改变，**但 `sayHi` 还是会使用预先绑定（pre-bound）的值，该值是对旧的 user 对象的引用**，所以函数上下文还是正确的。

**⚠️ 注意：** 一个函数**不能被重绑定（re-bound）**，例如：

```js
function f() {
  alert(this.name);
}

f = f.bind( {name: 'John'} ).bind( {name: 'Pete'} );

f(); // John
```



**bindAll**

如果一个对象有很多方法，并且打算将它们都传递出去，可以在一个循环中完成所有方法的绑定：

```js
for (let key in user) {
  if (typeof user[key] === 'function') {
    user[key] = user[key].bind(user);
  }
}
```

也可以使用 lodash 中的[_.bindAll(object, methodNames)](http://lodash.com/docs#bindAll)。



**部分（应用）函数（Partial functions）**

不仅可以绑定 `this`，还可以绑定参数（arguments）。

`bind` 完整的语法如下：

```js
let bound = func.bind(context, [arg1], [arg2], ...);
```

它允许将上下文绑定为 `this`，以及绑定函数的部分参数。

例如：

```js
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // 等同于 mul(2, 3) = 6
alert( double(4) ); // 等同于 mul(2, 4) = 8
alert( double(5) ); // 等同于 mul(2, 5) = 10
```

上述代码中对 `mul.bind(null, 2)` 的调用创建了一个新函数 `double`，它将调用传递到 `mul`，将 `null` 绑定为上下文，**并将 `2` 绑定为第一个参数**，并参数均被 “原样” 传值。

这种方式被称为[函数的部分应用（partial function application）](https://en.wikipedia.org/wiki/Partial_application)，**通过绑定现有的函数的一些参数来创建一个新函数**。

为什么需要创建一个部分应用函数？

- 可以创建一个具有可读性高的名字（`double`，`triple`）的独立函数，**不必每次都提供一个固定的参数，因为参数已经绑定了**
- 当有一个非常灵活的函数，并希望有一个不那么灵活的变型时，可以使用部分应用函数

**⚠️ 注意：** 这里实际上没有用到 `this`，但是 `bind` 需要它，所以**必须要传入 `null` 之类的东西**。



**没有上下文情况下的 partial**

有时候就想绑定一些参数（arguments），不想绑定上下文 `this`，**但原生的 `bind` 不允许这种情况，不可以省略上下文直接跳到参数（arguments）**，导致只能使用如下方式绑定：

```js
let user = {
  firstName: 'CodePencil',
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// 必须要绑定 user 上下文，无法省略上下文直接绑定参数
user.sayNow = user.say.bind(user, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow('Hello'); // [8:36] CodePencil: Hello!
```

可以使用如下方式实现一个仅绑定参数（arguments）的函数 `partial`：

```js
function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  }
}
```

具体使用：

```js
let user = {
  firstName: 'CodePencil',
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

user.sayNow = partial(user.sayNow, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow('Hello'); // [8:36] CodePencil: Hello!
```

也可以使用来自 lodash 库的[_.partial](https://lodash.com/docs#partial)实现。



## 深入理解箭头函数

箭头函数不仅可以编写简洁的代码，还具有一些非常特殊且有用的特性。



**箭头函数没有 this**

**箭头函数没有自己的 `this`，如果访问 `this` 会从外部获取**，例如：

```js
let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  
  showList() {
    this.students.forEach(student => alert(this.title + ': ' + student));
  },
};

group.showList();

// Our Group: John
// Our Group: Pete
// Our Group: Alice
```

上述代码中 `forEach` 中使用的是箭头函数，所以 `this.title` 和外部方法 `showList` 的完全一样，都是 `group.title`，如果使用正常函数，会出现以下错误：

```js
'use strict';

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  
  showList() {
    this.students.forEach(function(student) {
      alert(this.title + ': ' + student);
    });
  },
};

group.showList(); // Uncaught TypeError: Cannot read properties of undefined (reading 'title')
```

因为 `forEach` 中运行的函数的 `this` 为默认值 `this=undefined`，所以出现 `undefined.title` 的情况导致报错。

**简单来说：箭头函数中 `this` 值取决于定义时的作用域，而非执行时的作用域**。



**不能对箭头函数进行 `new` 操作**

因为箭头函数不具有 `this`，所以也就意味着箭头函数不能用作构造器，无法通过 `new` 调用。



**箭头函数 VS `bind`**

箭头函数 `=>` 与使用 `.bind(this)` 调用的常规函数有以下区别：

- `.bind(this)` 创建了一个该函数的 “绑定版本”
- 箭头函数 `=>` 没有任何绑定，箭头函数没有自身的 `this`，**`this` 的查找与常规变量的搜索完全相同：在外部词法环境中查找**



**箭头函数没有 arguments**

箭头函数没有 `arugments` 变量。

当需要使用当前的 `this` 和 `arguments` 转发一个调用时，对装饰器（decorators）来说非常有用。

例如：

```js
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred	= defer(sayHi, 2000);
sayHiDeferred('CodePencil'); // 2 秒后显示：Hello, CodePencil
```

如果不使用箭头函数，可以像下面这样写：

```js
function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  }
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred	= defer(sayHi, 2000);
sayHiDeferred('CodePencil'); // 2 秒后显示：Hello, CodePencil
```

**⚠️ 注意：** 在上述代码中，**必须创建额外的变量 `args` 和 `ctx`**，以便 `setTimeout` 内部的函数可以获取它们。



## 属性标志和属性描述符

属性描述符是一个完整的对象，可以通过 `Object.getOwnPropertyDescriptor` 获取，而属性标志则是属性描述符对象中的属性，例如：`writable`、`enumerable`、`configurable` 等都是属性标志。



**属性标志**

对象属性（properties），除了 `value` 外，还有三个特殊的特性（attributes），也就是所谓的 **“标志”**：

- **`writable`** — 如果为 `true`，表示属性的值可以被修改，否则它是只可读的
- **`enumerable`** — 如果为 `true`，表示属性会在循环中列出，否则不会被列出
- **`configurable`** — 如果为 `true`，表示属性可以被删除，**其它特性**也可以被修改，否则不可以

**⚠️ 注意：** 平常很少使用它们，当使用 “常用的方式” 创建一个属性时，它们都为 `true`，可以随时更改它们。



可以通过 `Object.getOwnPropertyDescriptor` 方法查询有关属性的**完整**信息。

语法：

```js
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

- **`obj`** — 需要从中获取信息的对象
- **`propertyName`** — 属性的名称

返回值是一个 “属性描述符” 对象：它包含值和所有的标志。

例如：

```js
let user = {
  name: 'CodePencil',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2) );
/* 属性描述符：
{
  "value": "CodePencil",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```



要修改标志，可以使用 `Object.defineProperty`。

语法：

```js
Object.defineProperty(obj, propertyName, descriptor);
```

- **`obj`** — 要应用描述符的对象
- **`propertyName`** — 要应用描述符的属性名称
- **`descriptor`** — 要应用的 “属性描述符” 对象

如果该属性存在，`defineProperty` 会更新其标志，否则它会使用给定的值和标志创建属性，在这种情况下，如果没有提供标志，会默认所有标志全都为 `false`。

例如：

```js
let user = {};

Object.defineProperty(user, 'name', {
  value: 'CodePencil',
})

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2) );
/* 属性描述符：
{
  "value": "CodePencil",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
```

上述代码中创建了一个 `name` 属性，该属性的所有标志都为 `false`，**如果这不是想要的，最好在 `descriptor` 中将它们设置为 `true`**。



**只读属性**

通过修改 `writable` 标志来把 `user.name` 设置为只读（`user.name` 不能被重新赋值）：

```js
let user = {
  name: 'CodePencil',
};

Object.defineProperty(user, 'name', {
  writable: false,
})

user.name = 'Pete'; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

上述代码中 `user.name` 属性被设置为只读，没有人可以改变该属性的值，除非使用 `Object.defineProperty` 来修改 `user.name` 的标志。

**⚠️ 注意：** 只有严格模式下才会出现错误，**在非严格模式下，对只读属性赋值不会出现错误，但操作仍不会成功，违法标志行为的操作会被默默忽略**。



**不可枚举**

通常对象中内建的 `toString` 是不可枚举的，不会在 `for..in` 中显示，但是如果是自己添加的 `toString`，默认情况下会显示在 `for..in` 中，例如：

``` js
let user = {
  name: 'CodePencil',
  toString() {
    return this.name;
  },
};

for (let key in user) alert(key); // name, toString
```

如果不想然它出现，可以设置 `enumerable: false`，之后就不会出现在 `for..in` 循环中了，跟内建的 `toString` 一样：

```js
let user = {
  name: 'CodePencil',
  toString() {
    return this.name;
  },
};

Object.defineProperty(user, 'toString', {
  enumerable: false,
});

for (let key in user) alert(key); // name
```

**不可枚举的属性同样也会被 `Object.keys(obj)` 排除**，例如：

```js
alert(Object.keys(user)); // name
```



**不可配置**

不可配置标志（`configurable: false`）有时也会预设在内建的对象和属性中。

**不可配置的属性不能被删除，它的特性（attribute）不能被修改**。

例如：`Math.PI` 是只读的，不可枚举和不可配置：

```js
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2) );
/* 属性描述符：
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
```

所以开发人员无法修改 `Math.PI` 的值或者覆盖它。

```js
Math.PI = 3; // TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
```

也无法将 `Math.PI` 的 `writable` 标志改为 `true`。

```js
Object.defineProperty(Math, 'PI', { writable: true }); // Uncaught TypeError: Cannot redefine property: PI
```

**⚠️ 注意：** 

- **使属性变为不可配置是一条单行道，无法通过 `defineProperty` 再把它改回来**

- **`configurable: false` 防止更改和删除属性标志，但是允许更改对象的值**

  ```js
  let user = {
    name: 'CodePencil',
  };
  
  Object.defineProperty(user, 'name', {
    configurable: false,
  });
  
  user.name = 'Pete'; // 正常工作
  delete user.name; // Uncaught TypeError: Cannot delete property 'name' of #<Object>
  ```

  也可以将 `user.name` 设置为一个 “永不可改” 的常量，就像内建的 `Math.PI`：

  ```js
  let user = {
    name: 'CodePencil',
  };
  
  Object.defineProperty(user, 'name', {
    writable: false,
    configurable: false
  });
  
  // 不能修改 user.name 或它的标志
  // 下面的所有操作都不起作用：
  user.name = 'Pete';
  delete user.name;
  Object.defineProperty(user, 'name', { value: 'Pete' });
  ```

  **⚠️ 注意：对于不可配置的属性，唯一可行的标志更改就是将 `writable: true` 改成 `writable: false`**，这是一个小例外，可以防止其值被修改，但无法反向行之（`writable: false` 改成 `writable: true`）。



**Object.defineProperties**

`Object.defineProperties` 允许一次定义多个属性。

语法：

```js
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
```

例如：

```js
Object.defineProperties(user, {
  name: { value: 'John', writable: false },
  surname: { value: 'Smith', writable: false },
  // ...
});
```

可以一次性设置多个属性。



**Object.getOwnPropertyDescriptors**

要一次获取所有属性描述符，可以使用 `Object.getOwnPropertyDescriptors(obj)` 方法。

它与 `Object.defineProperties` 一起可以用作克隆对象的 “标志感知” 方式：

```js
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

通常我们使用如下方式克隆对象：

```js
for (let key in obj) {
  clone[key] = obj[key];
}
```

但是这不能复制属性的标志，**如果需要一个 “更好” 的克隆，`Object.defineProperties` 是首选**。

另外一个区别是 `for..in` 会忽略 symbol 类型和不可枚举属性，但是 **`Object.getOwnPropertyDescriptors(obj)` 返回包含 symbol 类型的和不可枚举的属性在内的所有属性描述符**。



**设定一个全局的密封对象**

属性描述符在单个属性上工作，也有一些限制访问整个对象的方法：

- [**Object.preventExtensions(obj)**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) — 禁止向对象**添加属性**
- [**Object.seal(obj)**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) — 禁止向对象**添加/删除属性**，为现有的所有属性设置 `configurable: false`
- [**Object.freeze(obj)**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) — 禁止向对象**添加/删除/更改属性**，为现有的所有属性设置 `configurable: false, writable: false`

还有针对它们的测试：

- [**Object.isExtensible(obj)**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) — 如果对象**添加属性**被禁止，则返回 `false`，否则返回 `true`
- [**Object.isSealed(obj)**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) — 如果对象**添加/删除属性**被禁止，**并且所有的属性都具有 `configurable: false` 时返回 `true`**
- [**Object.isFrozen(obj)**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) — 如果对象**添加/删除/更改属性**被禁止，**并且所有的属性都具有 `configurable: false, writable: false` 时返回 `true`**



## 属性的 getter 和 setter

有两种类型的对象属性：

- **数据属性** — 就是对象的常规属性和方法
- **访问器属性（accessor property）** — 用于获取和设置值的函数，从外部代码看就像是常规属性



**getter 和 setter**

访问器属性由 getter 和 setter 方法表示，在对象字面量中，分别使用 `get` 和 `set` 表示：

```js
const obj = {
  get propName() {
    // 当读取 obj.propName 时，getter 起作用
  },
  
  set propName() {
    // 当执行 obj.propName = value 操作时，setter 起作用
  }
};
```

上述代码中，**当读取 `obj.propName` 时，getter 起作用，当 `obj.propName` 被赋值时，setter 起作用**。



例如给一个对象添加一个 `fullName` 属性，但不想复制粘贴已有的信息，可以使用访问器来实现：

```js
const user = {
  name: 'John',
  surname: 'Smith',
  
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```

从外表来看，访问器属性看起来像一个普通属性，这就是访问器属性的设计思想，不以函数的方式**调用** `user.fullName`，正常**读取**它 getter 在幕后运行。

目前 `fullName` 只有一个 getter，如果尝试赋值操作 `user.fullName = ` 将会出现错误：

```js
const user = {
  name: 'John',
  surname: 'Smith',
  
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

user.fullName = 'Test'; // Uncaught TypeError: Cannot set property fullName of #<Object> which has only a getter
```

上述代码**在严格模式下会出现错误，在非严格模式下错误会被静默忽略，但赋值操作不会生效**。

通过给 `fullName` 添加一个 setter 来修复它：

```js
const user = {
  name: 'John',
  surname: 'Smith',
  
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  
  set fullName(value) {
    [this.name, this.surname] = value.split(' ')
  }
};

// set fullName 将以给定值运行
user.fullName = 'Alice Cooper';

alert(user.name); // Alice
alert(user.surname); // Cooper
```



**访问器描述符**

访问器属性的描述符与数据属性不同。

**对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数**。

所以访问器描述符可能有：

- **`get`** — 一个没有参数的函数，在读取属性时工作
- **`set`** — 带有一个参数的函数，当属性被设置时调用
- **`enumerable`** — 与数据属性的相同
- **`configurable`** — 与数据属性的相同

例如：

```js
const user = {
  name: 'John',
  surname: 'Smith',
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  
  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```

**⚠️ 注意：** 一个属性要么是访问器属性（具有 `get/set` 方法），要么是数据属性（具有 `value`），但**不能两者都是**。

例如尝试在同一个描述符中同时提供 `get` 和 `value`，会出现以下错误：

```js
// Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>
Object.defineProperty({}, 'prop', {
  get() {
    return 1;
  },
  value: 2,
});
```



**更聪明的 getter 和 setter**

gettet/setter 可以用作 “真实” 属性值的包装器，便于对它们进行更多的控制。

例如想要禁止太短的 `user` 的 `name`，可以创建一个 setter `name`，并将值存储在一个单独的属性 `_name` 中：

```js
const user = {
  get name() {
    return this._name;
  },
  
  set name(value) {
    if(value.length < 4) {
      alert('名称太短，至少需要 4 个字符');
      return;
    }
    
    this._name = value;
  }
};

user.name = 'CodePencil';
alert(user.name); // CodePencil

user.name = ''; // 名称太短，至少需要 4 个字符
```

上述代码中 `name` 被存储在 `_name` 属性中，通过 setter 和 getter 进行访问。

**⚠️ 注意：** 从技术上讲，外部代码是可以通过 `user._name` 直接访问 `name`，但是**有一个众所周知的约定，下划线开头的属性通常是内部属性，不应该从对象外部进行访问**。



## 原型继承

有时候想基于一个对象，构建一个新的对象，而不是复制/重新实现原对象的方法，这时可以使用**原型继承（Prototypal inheritance）**。



**[[Prototype]]**

在 JavaScript 中，**对象有一个特殊的隐藏属性 `[[Prototype]]`，它要么为 `null`，要么就是对另一个对象的引用，该对象被称为 “原型”**。

![image-20250712075050791](images/image-20250712075050791.png)

**当从 `object` 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性，这被称为 “原型继承”**。

虽然属性 `[[Prototype]]` 是内部且隐藏的，但是有很多设置它的方法。

其中之一就是**使用特殊的名字 `__proto__`**，像下面这样：

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // 设置了 rabbit.[[Prototype]] = animal
```

这时如果从 `rabbit` 中读取它没有属性，JavaScript 会自动从 `animal` 中获取，例如：

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

alert(rabbit.eats); // true，从原型 animal 中获取的
alert(rabbit.jumps); // true, 从自身 rabbit 中获取的
```

上述代码中试图读取 `rabbit.eats`，因为它不存在于 `rabbit` 中，所以 JavaScript 会顺着 `[[Prototype]]` 引用，在 `animal` 中查找（自下而上）。

![image-20250712080033968](images/image-20250712080033968.png)

所以这里可以说 **“`animal` 是 `rabbit` 的原型”**，或者说 **“`rabbit` 的原型是从 `animal` 继承而来的”**。

因此，`animal` 有许多有用的属性和方法将自动变为在 `rabbit` 中可用，这种特征被称为 **“继承”**。

如果 `animal` 中有一个方法，也可以在 `rabbit` 中被调用：

```js
let animal = {
  eats: true,
  walk() {
    alert('Animal walk');
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// walk 方法是从原型 animal 中获得的
rabbit.walk(); // Animal walk
```

该方法是自动从原型中获得的，像这样：

![image-20250712081048450](images/image-20250712081048450.png)

原型链可以很长：

```js
let animal = {
  eats: true,
  walk() {
    alert('Animal walk');
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

longEar.walk(); // Animal walk
alert(longEar.jumps); // true
```

![image-20250712081350006](images/image-20250712081350006.png)

当在 `longEar` 读取一些不存在的内容时，JavaScript 会先在 `rabbit` 中查找，然后在 `animal` 中查找。

**⚠️ 注意：**

- **引用不能形成循环**，当试图给 `__proto__` 赋值但会导致引用形成闭环时，JavaScript 会抛出错误，例如：

  ```js
  let animal = {
    eats: true,
    walk() {
      alert('Animal walk');
    },
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal,
  };
  
  // 试图循环引用原型
  animal.__proto__ = rabbit; // Uncaught TypeError: Cyclic __proto__ value
  ```

- **`__proto__` 的值可以是对象，也可以是 `null`，其它类型都会被忽略**

- **一个对象只能有一个 `[[Prototype]]`**，一个对象不能从其它两个对象获得继承

- **`__proto__` 是 `[[Prototype]]` 的历史原因留下来的 getter/setter**，`__proto__` 与 `[[Prototype]]` 的**内部不一样，`__proto__` 是 `[[Prototype]]` 的 getter/setter**

  **`__proto__` 属性有点过时了**，它的存在是出于历史原因，现代 JavaScript 中**应该使用函数  `Object.getPrototypeOf/Object.setPrototypeOf` 来取代 `__proto__` 去 get/set 原型**

  根据规范，**`__proto__` 必须仅受浏览器环境的支持，但实际上包括服务端在内的所有环境都支持它，所以使用它是非常安全的**



**写入不使用原型**

原型仅用于读取属性。

对于写入/删除操作直接在对象上进行，而不通过原型去查找。

例如：

```js
let animal = {
  eats: true,
  walk() {
     alert('Animal walk');
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function() {
  alert('Rabbit! Bounce-bounce!');
};

rabbit.walk(); // Rabbit! Bounce-bounce!
```

`rabbit.walk()` 立即在该对象上找到方法并执行，而无需使用原型：

![image-20250712084847077](images/image-20250712084847077.png)

**⚠️ 注意：访问器（accessor）属性是个例外，因为赋值（assignment）操作是由 setter 函数处理的**，所以写入此类属性实际上与调用函数相同，例如：

```js
let user = {
  name: 'John',
  surname: 'Smith',
  
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

alert(admin.fullName); // John Smith

admin.fullName = 'Alice Cooper';

alert(admin.fullName); // Alice Cooper，admin 的内容被修改了
alert(user.fullName); // John Smith，user 的内容被保护了
```



**this 的值**

`this` 的值不受原型的影响。

**无论在哪找到方法：在一个对象还是原型中，方法调用时，`this` 始终是点符号 `.` 前面的对象**。

所以前面的例子中 setter 调用 `admin.fullName = 'Alice Cooper'` 使用 `admin` 作为 `this`，而不是 `user`。

在开发中可能有一个带有很多方法的大对象，并且还有从其继承的对象，当继承的对象运行继承的方法时，它们**仅会修改自己的状态，不会修改大对象的状态**。

例如：

```js
const animal = {
  walk() {
    if (!this.isSleeping) {
      alert('I walk');
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

const rabbit = {
  name: 'White Rabbit',
  __proto__: animal,
};

rabbit.sleep(); // 修改 rabbit.isSleeping

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined（原型中没有此属性）
```

结果示意图：

![image-20250712103704541](images/image-20250712103704541.png)

每个方法调用中的 `this` 都是在调用（点符号前）的对象，所以当数据写入 `this` 时，会将其存储到这些对象中，所以**方法是共享的，但对象状态不是**。



**for..in 循环**

`for..in` 循环也会迭代继承的属性。

例如：

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys 只返回自己的 key
alert(Object.keys(rabbit)); // jumps

// for..in 会遍历自己及继承的 key
for(let prop in rabbit) alert(prop); // jumps, 然后是 eats
```

如果想要 `for..in` 排除继承的属性，可以使用**内建方法 `obj.hasOwnProperty(key)`**：如果 `obj` 具有自己的（非继承）名为 `key` 的属性，则返回 `true`，反之返回 `false`。

例如：

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for(let prop in rabbit) {
  let isOwn = rabbit.getOwnProperty(prop);
  
  if(isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

上述代码有以下继承链：

![image-20250712104828193](images/image-20250712104828193.png)

从上图中可以知道，`rabbit.getOwnProperty` 方法是由 `Object.prototype.hasOwnProperty` 提供的，也就是说它是继承的，但为什么它没有被 `for..in` 循环列举出来？

因为**它是不可枚举的，`Object.prototype` 的 `hasOwnProperty` 以及包括其它属性都有 `enumerable: false` 标志**。

**⚠️ 注意：** 几乎所有的其它键/值获取方法，例如 `Object.keys` 和 `Object.values` 等都会忽略继承的属性，它们只会对对象自身进行操作。**不考虑继承自原型的属性**。



**性能对比**

```js
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
```

**问题：** 上述代码中通过 `pockets.glasses` 或 `head.glasses` 获取 `glasses`，哪个更快？

**答案：** 在现代 JavaScript 引擎中，从性能的角度来看**从对象还是从原型链获取属性都是没区别的**，因为**引擎会记住在哪里找到的该属性，并在下一次请求中重用它**，引擎足够聪明，一旦有内容更改，它们就会自动更新内部缓存，因此，该优化是安全的。



## F.prototype

在 JavaScript 中可以使用 `new F()` 这样的构造函数创建一个新对象。

**如果 `F.prototype` 是一个对象，那么 `new` 操作符会使用它为新对象设置 `[[Prototype]]`**。

**⚠️ 注意：**

- JavaScript 从一开始就有了原型继承，但在**过去没有直接对其进行访问的方式，唯一可靠的方式是使用通过构造函数的 `prototype` 属性，目前仍有很多脚本仍在使用它**
- `F.prototype` 指的是 `F` 的一个名为 `prototype` 的常规属性，看起来跟 “原型” 很类似，但实际上这里指的是具有该名字的常规属性
- **`F.prototype` 的值要么是一个对象，要么就是 `null`：其它值都不起作用**
- **`prototype` 属性只有当设置在一个构造函数上时，并通过 `new` 调用才有这种特殊的影响**，在常规对象上只是普通属性

例如： 

```js
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

const rabbit = new Rabbit('White Rabbit'); // rabbit.__proto__ == animal

alert(rabbit.eats); // true
```

上述代码中，设置 `Rabbit.prototype = animal` 的字面意思是：当创建了一个 `new Rabbit` 时，把它的 `[[Prototype]]` 赋值为 `animal`。

结果示意图：

![image-20250712135549221](images/image-20250712135549221.png)

上图中 `prototype` 是一个水平箭头，表示一个普通属性，`[[Prototype]]` 是一个垂直箭头，表示 `rabbit` 继承 `animal`。

**⚠️ 注意：`F.prototype` 属性仅在 `new F` 被调用时使用**，它为新对象的 `[[Prototype]]` 赋值，在创建之后，**如果 `F.prototype` 属性发生了变化（`F.prototype = <another object>`），那么通过 `new F` 创建的新对象也将随之拥有新对象作为 `[[Prototype]]`，但已经存在的对象将保持旧的值**，例如：

```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit1 = new Rabbit(); // 引用了上面的 prototype

Rabbit.prototype = {
  eats: false,
};

let rabbit2 = new Rabbit(); // 引用了新定义的的 prototype
delete Rabbit.prototype.eats; // 删除新定义的 prototype 的 eats

alert(rabbit1.eats); // 从之前引用的 prototype 取值 true
alert(rabbit2.eats); // 从新的 prototype 取值 undefined
```



**默认的 F.prototype，构造器属性**

每个函数都有 `prototype` 属性，即使我们没有提供它。

默认的 `prototype` 属性**是一个只有属性 `constructor` 的对象**，属性 `constructor` 指向函数自身。

例如：

```js
function Rabbit() {}

// 默认的 prototype
// Rabbit.prototype = { constructor: Rabbit };

alert(Rabbit.prototype.constructor === Rabbit); // true
```

![image-20250712141151455](images/image-20250712141151455.png)

通常如果什么都不做，`constructor` 属性可以通过 `[[Prototype]]` 给所有 `rabbits` 使用：

```js
function Rabbit() {}
// 默认：
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // 继承自 { constructor: Rabbit }
alert(rabbit.constructor === Rabbit); // true
```

![image-20250712143712376](images/image-20250712143712376.png)

可以使用 `constructor` 属性来创建一个新的对象，该对象使用与现有对象相同的构造器。

例如：

```js
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit('White Rabbit');
let rabbit2 = new rabbit.constructor('Black Rabbit');
```

当我们有一个对象（例如它来自第三方库），我们需要创建另一个类似的对象时，用这种方法创建就很方便。

**⚠️ 注意：** JavaScript 自身并**不能确保正确的 `constructor` 函数值**，`constructor` 只是存在于函数默认的 `prototype` 中，但也仅此而已，之后会发生什么完全取决于我们，例如将整个默认的 `prototype` 替换掉，那么其中就不会有 `constructor` 了，例如：

```js
function Rabbit() {}
Rabbit.prototype = {
  jumps: true,
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
```

因此，为了确保正确的 `constructor`，应该选择添加/删除属性到默认的 `prototype` 中，而不是将整个覆盖：

```js
function Rabbit() {}

// 不要将 Rabbit.prototype 整个覆盖
Rabbit.prototype.jumps = true; // 可以向其中添加内容
// 默认的 Rabbit.prototype.constructor 被保留下来了
```

或者也可以手动重新添加 `constructor` 属性：

```js
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit, // 这样的 constructor 也是正确的，因为手动添加了它
};
```



## 原生的原型

`prototype` 属性在 JavaScript 自身的核心部分中被广泛使用，所有的内建函数都用到了它。



**Object.prototype**

例如输出一个空对象：

```js
let obj = {};
alert(obj); // [object Object]
```

生成字符串 `[object Object]` 的代码来自于内建的 `toString` 方法，**`obj = {}` 与 `obj = new Object()` 是一个意思**，其中 `Object` 就是一个内建的构造函数，其自身的 `prototype` 指向一个带有 `toString` 和其它方法的一个巨大的对象。

就像这样：

![image-20250712195258491](images/image-20250712195258491.png)

所以当 `new Object()` 被调用（或一个字面量对象 `{...}` 被创建），那么这个对象的 `[[Prototype]]` 属性被设置为 `Object.prototype`：

![image-20250712195556600](images/image-20250712195556600.png)

所以之后当 `obj.toString()` 被调用时，这个方法是从 `Object.prototype` 中获取的。

可以像下面这样验证它：

```js
let obj = {};

alert(obj.__proto__ === Object.prototype); // true
alert(obj.toString === obj.__proto__.toString); // true
alert(obj.toString === Object.prototype.toString); // true
```

**⚠️ 注意：`Object.prototype` 没有更多的 `[[Prototype]]`**，例如：

```js
alert(Object.prototype.__proto__); // null
```



**其它内建原型**

其它内建对象，如 `Array`、`Date`、`Function` 及其它，都在 `prototype` 上挂载了方法。

例如：当创建了一个数组 `[1, 2, 3]`，在内部默认使用 `new Array()` 构造器，因此 `Array.prototype` 变成了这个数组的 `prototype`，并为这个数组提供了操作方法，**这样做内存存储效率是很高的**。

**按照规范，所有内建原型顶端都是 `Object.prototype`**，这也就是为什么有人说 “**一切都从对象继承而来**”。

下面是完整的示意图（3 个内建对象）：

![image-20250713085334077](images/image-20250713085334077.png)

可以手动验证一下原型：

```js
let arr = [1, 2, 3];

alert(arr.__proto__ === Array.prototype); // true

alert(arr.__proto__.__proto__ === Object.prototype); // true

alert(arr.__proto__.__proto__.__proto__); // null
```

**⚠️ 注意：一些方法在原型上可能会发生重叠**，例如：`Array.prototype` 有自己的 `toString` 方法来列举出数组的所有元素并使用逗号分隔每一个元素。

```js
let arr = [1, 2, 3];
alert(arr); // 1,2,3 <-- Array.prototype.toString 的结果
```

虽然 `Object.prototype` 也有 `toString` 方法，但是 `Array.prototype` 在原型链中更近，所以数组对象原型上的方法会被使用。

![image-20250713090024308](images/image-20250713090024308.png)

在浏览器的开发者控制台中也会显示继承性（可能需要对内建对象使用 `console.dir`）：

![image-20250713094656166](images/image-20250713094656166.png)

其它内建对象也以同样的方式运行，即使是函数 —— 它们是内建构造器 `Function` 的对象，并且它们的方法（`call` / `apply` 及其它方法）都是取自 `Function.prototype`，函数也有自己的 `toString` 方法。

```js
function f() {}

alert(f.__proto__ === Function.prototype); // true
alert(f.__proto__.__proto__ === Object.prototype); // true
```



**基本数据类型**

字符串、数字和布尔值它们并不是对象，**当试图访问它们的属性时，临时包装器对象将会通过内建的构造器 `String`、`Number` 和 `Boolean` 被创建，它们提供操作字符串、数字和布尔值的方法然后消失**。

这些对象都是无形的创建出来的，大多数引擎都会对其进行优化。

**⚠️ 注意：`null` 和 `undefined` 没有对象包装器**，所以它们没有方法和属性，也没有对应的原型。



**更改原生原型**

**原生的原型是可以被修改的**，例如向 `String.prototype` 中添加一个方法，这个方法将对所有的字符串都是可用的：

```js
String.prototype.show = function() {
  alert(this);
};

'CodePencil'.show(); // CodePencil
```

**⚠️ 注意：** 

- 在开发过程中，**将一些方法添加到原生原型中通常不是一个好的想法，因为原型是全局的，很容易会造成冲突**，如果两个库都添加了 `String.prototype.show` 方法，那么其中一个方法将被另一个方法覆盖

- 在现代编程中，只有一种情况允许修改原生原型，就是 **polyfilling**，表示某个方法在 JavaScript 规范中已经存在，但**在特定的 JavaScript 引擎不支持该方法，那么可以手动实现它并添加到原生原型中**

  ```js
  // 判断原生原型中该方法是否存在
  if(!String.prototype.repeat) {
    
    // 如果不存在就在 prototype 中添加它
    String.prototype.repeat = function(n) {
      // 重复传入的字符串 n 次
      // 实际上，实现代码比这个要复杂一些（完整的方法可以在规范中找到）
      // 即使是不够完美的 polyfill 也常常被认为是足够好的
      return new Array(n + 1).join(this);
    };
  }
  
  alert('La'.repeat(3)); // LaLaLa
  ```

  

**从原型中借用**

一些原生的原型方法也通常会被借用。

例如：要创建类数组对象，则可能需要向其中复制一些 `Array` 方法。

```js
let obj = {
  0: 'Hello',
  1: 'world!',
  length: 2,
};

obj.join = Array.prototype.join;
alert(obj.join(',')); // Hello,world!
```

另一种方式就是通过 `obj.__proto__` 设置为 `Array.prototype`，这样 `Array` 中所有的方法都自动可以在 `obj` 中使用了，例如：

```js
let obj = {
  0: 'Hello',
  1: 'world!',
  length: 2,
};

obj.__proto__ = Array.prototype;
alert(obj.join(',')); // Hello,world!
```

**⚠️ 注意：** 如果 `obj` 已经从另一个对象进行了继承，那么这种方法就不行了，**因为会覆盖掉已有的继承**，但这里 `obj` 其实已经从 `Object` 进行了继承，因为 `Array` 也继承了 `Object`，所以 `obj` 通过原型链依旧继承了 `Object`，此处的方法借用不会影响 `obj` 对原有继承的继承。



## 原型方法

**使用 `obj.__proto__` 设置原型的方法已经过时且不推荐使用了**（已经被移至 JavaScript 规范的附录 B，意味着仅适用于浏览器）。

现代获取/设置原型的方法有：

- **`Object.getPrototypeOf(obj)`** —— 返回对象 `obj` 的 `[[Prototype]]`
- **`Object.setPrototypeOf(obj, proto)`** —— 将对象 `obj` 的 `[[Prototype]]` 设置为 `proto`

**⚠️ 注意：** `__proto__` 不被反对的唯一用法是在创建对象时，将其用作属性 `{ __proto__: ... }`。

还有一种特殊的方法：

- **`Object.create(proto, [descriptors])`** —— 利用给定的 `proto` 作为 `[[Prototype]]` 和可选属性描述符来创建一个空对象。

例如：

```js
const animal = {
  eats: true,
};

const rabbit = Object.create(animal); // 与 { __proto__: animal } 相同
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型修改为 {}
```

`Object.create` 方法更加强大，因为它有一个可选的第二参数：**属性描述符**。

属性描述符可以用来为新对象提供额外的属性，像下面这样：

```js
const animal = {
  eats: true,
};

const rabbit = Object.create(animal, {
  jumps: {
    value: true,
  }
});

alert(rabbit.jumps); // true
```

可以使用 `Object.create` 来实现比复制 `for..in` 循环中属性更强大的对象克隆方式：

```js
const clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

上述代码可以对 `obj` 进行真正准确的拷贝（浅拷贝），**包括所有的属性：可枚举和不可枚举的，数据属性和 setters/getters —— 包括所有内容，并带有正确的 `[[Prototype]]`**。



**原型简史**

因为历史原因，JavaScript 中有很多可以处理 `[[Prototype]]` 的方式。

JavaScript 语言从一开始就支持原型继承，但是管理它的方式随着时间的推移而演变。

- 构造函数的 `prototype` 从语言诞生之初就起作用，这是使用给定原型创建对象的**最古老的方式**
- 在 2012 年，`Object.create` 出现在标准中，它提供了使用给定原型创建对象的能力，但是**没有提供读取和设置原型的能力**，一些浏览器实现了非标准的 `__proto__` 访问器，为开发者提供更多的灵活性
- 在 2015 年，`Object.setPrototypeOf` 和 `Object.getPrototypeOf` 被加入到标准中，执行与 `__proto__` 相同的功能，但由于 `__proto__` 实际上在所有地方都得到了实现，但它已经过时，所以被加入到该标准的附件 B 中（即在非浏览器环境下，它的支持是可选的）
- 在 2022 年，官方允许在对象字面量 `{...}` 中使用 `__proto__`（从附录 B 中移出来了），**但是不推荐使用 getter/setter `obj.__proto__`**（仍在附录 B 中）

**⚠️ 注意：如果速度很重要，就不要修改已存在对象的 `[[Prototype]]`**，虽然从技术上讲可以在任何时候读取和设置 `[[Prototype]]`，但是通常只在创建的对象的时候设置它一次，之后就不再修改了，例如：`rabbit` 继承了 `animal`，之后就不再修改，**JavaScript 引擎会对对象的原型链结构进行高度优化，使得属性无论在对象实例上还是在原型对象上访问都非常的快，而使用 `Object.setPrototypeOf` 或 `obj.__proto__ =` “即时” 更改原型是一个非常缓慢的操作，因为它会破坏对象属性访问操作的内部优化**，所以除非明确知道在做什么或者 JavaScript 的执行速度对你来说完全不重要，否则请避免使用它。



**'Very plain' objects**

为什么要使用 `getPrototypeOf/setPrototypeOf` 取代 `__proto__` ？

为什么 `__proto__` 被部分认可并允许在 `{...}` 中使用，但仍不能用作 getter/setter？

上述两个问题可以看下面的例子，假如尝试在对象中存储**用户提供的**键（例如：一个用户输入的字典），会发现一个问题：所有键都可以正常工作，**除了 `__proto__`**。

例如：

```js
const obj = {};

const key = prompt('请输入你的 key', '__proto__');
obj[key] = 'some value';

alert(obj[key]); // [object Object]，并不是 'some value'
```

上述代码中，如果用户输入的是 `__proto__`，那么第四行的赋值会被忽略，因为 **`__proto__` 属性很特殊：它必须是一个对象或者 `null`，因为用户输入的字符串不能成为原型，所以将字符串赋值给 `__proto__` 会被忽略**。

但是通常不打算实现这种行为，想要存储键值对，而键名为 `__proto__` 的键值对没有被正确存储，所以这是一个 BUG，这个问题可能会导致对象的原型被改变，可能会出现意想不到的结果，**通常开发者不会考虑这一点，导致这类 BUG 很难被发现，甚至变成漏洞**。



可以改用 `Map` 来代替普通对象进行存储：

```js
const map = new Map();

const key = prompt('请输入你的 key', '__proto__');
map.set(key, 'some value');

alert(map.get(key)); // some value
```

也**可以**使用对象， `Object` 语法更加简洁，JavaScript 语言的制造者很久以前就考虑过这个问题。

`__proto__` 不是对象的属性，而是 `Object.prototype` 的**访问器属性**：

![image-20250716071551264](images/image-20250716071551264.png)

当 `object.__proto__` 被读取或者赋值时，对于的 getter/setter 会被从它的原型中调用，它会 set/get `[[Prototype]]`。

所以要摆脱此类问题，可以使用下面的小技巧：

```js
const obj = Object.create(null); // 创建一个没有原型的空对象
// 或者像下面这样
/*
const obj = {
  __proto__: null,
};
*/

const key = prompt('请输入你的 key', '__proto__');
obj[key] = 'some value';

alert(obj[key]); // some value
```

上述代码中 `Object.create(null)` 创建了一个空对象，这个对象没有原型（`[[Prototype]]` 是 `null`）：

![image-20250716072142390](images/image-20250716072142390.png)

因此它没有继承 `__proto__` 的 getter/setter 方法，被作为正常的数据属性进行处理，所以上述代码可以正常工作。

这样的对象被称为 **“very plain” 或 “pure dictionary” 对象**，因为它们比通常的普通对象（plain object）`{...}` 还要简单。

**缺点是这样的对象没有任何内建的对象的方法，例如 `toString`：**

```js
const obj = Object.create(null);
alert(obj); // TypeError: Failed to execute 'alert' on 'Window': Cannot convert object to primitive value
```

但它们通常对关联的数组还是很友好的。

```js
const chineseDictionary = Object.create(null);
chineseDictionary.hello = '你好';
chineseDictionary.bye = '再见';

alert(Object.keys(chineseDictionary)); // hello,bye
```

**⚠️ 注意：** 大多数与对象相关的方法都是 `Object.something(...)`，例如 `Object.keys(obj)`，它们不在 `prototype` 中，**所以在 “very plain” 对象中它们还是可以继续使用**。



## class 基本语法

在日常开发中经常需要创建许多相同类型的对象，使用 `new function` 可以实现这种需求。

在现代 JavaScript 中，还有一个更高级的 “类（class）” 构造的方式，它引入了许多非常棒的新功能，这些功能对面向对象编程很有作用。



**class 语法**

```js
class MyClass {
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

然后使用 `new MyClass()` 来创建具有上述所有方法的新对象。

**`new` 会自动调用 `constructor` 方法，所以可以在 `constructor` 中初始化对象**。

例如：

```js
class User {
  constructor(name) {
    this.name = name;
  }
  
  sayHi() {
    alert(this.name);
  }
}

// 用法：
const user = new User('CodePencil');
user.sayHi();
```

当 `new User('CodePencil')` 被调用时会执行以下步骤：

1. 一个新的对象被创建
2. `constructor` 使用给定的参数运行，并将其赋值给 `this.name`

然后就可以调用对象方法了，例如：`user.sayHi`。

**⚠️ 注意：类方法之间没有逗号**。



**什么是 class**

`class` 不是一个全新的语言级实体，**在 JavaScript 中类是一种函数**。

可以使用下面这段代码进行验证：

```js
class User {
  constructor(name) {
    this.name = name;
  }
  
  sayHi() {
    alert(this.name);
  }
}

alert(typeof User); // function
```

`class User { ... }` 构造实际做了以下的事情：

1. **创建一个名为 `User` 的构造函数，该函数成为类声明的结果，它的函数体来自于 `constructor` 方法（如果未定义，则自动生成一个空构造函数）**
2. **将类体中定义的方法（不包括 `constructor`）添加到 `User.prototype` 上**，例如：`User.prototype` 中的 `sayHi`

当 `new User` 对象被创建后，当我们调用其方法，它会从原型中获取对应的方法，所以对象 `new User` 可以访问类中的方法。

可以将 `class User` 声明的结果解释为：

![image-20250716081553267](images/image-20250716081553267.png)

可以通过以下代码进行验证：

```js
class User {
  constructor(name) {
    this.name = name;
  }
  
  sayHi() {
    alert(this.name);
  }
}

// class 是一个函数
alert(typeof User); // function

alert(User === User.prototype.constructor); // true

alert(User.prototype.sayHi); // sayHi 方法的代码

alert(Object.getOwnPropertyNames(User.prototype)); // constructor,sayHi
```



**不仅仅是语法糖**

人们常说 `class` 是一个**语法糖（使内容更容易阅读，但不引入任何新内容的语法）**，因为实际上可以在不使用 `class` 的情况下声明相同的内容：

```js
// 使用纯函数重写 class User

// 创建构造器函数
function User(name) {
  this.name = name;
}

// 将方法添加到原型
User.prototype.sayHi = function() {
  alert(this.name);
}

// 用法：
const user = new User('CodePencil');
user.sayHi();
```

这个定义结果与使用类得到的结果基本相同，所以这确实是将 `class` 视为一种定义构造器及其原型方法的语法糖的理由。

**⚠️ 注意：** `class` 和构造函数之间存在着巨大差异：

1. **通过 `class` 创建的函数具有特殊的内部属性标记 `[[IsClassConstructor]]: true`**，所以与构造函数方式创建并不完全相同

   编程语言会在许多地方检查该属性，例如：**与普通函数不同，必须使用 `new` 来调用它**：

   ```js
   class User {
     constructor() {}
   }
   
   alert(typeof User); // function
   User(); // Uncaught TypeError: Class constructor User cannot be invoked without 'new'
   ```

   另外**在大多数 JavaScript 引擎中类构造器的字符串表示形式都以 `class` 开头**。

   ```js
   class User {
     constructor() {}
   }
   
   alert(User);
   /*
   class User {
     constructor() {}
   }
   */
   ```

2. **类方法不可枚举**，类定义将 `prototype` 中所有方法的 `enumerable` 标志设置为 `false`

   这很好，如果对一个对象调用 `for..in` 方法，通常不希望出现 class 方法出现。

3. **类总是使用 `'use strict'`**，类构造中的所有代码都将自动进入严格模式



**类表达式**

就像函数一样，**类可以在另一个表达式中被定义，被传递，被返回，被赋值等**。

例如：

```js
const User = class {
  sayHi() {
    alert('Hello');
  }
};
```

类似于命名函数表达式（Named Function Expressions），类表达式也可以有一个名字。

**如果类表达式有名字，那么该名字仅在类内部可见**：

```js
const User = class MyClass {
  sayHi() {
    alert(MyClass);
  }
};

new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容

alert(MyClass); // ReferenceError: MyClass is not defined
```

可以动态的按需创建类：

``` js
function makeClass(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

const User = makeClass('Hello');
new User().sayHi(); // Hello
```



**getters/setters**

就像对象字面量，类可以包括 getters/setters，计算属性（computed properties）等。

下面是一个使用 `get/set` 实现 `user.name` 的示例：

```js
class User {
  constructor(name) {
    // 调用 setter
    this.name = name;
  }
  
  get name() {
    return this._name;
  }
  
  set name(value) {
    if(value.length < 4) {
      alert('姓名太短了');
      return;
    }
    this._name = value;
  }
}

let user = new User('CodePencil');
alert(user.name); // CodePencil

user = new User(''); // 姓名太短了
```

从技术上来讲，这样的类声明可以通过在 `User.prototype` 中创建 getters 和 setters 来实现。



**计算属性名称 [...]**

和对象字面量类似，可以在 `class` 中使用中括号 `[...]` 的计算方法名称，例如：

```js
class User {
  ['say' + 'Hi']() {
    alert('Hello');
  }
}

new User().sayHi();
```



**class 字段**

**⚠️ 注意：** 旧的浏览器中需要使用 polyfill 才能支持。

之前在类中只能有方法，**“类字段” 是一种允许添加任何属性的语法**。

例如：

```js
class User {
  name = 'CodePencil'; // 类字段
  
  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, CodePencil
```

只需要在表达式中写 `=` 就可以了。

类字段的重要区别在于，**它们会被挂载对象实例上，而非 `User.prototype` 上**：

```js
class User {
  name = 'CodePencil';
}

const user = new User();
alert(user.name); // CodePencil
alert(User.prototype.name); // undefined
```

也可以在赋值时使用更复杂的表达式和函数调用：

```js
class User {
  name = prompt('请输入你的名字', 'CodePencil');
}

const user = new User();
alert(user.name); // CodePencil
```



**使用类字段制作绑定方法**

JavaScript 中的函数具有动态的 `this`，它取决于调用时的上下文。

所以如果一个对象的方法被传递到某处，或者在另外一个上下文中被调用，则 `this` 将不再是其对象的引用。

例如：

```js
class Button {
  constructor(value) {
    this.value = value;
  }
  
  click() {
    alert(this.value);
  }
}

const button = new Button('Hello');

setTimeout(button.click, 1000); // undefined
```

这个问题被称为 “丢失 `this`”。

有两种可以修复它的方式：

1. 传递一个包装器函数，例如：`setTimeout(() => button.click, 1000)`

2. 在 `constructor` 中将方法绑定到对象，例如：

   ```js
   class Button {
     constructor(value) {
       this.value = value;
       this.click = this.click.bind(this); // 将方法绑定到对象
     }
     
     click() {
       alert(this.value);
     }
   }
   
   const button = new Button('Hello');
   
   setTimeout(button.click, 1000); // Hello
   ```

类字段提供了一种非常优雅的语法：

```js
class Button {
  constructor(value) {
    this.value = value;
  }
  
  click = () => { // 类字段
    alert(this.value);
  }
}

const button = new Button('Hello');
setTimeout(button.click, 1000); // Hello
```

类字段语法 `click = () => {...}` 会在每次创建实例时，生成一个新的箭头函数作为实例属性。这个箭头函数通过词法作用域绑定定义时的 `this`（类似闭包的机制，不依赖于函数外部的变量值），从而保证无论如何调用该方法，`this` 始终指向当前实例。

**⚠️ 注意：** 在浏览器环境中，它对于进行事件监听尤为有用。

上述写法等价于下面的写法：

```js
class Button {
  constructor(value) {
    this.value = value;
    this.click = () => alert(this.value);
  }
}

const button = new Button('Hello');
setTimeout(button.click, 1000); // Hello
```



## 类继承

**类继承是一个类扩展另一个类的一种方式**，可以在现有功能上创建新功能。



**extends 关键字**

例如有 `class Animal`：

```js
class Animal {
  constructor() {
    this.speed = 0;
    this.name = name;
  }
  
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

const animal = new Animal('My animal');
```

对象 `animal` 和 `class Animal` 的图形化表示：

![image-20250716155144999](images/image-20250716155144999.png)

然后创建另一个 `class Rabbit`：

因为 `rabbit` 是 animal，所以 `class Rabbit` 应该是基于 `class Animal` 的，可以访问 animal 的方法，以便 `rabbit` 可以做 “一般” 动物可以做的事。

**扩展另一个类的语法是：`class Child extends Parent`**。

创建一个继承自 `Animal` 的 `class Rabbit`：

```js
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

const rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
```

上述代码中 `rabbit.run(5)` 访问的是 `Animal` 的方法，`rabbit.hide()` 访问的是 `Rabbit` 的方法。

在内部，**关键字 `extends` 很好的利用了旧的原型机制进行工作，它将 `Rabbit.prototype` 的 `[[Prototype]]` 设置为了 `Animal.prototype`**。

![image-20250716155953103](images/image-20250716155953103.png)

如果要查找 `rabbit.run` 方法，JavaScript 引擎会进行如下检查：

1. 查找对象 `rabbit`（没有 `run`）
2. 查找它的原型，即 `Rabbit.prototype`（有 `hide`，但没有 `run`）
3. 查找它的原型，即（由于 `extends`）`Animal.prototype`，在这儿找到了 `run` 方法



**在 `extends` 后允许使用任意表达式**

类语法不仅允许指定一个类，在 `extends` 后还可以指定任意表达式。

例如一个生成父类的函数调用：

```js
function f(phrase) {
  return class {
    sayHi() { alert(phrase); }
  }
}

class User extends f('Hello') {}

new User().sayHi(); // Hello
```

上述代码中 `class User` 继承自 `f('Hello')` 的结果。

这对于高级编程模式，例如根据许多条件使用函数生成类并继承它们来说可能很有用。



**重写方法**

默认情况下，所有未在 `class Rabbit` 中指定的方法均从 `class Animal` 中直接获取。

但如果在 `Rabbit` 中指定了自己的方法，那么将会使用它：

```js
class Rabbit extends Animal {
  stop() {
    // 现在这个将会被用作 rabbit.stop()
    // 而不是来自于 class Animal 的 stop()
  }
}
```

然后通常可能并不希望完全替换父类的方法，希望在父类的方法的基础上进行调整或者扩展其功能，`class` 为此提供了 `super` 关键字。

- **执行 `super.method(...)` 来调用一个父类方法**
- **执行 `super(...)` 来调用一个父类 `constructor`（只能在子类的 `constructor` 中使用）**

例如在 `rabbit` 停下来的时候自动 `hide`：

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  
  run() {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
  
  stop() {
    super.stop(); // 调用父类的 stop
    this.hide(); // 然后 hide
  }
}

const rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
```



**箭头函数没有 `super`**

如果被访问，它会从外部函数获取，例如：

```js
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // 1 秒后调用父类的 stop
  }
}
```

**如果指定一个 “普通” 的函数，那么将出现错误**：

```js
class Rabbit extends Animal {
  stop() {
    setTimeout(function() {
      super.stop();
    }, 1000); // Uncaught SyntaxError: 'super' keyword unexpected here
  }
}
```

之所以会出现错误，是因为 `setTimeout` 中的是**普通函数表达式**，而**普通函数表达式是不会有 `[[HomeObject]]`，所以 JavaScript 不知道 `super` 应该指向哪一个原型**。



**重写 constructor**

根据规范，如果**一个类扩展了另一个类并且没有 `constructor`**，那么**将生成下面这样的 “空” `constructor`**：

```js
class Rabbit extends Animal {
  // 为没有自己的 constructor 的扩展类生成的
  constructor(...args) {
    super(...args);
  }
}
```

上述代码中，它**调用了父类的 `constructor` 并且传递了所有的参数**，如果没有写自己的 `constructor`，就会出现这个情况。

现在给 `Rabbit` 添加一个自定义的 `constructor`，除了 `name` 外，它还会指定 `earLength`。

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }
  
  // ...
}

const rabbit = new Rabbit('White Rabbit', 10); // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

上述代码中出现了一个错误，导致没法新建 `rabbit`。

出现这个问题的原因简单来说就是：**继承类的 constructor 必须调用 `super(...)`，并且一定要在使用 `this` 之前调用**。

在 JavaScript 中，继承类（也称为 “派生构造器”，英文为 “derived constructor”）的构造函数与其它函数之间是有区别的，**派生构造器具有特殊的内部属性 `[[ConstructorKind]]: 'derived'`**，这是一个特殊的内部标签。

该标签会影响它的 `new` 行为：

- **当通过 `new` 执行一个常规函数时，它将创建一个空对象，并将这个空对象赋值给 `this`**
- **但是当继承的 `constructor`（派生构造器） 执行时，它不会执行此操作，它期望父类的 `constructor` 来完成这项工作**

所以**派生的 `constructor` 必须调用 `super` 才能执行其父类的 `constructor`，否则 `this` 指向的对象将不会被创建，并收到一个报错**。

为了让 `Rabbit` 的 `constructor` 可以工作，它需要在使用 `this` 之前调用 `super()`，像下面这样：

```js
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// 现在可以了
let rabbit = new Rabbit('White Rabbit', 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
```



**重写类字段**

不仅可以重写方法，还可以重写类字段。

不过在父类构造器中访问一个被重写的字段时，**有一个诡异的行为**，这与绝大多数其它编程语言都很不一样。

例如：

```js
class Animal {
  name = 'animal';
  
  constructor() {
    alert(this.name);
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal
```

上述代码中 `Rabbit` 继承自 `Animal`，并用它自己的值重写了 `name` 字段。

因为 `Rabbit` 没有自己的构造器，所以 `Animal` 的构造器被调用了。

问题：**在这两种情况下，`new Animal()` 和 `new Rabbit()` 都打印 `animal`**。

这是**因为父类构造器总是会使用它自己字段的值，而不是被重写的那一个**。

但是如果调用的是方法则不会这样：

```js
class Animal {
  showName() {
    alert('animal');
  }
  
  constructor() {
    this.showName();
  }
}

class Rabbit extends Animal {
 	showName() {
    alert('rabbit');
  }
}

new Animal(); // animal
new Rabbit(); // rabbit
```

上述代码的输出与之前的是不同的，这才是本来所期待的结果，**当父类构造器在派生的类中被调用时，它会使用被重写的方法**。

**但对于类字段并非如此，父类构造器总是使用父类的字段**。

之所以会有这样的区别，是因为字段初始化的顺序，类字段是这样初始化的：

- **对于基类（还未继承任何东西的那种），在构造函数调用前初始化**
- **对于派生类，在 `super()` 后立刻初始化**

所以前面代码出现的问题，是因为 `new Rabbit()` 调用了 `super()`，**它执行了父类构造器，并且（根据派生类规则）只有在此之后，它的类字段才被初始化，父类构造器被执行的时候，`Rabbit` 还没有自己的类字段**，这就是为什么 `Animal` 类字段被使用了。

这种字段与方法之间微妙的区别只特定于 JavaScript。

**⚠️ 注意：** 这种行为只有在一个**被重写的字段被父类构造器使用时**才会显现出来，如果出问题了，可以**通过使用方法或者 getter/setter 替代类字段**，来修复这个问题。



**深入：内部研究 [[HomeObject]]**

这是关于继承和 `super` 背后的内部机制。

当一个对象方法执行时，它会将当前对象作为 `this`，随后如果调用 `super.method()`，那么引擎需要从当前对象的原型中获取 `method`，但这是怎么做到的？

引擎知道当前对象的 `this`，所以它可以通过 `this.__proto__.method` 获取父 `method`，不幸的是，这个解决方法是行不通的。

例如：

```js
const animal = {
  name: 'Animal',
  eat() {
    alert(`${this.name} eats.`);
  }
};

const rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() {
    this.__proto__.eat.call(this); // 这就是 super.eat() 大概工作的方式
  }
};

rabbit.eat(); // Rabbit eats.
```

上述代码中 `this.__proto__.eat` 从原型（`animal`）中获取 `eat`，并在当前对象的上下文中调用它。

**⚠️ 注意：** `.call(this)` 在这里非常的重要，**因为简单的调用 `this.__proto__.eat()` 将在原型上下文中执行 `eat`，而非当前对象**。

上述代码确实按照期望运行：获得了正确的 `alert`。

如果在原型链上再添加一个对象，运行就会出现问题：

```js
const animal = {
  name: 'Animal',
  eat() {
    alert(`${this.name} eats.`);
  }
};

const rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() {
    this.__proto__.eat.call(this); // 运行到这行时出现问题
  }
};

const longEar = {
  __proto__: rabbit,
  name: 'Long Ear',
  eat() {
    this.__proto__.eat.call(this);
  }
};

longEar.eat(); // Uncaught RangeError: Maximum call stack size exceeded
```

上述代码无法正常运行，在试图调用 `longEar.eat()` 时抛出了错误。

因为 `longEar` 和 `rabbit` 中的 **`this.__proto__.eat.call(this);` 的 `this.__proto__` 的值是完全相同的**，它们调用的都是 `rabbit.eat`，**在不停地循环调用自己，而不是在原型链上向上寻找方法**。

下面这张图介绍了发生的情况：

![image-20250717072022170](images/image-20250717072022170.png)

1. 在 `longEar.eat()` 中，`(**)` 这一行调用 `rabbit.eat` 并为其提供 `this.longEar`

   ```js
   // 在 longEar.eat() 中 this = longEar
   this.__proto__.eat.call(this); // (**)
   // 变成了
   longEar.__proto__.eat.call(this);
   // 也就是
   rabbit.eat.call(this);
   ```

2. 之后在 `rabbit.eat` 的 `(*)` 行中，希望将函数调用在原型链上向更高层传递，**但是 `this = longEar`，所以 `this.__proto__.eat` 又是 `rabbit.eat`**

   ```js
   // 在 rabbit.eat() 中 this = longEar
   this.__protot__.eat.call(this); // (*)
   // 变成了
   longEar.__proto__.eat.call(this);
   // 也就是
   rabbit.eat.call(this);
   ```

3. **所以 `rabbit.eat` 在不停地循环调用自己，因此它无法进一步地提升**

这个问题没法仅通过使用 `this` 来解决。



**[[HomeObject]]**

为了提供解决方法，JavaScript 为函数添加了一个特殊的内部属性：`[[HomeObject]]`。

**当一个函数被定义为类或者对象方法时，它的 `[[HomeObject]]` 属性就成为了该对象，然后 `super` 使用它来解析（resolve）父原型及其方法**。

例如前面的例子可以调整为：

```js
let animal = {
  name: 'Animal',
  eat() {         // animal.eat.[[HomeObject]] === animal
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() {         // rabbit.eat.[[HomeObject]] === rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbit,
  name: 'Long Ear',
  eat() {         // longEar.eat.[[HomeObject]] === longEar
    super.eat();
  }
};

// 正确执行
longEar.eat();  // Long Ear eats.
```

它基于 `[[HomeObject]]` 运行机制按照预期执行，一个方法，例如：`longEar.eat` 知道其 `[[HomeObject]]` 并且从其原型中获取父方法，没有使用 `this`。

**⚠️ 注意：** 在对象方法中使用 `super.eat()` 时，**JavaScript 会自动用当前对象的 `this` 上下文来调用 `super` 方法，不需要再手动写 `super.eat.call(this)`**。



**方法并不是 “自由” 的**

函数通常都是自由的，没有绑定到 JavaScript 对象，所以可以在对象之间复制，并用另外一个 `this` 调用它。

但 `[[HomeObject]]` 的存在违反了这原则，因为**方法会记住它的对象，并且 `[[HomeObject]]` 不能被更改，所以这个绑定是永久的**。

在 JavaScript 中，**`[[HomeObject]]` 仅被用于 `super`，如果一个方法不使用 `super`，那么仍然可以视它为自由的并且可以在对象之间复制**。

例如复制后错误的 `super` 结果的示例：

```js
const animal = {
  sayHi() {
    alert(`I'm an animal`);
  },
};

const rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  },
};

const plant = {
  sayHi() {
    alert(`I'm a plant`);
  },
};

const tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi,
};

tree.sayHi(); // I'm an animal
```

调用 `tree.sayHi()` 显示 `I'm an animal` 是绝对错误的。

出现这个问题的原因很简单：

- `rabbit.sayHi` 方法是从 `rabbit` 中复制过来的（也许是为了避免重复代码）
- **`rabbit.sayHi` 的 `[[HomeObject]]` 是 `rabbit`**，因为它是在 `rabbit` 中创建的，没有办法修改 `[[HomeObject]]`
- `tree.sayHi()` 内具有 `super.sayHi()`，它就**从 `rabbit` 中上溯，然后从 `animal` 中获取方法**

情况发生的示意图：

![image-20250717081920731](images/image-20250717081920731.png)

**⚠️ 注意：** 因此，将一个带有 `super` 的方法从一个对象复制到另一个对象是**不安全**的。



**方法不是函数属性**

`[[HomeObject]]` 是为类和普通对象中的方法定义的，但是对于对象来说，**方法必须明确指定为 `method()`，而不是 `method: function()`**

这个差别对 JavaScript 来说非常重要。

下面的例子中**使用了非方法（non-method）的语法，导致未设置 `[[HomeObject]]` 属性，所以 `super` 使用无效**。

```js
const animal = {
  eat: function() { // 这里是故意这样写的，而不是 eat() {...
    // ...
  },
};

const rabbit = {
  __proto__: animal,
  eat: function () {
    super.eat();
  },
};

rabbit.eat(); // Uncaught SyntaxError: 'super' keyword unexpected here
```



## 静态属性和静态方法

可以给整个类设置一个方法，这样的方法被称为**静态的（static）**。

在一个类的声明中，它**以 `static` 关键字开头**，例如：

```js
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

这实际上跟直接将其作为属性赋值的作用相同：

```js
class User {}

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true
```

在 `User.staticMethod()` 调用中的 `this` 的值就是类构造器 `User` 自身（“点符号前面的对象” 规则）。

通常来说**静态方法属于整个类，但不属于该类的任何特定对象实例**。

例如有对象 `Article`，并且需要一个方法来比较它们，通常的解决方案就是添加 `Article.compare` 静态方法：

```js
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  
  // 日期比较静态方法
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// 用法
const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert(articles[0].title); // CSS
```

上述代码中 `Article.compare` 是整个 `class` 的方法，而不是文章实例的方法。

也可以用来实现 **“工厂” 方法**。

例如需要通过多种方式来创建一篇文章：

1. 通过用给定的参数来创建（`title`，`date` 等）

2. 使用今天的日期来创建一个空的文章

第一种方式可以通过 `constructor` 来实现，对于第二种可以创建一个静态方法来实现。

```js
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  
  // 使用今天的日期来创建一个空的文章
  static createTodays() {
    return new Article('今日摘要', new Date());
  }
}

const article = Article.createTodays();
alert(article.title); // 今日摘要

article.createTodays();
```

静态方法也被用于与数据库相关的公共类，可以用于搜索/保存/删除数据库中的条目：

```js
// 假定 Article 是一个用来管理文章的特殊类
// 通过 id 来移除文章的静态方法：
Article.remove({id: 12345});
```

**⚠️ 注意：静态方法不适用于单个对象**，静态方法可以在类上调用，而不是在单个对象上。

```js
article.createTodays(); // Uncaught TypeError: article.createTodays is not a function
```



**静态属性**

**⚠️ 注意：** 旧的浏览器中需要使用 polyfill 才能支持，这是新添加的特性。

在 `class` 上也可以添加静态属性，它们看起来就像常规的类字段，但前面加有 `static`：

```js
class Article {
  static publisher = 'CodePencil';
}

alert(Article.publisher); // CodePencil
```

等价于

```js
Article.publisher = 'CodePencil';
```



**继承静态属性和方法**

静态属性和方法是可以被继承的。

例如：

```js
class Animal {
  static planet = 'Earth';
  
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  
  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

const rabbits = [
  new Rabbit('White Rabbit', 10),
  new Rabbit('Black Rabbit', 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth
```

当调用 `Rabbit.compare` 时，继承的 `Animal.compare` 将会被调用。

它也是利用了原型，`extends` 让 `Rabbit` 的 `[[Prototype]]` 指向了 `Animal`。

![image-20250717094019441](images/image-20250717094019441.png)

所以 `Rabbit extends Animal` **创建了两个 `[[Prototype]]` 引用**：

- `Rabbit` 函数原型继承自 `Animal` 函数
- `Rabbit.prototype` 原型继承自 `Animal.prototype`

结果就是继承对常规方法和静态方法都有效。

可以通过下面的代码来验证：

```js
class Animal {}
class Rabbit extends Animal {}

// 对于静态的
alert(Rabbit.__proto__ === Animal); // true

// 对于常规方法
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
```



## 私有的和受保护的属性和方法

面向对象最重要的原则之一：**将内部接口与外部接口分隔开来**。

内部接口与外部接口的划分被称为**封装**。



**生活中的例子**

咖啡机通过保护罩隐藏内部的实现细节，保证咖啡机的可靠性和简洁性，**在编程中对象就像咖啡机，为了隐藏内部细节，使用语言和约定中的特殊语法**。



**内部接口和外部接口**

在面向对象编程中，属性和方法可以分为两组：

- **内部接口** —— 通过该类的其它方法访问，但**不能从类的外部访问**的方法和属性
- **外部接口** —— **可以从类的外部访问**的方法和属性

放在咖啡机中类比，内部隐藏的内容：锅炉管，加热元件等，也就是**内部接口**，内部接口用于对象工作，它们相互使用，例如：锅炉管连接到加热元件。

从外面看，一台咖啡机被保护壳罩住了，所以没有人可以接触到其内部接口，只能通过**外部接口**使用它的功能，例如：咖啡机的开关等其它操作按钮。

在 JavaScript 中，有两种类型的对象字段（属性和方法）：

- **公共的：** 可以从任何地方访问
- **私有的：** 只能在类的内部访问，**无法在派生类中访问**

在许多其它编程语言中，还存在 **“受保护”** 的字段：**只能从类的内部和基于其扩展的类的内部访问**，从某种意义上讲，它们比私有的属性和方法使用更加广泛，因为**通常希望继承的类来访问它们**。

**受保护的字段不是在语言级别的 JavaScript 中实现的**，但可以通过**命名约定或间接手段（访问器属性或者函数）模拟**。



**受保护字段**

受保护的字段通常**以下划线 `_` 作为前缀**。

**⚠️ 注意：** 这不是在语言级别强制实施的，而是程序员之间的一个众所周知的约定：**不应该从外部访问下划线 `_` 前缀的属性和方法**。

例如实现一个受保护的属性 `waterAmount`：

```js
class CoffeeMachine {
  _waterAmount = 0;
  
  set waterAmount(value) {
    if(value < 0) {
      value = 0;
    }
    this.value = value;
  }
  
  get waterAmount() {
    return this.value;
  }
  
  constructor(power) {
    this._power = power;
  }
}

// 创建咖啡机
const coffeeMachine = new CoffeeMachine(100);

// 加水
cofeeMachine.waterAmount = -10; // _waterAmount 将变为 0，而不是 -10
```

上述代码中访问已受到控制，因此将水量的值设置为小于零的数变得不可能。



**只读属性**

对于 `power` 属性，可以将它设置为只读，**有时候一个属性必须只能被在创建时进行设置，之后不再被修改**。

咖啡机就是这种情况：功率永远都不会变。

要做到这一点，只需要设置 `getter`，而不是设置 `setter`：

```js
class CoffeeMachine {
  // ...
  
  constructor(power) {
    this._power = power;
  }
  
  get power() {
    return this._power;
  }
}

// 创建咖啡机
const coffeeMachine = new CoffeeMachine(100);

alert(`功率是: ${coffeeMachine.power}W`); // 功率是：100W

coffeeMachine.power = 25; // Uncaught TypeError: Cannot set property power of #<CoffeeMachine> which has only a getter
```

上述代码中 `coffeeMachine.power = 25` 报错，是因为没有 `setter`。

**⚠️ 注意：**

- **大多数的时候首选 `get.../set...` 函数**，像下面这样：

  ```js
  class CoffeeMachine {
    _waterAmount = 0;
    
    setWaterAmount(value) {
      if(value < 0) value = 0;
      this._waterAmount = value;
    }
    
    getWaterAmount() {
      return this._waterAmount;
    }
  }
  
  const coffeeMachine = new CoffeeMachine();
  
  coffeeMachine.setWaterAmount(100); // 加水
  
  alert(`加水量: ${coffeeMachine.getWaterAmount()}`); // 加水量: 100
  ```

  虽然这看起来有点长，但**函数更灵活。它们可以接受多个参数**（即使现在还不需要），不过 `getter/setter` 语法更短，所以最终没有严格的规定，而是由自己来决定。

- **受保护字段是可以被继承的**，例如继承 `class MegaMachine extends CoffeeMachine`，那么什么都无法阻止从新的类中方法访问 `this._waterAmount` 或 `this._power`，所以受保护的字段是自然可被继承的，**与私有字段不同**



**私有字段**

**⚠️ 注意：** 旧的浏览器中需要使用 polyfill 才能支持，这是新添加的特性。

**私有属性和方法应该以 `#` 开头**，它们只在类的内部可被访问。

例如，有一个私有属性 `#waterLimit` 和检查水量的私有方法 `#fixWaterAmount`：

```js
class CoffeeMachine {
  #waterLimit = 200;
  
  #fixWaterAmount(value) {
    if(value < 0) return 0;
    if(value > this.#waterLimit) return this.#waterLimit;
  }
  
  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}

const coffeeMachine = new CoffeeMachine();

// 不能从类的外部访问类的私有属性和方法
coffeeMachine.#fixWaterAmount(123); // Uncaught SyntaxError: reference to undeclared private field or method #fixWaterAmount
coffeeMachine.#waterLimit = 1000; // Uncaught SyntaxError: reference to undeclared private field or method #waterLimit
```

在语言级别，`#` 是该字段为私有的特殊标志，**无法从外部或从继承的类中访问它**。

**私有字段和公共字段不会发生冲突**，也就是说可以同时拥有私有的 `#waterAmount` 和公共的 `waterAmount` 字段。

例如：

```js
class CoffeeMachine {
  #waterAmount = 0;
  
  get waterAmount() {
    return this.#waterAmount;
  }
  
  set waterAmount(value) {
    if(value < 0) value = 0;
    this.#waterAmount = value;
  }
}

const machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Uncaught SyntaxError: reference to undeclared private field or method #waterAmount
```

与受保护字段不同，私有字段是由语言本身强制执行的。

如果继承自 `CoffeeMachine`，将无法直接访问 `#waterAmount`：

```js
class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    alert(this.#waterAmount); // Uncaught SyntaxError: reference to undeclared private field or method #waterAmount
  }
}
```

正确的做法是使用 `waterAmount` getter/setter：

```js
class CoffeeMachine {
  #waterAmount = 0;
  
  get waterAmount() {
    return this.#waterAmount;
  }
  
  set waterAmount(value) {
    if(value < 0) value = 0;
    this.#waterAmount = value;
  }
}

class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    alert(this.waterAmount); // 使用 waterAmount 的 getter
  }
}

const machine = new MegaCoffeeMachine();

machine.waterAmount = 100; // 使用 waterAmount 的 setter
machine.method(); // 100
```

在很多时候这种限制太严重了，通常扩展 `CoffeeMachine`，可能有正当理由访问其内部字段，这也就是为什么大多数时候都会使用**受保护字段**，即使它们不受语言语法的支持。

**⚠️ 注意：私有字段不能通过 ` this[name]` 访问**，例如：

```js
class User {
  #name = 'CodePencil'

  sayHi() {
    alert(`Hello, ${this['#name']}`); // this['#name'] === undefined
  }
}

new User().sayHi(); // Hello, undefined
```

对于私有字段来说，**`this['#name']` 不起作用**，这是确保私有性的语法限制。



## 扩展内建类

内建的类，如 `Array`、`Map` 等都是可以扩展的（extendable）。

例如这里有一个继承自原生 `Array` 的类 `PowerArray`：

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

const arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

const filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false
```

**⚠️ 注意：** 内建方法 `filter`、`map` 等返回的依然是子类 `PowerArray` 的新对象，它们内部使用了对象的 `constructor` 属性来实现这一功能。

上述代码中：

```js
arr.constructor === PowerArray;
```

当 `arr.filter()` 被调用时，它的**内部使用的是 `arr.constructor` 来创建新的结果数组，而不是使用原生的 `Array`**，所以可以在结果数组上继续使用 `PowerArray` 的方法。



也可以定制这种行为，**通过给类添加特殊的静态 getter `Symbol.species`**，它会返回 JavaScript 在内部用来 `map` 和 `filter` 等方法中创建新实体的 `constructor`。

例如如果希望前面代码中 `map` 或者 `filter` 这样的内建方法返回常规数组，可以在 `Symbol.species` 中返回 `Array`，像下面这样：

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
  
  // 内建方法将使用这个作为 constructor
  static get [Symbol.species]() {
    return Array;
  }
}

const arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

const filteredArr = arr.filter(item => item >= 10);
alert(filteredArr.isEmpty()); // Uncaught TypeError: filteredArr.isEmpty is not a function
```

上述代码中 `.filter` 返回的是 `Array` 对象，而非 `PowerArray`，所以没有 `isEmpty` 方法。

**⚠️ 注意：** 其它集合例如 `Map` 和 `Set` 的工作方式类似，**它们也使用 `Symbol.species`**。



**内建类没有静态方法继承**

内建对象有它们自己的静态方法，例如：`Object.keys`、`Array.isArray` 等。

原生的类互相扩展。例如，`Array` 扩展自 `Object`。

通常当一个类扩展另一个类时，静态方法和非静态方法都会被继承，**但是内建类是个例外，它们相互间不继承静态方法**。

例如：`Array` 和 `Date` 都继承自 `Object`，它们的实例都有来自 `Object.prototype` 的方法，但 `Array.[[Prototype]]` 并不指向 `Object`，所以它们没有例如 `Array.keys()`（或 `Date.keys()`）这些静态方法。

`Date` 和 `Object` 的结构关系图：

![image-20250717150631530](images/image-20250717150631530.png)

从上图可以看到，`Date` 和 `Object` 之间没有连结，它们是独立的，只有 `Date.prototype` 继承自 `Object.prototype` 而已。

**与通过 `extends` 获得的继承相比，这是内建对象之间继承的一个重要区别**。



## 类检查 instanceof

`instanceof` 操作符用于**检查一个对象是否属于某个特定的 `Class`，同时它还考虑了继承**。

在很多情况下，可能都需要进行此类检查，例如它可以被用来构建一个**多态性（polymorphic）**的函数，**该函数根据参数的类型对参数进行不同的处理**。



**instanceof 操作符**

语法：

```js
obj instanceof Class
```

如果 `obj` 隶属于 `Class` 类（或 `Class` 的衍生类），则返回 `true`。

例如：

```js
class Rabbit {}
const rabbit = new Rabbit();

// rabbit 是 Rabbit class 的对象吗？
alert(rabbit instanceof Rabbit); // true
```

也可以和构造函数一起使用：

```js
function Rabbit() {}

alert(new Rabbit() instanceof Rabbit); // true
```

也可以与 `Array` 之类的内建 `class` 一起使用：

```js
const arr = [1, 2, 3];
alert(arr instanceof Array); // true
alert(arr instanceof Object); // true
```

**⚠️ 注意：** 上述代码中 `arr` 还同时隶属于 `Object` 类，因为从原型上来讲，`Array` 是继承自 `Object` 的。

通常 `instanceof` 在检查中会将原型链考虑在内，**还可以在静态方法 `Symbol.hasInstance` 中设置定义逻辑**。

`obj instanceof Class` 算法的执行过程如下：

1. 如果 `Class` 中**有静态方法 `Symbol.hasInstance`，那就直接调用这个方法**：

   例如：

   ```js
   class Animal {
     // 假设具有 canEat 属性的都是 animal
     static [Symbol.hasInstance](obj) {
       if(obj.canEat) return true;
     }
   }
   
   const obj = { canEat: true };
   alert(obj instanceof Animal); // true
   ```

2. 大多数 `Class` 没有 `Symbol.hasInstance`，这种情况下，**标准逻辑是：使用 `obj instanceof Class` 检查 `Class.prototype` 是否等于 `obj` 的原型链中的原型之一**

   换句话说，一个接着一个比较：

   ```js
   obj.__proto__ === Class.prototype
   obj.__proto__.__proto__ === Class.prototype
   obj.__proto__.__proto__.__proto__ === Class.prototype
   // ...
   // 如果任意一个的答案为 true，则返回 true
   // 否则，如果已经检查到了原型链的尾端，则返回 false
   ```

   在前面的例子中，`rabbit.__proto__ === Rabbit.prototype`，所以立即就给出了结果。

   在继承的例子中，匹配将在第二步进行：

   ```js
   class Animal {}
   class Rabbit extends Animal {}
   
   const rabbit = new Rabbit();
   alert(rabbit instanceof Animal); // true
   
   // rabbit.__proto__ === Animal.prototype（没有匹配）
   // rabbit.__proto__.__proto__ === Animal.prototype（匹配）
   ```

   下图展示了 `rabbit instanceof Animal` 的执行过程，`Animal.prototype` 是如何参与比较的：

   ![image-20250717170004794](images/image-20250717170004794.png)
   
   还有另一个方法 **`objA.isPrototypeOf(objB)`，如果 `objA` 处在 `objB` 的原型链中，则返回 `true`**，所以还可以将 `obj instanceof Class` 检查改为 `Class.prototype.isPrototypeOf(obj)`。
   
   **⚠️ 注意：** `Class` 的 `constructor` 自身是不参与检查的，检查过程只和原型链以及 `Class.prototype` 有关。
   
   创建对象后，如果修改 `prototype` 属性，可能会导致以下的问题：
   
   ```js
   function Rabbit() {}
   const rabbit = new Rabbit();
   
   Rabbit.prototype = {};
   
   alert(rabbit instanceof Rabbit); // false
   ```



**使用 Object.prototype.toString 方法来揭示类型**

当一个普通对象被转换为字符串时为 `[object Object]`：

```js
const obj = {};

alert(obj); // [object Object]
alert(obj.toString()); // [object Object]
```

这是通过 `toString` 方法实现的，但这有一个**隐藏的功能**，该功能可以让 `toString` 更加强大。

根据规范来讲，**内建的 `toString` 方法可以从对象中提取出来，并在其它值的上下文中运行，其结果取决于该值**。

- 对于 `number` 类型，结果是 `[object Number]`
- 对于 `boolean` 类型，结果是 `[object Boolean]`
- 对于 `null` 类型，结果是 `[object Null]`
- 对于 `undefined` 类型，结果是 `[object Undefined]`
- 对于 `Array` 类型，结果是 `[object Array]`
- ......等（可自定义）

例如：

```js
// 方便起见，将 toString 方法复制到一个变量中
const objectToString = Object.prototype.toString;

const arr = [];

alert( objectToString.call(arr) ); // [object Array]
```

通过 `call` 方法在上下文 `this = arr` 中执行函数 `objectToString`。

在内部，`toString` 的算法会检查 `this`，并返回相应的结果，例如：

```js
const s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]
```



**Symbol.toStringTag**

可以**使用特殊的对象属性 `Symbol.toStringTag` 自定义对象的 `toString` 方法的行为**。

例如：

```js
const user = {
  [Symbol.toStringTag]: 'User'
};

alert({}.toString.call(user)); // [object User]
```

对于大多数特定于环境的对象，都有一个这样的属性，下面是一些特定于浏览器的示例：

```js
alert(window[Symbol.toStringTag]); // Window
alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
```

从上述代码中可以看出，输出的结果恰好是 `Symbol.toStringTag`（如果存在），只不过被包裹进了 `[object ...]` 中。

可以将其作为 `typeof` 的增强版或者 `instanceof` 的替代方法来使用，**如果希望获取内建对象的类型，并且希望信息以字符串的形式返回，可以使用 `{}.toString.call` 替代 `instanceof`**。

如果使用类的层次结构，并想要对该类进行检，同时还要考虑继承时，这种场景下 `instanceof` 操作符更加出色。





## Mixin 模式

在 JavaScript 中只能继承单个对象，每个对象只能有一个 `[[Prototype]]`，并且每个类只能扩展另外一个类。

这种设定会让人感觉到限制，如果有一个 `User` 类和 `EventEmitter` 类来实现事件生成，并且想将 `EventEmitter` 的功能添加到 `User` 中，以便用户可以触发事件。

这时用继承不太好，可以使用 **mixin**。

**`mixin` 提供了实现特定行为的方法，但是不单独使用它，而是将它这些行为添加到其它类中**。



**一个 mixin 实例**

在 JavaScript 中构造一个 mixin 最简单的方式就是**构造一个拥有实用方法的对象，以便可以轻松将这些实用方法合并到任何类的原型中**。

例如名为 `sayHiMixin` 的 `mixin` 用于给 `User` 添加一些语言功能：

```js
const sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin);
	
new User('CodePencil').sayHi(); // Hello CodePencil
```

上述代码中**没有继承，只有一个简单的方法拷贝**，所以可以让 `User` 在继承另一个类的同时，使用 `mixin` 来混合其它方法，例如：

```js
class User extends Person {
  // ...
}

Object.assign(User.prototype, sayHiMixin);
```

`mixin` 可以在自己内部使用继承。

例如这里的 `sayHiMixin` 继承自 `sayMixin`：

```js
const sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

const sayHiMixin = {
  __proto__: sayMixin,
  
  sayHi() {
    super.say(`Hello ${this.name}`);
  },
  
  sayBye() {
    super.say(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin);

new User('CodePencil').sayHi(); // Hello CodePencil
```

**⚠️ 注意：** `sayHiMixin` 内部对父类方法 `super.say()` 的调用会在 `mixin` 的原型中查找方法，而不是在 `class` 中查找。

具体的示意图如下：

![image-20250718084534860](images/image-20250718084534860.png)

因为方法 `sayHi` 和 `sayBye` 最初是在 `sayHiMixin` 中创建的，所以即使复制了它们，但它们的 `[[HomeObject]]` 内部属性仍然引用的是 `sayHiMixin`，所以当 `super` 在 `[[HomeObject]].[[Prototype]]` 中寻找父方法时，它搜索的是 `sayHiMixin.[[Prototype]]` 而不是 `User.prototype.[[Prototype]]`。



**EventMixin**

为实际运用构造一个 `mixin`。

例如许多浏览器对象的一个重要功能是它们可以生成事件，事件是向任何有需要的人 “广播信息” 的好方法，所以可以构造一个 `mixin`，可以轻松的将与事件相关的函数添加到任意 `class/object` 中。

- `mixin` 将提供 `.trigger(name, [...data])` 方法，以在发生重要的事情时 “生成一个事件”，`name` 是事件的名称，`[...data]` 是可选的带有事件数据的其他参数（arguments）
- 此外还有 `.on(name, handler)` 方法，它为具有给定名称的事件添加 `handler` 函数作为监听器（listener），当具有给定 `name` 的事件触发时将调用该方法，并从 `.trigger` 调用中获取参数（arguments）
- 还有 `.remove(name, handler)` 方法，它会删除 `handler` 监听器（listener）

添加完 `mixin` 后，对象 `user` 将能够在访客登录时生成事件 `'login'`，另一个对象如 `calendar` 可能希望监听此事件以便为登录的人加载日历。

或者当一个菜单被选中时，`menu` 可以生成 `'select'` 事件，其它对象可以分配事件处理程序对该事件做出反应，诸如此类。

下面是 `mixin` 的代码：

```js
const eventMixin = {
  /** 订阅事件，用法：
   * menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }

    this._eventHandlers[eventName].push(handler);
  },

  /** 移除事件，用法：
   * menu.off('select', handler)
   */
  off(eventName, handler) {
    const handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /** 生成具有给定名称和数据的事件，用法：
   * this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    // 判断该事件名称是否有对应的事件处理程序
    if (!this._eventHandlers?.[eventName]) return;

    // 调用事件处理程序
    this.__eventHandlers[eventName].forEach((handler) => handler.apply(this, args));
  },
};
```

用法：

```js
class Menu {
  choose(value) {
    this.trigger('select', value)
  }
}

Object.assign(Menu.prototype, eventMixin);

const menu = new Menu();

menu.on('select', value => alert(`Value selected: ${value}`));

// 触发事件 => 运行上述的事件处理程序（handler）并显示
menu.choose('123');
```

**⚠️ 注意：** `mixins` 可能会覆盖了现有类的方法，所以**通常应该仔细考虑 `mixin` 的命名方法**，降低发生这种冲突的可能性。



## 错误处理 try...catch

通常如果发生错误，脚本就会 “死亡”（立即停止），并在控制台中将错误打印出来。

语法结构 `try...catch` 它可以捕获（catch）错误，让脚本执行更合理的操作，而不是 “死亡”（立即停止）。



**try...catch 语法**

`try...catch` 结构由两部分组成：`try` 和 `catch`：

```js
try {
  // 代码...
} catch (error) {
  // 错误捕获
}
```

它按照以下步骤执行：

1. 首先执行 `try { ... }` 中的代码
2. **如果这里没有错误，则忽略 `catch (error) { ... }`：执行到 `try` 的末尾并跳过 `catch` 继续执行**
3. **如果这里出现错误，则 `try` 执行停止，控制流转向 `catch (error)` 的开头**，变量 `error`（可以使用任何名称）将包含一个 error 对象，该对象包含了所发生事件的详细信息

![image-20250718105339009](images/image-20250718105339009.png)

所以 `try { ... }` 块内的 error 不会杀死脚本，有机会在 `catch` 中处理它。

例如：

- 没有 error 的例子：会显示 `(1)` 和 `(2)` 的 `alert`：

  ```js
  try {
    alert('开始执行 try 中的内容'); // (1)
    
    // ...这里没有 error
    
    alert('try 中的内容执行完毕'); // (2)
  } catch (error) {
    alert('catch 被忽略，因为没有 error'); // (3)
  }
  ```

- 包含 error 的例子：会显示 `(1)` 和 `(3)` 的 `alert`：

  ```js
  try {
    alert('开始执行 try 中的内容'); // (1)
    
    lalala; // error，变量未定义
    
    alert('try 的末尾（未执行到此处）'); // (2)
  } catch (error) {
    alert('出现了 error！'); // (3)
  }
  ```

**⚠️ 注意：**

- **`try...catch` 仅对运行时的 error 有效**

  要让 `try...catch` 能工作，**代码必须是可执行的**，换句话说，**它必须是有效的 JavaScript 代码**。

  如果代码包含语法错误，那么 `try...catch` 将无法正常工作，例如：

  ```js
  try {
    {{{{{
  } catch (error) {
    alert('引擎无法理解这段代码，它是无效的');
  }
  ```

  上述代码 JavaScript 引擎首先会读取代码，然后运行它，**在读取阶段发生的错误被称为 “解析时间（parse-time）” 错误，并且无法恢复（从该代码内部）**，因为引擎无法理解该代码。

  所以 `try...catch` 只能处理有效代码中出现的错误，这类错误被称为 **“运行时的错误（runtime errors）”**，有时被称为 **“异常（exceptions）”**。

  

- **`try...catch` 同步执行**

  如果在 **“计划的（scheduled）”** 代码中发生异常，例如在 `setTimeout` 中，则 `try...catch` 不会捕获到异常：

  ```js
  try {
    setTimeout(function() {
      noSuchVariable; // 脚本将在这里停止运行
    }, 1000);
  } catch (error) {
    alert('不工作');
  }
  ```

  上述代码中因为 `try...catch` 包裹了计划要执行的函数，**该函数本身要稍后才执行，这时引擎已经离开了 `try...catch` 结构**。

  **为了捕获到计划的（scheduled）函数中的异常，`try...catch` 必须在这个函数中**：

  ```js
  setTimeout(function() {
    try {
      noSuchVariable;
    } catch {
      alert('error 被这里捕获了');
    }
  }, 1000);
  ```



**Error 对象**

**发生错误时，JavaScript 会生成一个包含有关此 error 详细信息的对象**，然后将该对象作为参数传递给 `catch`：

```js
try {
  // ...
} catch (error) { // error 对象，也可以用其他参数名代替 error
  // ...
}
```

对于**所有内建的 error**，error 对象具有两个主要属性：

- **`name`** —— Error 名称，例如对于一个未定义的变量，名称是 `'ReferenceError'`
- **`message`** —— 关于 error 的详细文字描述，人类可读的 error 信息
- 还有其它非标准的属性在大多数环境中可用，其中被使用最广泛的是 **`stack`** —— 当前的调用栈，用于调试目的的一个字符串，其中包含有关导致 error 的嵌套调用序列的信息

例如：

```js
try {
  lalala;
} catch (error) {
  alert(error.name); // ReferenceError
  alert(error.message); // lalala is not defined
  alert(error.stack); // ReferenceError: lalala is not defined at (...call stack)
  
  // 也可以将一个 error 作为整体显示出来
  alert(error); // ReferenceError: lalala is not defined
}
```



**可选的 catch 绑定**

**⚠️ 注意：** 旧的浏览器中需要使用 polyfill 才能支持，这是新添加的特性。

如果不需要 error 的详细信息，`catch` 也可以忽略它：

```js
try {
  // ...
} catch { // <-- 没有 (error)
  // ...
}
```



**使用 try...catch**

JavaScript 中支持 `JSON.parse(str)` 方法来解析 JSON 编码的值。

通常它被用来解析从网络、服务器或者其它来源接收到的数据，**如果 `JSON` 格式错误，`JSON.parse` 就会生成一个 error，因此脚本就会 “死亡”**。

下面代码使用 `try...catch` 来处理这个 error：

```js
const json = '{ bad json }';

try {
  const user = JSON.parse(json); // <-- 当出现 error 时...
  alert(user.name); // 不工作
} catch (error) {
  // 执行会跳转到这里并继续执行
  alert('很抱歉，数据有错误，我们会尝试再请求一次。');
  alert(error.name); // SyntaxError
  alert(error.message); // Expected property name or '}' in JSON at position 2 (line 1 column 3)
}
```

上述代码中虽然在 `catch` 中只是显示了信息，但实际上可以做很多的事情，例如：发送一个新的网络请求、向访问者建议一个替代方案，将有关错误的信息发送给记录日志的设备...等，比代码 “死掉” 要好得多。



**抛出自定义的 error**

如果前面的代码中的 `json` 在语法上是正确的，但是没有所必须的 `name` 属性该怎么处理？

像下面这样：

```js
const json = '{ "age": 30 }'; // 不完整的数据

try {
  const user = JSON.parse(json); // <-- 没有 error
  alert(user.name); // undefined
} catch (error) {
  alert('不工作');
}
```

上述代码中 `JSON.parse` 正常执行，但是缺少 `name` 属性来说确实是个 error。

为了统一进行 `error` 处理，需要使用 `throw` 操作符。



**throw 操作符**

`throw` 操作符**会生成一个 error 对象**。

语法：

```js
throw <error object>
```

从技术上讲，可以将任何东西都作为 error 对象，甚至是一个原始类型数据，例如：数字或字符串，**但最好使用具有 `name` 和 `message` 属性的对象（某种程度上保持与内建 error 的兼容性）**。

JavaScript 中有很多内建的标准 error 的构造器：`Error`、`SyntaxError`、`ReferenceError`、`TypeError` 等，也可以使用它们来创建 error 对象。

它们的语法是：

```js
const error = new Error(message);
// 或
const error = new SyntaxError(message);
const error = new ReferenceError(message);
const error = new TypeError(message);
// ...
```

对于内建的 error (**不是对于其它任何对象，仅仅是对于 error**)，`name` 属性刚好就是构造器的名字，`message` 则来自于参数（argument）。

例如：

```js
const error = new Error('Things happen o_O');

alert(error.name); // Error
alert(error.message); // Things happen o_O
```

前面代码中的 `JSON.parse` 的错误会产生如下的 error：

```js
try {
  JSON.parse('{ bad json o_O }');
} catch(error) {
  alert(error.name); // SyntaxError
  alert(error.message); // Expected property name or '}' in JSON at position 2 (line 1 column 3)
}
```

产生的是一个 `SyntaxError`，在前面的示例中缺少 `name` 属性就是一个 error，因为用户必须有一个 `name`。

所以要抛出这个 error：

```js
const json = '{ "age": 30 }';

try {
  const user = JSON.parse(json);
  
  if(!user.name) {
    throw new SyntaxError('数据不全：没有 name'); // (*)
  }
  
  alert(user.name);
} catch (error) {
  alert('JSON Error: ' + error.message); // JSON Error: 数据不全：没有 name
}
```

在 `(*)` 标记的这一行中，`throw` 操作符生成了包含给定的 `message` 的 `SyntaxError`，与 JavaScript 自己生成的相同，`try` 的执行立即停止，控制流转向 `catch` 块。

现在 `catch` 成了所有 error 处理的唯一场所：对 `JSON.parse` 和其它情况都适用。



**再次抛出（Rethrowing）**

在前面的例子中，使用 `try...catch` 来处理不正确的数据，但是**在 `try` 块中可能发生另一个预料之外的 error**，例如：例如编程错误（未定义变量）或其它错误，而不仅仅是这种 “不正确的数据”。

例如：

```js
let json = '{ "age": 30 }'; // 不完整的数据

try {
  user = JSON.parse(json); // <-- 忘记在 user 前放置 let
} catch (err) {
  alert('JSON Error: ' + err); // JSON Error: ReferenceError: user is not defined
  // (实际上并没有 JSON Error)
}
```

上述代码中，`try...catch` 的**本来目的是捕获 “数据不正确” 的 error，但实际上会捕获所有来自于 `try` 的 error**，导致仍然抛出的是同样的 `'JSON Error'` 信息，这是不正确的，会使代码变得难以调试。

为了避免此类问题，可以使用 “重新抛出”  技术，规则很简单：

**`catch` 应该只处理它知道的 error，并“抛出”所有其它 error**。

具体点就是：

1. `catch` 捕获所有 error
2. 在 `catch (error) { ... }` 中，对应 error 对象进行分析
3. 如果不知道怎么处理它，则 `throw error`

通常可以通过 `instanceof` 操作符判断错误类型：

``` js
try {
  user = { /*...*/ };
} catch (err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError'); // 访问一个未定义（undefined）的变量产生了 'ReferenceError'
  }
}
```

也**可以从 `error.name` 中获取错误的类名**，所有原生的错误对象都有这个属性，**另一种方式是读取 `error.constructor.name`**。

在下面的代码中，使用 “再次抛出”，以达到在 `catch` 中只处理 `SyntaxError` 的目的：

```js
const json = '{ "age": 23, "name": "CodePencil" }';

try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('数据不全：没有 name');
  }

  blabla(); // 预料之外的 error

  alert(user.name);

} catch (err) {

  if (err instanceof SyntaxError) {
    alert('JSON Error: ' + err.message);
  } else {
    throw err; // 再次抛出 (*)
  }
}

// Uncaught ReferenceError: blabla is not defined
```

如果 `(*)` 行的 error 从 `try...catch` 中 “掉” 出来，**它也可以被外部的 `try...catch` 结构（如果存在）捕获到**，如果外部不存在这种结构，**那么脚本就会被杀死**。

下面的示例显示了 error 如何被另外一级 `try...catch` 捕获到：

```js
function readData() {
  const json = '{ "age": 30 }';
  
  try {
    blala(); // error
  } catch (error) {
    if(!(error instanceof SyntaxError)) {
      throw error; // 再次抛出（不知道怎么处理）
    }
  }
}

try {
  readData();
} catch (error) {
  alert('External catch got: ' + error); // External catch got: ReferenceError: blala is not defined
}
```

上述代码中 `readData` 只知道如何处理 `SyntaxError`，而外部的 `try...catch` 知道如何处理任意的 error。



**try...catch...finally**

`try...catch` 结构可能还有另一个代码子句：`finally`。

如果它存在，它在所有情况下都会被执行：

```js
try {
  // ... 尝试执行的代码 ...
} catch (error) {
  // ... 处理 error ...
} finally {
  // ... 总是会执行的代码 ...
}
```

例如：

```js
try {
  alert('try');
  if (confirm('Make an error?')) BAD_CODE();
} catch (error) {
  alert('catch');
} finally {
  alert('finally');
}
```

该代码有两种执行方式：

1. 如果 `confirm('Make an error?')` 的返回值是 `true`，那么执行 `try -> catch -> finally`
2. 如果 `confirm('Make an error?')` 的返回值是 `false`，那么执行 `try -> finally`

**`finally` 子句通常用在：当开始做某事时，希望无论出现什么情况都要完成某个任务**。

例如：要测量一个斐波那契数字函数的 `fib(n)` 执行所花费的时间，通常在运行它之前开始测量，并在运行完成时结束测量，在这 `finally` 能确保无论是否出现 error，始终可以正确地测量时间。

```js
const num = +prompt('输入一个正整数', 35);

let diff, result;

function fib(n) {
  if(n < 0 || Math.trunc(n) !== n) {
    throw new Error('不能是负数，并且必须是整数。');
  }
  
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const start = Date.now();

try {
  result = fib(num);
} catch (error) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || '出现了 error');
alert(`执行花费了 ${diff} ms`);
```

上述代码在 `prompt` 弹窗中输入 `35` 代码正常运行，先执行 `try` 然后是 `finally`，如果输入的是 `-1`，将立即出现 `error`，执行只花费 `0ms`，以上两种情况下的时间测量都正确的完成了。

**⚠️ 注意：** 

- 上述代码中 `result` 和 `diff` 变量都是在 `try...catch` 之前声明的，**否则使用 `let` 在 `try` 块中声明变量，那么变量将只在 `try` 块中可见**

- **`finally` 子句适用于 `try...catch` 的任何出口，包括显式的 `return`**，例如：

  ```js
  function func() {
    try {
      return 1;
    } catch (error) {
      /* ... */
    } finally {
      alert('finally');
    }
  }
  
  alert( func() ); // 先执行 finally 中的 alert，然后执行这个 alert
  ```

  上述代码中，在 `try` 中有一个 `return`，这种情况下，**`finally` 会在控制转向外部代码前被执行**。

  

- **`try...finally`**

  没有 `catch` 子句的 `try...finally` 结构也很有用，**当不想在原地处理 error 时（让它们掉出去），但是需要确保启动的处理需要被完成时，应该使用它**，例如：

  ```js
  function func() {
    // 开始执行需要被完成的操作（比如测量）
    try {
      // ...
    } finally {
      // 完成前面需要完成的那件事，即使 try 中的执行失败了
    }
  }
  ```

  上面的代码中，由于没有 `catch`，所以 `try` 中的 error 总是会使代码执行跳转至函数 `func()` 外，**但是在跳出之前需要执行 `finally` 中的代码**。



**全局 catch**

**⚠️ 注意：** 这部分内容不是 JavaScript 核心的一部分，而是**环境特定的部分**。

假设 `try...catch` **结构外**有一个致命的 error，然后使脚本 “死亡” 了，通常可能会记录这个 error，并向用户显示某些内容。

规范中没有相关的代码，但是**代码的执行环境一般会提供这种机制**，例如：Node.js 有 `process.on('uncaughtException')`。

在浏览器中，则可以将一个函数赋值给**特殊的 `window.onerror` 属性**，该函数**将在发生未捕获的 error 时执行**。

语法：

```js
window.onerror = function(message, url, line, col, error) {
  // ...
}
```

- **`message`** —— error 信息
- **`url`** —— 发生 error 的脚本的 URL
- **`line`** —— 发生 error 处的行号
- **`col`** —— 发生 error 处的列号
- **`error`** —— error 对象

例如：

```js
window.onerror = function(message, url, line, col, error) {
  alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // 出问题了
}

readData();
```

`alert` 显示内容：

```
Uncaught ReferenceError:badFunc is not defined
At 15:9 of http://127.0.0.1:3000/index.html
```

**⚠️ 注意：** 全局错误处理程序 `window.onerror` 的作用**通常不是恢复脚本的执行**，如果发生编程错误，恢复脚本执行几乎是不可能的，**它的作用是将错误信息发送给开发者**。

也有针对这种情况提供 error 日志的 Web 服务，如：[http://www.muscula.com](http://www.muscula.com/)等。

它们会像下面这样运行：

1. 注册该服务，拿到一段 JavaScript 代码（或者脚本的 URL），然后插入页面中
2. 该 JavaScript 脚本设置了自定义的 `window.onerror` 函数
3. 当发生 error 时，它会发送一些此 error 相关的网络请求到服务提供方
4. 可以登录到服务方的 Web 界面来查看这些 error



## 自定义 Error，扩展 Error

在日常开发的时候，经常需要**使用自己的 error 类来反映在任务中可能出错的特定任务**，例如：对于网络操作中的 error，需要 `HttpError`、对于数据库操作中的 error，需要 `DbError`，对于搜索操作中的 error，需要 `NotFoundError` 等。

**自定义的 error 应该支持基本的 error 的属性**，例如：`name`、`message`，并且最好还有 `stack`，但它们**也可能会有属于它们自己的属性**，例如：`HttpError` 对象可能会有 `statusCode` 属性，属性值可能是 `404`、`403` 或 `500` 等。

JavaScript 允许将 `throw` 与任何参数一起使用，从技术上讲，自定义的 error 可以不需要从 `Error` 中继承，但**如果使用继承，就可以使用 `obj instanceof Error` 来识别 error 对象，所以最好还是继承它**。

随着开发的应用程序的增长，自定义的 error 自然会形成一个层次结构，例如：`HttpTimeoutError` 可能继承 `HttpError` 等等。



**扩展 Error**

假如有一个 `readUser(json)` 函数，该函数应该读取带有用户数据的 JSON。

例如：

```js
const json = `{ "name": "CodePencil", "age": 23 }`;
```

在函数的内部，使用 `JSON.parse`，如果它接收到格式不正确的 `json`，就会抛出 `SyntaxError`，但它也可能 JSON 格式正常，但缺少了必须的数据，例如对用户来说，必不可少的是 `name` 和 `age` 属性。

所以 `readUser(json)` 不仅会读取 JSON，还要检查验证数据，如果没有所必须的字段，或者字段的格式错误，就会出现一个 error，但这些并不是 `SyntaxError`，而是另一种错误，可以称它为 `ValidationError`，所以需要创建一个类，这个列包含有关违规字段的信息。

`ValidationError` 类应该继承自 `Error` 类。

`Error` 类是内建的，近似于下面的内容：

```js
class Error {
  constructor(message) {
    this.message = message;
    this.name = 'Error'; // (不同的内建 error 类有不同的名字)
    this.stack = <call stack>; // 非标准的，但大多数环境都支持它
  }
}
```

接下来实现 `ValidationError` 类：

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}


// 用法
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('No field: age');
  }
  if (!user.name) {
    throw new ValidationError('No field: name');
  }

  return user;
}

// try..catch 的工作示例

try {
  let user = readUser('{ "age": 25 }');
} catch (error) {
  if (error instanceof ValidationError) {
    alert('Invalid data: ' + error.message); // Invalid data: No field: name
  } else if (error instanceof SyntaxError) {
    alert('JSON Syntax Error: ' + error.message);
  } else {
    throw error; // 未知的 error，再次抛出
  }
}
```

上述代码中，`try...catch` 块既处理 `validationError` 又处理来自 `JSON.parse` 的内建 `SyntaxError`，通过 `instanceof` 来检查特定的错误类型。

也可以使用 `error.name` 来检查错误类型：

```js
// ...
// instead of (error instanceof SyntaxError)
} else if (error.name === 'SyntaxError')
// ...
```

**但使用 `instanceof` 的版本要好的多，因为将来可能会对 `validationError` 进行扩展，创建它的子类型，例如： `PropertyRequiredError`，所以使用 `instanceof` 检查对于新继承的类也适用，这是面向未来的做法**。

还有一点很重要，在 `catch` 中遇到了未知错误，**需要将它再次抛出**。



**深入继承**

`ValidationError` 类是非常通用的，但很多东西都可能出错，对象的属性可能缺失或者属性可能有格式错误（例如：`age` 属性的值为一个字符串而不是数字），所以需要针对缺少属性的错误来制作一个更具体的 `PropertyRequiredError` 类，它携带有关缺少的属性的相关信息。

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('No property' + property);
    this.name = 'PropertyRequiredError';
    this.property = property;
  }
}

// 用法：
function readUser(json) {
  const user = JSON.parse(json);
  
  if(!user.age) {
    throw new PropertyRequiredError('age');
  }
 	
  if(!user.name) {
    throw new PropertyRequiredError('name');
  }
  
  return user;
}

try {
  const user = readUser('{ "age": 25 }');
} catch (error) {
  if (error instanceof ValidationError) {
    alert('Invalid data: ' + error.message); // Invalid data: No property: name
    alert(error.name); // PropertyRequiredError
    alert(error.property); // name
  } else if (error instanceof SyntaxError) {
    alert('JSON Syntax Error' + error.message);
  } else {
    throw error; // 未知错误，再次抛出
  }
}
```

上述的代码中新的类 `PropertyRequiredError` 使用起来很简单，只需要传递属性名：`new PropertyRequiredError(property)`，人类可读的 `message` 是由 `constructor` 生成的。

**⚠️ 注意：** 上述代码中 `PropertyRequiredError` 类的 `constructor` 中的 **`this.name` 是手动重新赋值的**，这可能会变得有些重复 —— 在每个自定义 error 类中都要进行 `this.name = <class name>` 赋值操作，可以通过创建自己的 **“基础错误（basic error）” 类**来避免这种情况，该类进行 `this.name = this.constructor.name` 赋值，然后自定义的 error 都从这个 “基础错误” 类进行继承。

下面代码中将 `MyError` 作为 “基础错误” 类。

```js
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends MyError {}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('No property' + property);
    this.property = property;
  }
}

// name 是对的
alert(new PropertyRequiredError('field').name); // PropertyRequiredError
```

上述代码中自定义的 error 短了很多，特别是 `ValidationError`，摆脱了每次自定义 error 类都要在 `constructor` 中设置 `this.name = ...` 的操作。



**包装异常**

在前面的代码中，`readUser` 的目的就是 “读取用户数据”，这个过程可能会出现不同类型的 error，目前有了 `SyntaxError` 和 `ValidationError`，但是将来随着 `readUser` 函数的不断壮大，可能会产生其它类型的 error。

调用 `readUser` 的代码应该处理这些 error，现在它在 `catch` 块中使用了多个 `if` 语句来检查 error 类，处理已知的 error，并再次抛出未知的 error。

目前的方案是这样的：

```js
try {
  ...
  readUser()  // 潜在的 error 源
  ...
} catch (error) {
  if (error instanceof ValidationError) {
    // 处理 validation error
  } else if (error instanceof SyntaxError) {
    // 处理 syntax error
  } else {
    throw err; // 未知 error，再次抛出它
  }
}
```

在上述代码中，可以看到两种类型的 error，但可以有更多。

如果 `readUser` 函数会产生多种 error，那么应该问自己：是否真的想每次都检查所有的 error 类型？

通常答案是 No：希望能有一个比它高一个级别的错误，只想知道这里是否是 “数据读取异常”，为什么发生这样的 error 通常是无关紧要的（error 信息描述了它），或者有其它方式能够获取 error 的详细信息就更好了。

上面这段话所描述的技术被称为 **“包装异常”**：

1. 创建一个新的类 `ReadError` 来表示一般的 “数据读取” error
2. 函数 `readUser` 将捕获内部发生的数据读取 error，例如 `ValidationError` 和 `SyntaxError`，并生成一个 `ReadError` 来进行替代
3. 对象 `ReadError` 会把对原始 error 的引用保存在其 `cause` 属性中

之后调用 `readUser` 的代码只需要检查 `ReadError` 即可，**不必检查每种 error 类型，如果需要更多的 error 细节，可以检查 `ReadError` 对象的 `cause` 属性**。

下面代码中定义了 `ReadError`，并在 `readUser` 和 `try..catch` 中演示了其用法：

```js
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
  if(!user.age) {
    throw new PropertyRequiredError('age');
  }
  
  if(!user.name) {
    throw new PropertyRequiredError('name');
  }
}

function readUser(json) {
  let user;
  
  try {
    user = JSON.parse(json);
  } catch (error) {
    if(error instanceof SyntaxError) {
      throw new ReadError('SyntaxError', error);
    } else {
      throw error;
    }
  }
  
  try {
    validateUser(user);
  } catch (error) {
    if(error instanceof ValidationError) {
      throw new ReadError('ValidationError', error);
    } else {
      throw error;
    }
  }
}

try {
  readUser('{ basd json }');
} catch (error) {
  if(error instanceof ReadError) {
    alert(error);
    // Original error: SyntaxError: Unexpected token b in JSON at position 1
    alert('Original error: ' + error.cause);
  } else {
    throw error;
  }
}
```

上述代码中外部代码检查 `instanceof ReadError`，而不必列出所有可能的 error 类型，对于未知错误将照常再次抛出。

这种方法被称为 “包装异常（wrapping exceptions）”，**将 “低级别” 的异常 “包装” 到了更抽象的 `ReadError` 中，它被广泛应用于面向对象编程中**，低级别异常有时会成为该对象的属性，例如上述代码中的 `error.cause`，但这不是严格要求的。



## 回调

JavaScript 主机（host）环境提供许多函数，这些函数允许计划**异步**行为（action）：**也就是在执行一段时间后才自行完成的行为**。

例如：`setTimeout` 函数就是一个这样的函数。

实际开发中，例如加载脚本和模块也都是异步行为，例如实现一个 `loadScript(src)` 函数，该函数使用给定的 `src` 加载脚本：

```js
function loadScript(src) {
  const script = document.createElement('script'); // 创建一个 <script> 标签
  script.src = src; // <script> 标签根据给定的 src 属性加载脚本，并在加载完成后运行
  document.head.append(script); // 将 <script> 标签附加到页面
}
```

上述代码将一个新的、带有给定的 `src`、动态创建的标签 `<script src="…">` 插入文档中，**浏览器将自动开始加载它，并在加载完成后执行它**。

可以像下面这样使用这个函数：

```js
// 在给定路径下加载并执行脚本
loadScript('/my/script.js');
```

**脚本是 “异步” 调用的**，因为它从现在开始加载，但是**这个加载函数很快就执行完了，但浏览器还没来得及加载完脚本文件，脚本会稍后才执行**。

例如在 `loadScript(...)` 下面有任何其它代码，它们**不会等到脚本加载完成之后才执行**。

```js
loadScript('/my/script.js');
// loadScript 下面的代码
// 不会等到脚本加载完成才执行
// ...
```

这会导致假如想在新脚本加载后立即使用它，将不会有效。

````js
loadScript('/my/script.js'); // 这个脚本有 function newFunction() {…}

newFunction(); // 没有这个函数
````

`loadScript` 函数没有提供追踪加载完成的方法，但希望了解脚本何时加载完成，以使用其中的新函数和变量。

添加一个 `callback` 函数作为 `loadScript` 的第二个参数，该函数在脚本加载完成时执行：

```js
function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  
  script.onload = () => callback(script);
 
  document.head.append(script);
}
```

上述代码中 **`onload` 事件会在脚本加载和执行完成后执行一个函数**，现在**如果要调用该脚本中的新函数，应该将其写在回调函数中**：

```js
loadScript('/my/script.js', function() {
  // 在脚本加载完成后，回调函数才会执行
  newFunction();
  // ...
});
```

第二个参数是一个函数（通常是匿名函数），该函数会在行为（action）完成时运行。

下面是一个真实的示例：

```js
function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`脚本 ${script.src} 加载完成`);
  alert(_); // _ 是所加载的脚本中声明的一个函数
})
```

这种异步编程风格被称为 **“基于回调”**，异步执行某项功能的函数**应该提供一个 `callback` 参数用在相应事件完成时调用**（上述例子中的相应事件是指脚本加载）。



**在回调中回调**

如何依次加载两个脚本，自然的解决方案是将第二个 `loadScript` 调用放入第一个的 `loadScript` 的回调中，例如：

```js
loadScript('/my/script.js', function(script) {

  alert(`脚本 ${script.src} 加载完成，继续加载另一个`);

  loadScript('/my/script2.js', function(script) {
    alert(`第二个脚本加载完成`);
  });
});
```

假如还要加载第三个脚本：

```js
loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {
    
    loadScript('/my/script3.js', function(script) {
      // ...加载完所有脚本后继续
    }
  });
});
```

上述代码中每一个新行为（action）都在回调的内部，如果只有几个行为还好，但**当行为很多的时候不好了**。



**处理 error**

前面的例子中没有考虑出现 error 的情况，如果脚本加载失败也需要回调能够对此做出反应。

下面是 `loadScript` 的改进版本，可以追踪加载错误：

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

当脚本加载成功时，它会调用 `callback(null, script)`，否则会调用 `callback(error)`。

用法：

```js
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // 处理 error
  } else {
    // 脚本加载成功
  }
});
```

在 `loadScript` 函数中所使用的方案非常普通，被称 **“Error 优先回调（error-first callback）”**。

它的约定是：

1. `callback` 的**第一个参数是为 error 保留的**，一旦出现 error，`callback(error)` 就会被调用
2. **第二个参数（和之后的参数，如果需要的话）用于成功的结果**，此时 `callback(null, result1, result2...)` 就会被调用

所以单一的 `callback` 函数可以同时具有报告 error 和传递返回结果的作用。



**回调地狱**

“基于回调” 的异步编程方式对于一个或两个嵌套的调用看起来还不错，但是对于一个接着一个的多个异步行为，代码会变成下面这样：

```js
loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...加载完所有脚本后继续
          }
        });

      }
    });
  }
});
```

上述代码中随着调用嵌套的增加，代码层次变得更深，维护难度也随之增加，这种写法被称为 **“回调地狱”** 或者 **“厄运金字塔”**。

![image-20250719135935739](images/image-20250719135935739.png)

嵌套调用的 “金字塔” 会随着每个异步行为会向右增长，很块它就会失控了，所以**这种编程方式不是很好**。

可以通过使每个行为都称为一个独立的函数来尝试减轻这种问题，例如：

```js
loadScript('1.js', step1);

function step1(error, script) {
  if(error) {
    handleError(error);
  } else {
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if(error) {
    handleError(error);
  } else {
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if(error) {
    handleError(error);
  } else {
    // ...加载完所有脚本后继续
  }
}
```

它的作用相同，但没有深层的嵌套了，每个行为都编写成了一个独立的顶层函数。

**⚠️ 注意：** 上述代码可以工作，**但是代码的可读性很差，阅读时需要在各个代码块之间跳转，而且所有名为 `step*` 的函数都是一次性使用的，创建它们是为了避免 “回调地狱”，没有人会在行为链之外调用它们，所以命名空间有点混乱**。

有其它方法可以避免此类 “回调地狱”，**最好的方法之一就是使用 `promise`**。



## Promise

类似于你是一位顶尖的歌手，粉丝没日没夜的询问下一首歌什么时候发。

为了从中解放，你承诺（promise） 会在单曲发布的第一时间发给他们，你给了粉丝们一个列表，他们可以在上面填写他们的电子邮箱地址，以便当歌曲发布后，所有订阅了的人能够立即收到，即使遭遇不测，例如录音室着火了，导致你无法发布新歌，粉丝们也能及时收到相关通知。

这对每个人都很好，你不会被任何人催促，粉丝们也不用担心错过歌曲的发布。

以下是编程与真实生活的类比：

1. **“生产者代码（producing code）”** 会做一些事情，并且需要时间，例如通过网络加载数据的代码，它就像一位 “歌手”
2. **“消费者代码（consuming code）”** 想要在 “生成者代码” 完成工作的第一时间就能获得其工作成果，许多函数可能都需要这个结果，这些就是 “粉丝”
3. **Promise 是将 “生成者代码” 和 “消费者代码” 连接在一起的一个特殊的 JavaScript 对象**，就像是 “订阅列表”，“生产者代码” 花费它所需的任意长度的时间来产出承诺的结果，而 promise 将在 “生产者代码” 将承诺的结果准备好时，将结果向所有订阅了的 “消费者代码” 开放

以上的类比并不准确，因为 JavaScript 的 promise 比简单的订阅列表更加复杂：它们还拥有其他的功能和局限性。

Promise 对象的构造器语法如：

```js
const promise = new Promise(function(resolve, reject) {
  // executor（生产者代码，“歌手”）
});
```

传递给 `new Promise` 的函数被称为 **executor**，当 `new Promise` 被创建，**executor 会自动运行**，它包含最终产出结果的生产者代码，按照上面的类比：executor 就是 “歌手”。

**executor 的参数 `resolve` 和 `reject` 是由 JavaScript 自身提供的回调**，我们要写的代码仅在 executor 的内部。

当 executor 获得了结果，无论是早还是晚都没关系，它应该调用以下回调之一：

- **`resolve(value)`** —— 当异步操作成功完成时调用，`value` 是最终结果
- **`reject(error)`** —— 当异步操作失败时调用，`error` 是一个 `Error` 对象

简单来说就是 executor 会自动运行并尝试执行一项工作，尝试结束后，**如果成功则调用 `resolve`，如果出现了 error 则调用 `reject`**。

由 `new Promise` 构造器返回的 `promise` 对象具有以下内部属性：

- **`state`** —— 最初是 `'pending'`，然后在 `resolve` 被调用时变为 `'fulfilled'`，或者在 `reject` 被调用时变为 `'rejected'`
- **`result`** —— 最初是 `undefined`，然后在 `resolve(value)` 被调用时变为 `value`，或者在 `reject(error)` 被调用时变为 `error`

具体的状态变化如下图：

![image-20250719185539638](images/image-20250719185539638.png)

下面是一个 promise 构造器和一个简单的 executor 函数：

```js
const promise = new Promise(function(resolve, reject) {
  // 当 promise 被构造完成时，自动执行此函数
  
  // 1 秒后发出工作已经被完成的信号，并带有结果 'done'
  setTimeout(() => resolve('done'), 1000);
})
```

上述代码执行了两件事：

1. executor 被自动且立即调用（通过 `new Promise`）

2. executor 接收两个参数：`resolve` 和 `reject`，这些函数都是由 JavaScript 引擎预先定义，所以不需要手动创建它们，只需要在 executor 准备好时调用其中之一即可

经过 1 秒的 “处理后”，executor 调用 `resolve('done')` 来产生结果，这将改变 `promise` 对象的状态：

   ![image-20250719190555347](images/image-20250719190555347.png)

   这个是一个成功完成任务的例子，下面则是一个 executor 以 error 拒绝 promise 的例子：

```js
const promise = new Promise(function(resolve, reject) {
  // 1 秒后发出工作已经被完成的信号，并带有 error
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});
```

`reject(...)` 调用将 `promise` 对象的状态移至 `'rejected'`：

![image-20250719190934611](images/image-20250719190934611.png)

**与最初的 `'pending'` 状态的 promise 相反，一个 `'resolved'` 或 `'rejected'` 的 promise 都会被称为 `'settled'`**。

**⚠️ 注意：**

- **executor 只能调用一个 `resolve` 或一个 `reject`**，任何状态的更改都是最终的，**如果再调用 `resolve` 和 `reject` 都会被忽略（不是后面的代码不执行，只是忽略 `resolve` 和 `reject` 的调用）**

  ```js
  const promise = new Promise(function(resolve, reject) {
    resolve('done');
  
    reject(new Error('…')); // 被忽略
    setTimeout(() => resolve('…')); // 被忽略
  });
  ```

- **使用 `Error` 对象进行 `reject`**，如果出了问题，executor 应该调用 `reject`，虽然可以使用任何类型的参数来完成（就像 `resolve` 一样），**但建议使用 `Error` 对象（或继承自 `Error` 的对象）**

- **`resolve/reject` 可以立即进行**，executor 通常是异步执行某些操作，并在一段时间之后调用 `resolve/reject`，但这**不是必须的**，还可以立即调用 `resolve` 或 `reject`，像下面这样：

  ```js
  const promise = new Promise(function(resolve, reject) {
    // 不花时间去做这项工作
    resolve(123); // 立即给出结果: 123
  });
  ```

  例如开始做一个任务时，随后发现一切都已经完成并已被缓存时，就可以立即给出结果，所以就立即有了一个 `resolved` 的 promise。

- **Promise 对象的 `state` 和 `result` 属性都是内部的，无法直接访问它们**，但可以对它们使用 `.then` / `.catch` / `.finally` 方法

  

**消费者：then，catch**

  最重要最基础的就是 `.then`。

语法：

```js
promise.then(
  function(result) { /* 处理成功的结果 */ },
  function(result) { /* 处理错误的结果 */ },  
);
```

- `.then` 的第一参数是一个函数，该函数将**在 promise resolved 并接收到结果后执行**

- `.then` 的第二个参数也是一个函数，该函数**在 promise rejected 并接收到 error 信息后执行**

例如以下是对成功 resolved 的 promise 做出的反应：

```js
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(('done!');), 1000);
});

// resolve 运行 .then 中的第一个函数
promise.then(
  result => alert(result), // 1 秒后显示 done!
  error => alert(error), // 不运行
);
```



在 reject 的情况下，会运行第二个函数：

```js
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// reject 运行 .then 中的第二个函数
promise.then(
  result => alert(result), // 不运行
  error => alert(error), // 1 秒后显示 Error: Whoops!
);
```



如果只对成功的情况感兴趣，可以只为 `.then` 提供一个函数参数：

```js
const promise = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000);
});

promise.then(alert); //1 秒后显示 done!
```

反之如果只对 error 感兴趣，**可以使用 `null` 作为第一个参数**：

```js
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// 只处理 error 的情况
promise.then(
  null,
  error => alert(error), // 1 秒后显示 Error: Whoops!
);
```

或者**也可以使用 `.catch(errorHandlingFunction)`**：

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert); // 1 秒后显示 Error: Whoops!
```

**⚠️ 注意：`.catch(f)` 调用是 `.then(null, f)` 的完全模拟**，它只是一个简写形式。



**清理 finally**

调用 `.finally(f)` 类似于 `.then(f, f)`，因为 promise settled 时 `f` 就会执行：**无论 promise 被 resolve 还是 reject**。

`finally` 的功能是设置一个处理程序在前面的操作完成后，执行清理/终结，例如：停止加载指示器，关闭不再需要的连接等。

具体代码如下：

```js
new Promise((resolve, reject) => {
  /* 做一些需要时间的事，之后调用可能会 resolve 也可能会 reject */
})
  .finally(() => stop loading indicator)
	// 所以，加载指示器（loading indicator）始终会在我们继续之前停止
  .then(result => show result, err => show error);
```

**⚠️ 注意：** `finally(f)` 并不完全是 `then(f,f)` 的别名，它们之间有如下区别：

- **`finally` 处理程序（handler）没有参数**，在 `finally` 中无法知道 promise 是否成功，不过也没关系，因为这里的的任务主要是**执行 “常规” 的完成程序（finalizing procedures）**

- **`finally` 处理程序将结果或 error 传递给下一个合适的处理程序**

  例如：

  ```js
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('value'), 2000)
  })
    .finally(() => alert('Promise ready')) // 先触发
    .then(result => alert(result)); // 显示 value
  ```

  上述代码中 promise 返回的 `value` 通过 `finally` 被传递给下一个 `then`。

  同样 `finally` 也可以将 error 传递给下一个 `catch`：

  ```js
  new Promise(function(resolve, reject) {
    throw new Error('error');
  })
    .finally(() => alert('Promise ready')) // 先触发
    .catch(err => alert(err));  // 显示 Error: error
  ```

- **`finally` 处理程序不应该返回任何内容，它返回的任何值都不会被传递（被忽略）给下一个 `.then()` 或 `.catch()`，如果返回了一个 promise，那么主链会等待它完成（但 resolve 或者 reject 的值依旧被忽略），然后继续往下走**

  **⚠️ 注意：** 唯一例外的是当 `finally` 处理程序抛出 error 时，那么原本 promise 链中已有的错误或结果会被**覆盖**，而接下来的 `.catch()` 或 `.then()` 接收到的将是 **`.finally()` 抛出的那个新错误**，例如：

  ```js
  new Promise((resolve, reject) => {
    throw new Error('Original error');
  })
    .finally(() => {
      throw new Error('New error in finally');
    })
    .catch(error => alert(error)); // 显示 Error: New error in finally 而非 Original error
  ```



**使用 promise 重写之前的 `loadScript` 函数**：

```js
function loadScript(src) {
  return new Promise((resolve, reject) {
    const script = document.createElement('script');
    script.src = src;
  
  	script.onload = () => resolve(script);
  	script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  });
}
```

用法：

```js
const promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));
```



## Promise 链

如果要将一系列的异步任务一个接着一个执行，例如按顺序加载多个脚本，可以使用 **promise 链**。

它看起来像下面这样：

```js
new Proimse(function(resolve, reject) {
  
  setTimeout(() => resolve(1), 1000);
  
}).then(function(result) {
  
  alert(result); // 1
  return result * 2;
  
}).then(function(result) {
  
  alert(result); // 2
  return result * 2
  
}).then(function(result) {
  
  alert(result); // 4
  return result * 2
  
});
```

它通过 `.then` 处理程序链进行 `result` 传递。

具体运行流程如下：

1. 初始 promise 在 1 秒后 resolve
2. 然后 `.then` 处理程序被调用，它又创建了一个新的 promise（以 `2` 作为值 resolve）
3. 下一个 `then` 得到了前一个 `then` 的值，对该值进行处理（`*2`）并将其传递给下一个处理程序
4. ……依此类推

随着 `result` 在处理程序链中传递，可以看到一系列的 `alert` 调用：`1` → `2` → `4`。

![image-20250722082256943](images/image-20250722082256943.png)

这样之所以可行，是**因为对每个 `.then` 调用都会返回一个新的 promise，所以可以在其之上调用下一个 `.then`**。

**⚠️ 注意：** 在技术上**可以将多个 `.then` 添加到一个 promise 上，但这并不是 promise 链（chaining）**，例如：

```js
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});
```

上述代码中只是一个 promise 的几个处理程序，它们不会互相传递 `result`，它们彼此独立运行，所以它们的 `alert` 返回的都是相同的结果 `1`。

![image-20250722082757647](images/image-20250722082757647.png)

很少会遇到一个 promise 需要多个处理程序的情况，**使用链式调用的频率更高**。



**返回 promise**

在 `.then(handler)` 中所使用的处理程序（handler），**可以创建并返回一个 promise**。

在这种情况下，**其它处理程序将等待它 settled 后再获得其结果**。

例如：

```js
new Promise(function(reolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  
  alert(result); // 1
  
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
  
}).then(function(result) {

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});
```

上述代码中第一个 `.then` 先显示 `1`，然后 1 秒后它会进行 `resolve`，然后将 `result * 2` 传递给第二个 `.then` 处理程序，以此类推，输出与前面的示例相同：1 → 2 → 4，但在每次 `alert` 调用之间会有 1 秒钟的延迟。

通过返回 promise 可以**构建异步行为链**。



**使用 promise 链重写之前的 `loadScript` 函数的使用**

```js
loadScript('/article/promise-chaining/one.js')
  .then(script => loadScript('/article/promise-chaining/two.js'))
  .then(script => loadScript('/article/promise-chaining/three.js'))
  .then(script => {
    // 脚本加载完成，可以在这使用脚本中声明的函数
    one();
    two();
    three();
  });
```

上述代码中每个 `loadScript` 调用都返回一个 promise，并且在它 resolve 时下一个 `.then` 开始运行，然后，它启动下一个脚本的加载，所以，脚本是一个接一个地加载的。

**可以向链中添加更多的异步行为，但代码仍然是 “扁平” 的，它向下增长，而不是向右**，没有 “回调地狱” 的迹象。

**⚠️ 注意：** 从技术上讲，可以向每个 `loadScript` 直接添加 `.then`，像下面这样：

```js
loadScript('/article/promise-chaining/one.js').then(script1 => {
  loadScript('/article/promise-chaining/two.js').then(script2 => {
    loadScript('/article/promise-chaining/three.js').then(script3 => {
      // 脚本加载完成，可以在这使用脚本中声明的函数
      one();
      two();
      three();
    });
  });
});
```

虽然这段代码做了相同的事情，**但是它是 “向右增长” 的，与回调函数一样会出现 “回调地狱” 的问题，所以通常，链式是首选，**但有时候直接写 `.then` 也是可以的，因为嵌套的函数可以访问外部作用域，在上面的例子中，嵌套在最深层的那个回调（callback）可以访问所有变量 `script1`，`script2` 和 `script3`。



**Thenables**

准确来说，`.then` 处理程序返回的不完全是一个 promise，而是**返回 “thenable” 对象—— 一个具有方法 `.then` 的任意对象，它会被当做一个 promise 来对待** 。

之所以这样设计，是为了第三方库可以实现自己的 “promise 兼容（promise-compatible）” 对象，它们可以具有扩展的方法集，但也与原生的 promise 兼容，因为它们实现了 `.then` 方法。

下面是一个 thenable 对象的示例：

```js
class Thenable {
  constructor(num) {
    this.num = num;
  }
  
  then(resolve, reject) {
    alert(resolve); // function () { [native code] }
    // 1 秒后使用 this.num*2 进行 resolve
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result);
  })
  .then(alert); // 1000ms 后显示 2
```

JavaScript 会检查返回的 `new Thenable(result)` 对象：如果它具有名为 `then` 的可调用方法，那么**将调用该方法并提供原生的函数 `resolve` 和 `reject` 作为参数（类似于 executor），并等待直到其中一个函数被调用**，反之则直接当作一个普通值，立即被封装成一个 resolved 的 promise 继续传递。

这个特性**允许将自定义对象与 promise 链集成在一起，而不必继承自 `Promise`**



**更复杂的示例：fetch**

在前端编程中，promise 通常被用于网络请求，例如：

```js
fetch('./user.json')
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then((githubUser) => {
    const img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => img.remove(), 3000);
  });
```

上述代码可以正常工作，但是存在一个潜在的问题：如果想在头像显示结束并被移除**之后**做点什么，就目前的代码而言是做不到的。

**为了使链可扩展，需要返回一个在头像显示结束时进行 resolve 的 promise**。

``` js
fetch('./user.json')
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then((githubUser) => new Promise(function(resolve, reject) { // (*)
  	const img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => {
      img.remove()
      resolve(githubUser); // (**)
    }, 3000);
})
  .then(githubUser => alert(`Finished showing ${githubUser.name}`)); // 3 秒后触发
```

上述代码中在第 `(*)` 行的 `.then` 处理程序中现在返回一个 `new Promise`，只有在 `setTimeout` 中的 `resolve(githubUser)` `(**)` 被调用后才会变为 settled，链中的下一个 `.then` 将一直等待这一时刻的到来。

**作为一个好的做法，异步行为应该始终返回一个 promise**，这样就可以使得之后计划后续的行为成为可能，即使现在不打算对链进行扩展，但在之后可能会需要。



## 使用 promise 进行错误处理

Promise 链在错误（error）处理中非常强大，**当一个 promise 被 reject 时，控制权将移交最近的 rejection 处理程序**。

例如代码中所 `fetch` 的 URL 是错的（没有这个网站），`.catch` 对这个 error 进行了处理：

```js
fetch('https://no-such-server.blabla') // reject
  .then(response => response.json()) // 不会运行
  .catch(error => alert(error)); // TypeError: Failed to fetch
```

上述代码中 `.catch` 不是立即的，它**可能出现在一个或多个 `.then` 的后面**。

如果一个网站一切正常，但响应不是有效的 JSON，**捕获所有 error 最简单的方法是将 `.catch` 附加到链的末尾**：

```js
fetch('./user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message)); // 末尾捕获所有 error
```

上述代码中如果有任意一个 promise rejected（网络问题或者无效的 json 或其它），`.catch` 就会捕获它。



**隐式 try...catch**

**promise 的执行者（executor）和 promise 的处理程序周围有一个 “隐式的 `try..catch` ”**，如果发生异常，它就会捕获，**并视为 rejection 进行处理**。

例如：

```js
new Promise((resolve, reject) => {
  throw new Error('Whooos!');
}).catch(alert); // Error: Whoops!
```

上面的代码等价于下面的代码：

```js
new Promise((resolve, reject) => {
  reject(new Error('Whoops!'));
}).catch(alert); // Error: Whoops!
```

**在 executor 周围的 “隐式 `try..catch`” 自动捕获了 error**，并将其变为了 rejected promise。

**这不仅仅发生在 executor 函数中，同样也发生在其处理程序中**，如果在 `.then` 处理程序中 `throw`，这意味着 promise rejected，所以控制权移交至最近的 error 处理程序，例如：

```js
new Promise((resolve, reject) => {
  resolve('ok');
}).then((result) => {
  throw new Error('Whoops!'); // reject 这个 promise
}).catch(alert); // Error: Whoops!
```

对于所有的 error 都会发生这种情况，而不仅仅是 `throw` 语句导致的 error，例如一个编程错误：

```js
new Promise((resolve, reject) => {
  resolve('ok');
}).then((result) => {
  blabla(); // 没有这个函数
}).catch(alert); // ReferenceError: blabla is not defined
```

**⚠️ 注意：** 最后的 `.catch` 不仅会捕获显式的 rejection，**还会捕获它上面的处理程序中意外出现的 error**。



**再次抛出（Rethrowing）**

链尾端的 `.catch` 的表现有点像 `try...catch`，可能有多个 `.then` 处理程序，然后在末尾使用一个 `.catch` 处理上面所有 error。

在常规的 `try..catch` 中，可以分析 error，如果无法处理它，可以将其再次抛出，对于 promise 来说这也是可以的。

**在 `.catch` 中 `throw`，那么控制权就会被移交到下一个最近的 error 处理程序，如果处理该 error 并正常完成，那么它将继续到最近的成功的 `.then` 处理程序**。

```js
new Promise((resolve, reject) => {
  throw new Error('Whoops!');
}).catch(function(error) {
  alert('错误已处理，继续正常操作');
}).then(() => alert('下一个成功的处理程序运行'));
```

上述代码中 `.catch` 块正常完成，所以下一个成功的 `.then` 处理程序就会被调用。

如果在 `.catch` 中捕获了 error，但无法处理它（例如只如何处理 `URIError`），所以将它再次抛出：

```js
// 执行流：catch -> catch
new Promise((resolve, reject) => {

  throw new Error('Whoops!');
  
}).catch(function(error) {

  if(error instanceof URIError) {
    // 处理它
  } else {
    alert('无法处理此类错误');
    
    throw error; // 再次抛出此 error，执行将跳转至下一个 catch
  }
  
}).then(function() {
  /* 不在这里运行 */
}).catch(error => {
  
  alert(`The unknown error has occurred: ${error}`);
  // 不会返回任何内容 => 执行正常进行
})
```

上述代码执行从第一个 `.catch` 沿着链跳转至下一个 `.catch`。



**未处理的 rejection**

当一个 error 没有被处理时，例如：忘记在链的尾端附加 `.catch`，例如：

```js
new Promise(funcion() {
  noSuchFunction(); // 这里出现 error（没有这个函数）
})
  .then(() => {
    // 一个或多个成功的 promise 处理程序
  }); // 尾端没有 .catch
```

如果出现了 error，promise 的状态将变为 rejected，然后执行会跳转到最近的 rejection 处理程序，但上述代码中没有这样的处理程序，所以 error 会 “卡住”，没有代码来处理它。

在实际开发中，**就像常规代码中未处理的 error 一样，会导致脚本 “死亡”，并在控制台中留下了一个信息**，对于在 promise 中未被处理的 rejection，也会发生类似的事情。

**JavaScript 引擎会跟踪此类 rejection，这种情况下会生成一个全局的 error**。

**在浏览器中，可以使用 `unhandledrejection` 事件来捕获这类 error**：

```js
window.addEventListener('unhandljection', function(event) {
  alert(event.promise); // [object Promise] —— 生成该全局 error 的 promise
  alert(event.reason); // Error: Whoops! —— 未处理的 error 对象
});

new Promise(function() {
  throw new Error('Whoops!');
}); // 没有用来处理 error 的 catch
```

**⚠️ 注意：** 

- **这个事件是 [HTML 标准](https://html.spec.whatwg.org/multipage/webappapis.html#unhandled-promise-rejections) 的一部分**，如果出现了一个 error，并且没有 `.catch`，那么 `unhandledrejection` 处理程序就会被触发，并获取具有 error 相关信息的 `event` 对象

  通常此类 error 是无法恢复的，所以最好的解决方案是将问题告知用户，并且可以将事件报告给服务器。

- **如果没有办法从 error 中恢复，不使用 `.catch` 也可以**

- **在 Node.js 等非浏览器环境中**，有其它用于跟踪未处理的 error 的方法

- **promise 只能处理 executor 的错误**，异步产生的错误无法处理，例如：

  ```js
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error('Whoops!');
    }, 1000);
  }).catch(alert); // 不会触发
  ```

  上述代码中函数代码周围有 **“隐式的 `try..catch`”**，所有同步错误都会得到处理，但这里的错误**不是在 executor 运行时生成的，而是在稍后生成的**，所以 promise 无法处理它。

  解决方案：手动 `reject` 错误。

  ```js
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error('Whoops!'));
    }, 1000);
  }).catch(alert); // Error: Whoops!
  ```

  

## Promise API

在 `Promise` 类中，有 7 种静态方法。



**Promise.all**

**作用：** 如果希望**并行执行多个 promise**，并等待所有 promise 都准备完成。

例如：并行下载几个 URL，并等到所有内容都下载完成后再对它们进行处理。

语法：

```js
const promise = Promise.all(iterable);
```

`Promise.all` 接收一个**可迭代的对象**（通常是一个数组项为 promise 的数组），并返回一个新的 promise。

**当所有给定的 promise 都 resolve 时，新的 promise 才会 resolve，并将其结果数组作为的新的 promise 的结果**。

例如：

```js
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert); // 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素
```

**⚠️ 注意：** 数组中的元素的顺序与其在源 promise 中的**顺序相同**，即使第一个 promise 花费了最长时间才 resolve，但它仍是结果数组中的第一个。

**一个常见的技巧是将一个任务数据数组映射（map）到一个 promise 数组，然后将其包装到 `Promise.all`**。

例如：

```js
const urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// 将每个 url 映射（map）到 fetch 的 promise 中
const requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(response => responses.forEach(
    response => alert(`${response.url}: ${response.status}`);
  ));
```

一个更真实的示例：

```js
const names = ['iliakan', 'remy', 'jeresig'];

const requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // 所有响应都被成功 resolved
    for(const response of responses) {
      alert(`${response.url}: ${response.status}`);
    }
  
    return responses;
  })
  // 将响应数组映射（map）到 response.json() 数组中以读取它们的内容
  .then(responses => Promise.all(responses.map(r => r.json())))、
  // 所有 JSON 结果都被解析：users 数组
  .then(users => users.forEach(user => alert(user.name));
```

**⚠️ 注意：如果任意一个 promise 被 reject，由 `Promise.all` 返回的 promise 会立即 reject，并且带有的就是这个 error**。

例如：

```js
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!
```

上述代码中第二个 promise 在两秒后被 reject，这立即导致了 `Promise.all` 的 reject，所以 `.catch` 执行了。

**⚠️ 注意：** 

- **如果出现 error，其他 promise 将被忽略**

  如果其中一个 promise 被 reject，`Promise.all` 会立即 reject，并完全忽略列表中其它的 promise，它们的结果也将被忽略，例如前面的例子中，如果多个同时进行的 `fetch` 调用，其中一个失败，**其它的 `fetch` 操作仍然会继续执行，但是 `Promise.all` 将不再关心它们，它们可能会 settle，但它们的结果将被忽略。**

  **`Promise.all` 没有采取任何操作来取消它们，因为 promise 中没有取消的概念**，可以使用 `AbortController` 来解决这个问题，但它不是 Promise API 的一部分。

- **`Promise.all(iterable)` 允许在 `iterable` 中使用非 promise 的 “常规” 值**

  通常 `Promise.all(...)` 接受含有 promise 项的可迭代对象（大多数情况下是数组）作为参数，但这些对象中任何一个不是 promise，**它将会被 “按原样” 传递给结果数组**。

  例如：

  ```js
  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]); // 1, 2, 3
  ```



**Promise.allSettled**

**⚠️ 注意：** 旧的浏览器中需要使用 polyfill 才能支持，这是新添加的特性。

如果任意 promise reject，`Promise.all` 整个将会 reject，当需要所有结果都成功时，它对这种 “全有或全无” 的情况很有用：

```js
Promise.all([
  fetch('/template.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render); // render 方法需要所有 fetch 的数据
```

而 `Promise.allSettled` 等待所有的 promise 都被 settle，无论结果如何，结果数组都会像下面这样：

- 对于成功的响应，结果数组对应元素的内容为 **`{status:"fulfilled", value:result}`**
- 对于 error 的响应，结果数组对应元素的内容为 **`{status:"rejected", reason:error}`**

例如想要获取（fetch）多个用户的信息，即使其中一个请求失败，我们仍然对其他的感兴趣：

```js
const urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => {
    results.forEach((result, num) => {
      if(result.status === 'fulfilled') {
        alert(`${urls[num]}: ${result.value.status}`)
      }
      if(result.status === 'rejected') {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

上述代码中 `results` 的结果将会是：

```js
[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
```

对于每个 promise，都得到其状态（status）和 `value/reason`。



**Polyfill**

如果浏览器不支持 `Promise.allSettled`，很容易进行 polyfill：

```js
if(!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });
  const resolveHandler = value => ({ status: 'fulfilled', value });
  
  Promise.allSettled = function(promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p)).then(resolveHandler, rejectHandler);
    return Promise.all(convertedPromises);
  }
}
```

上述代码中，`promises.map` 获取输入值，通过 `p => Promise.resolve(p)` 将输入值转换为 promise（以防传递了非 promise 值），然后向每一个 promise 都添加 `.then` 处理程序。

这个处理程序将成功结果 `value` 转换为 `{ status:'fulfilled', value }`，将 error `reason` 抓换为 `{ status:'rejected', reason }`，正是 `Promise.allSettled` 的格式。



**Promise.race**

与 `Promise.all` 类似，但**只等待第一个 settled 的 promise 并获取其结果（或 error）**。

语法：

```js
const promise = Promise.race(iterable);
```

例如：

````js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
````

上述代码中**第一个 promise 是最快的，所以它变成了结果，之后其它 promise 的 result/error 都会被忽略**。



**Promise.any**

与 `Promise.race` 类似，区别在于 `Promise.any` **只等待第一个 fulfilled 的 promise**，并将 fulfilled 的 promise 返回，如果给出的 promise 都 rejected，那么返回的 promise 会带有 `AggregateError` —— **一个特殊的 error 对象，在其 `errors` 属性中存储着所有 promise error**。

语法：

```js
const promise = Promise.any(iterbale);
```

例如：

```js
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

上述代码中**虽然第一个 promise 是最快的，但是被 rejected 了，所以第二个 promise 成为了结果，之后其它的 promise 的 result/error 都会被忽略**。

所有 promise 都失败的例子：

```js
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ouch!')), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error!')), 2000))
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});
```

正如上述代码所示，可以在 `AggregateError` 错误类型的 error 实例的 `errors` 属性中可以访问到失败的 promise 的 error 对象。



**Promise.resolve/reject**

在现代代码中，很少需要使用 `Promise.resolve` 和 `Promise.reject` 方法，**因为 `async/await` 语法使它们变得有些过时**。



**Promise.resolve**

`Promise.resolve(value)` 用结果 `value` 创建一个 resolved 的 promise。

等同于：

``` js
const promise = new Promise(resolve => resolve(value));
```

当一个函数被期望返回一个 promise 时，可以使用 `Promise.resolve(value)` 将 `value` “封装” 进 promise，以满足期望返回一个 promise 的需求。

例如：

```js
const catch = new Map();

function loadCached(url) {
  if(cache.has(url)) {
    return Promise.resolve(cache.get(url)); // 如果已经缓存了结果，则直接返回 resolve 的结果
  }
  
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url, text);
      return text;
    });
}
```

因为 `loadCached(url)` 函数保证返回一个 promise，可以放心的在 `loadedCached` 后面使用 `.then`。



**Promise.reject**

`Promise.reject(error)` 用 `error` 创建一个 rejected 的promise。

例如：

```js
const promise = new Promise((resolve, reject) => reject(error));
```

实际上该方法几乎从未被使用过。



## Promisification

Promisification 是指将一个接受回调的函数转换为一个返回 promise 的函数。

很多函数和库都是基于回调的，所以实际开发中经常会需要进行这种转换，因为 promise 更加方便，所以将基于回调的函数和库 promise 化是有意义的。

例如前面的 `loadScript(src, callback)`。

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// 用法：
// loadScript('path/script.js', (err, script) => {...})
```

基于 `loadScript(src, callback)` 创建一个新函数 `loadScriptPromise(src)`，与上面的函数作用相同，**只是这个函数返回一个 promise 而不是使用回调**。

``` js
const loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (error, script) => {
      if(error) reject(error);
      else resolve(script);
    });
  });
};

// 用法：
// loadScriptPromise('path/script.js').then(...)
```

上述代码中，新函数是对原始的 `loadScript` 函数的包装，新函数调用它，并提供了自己的回调来将其转换为 promise `resolve/reject`。

在实际开发中，可能需要 promise 化很多函数，所以使用一个 helper（辅助函数）很有意义。

将其称为 `promisify(f)`：**它接受一个需要被 promise 化的函数 `f`，并返回一个包装（wrapper）函数**。

```js
function promisify(f) {
  return function(...args) { // 返回一个包装函数
    return new Promise((resolve, reject) => {
      function callback(error, result) { // 对 f 的自定义的回调
        if(error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
      
      args.push(callBack); // 将自定义的回调附加到 f 参数（arguments）的末尾
      
      f.apply(this, args); // 调用原始的函数
    });
  };
}

// 用法：
// const loadScriptPromise = promisify(loadScript);
// loadScriptPromise(...).then(...);
```

如果原始的 `f` 期望一个带有更多参数的回调 `callback(error, result1, result2, ...)`，需要继续改进上面的辅助函数。

- 当它以 `promisify(f)` 的形式调用时，它应该与前面版本的工作方式类似

- 当它以 `promisify(f, true)` 的形式调用时，它应该返回**以回调函数数组为结果 resolve 的 promise**

  ```js
  function promisify(f, manyArgs = false) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        function callback(error, ...results) { // 自定义的 f 的回调
          if(error) {
            reject(error);
          } else {
            // 如果 manyArgs 被指定，则使用所有回调的结果 resolve
            resolve(manyArgs ? results : results[0]);
          }
        }
        
        args.push(callBack);
        
        f.apply(this, args);
      });
    };
  }
  ```

  该版本与前面的实现基本相同，**只是根据 `manyArgs` 来判断是否决定仅使用一个还是所有参数调用 `resolve`**。

  对于一些更加奇特的回调格式，例如根本没有 `err` 的格式：`callback(result)`，可以手动 promise 化这样的函数，不需要使用 helper。

  也有一些更加灵活的 promisification 函数模块（module），例如 [es6-promisify](https://github.com/digitaldesignlabs/es6-promisify)，在 Node.js 中，有一个内建的 promise 化的函数 `util.promisify`。

  **⚠️ 注意：** Promisification 虽然是一种很好的方法，但**不是回调的完全替代，因为一个 promise 只有一个结果，但从技术上讲，一个回调可能会被调用多次**，所以 Promisification **只适用于调用一次回调的函数，进一步的调用将被忽略**。



## 微任务（Microtask）

**promise 的处理程序 `.then`、`.catch` 和 `.finally` 都是异步的**。

即使一个 promise 立即被 resolve，**`.then`、`.catch` 和 `.finally` 下面的代码也会在这些处理程序之前被执行**。

例如：

```js
const promise = Promise.resolve();

promise.then(() => alert('promise done!'));

alert('code finished'); // 这个 alert 先显示
```

上述代码运行首先看到的是 `code finished`，然后才是 `promise done`。



**微任务队列（Microtask queue）**

异步任务需要适当的管理，为此，ECMA 标准制定了一个内部队列 `PromiseJobs`，**通常被称为 “微任务队列（microtask queue）”（V8 术语）**。

如[规范](https://tc39.github.io/ecma262/#sec-jobs-and-job-queues)中所述：

- **队列（queue）是先进先出的：** 首先进入队列的任务会首先运行
- **只有在 JavaScript 引擎中没有其它任务在运行时，才开始执行任务队列中的任务**

简单来说，当一个 promise 准备就绪时，它的 `.then/catch/finally` 处理程序就会被放入队列中，**但它们不会立即被执行。当 JavaScript 引擎执行完当前的代码，它会从队列中获取任务并执行它**。

这也就是为什么前面示例中 code finished 会先显示：

![image-20250726153020820](images/image-20250726153020820.png)

promise 的处理程序总是会经过这个内部队列。

如果一个包含多个 `.then/catch/finally` 的链，那么它们中的每一个都是异步执行的，也就是说，**它会首先进入队列，然后在当前代码执行完成并且先前排队的处理程序都完成时才会被执行**。

如果执行顺序很重要，例如要让前面代码示例中的 `code finished` 在 `promise done` 之后显示，只需要像下面这样使用 `.then` 将其放入队列中：

```js
Promise.resolve()
  .then(() => alert('promise done!'))
  .then(() => alert('code finished'));
// 现在代码按预期顺序执行
```



**未处理的 rejection**

**如果一个 promise 的 error 未被在微任务队列的末尾进行处理，则会出现 “未处理的 rejection”**。

通常来说，如果预期可能会发生错误，会在 promise 链上添加 `.catch` 来处理 error：

```js
const promise = Promise.reject(new Error('Promise Failed!'));
promise.catch(error => alert('caught'));

// 不会运行：error 已经被处理
window.addEventListener('unhandledrejection', event => alert(event.reason));
```

如果忘记添加 `.catch`，JavaScript 引擎会在**微任务队列清空后**检查是否存在未处理的 Promise reject 或者 error，然后触发 `unhandledrejection` 事件：

```js
const promise = Promise.reject(new Error('Promise Failed!'));

// 会运行：Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));
```

如果迟一点处理这个 error：

```js
const promise = Promise.reject(new Error('Promise Failed!'));
setTimeout(() => promise.catch(error => alert('caught')), 1000);

window.addEventListener('unhandledrejection', event => alert(event.reason));
```

运行上述代码，会先显示 `Promise Failed!`，然后才是 `caught`。

之所以会这样，是因为 `setTimeout` 是属于**宏任务队列 (Macrotask Queue）**，同步代码执行完成，然后 JavaScript 引擎在**微任务队列清空后**检查发现**存在未处理的 Promise reject**，所以触发了 `unhandledrejection` 事件，随后宏任务队列中的 `setTimeout` 执行结束 **`.catch` 处理器被放入微任务队列中**，最后，微任务队列被清空， `.catch` 被执行。



## async/await

`async/await` 是**以更舒适的方式**使用 promise 的一种特殊语法，同时它非常易于理解和使用。



**async function**

`async` 关键字可以被放置在一个函数的前面，例如：

```js
async function f() {
  return 1;
}
```

函数前的 `async` 关键字表示：**这个函数总是返回一个 promise：**

- **如果返回的是一个普通值（如数组、字符串、对象），它会自动被包装成一个 resolved 的 promise**
- **如果返回的是一个 promise（无论是 `resolve` 还是 `reject`），它会被直接返回，不会被再次包装**
- **如果在函数内部 `throw` 一个错误，这个错误会导致返回的 promise 变为 rejected**

例如函数返回一个结果为 `1` 的 resolved promise：

```js
async function f() {
  return 1;
}

f().then(alert); // 1
```

显式返回一个 promse，结果也是一样的：

```js
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```



**await**

`await` 关键字通常和 `async` 关键字一起使用，**它只能在 `async` 函数内工作**。

语法：

```js
// 只在 async 函数内工作
const value = await promise;
```

**作用：关键字 `await` 让 JavaScript 引擎等待直到 promise 完成（settled）并返回结果**。

例如下面的例子是 1 秒后 resolve 的 promise：

```js
async function f() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });
  
  const result = await promise; // 等待，直到 promise resolve
  
  alert(result); // done!
}

f();
```

相比于 `promise.then`，它只是获取 promise 的结果的一个更优雅的语法，更易于读写。

**⚠️ 注意：** 

- `await` 实际上会暂停函数的执行，直到 promise 状态变为 settled，然后以 promise 的结果继续执行，**但这个行为不会消耗任何 CPU 资源，因为 JavaScript 引擎可以同时处理其它任务：执行其它脚本，处理事件等**

- **不能再普通函数中使用 `await`**

  尝试在非 `async` 函数中使用 `await`，会报语法错误：

  ```js
  function f() {
    const promise = Promise.resolve(1);
    const result = await promise; // SyntaxError: await is only valid in async functions and the top level bodies of modules
  }
  ```

  **`await` 关键字只有在 `async` 函数中有效**。

- **现代浏览器在 modules 里允许顶层的 `await`**

  在现代浏览器中，**当处在一个 module 中时，在顶层使用 `await` 是被允许的**，例如：

  ```js
  const response = await fetch('/article/promise-chaining/user.json');
  const user = await response.json();
  
  console.log(user);
  ```

  **⚠️ 注意：** 如果没有使用 modules 或者必须兼容旧版本浏览器，可以使用一个更通用的方法：**包装到匿名的异步函数中**，例如：

  ```js
  (async () => {
    const response = await fetch('/article/promise-chaining/user.json');
    const user = await response.json();
  })();
  ```

- **`await` 接受 “thenables” 对象**

  像 `promise.then` 那样，`await` 允许使用 “thenables” 对象（具有可调用的 `then` 方法的对象），例如：

  ```js
  class Thenable {
    constructor(num) {
      this.num = num;
    }
    
    then(resolve, reject) {
      alert(resolve);
      setTimeout(() => resolve(this.num * 2), 1000);
    }
  }
  
  async function f() {
    const result = await new Thenable(1); // 等待 1 秒，之后 result 变为 2
    alert(result); // 2
  }
  
  f();
  ```

  上述代码中 `await` 接收了一个非 promise 但是提供了 `.then` 方法的对象，它就会调用这个 `.then` 方法，并将内建的函数 `resolve` 和 `reject` 作为参数传入（就像它对待一个常规的 `Promise` executor 时一样），然后 `await` 等待直到这两个函数中的某个被调用，然后使用得到的结果继续执行后续任务。

- **Class 中的 async 方法**

  要声明一个 Class 中的 async 方法，只需要在对应方法前加上 `async` 即可：

  ```js
  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(alert); // 1（alert 等同于 result => alert(result)）
  ```



**Error 处理**

如果一个 promise 正常 resolve，`await promise` 返回的就是其结果，但如果 `promise` 被 reject，它将抛出这个 error，就像在这一行有一个 `throw` 语句一样。

例如：

``` js
async function f() {
  await Promise.reject(new Error('Whoops!'));
}
```

等同于：

```js
async function f() {
  throw new Error('Whoops!');
}
```

在实际开发中，promise 可能需要一点时间后才能 reject，在这种情况下，`await` 抛出一个 error 之前会有一个延时，可以使用 `try...catch` 来捕获这个 error，与常规的 `throw` 使用是一样的方式：

```js
async function f() {
  try {
    const response = await fetch('http://no-such-url');
  } catch(error) {
    alert(error); // TypeError: Failed to fetch
  }
}

f();
```

如果有 error 发生，执行控制权马上就会被移至 `catch` 块，也可以使用 `try` 包装多行 `await` 代码：

```js
async function f() {
  try {
    const response = await fetch('/no-user-here');
    const user = await response.json();
  } catch(err) {
    // 捕获到 fetch 和 response.json 中的错误
    alert(err);
  }
}

f();
```

如果没有 `try...catch`，由异步函数 `f()` 调用生成的 promise 将变为 rejected，可以在函数调用后面添加 `.catch` 来处理这个 error：

```js
async function f() {
  const response = await fetch('http://no-such-url');
}

f().catch(alert); // TypeError: failed to fetch
```

如果忘记添加 `.catch`，那么就会得到一个未处理的 promise error，可以通过全局事件处理程序 `unhandledrejection` 来捕获这类错误。

**⚠️ 注意：**

- **当使用 `async/await` 时几乎不会用到 `.then`**，因为 `await` 处理了等待，并且使用常规的 `try...catch` 比 `.catch` 更加方便

- **当在代码顶层时，语法上不能使用 `await`，这时通常的做法是添加 `.then/catch` 来处理最终的结果或掉出来的 error**

- **`async/await` 可以和 `Promise.all` 一起使用**

  当需要同时等待多个 promise 时，可以使用 `Promise.all` 将它们包装起来，然后使用 `await`：

  ```js
  const result = await Promise.all([
    fetch(url1),
    fetch(url2),
    // ...
  ]);
  ```

  如果出现了 error，也会正常传递，从失败了的 promise 传到 `Promise.all`，可以通过 `try...catch` 在调用周围捕获异常。



## generator

常规函数只会返回一个单一值（或者不返回任何值）。

而 generator 可以按需一个接一个返回多个值，它们可以与 iterable 完美配合使用，可以轻松的创建数据流。



**generator 函数**

要创建一个 generator，需要一个特殊的语法结构：`function*`，即所谓的 **“generator function”**。

像下面这样：

```js
function* generatorSequence() {
  yield 1;
  yield 2;
  return 3;
}
```

generator 函数与常规函数的行为不同：**此类函数被调用时，它不会运行其内部代码，而是返回一个被称为 “generator object” 的特殊对象，来管理执行流程**。

例如：

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();
alert(generator); // [object Generator]
```

上述代码中的**函数体代码还没有开始执行**：

![image-20250728090242610](images/image-20250728090242610.png)

一个 “generator object” 主要的方法就是 `next()`，当 `next()` 方法被调用时，它会**恢复上述函数体中代码的运行，执行到最近的 `yield <value>` 语句（`value` 可以被省略，默认为 `undefined`），然后函数执行暂停，并将产出的（yielded）值返回到外部代码**。

`next()` 的结果始终是一个具有两个属性的对象：

- `value`：产出的（yielded）的值
- `done`：如果 generator 函数已执行完成则为 `true`，否则为 `false`

例如：

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();

const one = generator.next();

alert(JSON.stringify(one)); // {value: 1, done: false}
```

上述代码截止目前，只获取了第一个值，函数执行处在第二行：

![image-20250728091106246](images/image-20250728091106246.png)

当再次调用 `generator.next()` 时，代码恢复执行并返回下一个 `yield` 的值：

```js
const two = generator.next();

alert(JSON.stringify(two)); // {value: 2, done: false}
```

![image-20250728091257524](images/image-20250728091257524.png)

当第三次调用 `generator.next()` 时，代码会执行到 `return` 语句，此时完成了这个函数的执行：

```js
const three = generator.next();

alert(JSON.stringify(three)); // {value: 3, done: true}
```

![image-20250728091525589](images/image-20250728091525589.png)

现在 generator 执行完成，再对 `generator.next()` 进行新的调用不再有任何意义，它将返回相同的对象：`{done: true}`

**⚠️ 注意：`function* f(...)` 或 `function *f(...)` 两种语法都对，但通常更倾向第一种语法**，因为星号 `*` 表示它是一个 generator 函数，它描述的是函数种类而不是名称，因此 `*` 应该和 `function` 关键字紧贴一起。



**generator 是可迭代的**

“‘generator object” 是可迭代的，可以使用 `for..of` 循环遍历它的值：

```js
function* generatorSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generatorSequence();

for(const value of generator) {
  alert(value); // 1，然后是 2
}
```

`for..of` 的写法比使用 `.next().value` 更加优雅。

**⚠️ 注意：** 上述代码会先显示 `1`，然后是 `2`，**不会显示 `3`**，因为当 `done: true` 时，`for..of` 循环会忽略最后一个 `value`，所以**要通过 `for..of` 循环显示所有结果，必须使用 `yield` 返回它们**：

```js
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorSequence();

for(const value of generator) {
  alert(value); // 1，然后是 2，然后是 3
}
```

因为 “‘generator object” 是可迭代的，**可以使用 iterator 的所有相关功能**，例如：spread 语法 `...`：

```js
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 3
```



**使用 generator 进行迭代**

有一个可迭代的 `range` 对象，它返回 `from...to` 的值。

例如：

```js
const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

alert([...range]); // 1,2,3,4,5
```

上述代码也可以使用 generator 函数来作为 `Symbol.iterator`，使用 generator 进行迭代：

```js
const range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert([...range]); // 1,2,3,4,5
```

这段代码与之前的写法功能相同，但结构更加紧凑和简洁。

这段代码之所以可以正常工作，因为 `range[Symbol.iterator]()` 返回了一个 generator，而 generator 方法正是 `for..of` 所期望的：

- 它具有 `.next()` 方法
- 它以 `{value: ..., done: true/false}` 的形式返回值

这并不是巧合，generator 被添加到 JavaScript 语言中是有对 iterator 的考量，以便更容易实现 iterator。

**⚠️ 注意：generator 可以永远产出（yield）值**，前面的例子中生成了有限的序列，但也可以创建一个生成无限序列的 generator，它可以一直产出（yield）值，**这种情况下需要在 generator 的 `for..of` 循环中添加一个 `break`（或者 `return`），否则循环将永远重复下去并挂起**。



**generator 组合**

generator 组合是 generator 的一个特殊功能，它**允许透明地（transparently）将 generator 彼此 “嵌入（embed）” 到一起**。

例如，有一个生产数组序列的函数：

```js
function* generatorSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
```

如果想复用它来生成一个更复杂的序列：

- 首先是数字 `0..9`（字符代码为 48…57），
- 接下来是大写字母 `A..Z`（字符代码为 65…90）
- 接下来是小写字母 `a...z`（字符代码为 97…122）

可以对这个序列进行应用，例如：这个序列可以用来生成密码。

在常规函数中，要合并其它多个函数的结果，需要调用它们，并存储它们的结果，最后将它们合并在一起。

对于 generator 而言，可以**使用 `yield*` 这个特殊的语法将一个 generator “嵌入”（组合）到另一个 generator 中**，例如：

```js
function* generatorSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatorPasswordCodes() {
  // 0...9
  yield* generatorSequence(48, 57);
  
  // A...Z
  yield* generatorSequence(65, 90);
  
  // a...z
  yield* generatorSequence(97, 122);
}

let str = '';

for(let code of generatorPasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```

**`yield*` 指令将执行委托给另一个 generator**，意味着 `yield* gen` 在 generator `gen` 上进行迭代，**将其产出（yield）的值透明地（transparently）转发到外部，好像这些值就是由外部的 generator yield 的一样**。

执行结果与内嵌套 generator 中的代码获得的结果相同：

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {
  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;
  
  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;
  
  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;
}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

alert(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```

generator 组合（composition）是将一个 generator 流插入到另一个 generator 流的自然的方式，它**不需要使用额外的内存来存储中间结果**。



**yield 是一条双向路**

generator 和可迭代对象类似，都是用来生成值的特殊语法，但**实际上 generator 更加强大且灵活**。

**`yield` 是一条双向路（two-way street）：它不仅可以向外返回结果，还可以将外部的值传递到 generator 内**。

**通过调用 `generator.next(arg)`，就可以将参数 `arg` 传递到 generator 内部，这个 `arg` 参数会变成 `yield` 的结果**。

例如：

``` js
function* gen() {
  const result = yield '2 + 2 = ?'; // (*)
  
  alert(result);
}

const generator = gen();

const question = generator.next().value; // yield 返回的 value

generator.next(4); // 将结果传递到 generator 中，作为 yield '2 + 2 = ?' 的值赋值给 result
```

![image-20250728103447224](images/image-20250728103447224.png)

1. 第一次调用 `generator.next()` 应该是不带参数的（如果带参数，那么参数也会被忽略），它开始执行并返回第一个 `yield '2 + 2 = ?'` 的结果，此时 generator 执行暂停，而停留在 `(*)` 行上
2. 然后像图片中显示的那样，`yield` 的结果进入调用代码中的 `question` 变量
3. 在 `generator.next(4)`，generator 恢复执行，并获得了 `4` 作为结果：`let result = 4`

**⚠️ 注意：外部代码不必立即调用 `next(4)`**，外部代码可能需要一些时间，这没问题：generator 将等待它，例如：

```js
// 一段时间后恢复 generator
setTimeout(() => generator.next(4), 1000);
```

与常规函数不同，generator 和调用 generator 的代码可以通过在 `next/yield` 中传递值来交换结果。

看另一个例子：

```js
function* gen() {
  const ask1 = yield '2 + 2 = ?';
  
  alert(ask1); // 4
  
  const ask2 = yield '3 * 3 = ?';
  
  alert(ask2); // 9
}

const generator = gen();

alert(generator.next().value); // 2 + 2 = ?

alert( generator.next(4).value ); // 3 * 3 = ?

alert( generator.next(9).done ); // true
```

执行图：

![image-20250728104513017](images/image-20250728104513017.png)

1. 第一个 `.next()` 启动了 generator 的执行......执行到达第一个 `yield`
2. 结果被返回到外部代码中
3. 第二个 `.next(4)` 将 `4` 作为第一个 `yield` 的结果传递回 generator 并恢复 generator 的执行
4. 执行到达第二个 `yield`，它变成了 generator 调用的结果
5. 第三个 `next(9)` 将 `9` 作为第二个 `yield` 的结果传入 generator 并恢复 generator 的执行，执行现在到达了函数的最底部，所以返回 `done: true`

**每个 `next(value)`（除了第一个）传递一个值到 generator 中，该值变成了当前 `yield` 的结果，然后获取下一个 `yield` 的结果**。



**generator.throw**

外部代码可能会将一个值传递到 generator，作为 `yield` 的结果，也可以在那里抛出一个 error。

**要向 `yield` 传递一个 error，应该调用 `generator.throw(error)`**，这种情况下，`error` 将被抛到对应的 `yield` 所在的行。

例如：

```js
function* gen() {
  try {
    const result = yield '2 + 2 = ?'; // (1)
    
    alert('执行不到这里，因为上面抛出了异常');
  } catch (error) {
    alert(error); // Error: 我的数据库中找不到答案
  }
}

const generator = gen();

const question = generator.next().value;

generator.throw(new Error('我的数据库中找不到答案')); // (2)
```

上述代码中，在 `(2)` 行引入到 generator 的 error 导致了在 `(1)` 行中 `yield` 出现了一个异常，`try..catch` 捕获并显示了这 error。

如果没有捕获它，那么就会像其它异常一样将从 generator “掉出” 到调用代码中。

调用代码的当前行是 `generator.throw` 所在的那一行，标记为 `(2)`，也可以在这里捕获它，像下面这样：

```js
function* generate() {
  let result = yield "2 + 2 = ?"; // 这行出现 error
}

const generator = generate();

const question = generator.next().value;

try {
  generator.throw(new Error('我的数据库中找不到答案'));
} catch (error) {
  alert(error); // Error: 我的数据库中找不到答案
}
```

上述代码中没有 generator 内部捕获 error，所以 error 会 “掉入” 外部的调用代码（如果有），如果在外部也没有捕获，则会杀死脚本。



**generator.return**

`generator.return(value)` **完成 generator 的执行并返回给定的 `value`**。

```js  
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();               // { value: 1, done: false }
g.return('CodePencil'); // { value: "CodePencil", done: true }
g.next();               // { value: undefined, done: true }
```

**⚠️ 注意：** 如果在**已完成的 generator 上再次使用 `generator.return()`**，它会再次返回该值，例如：

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();               // { value: 1, done: false }
g.next();               // { value: 2, done: false }
g.next();               // { value: 3, done: false }
g.next();               // { value: undefined, done: true }
g.return('CodePencil'); // { value: 'CodePencil', done: true }
```

它**不会执行生成器函数体内部的任何代码**，只是**形式上返回指定值并标记为已完成**。

通常不会使用它，因为大多数时候想要获取所有的返回值，但**当想要在特定条件下停止 generator 时它会很有用**。



## 异步迭代和 generator

**异步迭代允许对按需通过异步请求而得到的数据进行迭代**，例如：通过网络分段（chunk-by-chunk）下载数据时，异步生成器（generator）使这一步骤更加方便。



**异步可迭代对象**

当值是以异步的形式出现时，例如在 `setTimeout` 或者另一种延迟之后，就需要**异步迭代**。

最常见的场景是：对象需要发送一个网络请求以传递下一个值。

要使用对象异步迭代：

1. **使用 `Symbol.asyncIterator` 取代 `Symbol.iterator`**
2. **`next()` 方法应该返回一个 `promise`**（带有下一个值，并且状态为 `fulfilled`）
   - 关键字 `async` 可以实现这一点，可以简单地使用 `async next()`
3. **应该使用 `for await (let item of iterable)` 循环来迭代这样的对象**
   - 注意关键字 `await`

例如：

```js
const range = {
  from: 1,
  to: 5,
  
  [Symbol.asyncIterator]() { // (1)
    return {
      current: this.from,
      last: this.to,
      
      async next() { // (2)
        // 可以在 async next 内部使用 await
        await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
        
        if(this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {
  for await (let value of range) { // (4)
    alert(value); // 1,2,3,4,5
  }
})();
```

上述代码中可以看到，其结构与常规的 iterator 类似：

1. 为了使一个对象可以异步迭代，**它必须具有方法 `Symbol.asyncIterator`** `(1)`
2. **这个方法必须返回一个带有 `next()` 方法的对象**，`next()` 方法会返回一个 promise `(2)`
3. 这个 `next` 方法可以不是 `async` 的，它可以是一个返回值是一个 promise 的常规的方法，但是使用 `async` 关键字可以允许在方法内部使用 `await`，更加方便，这里只是用于延迟 1 秒的操作 `(3)`
4. **使用 `for await(let value of range)` `(4)` 来进行迭代**，在 `for` 后面添加 `await`，它会调用一次 `range[Symbol.asyncIterator]()` 方法，然后调用它的 `next()` 方法获取值

以下是 iterator 与 异步 iterator 之间差异的表格：

|                          | iterator          | **异步 iterator**      |
| :----------------------- | :---------------- | ---------------------- |
| 提供 iterator 的对象方法 | `Symbol.iterator` | `Symbol.asyncIterator` |
| `next()` 返回的值是      | 任意值            | `Promise`              |
| 要进行循环，使用         | `for..of`         | `for await..of`        |

**⚠️ 注意：Spread 语法 `...` 无法异步工作**。

需要常规的同步 iterator 的功能，无法与异步 iterator 一起使用，例如：

```js
alert( [...range] ); // Uncaught TypeError: range is not iterable
```

上述代码出现错误，是因为**它期望找到 `Symbol.iterator`，而不是 `Symbol.asyncIterator`**。

`for..of` 的情况跟这个一样：**没有 `await` 关键字时，期望找到的是 `Symbol.iterator`**。



**异步 generator**

对于大多数异步生成一系列值的对象时，可以使用异步 generator。

**语法：在 `function*` 前面加上 `async`，就可以使 generator 变为异步的**。

然后使用 `for await (...)` 来遍历它，像下面这样：

```js
async function* generatorSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    yield i;
  }
}

(async () => {
  const generator = generatorSequence(1, 5);
  for await (let value of generator) {
    alert(value);
  }
})();
```

因为 generator 是异步的，所以可以在其内部使用 `await`，依赖于 promise，执行网络请求等任务。

**⚠️ 注意：** 从技术上讲异步 generator 和常规的 generator 在内部是有区别的。

对于**异步 generator，`generator.next()` 方法是异步的，它返回 `promise`**。

常规 generator 使用 `result = generator.next()` 来获取值，但**在一个异步 generator 中，应该添加 `await` 关键字**，像下面这样：

```js
const result = await generator.next(); // // result = {value: ..., done: true/false}
```

这就是为什么异步 generator 可以和 `for await...of` 一起工作的原因。



**异步可迭代对象 range**

常规的 generator 可以用作 `Symbol.iterator` 以使迭代代码更短。

类似的，异步的 generator 可用作 `Symbol.asyncIterator` 实现异步迭代。

例如前面的代码**可以使用异步的 `Symbol.asyncIterator` 替换同步的 `Symbol.iterator`，来使对象 `range` 异步地生成值**：

```js
const range = {
  from: 1,
  to: 5,
  
  async *[Symbol.asyncIterator]() {
    for(let value = this.from; value <= this.to; value++) {
      // 在 value 之简暂停一会儿，等待一些东西
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      yield value;
    }
  }
};

(async () => {
  for await (let value of range) {
    alert(value); // 1，然后 2，然后 3，然后 4，然后 5
  }
})();
```

**⚠️ 注意：** 从技术上讲，**可以把 `Symbol.iterator` 和 `Symbol.asyncIterator` 同时都添加到一个对象中**，因此它既可以是同步的（`for..of`）也可以是异步的（`for await..of`）可迭代对象，**但实际上这将是一件很奇怪的事情，不推荐两者同时添加**。



## 模块（Module）

随着应用越来越大，会想要将其拆分为多个文件，即所谓的 **“模块（module）”**，一个模块可以包含用于特定目的类或函数库。

很长一段时间，JavaScript 都没有语言级别（language-level）的模块语法，因为最初的脚本又小又简单，没有必要将其模块化。

但最终脚本变得越来越复杂，所以社区发明了许多方法来将代码组织到模块中，使用特殊的库按需加载模块。

场景的有以下几个：

- **AMD** —— 最古老的模块系统之一，最初由 [require.js](http://requirejs.org/) 库实现
- **Common** —— 为 Node.js 服务器创建的模块系统
- **UMD** —— 另一个模块系统，建议作为通用的模块系统，它与 AMD 和 CommonJS 都兼容

现在它们都慢慢成为历史的一部分，但仍然可以在旧脚本中找到它们。

语言级的模块系统在 2015 年的时候出现在了标准（ES6）中，即 **ES6 模块系统**，此后逐渐发展，**现在已经得到了所有主流浏览器和 Node.js 的支持**。



**什么是模块**

一个模块（module）就是一个文件，一个脚本就是一个模块。

模块之间可以相互加载，并使用特殊的指令 `export` 和 `import` 来交换功能，从一个模块调用另一个模块的函数：

- `export` 关键字标记了可以**从当前模块外部访问的变量和函数**
- `import` 关键字允许**从其它模块导入功能**

例如，有一个 `sayHi.js` 文件导出了一个函数：

```js
// sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

然后在另一个文件中可能导入并使用了这个函数：

```js
// main.js
import { sayHi } from './sayHi.js';

alert(sayHi); // function...
sayHi('CodePencil'); // Hello, CodePencil!
```

`import` 指令通过相对于当前文件的路径 `./sayHi.js` 加载模块，并将导入的函数 `sayHi` 分配给相应的变量。

由于模块支持特殊的关键字和功能，所以**必须通过使用 `<script type="module">` 特性（attribute）来告诉浏览器，此脚本应该被当做模块来对待**。

```js
// say.js
export function sayHi(user) {
  return `Hello, ${user}!`;
}
```

```html
<!doctype html>
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('CodePencil');
</script>
```

上述代码**浏览器会自动获取并解析（evaluate）导入的模块（如果需要，还可以分析该模块的导入），然后运行该脚本**。

**⚠️ 注意：模块只能通过 HTTP(S) 工作，而非本地**，如果尝试通过 `file://` 协议在本地打开一个网页，会发现 `import/export` 指令不起作用，可以使用本地 Web 服务器，例如 [static-server](https://www.npmjs.com/package/static-server#getting-started)，或者使用编辑器的 “实时服务器” 功能，例如 VS Code 的 [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 来测试模块。



**模块核心功能**

模块与 “常规” 脚本相比，具有以下核心功能，对浏览器和服务端的 JavaScript 来说都有效：

- **模块始终使用 “use strict”**

  **模块始终在严格模式下运行**，例如：对一个未声明的变量赋值将产生错误：

  ```html
  <script type="module">
    a = 5; // Uncaught ReferenceError: a is not defined
  </script>
  ```

  

- **每个模块都有自己的顶级作用域（top-level scope）**

  简单来说，**一个模块中的顶级作用域变量和函数在其它脚本中是不可见的**。

  例如：

  - user.js

    ```js
    let user = 'CodePencil';
    ```

  - hello.js

    ```js
    alert(user); // Uncaught ReferenceError: user is not defined
    ```

  - index.html

    ```html
    <!doctype html>
    <script type="module" src="user.js"></script>
    <script type="module" src="hello.js"></script>
    ```

  上述代码中 `hello.js` 脚本尝试使用 `user.js` 中声明的变量 `user` 时出现了错误，因为**它是一个单独的模块**。

  **模块应该 `export` 它们想要被外部访问的内容，并 `import` 它们所需的内容**。

  - `user.js` 应该导出 `user` 变量
  - `hello.js` 应该从 `user.js` 模块中导入它

  **对于模块，应该使用导入/导出功能而不是依赖全局变量**。

  下面是正确的变体：

  - user.js

    ```js
    export let user = 'CodePencil';
    ```

  - hello.js

    ```js
    import { user } from './user.js';
    alert(user); // CodePencil
    ```

  - index.html

    ```js
    <!doctype html>
    <script type="module" src="hello.js"></script>
    ```

    在浏览器中，**对于 HTML 页面，每个 `<script type="module">` 都存在独立的顶级作用域**。

    下面是同一个页面上的两个脚本，都是 `type="module"`，它们**看不到彼此的顶级变量**：

    ```html
    <script type="module">
      let user = 'CodePencil';
    </script>
    
    <script type="module">
      alert(user); // Uncaught ReferenceError: user is not defined
    </script>
    ```

    **⚠️ 注意：** 在浏览器中，可以通过将变量显式分配给 `window` 的一个属性，使其称为窗口级别的全局变量，例如：`window.user = 'CodePencil'`，这样所有的脚本都会看到它，无论是否带有 `type="module"`，**创建这种全局变量不是一种好的方式，应该尽量避免**。

  

- **模块代码仅在第一次导入时被解析**

  **如果同一个模块被导入到多个其它位置，那么它的代码只会执行一次（即在第一次被导入时）**，然后将其导出（export）的内容提供给进一步的导入（importer）。

  如果执行一个模块中的代码会带来副作用（side-effect），例如显示一条消息，那么多次导入它只会触发一次，例如：

  ```js
  // alert.js
  alert('模块已执行');
  ```

  ```js
  // 在不同的文件中导入相同的模块
  // 📁 1.js
  import `./alert.js`; // 模块已执行
  
  // 📁 2.js
  import `./alert.js`; // (什么都不显示)
  ```

  第二次导入后什么也没显示，因为模块已经执行过了。

  **⚠️ 注意：顶层模块代码应该用于初始化，创建模块特定的内部数据结构，如果需要多次调用某些东西，应该将其以函数的形式导出**。

  假设一个模块导出了一个对象：

  ```js
  // admin.js
  export const admin = {
    name: 'CodePencil',
  };
  ```

  这个模块被导入到多个文件中，**模块仅在第一次被导入时解析，并创建 `admin` 对象，然后将其传入到所有的导入**。

  所有的导入都只获得了一个唯一的 `admin` 对象：

  ```js
  // 1.js
  import { admin } from './admin.js';
  admin.name = 'Pete';
  
  // 2.js
  import { admin } from './admin.js';
  alert(admin.name); // Pete
  ```

  上述代码中，当 `1.js` 中修改了导入的 `admin` 中的 `name` 属性时，在 `2.js` 中可以看到新的 `admin.name`。

  **因为模块只会执行一次，生成导出，然后这些导出在导入之间共享**，因此如果修改了 `admin` 对象，在其它导入中也会看到。

  **这种行为实际上非常方便，因为它允许配置模块**。

  模块可以提供需要配置的功能，例如身份验证需要凭证，模块可以导出一个配置对象，期望外部代码可以对其进行赋值。

  经典的使用模式：

  1. 模块导出一些配置方法，例如配置一个对象
  2. 在第一次导入时，对其进行初始化，写入其属性，可以在应用顶级脚本中进行此操作
  3. 进一步导入使用模块

  例如：

  ``` js
  // admin.js
  export let config = {};
  
  export function sayHi() {
    alert(`服务已准备, ${config.user}`);
  }
  ```

  这里 `admin.js` 导出了 `config` 对象（最初是空的，但也可能有默认属性）。

  然后在 `init.js` 中使用第一个脚本，从 `init.js` 中导入 `config` 并配置 `config.user`：

  ```js
  // init.js
  import { config } from './admin.js';
  config.user = 'CodePencil';
  ```

  现在模块 `admin.js` 已经是被配置过的了。

  其它导入可以调用它，它会正确显示当前用户：

  ```js
  // another.js
  import { sayHi } from './admin.js';
  
  sayHi(); // 服务已准备, CodePencil
  ```

  
  
- **import.meta**

  `import.meta` 对象包含关于当前模块的信息。

  它的内容取决于其所在的环境，在浏览器环境中，它包含当前脚本的 URL，或者如果它是在 HTML 中的话，则包含当前页面的 URL。

  ```html
  <script type="module">
    alert(import.meta.url); // 脚本的 URL
    // 对于内联脚本来说，则是当前 HTML 页面的 URL
  </script>
  ```

  

- **在一个模块中，“this” 是 undefined**

  在一个模块中，顶级 `this` 是 `undefined`。

  下面是模块和非模块脚本的比较：

  ```html
  <script>
    alert(this); // window
  </script>
  
  <script type="module">
    alert(this); // undefined
  </script>
  ```



**浏览器特定功能**

与常规脚本相比，拥有 `type="modules"` 标识的脚本有一些特定于浏览器的差异。

- **模块脚本是延迟的**

  模块脚本**总是**被延迟的，与 `defer` 特性对外部脚本和内联脚本的影响相同。

  简单来说：

  - **下载外部脚本 `<script type="module" src="...">` 不会阻塞 HTML 的处理，它会与其它资源并行加载**
  - **模块脚本会等到 HTML 文档完全准备就绪（即使它们很小并且比 HTML 加载速度更快），然后才会运行**
  - 保持脚本的相对顺序：在文档中排在前面的脚本先执行

  例如：模块脚本总是会 “看到” 已完全加载的 HTML 页面，包括在它们下方的 HTML 元素。

  ```html
  <script type="module">
    alert(typeof button); // object：脚本可以“看见”下面的 button
    // 因为模块是被延迟的（deferred，所以模块脚本会在整个页面加载完成后才运行
  </script>
  
  <script>
    alert(typeof button); // undefined，脚本看不到下面的元素
    // 常规脚本会立即运行，常规脚本的运行是在在处理页面的其余部分之前进行的
  </script>
  
  <button id="button">Button</button>
  ```

  **⚠️ 注意：** 上述代码中，**第二个脚本实际上要先于第一个脚本运行**，所以会先看到 `undefined`，然后才是 `object`，因为模块脚本是被延迟执行的，要等到 HTML 页面被处理完成后才会执行它，而常规脚本则会立即运行，所以会先看到常规脚本的输出。

  **当使用模块脚本时，用户可能会在 JavaScript 应用程序准备好之前看到该页面，但此时某些功能还无法使用，应该放置 “加载指示器（loading indicator）”，或者以其它方式确保访问者不会因此而感到困惑**。

  

- **async 适用于内联脚本（inline script）**

  **对于非模块脚本，`async` 特性仅适用于外部脚本**，异步脚本会在准备好后立即运行，独立于其它脚本或 HTML 文档。

  **对于模块脚本，它也适用于内联脚本**。

  例如，下面的内联脚本具有 `async` 特性，因此它不会等待任何东西。

  ```html
  <!-- 所有依赖都获取完成（analytics.js）然后脚本开始运行 -->
  <!-- 不会等待 HTML 文档或者其他 <script> 标签 -->
  <script async type="module">
    import {counter} from './analytics.js';
    
    counter.count();
  </script>
  ```

  **⚠️ 注意：** 这对于不依赖任何其它东西的功能是非常棒的，例如：计数器、广告，文档级事件监听器。

  

- **外部脚本**

   具有 `type="module"` 的**外部脚本**在以下两个方面有所不同：

  1. **具有相同 `src` 的外部脚本仅运行一次**：

     ```html
     <!-- 脚本 my.js 被加载完成（fetched）并只被运行一次 -->
     <script type="module" src="my.js"></script>
     <script type="module" src="my.js"></script>
     ```

  2. **从另一个源获取外部脚本需要 CORS heaer**

     简单来说，如果一个模块脚本是从另一个源获取的，则远程服务器必须提供表示允许获取的 header `Access-Control-Allow-Origin`。

     ```html
      <!-- another-site.com 必须提供 Access-Control-Allow-Origin -->
     <!-- 否则，脚本将无法执行 -->
     <script type="module" src="http://another-site.com/their.js"></script>
     ```
  
     默认这样做可以确保更好的安全性。

     

- **不允许裸模块（“bare” module）**

     **在浏览器中，`import` 必须给出相对或绝对的 URL 路径，没有任何路径的模块被称为 “裸（bare）模块”**，在 `import` 中不允许这种模块。

     例如下面的 `import` 是无效的：

     ```js
     import {sayHi} from 'sayHi'; // Error，“裸”模块
     // 模块必须有一个路径，例如 './sayHi.js' 或者其他任何路径
     ```

     **⚠️ 注意：** 在某些环境下，**像 Node.js 或者打包工具（bundle tool）允许没有任何路径的裸模块，因为它们有自己的查找模块的方法和钩子（hook）来对它们进行微调**，但是浏览器尚不支持裸模块。
     
     
     
- **兼容性，“nomodule”**

     旧的浏览器不理解 `type="module"`，未知类型的脚本将会被忽略，对此可以使用 `nomodule` 特性来提供一个后备：

     ```html
     <script type="module">
       alert('在现代浏览器中运行');
     </script>
     
     <script nomodule>
       alert("现代浏览器都支持 type=module 和 nomodule，所以会跳过这个")
       alert("旧浏览器忽略具有未知的 type=module，但执行此脚本");
     </script>
     ```

     

**构建工具**

在实际开发中，浏览器模块很少以 “原始” 形式进行使用，通常会使用一些特殊工具，例如：Webpack，将它们打包在一起，然后部署到实际生产环境的服务器。

使用打包工具的一个好处是：它们可以更好的控制模块的解析方式，允许使用裸模块和更多功能，例如：CSS/HTML 模块等。

构建工具做了以下的事情：

1. 从一个打算放在 HTML 中的 `<script type="module">`  “主” 模块开始
2. 分析它的依赖：它的导入，以及它的导入的导入等
3. 使用所有模块构建一个文件（或者多个文件，这是可调的），并用打包函数（bundler function）替代原生的 `import` 调用，以使其正常工作，还支持像 HTML/CSS 模块等 “特殊” 的模块类型
4. 在处理过程中，可能会应用其他转换和优化：
   - 删除无法访问的代码
   - 删除未使用的导出（“tree-shaking”）
   - 删除特定于开发的像 `console` 和 `debugger` 这样的语句
   - 可以使用 [Babel](https://babeljs.io/) 将前沿的现代的 JavaScript 语法转换为具有类似功能的旧的 JavaScript 语法
   - 压缩生成的文件（删除空格，用短的名字替换变量等）

如果我们使用打包工具，那么脚本会被打包进一个单一文件（或者几个文件），在这些脚本中的 `import/export` 语句会被替换成特殊的打包函数（bundler function），所以最终打包好的脚本中不包含任何 `import/export`，它也不需要 `type="module"`，可以放入常规的 `<script>`：

```html
<!-- 假设从诸如 Webpack 这类的打包工具中获得了 bundle.js 脚本 -->
<script src="bundle.js"></script>
```



## 导出和导入

导出（export）和导入（import）指令有几种语法变体。



**在声明前导出**

可以在声明之前可以放置 `export` 来标记任意声明导出，无论声明的是变量、函数还是类都可以。

例如：

```js
// 导出数组
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 导出 const 声明的变量
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 导出类
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

**⚠️ 注意：在类或者函数的前的 `export` 不会让它们变成函数表达式**，尽管被导出了，但它仍然是一个函数声明。

大部分 JavaScript 样式指南都不建议在函数和类声明后使用分号，这就是为什么在 `export class` 和 `export function` 的末尾不需要加分号：

```js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}  // 在这里没有分号 ;
```



**导出与声明分开**

还可以将 `export` 分开放置。

例如：

```js
// say.js
function sayHi(user) {
  alert(`Hello, ${user}!`)；
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // 导出变量列表
```

从技术上讲，也可以把 `export` 放在函数上面。



**import ***

通常要把导入的东西列在花括号 `import {...}` 中，像下面这样：

```js
// main.js
import { sayHi, sayBye } from './say.js';

sayHi('CodePencil'); // Hello, CodePencil!
sayBye('CodePencil'); // Bye, CodePencil!
```

如果有很多要导入的内容，**可以使用 `import * as <obj>` 将所有内容导入为一个对象**，例如：

```js
import * as say from './say.js';

say.sayHi('CodePencil');
say.sayBye('CodePencil');
```

乍一看，将所有内容都导入看起来很酷，写起来也短，但**通常还是要明确列出需要导入的内容**。

因为以下几个原因：

1. **现代构建工具（webpack 和其它工具）将模块打包到一起会对其进行优化**，以加快加载速度并删除未使用的代码

   例如向项目中添加一个第三方库 `say.js`，它具有许多函数：

   ```js
   // say.js
   export function sayHi() { ... }
   export function sayBye() { ... }
   export function becomeSilent() { ... }
   ```

   现在如果只在项目里使用了 `say.js` 中的一个函数：

   ``` js
   // main.js
   import { sayHi } from './say.js';
   ```

   那么优化器（optimizer）就会检测它，并从打包好的代码中删除那些未被使用的函数，从而使构建更小，这就是所谓的 **“摇树（tree-shaking）”**。

2. **明确列出要导入的内容会使得名称较短**：`sayHi()` 而不是 `say.sayHi()`

3. **导入的显式列表可以更好地概述代码结构**：使用的内容和位置，它使得代码支持重构，并且重构起来更容易



**import as**

可以使用 `as` 让导入具有不同的名字。

例如：

```js
// main.js
import { sayHi as hi, sayBye as bye } from './say.js';

hi('CodePencil'); // Hello, CodePencil!
bye('CodePencil'); // Bye, CodePencil!
```



**export as**

导出也具有类似的语法。

将函数导出为 `hi` 和 `bye`：

```js
// say.js
// ...
export {sayHi as hi, sayBye as bye};
```

现在 `hi` 和 `bye` 是在外面使用时的正式名称：

```js
// main.js
import { hi, bye } from './say.js';

hi('CodePencil'); // Hello, CodePencil!
bye('CodePencil'); // Bye, CodePencil!
```



**export default**

在实际开发中，主要有两种模块。

- 包含库或函数包的模块，像上面的 `say.js`
- 声明单个实体的模块，例如：模块 `user.js` 仅导出 `class User`

**大部分情况下，开发者倾向使用第二种方式，以便每个 “东西” 都存在于它自己的模块中**。

当然，这需要大量文件，因为每个东西都需要自己的模块，但这根本不是问题，实际上如果文件具有良好的命名，并且文件夹结构得当，那么代码导航（navigation）会变得容易。

模块提供一个特殊的默认导出 `export default` 语法，放在要导出的实体前：

```js
// user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}
```

**每个文件应该只有一个 `export default`**：

然后**将其导入不需要使用花括号**：

```js
// main.js
import User from './user.js'; // 不需要花括号 { User }，只需要写成 User 即可
new User('CodePencil');
```

**⚠️ 注意：** 不使用花括号导入看起来很酷，刚开始使用模块时，一个常见的错误就是忘记写花括号，需要记住，`import` 命名的导出时需要花括号，而 `import` 默认的导出时不需要花括号。

| 命名的导出                 | 默认的导出                        |
| :------------------------- | :-------------------------------- |
| `export class User {...}`  | `export default class User {...}` |
| `import { User } from ...` | `import User from ...`            |

从技术上讲，**可以在一个模块中同时有默认的导出和命名的导出，但实际上通常不会混合使用它们，模块要么是命名的导出要么是默认的导出**。

因为每个文件最多只能有一个默认的导出，所以导出的实体可能没有名称。

例如：

```js
export default class { // 没有类名
  constructor() { ... }
}
```

```js
export default function(user) { // 没有函数名
  alert(`Hello, ${user}!`);
}
```

```js
// 导出单个值，而不使用变量
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

不指定名称是可以的，因为每个文件只有一个 `export default`，因此不带花括号的 `import` 知道要导入的内容是什么。

如果没有 `default`，这样的导出将出错：

```js
export class { // Error!（非默认的导出需要名称）
  constructor() {}
}
```



**default 名称**

在某些情况下，**`default` 关键字被用于引用默认的导出**。

例如，要将函数与其定义分开导出：

```js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

export { sayHi as default }; // 就像在函数之前添加了 export default 一样
// 等同于 export default sayHi;
```

或者，另外一种情况，假设模块 `user.js` **导出了一个主要的默认的导出和一些命名的导出**（这种情况很少见，但确实会发生）：

```js
// user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

在导入时需要按照如下方式：

```js
// main.js
import { default as User, sayHi } from './user.js';

new User('CodePencil');
```

如果将所有东西 `*` 作为一个对象导入，那么 `default` 属性正是默认的导出：

```js
// main.js
import * as user from './user.js';

const User = user.default; // 默认的导出
new User('CodePencil');
```



**应该使用默认的导出吗？**

命名的导出是明确的，它们确切的命名了它们要导出的内容，所以可以从它们获得这些信息，这是一件好事。

**命名的导出会强制使用正确的名称进行导入**：

```js
import { User } from './user.js';
// 导入 { MyUser } 不起作用，导入名字必须为 { User }
```

**对于默认的导出，总是在导入时选择名称**：

```js
import User from './user.js'; // 有效
import MyUser from './user.js'; // 也有效
// 使用任何名称导入都没有问题
```

因此，**团队成员可能会使用不同的名称来导入相同的内容，这不好**。

通常为了避免这种情况并使代码保持一致，可以遵从这条规则：**导入的变量应与文件名相对应**，例如：

```js
import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';
// ...
```

**⚠️ 注意：** 一些团队仍然认为这是默认的导出的严重缺陷，**所以他们更倾向于始终使用命名的导出，即使只导出一个东西，也仍然使用命名的导出，而不是默认的导出**。

**这也使得重新导出更容易**。



**重新导出**

重新导出（Re-export）语法 `export ... from ...` 允许导入内容，并立即将其导出（可能是用的是其他的名字），像下面这样：

```js
export { sayHi } from './say.js'; // 重新导出 sayHi

export { default as User } from './user.js'; // 重新导出 default
```

为什么要重新导出，想象一下正在编写一个 package：一个包含大量模块的文件夹，其中一些功能是导出到外部的（像 NPM 这样的工具允许我们发布和分发这样的 package，但不是必须要去使用它们），并且其中一些模块仅仅是供其它 package 中的模块内部使用的 “helpers”。

文件结构可能是这样的：

```
auth/
    index.js
    user.js
    helpers.js
    tests/
        login.js
    providers/
        github.js
        facebook.js
        ...
```

希望通过单个入口暴露包的功能，**简单来说就是想使用包的人，应该只从 “主文件” `auth/index.js` 导入**。

像这样：

```js
import { login, logout } from 'auth/index.js';
```

“主文件”，`auth/index.js` 导出了希望在包中提供的所有功能。

这样做是因为其它使用包的开发者不应该干预其内部结构，不应该搜索包文件夹中的文件，**只在 `auth/index.js` 中导出必要的部分，并保持其它内容 “不可见”**。

由于实际导出的功能分散在 package 中，所以可以将它们导入到 `auth/index.js`，然后再从中导出它们：

```js
// auth/index.js

// 导入 login/logout 然后立即导出它们
import { login, logout } from './helpers.js';
export { login, logout };

// 将默认导出导入为 User，然后导出它
import User from './user.js';
export { User };

// ...
```

语法 `export ... from ...` 是前面这种导入\-导出的简写。

```js
// auth/index.js
// 重新导出 login/logout
export { login, logout } from './helpers.js';

// 将默认导出重新导出为 User
export { default as User } from './user.js';

// ...
```

**⚠️ 注意：`export ... from` 与 `import/export` 相比明显的区别是重新导出的模块在当文件中不可用**，所以在上面的 `auth/index.js` 示例中不能使用重新导出的 `login/logout` 函数。



**重新导出默认导出**

重新导出时，**默认导出需要单独处理**。

假设有一个 `user.js` 脚本，其中写了 `export default class User`，想要重新导出类 `User`：

```js
// user.js
export default class User {
  // ...
}
```

可能会遇到这两个问题：

1. **`export User from './user.js'` 无效**，会导致一个语法错误

   **要重新导出默认导出，必须明确写出 `export { default as User }`**，像之前的例子中一样。

2. **`export * from './user.js'` 重新导出只导出了命名的导出，但是忽略了默认的导出**

   如果想将命名的导出和默认的导出都重新导出，需要两条语句：

   ```js
   export * from './user.js'; // 重新导出命名的导出
   export { default } from './user.js'; // 重新导出默认的导出
   ```

   重新导出一个默认导出的这种奇怪现象，是某些开发者不喜欢默认导出的原因之一。



从技术上讲，下面这样的代码没有问题：

```js
sayHi();

// ...

import { sayHi } from './say.js'; // 在文件底部导入
```

**在实际开发中，导入通常位于文件的开头，但是这只是为了更加方便**。

**⚠️ 注意：在 `{...}` 中的 `import/export` 语句无效**。

```js
if (something) {
  import { sayHi } from './say.js'; // Error: import must be at top level
}
```

如果真的需要根据某些条件来进行导入或者在某些合适的时间导入，例如：根据请求（request）加载模块，需要使用**动态导入**。



## 动态导入

导入和导出的语句被称为 **“静态” 导入**，语法非常简单且严格。

不能动态生成 **“静态” 导入** `import` 的任何参数。

**模块的路径必须是原始类型字符串，不能是函数调用**，下面这样行不通：

```js
import ... from getModuleName(); // Error, only from "string" is allowed
```

其次，**无法根据条件或者在运行时导入**：

```js
if(...) {
   import ...; // Error, not allowed!
}

{
  import ...; // Error, we can't put import in any block
}
```

**之所以这样是因为 `import/export` 提供代码结构的主干**，这样便于分析代码结构，可以收集模块，可以使用特殊的工具将收集的模块打包到一个文件中，可以删除为使用的导出（“tree-shaken”），这些只有在 `import`/`export` 结构简单且固定的情况下才能够实现。



**import() 表达式**

**`import(module)` 表达式加载模块并返回一个 promise，该 promise resolve 为一个包含其所有导出的模块对象**，可以在代码中的任意位置调用这个表达式。

例如：

```js
const modulePath = prompt('Which module to load?');

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>);
```

或者如果在异步函数中，可以使用 `let module = await import(modulePath)`。

例如，有模块 `say.js`：

```js
// say.js
export function hi() {
  alert(`Hello`);
}

export function bye() {
  alert(`Bye`);
}
```

可以像下面这样进行动态导入：

```js
const { hi, bye } = await import('./say.js');

hi();
bye();
```

或者，如果 `say.js` 有默认的导出：

```js
// 📁 say.js
export default function() {
  alert("Module loaded (export default)!");
}
```

那么为了访问它，可以使用模块对象的 `default` 属性：

```js
const obj = await import('./say.js');
const say = obj.default;

say();
```

**⚠️ 注意：**

- **动态导入在常规脚本中工作时，不需要 `<script type="module">`**

  ```html
  <script>
    async function load() {
      let say = await import('./say.js');
      say.hi(); // Hello!
      say.bye(); // Bye!
      say.default(); // Module loaded (export default)!
    }
  </script>
  <button onclick="load()">Click me</button>
  ```

- **`import()` 看起来像一个函数调用，但它只是一种特殊语法**，恰好使用了括号（类似于 `super()`），不能将 `import` 赋值到一个变量中或者对其使用 `call/apply`，因为它不是一个函数



## Proxy 和 Reflect

一个 `Proxy` 对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们。

**Proxy 被用于许多库和某些浏览器框架中**。



**Proxy**

语法：

```js
const proxy = new Proxy(target, handler);
```

- **`target`** —— 要包装的对象，可以是任何东西，包括函数
- **`handler`** —— 代理配置：带有 **“捕捉器”（“traps”，即拦截操作的方法）**的对象，例如 `get` 捕捉器用于读取 `target` 的属性，`set` 捕捉器用于写入 `target` 的属性，等等

**对 `proxy` 进行操作，如果在 `handler` 中存在相应的捕捉器，它将运行，并且 `Proxy` 有机会对其进行处理，否则将直接对 `target` 进行处理**。

首先，创建一个没有任何捕捉器的代理（Proxy）：

```js
const target = {};
const proxy = new Proxy(target, {}); // 空的 handler 对象

proxy.test = 5; // 写入 proxy 对象（1）
alert(target.test); // 5，test 属性出现在了 target 中

alert(proxy.test); // 5，也可以从 proxy 对象读取它（2）

for(let key in proxy) alert(key); // test，迭代也可以正常工作
```

上述代码中，由于没有捕捉器，所有对 `proxy` 的操作都**直接转发**给了 `target`。

1. 写入操作 `proxy.test =` 会将值写入 `target`
2. 读取操作 `proxy.test` 会从 `target` 返回对应的值
3. 迭代 `proxy` 会从 `target` 返回对应的值

**没有任何捕捉器，`proxy` 是一个 `target` 的透明包装器（wrapper）**。

![image-20250729181147148](images/image-20250729181147148.png)

`Proxy` 是一种特殊的 **“奇异对象（exotic object）”**，它没有自己的属性，如果 `handler` 为空，则透明地将操作转发给 `target`。

**要激活更多功能，需要添加捕捉器**。

**对于对象的大多数操作，JavaScript 规范中有一个所谓的 “内部方法”，它描述了最底层的工作方式**，例如：`[[Get]]` 用于读取属性的内部方法，`[[Set]]` 用于写入属性的内部方法，等等，**这些 “内部方法” 仅在规范中使用，不能直接通过方法名调用它们**。

**`Proxy` 捕捉器会拦截这些方法的调用**，它们在 proxy 规范](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots) 和下表中被列出。

对于每个内部方法，此表中都有一个捕捉器：可用于添加到 `new Proxy` 的 `handler` 参数中的用来拦截操作的方法的名称：

| 内部方法                | Handler 方法               | 何时触发                                                     |
| :---------------------- | :------------------------- | :----------------------------------------------------------- |
| `[[Get]]`               | `get`                      | 读取属性                                                     |
| `[[Set]]`               | `set`                      | 写入属性                                                     |
| `[[HasProperty]]`       | `has`                      | `in` 操作符                                                  |
| `[[Delete]]`            | `deleteProperty`           | `delete` 操作符                                              |
| `[[Call]]`              | `apply`                    | 函数调用                                                     |
| `[[Construct]]`         | `construct`                | `new` 操作符                                                 |
| `[[GetPrototypeOf]]`    | `getPrototypeOf`           | [Object.getPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) |
| `[[SetPrototypeOf]]`    | `setPrototypeOf`           | [Object.setPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) |
| `[[IsExtensible]]`      | `isExtensible`             | [Object.isExtensible](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) |
| `[[PreventExtensions]]` | `preventExtensions`        | [Object.preventExtensions](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) |
| `[[DefineOwnProperty]]` | `defineProperty`           | [Object.defineProperty](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [Object.defineProperties](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) |
| `[[GetOwnProperty]]`    | `getOwnPropertyDescriptor` | [Object.getOwnPropertyDescriptor](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), `for..in`, `Object.keys/values/entries` |
| `[[OwnPropertyKeys]]`   | `ownKeys`                  | [Object.getOwnPropertyNames](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames), [Object.getOwnPropertySymbols](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols), `for..in`, `Object.keys/values/entries` |

**⚠️ 注意：** JavaScript 强制执行某些**不变量（Invariant）**—— **内部方法和捕捉器必须满足的条件**。

其中大多数用于返回值：

- `[[Set]]` 如果值已经**写入成功，则必须返回 `true`，否则返回 `false`**
- `[[Delete]]` 如果**已成功删除该值，则必须返回 `true`，否则返回 `false`**
- ……依此类推

还有其它一些不变量，例如：

- 应用于代理（proxy）对象的 `[[GetPrototypeOf]]`，必须返回与应用于被代理对象的 `[[GetPrototypeOf]]` 相同的值，换句话说就是**指读取代理对象的原型必须始终返回被代理对象的原型**

**捕捉器可以拦截这些操作，但是必须遵循上面这些规则**。

不变量可以确保语言功能的正确和一致的行为，如果不做奇怪的事情，可能就不会违反它们。



**带有 get 捕捉器的默认值**

最常见的捕捉器是用于读取/写入的属性。

要拦截读取操作，`handler` 应该有 **`get(target, property, receiver)`** 方法。

读取属性时触发该方法，参数如下：

- **`target`** —— 是目标对象，该对象被作为第一个参数传递给 `new Proxy`
- **`property`** —— 目标属性名
- **`receiver`** —— 如果目标属性是一个 getter 访问器属性，**则 `receiver` 就是本地读取属性所在的 `this` 对象**，通常这就是 `proxy` 对象本身（或者，如果从 `proxy` 继承，则是从该 `proxy` 继承的对象）

例如使用 `get` 来**创建一个对不存在的数组项返回 `0` 的数组**：

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, property) {
    if(property in target) {
      return target[property];
    } else {
      return 0; // 默认值
    }
  }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0
```

通常在试图读取不存在的数组项时，会得到 `undefined`，上述代码将常规数组包装到代理（proxy）中，以捕获读取操作，并在没有要读取的属性时返回 `0`。

使用 `get` 捕捉器很容易实现，可以想象一下，有一本词典，上面有短语及其翻译：

```js
let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

alert( dictionary['Hello'] ); // Hola
alert( dictionary['Welcome'] ); // undefined
```

上述代码中没有要读取的短语，从 `dictionary` 读取它将返回 `undefined`，但实际上返回未翻译的短语通常比 `undefined` 要好，因此这种情况下返回一个未翻译的短语来替代 `undefined`。

下面是将 `dictionary` 包装进一个拦截读取操作的代理：

```js
let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) { // 拦截读取属性操作
    if(phrase in target) { // 如果词典中有该短语
      return target[phrase];
    } else {
      return phrase; // 否则返回未翻译的短语
    }
  }
});

// 在词典中查找任意短语
alert( dictionary['Hello'] ); // Hola
alert( dictionary['Welcome to Proxy'] ); // Welcome to Proxy
```

**⚠️ 注意：代理应该在所有地方都完全替代目标对象，目标对象被代理后，任何人都不应该再引用目标对象**，否则很容易出问题。

```js
dictionary = new Proxy(dictionary, ...);
```



**使用 set 捕捉器进行验证**

当写入属性时 `set` 捕捉器被触发。

**`set(target, property, value, receiver)`**：

- **`target`** —— 是目标对象，该对象被作为第一个参数传递给 `new Proxy`
- **`property`** —— 是目标属性名称
- **`value`** —— 是目标属性的值
- **`receiver`** —— 与 `get` 捕捉器类似，仅与 setter 访问器属性有关

如果写入操作成功，`set` 捕捉器应该返回 `true`，否则返回 `false`（触发 `TypeError`）。

例如，想要一个专门用于数字的数组，**如果添加了其它类型的值，则应该抛出一个错误**：

```js
let numbers = [];

numbers = new Proxy(numbers, {
  set(target, property, value) {
    if(typeof value === 'number') {
      target[property] = value;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // 添加成功
numbers.push(2); // 添加成功
alert('Length is: ' + numbers.length); // 2

numbers.push('test'); // Uncaught TypeError: proxy set handler returned false for property '2'
```

**⚠️ 注意：数组的内建方法依然有效**，值被使用 `push` 方法添加到数组后，数组的 `length` 属性会自动增加，代理对象 `proxy` 没有破坏任何东西。

**不必重写诸如 `push` 和 `unshift` 等添加元素的数组方法**，就可以在其中添加检查，**因为在内部它们使用代理所拦截的 `[[Set]]` 操作**。

**对于 `set` 操作，它必须在成功写入时返回 `true`**，如果忘记这样做，或返回任何假（falsy）值，则该操作触发 `TypeError`。



**使用 ownKeys 和 getOwnPropertyDescriptor 进行迭代**

`Object.keys`、`for..in` 循环和大多数其它遍历对象属性的方法**都使用内部方法 `[[OwnPropertyKeys]]`（由 `ownKeys` 捕捉器拦截）来获取属性列表**。

这些方法在细节上有所不同：

- `Object.getOwnPropertyNames(obj)` 返回非 symbol 键
- `Object.getOwnPropertySymbols(obj)` 返回 symbol 键
- `Object.keys/values()` 返回带有 `enumerable` 标志的非 symbol 键/值
- `for..in` 循环遍历所有带有 `enumerable` 标志的非 symbol 键，以及原型对象的键

下面的示例中，使用 `ownKeys` 捕捉器拦截 `for..in` 对 `user` 的遍历，并使用 `Object.keys` 和 `Object.values` 来跳过下划线 `_` 开头的属性：

```js
let user = {
  name: 'CodePencil',
  age: 23,
  _password: '***'
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// ownKeys 过滤掉了 _password
for(let key in user) alert(key); // name，然后是 age

// 对这些方法的效果相同：
alert( Object.keys(user) ); // name,age
alert( Object.values(user) ); // CodePencil,23
```

如果**返回对象中不存在的键，`Object.keys` 并不会列出这些键**：

```js
let user = {};

user = new Proxy(user, {
  ownKeys(target) {
    return ['a', 'b', 'c'];
  }
});

alert(Object.keys(user)); // <empty>
```

**因为 `Object.keys` 仅返回带有 `enumerable` 标志的属性，为了检查它，改方法会对每个属性调用内部方法 `[[GetOwnProperty]]` 来获取它的描述符**，上述代码中因为没有属性，其描述符为空，没有 `enumerable` 标志，所以它被忽略。

**所以要让 `Object.keys` 返回对象中不存在的键，需要拦截对 `[[GetOwnProperty]]` 内部方法的调用（使用 `getOwnPropertyDescriptor` 捕捉器可以做到这一点），并返回带有 `enumerable: true` 的描述符**。

例如：

```js
let user = {};

user = new Proxy(user, {
  ownKeys(target) { // 一旦要获取属性列表就会被调用
    return ['a', 'b', 'c'];
  },
  
  getOwnPropertyDescriptor(target, property) { // 每个属性都会被调用
    return {
      enumerable: true,
      configurable: true
    }
  }
});

alert(Object.keys(user)); // a,b,c
```

**⚠️ 注意：** 上述代码中**必须加上 `configurable: true`**，否则就会违反代理的 **“不变性规则（invariant）”**，如果不加就表示属性是 “不可配置的”，就像是在**伪造了一个锁死的属性**，这是被禁止的。



**具有 deleteProperty 和其它捕捉器的受保护属性**

有一个普遍的约定：**下划线 `_` 开头的属性和方法是内部的，不应该从对象外部访问它们**。

但从技术上讲，依旧可以直接访问这样的属性：

```js
let user = {
  name: 'CodePencil',
  _password: 'secret',
};

alert(user._password); // secret
```

可以使用代理来防止对 `_` 开头的属性的任何访问。

需要使用以下捕捉器：

- `get` 读取此类属性时抛出错误
- `set` 写入属性时抛出错误
- `deleteProperty` 删除属性时抛出错误
- `ownKeys` 在使用 `for..in` 和像 `Object.keys` 这样的方法时排除 `_` 开头的属性

代码如下：

```js
let user = {
  name: 'CodePencil',
  _password: '***',
};

user = new Proxy(user, {
  get(target, property) { // 拦截属性读取
    if(property.startsWith('_')) {
      throw new Error('Access denied');
    }
    
    const value = target[property];
    return (typeof value === 'function') ? value.bind(target) : value; // (*)
  },
  set(target, property, value) { // 拦截属性写入
    if(property.startsWith('_')) {
      throw new Error('Access denied');
    } else {
      target[property] = value;
      return true;
    }
  },
  deleteProperty(target, property) { // 拦截属性删除
    if(property.startsWith('_')) {
      throw new Error('Access denied');
    } else {
      delete target[property];
      return true;
    }
  },
  ownKeys(target) { // 拦截读取属性列表
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// get 不允许读取 _password
try {
  alert(user._password); // Error: Access denied
} catch (error) {
  alert(error.message);
}

// set 不允许写入 _password
try {
  user._password = 'test'; // Error: Access denied
} catch (error) {
  alert(error.message);
}

// deleteProperty 不允许删除 _password
try {
  delete user._password; // Error: Access denied
} catch (error) {
  alert(error.message);
}

// ownKeys 将 _password 过滤出去
for(let key in user) alert(key); // name
```

**⚠️ 注意：** 在上述代码中 `(*)` 行处 `get` 捕捉器的重要细节：

```js
get(target, property) {
  // ...
  let value = target[prop];
  return (typeof value === 'function') ? value.bind(target) : value; // (*)
}
```

这里之所以使用 `value.bind(target)`，是因为对象方法（例如 `user.checkPassword()`）必须能够访问 `_password`：

```js
user = {
  // ...
  checkPassword(value) {
    // 对象方法必须能读取 _password
    return value === this._password;
  }
};
```

对 `user.checkPassword()` **调用会将被代理的对象 `user` 作为 `this`（点符号之前的对象会成为 `this`），因此，当它尝试访问 `this._password` 时，`get` 捕捉器将被激活（在任何属性读取时，它都会被触发）并抛出错误**。

**所以在 `(*)` 行将对象方法的上下文绑定到原始对象 `target`，它将在将来调用时将 `target` 作为 `this`，而不会触发任何捕捉器**。

该解决方案通常可行，但并不理想，**因为一个方法可能会将未被代理的对象传递到其它地方，然后无法区分 “代理对象” 与 “原始对象”**。

例如，绑定的函数时写了：

```js
return (typeof value === 'function') ? value.bind(target) : value;
```

当使用如下方式调用一个方法时：

```js
let fn = user.checkPassword;
fn('test');
```

这个 `fn` 是绑定了原始对象 `target` 的 `checkPassword` 方法，所以它的 `this` 不再是 `user`（即代理对象），而是 `target`（原始对象）。

会出现如下问题：

- 如果某个外部代码把这个绑定后的函数 `fn` 拿走，甚至拿到 `target` 本身（通过某种绕过手段），那么你的私有属性 `_password` 就暴露了
- 当程序中开始出现了两个可能操作的对象——**原始对象和代理对象**，已经丢失了对 “谁是代理对象” 的追踪

此外，一个对象可能会被代理多次（多个代理可能会对该对象添加不同的 “调整”），并且如果将未包装的对象传递给方法，可能会产生意想不到的后果。

**因此，在任何地方都不应该使用这种代理**。

JavaScript 引擎原生支持 class 中的私有属性，私有属性以 `#` 为前缀，**私有属性不需要通过代理来拦截读取、写入、删除操作**，它本身就无法从类外访问。



**带有 has 捕捉器 in range**

假如有一个 `range` 对象：

```js
let range = {
  start: 1,
  end: 10
};
```

想使用 `in` 操作符来检查一个数字是否在 `range` 范围内。

**`has` 捕捉器会拦截 `in` 调用**。

`has(target, property)`

- **`target`** —— 是目标对象，被作为第一个参数传递给 `new Proxy`
- **`property`** —— 属性名称

代码如下：

```js
let range = {
  start: 1,
  end: 10
};

range = new Proxy(range, {
  has(target, property) {
    return property >= target.start && property <= target.end;
  }
});

alert(5 in range); // true
alert(50 in range); // false
```



**包装函数 apply**

可以将代理包装在函数周围。

**`apply(target, thisArg, args)` 捕捉器可以使代理以函数的方式被调用**：

- **`target`** —— 目标对象（在 JavaScript 中，函数就是一个对象）
- **`thisArg`** —— 是 `this` 的值
- **`args`** —— 是参数列表

不使用 proxy，使用函数包装器来实现 `delay(f, ms)` 装饰器：

```js
function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 在进行这个包装后，sayHi 函数会被延迟 3 秒后被调用
sayHi = delay(sayHi, 3000);

sayHi('CodePencil'); // Hello, CodePencil!
```

上述代码在大多数情况下都是可行的，但是**包装函数不会转发函数的属性读取/写入操作或者任何其它操作，进行包装后，就失去了对原始函数属性的访问，例如 `name`、`length` 及其它属性**：

```js
function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

alert(sayHi.length); // 1（函数的 length 是函数声明中的参数个数）

sayHi = delay(sayHi, 3000);

alert(sayHi.length); // 0（在包装器声明中，参数个数为 0)
```

`proxy` 的功能要强大的多，因为它可以将所有东西转发到目标对象：

```js
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  })
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length); // 1

sayHi('CodePencil');
```

结果是相同的，但现在不仅仅是调用，代理上的所有操作都会被转发到原始函数，所以上述代码中 `sayHi.length` 会返回正确的结果。



**Reflect**

`Reflect` 是一个内建对象，可以**简化 `proxy` 的创建**。

**内部方法，例如 `[[Get]]` 和 `[[Set]]` 等都是规范性的，不能直接调用**。

`Reflect` 对象使调用这些内部方法成为了可能，它的方法是内部方法的最小包装。

以下是执行相同操作和 `Reflect` 调用的示例：

| 操作                | `Reflect` 调用                      | 内部方法        |
| :------------------ | :---------------------------------- | :-------------- |
| `obj[prop]`         | `Reflect.get(obj, prop)`            | `[[Get]]`       |
| `obj[prop] = value` | `Reflect.set(obj, prop, value)`     | `[[Set]]`       |
| `delete obj[prop]`  | `Reflect.deleteProperty(obj, prop)` | `[[Delete]]`    |
| `new F(value)`      | `Reflect.construct(F, value)`       | `[[Construct]]` |
| …                   | …                                   | …               |

例如：

```js
let user = {};

Reflect.set(user, 'name', 'CodePencil');

alert(user.name); // CodePencil
```

尤其是 **`Reflect` 允许将操作符（`new`、`delete` 等...）作为函数（`Reflect.construct`、`Reflect.deleteProperty` 等...）执行调用**。

**对于每个可被 `proxy` 捕获的内部方法，在 `Reflect` 中都有一个对应的方法，其名称和参数与 `proxy` 捕捉器相同**，所以可以使用 `Reflect` 来将操作转发给原始对象。

例如：

```js
let user = {
  name: 'CodePencil',
};

user = new Proxy(user, {
  get(target, property, receiver) {
    alert(`GET ${property}`);
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    alert(`SET ${property}=${value}`);
    return Reflect.set(target, property, value, receiver);
  }
});

let name = user.name; // 显示 "GET name"
user.name = 'Pete'; // 显示 "SET name=Pete"
```

上述代码中：

- `Reflect.get` 读取一个对象属性
- `Reflect.set` 写入一个对象属性，**如果写入成功则会返回 `true`，否则返回 `false`**

一切都很简单：如果一个捕获器想将调用转发给对象，则只需要使用相同的参数调用 `Reflect.<method>` 就足够了。

**⚠️ 注意：在大多数情况下，可以不使用 `Reflect` 完成相同的事情**，例如：用于读取属性的 `Reflect.get(target, property, receiver)` 可以被替换为 `target[property]`，**但两者存在细微的差别**。

通过一个示例来说明为什么 `Reflect.get` 更好，例如代理一个 getter：

```js
let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

let useProxy = new Proxy(user, {
  get(target, property, receiver) {
    return target[property];
  }
});

alert(useProxy.name); // Guest
```

在上述代码中 `get` 捕捉器是 “透明的”，它返回原来的属性，不会做任何其它的事情。

当另一个对象 `admin` 从 `user` 继承后，可以观察到错误的行为：

```js
let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, property, receiver) {
    return target[property]; // (*) target = user
  }
});

let admin = {
  __proto__: userProxy,
  _name: 'Admin',
};

alert(admin.name); // 输出 Guest (?!?)
```

上述代码中，读取 `admin.name` 应该返回 `Admin` 而不是 `Guest`。

继承方面是没有问题的，如果移除代理，一切都按预期进行。

**问题实际上出在代理中，在 `(*)` 行中**：

1. 当读取 `admin.name` 时，由于 `admin` 对象自身没有对应的属性，搜索将转到其原型

2. 原型是 `userProxy`

3. 从代理读取 `name` 属性时，`get` 捕捉器会被触发，并从原始对象返回 `target[property]` 属性，在 `(*)` 行

   **当调用 `target[property]` 时，若 `property` 是一个 getter，它将在 `this = target` 上下文中运行其代码，所以结果是来自原始对象 `target` 的 `this._name`，即 `user._name`**。

为了解决这种情况，需要使用 `get` 捕捉器的第三个参数 `receiver`，它保证将正确的 `this` 传递给 `getter`，在本例子中正确的 `this` 是 `admin`。

**对于常规函数，可以使用 `call/apply`，但这是一个 getter，不能 “被调用” ，只能被访问**。

`Reflect.get` 可以做到，如果使用它，一切都会正常运行。

这是更正之后的代码：

```js
let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, property, receiver) {
    return Reflect.get(target, property, receiver); // (*)
  }
});

let admin = {
  __proto__: userProxy,
  _name: 'Admin',
};

alert(admin.name); // Admin
```

上述代码中，`receiver` 保留了对正确 `this` 的引用（即 `admin`），该引用是在 `(*)` 行中通过 `Reflect.get` 传递给 getter 的。

还可以把捕捉器写的更短：

```js
get(target, property, receiver) {
  return Reflect.get(...arguments);
}
```

**`Reflect` 调用的命名与捕捉器的命名完全相同，并且接受相同的参数，它们是以这种方式专门设计的**。

所以 **`return Reflect...` 提供了一个安全的方式，可以轻松地转发操作，并确保不会忘记与此相关的任何内容**。



**proxy 的局限性**

代理提供的了一种独特的方法，可以在最底层更改或调整现有对象的行为，**但是它并不完美，有局限性**。



**内建对象：内部插槽（Internal slot）**

许多内建对象，例如 `Map`、`Set`、`Date`、`Promise` 等，都使用了所谓的 **“内部插槽”**。

**它们类似于属性，但仅限于内部使用，仅用于规范目的**，例如，`Map` 将项目（item）存储在了 `[[MapData]]` 中，**内建方法可以直接访问它们，而不通过 `[[Get]]/[[Set]]` 内部方法，所以 `proxy` 无法拦截它们**。

在类似这样的内建对象被代理后，代理对象没有这些内部插槽，所以内建方法将会执行失败：

```js
let map = new Map();

let proxy = new Proxy(map, {});

proxy.set('test', 1); // Uncaught TypeError: Method Map.prototype.set called on incompatible receiver #<Map>
```

在内部，**一个 `Map` 将所有数据存储在 `[[MapData]]` 内部插槽中，代理对应没有这样的插槽，内建方法 `Map.prototype.set` 方法试图访问内部属性 `this.[[MapData]]`，但由于 `this=proxy`，在 `proxy` 中无法找到它，只能失败**。

有一种解决办法：

```js
let map = new Map();

let proxy = new Proxy(map, {
  get(target, property, receiver) {
    let value = Reflect.get(...arguments);
    return typeof value === 'function' ? value.bind(target) : value;
  }
});

proxy.set('test', 1);
alert(proxy.get('test')); // 1
```

现在它正常工作了，因为 `get` 捕捉器将函数属性（例如 `map.set`）绑定到了目标对象（`map`）本身。

此时 `proxy.set(...)` 时内部 `this` 值并不是 `proxy`，而是原始的 `map`，所以当 `set` 内建方法尝试访问 `this.[[MapData]]` 内部插槽时，它会成功。

**⚠️ 注意：`Array` 没有内部插槽，出于历史原因**，因为它出现于很久以前，所以代理数组不会有这个问题。



**私有字段**

类的私有字段也会有类似的情况。

例如，`getName()` 方法访问私有的 `#name` 属性，并在代理后中断：

```js
class User {
  #name = 'Guest';
  
  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {});

alert(user.getName()); // Uncaught TypeError: Cannot read private member #name from an object whose class did not declare it
```

出现这个问题的原因是**私有字段是通过内部插槽实现的**，JavaScript 在访问它们时不使用 `[[Get]]/[[Set]]`。

在调用 `getName()` 时，**`this` 的值是代理后的 `user`，它没有带有私有字段的插槽**。

再次使用带有 `bind` 方法的解决方案使他恢复正常：

```js
class User {
  #name = 'Guest';
  
  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {
  get(target, property, receiver) {
    let value = Reflect.get(...arguments);
    
    return typeof value === 'function' ? value.bind(target) : value;
  }
});

alert(user.getName()); // Guest
```

**⚠️ 注意：** 就像前面所说的，**该解决方案存在将原始对象暴露给该方法，可能使其进一步传递并破坏其它代理功能的问题**。



**proxy !== target**

代理和原始对象是不同的对象，所以**如果使用原生对象作为键，然后对其进行代理，之后就无法找到代理了**。

例如：

```js
let allUsers = new Set();

class User {
  constructor(name) {
    this.name = name;
    allUsers.add(this);
  }
}

let user = new User('CodePencil');

alert(allUsers.has(user)); // true

user = new Proxy(user, {});

alert(allUsers.has(user)); // false
```

上述代码中，进行代理后，在 `allUsers` 中找不到 `user`，因为代理是一个不同的对象。

**⚠️ 注意：`proxy` 无法拦截严格相等检查 `===`**，`proxy` 可以拦截许多操作符，例如 `new`（使用 `construct`），`in`（使用 `has`），`delete`（使用 `deleteProperty`）等，但是没有办法拦截对于对象的严格相等性检查，**一个对象只严格等于其自身，没有其他值，所以比较对象是否相等的所有操作和内建类都会区分对象和代理，没有透明的替代品**。



**可撤销的 proxy**

一个**可撤销**的代理是可以被禁用的代理。

假设有一个资源，并且想随时关闭对该资源的访问。

可以将它包装成一个可撤销的代理，没有任何捕捉器，这样的代理会将操作转发给对象，并且可以随时将其禁用。

语法：

```js
const { proxy, revoke } = Proxy.revocable(target, handler);
```

该调用返回一个带有 `proxy` 和 `revoke` 函数的对象以将其禁用。

例如：

```js
let object = {
  data: 'Valuable data',
};

const { proxy, revoke } = Proxy.revocable(object, {});

alert(proxy.data); // Valuable data

// 稍后，在代码中取消 proxy
revoke();

// proxy 不再工作（revoked）
alert(proxy.data) // Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
```

上述代码中对 `revoke()` 的调用**会从代理中删除对目标对象的所有内部引用**，所以它们之间再无连接。

最初，`revoke` 与 `proxy` 是分开的，因此可以传递 `proxy`，同时将 `revoke` 留在当前范围内。

**也可以通过设置 `proxy.revoke = revoke` 将 `revoke` 绑定到 `proxy`**。

**另一种选择是创建一个 `WeakMap`，其中 `proxy` 作为键，相应的 `revoke` 作为值，这样可以轻松找到 `proxy` 所对应的 `revoke`**：

```js
let revokes = new WeakMap();

let object = {
  data: 'Valuable data'
};

let { proxy, revoke } = Proxy.revocable(object, {});

revokes.set(proxy, revoke);

// 在代码中的其它位置
revoke = revokes.get(proxy);
revoke();

alert(proxy.data); // Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
```

**⚠️ 注意：**

- **此处之所以使用 `WeakMap` 而不是 `Map`，因为它不会阻止垃圾回收**，如果一个代理对象变得 “不可访问”（例如，没有变量再引用它），则 `WeakMap` 允许将其与它的 `revoke` 一起从内存中清除
- 基准测试（benchmark）取决于引擎，但**通常使用最简单的代理访问属性所需的时间也要长几倍**，实际上，这仅对某些 “瓶颈” 对象来说才重要



## Eval：执行代码字符串

**内建函数 `eval` 允许执行一个代码字符串**。

语法：

```js
const result = eval(code);
```

例如：

```js
let code = 'alert(`Hello`)';
eval(code); // Hello
```

代码字符串可能会比较长，包含换行符、函数声明和变量等。

**`eval` 的结果是最后一条语句的结果**。

例如：

```js
const value = eval('1 + 1');
alert(value); // 2
```

```js
const value = eval('let i = 0; ++i');
alert(value); // 1
```

**`eval` 内的代码在当前词法环境（lexical environment）中执行，因此它可以访问外部变量**：

```js
let a = 1;

function f() {
  let a = 2;
  
  eval('alert(a)'); // 2
}

f();
```

它也可以**更改外部变量**：

```js
let x = 5;
eval('x = 10');
alert(x); // 10，值被更改了
```

**严格模式下，`eval` 有属于自己的词法环境，所以不能从外部访问在 `eval` 中声明的函数和变量**：

```js
'use strict';

eval('let x = 5; function f() {}');

alert(typeof x); // undefined（没有这个变量）
// 函数 f 也不可从外部进行访问
```



**使用 eval**

**现代编程中已经很少使用 `eval`**，人们经常说 `eval` 是魔鬼。

原因很简单：很久之前，JavaScript 是一种非常弱的语言，很多东西只能通过 `eval` 来完成。

如今几乎找不到使用 `eval` 的理由了，如有有人在使用它，那这是一个很好的使用现代语言结构或 JavaScript Module 来替换它们的机会。

**⚠️ 注意：`eval` 访问外部变量的能力会产生副作用**。

代码压缩工具（在把 JS 投入生产环境前对其进行压缩的工具）会将局部变量重命名为更短的变量（例如 `a` 和 `b`），以使代码体积更小，这通常是安全的，但是**在使用了 `eval` 的情况下就不一样了，因为局部变量可能会被 `eval` 中的代码访问到，所以压缩工具不会对所有可能被从 `eval` 中访问的变量进行重命名，导致代码压缩率降低**。

**在 `eval` 中使用外部局部变量也被认为是一个坏的编程习惯**，因为这会使代码维护变得更加困难。

有以下两种方式可以避免此类问题：

- **如果 `eval` 中的代码没有使用外部变量，请以 `window.eval(...)` 的形式调用 `eval`**

  ```js
  let x = 1;
  {
    let x = 5;
    window.eval('alert(x)'); // 1（全局变量）
  }
  ```

  `window.eval(...)` 是作为全局对象的方法调用，**因此作用于全局作用域，所以它无法访问局部变量**。

  

- **如果 `eval` 中的代码需要访问局部变量，可以使用 `new Function` 替代 `eval`，并显式传递参数**

  ```js
  const f = new Function('a', 'alert(a)');
  
  f(5); // 5
  ```

  `new Function` 从字符串创建一个函数，**作用域也是在全局作用域中的，所以它无法访问局部变量**。





## 柯里化（Currying）

柯里化是一种关于函数的高阶技术，不仅被用于 JavaScript，还被用于其它语言。

**柯里化是一种函数的转换，是指将一个函数从可调用的 `f(a, b, c)` 转换为可调用的 `f(a)(b)(c)`**。

**柯里化不会调用函数。它只是对函数进行转换**。

例如，创建一个辅助函数 `curry(f)`，该函数将对两个参数的函数 `f` 执行柯里化：

```js
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// 用法
function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3
```

上述代码实现非常简单：只有两个包装器（wrapper）。

- `curry(func)` 的结果就是一个包装器 `function(a)`
- 当它被像 `curriedSum(1)` 这样调用时，它的参数会被保存在词法环境中，然后返回一个新的包装器 `function(b)`
- 然后这个包装器以 `2` 为参数调用，并且它将调用传递给原始的 `sum` 函数

柯里化更高级的实现，例如 loadsh 库的 [_.curry](https://lodash.com/docs#curry)，会返回一个包装器，**该包装器允许函数被正常调用或者以部分应用函数（partial）的方式调用**：

```js
function sum(a, b) {
  return a + b;
}

const curriedSum = _.curry(sum);

alert( curriedSum(1, 2) ); // 3, 仍可正常调用
alert( curriedSum(1)(2) ); // 3, 以部分应用函数的方式调用
```



**柯里化的好处**

例如有一个用于格式化和输出信息的日志（logging）函数 `log(date, importance, message)`，在实际项目中，此类函数具有很多有用的功能，例如通过网络发送日志（log），不过在这仅使用 `alert`：

```js
function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
```

将它柯里化：

```js
log = _.curry(log);
```

柯里化之后，`log` 仍正常运行：

```js
log(new Date(), 'DEBUG', 'some debug'); // log(a, b, c)
```

也可以以柯里化形式运行：

```js
log(new Date())('DEBUG')('some debug'); // log(a)(b)(c)
```

现在可以轻松地为当前日志创建便捷函数：

```js
let logNow = log(new Date()); // logNow 是带有固定第一个参数的日志的部分应用函数

logNow('INFO', 'message'); // [HH:mm] INFO message
```

现在 `logNow` 是具有固定第一个参数的 `log`，换句话说就是更简短的 ”部分应用函数（partially applied function）“ 或 ”部分函数（partial）“。

可以更进一步，为当前的调试日志提供便捷函数：

```js
let debugNow = logNow('DEBUG');

debugNow('message'); // [HH:mm] DEBUG message
```

所以：

- 柯里化之后，没有丢失任何东西：`log` 依然可以被正常调用
- 可以轻松地生成部分应用函数，例如用于生成今天的日志的部分应用函数



**高级柯里化实现**

```js
// 实现：
function curry(func) {
  return function curried(...args) {
    if(args.length >= func.length) { // (1)
      return func.apply(this, args);
    } else {
      return function(...args2) { // (2)
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// 用例：
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6
alert( curriedSum(1)(2, 3) ); // 6
alert( curriedSum(1)(2)(3) ); // 6
```

上述代码中运行它有两个 `if` 执行分支：

1. 如果传入的 `args` 长度与原始函数所定义的 `func.length` 相同或者更长，那么只需要使用 `func.apply` 将调用传递给它即可
2. 否则获取一个部分应用函数：目前还没调用 `func`。取而代之的是，返回另一个包装器，它将重新应用 `curried`，将之前传入的参数与新的参数一起传入。

如果再次调用它，将得到一个新的部分应用函数（如果没有足够的参数），或者最终的结果。

**⚠️ 注意：**

- **只允许确定参数（形参）长度的函数进行柯里化**，柯里化要求**函数具有固定数量的参数**

- 根据定义柯里化应该将 `sum(a, b, c)` 转换为 `sum(a)(b)(c)`

  但在前面的例子中也支持 `sum(a)(b, c)` 调用，**JavaScript 中大多数的柯里化实现都是高级版本的：使得函数可以被多参数变体调用**



## Reference Type

一个动态执行的方法调用可能会丢失 `this`。

例如：

```js
const user = {
  name: 'CodePencil',
  hi() {
    alert(this.name);
  },
  bye() {
    alert('Bye');
  }
};

user.hi(); // CodePencil，正常运行

// 现在基于 name 来选择调用 user.hi 或 user.bye
(user.name === 'CodePencil' ? user.hi : user.bye)(); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
```

上述代码中最后一行在当前的情形下的结果是 `user.hi`，接着该方法被调用，但是出错了。

此处调用出现了一个错误，是因为调用中的 `this` 的值变成了 `undefined`。

这样是可以工作的（**对象.方法**）：

```js
user.hi();
```

这就无法工作了（**被评估的方法：指方法（函数）先被取出来（被评估），再被调用**）：

```js
(user.name === 'CodePencil' ? user.hi : user.bye)(); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
```



**Reference type 解读**

仔细看的话，可以注意到 `obj.method()` 语句中的两个操作：

1. **首先点 `.`  取了属性 `obj.method` 的值**
2. **接着 `()` 执行了它**

如果将这些操作放在不同的行，**`this` 必定是会丢失的**：

```js
const user = {
  name: 'CodePencil',
  hi() {
    alert(this.name);
  }
};

const hi = user.hi;
hi(); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
```

上述代码中 `hi = user.hi` 把函数赋值给了一个变量，然后在最后一行它是完全独立的，所以这里没有 `this`。

**为了确保 `user.hi()` 调用正常运行，JavaScript 玩了一个小把戏 —— 点 `.` 返回的不是一个函数，而是一个特殊的 Reference Type 的值**。

**Reference Type 是 ECMA 中的一个 “规范类型”，不能直接使用它，但它被用在 JavaScript 语言内部**。

**Reference Type 的值是一个三个值的组合 `(base, name, strict)`**，其中：

- `base` 是对象
- `name` 是属性名
- `strict` 在 `use strict` 模式下为 `true`

在 `user.hi()` 调用运行时，**对属性 `user.hi` 访问结果不是一个函数，而是一个 Reference Type 的值**，对于 `user.hi`，在严格模式下是：

```js
// Reference Type 的值
(user, 'hi', true)
```

**当 `()` 在 Reference Type 上调用时，它们会接收到关于对象和对象方法的完整信息，然后可以设置正确的 `this`（此处 `=user`）**。

Reference Type 是一个特殊的 “中间人” 内部类型，目的是从 `.` 传递信息给 `()` 调用。

**任何例如赋值 `hi = user.hi` 等其它操作，都会将 Reference Type 作为一个整体丢掉，而会取 `user.hi`（一个函数）的值并继续传递**，所以后续的操作都 “丢失” 了 `this`。

因此，**`this` 的值仅在函数直接被点符号 `obj.method()` 或方括号 `obj['method']()` 语法（此处它们作用相同）调用才会被正确传递**，还有很多解决这个问题的方式，例如 `func.bind()`。

**⚠️ 注意：**

- 如下方式调用 `this` 也是正确的。

  ```js
  let user = {
    name: 'CodePencil',
    go: function() { alert(this.name) }
  };
  
  (user.go)() // CodePencil
  ```

  上述代码中 **`(user.go)` 外边这层的括号没有任何作用，通常用它们来设置操作的顺序，但在这里点符号 `.` 总是会先执行**，所以并没有什么影响。

- **除了方法调用之外的任何操作（如赋值 `=` 或 `||`），都会把它转换为一个不包含允许设置 `this` 信息的普通值**

  ```js
  let obj, method;
  
  obj = {
    go: function() { alert(this); }
  };
  
  obj.go();               // [object Object]
  
  (obj.go)();             // [object Object]
  
  // 除了方法调用之外的任何操作
  (method = obj.go)();    // undefined
  
  (obj.go || obj.stop)(); // undefined
  ```



## BigInt

`BigInt` 是一种特殊的数字类型，它提供了**对任意长度整数的支持**。

创建 `BigInt` 的方式有两种：

- **在一个整数字面量后面加 `n`**

  ```js
  const bigint = 1234567890123456789012345678901234567890n;
  ```

  

- **调用 `BigInt` 函数**，该函数从字符串、数字等中生成 `BigInt`

  ```js
  const bigint = BigInt('1234567890123456789012345678901234567890');
  const bigintFromNumber = BigInt(10); // 与 10n 相同
  ```



**数学运算符**

`BigInt` 大多数情况下可以像常规数字一样使用，例如：

```js
alert(1n + 2n); // 3

alert(5n / 2n); // 2
```

**⚠️ 注意：**

- **除法 `5 / 2` 的结果向零进行舍入，舍入后得到的结果没有了小数部分，对 bigint 的所有操作，返回的结果也是 bigint**

- **不可以把 bigint 和常规数字类型混合使用**

  ```js
  alert(1n + 2); // TypeError: Cannot mix BigInt and other types, use explicit conversions
  ```

  如果有需要，**应该显式转换它们：使用 `BigInt()` 或者 `Number()`**，像下面这样：

  ```js
  let bigint = 1n;
  let number = 2;
  
  // 将 number 转换为 bigint
  alert(bigint + BigInt(number)); // 3
  
  // 将 bigint 转换为 number
  alert(Number(bigint) + number); // 3
  ```

  转换操作始终是静默的，绝不会报错，**但是如果 bigint 太大而普通数字类型无法容纳，则会截断多余的位，所以应该谨慎进行此类转换**。

- **`BigInt` 不支持一元加法**

  ```js
  let bigint = 1n;
  
  alert( +bigint ); // Uncaught TypeError: Cannot convert a BigInt value to a number
  ```

  **应该使用 `Number()` 来将一个 bigint 转换为一个普通数字类型**。



**比较运算符**

例如 `<` 和 `>`，使用它们来对 bigint 和 number 类型的数字进行比较是**没有问题**：

```js
alert( 2n > 1n ); // true

alert( 2n > 1 ); // true

alert( 1n < 1 ); // false
```

**⚠️ 注意：** 由于 number 和 bigint 属于不同类型，它们**在进行 `==` 比较时相等，但在进行 `===`（严格相等）比较时不相等**：

```js
alert( 1 == 1n ); // true

alert( 1 === 1n ); // false
```



**布尔运算**

当在 `if` 或其它布尔运算时，bigint 的行为类似于 number。

例如：在 `if` 中，**bigint `0n` 为 `false`，其它值为 `true`**：

```js
if (0n) {
  // 永远不会执行
}
```

布尔运算符，例如：`||`、`&&` 和其它运算符，处理 bigint 的方式也类似于 number：

```js
alert( 1n || 2 ); // 1（1n 被认为是真）

alert( 0n || 2); // 2（0n 被认为是假）
```



**Polyfill**

Polyfilling bigint 比较棘手，原因是**许多 JavaScript 运算符，如：`+` 和 `-` 等，在对待 bigint 的行为上与常规 number 相比有所不同**。

例如：bigint 的除法总是返回 bigint（如果需要，会进行舍入）。

想要模拟这种行为，polyfill 需要分析代码，并**用其函数替换所有此类运算符，但是这样做很麻烦，并且会耗费很多性能**。

所以目前并没有一个众所周知的好用的 polyfill。

不过，[JSBI](https://github.com/GoogleChromeLabs/jsbi) 库的开发者提出了另一种解决方案，**该库使用自己的方式实现了大的数字，可以使用它们替代原生的 bigint**：

| 运算           | 原生 `BigInt`     | JSBI                      |
| :------------- | :---------------- | :------------------------ |
| 从 Number 创建 | `a = BigInt(789)` | `a = JSBI.BigInt(789)`    |
| 加法           | `c = a + b`       | `c = JSBI.add(a, b)`      |
| 减法           | `c = a - b`       | `c = JSBI.subtract(a, b)` |
| …              | …                 | …                         |

对于**那些支持 bigint 的浏览器，可以使用 [babel-plugin-transform-jsbi-to-bigint](https://github.com/GoogleChromeLabs/babel-plugin-transform-jsbi-to-bigint) 将 JSBI 调用转换为原生的 bigint 代码**。

简单来说，这个方法建议我们在写代码时使用 JSBI 替代原生的 bigint，但是 JSBI 在内部像使用 bigint 一样使用 number，最大程度按照规范进行模拟，所以代码已经是准备好转换成 bigint 的了（bigint-ready）。

**对于不支持 bigint 的引擎，可以 “按原样” 使用此类 JSBI 代码，对于那些支持 bigint 的引擎，polyfill 会将调用转换为原生的 bigint**。



## Unicode —— 字符串内幕

JavaScript 的字符串是基于 Unicode 的：**每个字符由 1~4 个字节的字节序列表示**。

JavaScript 允许使用以下三种表示方式之一将一个字符以其十六进制 Unicode 编码的方式插入到字符串中：

- **`\xXX`**

  **`XX` 必须介于 `00` 与 `FF` 之间的 2 位十六进制数**，`\xXX` 表示 Unicode 编码的 `XX` 的字符。

  因为 `\xXX` 符号只支持两位十六进制数，所以它**只能用于前 256 个 Unicode 字符**。

  这前 256 个字符包括拉丁字符、最基本的语法字符和其它一些字符，例如，`'\x7A'` 表示 `'z'`（Unicode 编码为 `U+007A`）。

  ```js
  alert('\x7A'); // z
  alert('\xA9'); // © (版权符号)
  ```

  

- **`\uXXXX`**

  **`XXXX` 必须介于 `0000` 和 `FFFF` 之间的 2 位十六进制数**，`\uXXXX` 表示 Unicode 编码的 `XXXX` 的字符。

  **Unicode 值大于 `U+FFFF` 的字符也可以用这种方式来表示，这种情况下，需要用到代理对**。

  ```js
  alert('\u00A9'); // ©, 等同于 \xA9，只是使用了四位十六进制数表示而已
  alert('\u044F'); // я（西里尔字母）
  alert('\u2191'); // ↑（上箭头符号）
  ```

  

- **`\u{X...XXXXXX}`**

  **`X...XXXXXX` 必须是介于 `0` 和 `10FFFF`（Unicode 定义的最高码位）之间的 1 到 6 位十六进制值**，这种表示方式可以轻松**表示所有现有的 Unicode 字符**：

  ```js
  alert('\u{20331}'); // 佫, 一个不常见的中文字符（长 Unicode）
  alert('\u{1F60D}'); // 😍, 一个微笑符号（另一个长 Unicode）
  ```



**代理对**

所有常用字符都有对应的 2 字节长度的编码（4 位十六进制数），大多数欧洲语言的字母、数字、以及基本统一的 CJK 表意文字集（CJK —— 来自中文、日文和韩文书写系统）中的字母，均有对应的 2 字节长度的 Unicode 编码。

**最初 JavaScript 是基于 UTF-16 编码的，只允许每个字符占 2 字节长度，但 2 个字节只允许 65536 种组合**，这对于表示 UniCode 中每个可能的符号来说是不够的。

因此要使用超过 2 个字节长度来表示稀有符号，需要使用一对 2 字节长度的字符编码，它们被称为 **“代理对”（surrogate pair）**。

这种做法也有副作用 —— 这些符号的长度为 `2`：

```js
alert('𝒳'.length); // 2, 大写的数学符号 X
alert('😂'.length); // 2, 笑哭的表情
alert('𩷶'.length); // 2, 一个少见的中文字符
```

因为在 JavaScript 被创造出来的时候，代理对这个概念并不存在，因此**语言并没有正确处理它们**。

**虽然上面每个字符串都只有一个字符，但其 `length` 属性显式其长度为 `2`**。

如何获取这些符号，是一个棘手的问题：**因为编程语言的大部分功能都将代理对当做两个字符对待**。

例如：

```js
alert('𝒳'[0]); // 显示出了一个奇怪的符号
alert('𝒳'[1]); // 代理对的片段
```

**代理对的片段失去彼此就没有意义**，所以上述代码中打印出来的都是没有任何意义的垃圾信息。

从技术上讲，可以通过代理对的编码来检测代理对：**如果一个字符的编码在 `0xd800..0xdbff` 这个范围中，那么它就是代理对的前一个部分，下一个字符（第二部分）的编码必须在 `0xdc00..0xdfff` 范围中**，这两个范围中的编码是规范中专门为代理对预留的。

基于此，**JavaScript 新增了 `String.fromCodePoint` 和 `str.codePointAt` 这两个方法来处理代理对**。

它们本质上与 `String.fromCharCode` 和 `str.charCodeAt` 相同，但它们可以正确地处理代理对。

例如：

````js
// charCodeAt 不会考虑代理对，所以返回了 𝒳 前半部分的编码:
alert( '𝒳'.charCodeAt(0).toString(16) ); // d835
      
// codePointAt 可以正确处理代理对
alert( '𝒳'.codePointAt(0).toString(16) ); // 1d4b3，读取到了完整的代理对
````

如果从 **`𝒳` 的位置 `1` 开始获取对应的编码（这么做是不对的），那么这两个方法都只会返回此代理对的后半部分**：

```js
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3
alert( '𝒳'.codePointAt(1).toString(16) ); // dcb3
// 无意义的代理对后半部分
```

**⚠️ 注意：在任意点拆分字符串是很危险的，不能随意在任意位置对字符串进行拆分**。

例如通过 `str.slice(0, 4)` 获取一个字符串，并期待它是一个有效的字符串：

```js
alert( 'hi 😂'.slice(0, 4) ); //  hi [?]
```

在上述代码中，一个没有意义的垃圾字符被打印了出来（笑哭表情代理对的前半部分）。

**如果期望可靠地使用代理对，需要注意这一点**。



**变音符号和规范化**

很多语言都有由基础字符及其上方/下方的标记所组成的符号。

例如：字母 `a` 就是这些字符 `àáâäãåā` 的基础字符。

大多数场景的 “复合” 字符在 Unicode 表中都有自己的编码，但不是所有这些字符都有自己的编码，因为可能的组合形式太多了。

为了支持任意的组合，Unicode 标准允许使用多个 Unicode 字符：**基础字符后跟着一个或多个 “装饰” 它的 “标记” 字符**。

例如在 `S` 后附加上特殊的 “上方的点” 字符（编码为 `\u0307`），则显示为 Ṡ。

```js
alert('S\u0307'); // Ṡ
```

如果需要在字母上方（或下方）添加一个额外的标记，只需要添加必要的标记字符即可。

例如，如果要继续在后面附加一个 “下方的点” 符号（编码 `\u0323`），那么将得到一个 “上下都有一个点符号的 S”：`Ṩ`。

```js
alert('S\u0307\u0323'); // Ṩ
```

这提供了极大的灵活性，但也带来了一个问题：**两个字符可能在视觉上看起来相同，但却使用的是不同的 Unicode 组合**。

例如：

```js
let s1 = 'S\u0307\u0323'; // Ṩ, S + 上方点符号 + 下方点符号
let s2 = 'S\u0323\u0307'; // Ṩ, S + 下方点符号 + 上方点符号

alert( `s1: ${s1}, s2: ${s2}` );

alert( s1 === s2 ); // 尽管这两个字符看起来是相同的，但结果却是 false
```

**“Unicode 规范化” 算法可以解决这个问题**，该算法将每个字符串转换为单一的 “规范的” 形式。

借助 `str.normalize()` 可以实现这一点。

```js
alert( 'S\u0307\u0323'.normalize() == 'S\u0323\u0307'.normalize() ); // true
```

上述代码中，**`normalize()` 将 3 个字符的序列合并为了一个字符 `\u1e68`（带有上下两个点的 S）**。

```js
alert( 'S\u0307\u0323'.normalize().length ); // 1

alert( 'S\u0307\u0323'.normalize() == '\u1e68' ); // true
```

**⚠️ 注意：** 但实际并非总是如此，**出现这种情况的原因是符号 `Ṩ` 是 “足够常见的”，所以 Unicode 创建者将其囊括在了 Unicode 主表中，并为其提供了对应的编码**。



## 浏览器环境，规格

JavaScript 语言最初是为 Web 浏览器创建的，此后它演变成了一种具有多种用途和平台的语言。

平台可以是一个浏览器、一个 Web 服务器、或其它**主机（host）**，如果它能运行 JavaScript，并提供了特定于平台的功能，JavaScript 规范将其称为 **“主机环境”**。

**主机环境提供了自己的对象和语言核心以外的函数**，例如：Web 浏览器提供了一种控制网页的方法，Node.JS 提供了服务器端功能等等。

下面是 JavaScript 在浏览器中运行时的示意图：

![image-20250731102813166](images/image-20250731102813166.png)

有一个叫做 `window` 的 “根” 对象，它代表两个角色：

1. JavaScript 代码的**全局对象**
2. **代表 “浏览器窗口”**，并提供了控制它的方法

例如，可以把它用作全局对象：

```js
fucntion sayHi() {
  alert('Hello');
}

// 全局函数是全局对象的方法
window.sayHi();
```

也可以将它用作浏览器窗口，以查看窗口高度：

```js
alert(window.innerHeight); // 内部窗口高度
```



**文档对象模型（DOM）**

文档对象模型（Document Object Model），简称 DOM，**将所有页面内容表示为可以修改的对象**。

**`document` 对象是页面的主要 “入口点”**，可以使用它来更改或创建页面上的任何内容。

例如：

```js
// 将背景颜色修改为红色
document.body.style.background = 'red';

// 在 1 秒后将其修改回来
setTimeout(() => document.body.style.background = '', 1000);
```

上述代码中使用了 `document.body.style`，但还有很多其它的东西，具体的可以查看规范：[DOM Living Standard](https://dom.spec.whatwg.org/)。

**⚠️ 注意：**

- **DOM 不仅仅用于浏览器，有的非浏览器设备也使用 DOM**

  DOM 规范解释了文档的结构，并提供了操作文档的对象。

  例如：下载 HTML 文件并对其进行处理的服务器端脚本也可以使用 DOM，**但它们可能仅支持部分规范中的内容**。

- **用于样式的 CSSOM**

  也有一份针对 CSS 规则和样式表的、单独的规范 [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1/)，**这份规范解释了如何将 CSS 表示为对象，以及如何读写这些对象**。

  当修改文档的样式规则时，CSSOM 和 DOM 是一起使用的，**但实际上很少需要使用 CSSOM，因为很少需要从 JavaScript 中修改 CSS 规则（通常只是添加/移除一些 CSS 类，而不是直接修改其中的 CSS 规则）**。



**浏览器对象模型（BOM）**

浏览器对象模型（Browser Object Model），简称 BOM，**表示浏览器（主机环境）提供的用于处理文档（document）之外的所有内容的其它对象**。

例如：

- **`navigator` 对象提供了有关浏览器和操作系统的背景信息**

  `navigator` 对象有许多属性，最广为人知的两个属性是：

  - **`navigator.userAgent`** —— 关于当前浏览器
  - **`navigator.platform`** —— 关于平台（有助于区分 Windows/Linux/Mac 等）

- **`location` 对象允许读取当前 URL，并且可以将浏览器重新定向到新的 URL**

  ```js
  alert(location.href); // 显示当前 URL
  
  if (confirm('Go to Wikipedia?')) {
    location.href = 'https://wikipedia.org'; // 将浏览器重定向到另一个 URL
  }
  ```

**函数 `alert/confirm/prompt` 也是 BOM 的一部分**：它们与文档（document）没有直接关系，但它代表了与用户通信的纯浏览器方法。

**⚠️ 注意：BOM 是通用 [HTML 规范](https://html.spec.whatwg.org/) 的一部分**，在 [https://html.spec.whatwg.org](https://html.spec.whatwg.org/) 中的 HTML 规范不仅是关于 “HTML 语言”（标签，特性）的，还涵盖了一堆对象、方法和浏览器特定的 DOM 扩展，这就是 “广义的 HTML”。

此外，某些部分也有其它的规范，它们被列在 [https://spec.whatwg.org](https://spec.whatwg.org/) 中。



**规范汇总**

- **DOM 规范：**描述文档的结构、操作和事件，详见 [https://dom.spec.whatwg.org](https://dom.spec.whatwg.org/)
- **CSSOM 规范：**描述样式表和样式规则，对它们进行的操作，以及它们与文档的绑定，详见 [https://www.w3.org/TR/cssom-1](https://www.w3.org/TR/cssom-1/)
- **HTML 规范：**描述 HTML 语言（例如标签）以及 BOM（浏览器对象模型）— 各种浏览器函数：`setTimeout`，`alert`，`location` 等，详见 [https://html.spec.whatwg.org](https://html.spec.whatwg.org/)，它采用了 DOM 规范，并使用了许多其他属性和方法对其进行了扩展
- 某些类被分别描述在 https://spec.whatwg.org/



## DOM 树

**HTML 文档的主干是标签（tag）**。

**在文档对象模型（DOM）中，每个 HTML 标签都是一个对象，嵌套的标签是闭合标签的 “子标签（children）”，标签内的文本也是一个对象**。

所有这些对象都可以通过 JavaScript 来访问，可以使用它们来修改页面。

例如：

```js
document.body.style.background = 'red'; // 将背景设置为红色

setTimeout(() => document.body.style.background = '', 3000); // 恢复背景色
```

上述代码会使 `<body>` 的背景保持 3 秒红色状态。



**DOM 的例子**

以下是简单的 HTML 文档：

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
```

DOM 将 HTML 表示为标签的树形结构，像下面这样：

![image-20250731132726547](images/image-20250731132726547.png)

每个树的节点都是一个对象。

标签被称为**元素节点**（或者仅仅是元素），并形成了树状结构：`<html>` 在根节点，`<head>` 和 `<body>` 是其子节点等。

元素内的文本形成**文本节点**，被标记为 `#text`，**一个文本节点只包含一个字符串，它没有子节点，并且总是树的叶子**。

例如：`<title>` 标签中有文本 `About elk`。

**⚠️ 注意：文本节点中的特殊字符：**

- 换行符：`↵`（在 JavaScript 中为 `\n`）
- 空格：`␣`

**空格和换行符都是完全有效的字符，就跟字母和数字一样，它们形成文本节点并成为 DOM 的一部分**，所以在前面的示例中，`<head>` 标签中的 `<title>` 标签前面包含了一些空格，并且该文本变成了一个 `#text` 节点（它只包含了一个换行符和一些空格）。

只有两个顶级排除项：

1. **由于历史原因，`<head>` 之前的空格和换行符均被忽略**
2. **如果在 `</body>` 之后放置一些东西，那么它会被自动移动到 `body` 内，并处于 `body` 中的最下方**，因为 HTML 规范要求所有内容必须位于 `<body>` 内，**所以 `</body>` 之后不能有空格**

在其它情况下一切都很简单，如果文档中有空格或换行符（就像任何字符一样），那么它们将成为 DOM 中的文本节点，如果删除它们，则不会有任何空格。

下面是没有空格和换行符的文本节点：

```html
<!DOCTYPE HTML>
<html><head><title>About elk</title></head><body>The truth about elk.</body></html>
```

![image-20250731134254418](images/image-20250731134254418.png)

**⚠️ 注意：在字符串开头/结尾处的空格和换行符，以及只有空格或换行符的外部的文本节点，通常会被工具（包括浏览器开发者工具、HTML 解析器、编辑器）隐藏**，与 DOM 一起使用的**浏览器开发者工具通常不会在文本的开始/结尾显示空格，并且在标签之间也不会显示空文本节点（换行符）**，开发者工具通过这种方式节省屏幕空间。



**自动修正**

如果浏览器遇到了格式不正确的 HTML，它会**在形成 DOM 时自动更正它**。

例如，顶级标签总是 `<html>`，即使它不存在于文档中，它也会出现在 DOM 中，因为浏览器会创建它，对于 `<body>` 也是一样的。

例如，一个 HTML 文件中只有一个单词 `Hello`，浏览器会把它包装到 `<html>` 和 `<body>` 中，并且会添加所需的 `<head>`，DOM 会变成下面这样：

![image-20250731135828200](images/image-20250731135828200.png)

**在生成 DOM 时，浏览器会自动处理文档中的错误，闭合标签等**。

例如一个没有闭合标签的文档：

```html
<p>Hello
<li>Mom
<li>and
<li>Dad
```

上述代码将生成一个正常的 DOM，**因为浏览器在读取标签时会填补缺失的部分**：

![image-20250731140143051](images/image-20250731140143051.png)

**⚠️ 注意：表格永远有 `<tbody>`，按照 DOM 规范，`<table>` 标签内部必须具有 `<tbody>` 标签**，但很多开发者在编写 HTML 代码时会忽略它，然后浏览器在创建 DOM 时，自动创建了 `<tbody>`。

对于 HTML：

```html
<table><tr><td>1</td></tr></table>
```

DOM 结构会变成：

![image-20250731140602401](images/image-20250731140602401.png)



**其它节点类型**

除了元素和文本节点外，还有一些其它的节点类型。

例如，注释：

```html
<!DOCTYPE HTML>
<html>
<body>
  The truth about elk.
  <ol>
    <li>An elk is a smart</li>
    <!-- comment -->
    <li>...and cunning animal!</li>
  </ol>
</body>
</html>
```

![image-20250731141018033](images/image-20250731141018033.png)

在上图中可以看到有一个新的节点类型 —— **comment 节点**，被标记为 `#comment`。

注释之所以会被添加到 DOM 中，是因为有一条规则：**如果一些内容存在于 HTML 中，那么它也必须在 DOM 树中**。

**HTML 中的所有内容，甚至注释都会成为 DOM 的一部分**。

**HTML 开头的 `<!DOCTYPE...>` 指令也是一个 DOM 节点，它在 DOM 树中位于 `<html>` 之前**，不过通常不会触及这个节点。

**代表整个文档的 `document` 对象，在形式上也是一个 DOM 节点**。

一共有 [12 种节点类型](https://dom.spec.whatwg.org/#node)，但实际上通常用到的是其中的 4 种：

1. **`document`** —— DOM 的 “入口点”
2. **元素节点** —— HTML 标签，树构建块
3. **文本节点** —— 包含文本
4. **注释** —— 有时可以将一些信息放入其中，它不会显示，**但 JS 可以从 DOM 中读取它**



**查看 DOM 结构**

要在实际中查看 DOM 结构，可以使用 [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)，在输入 HTML 代码后立即显示为 DOM。

查看 DOM 结构的另一种方式是使用浏览器开发者工具，它看起来像下面这样：

![image-20250731142129216](images/image-20250731142129216.png)

在这里可以查看 DOM，点击元素，查看它们的细节等。

**⚠️ 注意：开发者工具中的 DOM 结构是经过简化的，文本节点仅以文本形式显示，并且根本没有“空白”（只有空格或换行符）的文本节点**。

点击左上角的箭头按钮后就可以使用鼠标从网页中选择一个节点并 “检查（Inspect）” 它，另一种方式是在网页上右键单击，然后在上下文菜单中选择 “检查（Inspect）”。

![image-20250731142615231](images/image-20250731142615231.png)

在工具栏的右侧部分还有以下子选项卡：

- **样式（Style）** —— 可以看到按规则应用于当前元素的 CSS 规则，包括内建规则（灰色），几乎所有内容都可以就地编辑，包括下面的方框的 `dimension/margin/padding`
- **计算样式（Computed）** —— 按属性查看应用于元素的 CSS：对于每个属性，都可以看到赋予它的规则（包括 CSS 继承等）
- **事件监听器（Event Listeners）** —— 查看附加到 DOM 元素的事件侦听器
- ......等



**与控制台交互**

在处理 DOM 时，可能还希望对其应用 JavaScript，例如获取一个节点并运行一些代码来修改它，以查看结果，下面是元素（Elements）选项卡和控制台（Console）之间切换的一些技巧。

1. **首先在元素（Elements）选项卡中选择第一个 `<li>`**
2. 按下 `Esc` —— 它将在元素（Elements）选项卡下方打开控制台（Console）

**现在最后选中的元素可以通过 `$0` 来进行操作，在之前选中的则是 `$1`**。

![image-20250731145832532](images/image-20250731145832532.png)

这就是在控制台（Console）中获取元素（Elements）选项卡中的节点的方法。

还有一种方式：如果存在引用 DOM 节点的变量，**可以在控制台（Console）中使用命令 `inspect(node)`，在元素（Elements）选项卡中查看它**。

**或者可以直接在控制台（Console）中输出 DOM 节点**，例如下面的 `document.body`：

![image-20250731150237769](images/image-20250731150237769.png)

更多 Chrome 开发者工具的知识，可以参考 https://developers.google.cn/web/tools/chrome-devtools。



## 遍历 DOM

对 DOM 的所有操作都是以 `document` 对象开始的，它是 DOM 的主 “入口点”，可以通过它访问任何节点。

下图描述对象间导航（navigation）链接的图片，通过这些导航链接可以在 DOM 节点之间移动。

![image-20250801070626940](images/image-20250801070626940.png)



**在最顶层：documentElement 和 body**

最顶层的树节点可以**直接作为 `document` 的属性**来使用：

**`<html> = document.documentElement`**

最顶层的 document 节点是 `document.documentElement`，对应 `<html>` 标签的 DOM 节点。



**`<body> = document.body`**

另一个被广泛使用的 DOM 节点是 `<body>` 元素 —— `document.body`。



**`<head> = document.head`**

`<head>` 标签可以通过 `document.head` 来访问。

**⚠️ 注意：`document.body` 的值可能为 `null`**，因为脚本无法访问在运行时不存在的元素，当一个脚本是 `<head>` 标签中时，那么脚本是访问不到 `document.body` 元素的，因为浏览器还没读到它。

例如：

```html
<html>

<head>
  <script>
    alert( 'From HEAD: ' + document.body ); // null，这里目前还没有 <body>
  </script>
</head>

<body>
  <script>
    alert( 'From BODY: ' + document.body ); // HTMLBodyElement，现在存在了
  </script>
</body>

</html>
```

在 DOM 的世界中，**`null` 就意味着 “不存在” 或者 “没有这个节点”**。



**子节点：childNodes，firstChild，lastChild**

- **子节点（或者叫作子）** —— 对应的是直系的子元素，例如：`<head>` 和 `<body>` 就是 `<html>` 元素的子元素
- **子孙元素** —— 嵌套在给定元素中的所有元素，包括子元素，以及子元素的子元素等

例如：

```html
<html>
<body>
  <div>Begin</div>
  
  <ul>
    <li>
      <b>Information</b>
    </li>
  </ul>
</body>
</html>
```

`<body>` 元素的子孙元素不仅包含直接的子元素 `<div>` 和 `<ul>`，还包含像 `<li>`（`<ul>` 的子元素）和 `<b>`（`<li>` 的子元素）这样的元素 —— 整个子树。

**`childNodes` 集合列出了所有子节点，包括文本节点。**

例如：

```html
<html>
<body>
  <div>Begin</div>
  
  <ul>
    <li>Information</li>
  </ul>
  
  <div>End</div>
  
  <script>
    for (let i = 0; i < document.body.childNodes.length; i++) {
      alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
    }
  </script>
  ...more stuff...
</body>
</html>
```

**⚠️ 注意：** 上述代码中，所显示的最后一个元素是 `<script>`，但实际上文档下面还有很多东西，**因为这个脚本运行的时候，浏览器还没读到下面的内容，所以脚本就看不到它们**。

**`firstChild` 和 `lastChild` 属性是访问第一个和最后一个子元素的快捷方式。**

它们只是简写，如果元素存在子元素，那么下面的脚本运行结果将是 `true`：

```js
elem.childNodes[0] === elem.firstChild; // true
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild; // true
```

**还有一个特别的函数 `elem.hasChildNodes()` 用于检查节点是否有子节点**。



**DOM 集合**

`childNodes` 看起来像一个数组，但实际上它**并不是数组**，而是一个**集合** —— **一个类数组的可迭代对象**。

这个性质会导致两个结果：

1. **可以使用 `for..of` 来迭代它**

   ```js
   for (const node of document.body.childNodes) {
     alert(node); // 显示集合中的所有节点
   }
   ```

   因为集合是可迭代的（提供了所需要的 `Symbol.iterator` 属性）。

2. **无法使用数组的方法**，因为它不是一个数组

   ```js
   alert( document.body.childNodes.filter ); // undefined
   ```

   如果想使用数组的方法，可以使用 `Array.from` 方法来从类数组中创建为一个 “真” 数组：

   ```js
   alert( Array.from(document.body.childNodes).filter ); // function
   ```

**⚠️ 注意：**

- **DOM 集合是只读的**，不能通过类似 `childNodes[i] = ...` 的操作来替换一个子节点

- **DOM 集合是实时的**，几乎所有的 DOM 集合都是实时的，它们反映了 DOM 的当前状态，如果保留一个对 `elem.childNodes` 的引用，然后向 DOM 中添加/移除节点，那么这些节点的更新会自动出现在集合中

- **不要使用 `for..in` 来遍历集合**，可以使用 `for..of` 对集合进行迭代，但不能使用 `for..in` 来遍历集合，**因为 `for..in` 遍历的是所有可枚举的（enumerable）属性，集合中存在一些 “额外的” 很少被用到的属性，这些属性通常不是所期望得到的**

  ```html
  <body>
    <script>
      // 显示 0，1，length，item，values 及其他
      for (let prop in document.body.childNodes) alert(prop);
    </script>
  </body>
  ```



**兄弟节点和父节点**

兄弟节点（sibing）是**指有同一个父节点的节点**。

例如 `<head>` 和 `<body>` 就是兄弟节点：

```html
<html>
  <head>...</head><body>...</body>
</html>
```

- `<body>` 可以说是 `<head>` 的 “下一个” 或者 “右边” 兄弟节点
- `<head>` 可以说是 `<body>` 的 “前一个” 或者 “左边” 兄弟节点

**下一个兄弟节点在 `nextSibling` 属性中，上一个是在 `prevSibling` 属性中**。

**可以通过 `parentNode` 来访问父节点**。

例如：

```js
// <body> 的父节点是 <html>
alert( document.body.parentNode === document.documentElement ); // true

// <head> 的后一个节点是 <body>
alert( document.head.nextSibling ); // HTMLBodyElement

// <body> 的前一个节点是 `<head>`
alert( document.body.prevSibling ); // HTMLHeadElement
```



**纯元素导航**

前面列出的导航（navigation）属性引用所有节点，例如，**在 `childNodes` 中可以看到文本节点，元素节点，甚至包括注释节点**。

在实际开发中，可能并不想要文本节点或者注释节点，只希望操作的是代表标签的和形成页面结构的元素节点。

下图中是**只考虑元素节点**的导航链接（navigation link）：

![image-20250801080523316](images/image-20250801080523316.png)

这些链接和之前提过的类似，只是在词中间加了 `Element`：

- **`children`** —— 仅那些作为元素节点的子代的节点
- **`firstElementChild`，`lastElementChild`** —— 第一个和最后一个子元素
- **`previousElementSibling`，`nextElementSibling`** —— 兄弟元素
- **`parentElement`** —— 父元素

**⚠️ 注意：** `parentElement` 属性返回的是 “元素类型” 的父节点，而 `parentNode` 返回的是 “任何类型” 的父节点，这些属性通常来说是一样的：它们都是用于获取父节点。

**唯一例外的是 `document.documentElement`**：

```js
alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement); // null
```

之所以会这样是因为根节点 `document.documentElement` （`<html>`）的父节点是 `document`，但 **`document` 不是一个元素节点**，所以 `parentNode` 返回了 `document`，但 `parentElement` 返回的是 `null`。

当想从任意节点 `elem` 到 `<html>` 而不是到 `document` 时，这个细节很有用：

```js
while(elem = elem.parentElement) { // 向上，直到 <html>
  alert(elem);
}
```

修改前面的示例，使用 `children` 来替换 `childNodes`，现在它只显示元素：

```html
<html>
<body>
  <div>Begin</div>
  
  <ul>
    <li>Information</li>
  </ul>
  
  <div>End</div>
  
  <script>
    for (const elem of document.body.children) {
      alert( elem ); // DIV, UL, DIV, SCRIPT
    }
  </script>
  ...
</body>
</html>
```



**更多链接：表格**

方便起见，某些类型的 DOM 元素可能会提供特定于其类型的其它属性。

**`<table>`** 元素支持（除了前面给出的，之外）以下属性：

- **`table.rows`** —— `<tr>` 元素的集合
- **`table.caption/tHead/tFoot`** —— 引用元素 `<caption>`、`<thead>`、`<tfoot>`
- **`table.tBodies`** —— `<tbody>` 元素的集合（根据标准还有很多元素，但是这里至少会有一个 `<tbody>` —— 即使没有被写在 HTML 源文件中，浏览器也会将其放入 DOM 中）

**`<thead>`、`<tfoot>`、`<tbody>`** 元素提供了 `rows` 属性：

- **`tbody.rows`** —— 表格内部 `<tr>` 元素的集合

**`<tr>`：**

- **`tr.cells`** —— 在给定 `<tr>` 中的 `<td>` 和 `<th>` 单元格的集合
- **`tr.sectionRowIndex`** —— 给定的 `<tr>` 在封闭的 `<thead>/<tbody>/<tfoot>` 中的位置（索引）
- **`tr.rowIndex`** —— 在整个表格中 `<tr>` 的编号（包括表格的所有行）

**`<td>` 和 `<th>`：**

- **`td.cellIndex`** —— 在封闭的 `<tr>` 中单元格的编号

用法示例：

```html
<table id="table">
  <tr>
    <td>one</td><td>two</td>
  </tr>
  <tr>
    <td>three</td><td>four</td>
  </tr>
</table>

<script>
  // 获取带有 two 的 td（第一行，第二列）
  let td = table.rows[0].cells[1];
  td.style.backgroundColor = 'red';
</script>
```

![image-20250801083513466](images/image-20250801083513466.png)

关闭表格更多细节可以参考规范：[tabular data](https://html.spec.whatwg.org/multipage/tables.html)。



## 搜索：getElement\*，querySelector\*

当元素彼此靠的近时，DOM 导航属性（navigation property）非常有用，但如果不是则需要使用其它搜索方法。



**document.getElementById 或者只使用 id**

如果一个元素有 `id` 特性（attribute），就可以使用 `document.getElementById(id)` 方法获取该元素，无论它在哪里。

例如：

```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // 获取该元素
  const elem = document.getElementById('elem');
  
  // 将该元素背景改为红色
  elem.style.background = 'red';
</script>
```

还可以通过 `id` 命名的全局变量，它引用了元素：

```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // elem 是对带有 id="elem" 的 DOM 元素的引用
  elem.style.background = 'red';
  
  // id="elem-content" 内有连字符，所以它不能成为一个变量
  // 但可以通过使用方括号 window['elem-content'] 来访问它
</script>
```

**除非声明一个具有相同名称的 JavaScript 变量，否则它具有优先权**：

```html
<div id="elem"></div>

<script>
  let elem = 5;
  
  alert(elem); // 5
</script>
```

**⚠️ 注意：**

- **不要使用以 id 命名的全局变量来访问元素**，[在规范中](http://www.whatwg.org/specs/web-apps/current-work/#dom-window-nameditem)对此行为进行了描述，它是一种标准，但是为了兼容性才支持的，浏览器尝试通过混合 JavaScript 和 DOM 的命名空间来帮助我们，对于内联到 HTML 中的简单脚本来说，这还行，**但是通常来说这不是一件好事。因为这可能会造成命名冲突**，并且当别人阅读 JavaScript 代码且看不到对应的 HTML 时，变量的来源就会不明显，**在实际开发中，`document.getElementById` 是首选方法**
- **`id` 必须是唯一的**，在文档中，只能有一个元素带有给定的 `id`，如果有多个元素都带有同一个 `id`，那么使用它的方法的行为是不可预测的，例如：`document.getElementById` 可能会随机返回其中一个元素
- **只有 `document.getElementById`，没有 `anyElem.getElementById`**，`getElementById` 方法只能在 `document` 对象上调用，它会在整个文档中查找给定的 `id`



**querySelectorAll**

最通用的方法是 `elem.querySelectorAll(css)`，它**返回 `elem` 中给定 CSS 选择器匹配的所有元素**。

在这里，查找所有为最后一个子元素的 `<li>` 元素：

```html
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // test, passed
  }
</script>
```

该方法可以使用任何 CSS 选择器。

**⚠️ 注意：CSS 选择器中可以使用伪类**，例如 `:hover` 和 `:active` 都是支持的，`document.querySelectorAll(':hover')` 将会返回鼠标指针正处于其上方的元素的集合（**按嵌套顺序：从最外层 `<html>` 到嵌套最多的元素**）。



**querySelector**

`elem.querySelector(css)` 调用会返回给定 CSS 选择器的第一个元素。

结果与 `elem.querySelectorAll(css)[0]` 相同，但是后者会查找**所有**元素，并从中选取第一个，而 **`elem.querySelector` 只会查找一个，所以它在速度上更快，并且写起来更短**。



**matches**

`elem.matches(css)` 不会查找任何内容，它只会检查 `elem` 是否与给定的 CSS 选择器匹配，返回 `true` 或 `false`。

当遍历元素（例如数组或其它内容）并试图过滤掉那些感兴趣的元素时，可以使用这个方法。

例如：

```html
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // 不一定是 document.body.children，还可以是任何集合
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href ); // The archive reference: http://example.com/file.zip
    }
  }
</script>
```



**closest**

元素的祖先（ancestor）是：父级，父级的父级，它的父级等，祖先们一起组成了从元素到顶端的父级链。

**`elem.closest(css)` 方法会查找与 CSS 选择器匹配的最近的祖先，`elem` 自己也会被搜索**。

简单来说：方法 `closest` 在元素中得到了提升，并检查每一个父级，如果它与选择器匹配，则停止搜索并返回该祖先。

例如：

```html
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI
  
  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV
  
  alert(chapter.closest('h1')); // null（因为 h1 不是祖先）
</script>
```



**contains**

用于检查子级与父级之间关系的方法。

如果 `elemB` 在 `elemA` 内（`elemA` 的后代）或者 `elemA === elemB`，`elemA.contains(elemB)` 将返回 `true`。



**getElementsBy\***

这类方法大多都已经成为历史，因为 `querySelector` 功能更加强大，写起来更短。

- **`elem.getElementsByTagName(tag)`** 查找具有给定标签的元素，并返回它们的集合，**`tag` 参数也可以是匹配 “任何标签” 的星号 `'*'`**
- **`elem.getElementsByClassName(className)`** 返回具有给定 CSS 类的元素
- **`document.getElementsByName(name)`** 返回在文档范围内具有给定 `name` 特性的元素，很少使用

例如：

```js
// 获取文档中的所有 div
const divs = document.getElementsByTagName('div');
```

查找 `<table>` 中的所有 `<input>` 标签：

```html
<table id="table">
  <tr>
    <td>Your age:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked> less than 18
      </label>
      <label>
        <input type="radio" name="age" value="mature"> from 18 to 50
      </label>
      <label>
        <input type="radio" name="age" value="senior"> more than 60
      </label>
    </td>
  </tr>
</table>

<script>
  const inputs = table.getElementsByTagName('input');

  for (const input of inputs) {
    alert( input.value + ': ' + input.checked ); // young: true, 然后是 mature: false，再然后是 senior: false
  }
</script>
```

**⚠️ 注意：**

- **不要忘记字母 `s`**，`getElementById` 中没有 `s`，是因为它只返回单个元素，而 `getElementsByTagName` 返回的元素的集合，所以里面有 `s`

- **它返回的是一个集合，不是一个元素**

  新手普遍的错误写法：

  ```js
  document.getElementsByTagName('input').value = 5;
  ```

  这是行不通的，**因为它返回的是一个 `<input>` 的集合，而不是其中一个 `<input>` 元素**。

  应该遍历集合或者通过对应的索引来获取元素，然后再赋值：

  ```js
  // 应该可以运行（如果有 input）
  document.getElementsByTagName('input')[0].value = 5;
  ```

  

**实时的集合**

所有的 `getElementsBy*` 方法都会返回一个**实时的（live）**集合，这样的集合始终反映的是文档的当前状态，并且在文档发生更改时会**“自动更新”**。

例如有两个脚本：

1. 第一个创建了对 `<div>` 的集合的引用，截至目前，它的长度是 `1`
2. 第二个脚本在浏览器再次遇到了一个 `<div>` 时运行，所以它的长度是 `2`

```html
<div>First div</div>

<script>
  const divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script>
```

相反，`querySelectorAll` 返回的是一个**静态的**集合，像元素的固定数组。

如果使用它，那么两个脚本都会输出 `1`：

```html
<div>First div</div>

<script>
  const divs = document.querySelectorAll('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 1
</script>
```

在文档中出现新的 `div` 后，静态集合并没有增加。



**6 种主要的搜索方法对比表**

| 方法名                   | 搜索方式     | 可以在元素上调用？ | 实时的？ |
| ------------------------ | ------------ | ------------------ | -------- |
| `querySelector`          | CSS-selector | ✔                  | -        |
| `querySelectorAll`       | CSS-selector | ✔                  | -        |
| `getElementById`         | `id`         | -                  | -        |
| `getElementsByName`      | `name`       | -                  | ✔        |
| `getElementsByTagName`   | tag or `'*'` | ✔                  | ✔        |
| `getElementsByClassName` | class        | ✔                  | ✔        |

目前为止，最常用的是 `querySelector` 和 `querySelectorAll`，但是 `getElement(s)By*` 可能会偶尔有用，或者可以在旧脚本中找到。



## 节点属性：type，tag 和 content



**DOM 节点类**

**不同的 DOM 节点可能有不同的属性**，例如： 标签 `<a>` 相对应的元素节点具有链接相关（link-related）的属性，标签 `<input>` 相对应的元素节点具有与输入相关的属性等，**文本节点与元素节点不同，但是所有这些标签对应的 DOM 节点之间也存在共有的属性和方法**，因为所有类型的 DOM 节点都形成了一个**单一层次的结构（single hierarchy）**。

**每个 DOM 节点都属于相应的内建类**。

**层次结构（hierarchy）的根节点是 `EventTarget`，`Node` 继承它，其它 DOM 节点继承自 `Node`**，具体的如下图：

![image-20250801125625180](images/image-20250801125625180.png)

类如下所示：

- **`EventTarget`** —— 是一切的根 “抽象（abstract）” 类

  该类的对象从未被创建，它作为一个基础，以便**让所有 DOM 节点都支持 “事件（event）”**。

- **`Node`** —— 是一个 “抽象” 类，充当 DOM 节点的基础

  **它提供了树的核心功能：`parentNode`、`nextSibling`、`prevSibling`、`childNodes` 等（它们都是 getter**），`Node` 类的对象从未被创建，但是还有一些继承自它的其它类（因此继承了 `Node` 的功能）。

- **`Document`** —— **表示一个整体的文档，全局变量 `document` 属于这个类，它作为 DOM 的入口**

  由于历史原因通常被 `HTMLDocument` 继承（尽管最新的规范没有规定）。

- **`CharacterData`** —— 是一个 “抽象” 类，被下述类继承：

  - **`Text`** —— 对应于元素内部文本的类，例如 `<p>Hello</p>` 中的 `Hello`
  - **`Comment`** —— 注释类，它们不会被展示出来，但每个注释都会成为 DOM 中的一员

- **`Element`** —— 是 DOM 元素的基础类

  **它提供了元素级的导航（navigation），如：`nextElementSibling`，`children`，以及搜索方法，如 `getElementsByTagName` 和 `querySelector`**。

  浏览器不仅支持 HTML，还支持 XML 和 SVG，因此 `Element` 类充当的是更具体类的基础：`SVGElement`、`XMLElement` 和 `HTMLElement`。

- **`HTMLElement`** —— 是所有 HTML 元素的基础类，大部分时候会用到它

  它会被更具体的 HTML 元素继承：

  - **`HTMLInputElement`** —— `<input>` 元素的类
  - **`HTMLBodyElement`** —— `<body>` 元素的类
  - **`HTMLAnchorElement`** —— `<a>` 元素的类
  - ......等

因此，给定节点的全部属性和方法都是继承链的结果。

例如，`<input>` 元素的 DOM 对象，它属于 `HTMLInputElement` 类，它获取属性和方法，并将其作为下列类（按继承顺序列出）的叠加：

- `HTMLInputElement` —— 该类提供特定于输入的属性
- `HTMLElement` —— 该类提供了通用（common）的 HTML 元素方法（以及 getter 和 setter）
- `Element` —— 该类提供通用（generic）元素方法
- `Node` —— 该类提供通用 DOM 节点属性
- `EventTarget` —— 该类为事件（包括事件本身）提供支持
- 最后，它继承自 `Object`，因为像 `hasOwnProperty` 这样的 “普通对象” 方法也是可用的

可以通过回调来查看 DOM 节点的类名，因为对象通常都具有 `constructor` 属性。

```js
alert( document.body.constructor.name ); // HTMLBodyElement
```

或者可以对其使用 `toString` 方法：

```js
alert( document.body ); // [object HTMLBodyElement]
```

也可以使用 `instanceof` 来检查继承：

```js
alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true
```

DOM 节点是常规的 JavaScript 对象，**它们使用基于原型的类进行继承**。

在浏览器中，可以使用 `console.dir(elem)` 来查看元素对应的 DOM 对象。

**⚠️ 注意：**

- **`console.log(elem)` 与 `console.dir(elem)`**

  大多数浏览器在其开发者工具中都支持这两个命令，它们将参数输出到控制台中，对于 JavaScript 对象，这些命令通常做的是相同的事情。

  **但对于 DOM 元素，它们是不同的**：

  - `console.log(elem)` 显示元素的 DOM 树
  - `console.dir(elem)` 将元素显示为 DOM 对象，非常适合探索其属性

- **规范中的 IDL**

  在规范中，DOM 类不是使用 JavaScript 来描述的，而是一种特殊的接口描述语言（Interface description language），简写为 IDL，它通常很容易理解。

  在 IDL 中，所有属性以其类型开头，例如：`DOMString` 和 `boolean` 等。

  例如：

  ```idl
  // 定义 HTMLInputElement
  // 冒号 ":" 表示 HTMLInputElement 继承自 HTMLElement
  interface HTMLInputElement: HTMLElement {
    // 接下来是 <input> 元素的属性和方法
  
    // "DOMString" 表示属性的值是字符串
    attribute DOMString accept;
    attribute DOMString alt;
    attribute DOMString autocomplete;
    attribute DOMString value;
  
    // 布尔值属性（true/false）
    attribute boolean autofocus;
    ...
    // 现在方法："void" 表示方法没有返回值
    void select();
    ...
  }
  ```



**nodeType 属性**

`nodeType` 属性提供了另一种 **“过时的”** 用来获取 DOM 节点类型的方法。

它是一个数值类型的值：

- **对于元素节点 `elem.nodeType === 1`**
- **对于文本节点 `elem.nodeType === 3`**
- **对于 `document` 对象 `elem.nodeType === 9`**
- 在[规范](https://dom.spec.whatwg.org/#node)中还有一些其它值

例如：

```html
<body>
  <script>
    let elem = document.body;

    // body 的节点类型
    alert(elem.nodeType); // 1 => element

    // 它的第一个子节点的类型
    alert(elem.firstChild.nodeType); // 3 => text

    // 对于 document 对象，类型是 9
    alert( document.nodeType ); // 9
  </script>
</body>
```

**在现代脚本中，推荐使用 `instanceof` 和其它类的检查方法来查看节点的类型**，但有时 `nodeType` 可能更简单。

**⚠️ 注意：`nodeType` 是只读的，无法修改**。



**标签：nodeName 和 tagName**

可以**从 `ndoeName` 或者 `tagName` 属性中读取 DOM 节点的标签名**。

例如：

```js
alert( document.body.nodeName ); // BODY
alert( document.body.tagName ); // BODY
```

`tagName` 和 `nodeName` 的区别：

- **`tagName` 属性仅适用于 `Element` 节点**
- **`nodeName` 是为任意 `Node` 定义的**：
  - 对于元素，它的意义与 `tagName` 相同
  - 对于其它节点类型（text，comment 等），它拥有一个对应的节点类的字符串

简单来说，**`tagName` 仅受元素节点支持（因为它起源于 `Element` 类）**，而 `nodeName` 可以说明其它节点类型。

例如：

```html
<body><!-- comment -->

  <script>
    // 对于注释节点
    alert( document.body.firstChild.tagName ); // undefined（不是一个元素）
    alert( document.body.firstChild.nodeName ); // #comment

    // 对于 document 节点
    alert( document.tagName ); // undefined（不是一个元素）
    alert( document.nodeName ); // #document
  </script>
</body>
```

如果只处理元素，那么 `tagName` 和 `nodeName` 两种方法没有区别，都可以使用。

**⚠️ 注意：标签名始终是大写的，除非是在 XML 模式下**，浏览器有两种处理文档（document）的模式：HTML 和 XML，通常，HTML 模型用于网页，只有浏览器接收到 `Content-Type: application/xml+xhtml` header 的 XML-document 时，XML 模式才会被启用。

**在 HTML 模式下，`tagName/nodeName` 始终是大写的**：它是 `BODY`，而不是 `<body>` 或 `<BoDy>`，**在 XML 模式下，大小写保持为 “原样”**，如今 XML 模式很少被使用。



**innerHTML：内容**

`innerHTML` 属性**允许将元素中的 HTML 获取为字符串形式**。

也可以修改它，这是更改页面最有效的方式之一。

例如：

```html
<body>
  <p>A paragraph</p>
  <div>A div</div>
  
  <script>
    alert( document.body.innerHTML ); // 读取当前内容
    document.body.innerHTML = 'The new BODY!'; // 替换它
  </script>
</body>
```

![image-20250801135520741](images/image-20250801135520741.png)

也可以尝试插入无效的 HTML，浏览器会修复错误：

```html
<body>

  <script>
    document.body.innerHTML = '<b>test'; // 忘记闭合标签
    alert( document.body.innerHTML ); // <b>test</b>（被修复了）
  </script>

</body>
```

![image-20250801135508439](images/image-20250801135508439.png)

**⚠️ 注意：** 如果使用 `innerHTML` 将一个 `<script>` 标签插入到 document 中，**它会成为 HTML 的一部分，但是不会执行**。



**小心：innerHTML += 会进行完全重写**

可以使用 `elem.innerHTML += 'more html'` 将 HTML 附加到元素上。

例如：

```js
chatDiv.innerHTML += '<div>Hello<img src="smile.gif"/> !</div>';
chatDiv.innerHTML += 'How goes?';
```

**必须非常谨慎的使用它，因为所做的不是附加内容，而是完全地重写**。

从技术上来说，下面两行代码的作用相同：

```js
elem.innerHTML += '...';
elem.innerHTML = elem.innerHTML + '...';
```

简单来说，`innerHTML+=` 做以下工作：

1. **移除旧的内容**
2. **然后写入新的 `innerHTML`（新旧结合）**

**因为内容已 “归零” 并从头开始写，因此所有的图片和其它资源都将被重新加载**。

当有许多文本和图片时，重新加载会耗费更多的时间，所以很容易看到页面重载的过程，影响用户体验。

并且还会有其它的副作用，例如：如果现有的文本被用鼠标选中了，那么大多数浏览器都会在重写 `innerHTML` 时删除选定状态，如果有一个带有用户输入的文本的 `<input>`，那么这个被输入的文本将会被移除，诸如此类。

不过除了 `innerHTML`，还有其它可以添加 HTML 的方法。



**outerHTML：元素的完整 HTML**

`outerHTML` 属性包含了元素的完整 HTML，**就像 `innerHTML` 加上元素本身一样**。

例如：

```html
<div id="elem">Hello <b>World</b></div>

<script>
  alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
  alert(elem.innerHTML); // Hello <b>World</b>
</script>
```

**⚠️ 注意：与 `innerHTML` 不同，写入 `outerHTML` 不会改变元素，而是在 DOM 中替换它**，例如：

```html
<div>Hello, world!</div>

<script>
  let div = document.querySelector('div');
  
  div.outerHTML = '<p>A new element</p>'; // (*)
  
  alert(div.outerHTML); // <div>Hello, world!</div> (**)
</script>
```

上述代码中，在 `(*)` 行，使用 `<p>A new element</p>` 替换 `div`，**在外部文档（DOM）中可以看到的是新内容**而不是 `<div>`，但在 `(**)` 行所看到的，**旧的 `div` 变量并没有改变**。

**`outerHTML` 赋值不会修改 DOM 元素（在这个例子中是被 ‘div’ 引用的对象），而是将其从外部文档中删除并在其位置插入新的 HTML**。

所以在 `div.outerHTML=...` 中发生的事情是：

1. `div` 被从文档（document）中移除
2. 另一个 HTML 片段 `<p>A new element</p>` 被插入到其位置上
3. `div` 仍拥有其旧的值，新的 HTML 没有被赋值给任何变量

**这个行为与 `div.innerHTML` 不一样，`div.innerHTML` 赋值新的 HTML 之后，变量 `div` 将拥有新的值**。

所以向 `elem.outerHTML` 写入内容，需要记住它不会改变我们所写的元素，而是将新的 HTML 放在其位置上，**还需要通过 DOM 查询来获取对新元素的引用**。



**nodeValue/data：文本节点内容**

**`innerHTML` 属性仅对元素节点有效**。

其它节点，如：文本节点、注释节点等具有它们的对应项：`nodeValue` 和 `data` 属性，**这两者在实际使用上几乎相同，只有细微规范上的差异，所以将使用 `data`，因为它更短**。

例如：

```html
<body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body>
```

在实际开发中，很少会读取或修改文本节点，但对于注释节点，有时候开发者会将信息或模版说明嵌入到 HTML 中的注释中，例如：

```html
<!-- if isAdmin -->
  <div>Welcome, Admin!</div>
<!-- /if -->
```

然后 JavaScript 可以从 `data` 属性中读取它，并处理嵌入的指令。



**textCotent：纯文本**

`textContent` 提供了对元素内的**文本**的访问权限：**仅文本，去掉所有 `<tags>`**。

例如：

```html
<div id="news">
  <h1>Headline!</h1>
  <p>Martians attack people!</p>
</div>

<script>
  alert(news.textContent);
  // Headline! 
  // Martians attack people!
</script>
```

上述代码只返回文本，就像所有 `<tags>` 都被裁剪掉一样。

在实际开发中，用到这样的文本读取的场景非常少。

**写入 `textContent` 要有用的多，因为它允许以 “安全方式” 写入文本**。

假设有一个用户输入的任意字符串，希望将其显示出来。

- **使用 `innerHTML`，将其作为 “作为 HTML” 插入，带有所有 HTML 标签**
- **使用 `textContent`，将其 “作为纯文本” 插入，所有符号（symbol）均按字面意义处理**

例如：

```html
<div id="elem1"></div>
<div id="elem2"></div>

<script>
  let name = prompt(`What's your name?`, '<b>Winnie-the-Pooh!</b>');
  
  elem1.innerHTML = name;
  elem2.textContent = name;
</script>
```

![image-20250801203120455](images/image-20250801203120455.png)

1. 第一个 `<div>` 获取 `name` **“作为 HTML”**：所有标签都变成标签，所以可以看到粗体的 `name`
1. 第二个 `<div>` 获取 name **“作为文本”**，因此可以从字面上看到 `<b>Winnie-the-Pooh!</b>`

在大多数情况下，**期望来自用户的文本视为文本对待，不希望在网站中出现意料不到的 HTML，对 `textContent` 的赋值正好可以做到这一点**。



**hidden 属性**

**`hidden` 特性（attribute）和 DOM 属性（property） 指定元素是否可见**。

可以在 HTML 中使用它，或者使用 JavaScript 对其进行赋值，例如：

```html
<div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true;
</script>
```

![image-20250801203920233](images/image-20250801203920233.png)

*`undefined`* 从技术上讲，**`hidden` 与 `style="display: none"` 做的是相同的事情**，但 `hidden` 写法更简洁。



**更多属性**

DOM 元素还有其它属性，特别是那些依赖于所对应的 JavaScript 类的属性：

- **`value`** —— `<input>`，`<select>` 和 `<textarea>`（`HTMLInputElement`，`HTMLSelectElement`……）的 `value`
- **`href`** —— `<a href="...">`（`HTMLAnchorElement`）的 `href`
- **`id`** —— 所有 HTML 元素（`HTMLElement`）的 “id” 特性（attribute）的值
- ......更多其它内容......

例如：

```html
<input type="text" id="elem" value="value">

<script>
  alert(elem.type); // text
  alert(elem.id); // elem
  alert(elem.value); // value
</script>
```

大多数标准 HTML 特性（attribute）都具有相应的 DOM 属性，可以像上述代码一样直接访问它。

如果想知道给定类受支持属性的完整列表，可以在规范中找到它们，例如，在 https://html.spec.whatwg.org/#htmlinputelement 中记录了 `HTMLInputElement`。

或者也可以使用 `console.dir(elem)` 输出元素并读取其属性，或者在浏览器的开发者工具的元素（Elements）标签页中探索 “DOM 属性”。



## 特性和属性（Attributes 和 properties）

当浏览器加载页面时，它会 “读取”（或者 “解析”）HTML 并从中生成 DOM 对象，对于元素节点，**大多数标准的 HTML 特性（attributes）会自动变成 DOM 对象属性（properties）**。

例如：如果标签是 `<body id="page">`，那么生成的 DOM 对象就会有 `body.id = 'page'`。

**但特性和属性映射并不是一一对应的**。



**DOM 属性**

内建的 DOM 属性数量庞大，**但在技术上如果觉得这些属性不够用，可以添加自定义的属性**。

**DOM 节点是常规的 JavaScript 对象，可以修改它们**。

例如，在 `document.body` 中创建一个新的属性：

```js
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title); // Imperator
```

也可以添加一个方法：

```js
document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName(); // BODY（这个方法中的 this 的值是 document.body）
```

还可以修改内建属性的原型，例如修改 `Element.prototype` 为所有元素添加一个新方法：

```js
Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
}

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
```

所以 DOM 属性和方法的行为就像常规的 JavaScript 对象一样：

- **它们可以有很多值**
- **它们是大小写敏感的**（要写成 `elem.nodeType` 而不是 `elem.NoDeType`）



**HTML 特性**

在 HTML 中，标签可能拥有特性（attributes），当浏览器解析 HTML 文本，并根据标签创建 DOM 对象时，**浏览器会辨别标准的特性**并以此创建 DOM 属性。

所以当一个元素有 `id` 或其它**标准的特性**，那么就会生成对应的 DOM 属性，但是**非标准特性**则不会。

例如：

```html
<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    alert(document.body.something); // undefined
  </script>
</body>
```

**⚠️ 注意：一个元素的标准特性对另一个元素可能是未知的**，例如：`type` 是 `<input>` 的一个标准的特性，但对于 `<body>` 来说则不是。

例如：

```html
<body id="body" type="...">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined（DOM 属性没有被创建，因为它不是一个标准的特性）
  </script>
</body>
```

所以，**如果一个特性不是标准的，那么就没有相对应的 DOM 属性**。

所有特性都可以通过使用以下方式进行访问：

- **`elem.hasAttribute(name)`** —— 检查特性是否存在
- **`elem.getAttribute(name)`** —— 获取这个特性值
- **`elem.setAttribute(name, value)`** —— 设置这个特性值
- **`elem.removeAttribute(name)`** —— 移除这个特性

这些`方法实际上操作的都是 HTML 中的内容。

**也可以使用 `elem.attributes` 读取所有特性：**属于内建 `Attr` 类的对象的集合，具有 `name` 和 `value` 属性。

下面是读取非标准的特性的示例：

```html
<body something="non-standard">
  <script>
    alert(document.body.getAttribute('something')); // non-standard
  </script> 
</body>
```

HTML 特性有以下几个特征：

- **它们的名字大小写不敏感**（`id` 与 `ID` 相同）
- **它们的值总是字符串类型**

例如：

```html
<body>
  <div id="elem" about="Elephant"></div>
  
  <script>
    alert( elem.getAttribute('About') ); // (1)
    
    elem.setAttribute('Test', 123); // (2)
    
    alert( elem.outerHTML ); // (3)
    
    for (let attr of elem.attributes) { // (4)
      alert(`${attr.name} = ${attr.value}`);
    }
  </script>
</body>
```

**⚠️ 注意：**

1. `getAttribute('About')` —— 这里的第一个字母是大写的，**但在 HMTL 中，它们都是小写的**，特性的名称大小写是不敏感的
2. 可以将任何东西赋值给特性，但这些东西会**变成字符串类型**的，所以这里的值为 `'123'`
3. **所有特性，包括设置的特性，在 `outerHTML` 中都是可见的**
4. **`elem.attributes` 集合是可迭代对象**，该对象所有元素的特性（标准和非标准的）作为 `name` 和 `value` 属性存储在对象中



**属性与特性同步**

**当一个标准的特性被改变了，对应的属性也会自动更新**，（除了几个特例）反之亦然。

在下面的示例中，`id` 特性被修改了，然后对应的属性也发生了变化，反过来也是同样的效果：

```html
<input>

<script>
  const input = document.querySelector('input');
  
  // 特性 => 属性
  input.setAttribute('id', 'id');
  alert(input.id); // id（被更新了）
  
  // 属性 => 特性
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId（被更新了）
</script>
```

但也有例外，例如 **`input.value` 只能从特性同步到属性，反过来不行**：

```html
<input>

<script>
  let input = document.querySelector('input');

  // 特性 => 属性
  input.setAttribute('value', 'text');
  alert(input.value); // text（被更新了）

  // 这个操作无效，属性 => 特性
  input.value = 'newValue';
  alert(input.getAttribute('value')); // text（没有被更新！）
</script>
```

在上面这个例子中，**改变特性值 `value` 会更新属性，但属性的更改不会影响特性**。

**⚠️ 注意：** 这个功能在实际中会派上用场，因为用户的行为可能会导致 `value` 属性（properties）被修改，然后在这些操作之后，如果想恢复 “原始” 值，可以从 `value` 特性（attributes）中获取。



**DOM 属性是多类型的**

DOM 属性不总是字符串类型的，例如：`input.checked` 属性（对于 checkbox 的）是**布尔型**的。

```html
<input id="input" type="checkbox" checked> checkbox

<script>
  alert(input.getAttribute('checked')); // 特性值是：空字符串
  alert(input.checked); // true
</script>
```

还有其它的例子，**`style` 特性是字符串类型的，但 `style` 属性是一个对象**：

```html
<div id="div" style="color:red;font-size:120%">Hello</div>

<script>
 // 字符串
  alert(div.getAttribute('style')); // color:red;font-size:120%
  
  // 对象
  alert(div.style); // [object CSSStyleDeclaration]
  alert(div.style.color); // red
</script>
```

**尽管大多数 DOM 属性的类型都是字符串类型的**。

**⚠️ 注意：** 有一种非常少见的情况，**即使一个 DOM 属性是字符串类型的，但它可能和 HTML 特性也是不同的**，例如：**`href` DOM 属性一直是一个完整的 URL**，即使该特性包含一个相对路径或者包含一个 `#hash`。

例如：

```html
<a id="a" href="#hello">link</a>

<script>
  // 特性
  alert(a.getAttribute('href')); // #hello
  
  // 属性
  alert(a.href); // http://site.com/page#hello（形式的完整 URL）
</script>
```

**如果需要 `href` 特性的值，或者其它与 HTML 中所写完全相同的特性，则可以使用 `getAttribute` 来获取**。



**非标准的特性，dataset**

非标准的特性常常用于将自定义的数据从 HTML 传递到 JavaScript，或者用于为 JavaScript “标记” HTML 元素。

像下面这样：

```html
<!-- 标记这个 div 以在这显示 "name" -->
<div show-info="name"></div>
<!-- 标记这个 div 以在这显示 "age" -->
<div show-info="age"></div>

<script>
  let user = {
    name: 'Pete',
    age: 25
  };
  
  for (let div of document.querySelectorAll('[show-info]')) {
    const field = div.getAttribute('show-info');
    div.innerHTML = user[field]; // 首先 "name" 变为 Pete，然后 "age" 变为 25
  }
</script>
```

![image-20250802094039323](images/image-20250802094039323.png)

还可以用来设置元素的样式。

例如：这里 `order-state` 特性来设置订单状态：

```html
<style>
  /* 样式依赖于自定义特性 "order-state" */
  .order[order-state="new"] {
    color: green;
  }

  .order[order-state="pending"] {
    color: blue;
  }

  .order[order-state="canceled"] {
    color: red;
  }
</style>

<div class="order" order-state="new">
  A new order.
</div>

<div class="order" order-state="pending">
  A pending order.
</div>

<div class="order" order-state="canceled">
  A canceled order.
</div>
```

![image-20250802094319168](images/image-20250802094319168.png)

**使用特性相比使用 `.order-state-new`，`.order-state-pending`，`.order-state-canceled` 这些样式类要更好**，因为特性值更容易管理，可以使用 JavaScript 轻松更改状态：

```js
// 比删除旧的或者添加一个新的类要简单一些
div.setAttribute('order-state', 'canceled');
```

**⚠️ 注意：使用自定义的特性也存在问题，如果添加了一些非标准的特性，之后它被引入到了标准中并有了自己的用途，这时自定义属性会产生意料不到的意外**。

为了避免冲突，**存在 `data-*` 特性**。

**所有以 `data-` 开头的特性均被保留供程序员使用，它们可以通过 `dataset` 属性访问到**。

例如：

```html
<body data-about="Elephants">
  <script>
    alert(document.body.dataset.about); // Elephants
  </script>
</body>
```

像 `data-order-state` 这样的**多词特性可以以驼峰形式进行调用**：`dataset.orderState`。

这里是前面示例的重构版：

```html
<style>
  .order[data-order-state="new"] {
    color: green;
  }

  .order[data-order-state="pending"] {
    color: blue;
  }

  .order[data-order-state="canceled"] {
    color: red;
  }
</style>

<div id="order" class="order" data-order-state="new">
  A new order.
</div>

<script>
  // 读取
  alert(order.dataset.orderState); // new

  // 修改
  order.dataset.orderState = 'pending'; // (*)
</script>
```

**使用 `data-*` 特性是一种合法且安全的传递自定义数据的方式**。

**⚠️ 注意：** 

- **不仅可以读取属性，还可以修改数据属性（data-attributes）**，然后 CSS 会更新相应的视图，例如上面 `(*)` 行将颜色更改为了蓝色
- **在大多数情况下，最好使用 DOM 属性**，只有当 DOM 属性无法满足开发需求，并真的需要特性时，才使用自定义特性



**特性和属性的对比：**

- 特性（attribute）—— 写在 HTML 中的内容
- 属性（property）—— DOM 对象中的内容

|      | 属性                                   | 特性                         |
| :--- | :------------------------------------- | :--------------------------- |
| 类型 | 任何值，标准的属性具有规范中描述的类型 | 字符串                       |
| 名字 | 名字（name）是大小写敏感的             | 名字（name）是大小写不敏感的 |



## 修改文档（document）

DOM 修改是创建 “实时” 页面的关键。



**创建一个元素**

要创建 DOM 节点，有两种方法：

- **`document.createElement(tag)`**

  用给定的标签创建一个新**元素节点（element node）**：

  ```js
  const div = document.createElement('div');
  ```

- **`document.createTextNode(text)`**

  用给定的文本创建一个**文本节点**：

  ```js
  const textNode = document.createTextNode('Hello World!');
  ```



**创建一个消息**

创建一个消息 `div` 分为 3 个步骤：

```js
// 1. 创建 <div> 元素
const div = document.createElement('div');

// 2. 将元素的类设置为 alert
div.className = 'alert';

// 3. 填充消息内容
div.innerHTML = `<strong>Hi there!</strong> You've read an important message.`;
```

**⚠️ 注意：** 目前虽然创建了该元素，但**它还只是在一个名为 `div` 的变量中，尚未在页面中**。



**插入方法**

为了让创建的元素在页面中显示出来，需要将其插入到 `document` 中的某处，例如可以通过 `document.body` 将其插入到 `<body>` 元素里。

**对此有一个特殊的方法 `append`：`document.body.append(elem)`**。

完整的代码：

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = 'alert';
  div.innerHTML = `<strong>Hi there!</strong> You've read an important message.`;

  document.body.append(div);
</script>
```

![image-20250802145000116](images/image-20250802145000116.png)

在这个例子中，对 `document.body` 调用了 `append` 方法，**实际上可以在其它任何元素上调用 `append` 方法**，以将另外一个元素放到里面。

有更多的元素插入方法，指明了不同的插入位置：

- **`node.append(...nodes or strings)`** —— 在 `node` **末尾**插入节点或字符串
- **`node.prepend(...nodes or strings)`** —— 在 `node` **开头**插入节点或字符串
- **`node.before(...nodes for strings)`** —— 在 `node` **前面**插入节点或字符串
- **`node.after(...nodes for strings)`** —— 在 `node` **后面**插入节点或字符串
- **`node.replaceWith(...nodes for strings)`** —— 将 `node` **替换**为给定的节点或字符串

这些方法的参数可以是一个要插入的任意的 DOM 节点列表（逗号分隔传入多个，**推荐使用 `...` Spread 运算符**），或者文本字符串（**会被自动转换成文本节点**）。

例如：

```html
<ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  ol.before('before'); // 将字符串 'before' 插入到 <ol> 前面
  ol.after('after'); // 将字符串 'after' 插入到 <ol> 后面

  const liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  ol.prepend(liFirst); // 将 liFirst 插入到 <ol> 的最开始
  
  const liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast); // 将 liFirst 插入到 <ol> 的最末尾
</script>
```

![image-20250802150821722](images/image-20250802150821722.png)

这张图直观的显示了这些方法所做的工作：

![image-20250802150935186](images/image-20250802150935186.png)

这些方法可以在单个调用中插入多个节点列表和文本片段。

例如：

```html
<div id="div"></div>
<script>
  div.before('<p>Hello</p>', document.createElement('hr'));
</script>
```

![image-20250802151130435](images/image-20250802151130435.png)

**⚠️ 注意：这里的文本都被 “作为文本” 插入，而不是 “作为 HTML 代码”**，因此像 `<`、`>` 这样的符号都会被作转义处理来保证正确显示。

所以最终的 HTML 为：

```html
&lt;p&gt;Hello&lt;/p&gt;
<hr>
<div id="div"></div>
```

字符串被以一种安全的方式插入页面中，就像 `elem.textContent` 所做的一样。

**所以这些方法只能用来插入 DOM 节点或文本片段**。



**insertAdjacentHTML/Text/Element**

如果想将 HTML 字符串插入到指定位置，**可以使用 `elem.insertAdjacentHTML(where, html)`**。

该方法的第一个参数是**代码字（code word），指定相对于 `elem` 的插入位置，必须为以下之一**：

- **`'beforebegin'`** —— 将 `html` 插入到 `elem` 之前
-  **`'afterbegin'`** —— 将 `html` 插入到 `elem` 开头
- **`'beforeend'`** —— 将 `html` 插入到 `elem` 末尾
- **`'afterend'`** —— 将 `html` 插入到 `elem` 之后

第二个参数是 HTML 字符串，该字符串会被 “作为 HTML” 插入。

例如：

```html
<div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
  div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>
```

结果为：

```html
<p>Hello</p>
<div id="div"></div>
<p>Bye</p>
```

下面是插入变体的示意图：

![image-20250802184644918](images/image-20250802184644918.png)

该图与之前的图片有相似之处，插入点实际是相同的，**但此方法插入的是 HTML 字符串**。

这个方法有两个兄弟：

- **`elem.insertAdjacentText(where, text)`** —— 语法一样，但是将 `text` 字符串 **“作为文本” 插入而不是作为 HTML**
- **`elem.insertAdjacentElement(where, elem)`** —— 语法一样，但是**插入的是一个元素**

它们的存在主要是为了使语法 “统一”，实际上**大多数时候只使用 `insertAdjacentHTML`**，因为对于元素和文本，有 `append/prepend/before/after` 方法，它们也可以用于插入节点/文本片段，但**写起来更短**。

下面是显示消息的另一种变体：

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  document.body.insertAdjacentHTML('afterbegin', `<div class="alert">
    <strong>Hi there!</strong> You've read an important message.
  </div>`);
</script>
```



**节点移除**

想要移除一个节点，**可以使用 `node.remove()`**。

例如让消息在一秒后消失：

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = 'alert';
  div.innerHTML = `<strong>Hi there!</strong> You've read an important message.`;

  document.body.append(div);
  setTimeout(() => div.remove(), 1000);
</script>
```

**⚠️ 注意：如果要将元素移动到另一个地方，则无需将其从原来位置删除，所有插入方法都会自动从旧位置删除该节点**，例如：

```html
<div id="first">First</div>
<div id="second">Second</div>
<script>
  second.after(first); // 获取 #second，并在其后面插入 #first
</script>
```

![image-20250802185950237](images/image-20250802185950237.png)



**克隆节点：cloneNode**

可以通过创建一个函数，并把创建节点的代码放在其中。

但当有一个很大的元素时，克隆的方式可能更快更简单。

- **`elem.cloneNode(true)`** —— 创建元素的一个 **“深克隆”（具有所有特性（attribute）和子元素）**
- **`elem.cloneNode(false)`** —— 创建元素的一个 **“浅克隆”（克隆不包括子元素）**

例如：

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<div class="alert" id="div">
  <strong>Hi there!</strong> You've read an important message.
</div>

<script>
  let div2 = div.cloneNode(true); // 克隆消息
  div2.querySelector('strong').innerHTML = 'Bye there!'; // 修改克隆

  div.after(div2); // 在已有的 div 后显示克隆
</script>
```

![image-20250802190658503](images/image-20250802190658503.png)



**DocumentFragment**

`DocumentFragment` 是一个特殊的 DOM 节点，**用作传递节点列表的包装器（wrapper）**。

**可以向其附加其它节点，当将其插入某个位置时，则会插入其内容**。

例如：

```html
<ul id="ul"></ul>

<script>
  function getListContent() {
    const fragment = new DocumentFragment();
    
    for(let i = 1; i <= 3; i++) {
      const li = document.createElement('li');
      li.append(i);
      fragment.append(li);
    }
    
    return fragment;
  }
  
  ul.append(getListContent()); // (*)
</script>
```

最后一行 `(*)` 附加了 `DocumentFragment`，但是它与 `ul` “融为一体” 了，所以最终的文档结果应该是：

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

**⚠️ 注意：`DocumentFragment` 很少被显式使用**，也可以使用一个节点数组来实现前面的功能，例如：

```html
<ul id="ul"></ul>

<script>
  function getListContent() {
    const result = [];
    
    for(let i = 1; i <= 3; i++) {
      const li = document.createElement('li');
      li.append(i);
      result.push(li);
    }
    
    return result;
  }
  
  ul.append(...getListContent());
</script>
```



**老式的 insert/remove 方法**

由于历史原因，**还存在 “老式” 的 DOM 操作方法**。

这些方法来自真正的远古时代，**如今没有理由再使用它们了，因为诸如 `append`、`prepend`、`before`、`after`、`remove`、`repalceWith` 这些现代方法更加灵活**。

- **`parentElem.appendChild(node)`**

  将 `node` 附加为 `parentElem` 的最后一个子元素。

  例如：

  ```html
  <ol id="list">
    <li>0</li>
    <li>1</li>
    <li>2</li>
  </ol>
  
  <script>
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Hello, world!';
  
    list.appendChild(newLi);
  </script>
  ```

  ![image-20250802193111762](images/image-20250802193111762.png)

  

- **`parentElem.insertBefore(node, nextSibling)`**

  在 `parentElem` 的 `nextSibling` 前插入 `node`。

  例如：

  ```html
  <ol id="list">
    <li>0</li>
    <li>1</li>
    <li>2</li>
  </ol>
  <script>
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Hello, world!';
  
    list.insertBefore(newLi, list.children[1]);
  </script>
  ```

  ![image-20250802193330116](images/image-20250802193330116.png)

  如果要将 `newLi` 插入为第一个元素，可以这样做：

  ```js
  list.insertBefore(newLi, list.firstChild);
  ```

  

- **`parentElem.replaceChild(node, oldChild)`**

  将 `parentElem` 的后代中 `oldChild` 替换为 `node`。



- **`parentElem.removeChild(node)`**

  从 `parentElem` 中删除 `ndoe`（假设 `node` 为 `parentElem` 的后代）。

  例如：

  ```html
  <ol id="list">
    <li>0</li>
    <li>1</li>
    <li>2</li>
  </ol>
  
  <script>
    const li = list.firstElementChild;
    list.removeChild(li);
  </script>
  ```

  ![image-20250802193738732](images/image-20250802193738732.png)

  **所有这些方法都会返回插入/删除的节点**，例如：`parentElem.appendChild(node)` 会返回 `node`，但是**通常不会使用返回值，只是使用对应的方法**。



**document.write**

这是一种非常古老的向网页添加内容的方法：`document.write`。

语法如下：

```html
<p>Somewhere in the page...</p>
<script>
  document.write('<b>Hello from JS</b>');
</script>
<p>The end</p>
```

![image-20250802194203390](images/image-20250802194203390.png)

调用 `document.write(html)` 意味着**将 `html` “就地马上” 写入页面，`html` 字符串是可以动态生成的**，所以它很灵活，可以使用 JavaScript 创建一个完整的页面并对其进行写入。

这个方法来自于没有 DOM，没有标准的上古时期，这个方法被保留下来，因为还有脚本在使用它。

由于以下重要的限制，在现代脚本中很少看到它：

**`document.write` 调用只能在页面加载时工作**。

如果稍后调用它，则现有的文档内容将被擦除。

例如：

```html
<p>After one second the contents of this page will be replaced...</p>
<script>
  // 1 秒后调用 document.write
  // 这时页面已经加载完成，所以它会擦除现有内容
  setTimeout(() => document.write('<b>...By this.</b>'), 1000);
</script>
```

![image-20250802194641995](images/image-20250802194641995.png)

所以，在某种程度上讲，它**在 “加载完成” 阶段是不可用的**，这与其它 DOM 方法完全不同，这是它的缺陷。

**⚠️ 注意：** 使用它有一个好处，当浏览器正在读取（解析）传入的 HTML 时调用 `document.write` 方法写入一些东西时，**浏览器会像它本来就在 HTML 文本中那样使用它，所以它运行起来出奇的快**，因为它**不涉及 DOM 修改**，它会直接写入到页面文本中，而此时 DOM 尚未构建。

**当需要向 HTML 动态添加大量文本，并且正处于页面加载阶段，并且速度很重要，使用它可能会有帮助**，但实际上这些要求很少同时出现。



## 样式和类

通常有两种设置元素样式的方式：

1. 在 CSS 中创建一个类，并添加它：`<div class="...">`
2. 将属性直接写入 `style`：`<div style="...">`

**JavaScript 既可以修改类，也可以修改 `style` 属性**。

相较于将样式写入 `style` 属性，**应该首选通过 CSS 类的方式来添加样式**，只有当 CSS 类 “无法处理” 时，才选择使用 `style` 属性的方式。

例如，**如果动态计算元素的坐标，并通过 JavaScript 来设置它们，那么使用 `style` 是可以接受的**。

```js
let top = /* 复杂的计算 */;
let left = /* 复杂的计算 */;

elem.style.left = left; // 例如 '123px'，在运行时计算出的
elem.style.top = top; // 例如 '456px'
```

对于其它情况，例如：将文本设为红色，添加一个背景图标等，可以在 CSS 中对这些样式进行描述，然后添加类（使用 JavaScript 可以实现），这样更灵活也更易于支持。



**className 和 classList**

更改元素的 CSS 类是最常见的操作之一。

在很久之前，JavaScript 中有一个限制，像 `class` 这样的保留字不能用作对象的属性（现在这一限制已经不存在了），所以当时不能存在像 `elem.class` 这样的 `class` 属性。

因此对于类，引入了看起来类似的属性 `className`：**`elem.className` 对应于 `class` 特性（attribute）**。

例如：

```html
<body class="main page">
  <script>
    alert(document.body.className); // main page
  </script>
</body>
```

**如果对 `elem.className` 进行赋值，将替换类中整个字符串**，但通常需要的是添加/删除单个类。

这时可以使用另一个属性：`elem.classList`。

**`elem.classList` 是一个特殊的对象，它具有 `add/remove/toggle` 单个方法**。

例如：

```html
<body class="main page">
  <script>
    document.body.classList.add('article');
    
    alert(document.body.className); // main page article
  </script>
</body>
```

所以既可以使用 `className` 对完整的类字符串进行操作，也可以使用 `classList` 对单个类进行操作。

`classList` 的方法：

- **`elem.classList.add/remove(class)`** —— 添加/移除类
- **`elem.classList.toggle(class)`** —— 如果类不存在就添加类，存在就移除它
- **`elem.classList.contains(class)`** —— 检查给定类，返回 `true/false`

**⚠️ 注意：`classList` 是可迭代的**，所以可以像下面这样列出所有类：

```html
<body class="main page">
  <script>
    for(let name of document.body.classList) {
      alert(name); // 先是 main，然后是 page
    }
  </script>
</body>
```



**元素样式**

**`elem.style` 属性是一个对象，它对应于 `style` 特性（attribute）中所写的内容**。

**对于多词（multi-word）属性，使用驼峰式 camelCase**：

```tex
background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
```

例如：

```js
document.body.style.backgroundColor = prompt('background color?', 'green');
```

**⚠️ 注意：** 对于像 `-moz-border-radius` 和 `-webkit-border-radius` 这样的浏览器前缀属性，也遵循同样的规则：连字符 `-` 表示大写。

例如：

```js
button.style.MozBorderRadius = '5px';
button.style.WebkitBorderRadius = '5px';
```



**重置样式属性**

为了隐藏一个属性，可以设置 `elem.style.display = 'none'`。

如果想要移除 `style.display` 属性，就像它没有被设置一样，这里**不应该使用 `delete elem.style.display`，而是使用 `elem.style.display = ''` 将其赋值为空字符串**。

例如：

```js
document.body.style.display = 'none'; // 隐藏

setTimeout(() => document.body.style.display = '', 1000); // 一秒后恢复显示
```

上述代码中**将 `style.display` 设置为空字符串，浏览器通常会应用 CSS 类以及内建样式，就好像没有 `style.display` 属性一样**。

**也可以使用 `elem.style.removeProperty('style property')` 删除 `style` 中的属性**：

```js
document.body.style.background = 'red'; // 设置红色背景

setTimeout(() => document.body.style.removeProperty('background'), 1000); // 一秒后移除红色背景
```

**⚠️ 注意：** 使用 `style.*` 只能对各个样式属性进行赋值，**不能像这样 `div.style="color: red; width: 100px"` 设置完整的属性，因为 `div.style` 是一个对象，并它是只读的**。

想要**以字符串的形式来设置完整的样式，可以使用特殊属性 `style.cssText`**：

```html
<div id="div">Button</div>

<script>
  div.style.cssText = `color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;`;
  
  alert(div.style.cssText); // background-color: yellow; width: 100px; text-align: center; color: red !important;
</script>
```

很少使用这个属性，**因为这样的赋值会删除所有现有的样式**，它不是进行添加，而是替换它们，只有当知道不会删除现有样式时，可以将其安全地用于新元素。

也**可以通过设置一个特性（attribute）来实现相同的效果：`div.setAttribute('style', 'color: red...')`**。



**注意单位**

**不要忘记将 CSS 单位添加到值上**。

例如，不应该将 `elem.style.top` 设置为 `10`，而是应该将其设置为 `10px`，否则设置会无效：

```html
<body>
  <script>
    document.body.style.margin = 20; // 无效
    alert(document.body.style.margin); // ''（空字符串，赋值被忽略了）
    
    document.body.style.margin = '20px'; // 添加了 CSS 单位（px）生效了
    alert(document.body.style.margin); // 20px
    
    alert(document.body.style.marginTop); // 20px
    alert(document.body.style.marginLeft); // 20px
  </script>
</body>
```

computedStyle上述代码中**浏览器在最后几行代码中对属性 `style.margin` 进行了 “解包”，并从中推断出 `style.marginLeft` 和 `style.marginTop`**。



**计算样式：getComputedStyle**

**`style` 属性只对 `style` 特性（attribute）值起作用，没有任何 CSS 级联（cascade）**。

所以**无法使用 `elem.style` 属性读来自 CSS 类的任何内容**。

例如：

````html
<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>
  The red text
  <script>
    alert(document.body.style.color); // 空的
    alert(document.body.style.marginTop); // 空的
  </script>
</body>
````

如果需要将 `margin` 增加到 `20px` 或者需要获取 `margin` 当前的值，**可以使用另一个方法：`getComputedStyle`**。

语法：

```js
getComputedStyle(elem, [pseudo]);
```

- **`element`** —— 需要被读取样式的元素
- **`pseudo`** —— 伪元素（如果需要），例如 `'::before'`，**空字符串或者无参数意味着元素本身**

返回的结果是一个具有样式属性的对象，类似于 `elem.style`，对于所有的 CSS 类来说都如此。

例如：

```html
<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>
  <script>
    const computedStyle = getComputedStyle(document.body);
    
    alert(computedStyle.marginTop); // 5px
    alert(compuredStyle.color); // rgb(255, 0, 0)
  </script>
</body>
```

**⚠️ 注意：**

- 在 CSS 中有以下两个概念：

  1. **计算值（computed）样式值：** 所有 CSS 规则和 CSS 继承都应用后的值，这是 CSS 级联（cascade）的结果，看起来像 `height: 1em` 或者 `font-size: 125%`
  2. **解析（resolved）样式值：** 最终应用于元素的样式值，诸如 `1em` 或 `125%` 这样的值都是相对的，浏览器将使用计算（computed）值，并使所有单位均为固定的，且为绝对单位，例如：`height:20px` 或 `font-size:16px`，对于几何属性，解析（resolved）值可能具有浮点，例如：`width: 50.5px`

  在很久之前，`getComputedStyle` 返回的是计算（computed）值，但事实证明解析（resolved）值要方便得多，标准也因此发生了变化，所以**现在 `getComputedStyle` 实际上返回属性值是解析（resolved）值**。

  

- **`getComputedStyle` 需要完整的属性名**

  应该**总是使用确切的属性**，例如：`paddingLeft`、`marginTop` 或 `borderTopWidth`等，否则不能保证正确的结果。

  例如，如果有 `paddingLeft/paddingTop` 属性，那么对于 `getComputedStyle(elem).padding` 会得到什么？可能什么都没有，也可能是从已知的 `padding` 中 “生成” 的值，这里**没有标准的规则**。

  

- **应用于 `:visited` 链接的样式被隐藏了**

  可以使用 CSS 伪类 `:visited` 对被访问过的链接进行着色，**但 `getComputedStyle` 没有给出访问该颜色的方式，因为如何允许的话任何页面都允许在页面上创建它，并通过检查样式来确定用户是否访问了该链接**。
  
  JavaScript 看不到 `:visited` 所应用的样式，**此外 CSS 中也有一个限制：禁止在 `:visited` 中应用更改几何形状的样式**，这是为了确保一个不好的页面无法检测链接是否被访问。



## 元素大小和滚动

JavaScript 中有许多属性可以读取元素的宽度、高度和其它几何特征信息。  

例如有下面这样的元素：

```html
<div id="example">
  ...Text...
</div>
<style>
  #example {
    width: 300px;
    height: 200px;
    border: 25px solid #E8C48F;
    padding: 20px;
    overflow: auto;
  }
</style>
```

它有边框（border），内边距（padding）和滚动（scrolling）等全套功能，但没有外边距（margin），**因为外边距不是元素本身的一部分，并且它们没有什么特殊的属性**。

这个元素看起来像下面这样：

![image-20250805142205542](images/image-20250805142205542.png)

**⚠️ 注意：**

- 上图中的演示元素具有滚动条，**如果没有滚动条，内容宽度将是 `300 px`，如果滚动条的宽度是 `16px`（不同的设备和浏览器，滚动条的宽度可能有所不同），那么还剩下 `300 - 16 = 284px`**

- **文本可能会溢出到 `padding-bottom` 中**

  如果元素中有很多文本，并且溢出了，**浏览器会在 `padding-bottom` 处显示溢出文本，这是正常现象**

  ![image-20250805142923420](images/image-20250805142923420.png)



**几何**

下面是带有几何属性的整体图片：

![image-20250805143038851](images/image-20250805143038851.png)

**⚠️ 注意：** 这些属性的值在技术上是数字，但这些数字其实是 “像素（pixel）”，因为它们是**像素测量值**。



**offsetParent，offsetLeft/Top**

这些属性很少使用，但它们仍然是 “最外面” 的几何属性。

**`offsetParent` 是最接近的祖先（ancestor）**，在浏览器渲染期间，它被用于计算坐标。

最近的祖先为下列之一：

1. CSS 定位的（`position` 为 `absolute`、`relative`、`fixed` 或 `sticky`）
2. `<td>`、`th`、`<table>`
3. `<body>`

**属性 `offsetLeft/offsetTop` 提供了相对于 `offsetParent` 左上角的 x/y 坐标**。

例如：

```html
<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px">...</div>
  </article>
</main>
<script>
  alert(example.offsetParent.id); // main
  alert(example.offsetLeft); // 180（注意：这是一个数字，不是字符串 "180px"）
  alert(example.offsetTop); // 180
</script>
```

![image-20250805143929408](images/image-20250805143929408.png)

**⚠️ 注意：** 有以下几种情况下，`offsetParent` 的值为 `null`：

1. **对于未显示的元素（`display:none` 或者不在文档中）**
2. **对于 `<body>` 与 `<html>`**
3. **对于带有 `position:fixed` 的元素**



**offsetWidth/Height**

它们提供了元素的 “外部” `width/height`，简单来说就是**它的完整大小（包括边框）**。

![image-20250805144256581](images/image-20250805144256581.png)

对于示例元素：

- `offsetWidth = 390` —— 外部宽度（width），可以计算为内部 CSS-width（`300px`）加上 `padding`（`2 * 20px `）和 `border`（`2 * 25px`）
- `offsetHeight = 290` —— 外部高度（height）

**⚠️ 注意：对于未显示的元素，几何属性为 0/null**，如果一个元素（或其任何祖先）具有 `display: none` 或不在文档中，则所有几何属性均为零（或 `offsetParent` 为 `null`）。

例如创建了一个元素，但尚未将它插入文档中，或者它（或它的祖先）具有 `display: none` 时，**`offsetParent` 为 `null`，并且 `offsetWidth` 和 `offsetHeight` 为 `0`**。

可以利用它来检查一个元素是否被隐藏，像这样：

```js
function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetheight;
}
```

**⚠️ 注意：对于展示在屏幕上，但大小为零的元素，它们的 `isHidden` 也返回 `true`**。



**clientTop/left**

要测量元素内部的边框（border），可以使用 `clientTop` 和 `clientLeft`。

在示例中：

- `clientLeft = 25` —— 左边框宽度
- `clientTop = 25` —— 上边框宽度

![image-20250805145950966](images/image-20250805145950966.png)

这些属性不是边框的 `width/height`，**而是内侧与外侧的相对坐标**。

当文档从右到左显示（操作系统为阿拉伯语或希伯来语）时，**此时滚动条不在右边，而是在左边，此时 `clientLeft` 则包含了滚动条的宽度**。

在这种情况下，`clientLeft` 的值将不是 `25`，而是加上滚动条的宽度（如果滚动调的宽度是 `16px`） `25 + 16 = 41`。

下面是希伯来语的例子：

![image-20250805150306933](images/image-20250805150306933.png)

**clientWidth/Height**

这些属性提供了元素边框内区域的大小。

它们包括了 `content width` 和 `padding`，**但不包括滚动条宽度（scrollbar）**：

![image-20250805150610804](images/image-20250805150610804.png)

在上图中，因为没有水平滚动条，所以 `clientHeight` 恰好是 `border` 内的总和：CSS-height `200px` 加上顶部和底部的 `padding`（`2 * 20px`），总计 `240px`。

而 `clientWidth` —— 这里的 `content width` 不是 `300px`，而是 `284px`，因为被滚动条占用了 `16px`，所以加起来就是 `284px` 加上左侧和右侧的 `padding`，总计 `324px`。

**如果没有 `padding`，那么 `clientWidth/Height` 代表的就是内容区域，即 `border` 和 `scrollbar`（如果有）内的区域**。

![image-20250805151309807](images/image-20250805151309807.png)

因此，**当没有 `padding` 时，可以使用 `clientWidth/clientHeight` 来获取内容区域的大小**。



**scrollWidth/Height**

这些属性就像是 `clientWidth/clientHeight`，但它们还包括滚动出（隐藏）的部分：

![image-20250805151550266](images/image-20250805151550266.png)

在上图中：

- `scrollHeight = 723` —— 是内容区域的完整内部高度，包括滚动出的部分
- `scrollWidth = 324` —— 是完整的内部宽度，这里因为没有水平滚动，因此它等于 `clientWidth`

可以使用这些属性将元素展开（expand）到整个 `width/height`。

像下面这样：

```js
// 将元素展开（expand）到完整的内容高度
element.style.height = `${element.scrollHeight}px`;
```



**scrollLeft/scrollTop**

属性 `scrollLeft/scrollTop` 是元素的隐藏、滚动部分的 `width/height`。

在下图中，可以看到带有垂直滚动块的 `scrollHeight` 和 `scrollTop`。

![image-20250805152059209](images/image-20250805152059209.png)

简单来说，**`scrollTop` 就是 “已经滚动了多少”**。

**⚠️ 注意：大多数几何属性都是只读的，但是 `scrollLeft/scrollTop` 是可修改的**，并且浏览器会滚动这些元素。

例如：执行代码 `elem.scrollTop += 10`，会使元素内容向下滚动 `10px`。

**也可以将 `scrollTop` 设置为 `0` 或者一个大的值，例如 `1e9`，会使元素滚动到顶部/底部**。



**不要从 CSS 中获取 width/height**

**不要使用 `getComputedStyle` 来读取 CSS-width 和 height，而是应该使用几何属性**。

例如：

```js
const elem = document.body;

alert(getComputedStyle(elem).width); // 显示 elem 的 CSS width
```

为什么应该使用几何属性，有以下几个原因：

1. CSS `width/height` 取决于另一个属性：`box-sizing`，**它定义了 “什么是” CSS 宽度和高度，出于 CSS 的目的而对 `box-sizing` 进行的更改可能会破坏此类 JavaScript 操作**

2. **CSS 的 `width/height` 可能是 `auto`**，例如内联（inline）元素：

   ```html
   <span id="elem">Hello!</span>
   
   <script>
     alert(getComputedStyle(elem).width); // auto
   </script>
   ```

   从 CSS 观点来看，`width: auto` 是完全正常的，但在 JavaScript 中，需要一个确切的 `px` 大小，以便在计算中使用它，所以这里的 CSS `auto` 宽度没什么用

3. **`getComputedStyle` 在没有滚动条的代码下工作正常，当出现滚动条时，就会出现问题**

   因为在某些浏览器中，滚动条会占用内容的空间，所以内容的实际宽度小于 CSS 宽度，而使用几何属性 `clientWidth/clientHeight` 则会考虑到这一点。

   但使用 `getComputedStyle(elem).width` 时，情况就不同了，**某些浏览器（例如 Chrome）返回的是实际内部宽度减去滚动条宽度，而某些浏览器（例如 Firefox）返回的是 CSS 宽度（忽略的滚动条的宽度），这种跨浏览器的差异是不使用的 `getComputedStyle` 而依赖几何属性的原因**。

4. **几何属性返回的都是数值，而 `getComputedStyle` 返回的大多数值都是一个以 `px` 作为后缀的字符串**



## Window 大小和滚动

要获取浏览器窗口的宽度和高度，以及滚动部分在内完整宽度和高度等信息，可以使用与 `<html>` 标签对应的 `document.docuemntElement`，但是还有其它方法和特性需要考虑。



**窗口的 width/height**

为了获取创建的宽度和高度，**可以使用 `document.documentElement` 的 `clientWidth/clientHeight`**：

![image-20250806080538047](images/image-20250806080538047.png)


**⚠️ 注意：**

- **不是 `window.innerWidth/innerHeight`**，浏览器也支持像 `window.innerWidth/innerHeight` 这样的属性，但如果这里存在一个滚动条，并且滚动条占用了一些空间，**那么返回的 `window.innerWidth/innerHeight` 包含了滚动条的宽度**，而 `clientWidth/clientHeight` 返回的是没有滚动条（减去它）的 `width/height`，例如：

  ```js
  alert(window.innerWidth); // 整个浏览器的宽度
  alert(document.documentElement.clientWidth); // 减去滚动条宽度后的窗口宽度
  ```

  在大多数情况下，需要**可用**的窗口宽度来绘制或放置某些东西，**所以如果窗口有滚动条，应该使用 `document.clientWidth/clientHeight`**。

- **`<!DOCTYPE HTML>` 很重要**，当 HTML 中没有 `<!DOCTYPE HTML>` 时，顶层级（top-level） 属性的工作方式可能就会所有不同，可能会出现一些稀奇古怪的情况，**在现代 HTML 中，我们始终都应该写 `<!DOCTYPE HTML>`**



**文档的 width/height**

理论上，根文档元素是 `document.documentElement`，并且它包围了所有内容，因此可以通过使用 `documentElement.scrollWidth/scrollHeight` 来测量文档的完整大小。

**但在该元素上，对于整个文档，这些属性均无法正常工作**，在 Chrome/Safari/Opera 中，**如果没有滚动条，`documentElement.scrollHeight` 甚至可能小于 `documentElement.clientHeight`**。

为了可靠地获取完整的文档高度，**应该使用以下这些属性中的最大值**：

```js
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight,
);

alert('完整文档高度，包含滚动出的部分：' + scrollHeight);
```

**⚠️ 注意：之所以会这样，是因为这些不一致来源于远古时代**。



**获得当前滚动**

DOM 元素的当前滚动状态在其 `scrollLeft/scrollTop` 属性中。

**对于文档滚动，在大多数浏览器中，可以使用 `document.documentElement.scrollLeft/scrollTop`，但在较旧的基于 Webkit 的浏览器中则不行**，例如在 Safari（bug [5991](https://bugs.webkit.org/show_bug.cgi?id=5991)）中应该使用 `document.body` 而不是 `document.documentElement`。

**幸运的是，根本不必记住这些特性，因为可以从 `window.pageXOffset/pageYOffset` 中获取页面当前滚动信息**：

```js
alert('当前已从顶部滚动：' + window.pageYOffset);
alert('当前已从左侧滚动：' + window.pageXOffset);
```

**⚠️ 注意：**

- **这些属性都是只读的**
- **也可以从 `window` 的 `scrollX` 和 `scrollY` 属性中获取滚动信息**，由于历史原因，存在了这两种属性，但是它们一样：
  - **`window.pageXOffset` 是 `window.scrollX` 的别名**
  - **`window.pageYOffset` 是 `window.scrollY` 的别名**



**滚动：scrollTop，scrollBy，scrollInotView**

**⚠️ 注意：必须在 DOM 完全构建好之后才能通过 JavaScript 滚动页面**，例如如果尝试通过 `<head>` 中的脚步滚动页面，它将无法正常工作。

**通过使用 `scrollTop/scrollLeft` 来滚动常规元素**。

**通过使用 `document.documentElement.scrollTop/scrollLeft` 来对页面进行相同的操作（Safari 除外，而应该使用 `document.body.scrollTop/Left` 代替）**。

还有一个更简单的通用解决方案：**使用特殊方法 `window.scrollBy(x, y)` 和 `window.scrollTo(pageX, pageY)`**。

- **`scrollBy(x,y)`** —— 将页面滚动至**相对于当前位置的 `(x, y)` 位置**，例如：`scrollBy(0, 10)` 会将页面向下滚动 `10px`

- **`scrollTo(pageX, pageY)`** —— 将页面滚动至**绝对坐标**，**使得可见部分的左上角具有相对于文档左上角的坐标 `(pageX, pageY)`**，就像设置了 `scrollLeft/scrollTop` 一样

  要滚动到最开始，可以使用 `scrollTo(0, 0)`。

这些方法适用于所有浏览器。



**scrollIntoView**

对 `elem.scrollIntoView(top)` 的调用将滚动页面以使 `elem` 可见，它有一个参数：

- 如果 `top = true`（**默认值**），页面滚动，**使 `elem` 出现在窗口的顶部，元素的上边缘将与窗口顶部对齐**
- 如果 `top = false`，页面滚动，**使 `elem` 出现在窗口底部，元素的底部边缘将与窗口底部对齐**



**禁止滚动**

有时候需要使文档 “不可滚动”，例如：需要用一条立即引起注意的大消息来覆盖文档时，这时希望访问者与消息而不是文档进行互动。

**要使页面不可滚动，只需要设置 `document.body.style.overflow = 'hidden'`，该页面将 “冻结” 滚动在其当前滚动位置上**。

**如果要使页面从不可滚动恢复到可滚动，可以设置 `document.body.style.overflow = ''`**。

也可以使用相同的技术来 “冻结” 其它元素的滚动，而不仅仅是 `document.body`。

**⚠️ 注意：这个方法的缺点是会使滚动条消失**，如果滚动条占用了一些空间，它原本占用的空间就会空出来，那么内容就会 “跳” 进去以填充它。

如果要解决这个问题，**可以对比 “冻结” 前后的 `clientWidth`，如果它增加了（滚动条消失后），那么可以在 `doucment.body` 的滚动条原来的位置添加 `padding` 来替代滚动条**，保持了滚动条 “冻结” 前后文档内容宽度相同。



## 坐标

大多数 JavaScript 方法处理的是以下两个坐标系中的一个：

- **相对于窗口** —— 类似于 `position: fixed`，从窗口的顶部/左侧边缘计算得出
  - **在事件属性中将这些坐标系表示为 `clientX/clientY`**
- **相对于文档** —— 与文档根（document root）中的 `position: absolute` 类似，从文档的顶部/左侧边缘计算得出
  - **在事件属性中将这些坐标系表示为 `pageX/pageY`**

**当页面滚动到最开始时，此时窗口的左上角恰好是文档的左上角，它们的坐标彼此相等**，但是当文档移动之后，元素的窗口相对坐标会发生变化，因为元素在窗口中移动，而元素在文档中的相对坐标保持不变。

下图就是在文档中取一点，演示了它滚动之前（左）和之后（右）的坐标：

![image-20250806133810594](images/image-20250806133810594.png)

当文档滚动了：

- `pageY` —— 元素在文档中的相对坐标保持不变，从文档顶部（现在已滚动出去）开始计算
- `clientY` —— 窗口相对坐标确实发生了变化（箭头变短了），因为同一个点越来越靠近窗口顶部



**元素坐标：getBoundingClientRect**

方法 `getBoundingClientRect()` **返回最小矩形的窗口坐标**，该矩形将 `elem` 作为**内建 `DOMRect` 类**的对象。

主要的 `DOMRect` 属性：

- **`x/y`** —— 矩形原点相对于窗口的 X/Y 坐标
- **`width/height`** —— 矩形的 width/height（可以为负数）

此外还有派生（derived）属性：

- **`top/bottom`** —— 顶部/底部矩形边缘的 Y 坐标
- **`left/right`** —— 左/右矩形边缘的 X 坐标

下面是 `elem.getBoundingClientRect()` 的输出示意图：

![image-20250806135346347](images/image-20250806135346347.png)

正如上图所示，`x/y` 和 `width/height` 对矩形进行了完整的描述，所以很容易从它们计算出派生（derived）属性：

- `left = x`
- `top = y`
- `right = x + width`
- `bottom = y + height`

**⚠️ 注意：**

- **坐标可能是小数**，例如：`10.5`，这是正常的，因为浏览器内部使用小数进行计算，在设置 `style.left/top` 时，**不是必须对它们进行舍入**

- **坐标可能是负数**，例如滚动页面，使 `elem` 位于窗口的上方，则 `elem.getBoundingClientRect().top` 为负数

- **负的 `width/height` 值表示矩形从其右下角开始，然后向左上方 “增长”**

  从数学上讲，一个矩形是使用其起点 `(x,y)` 和方向向量 `(width,height)` 唯一定义的，所以其它派生类是为了方便起见。

  在技术上讲，`width/height` 可能为负数，从而允许 **“定向（directed）” 矩形**，例如代表带有正确标记的开始和结束的鼠标选择。

  下图中是一个矩形，**其 `width` 和 `height` 均为负数（例如 `width = -200`，`height = -100`）**：

  ![image-20250806140111315](images/image-20250806140111315.png)

  正如上图所示，在这个例子中，**`left/top` 与 `x/y` 不相等**，但实际上 `elem.getBoundingClientRect()` 总是返回正数的 `width/height`。
  
- **IE 浏览器不支持 `x/y`**，由于历史原因，IE 浏览器不支持 `x/y` 属性。
  
  可以写一个 polyfill（在 `DomRect.property` 中添加一个 getter：
  
  ```js
  if (!('x' in DOMRect.prototype)) {
    Object.defineProperty(DOMRect.prototype, 'x', {
      get() { return this.left; }
    });
  }
  
  if (!('y' in DOMRect.prototype)) {
    Object.defineProperty(DOMRect.prototype, 'y', {
      get() { return this.top; }
    });
  }
  ```
  
  **如果盒子宽高都是正数（即没有被 transform 缩放、旋转等奇怪变换），也可以只使用 `top/left`**，此时它们和 `x/y` 的值相同。
  
  **不是所有 `DOMRect` 或坐标对象都有一定 `x/y === left/top`**，但 `getBoundingClientRect()` 方法的返回值在绝大多数情况下（即宽高为正，没有奇怪变换），**`x` 就是 `left`，`y` 就是 `top`**。
  
- **坐标的 `right/bottom` 与 CSS position 属性不同**
  
  在 CSS 定位中，`right` 属性表示距右边缘的距离，而 `bottom` 属性表示距下边缘的距离，**但在 JavaScript 中并非如此，窗口的所有坐标都是从左上角开始计数，包括坐标**。



**elementFromPoint(x, y)**

对 `document.elementFromPoint(x, y)` 调用**会返回在窗口坐标 `(x, y)` 处嵌套最多（the most nested）的元素**。

语法：

```js
const elem = document.elementFromPoint(x, y);
```

例如，下面的代码会高亮显示并输出现在位于窗口中间的元素标签：

```js
const centerX = document.documentElement.clientWidth / 2;
const centerY = document.documentElement.clientHeight / 2;

const elem = document.elementFromPoint(centerX, centerY);

elem.style.background = 'red';
alert(elem.tagName);
```

上述代码因为使用的是窗口坐标，所以元素可能会因为当前滚动位置而有所不同。

**⚠️ 注意：对于在窗口之外的坐标，`elementFromPoint` 返回 `null`**。

方法 `document.elementFromPoint(x, y)` **只对可见区域内的坐标 `(x, y)` 起作用，如果任何坐标为负或者超过了窗口的 `width/height`，那么该方法就会返回 `null`**。



**用于 fixed 定位**

大多数时候，需要使用坐标来确定某些内容的位置。

在某些元素附加展示内容，可以使用 `getBoundingClientRect` 来获取这个元素的坐标，然后使用 CSS `position` 以及 `left/top`（或 `right/bottom`）。

例如：

```js
let elem = document.getElementById('coords-show-mark');

function createMessageUnder(elem, html) {
  // 创建 message 元素
  let message = document.createElement('div');
  // 这里最好使用 CSS class 来定义样式
  message.style.cssText = 'position:fixed; color: red';

  // 分配坐标，不要忘记 px
  let coords = elem.getBoundingClientRect();

  message.style.left = coords.left + 'px';
  message.style.top = coords.bottom + 'px';

  message.innerHTML = html;

  return message;
}

// 用法：
// 在文档中添加 message 保持 5 秒
let message = createMessageUnder(elem, 'Hello, world!');
document.body.append(message);
setTimeout(() => message.remove(), 5000);
```

**⚠️ 注意：滚动页面时，消息会从按钮中流出**，因为 `message` 元素依赖于 `position: fixed`，所以当页面滚动时，它仍处于窗口的同一位置，**要改变这一点，需要使用基于文档（document）的坐标和 `position: absolute` 样式**。



**文档坐标**

文档相对坐标是**从文档的左上角开始计算，而不是窗口**。

在 CSS 中，**窗口坐标对应于 `position: fixed`，而文档坐标与顶部的 `position: absolute` 类似**。

可以使用 `position: absolute` 和 `top/left` 来把某些内容放在文档中的某个位置，以便在页面滚动时，元素仍能保留在该位置。

**没有标准方法来获取元素的文档坐标**，但是实现起来很容易：

- **`pageY` =  ` clientY` + 文档的垂直滚动出的部分的高度**
- **`pageX` = `clientX` + 文档的水平滚动出的部分的宽度**

可以实现获取文档坐标的 `getCoords(elem)` 函数：

```js
function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
  }
}
```



## 浏览器事件简介

**事件**是某事发生的信号，所有 DOM 节点都会生成这样的信号（但**事件不仅限于 DOM**）。

常见的 DOM 事件列表如下：

**鼠标事件：**

- `click` —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）
- `contextmenu` —— 当鼠标右键点击一个元素时
- `mouseover` / `mouseout` —— 当鼠标指针移入/离开一个元素时
- `mousedown` / `mouseup` —— 当在元素上按下/释放鼠标按钮时
- `mousemove` —— 当鼠标移动时

**键盘事件**：

- `keydown` 和 `keyup` —— 当按下和松开一个按键时

**表单（form）元素事件**：

- `submit` —— 当访问者提交了一个 `<form>` 时
- `focus` —— 当访问者聚焦于一个元素时，例如聚焦于一个 `<input>`

**Document 事件**：

- `DOMContentLoaded` —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时

**CSS 事件**：

- `transitionend` —— 当一个 CSS 动画完成时



**事件处理程序**

为了对事件作出响应，可以分配一个**处理程序（handler）**—— 一个在事件发生时运行的函数。

**处理程序是发生在用户行为（action）时运行 JavaScript 代码的一种方式**。



**HTML 特性**

处理程序**可以设置在 HTML 中名为 `on<event>` 的特性（attribute）中**。

例如，要为一个 `<input>` 分配一个 `click` 处理程序，可以使用 `onclick`：

```html
<input value="点我" onclick="alert('click')" type="button" />
```

上述代码中在鼠标点击按钮时，`onclick` 中的代码就会运行。

**⚠️ 注意：**

- **在 `onclick` 内容中使用单引号，因为特性本身使用的是双引号**，如果写成这样：`onclick="alert("Click!")"`，那么它就无法正确运行

- **HTML 特性不是编写大量代码的好地方**，所以最好创建一个 JavaScript 函数，然后在 HTML 特性中调用这个函数

  例如：

  ```html
  <script>
    function countRabbits() {
      for(let i = 1; i < 3; i++) {
        alert('Rabbit number ' + i);
      }
    }
  </script>
  
  <input type="button" onclick="countRabbits()" value="Count rabbits!">
  ```

  **⚠️ 注意：HTML 特性是大小写不敏感的**，所以 `ONCLICK` 和 `onClick` 以及 `onCLICK` 都一样可以运行，**但是特性通常是小写的：`onclick`**。



**DOM 属性**

可以使用 DOM 属性（property）`on<event>` 来分配处理程序。

例如 `elem.onclick`：

```html
<input id="elem" type="button" value="Click me">
<script>
  elem.onclick = function() {
    alert('Thank you');
  };
</script>
```

**如果一个处理程序是通过 HTML 特性（attribute）分配的，那么随后浏览器读取它，并从特性的内容创建一个新函数，并将这个函数写入 DOM 属性（property）**。

所以，这种方法实际上与前一种方法相同。

这两段代码工作相同：

1. 只有 HTML：

   ```html
   <input type="button" onclick="alert('Click!')" value="Button">
   ```

2. HTML + JS：

   ```html
   <input type="button" id="button" value="Button">
   <script>
     button.onclick = function() {
       alert('Click!');
     };
   </script>
   ```

在第一个例子中，`button.onclick` 是通过 HTML 特性（attribute）初始化的，而第二个例子中是通过脚本初始化的，这是它们唯一的不同之处。

**⚠️ 注意：因为这里只有一个 `onclick` 属性，所以无法分配更多事件处理程序**，例如：

```html
<input type="button" id="elem" onclick="alert('Before')" value="Click me">
<script>
  elem.onclick = function() { // 覆盖了现有的处理程序
    alert('After'); // 只会显示此内容
  };
</script>
```

**要移除一个处理程序 —— 赋值 `elem.onclick = null`**。



**访问元素：this**

**处理程序中的 `this` 的值是对应的元素，就是处理程序所在的那个元素**。

下面这行代码中的 `<button>` 使用 `this.innerHTML` 来显示它的内容：

```html
<button onclick="alert(this.innerHTML)">Click me</button>
```



**可能出现的错误**

可以将一个现存的函数用作处理程序：

```js
function sayThanks() {
  alert('Thanks!');
}

elem.onclick = sayThanks;
```

**⚠️ 注意：函数应该是以 `sayThanks` 的形式进行赋值，而不是 `sayThanks()` **。

```js
// 正确
button.onclick = sayThanks;

// 错误
button.onclick = sayThanks();
```

如果添加了括号，那么 `sayThanks()` 就变成了一个函数调用，所以最后一行代码实际上获得的是函数执行的**结果**，即 `undefined`（因为这个函数没有返回值），此代码不会工作。

但在 HTML 特性中（attribute），确实需要括号：

```html
<input type="button" id="button" onclick="sayThanks()">
```

因为浏览器在读取 HTML 特性时，浏览器会使用**特性中的内容**创建一个处理程序，所以会生成下面这个属性：

```js
button.onclick = function() {
  sayThanks(); // 特性（attribute）中的内容变到了这里
}
```

**⚠️ 注意：**

- **不要对处理程序使用 `setAttribute`**，这样的调用会失效：

  ```js
  // 点击 <body> 将产生 error，
  // 因为特性总是字符串的，函数变成了一个字符串
  document.body.setAttribute('onclick', function() { alert(1) }); // Uncaught SyntaxError: Function statements require a function name
  ```

- **DOM 属性是大小写敏感的**

  将处理程序分配给 `elem.onclick`，而不是 `elem.ONCLICK`，因为 DOM 属性是大小写敏感的。



**addEventListener**

当想为某个事件分配多个处理程序时，使用 DOM 属性赋值**会导致新的 DOM 属性将覆盖现有的 DOM 属性**：

```js
input.onclick = function() { alert(1); }
// ...
input.onclick = function() { alert(2); } // 替换了前一个处理程序
```

Web 标准的开发者很早就想到了这一点，并提出**使用一种特殊方法 `addEventListener` 和 `removeEventListener` 来管理处理程序的替代方法，它们没有这样的问题**。

语法：

```js
element.addEventListener(event, handler[, options]);
```

- **`event`** —— 事件名，例如：`'click'`
- **`handler`** —— 处理程序
- **`options`** —— 具有以下属性的附加可选对象：
  - `once` —— 如果为 `true`，会在被触发后自动删除监听器
  - `capture` —— 事件处理的阶段，由于历史原因，`options` 也可以是 `false/true`，它与 `{capture: false/true}` 相同
  - `passive` —— 如果为 `true`，那么处理程序将不会调用 `preventDefault()`

要移除处理程序，可以使用 `removeEventListener`：

```js
element.removeEventListener(event, handler[, options]);
```

**⚠️ 注意：要移除监听事件，需要传入与分配的函数完全相同的函数**。

以下代码不起作用：

```js
elem.addEventListener("click", () => alert('Thanks!'));
// ....
elem.removeEventListener("click", () => alert('Thanks!'));
```

上述代码中，**处理程序不会被移除，因为 `removeEventListener` 获取了另一个函数 —— 虽然使用相同的代码，但这并不起作用，因为它是一个不同的函数对象**。

下面是正确方法：

```js
function handler() {
  alert('Thanks!');
}

input.addEventListener('click', handler);
// ....
input.removeEventListener('click', handler);
```

**⚠️ 注意：如果不将处理程序存储在一个变量中，那么就无法移除它**，由 `addEventListener` 分配的处理程序将无法被 “读回”。

多次调用 `addEventListener` 允许添加多个处理程序，例如：

```html
<input id="elem" type="button" value="Click me" />

<script>
  function handler1() {
    alert('Thanks!');
  };

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert("Hello");
  elem.addEventListener("click", handler1); // Thanks!
  elem.addEventListener("click", handler2); // Thanks again!
</script>
```

**可以同时使用 DOM 属性和 `addEventListener` 来设置处理程序，但通常只使用其中一种方式**。

**⚠️ 注意：对于某些事件，只能通过 `addEventListener` 设置处理程序**，例如：`DOMContentLoaded` 和 `transtionend` 事件，该事件在文档加载完成并 DOM 构建完成时触发。

```js
// 永远不会运行
document.onDOMContentLoaded = function() {
  alert('DOM built');
};
```

```js
// 这种方式可以运行
document.addEventListener("DOMContentLoaded", function() {
  alert('DOM built');
});
```

**所以 `addEventListener` 更通用**，这样的事件是特例而不是规则。



**事件对象**

当事件发生时，浏览器会创建一个 **`event` 对象**，将详细信息放入其中，并将其作为参数传递给处理程序。

下面是从一个 `event` 对象获取鼠标指针的坐标的示例：

```html
<input type="button" value="Click me" id="elem">

<script>
  elem.onclick = function(event) {
    // 显示事件类型、元素和点击的坐标
    alert(event.type + ' at ' + event.currentTarget); // click at [object HTMLInputElement]
    alert('Coordinates: ' + event.clientX + ':' + event.clientY); // Coordinates: 56:24
  };
</script>
```

`event` 对象的一些属性：

- **`event.type`** —— 事件类型，这里是 `'click'`
- **`event.currentTarget`** —— 处理事件的元素，这与 `this` 相同，除非处理程序是一个箭头函数，或者它的 `this` 被绑定到了其它东西上，之后可以从 `event.currentTarget` 获取元素了
- **`event.clientX / event.clientY`** —— 指针事件，指针与窗口的相对坐标

还有很多属性，其中很多都取决于事件类型：键盘事件具有一组属性，指针事件具有另一组属性。

**⚠️ 注意：`event` 对象在 HTML 处理程序中也可用**，像下面这样：

```html
<input type="button" onclick="alert(event.type)" value="Event type">
```

因为当浏览器读取特性（attribute）时，会创建像这样的处理程序：`function(event) { alert(event.type) }`，也就是说：它的第一个参数是 `event`，而主体取自于该特性。



**对象处理程序：handleEvent**

不仅可以分配函数，还可以使用 `addEventListener` 将一个对象分配为事件处理程序，当事件发生时，就会调用该对象的 `handleEvent` 方法。

例如：

```html
<button id="elem">Click me</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + ' at ' + event.currentTarget);
    }
  };

  elem.addEventListener('click', obj); // click at [object HTMLButtonElement]
</script>
```

也可以对此使用一个类：

```html
<button id="elem">Click me</button>

<script>
  class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = 'Mouse button pressed';
          break;
        case 'mouseup':
          elem.innerHTML += '...and released.';
          break;
      }
    }
  }

  const menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
</script>
```

**⚠️ 注意：** 这里同一个对象处理两个事件，**所以需要使用 `addEventListener` 来显式设置事件，以指明要监听的事件**。

**`handleEvent` 方法不必通过自身完成所有的工作**，它可以调用其它特定于事件的方法，例如：

```html
<button id="elem">Click me</button>

<script>
  class Menu {
    handleEvent(event) {
      // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = 'Mouse button pressed';
    }

    onMouseup() {
      elem.innerHTML += '...and released.';
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
</script>
```

现在事件处理程序已经明确地分离了出来，这样更容易进行代码编写和后续维护。



## 冒泡和捕获



**冒泡（bubbling）**

当一个事件发生在一个元素上，**它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其它祖先上的处理程序**。

假设有 3 层嵌套 `FORM > DIV > P`，它们各自拥有一个处理程序：

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

![image-20250807092820139](images/image-20250807092820139.png)

点击内部的 `<p>` 首先会运行 `onclick`：

1. 在该 `<p>` 上
2. 然后是外部 `<div>` 上
3. 然后是外部 `<form>` 上
4. 以此类推，直到最后的 `document` 对象

![image-20250807093106636](images/image-20250807093106636.png)

所以如果点击了 `<p>`，将会看到 3 个 `alert`：`p` → `div` → `form`。

这个过程被称为 **“冒泡（bubbling）”，因为事件从内部元素 “冒泡” 到所有父级，就像在水里的气泡一样**。

**⚠️ 注意：几乎所有事件都会冒泡**，而 `focus` 等事件是例外，它们不会冒泡。



**event.target**

父元素上的处理程序始终可以获取事件实际发生位置的详细信息。

**引发事件的那个嵌套层级最深的元素被称为目标元素，可以通过 `event.target` 访问**。

**⚠️ 注意：`this`（`=event.currentTarget`）之间的区别：**

- `event.target` —— 是引发事件的 “目标” 元素，它**在冒泡过程中不会发生变化**
- `this` —— 是 “当前” 元素，其中有一个当前正在运行的处理程序

如果有一个处理程序 `form.onclick`，那么它可以 “捕获” 表单内所有点击，无论点击发生在哪里，它都会冒泡到 `<form>` 并运行处理程序。

在 `form.onclick` 处理程序中：

- `this`（`=event.currentTarget`）是 `<form>` 元素，因为处理程序在它上面运行
- `event.target` 是表单中**实际被点击的元素**

**`event.target` 可能会等于 `this`** —— 当点击事件发生在 `<form>` 元素上时，就会发生这种情况。



**停止冒泡**

冒泡事件从目标元素开始向上冒泡，**通常会一直上升到 `<html>`，然后再到 `document` 对象**，有些事件甚至会到达 `window`，它们会调用路径上所有的处理程序。

**但任意处理程序都是可以决定事件已经被完全处理，并停止冒泡，用于停止冒泡的方法是 `event.stopPropagation()`**。

例如，如果点击 `<button>`，这里的 `body.onclick` 不会工作：

```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

**⚠️ 注意：**

- **如果一个元素在一个事件上有多个处理程序，即使其中一个停止冒泡，其它处理程序仍会运行**，话句话说，`event.stopPropagation()` 停止向上冒泡，但是当前元素上的其他处理程序都会继续运行。

  有一个 `event.stopImmediatePropagation()` 方法，可以用于停止冒泡，并阻止当前元素上的处理程序运行，使用了该方法后，其它处理程序就不会被执行了。

- **不要在没有需要的情况下停止冒泡**

  冒泡很方便，不要在没有真实需求时阻止它，因为有时 `event.stopPropagation()` 会产生隐藏的陷阱，以后可能会成为问题，例如：

  1. 创建了一个嵌套菜单，每个子菜单各自处理对自己的元素的点击事件，并调用 `stopPropagation`，以便不会触发外部菜单
  2. 决定捕获在整个窗口上的点击，以追踪用户的行为（用户点击的位置），有些分析系统会这样做，代码会使用 `document.addEventListener('click'…)` 来捕获所有的点击，但这样的分析不适用于被 `stopPropagation` 所阻止点击的区域

  **通常没有真正的必要去阻止冒泡，一项看似需要阻止冒泡的任务，可以通过其它方法解决**，其中之一就是使用自定义事件，也还可以将数据写入一个处理程序中的 `event` 对象，并在另一个处理程序中读取该数据，这样就可以像父处理程序传递有关下层处理程序的信息。



**捕获（capturing）**

事件处理的另一个阶段被称为 “捕获”，它很少被用在实际开发中，但有时是有用的。

[DOM 事件](http://www.w3.org/TR/DOM-Level-3-Events/)标准描述了事件传播的 3 个阶段：

1. **捕获阶段（Capturing phase）**—— 事件（从 Window）向下走近元素
2. **目标阶段（Target phase）**—— 事件到达目标元素
3. **冒泡阶段（Bubbling phase）**—— 事件从元素上开始冒泡

下面是在表格中点击 `<td>` 的图片，摘自规范：

![image-20250807100517425](images/image-20250807100517425.png)

也就是说：点击 `<td>`，事件首先通过祖先链向下到达元素（捕获阶段），然后到达目标（目标阶段），最后上升（冒泡阶段），在途中调用处理程序。

**使用 `on<event>` 属性或者使用 HTML 特性（attribute）或使用两个参数的 `addEventListener(event, handler)` 添加的处理程序，对捕获一无所知，仅在第二个阶段和第三个阶段运行**。

为了在捕获阶段捕获事件，需要将处理程序的 `capture` 选项设置为 `true`：

```js
elem.addEventListener(..., { capture: true })
// 或者，用 { capture: true } 的别名 true
elem.addEventListener(..., true)
```

`capture` 选项有两个可能的值：

- 如果为 `false`（默认值），则在冒泡阶段设置处理程序
- 如果为 `true`，则在捕获阶段设置处理程序

**⚠️ 注意：虽然形式上有 3 个阶段，但是第 2 个阶段（“目标阶段”: 事件到达元素）没有被单独处理：捕获阶段和冒泡阶段的处理程序都在该阶段被触发**，例如：

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener('click', e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener('click', e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```

![image-20250807101535976](images/image-20250807101535976.png)

上面这段代码为文档中**每个**元素都设置了点击处理程序，以查看哪些元素上的点击事件处理程序生效了。

如果点击了 `<p>`，那么顺序是：

1. `HTML` → `BODY` → `FORM` → `DIV`（捕获阶段第一个监听器）
2. `P`（目标阶段，**触发两次，因为设置了两个监听器：捕获和冒泡**）
3. `DIV` → `FORM` → `BODY` → `HTML`（冒泡阶段，第二个监听器）

有一个属性 `event.eventPhase`，它返回捕获事件的阶段数，但它很少被使用，因为通常是从处理程序中了解到它。

**⚠️ 注意：**

- **要移除处理程序，`removeEventListener` 需要同一阶段**

  如果 `addEventListener(..., true)`，那么应该在 `removeEventListener(..., true)` 中**提到同一阶段**，才能正确删除处理程序

- **同一元素的同一阶段的监听器按其设置顺序运行**

  如果在同一个阶段有多个事件处理程序，并通过 `addEventListener` 分配给相同的元素，则**它们的运行顺序与创建顺序相同**：

  ```js
  elem.addEventListener('click', e => alert(1)); // 会先被触发
  elem.addEventListener('click', e => alert(2));
  ```

  

## 事件委托

捕获和冒泡允许实现最强大的事件处理模式之一，即**事件委托**模式。

这个想法是：如果有许多类似方式处理的元素，**不必为每个元素分配一个处理程序，而是将单个处理程序放在它们共同的祖先上，在处理程序中，通过获取 `event.target` 来查看事件实际发生的位置并进行处理**。

例如：

![image-20250807140616533](images/image-20250807140616533.png)

其 HTML 代码如下：

```html
<table>
  <tr>
    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
  </tr>
  <tr>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="n">...</td>
    <td class="ne">...</td>
  </tr>
  <tr>...2 more lines of this kind...</tr>
  <tr>...2 more lines of this kind...</tr>
</table>
```

该表格有 9 个单元格（cell），但可以有 99 个或 999 个单元格，这都不重要。

因为**与其为每个 `<td>`（可能有很多）分配一个 `onclick` 处理程序，不如在 `<table>` 元素上设置一个 “捕获所有” 的处理程序**。

代码如下：

```js
let selectedTd;

table.onclick = function(event) {
  let target = event.target; // 在哪里点击的

  if (target.tagName != 'TD') return; // 如果不在 TD 上则忽略

  highlight(target); // 高亮显示它
};

function highlight(td) {
  if (selectedTd) { // 移除现有的高亮显示，如果有的话
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // 高亮显示新的 td
}
```

上述代码不需要关心在表格中有多少个单元格，可以随时添加/移除 `<td>`，高亮显示仍然有效。

尽管如此，但还是存在缺陷，**因为点击可能不是发生在 `<td>` 上，而是发生在其内部**。

在前面的例子中，可以看到 `<td>` 的内部还有嵌套的标签，例如：`<strong>`：

```html
<td>
  <strong>Northwest</strong>
  ...
</td>
```

自然地，如果在该 `<strong>` 上点击，那么它将成为 `event.target` 的值。

![image-20250807141317433](images/image-20250807141317433.png)

在处理程序 `table.onclick` 中，应该接受这样的 `event.target`，并确定该点击是否在 `<td>` 内。

以下是改进后的代码：

```js
table.onclick = function(event) {
  const td = event.target.closest('td'); // (1)
  
  if (!td) return; // (2)

  if (!table.contains(td)) return; // (3)
  
  highlight(td); // (4)
}
```

解释：

1. `elem.closest(selector)` 方法返回与 `selector` 匹配最近的祖先，在前面的例子中，从源元素开始向上寻找 `<td>`
2. 如果 `event.target` 不在任何 `<td>` 中，那么调用将立即返回
3. 对于嵌套的表格，`event.target` 可能是一个 `<td>`，但位于当前表格之外。因此我们需要检查它是否是**当前表格中的`<td>`**
4. 如果是的话，就高亮显示它



**标记中的行为**

事件委托还有其它用途。

如果要编写一个有 “保存”、“加载” 和 “搜索” 等按钮的菜单，并且这里有一个具有 `save`、`load` 和 `search` 等方法的对象，可以使用如下方法匹配它们。

1. **为整个菜单添加一个处理程序，并为具有方法调用的按钮添加 `data-action` 特性（attribute）**：

   ```html
   <button data-action="save">Click to Save</button>
   ```

2. 处理程序读取特性（attribute）并执行该方法，完整代码如下：

   ```html
   <div id="menu">
     <button data-action="save">Save</button>
     <button data-action="load">Load</button>
     <button data-action="search">Search</button>
   </div>
   
   <script>
     class Menu {
       constructor(elem) {
         this._elem = elem;
         elem.onclick = this.onClick.bind(this); // (*)
       }
         
       save() {
         alert('saving');
       }
       
       load() {
         alert('loading');
       }
       
       search() {
         alert('searching');
       }
       
       onClick(event) {
         const action = event.target.dataset.action;
         if(action) {
           this[action]();
         }
       }
     }
     
     new Menu(menu);
   </script>
   ```

   **⚠️ 注意：`this.onClick` 在 `(*)` 行中被绑定到了 `this`**，这很重要，否则内部的 `this` 将引用 DOM 元素（`elem`），而不是 `Menu` 对象，**那么 `this[action]()` 将不是所需要的**。

这里的委托带来以下两点好处：

1. 不需要编写代码来为每个按钮分配一个处理程序，只需要创建一个方法并将其放入标记（markup）中即可
2. HTML 结构非常灵活，可以随时添加/移除按钮

也可以使用 `.action-save`，`.action-load` 类，**但 `data-action` 特性（attribute）在语义上更好**，也可以在 CSS 规则中使用它。



**行为模式**

还可以使用事件委托将 “行为” 以**声明方式**添加到具有特殊特性（attribute）和类的元素中。

行为模式分为两个部分：

1. **将自定义特性添加到描述其行为的元素**
2. **用文档范围级的处理程序追踪事件**，如果事件发生在具有特定特性的元素上，则执行行为（action）



例如，使用特性 `data-counter` 给按钮添加了一个 “点击增加” 的行为。

```html
Counter: <input type="button" value="1" data-counter>
One more counter: <input type="button" value="2" data-counter>

<script>
  document.addEventListener('click', function(event) {
    if(event.target.dataset.counter !== undefined) {
      event.target.value++;
    }
  });
</script>
```

当点击按钮时，它的值就会增加，可以根据需要随时向 HTML 添加新的特性 `data-counter`。

**⚠️ 注意：对于文档级的处理程序，始终使用的是 `addEventListener`**，当将事件处理程序分配给 `document` 对象时，应该始终使用 `addEventListener`，而不是 `document.on<event>`，因为后者会引起冲突：新的处理程序会覆盖旧的处理程序。

对于实际项目来说。在 `document` 上有许多由代码的不同部分设置的处理程序，这是很正常的。



再看一个例子，实现点击一个具有 `data-toggle-id` 特性的元素将显示/隐藏具有给定 `id` 的元素：

```html
<button data-toggle-id="subscribe-mail">
  Show the subscription form
</button>

<form id="subscribe-mail" hidden>
  Your mail: <input type="email">
</form>

<script>
  document.addEventListener('click', function(event) {
    const id = event.target.dataset.toggleId;
    if(!id) return;
    
    const elem = document.getElementById(id);
    
    elem.hidden = !elem.hidden;
  });
</script>
```

现在要向元素添加切换功能，无需使用者了解 JavaScript，只需要使用特性 `data-toggle-id` 即可。



**事件委托的优缺点**

好处：

- **简化初始化并节省内存**：无需添加许多处理程序
- **更少的代码**：添加或移除元素时，无需添加/移除处理程序
- **方便 DOM 修改**：可以使用 `innerHTML` 等，来批量添加/移除元素

缺点：

- **事件必须冒泡，而有些事件不会冒泡**，此外，低级别的处理程序不应该使用 `event.stopPropagation()`
- **委托可能会增加 CPU 负载，因为容器级别的处理程序会对容器中任意位置的事件做出反应，而不管我们是否对该事件感兴趣**，但是，通常负载可以忽略不计，所以我们不考虑它



## 浏览器的默认行为

许多事件会自动触发浏览器执行某些行为。

例如：

- 点击一个链接 —— 触发导航（navigation）到该 URL
- 点击表单的提交按钮 —— 触发提交到服务器的行为
- 在文本上按下鼠标按钮并移动 —— 选中文本

如果使用 JavaScript 处理一个事件，那么通常不希望发生相应的浏览器行为，而是想要实现其它行为进行替代。



**阻止浏览器行为**

有两种方式可以告诉浏览器不希望它执行默认行为：

- **主流的方式是使用 `event` 对象，有一个 `event.preventDefault()` 方法**
- **如果处理程序是使用 `on<event>`（而不是 `addEventListener`）分配的，那返回 `false` 也同样有效**

例如，在下面的示例中，**点击链接不会触发导航（navigation），浏览器不会执行任何操作**：

```html
<a href="/" onclick="return false">点击这里</a>
or
<a href="/" onclick="event.preventDefault()">点击这里</a>
```

**⚠️ 注意：从处理程序中返回 `false` 是一个例外**，事件处理程序的返回值通常会被忽略，**唯一例外的是从使用 `on<event>` 分配的处理程序中返回 `return false`**，在其它情况下，`return` 值都会被忽略，**并且返回 `true` 没有意义**。



**示例：菜单**

```html
<ul id="menu" class="menu">
  <li><a href="/html">HTML</a></li>
  <li><a href="/javascript">JavaScript</a></li>
  <li><a href="/css">CSS</a></li>
</ul>
```

下面是经过 CSS 渲染的外观：

![image-20250808064725199](images/image-20250808064725199.png)

上述代码中菜单项是使用 HTML 链接 `<a>` 实现的，而不是使用按钮 `<button>`，这样做有以下几个原因：

- 许多人喜欢使用 “右键单击” —— “在新窗口打开链接”，如果使用 `<button>` 或 `<span>`，这个效果就无法实现
- 搜索引擎在建立索引时遵循 `<a href="...">` 链接

如果在标记（markup）中使用了 `<a>`，通常会处理 JavaScript 中的点击，所以应该阻止浏览器默认行为。

例如：

```js
menu.onclick = function(event) {
  if(event.target.nodeName !== 'A') return;
  
  const href = event.target.getAttribute('href');
  alert(href); // 可以从服务器加载，UI 生成等
  
  return false; // 阻止浏览器默认行为（不导航到该 URL）
}
```

上述代码中如果省略 `return false`，那么在代码执行完毕后，浏览器将执行它的 “默认行为” —— 导航至在 `href` 中的 URL。

这里使用事件委托会使菜单更加灵活。

**⚠️ 注意：某些事件会相互转化，如果阻止了第一个事件，那么就没有第二个事件了**，例如：在 `<input>` 字段上的 `mousedown` 会导致在其上的获得焦点，以及 `focus` 事件，如果阻止了 `mousedown` 事件，在这就没有焦点了。

```html
<input value="Focus works" onfocus="this.value=''">
<input onmousedown="return false" onfocus="this.value=''" value="Click me">
```

上述代码中点击第一个 `<input>` —— 会发生 `focus` 事件，但是如果点击第二个，则没有聚焦。

这是**因为浏览器行为在 `mousedown` 上被取消**，如果用另一种方式进行输入，则仍然可以进行聚焦，例如可以使用 Tab 键从第一个输入切换到第二个输入，但鼠标点击则不行。



**处理程序选项 “passive”**

`addEventListener` 的可选项 `passive: true` 向浏览器发出信号，**表明处理程序将不会调用 `preventDefault()`**。

之所以会这样，是因为移动设备上会发生一些事件，例如：`touchmove`（当用户在屏幕上移动手指时），**默认情况下会导致滚动，但可以使用处理程序的 `preventDefault()` 来阻止滚动**。

因此浏览器检测到此类事件时，**它必须首先处理所有处理程序，然后如果没有任何地方调用 `preventDefault()`，则页面可以继续滚动，但这可能导致  UI 中不必要的延迟和 “抖动”**。

**`passive: true` 选项告诉浏览器处理程序不会取消滚动，然后浏览器立即滚动页面以提供最大程度的流程体验**，并通过某种方式处理事件。

**⚠️ 注意：**

- **对于某些浏览器（Firefox，Chrome），默认情况下 `touchstart` 和 `touchmove` 事件的 `passive` 为 `true`**

- 如果设置了 `passive: true` 选项，**再使用 `preventDefault()` 会报错**

  ```js
  document.addEventListener(
    'click',
    (event) => {
      event.preventDefault();
    },
    {
      passive: true,
    }
  ); // Unable to preventDefault inside passive event listener invocation.
  ```



**event.defaultPrevented**

**如果默认行为被阻止，那么 `event.defaultPrevented` 属性为 `true`**，否则为 `false`。

可以使用 `event.defaultPrevented` 来代替停止冒泡，来通知其它事件处理程序，该事件已经被处理。

例如，实现了元素的上下文菜单外，还实现了文档范围的上下文菜单：

```html
<p>Right-click here for the document context menu</p>
<button id="elem">Right-click here for the button context menu</button>

<script>
  elem.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Button context menu");
  };

  document.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Document context menu");
  };
</script>
```

此时右键点击 `elem` 时，会得到两个菜单：按钮级和文档级（事件冒泡）的菜单。

**其中一个解决方案是在 `elem` 右键菜单处理程序中阻止其冒泡**，例如；

```html
<p>Right-click for the document menu</p>
<button id="elem">Right-click for the button menu (fixed with event.stopPropagation)</button>

<script>
  elem.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation(); // 停止冒泡
    alert("Button context menu");
  };

  document.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Document context menu");
  };
</script>
```

现在按钮菜单如期工作，**但是代价太大了，拒绝了任何外部代码对右键点击信息的访问，包括收集统计信息的计数器等**。

另一个替代方案是，**在 `document` 处理程序中检查是否已经阻止了浏览器的默认行为**，如果阻止了，那么该事件已经得到了处理，我们无需再对此事件做出反应：

```html
<p>Right-click for the document menu (added a check for event.defaultPrevented)</p>
<button id="elem">Right-click for the button menu</button>

<script>
  elem.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Button context menu");
  };

  document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return; // 判断是否已经阻止了浏览器默认行为

    event.preventDefault();
    alert("Document context menu");
  };
</script>
```

现在一切都可以正常工作了，如果有嵌套的元素，并且每个元素都有自己的上下文菜单，那这也是可以运行的，只需确保检查每个 `contextmenu` 处理程序中的 `event.defaultPrevented`。

**⚠️ 注意：**

- **`event.stopPropagation()` 和 `event.preventDefault()` 是两个不同的东西，它们之间毫无关联**

- **还有其它实现嵌套上下文菜单的方式，其中之一是拥有一个具有 `document.oncontextmenu` 处理程序的全局对象，以及能够在其中存储其他处理程序的方法**

  该对象将捕获任何右键单击，浏览存储的处理程序并运行适当的处理程序。

  **但是每段需要上下文菜单的代码都应该了解该对象，并使用它的帮助，而不是使用自己的 `contextmenu` 处理程序**。



## 创建自定义事件

不仅可以分配事件处理程序，还可以从 JavaScript 生成事件。

**自定义事件可用于创建 “图形组件”**，例如基于 JavaScript 的菜单的根元素可能会触发 `open`（打开菜单），`select` （有一项被选中）等事件来告诉菜单发生了什么，另一个代码可能会监听事件，并观察菜单发生了什么。

**不仅可以生成出于自身目的创建的全新事件，还可以生成例如 `click` 和 `mousedown` 等内建事件**，可能有助于自动化测试。



**事件构造器**

内建事件类形成了一个层次结构，**类似于 DOM 元素类，根是内建的 Event 类**。

可以像下面这样创建 `Event` 对象：

```js
const event = new Event(type[, options]);
```

- **`type`** —— 事件类型，可以像是 `'click'` 这样的字符串，或者也可以像是自定义的像这样 `my-event` 的参数
- **`options`** —— 具有两个可选属性的对象：
  - `bubbles: true/false` —— 如果为 `true`，那么**事件会冒泡**
  - `cancelable: true/false` —— 如果为 `true`，**表示事件能被取消**

**默认情况下，以上两者都为 `false`**：`{ bubbles: false, cancelable: false }`。



**dispatchEvent**

事件对象被创建后，**应该使用 `elem.dispatchEvent(event)` 调用在元素上运行它**。

**然后处理程序会对它做出反应，就好像它是一个常规的浏览器事件一样**，如果事件是用 `bubbles` 标志创建的，那么它会冒泡。

例如，下面示例中 `click` 事件是用 JavaScript 初始化创建的：

```html
<button id="elem" onclick="alert('Click!');">Autoclick</button>

<script>
  const event = new Event('click');
  elem.dispatchEvent(event); // 触发自定义的 click 事件
</script>
```

**⚠️ 注意：可以通过 `event.isTrusted` 区分 “真实” 用户事件和通过脚本生成的事件**，来自真实用户操作的事件，`event.isTrusted` 属性为 `true`，对于脚本生成的事件，`event.isTrusted` 属性为 `false`。



**冒泡示例**

可以创建一个名为 `'hello'` 的冒泡事件，并在 `document` 上捕获它。

需要做的是将 `bubbles` 设置为 `true`：

```html
<h1 id="elem">Hello from the script!</h1>

<script>
// 在 document 上捕获...
  document.addEventListener('hello', function(event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
  });

  // ...在 elem 上 dispatch！
  const event = new Event('hello', { bubbles: true }); // (2)
  elem.dispatchEvent(event);

  // 在 document 上的处理程序将被激活，并显示消息。
</script>
```

**⚠️ 注意：**

1. **应该对自定义事件使用 `addEventListener`，因为 `on<event>` 仅存在于内建事件中**，`document.onhello` 则无法运行
2. **必须设置 `bubbles: true`，否则事件不会向上冒泡**

内建事件（`click`）和自定义事件（`hello`）的冒泡机制相同，**自定义事件也有捕获阶段和冒泡阶段**。



**MouseEvent，KeyboardEvent 及其它**

以下是摘自于[UI 事件规范](https://www.w3.org/TR/uievents)的一个简短的 UI 事件类列表：

- `UIEvent`
- `FocusEvent`
- `MouseEvent`
- `WheelEvent`
- `KeyboardEvent`
- …

**如果要创建这样的事件，应该使用它们而不是 `new Event`**，例如：`new MouseEvent('click')`。

**正确的构造器允许为该类型的事件指定标准属性**。

就像鼠标事件的 `clientX/clientY` 一样：

```js
const event = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX); // 100
```

**⚠️ 注意：通用的 `Event` 构造器不允许这样做**，例如：

```js
const event = new Event('click', {
  bubbles: true, // 构造器 Event 中只有 bubbles 和 cancelable 可以工作
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX); // undefined，未知的属性被忽略了
```

从技术上讲，可以通过在创建后直接分配 `event.clientX = 100` 来解决这个问题，所以这是一个方便和遵守规则的问题，**浏览器生成的事件始终具有正确的类型**。

规范中提供了不同 UI 事件的属性的完整列表，例如 [MouseEvent](https://www.w3.org/TR/uievents/#mouseevent)。



**自定义事件**

**对于自定义的全新事件类型，例如：`'hello'`，应该使用 `new CustomEvent`，从技术上讲，`CustomEvent` 和 `Event` 一样，除了一点不同**。

在第二个参数（对象）中，**可以为想要与事件一起传递的任何自定义信息添加一个附加的属性 `detail`**。

例如：

```html
<h1 id="elem">Hello for John!</h1>

<script>
  // 事件附带给处理程序的其它详细信息
  elem.addEventListener('hello', function(event) {
    alert(event.detail.name); // John
  });

  elem.dispatchEvent(new CustomEvent('hello', {
    detail: { name: 'John' }
  }));
</script>
```

**`detail` 属性可以有任何数据**，从技术上讲，可以不用它，**因为可以在创建后将任何属性分配给常规的 `new Event` 对象**，但 `CustomEvent` 提供了特殊的 `detail` 字段，**以避免与其它事件属性的冲突**。

此外，事件类描述了它是 “什么类型的事件”，**如果事件是自定义的，那么应该使用 `CustomEvent` 来明确它是什么**。



**event.preventDefault()**

许多浏览器事件都有 “默认行为”，例如，导航到链接，鼠标按下拖动会选中文本或元素等。

对于新的、自定义的事件，绝对没有什么默认的浏览器行为，**但是分派（dispatch）此类事件的代码可能有自己的计划，触发该事件之后应该做什么**。

**通过调用 `event.preventDefault()`，事件处理程序可以发出一个信号，指出这些行为应该被取消**。

**在这种情况下，`elem.dispatchEvent(event)` 的调用会返回 `false`**，那么分派（dispatch）该事件的代码就会知道不应该在继续。

例如，一只隐藏的兔子（可以是关闭菜单或者其它），在下面示例中可以看到在其上分派了 `'hide'` 事件的 `#rabbit` 和 `hide()` 函数，任何处理程序都可以使用 `rabbit.addEventListener('hide',...)` 来监听该事件，并在需要时使用 `event.preventDefault()` 来取消该行为，然后兔子就不会藏起来了：

```html
<pre id="rabbit">
  |\   /|
   \|_|/
   /. .\
  =\_Y_/=
   {>o<}
</pre>
<button onclick="hide()">Hide()</button>

<script>
  function hide() {
    const event = new CustomEvent('hide', {
      cancelable: true, // 没有这个标志，preventDefault 将不起作用
    });
    
    if(!rabbit.dispatchEvent(event)) {
      alert('该操作被处理程序阻止');
    } else {
      rabbit.hidden = true;
    }
  }
  
  rabbit.addEventListener('hide', function(event) {
    if(confirm('调用 preventDefault?')) {
      event.preventDefault();
    }
  });
</script>
```

**⚠️ 注意：该事件必须具有 `cancelable: true` 标志，否则 `event.preventDefault()` 调用将会忽略**。



**事件中的事件是同步的**

**通常事件是在队列中处理的**，也就是说：如果浏览器正在处理 `onclick`，这时发生了一个新的事件，例如鼠标移动了，那么它的处理程序会被排入队列，相应的 `mousemove` 处理程序将在 `onclick` 事件处理完成后被调用。

值得注意的例外情况是，一个事件是在另一个事件中发起的，例如使用 `dispatchEvent`，这类事件将会被立即调用：**即在新的事件处理程序被调用之后，恢复到当前的事件处理程序**。

例如，在下面的代码中，`menu-open` 事件是在 `onclick` 事件执行过程中被调用的。

它会立即执行，而不必等待 `onclick` 处理程序结束：

```html
<button id="menu">Menu (click me)</button>

<script>
  menu.onclick = function() {
    alert(1);

    menu.dispatchEvent(new CustomEvent('menu-open', {
      bubbles: true
    }));

    alert(2);
  };

  // 在 1 和 2 之间触发
  document.addEventListener('menu-open', () => alert('nested'));
</script>
```

上述代码的输出顺序为：1 → nested → 2。

**⚠️ 注意：嵌套事件 `menu-open` 会在 `document` 上被捕获，嵌套事件的传播（propagation）和处理先被完成**，然后处理过程才会返回到外部代码（`onclick`）。

这不只是与 `dispatchEvent` 有关，还有其它情况，如果一个事件处理程序调用了触发其它事件的方法 —— **它们同样也会被以嵌套的方式同步处理**，例如：

```js
btn.addEventListener('click', () => {
  alert(1);
  input.focus(); // 立刻触发 focus
  alert(2);
});

input.addEventListener('focus', () => alert('focus'););
```

上述代码的输出顺序为：1 → focus → 2。

不过有时候，**想让 `onclick` 不受 `menu-open` 或者其它嵌套事件的影响，优先被处理完毕，那么可以将 `dispatchEvent`（或另一个触发事件的调用）放在 `onclick` 末尾或者将其包装到零延迟的 `setTimeout` 中**：

```html
<button id="menu">Menu (click me)</button>

<script>
  menu.onclick = function() {
    alert(1);

    setTimeout(() => menu.dispatchEvent(new CustomEvent('menu-open', {
      bubbles: true
    })));

    alert(2);
  };

  document.addEventListener('menu-open', () => alert('nested'));
</script>
```

现在，`dispatchEvent` 在当前代码执行完成之后异步运行，包括 `menu.onclick`，所以事件处理程序是完全独立的。

输出顺序变成：1 → 2 → nested。

**⚠️ 注意：**

- **尽管技术上可以生成像 `click` 或 `keydown` 这样的浏览器事件，但还是应谨慎使用它们**
- **不应该生成浏览器事件，因为这是运行处理程序的一种怪异（hacky）方式**，大多数时候，这都是糟糕的架构
- **使用我们自己的名称的自定义事件通常是出于架构的目的而创建的**，以指示发生在菜单（menu），滑块（slider），轮播（carousel）等内部发生了什么



## 鼠标事件

**⚠️ 注意：此类事件不仅可能来自于 “鼠标设备”**，还可能来自于对此类操作进行了模拟以实现兼容性的其它设备，例如手机和平板电脑。



**鼠标事件类型**

- **`mousedown/mouseup`** —— 在元素上点击/释放鼠标按钮
- **`mouseover/mouseout`** —— 鼠标指针从一个元素上移入/移出
- **`mousemove`** —— 鼠标在元素上的每个移动都会触发此事件
- **`click`** —— 如果使用的是鼠标**左键**，**则在同一个元素上的 `mousedown` 及 `mouseup` 相继触发，触发该事件**
- **`dblclick`** —— 在**短时间内双击**同一元素后触发，如今已经很少使用了
- **`contextmenu`** —— 在鼠标**右键**被按下时触发，还有其它打开上下文菜单的方式，例如使用特殊的键盘按键，在这种情况下它也会被触发，**因此它并不完全是鼠标事件**
- ...还有其它几种事件



**事件顺序**

一个用户操作可能会触发多个事件。

例如：点击鼠标左键，在鼠标左键被按下时，会首先触发 `mousedown`，然后当鼠标左键被释放时，会触发 `mouseup` 和 `click`。

**在单个动作触发多个事件时，事件的顺序是固定的**，也就是说，会遵循 `mousedown` → `mouseup` → `click` 的顺序调用处理程序。



**鼠标按钮**

**与点击相关的事件始终具有 `button` 属性，该属性允许获取确切的鼠标按钮**。

通常不在 `click` 和 `contextmenu` 事件中使用这一属性，因为前者只在单击鼠标左键时触发，后者只在单击鼠标右键时触发。

不过**在 `mousedown` 和 `mouseup` 事件中则可能需要用到 `event.button`，因为这两个事件在任何按键上都会触发，所以可以使用 `button` 属性来区分是左键单击还是右键单击**。

`event.button` 的所有可能值如下：

| 鼠标按键状态     | `event.button` |
| :--------------- | :------------- |
| 左键 (主要按键)  | 0              |
| 中键 (辅助按键)  | 1              |
| 右键 (次要按键)  | 2              |
| X1 键 (后退按键) | 3              |
| X2 键 (前进按键) | 4              |

大多数鼠标设备只有左键和右键，对应的值就是 `0` 和 `2`，**触屏设备中的点按操作也会触发类似的事件**。

另外还有一个 `event.buttons` 属性，其中以整数的形式存储着当前所有按下的鼠标按键，每个按钮一个比特位，在实际开发中，很少会用到这个属性，如果有需要的话，可以在 [MDN](https://developer.mozilla.org/zh/docs/Web/api/MouseEvent/buttons) 中找到更多细节。

**⚠️ 注意：一些老代码可能会使用 `event.which` 属性来获取按下的键**，这是一个古老的非标准的方式，具有以下可能值：

- `event.which === 1` —— 鼠标左键
- `event.which === 2` —— 鼠标中键
- `event.which === 3` —— 鼠标右键

**现在，`event.which` 已经被弃用了，不应再使用它**。



**组合键：shift、alt、ctrl、meta**

所有的鼠标事件都包含有关按下的组合键的信息。

事件属性：

- `shiftKey`：Shift
- `altKey`：Alt（或对于 Mac 是 Option）
- `ctrlKey`：Ctrl
- `metaKey`：对于 Mac 是 Command

**如果在事件期间按下相应的键，则它们为 `true`**，例如：

```html
<button id="button">Alt+Shift+Click on me!</button>

<script>
  button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Hooray!');
    }
  };
</script>
```

上述代码的按钮仅在 Alt+Shift+ `click` 时才有效。

**⚠️ 注意：**

- **在 Mac 上通常使用 `Command` 代替 `Ctrl`**

  在 Windows 和 Linux 上有 Alt，Shift 和 Ctrl，在 Mac 上还有：Command，它对应于属性 `metaKey`。

  **在大多数情况下，当在 Windows/linux 上使用 Ctrl 时，在 Mac 是使用 Command**。

  也就是说：当 Windows 用户按下 Ctrl + Enter 或 Ctrl + A 时，Mac 用户会按下 Command + Enter 或 Command + A，以此类推。

  因此，如果我们想支持 Ctrl + `click`，那么对于 Mac 应该使用 Command + `click`，对于 Mac 用户而言，这更舒适。

  即使想强制 Mac 用户使用 Ctrl + `click` —— 这非常困难，问题是：**在 Mac 上左键单击和 Ctrl 一起使用会被解释为右键单击，并且会生成 `contextmenu` 事件，而不是像 Windows/Linux 中的 `click` 事件**。

  因此，如果想让所有操作系统的用户都感到舒适，**应该将 `ctrlKey` 与 `metaKey` 一起进行检查**，对于 JS 代码，这意味着应该检查 `if(event.ctrlKey || event.metaKey)`。

- **键盘组合是工作流的一个补充，如果访客使用键盘操作 —— 它们就会起作用，如果访客的设备没有键盘（移动设备） —— 那么应该提供另一种不使用键盘也能做到这一点的方式**



**坐标：clientX/Y，pageX/Y**

所有鼠标事件都提供了两种形式的坐标：

1. **相对于窗口的坐标：**`clientX` 和 `clientY`
2. **相对于文档的坐标：**`pageX` 和 `pageY`

简而言之， `pageX/Y` 相对于文档的左上角为参照物，并且**同一位置的坐标不随页面的滚动而改变**，而 `clientX/Y` 相对于窗口的左上角为参照物，**并且同一位置的坐标会随着页面的滚动而改变**。

例如，有一个大小为 500x500 的窗口，并且鼠标在窗口的左上角，那么 `clientX` 和 `clientY` 均为 `0`，无论页面如何滚动，如果鼠标位于中间，那么 `clientX` 和 `clientY` 均为 `250`，这与它在文档中的位置无关，在这方面，它们类似于 `position: fixed`。

将鼠标移动到输入字段上，可以看到 `clientX/clientY`：

```html
<input onmousemove="this.value=event.clientX+':'+event.clientY" value="Mouse over me" />
```



**防止在鼠标按下时的选择**

双击鼠标会有副作用，**在某些界面中可能会出现干扰：它会选择文本**。

例如，双击下面的文本，除了执行处理程序外，还会选择文本：

```html
<span ondblclick="alert('dblclick')">双击我</span>
```

如果按下鼠标左键，并在不松开的情况下移动鼠标，这也会常常造成不必要的选择。

有多种防止选择的方法，在这种情况下，最合理的方式是防止浏览器对 `mousedown` 进行操作，这样能够阻止刚刚提到的两种选择：

```html
Before...
<b ondblclick="alert('Click!')" onmousedown="return false">
  Double-click me
</b>
...After
```

**现在双击时，粗体元素不会被选中，并且在粗体元素上按下鼠标左键也不会开始选择**。

**⚠️ 注意：其中的文本仍然是可以选择的，但选择不应该开始于该文本本身，而应该在该文本之前或之后开始**，通常这对用户来说挺好的。



**防止复制**

如果**想禁用选择以保护页面的内容不被复制粘贴**，那可以使用另一个事件：**`oncopy`**。

```html
<div oncopy="alert('禁止复制!');return false">
  Dear user,
  The copying is forbidden for you.
  If you know JS or HTML, then you can get everything from the page source though.
</div>
```

上述代码中，当试图在 `<div>` 中复制一段文本，这是行不通的，因为**默认行为 `oncopy` 被阻止了**。

但用户可以访问页面的 HTML 源码，并且可以从那里获取内容，但并不是每个人都知道如何做到这一点。



## 移动鼠标：mouseover/out，mouseenter/leave



**事件 mouseover/mouseout，relatedTarget**

当鼠标指针移动到某个元素上时，`mouseover` 事件就会发生，当鼠标离开该元素时，`mouseout` 事件就会发生。

![image-20250808134200721](images/image-20250808134200721.png)

**这些事件很特别，因为它们具有 `relatedTarget` 属性，此属性是对 `target` 的补充**，当鼠标从一个元素离开并去往另一个元素时，其中一个元素就变成了 `target`，另一个就变成了 `relatedTarget`。

对于 `mouseover`：

- `event.target` —— 是鼠标移过的元素
- `event.relatedTarget` —— 是鼠标来自的那个元素（`relatedTarget` → `target`）

`mouseout` 则与之相反：

- `event.target` —— 是鼠标离开的元素
- `event.relatedTarget` —— 是鼠标移动到的，当前指针位置下的元素（`target` → `relatedTarget`）

**⚠️ 注意：`relatedTarget` 属性可以为 `null`**，这是正常现象，仅仅**意味着鼠标不是来自于另一个元素，而是来自窗口之外，或者它离开了窗口**。

在代码中使用 `event.relatedTarget` 时，**应该牢记这种可能**，否则访问 `event.relatedTarget.tagName` 时可能会出现错误。



**跳过元素**

当鼠标移动时，就会触发 `mouseover` 事件，但这**并不意味着每个像素都会导致一个事件**。

浏览器会一直检查鼠标的位置，如果发了变化，就会触发事件。

这意味，如果访问者非常快地移动鼠标，那么某些 DOM 元素就可能被跳过：

![image-20250808135344778](images/image-20250808135344778.png)

如上图所示，鼠标从 `#FROM` 元素快速移动到 `#TO` 元素，**则中间的 `<div>`（或其中的一些）元素可能会被跳过**。

**`mouseout` 事件可能会在 `#FROM` 上被触发，然后立即在 `#TO` 上触发 `mouseover` 事件**。

**这对性能很有好处**，因为可能有很多中间元素，但并不真想要处理每一个移入和离开的过程。

另一方面，**应该记住鼠标指针不会 “访问” 所有元素，它可以 “跳过” 一些元素**。

特别是，鼠标指针可能会从窗口外跳到页面的中间，在这种情况下，`relatedTarget` 为 `null`：

![image-20250808140056632](images/image-20250808140056632.png)

**⚠️ 注意：如果 `mouseover` 被触发了，则必须有 `mouseout`**，在鼠标快速移动的情况下，中间元素可能会被忽略，但是可以确定一件事情：如果鼠标指针 “正式地” 进入了一个元素（生成了 `mouseover` 事件），那么一旦它离开，就会得到 `mouseout` 事件。



**当移动到一个子元素时 mouseout**

`mouseout` 的一个重要功能 —— **当鼠标指针从元素移动到其后代时触发**，例如在下面这个 HTML 中，从 `#parent` 到 `#child`：

```html
<div id="parent">
  <div id="child">...</div>
</div>
```

**如果在 `#parent` 上，将鼠标指针更深入地移入 `#child`，在 `#parent` 上会得到 `mouseout`**。

![image-20250808140954759](images/image-20250808140954759.png)

之所以会这样，是因为**根据浏览器的逻辑，鼠标指针随时可能位于单个元素上 —— 嵌套最多的那个元素（`z-index` 最大的那个）**。

因此，**如果它转到另一个元素（甚至是一个后代），那么它将离开前一个元素**。

**后代的 `mouseover/out` 事件会冒泡**，因此，如果 `#parent` 具有 `mouseover/out` 处理程序，它将被触发：

![image-20250808142803859](images/image-20250808142803859.png)

例如：

```html
<div id="parent" onmouseover="mouselog(event)" onmouseout="mouselog(event)">parent
  <div id="child">child</div>
</div>

<textarea id="text"></textarea>
<input type="button" onclick="text.value=''" value="Clear">

<script>
  function mouselog(event) {
    let d = new Date();
    text.value += `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | ${event.type} [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/, '$10$2');
    text.scrollTop = text.scrollHeight;
}
</script>
```

如上例所示，当鼠标指针从 `#parent` 元素移动到 `#child` 时，会在父元素上触发两个处理程序：`mouseout` 和 `mouseout`：

```js
parent.onmouseout = function(event) {
  /* event.target: parent element */
};

parent.onmouseover = function(event) {
  /* event.target: child element (bubbled) */
};
```

**如果不检查处理程序中的 `event.target`，那么就像是鼠标指针离开了 `#parent` 元素，然后立即回到了它上面**。

但事实并非如此，鼠标指针仍然位于父元素上，它只是更深入地移入了子元素。

**为了避免这种行为，可以在处理程序中检查 `event.relatedTarget`，鼠标指针仍在元素内，则忽略此类事件，也可以使用其它事件：`mouseenter` 和 `mouseleave`，它们没有此类问题**。



**事件 mouseenter 和 mouseleave**

事件 `mouseenter/mouseleave` 类似于 `mouseover/mouseout`，它们在鼠标指针进入/离开元素时触发。

但是有两个重要的区别：

1. **元素内部与后代之间的转换不会产生影响**
2. **事件 `mouseenter/mouseleave` 不会冒泡**

这些事件非常简单，当鼠标指针进入一个元素时，会触发 `mouseenter`，而**鼠标指针在元素或其后代中的确切位置无关紧要**。

当鼠标指针离开该元素时，事件 `mouseleave` 才会触发。

调整前面的例子：

```html
<div id="parent" onmouseenter="mouselog(event)" onmouseleave="mouselog(event)">parent
  <div id="child">child</div>
</div>

<textarea id="text"></textarea>
<input type="button" onclick="text.value=''" value="Clear">

<script>
  function mouselog(event) {
    let d = new Date();
    text.value += `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | ${event.type} [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/, '$10$2');
    text.scrollTop = text.scrollHeight;
}
</script>
```

上述代码中，**唯一生成的事件是与将鼠标指针移入或移出顶部元素有关的事件**，当鼠标指针进入 `#child` 并返回时什么也没发生，在后代之间的移动会被忽略。



**事件委托**

事件 `mouseenter/leave` 非常简单其易用，但它们不会冒泡，因此**不能使用它们来进行事件委托**。

假设要处理表格的单元格的鼠标进入/离开，并且这里有数百个单元格。

通用的解决方案是 —— 在 `<table>` 中设置处理程序，并在那里处理事件，**但 `mouseenter/leave` 不会冒泡，因此，如果类似的事件发生在 `<td>` 上，那么只有 `<td>` 上的处理程序才能捕获到它**。

`<table>` 上的 `mouseenter/leave` 的处理程序**仅在鼠标指针进入/离开整个表格时才触发**，无法获取有关其内部移动的任何信息。

因此，需要使用 `mouseover/mouseout`。

先从高亮鼠标指针先的元素的简单处理程序开始：

```js
// 高亮显示鼠标指针下的元素
table.onmouseover = function(event) {
  let target = event.target;
  target.style.background = 'pink';
};

table.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';
};
```

这时鼠标在表格的各个元素上移动时，当前位于鼠标指针下的元素会被高亮显示，完整的代码如下：

- html

  ```html
  <table id="table">
    <tr>
      <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
    </tr>
    <tr>
      <td class="nw"><strong>Northwest</strong>
        <br>Metal
        <br>Silver
        <br>Elders
      </td>
      <td class="n"><strong>North</strong>
        <br>Water
        <br>Blue
        <br>Change
      </td>
      <td class="ne"><strong>Northeast</strong>
        <br>Earth
        <br>Yellow
        <br>Direction
      </td>
    </tr>
    <tr>
      <td class="w"><strong>West</strong>
        <br>Metal
        <br>Gold
        <br>Youth
      </td>
      <td class="c"><strong>Center</strong>
        <br>All
        <br>Purple
        <br>Harmony
      </td>
      <td class="e"><strong>East</strong>
        <br>Wood
        <br>Blue
        <br>Future
      </td>
    </tr>
    <tr>
      <td class="sw"><strong>Southwest</strong>
        <br>Earth
        <br>Brown
        <br>Tranquility
      </td>
      <td class="s"><strong>South</strong>
        <br>Fire
        <br>Orange
        <br>Fame
      </td>
      <td class="se"><strong>Southeast</strong>
        <br>Wood
        <br>Green
        <br>Romance
      </td>
    </tr>
  
  </table>
  
  <textarea id="text"></textarea>
  
  <input type="button" onclick="text.value=''" value="Clear">
  
  <script src="script.js"></script>
  ```

- script.js

  ```js
  table.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
  
    text.value += `over -> ${target.tagName}\n`;
    text.scrollTop = text.scrollHeight;
  };
  
  table.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
  
    text.value += `out <- ${target.tagName}\n`;
    text.scrollTop = text.scrollHeight;
  };
  ```

在上述代码中，想要处理表格的单元格 `<td>` 之间的移动：进入一个单元格并离开它，**对其它内部子元素的移动并不感兴趣，将它们过滤掉**。

可以像下面这样做：

- 在变量中记住当前被高亮显示的 `<td>`，称它为 `currentElem`
- `mouseover` —— 如果仍然在当前的 `<td>` 中，则忽略该事件
- `mouseout` —— 如果没有离开当前的 `<td>`，则忽略

调整后的代码如下：

```js
// 现在位于鼠标下方的 <td>（如果有）
let currentElem = null;

table.onmouseover = function(event) {
  // 在进入一个新的元素前，鼠标总是会先离开前一个元素
  // 如果设置了 currentElem，那么就表示没有鼠标悬停在的前一个 <td>
  // 忽略此事件
  if (currentElem) return;
  
  const target = event.target.closest('td');
  
  // 移动到的不是一个 <td> —— 忽略
  if(!target) return;
  
  // 现在移动到了 <td> 上，但在处于表格的外部（可能因为是嵌套的表格）—— 忽略
  if(!table.contains(target)) return;
  
  // 进入了一个新的 <td>
  currentElem = target;
  onEnter(currentElem);
}

table.onmouseout = function(event) {
  // 如果现在处于所有 <td> 的外部，则忽略此事件
  // 这可能是一个表格内的移动，但是在 <td> 外
  // 例如从一个 <tr> 到另一个 <tr>
  if (!currentElem) return;
  
  let relatedTarget = event.relatedTarget;
  
  while(relatedTarget) {
    if(relatedTarget === currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }
  
  // 离开了 <td>
  onLeave(currentElem);
  currentElem = null;
}

// 任何处理进入/离开一个元素的函数
function onEnter(elem) {
  elem.style.background = 'pink';

  // 在文本区域显示它
  text.value += `over -> ${currentElem.tagName}.${currentElem.className}\n`;
  text.scrollTop = 1e6;
}

function onLeave(elem) {
  elem.style.background = '';

  // 在文本区域显示它
  text.value += `out <- ${elem.tagName}.${elem.className}\n`;
  text.scrollTop = 1e6;
}
```

现在只有 `<td>` 被作为一个整体高亮显示。



## 鼠标拖放事件

拖放（Drag‘n Drop）是一个很赞的界面解决方案，取某样东西并将其拖放是执行许多东西的一种简单明了的方式，从复制和移动文档（如在文件管理器中）到订购（将物品放入购物车）。

**在现代 HTML 标准中有一个[关于拖放的部分](https://html.spec.whatwg.org/multipage/interaction.html#dnd)，其中包含了例如 `dragstart` 和 `dragend` 等特殊事件**。

**这些事件能够支持特殊类型的拖放**，例如处理从 OS 文件管理器中拖动文件，并将其拖放到浏览器窗口中，之后，JavaScript 便可以访问此类文件中的内容。

但是，**原生的拖放事件也有其局限性**，例如：无法阻止从特定区域的拖动，并且无法将拖动变成 “水平” 或 “竖直” 的，还有很多使用它们无法完成的拖放任务，并且，移动设备对此类事件的支持非常有限。

所以**通常还是使用鼠标事件来实现拖放**。



**拖放算法**

基础的拖放算法如下：

1. 在 `mousedown` 上**根据需要准备要移动的元素（也许创建一个它的副本，向其中添加一个类或其它任何东西）**
2. 在 `mousemove` 上**通过更改 `position: absolute` 情况下的 `left/top` 来移动它**
3. 在 `mouseup` 上**执行与完成拖放相关的所有行为**

下面是实现拖放一个球的代码：

```js
ball.onmousedown = function(event) {
  // 准备移动，确保 absolute 并通过设置 z-index 以确保球在最顶部
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  
  // 将其从当前父元素中直接移动到 body 中
  document.body.append(ball);
  
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }
  
  // 将球移动到指针的下方
  moveAt(event.pageX, event.paegY);
  
 function onMouseMove(event) {
   moveAt(event.pageX, event.pageY);
 }
  
  // 在 mousemove 事件上移动球
  document.addEventListener('mousemove', onMouseMove);
  
  // 放下球，并移除不需要的处理程序
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  }
}
```

运行这段代码，会发现一些奇怪的事情，在拖放的一开始，**球 “分叉” 了：开始拖动它的 “克隆”**，例如：

![image-20250809065800523](images/image-20250809065800523.png)

当尝试使用鼠标进行拖放，就会看到这种奇怪的行为。

之所以会这样，是**因为浏览器有自己对图片和一些其它元素的拖放处理，它会在进行拖放操作时自动运行，并与拖放处理产生冲突**。

可以使用以下代码禁用它：

```js
ball.ondragstart = function() {
  return false;
}
```

现在一切都正常了。

**⚠️ 注意：前面的代码中，是在 `document` 上监听 `mousemove`，而不是在 `ball` 上**，之所以这样设置是因为快速移动鼠标时，鼠标指针可能会从球上跳转至文档中间的某个位置（甚至跳转至窗口外），所以**应该监听 `document` 以捕获它**。



**修正定位**

在上述例子中，球在移动的时候，球的中心始终位于鼠标指针的下方：

```js
ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
```

这样做存在副作用，要启用拖放，可以在球上的任意位置 `mousedown`，但是**如果从球的边缘 “抓住” 球，那么球会突然 “跳转” 以使球的中心位于鼠标指针的下方**。

例如，在按住球的边缘处开始拖动，那么拖动时，**鼠标指针应该保持在一开始所按住边缘位置上**。

![image-20250809071031348](images/image-20250809071031348.png)

需要更新一下算法：

1. 当访问者按下按钮（`mousedown`）时，可以在变量 `shiftX/shiftY` 中记住鼠标指针到球左上角的距离，在拖动时保持这个距离

   通过坐标相减来获取这个偏移：

   ```js
   // onmousedown
   const shiftX = event.clientX - ball.getBoundingClientRect().left;
   const shiftY = event.clientY - ball.getBoundingClientRect().top;
   ```

2. 然后在拖动球时，将鼠标指针相对于球的这个偏移也考虑在内，像下面这样：

   ```js
   // onmousemove
   ball.style.left = event.pageY - shiftX + 'px';
   ball.style.top = event.pageY - shiftY + 'px';
   ```

最终的代码：

```js
ball.onmousedown = function(event) {

  const shiftX = event.clientX - ball.getBoundingClientRect().left;
  const shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  // 移动现在位于坐标 (pageX, pageY) 上的球
  // 将初始的偏移考虑在内
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // 在 mousemove 事件上移动球
  document.addEventListener('mousemove', onMouseMove);

  // 放下球，并移除不需要的处理程序
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

ball.ondragstart = function() {
  return false;
};
```



**潜在的放置目标**

前面的示例中，球可以被放置（drop）到 “任何地方”，在实际开发中，通常是将一个元素放到另一个元素上，例如：将一个 “文件” 放置到一个 “文件夹” 或其它地方。

简单来说，**就是取一个 “可拖动” 的元素，并将其放在 “可拖放” 的元素上**。

需要知道：

- **在拖放结束时，所拖动的元素要放在哪里执行相应的行为**
- **最好知道所拖动到的 “可拖放” 的元素的位置，并高亮显示 “可拖放” 的元素**

这个解决方案有些麻烦，第一个想法可能是将 `onmouseover/mouseup` 处理程序放在潜在的 “可拖放” 的元素上？

但这行不通。

问题在于，**当拖动时，可拖动元素一直是位于其它元素上的，而鼠标事件只发生在顶部元素上，而不是发生在那些下面的元素**。

例如：下面有两个 `<div>` 元素，红色的在蓝色的上面（完全覆盖），这里蓝色的 `<div>` 中没有办法来捕获事件，因为红色的 `<div>` 在它上面：

```html
<style>
  div {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0
  }
</style>
<div style="background: blue" onmouseover="alert('never works')"></div>
<div style="background: red" onmouseover="alert('over red!')"></div>
```

上述代码**只会触发 `alert('over red!')`**。

与拖放的元素相同，**球始终位于其它元素之上，所以事件也只会发生在球上，无论在较低的元素上设置什么处理程序，它们都不会起作用**。

有一个叫做 `document.elementFromPoint(clientX, clientY)` 的方法，**它会返回在给定的窗口相对坐标处的嵌套最深的元素（如果给定的坐标在窗口外，则返回 `null`）**，如果同一坐标上**有多个重叠的元素，则返回最上面的元素**。

可以在任何鼠标事件处理程序中使用它，以检测鼠标指针下的潜在的 “可拖放” 的元素，像下面这样：

```js
// 在一个鼠标事件处理程序中
ball.hidden = true; // 隐藏我们拖动的元素

const elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow 是球下方的元素，可能是可拖放的元素

ball.hidden = false;
```

**⚠️ 注意：需要在调用 `document.elementFromPoint` 之前隐藏拖动的元素，否则这些坐标始终是拖动元素，因为它是在鼠标指针下的最顶部的元素**。

可以用该代码检查正在 “飞过” 的元素是什么，并在放置（drop）时，对放置进行处理。

基于 `onMouseMove` 扩展的代码，用于查找 “可拖放” 的元素：

```js
// 当前飞过的潜在可拖放元素
let currentDroppable = null;

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);
  
  ball.hidden = true;
  const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  ball.hidden = false;
  
  // mousemove 事件可能会在窗口外被触发（当球被拖出屏幕时）
  // 如果 clientX/clientY 在窗口外，那么 elementFromPoint 会返回 null
  if (!elemBelow) return;
  
  // 潜在的 droppable 的元素被使用 droppable 类进行标记（也可以是其它逻辑）
  const droppableBelow = elemBelow.closest('.droppable');
  
  if(currentDroppable !== droppableBelow) {
    // 正在飞入或飞出
    // 注意：它们两个的值都可能为 null
    // currentDroppable=null —— 如果在此事件之前，鼠标指针不是在一个 droppable 的元素上（例如空白处）
    // droppableBelow=null —— 如果现在，在当前事件中，我们的鼠标指针不是在一个 droppable 的元素上
    if(currentDroppable) {
      // 处理 “飞出” 可拖放的元素时的处理逻辑（移除高亮）
      leaveDroppable(currentDroppable);
    }
    
    currentDroppable = droppableBelow;
    
    if(currentDroppable) {
      // 处理 “飞入” 可拖放的元素时的逻辑（添加高亮）
      enterDroppable(currentDroppable);
    }
  }
}
```

完整的代码如下：

```html
<style>
  #gate {
    cursor: pointer;
    margin-bottom: 100px;
    width: 83px;
    height: 46px;
  }

  #ball {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
</style>

<script>
  let currentDroppable = null;

  ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      ball.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;

      if (!elemBelow) return;

      const droppableBelow = elemBelow.closest('.droppable');
      
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) { // 当在此事件之前未超过可拖放对象时，为空
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) { // 如果现在不经过可放置对象，则返回 null
          // (也许只是留下了可放下的)
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };

  };

  function enterDroppable(elem) {
    elem.style.background = 'pink';
  }

  function leaveDroppable(elem) {
    elem.style.background = '';
  }

  ball.ondragstart = function() {
    return false;
  };
</script>
```

上述代码在球拖动到球门上时，球门会被高亮显示。

![image-20250809083216462](images/image-20250809083216462.png)



## 指针事件

指针事件（Pointer Events）是一种用于处理来自各种输入设备（例如鼠标、触控笔和触摸屏等）的输入信息的现代化解决方案。



**一段简史**

- 很早以前，只存在鼠标事件

  后来，触屏设备开始普及，尤其是手机和平板电脑，为了使现有的脚步仍然正常工作，它们生成（现在仍生成）鼠标事件，例如：轻触屏幕就会生成 `mousedown` 事件，因此，**触摸设备可以很好地与网页配合使用**。

  但是**触摸设备比鼠标具有更多的功能**，例如：可以同时触控多点（多点触控），然而**鼠标事件并没有相关属性来处理这种多点触控**。

- 因此，引入了触摸事件，例如 `touchstart`、`touchend` 和 `touchmove`，**它们具有特定于触摸的属性（但指针事件更加完善）**

  不过这还是不够完美，因为**很多其它输入设备（如触控笔）都有自己的特性**，而且**同时维护两份分别处理鼠标事件和触摸事件的代码，显得有些笨重了**。

- 为了解决这些问题，引入了全新的规范**指针事件，为各种指针输入设备提供了一套统一的事件**

目前，各大主流浏览器已经支持了 [Pointer Events Level 2](https://www.w3.org/TR/pointerevents2/) 标准，更新版本的 [Pointer Events Level 3](https://w3c.github.io/pointerevents/) 已经发布，**并且大多数情况下与 Pointer Events Level 2 兼容**。

因此，除非写的代码需要兼容旧版本的浏览器，例如 IE 10 或者 Safari 12 或更低的版本，**否则无需继续使用鼠标事件或触摸事件，转而使用指针事件**。

这样代码就可以在触摸设备和鼠标设备上都能正常工作了。

话虽如此，**指针事件仍然有一些重要的奇怪特性，依旧需要了解，并避免一些意料之外的错误**。



**指针事件类型**

指针事件的命名方式和鼠标事件类似：

| 指针事件             | 类似的鼠标事件 |
| :------------------- | :------------- |
| `pointerdown`        | `mousedown`    |
| `pointerup`          | `mouseup`      |
| `pointermove`        | `mousemove`    |
| `pointerover`        | `mouseover`    |
| `pointerout`         | `mouseout`     |
| `pointerenter`       | `mouseenter`   |
| `pointerleave`       | `mouseleave`   |
| `pointercancel`      | -              |
| `gotpointercapture`  | -              |
| `lostpointercapture` | -              |

基本上每一个 `mouse<event>` 都有与之相应的 `pointer<event>`，但还**有 3 个额外的事件没有相应的 `mouse...`**。

**⚠️ 注意：可以把代码中的 `mouse<event>` 都替换成 `pointer<event>`，程序仍然正常兼容鼠标设备**，替换之后，程序对触屏设备的支持会 “魔法般” 地提升，但是，**可能需要在 CSS 中的某些地方添加 `touch-action: none`**。



**指针事件属性**

指针事件具有和鼠标事件完全相同的属性，**包括 `clientX/Y` 和 `target` 等**，以及一些其它属性：

- **`pointerId`** —— 触发当前事件的指针唯一标识符

  **浏览器生成的，能够处理多指针的情况**，例如带有触控笔和多点触控功能的触摸屏。

- **`pointerType`** —— 指针的设备类型，**必须为字符串，可以是 `'mouse'`、`'pen'` 或 `'touch'`**

  **可以使用这个属性来针对不同类型的指针输入做出不同的反应**。

- **`isPrimary`** —— 当指针为首要指针**（多点触控时按下的第一根手指）时为 `true`**

有些指针设备会测量接触面积和点按压力（例如一根手指压在触屏上），对于这种情况可以使用以下属性：

- **`width`** —— 指针（例如手指）接触设备的区域的宽度，对于不支持的设备（如鼠标），这个值总是 `1`
- **`height`** —— 指针（例如手指）接触设备的区域的长度，对于不支持的设备，这个值总是 `1`
- **`pressure`** —— 触摸压力，是一个介于 0 到 1 之间的浮点数，对于不支持压力检测的设备，这个值总是 `0.5`（按下时）或 `0`
- **`tangentialPressure`** —— 归一化后的切向压力（tangential pressure）
- **`tiltX`, `tiltY`, `twist`** —— 针对触摸笔的几个属性，用于描述笔和屏幕表面的相对位置

**大多数设备都不支持这些属性，因此它们很少被使用**，更多信息可以查看[规范文档](https://w3c.github.io/pointerevents/#pointerevent-interface)。



**多点触控**

多点触控（用户在手机或平板上同时点击若干个位置，或执行特殊手势）**是鼠标事件完全不支持的功能之一**。

**指针事件可以通过 `pointerId` 和 `isPrimary` 属性的帮助，能够处理多点触控**。

当用户用一根手指触摸触摸屏的某个位置，然后将另一根手指放在该触摸屏的其它位置时，会发生以下情况：

1. 第一根手指触摸：

   - **`pointerdown` 事件触发，`isPrimary=true`，并且被指派了一个 `pointerId`**

2. 第二根和后续的更多个手指触摸（假设第一根手指仍在触摸）：

   - **`pointerdown` 事件触发，`isPrimary=false`，并且每一个触摸都被指派了不同的 `pointerId`**


**⚠️ 注意：**

- **`pointerId` 不是分配给整个设备的，而是分配给每一个触摸的**，例如有 5 根手指同时触摸屏幕，会得到 5 个 `pointerdown` 事件和相应的坐标以及 5 个不同的 `pointerId`，**和第一个触摸相关联的事件总有 `isPrimary=true`**

  利用 `pointerId`，可以追踪多根正在触摸屏幕的手指，**当用户移动或抬起某根手指时，会得到和 `pointerdown` 事件具有相同 `pointerId` 的 `pointermove` 或 `pointerup` 事件**。

- 对于使用鼠标这样的单点触控设备，**所有指针事件都会具有相同的 `pointerId` 和 `isPrimary=true` 属性**



**事件：pointercancel**

`pointercancel` 事件将**会在一个处于活跃状态的指针交互由于某些原因被中断时触发**，也就是在该事件之后，该指针就不会继续触发更多事件了。

导致指针中断的可能原因如下：

- **指针设备硬件在物理层面上被禁用**
- **设备方向旋转（例如给平板转了个方向）**
- **浏览器打算自行处理这一交互，比如将其看作是一个专门的鼠标手势或缩放操作等**

例如对一张图片进行拖放，用户的操作流程和对应的事件如下：

1. 用户按住了一张图片，开始拖拽
   - `pointerdown` 事件触发
2. 用户开始移动指针（从而拖动图片）
   - `pointermove` 事件触发，可能触发多次
3. 然后意料之外的情况发生了，**浏览器有自己原生的图片拖放操作，接管了之前的拖放过程**，于是触发了 `pointercancel` 事件
   - 现在拖放图片的操作由浏览器自行实现，用户甚至可能会把图片拖出浏览器，放进他们的邮件程序或文件管理器
   - **再也不会触发 `pointermove` 事件了**

这里的问题就在于浏览器 “劫持” 了这个互动操作：**在 “拖放” 过程开始时触发了 `pointercancel` 事件，并且不再有 `pointermove` 事件会被生成**。

**要实现自己的拖放操作，需要阻止浏览器的默认行为来防止 `pointercancel` 触发**。

需要做以下两件事：

1. 阻止原生的拖放操作发生：
   - 可以通过设置 `ball.ondragstart = () => false` 来实现这一需求
   - 这种方式也适用于鼠标事件
2. **对于触屏设备，还有其它和触摸相关的浏览器默认行为（除了拖放）**，为了避免它们所引发的问题：
   - 可以通过在 **CSS 中设置 `#ball { touch-action: none; }` 来阻止它们**
   - 之后代码便可以在触屏设备中正常工作了

经过上述操作，事件将会按照预期的方式触发，**浏览器不会劫持拖放过程，也不会触发 `pointercancel` 事件**。



**指针捕获**

指针捕获（Pointer capturing）是针对指针事件的一个特性。

这个想法很简单，但是乍一看可能感觉很奇怪，因为在**其它任何事件类型中都没有这种东西**。

主要的方法是：

- **`elem.setPointerCapture(pointerId)`** —— 将给定的 `pointerId` 绑定到 `elem`，**在调用之后，所有具有相同 `pointerId` 的指针事件都将 `elem` 作为目标（就像事件发生在 `elem` 上一样），无论这些 `elem` 在文档中的实际位置是什么**

简单来说， `elem.setPointerCapture(pointerId)` 将**所有具有给定 `pointerId` 的后续事件重新定位到了 `elem`**。

绑定会在以下情况下被移除：

- **当 `pointerup` 或 `pointercancel` 事件出现时，绑定会被自动地移除**
- **当 `elem` 被从文档中移除后，绑定会被自动地移除**
- **当 `elem.releasePointerCapture(pointerId)` 被调用，绑定会被移除**

**指针捕获可以被用于简化拖放类的交互**。

例如创建一个带有条形图的、并且内部有一个“滑块”（`thumb`）的滑动条元素（`slider`）：

```html
<div class="slider">
  <div class="thumb"></div>
</div>
```

添加样式后的效果如下：

![image-20250809135534642](images/image-20250809135534642.png)

用指针事件替换鼠标事件后的实现逻辑：

1. 用户按下滑动条的滑块 `thumb` —— `pointerdown` 事件被触发
2. 然后用户移动指针 —— `pointermove` 事件被触发，让移动事件只作用在 `thumb` 上
   - 在指针移动的过程中，指针可能会离开滑动条的 `thumb` 元素，移动到 `thumb` 之上或之下的位置。而 `thumb` 应该严格在水平方向上移动，并与指针保持对齐

在基于鼠标事件实现的方案中，要跟踪指针的所有移动，包括指针移动到 `thumb` 之上或之下的位置时，**必须在整个文档 `document` 上分配 `mousemove` 事件处理程序**。

不过，这并不是一个没有副作用的解决方案，其中一个问题就是：**指针在文档周围的移动可能会引起副作用，会在其它元素上触发事件处理程序（例如 `mouseover`）并调用其它元素上与滑动条不相关的功能**，这不是预期的效果。

这就是 `setPointerCapture` 适用的场景。

- 可以在 `pointerdown` 事件的处理程序中**调用 `thumb.setPointerCapture(event.pointerId)`**
- 这样**接下来在 `pointerup/cancel` 之前发生的所有指针事件都会被重定向到 `thumb` 上**
- 当 `pointerup` 发生时（拖动完成），**绑定会被自动移除**，不需要关心它

**因此，即使用户在整个文档上移动指针，事件处理程序也将仅在 `thumb` 上被调用**，尽管如此，事件对象的坐标属性，例如 `clientX/clientY` 仍将是正确的 —— **捕获仅影响 `target/currentTarget`**。

主要代码如下：

```js
thumb.onpointerdown = function(event) {
  // 把所有指针事件（pointerup 之前发生的）重定向到 thumb
  thumb.setPointerCapture(event.pointerId);
  
  // 开始跟踪指针的移动
  thumb.onpointermove = function(event) {
    const newLeft = event.clientX - slider.getBoundingClientRect().left;
    thumb.style.left = newLeft + 'px';
  };
  
  // 当结束(pointerup)时取消对指针移动的跟踪
  thumb.onpointerup = function(event) {
    thumb.onpointermove = null;
    thumb.onpointerup = null;
    // 这里还可以处理 “拖动结束” 相关的逻辑
  };
}
```

**⚠️ 注意：上述代码中无需调用 `thumb.releasePointerCapture`，它会在 `pointerup` 事件触发时被自动调用**。

简单来说，指针捕获带来了以下两个好处：

1. **代码变得更加简洁**，不再需要在整个 `document` 上添加/移除处理程序，**绑定会被自动释放**
2. 如果文档中有其它指针事件处理程序，则在用户拖动滑动条时，**它们不会因指针的移动被意外地触发**



**指针捕获事件**

还有两个与指针捕获相关的事件：

- **`gotpointercapture`** —— 会在一个元素使用 `setPointerCapture` 来启用捕获后触发
- **`lostpointercapture`** —— 会在捕获被释放后触发：**其触发可能是由于 `releasePointerCapture` 的显式调用，或是 `pointerup`/`pointercancel` 事件触发后的自动调用**



## 键盘：keydown 和 keyup

**⚠️ 注意：在现代设备上，还有其它 “输入内容” 的方法，例如使用语音识别（尤其是在移动端设备上）或用鼠标复制/粘贴**。

因此，**如果想要跟踪 `<input>` 字段中的所有输入，那么键盘事件是不够的，无论如何还需要一个名为 `input` 的事件来跟踪 `<input>` 字段中的更改**，对于这样的任务来说，这可能是一个更好的选择。

要想处理键盘行为时，应该使用键盘事件（虚拟键盘也算），例如：对方向键 Up 和 Down 或热键（包括按键的组合）作出反应。



**keydown 和 keyup**

当一个按键被按下时，会触发 `keydown` 事件，而当按键被释放时，会触发 `keyup` 事件。



**event.code 和 evet.key**

事件对象的 **`key` 属性允许获取字符**，而 **`code` 属性则允许获取 “物理按键代码”**。

例如：同一个按键 Z，可以与或不与 `Shift` 一起按下，**会得到两个不同的字符：小写的 `z` 和大写的 `Z`**。

**`event.key` 正是这个字符，并且它将是不同的，但是`event.code` 是相同的**：

| Key       | `event.key` | `event.code` |
| :-------- | :---------- | :----------- |
| Z         | `z`（小写） | `KeyZ`       |
| Shift + Z | `Z`（大写） | `KeyZ`       |

如果用户使用不同的语言，那么切换到另一种语言将产生完全不同的字符，而不是 `'Z'`，它将成为 `event.key` 的值，**而 `event.code` 则始终都是一样的：`'KeyZ'`**。

**⚠️ 注意：**

- **每个按键的 `event.code` 都取决于该按键在键盘上的位置**，[UI 事件代码规范](https://www.w3.org/TR/uievents-code/)中描述了按键代码

  例如：

  - 字符键的代码为：`'Key<letter>'`：`'KeyA'`，`'KeyB'` 等
  - 数字键的代码为：`'Digit<number>'`：`'Digit0'`，`'Digit1'` 等
  - 特殊按键的代码为按键的名字：`'Enter'`，`'Backspace'`，`'Tab'` 等

  有几种广泛应用的键盘布局，该规范给出了每种布局的按键代码。
  
  更多按键代码，可以参考[规范的字母数字部分](https://www.w3.org/TR/uievents-code/#key-alphanumeric-section)。
  
- **大小写敏感：`'KeyZ'` 而不是 `'keyZ'`**，`'Key'` 的首字母必须大写

- **如果按键没有给出任何字符**，例如：Shift 或 F1 或其它，对于这些按键，**它们的 `event.key` 与 `event.code` 大致相同**，例如：

  | Key       | `event.key` | `event.code`                |
  | :-------- | :---------- | :-------------------------- |
  | F1        | `F1`        | `F1`                        |
  | Backspace | `Backspace` | `Backspace`                 |
  | Shift     | `Shift`     | `ShiftRight` 或 `ShiftLeft` |

  **⚠️ 注意：`event.code` 准确地标明了哪个键被按下了**，例如：大多数键盘有两个 Shift 键，一个在左边，一个在右边，`event.code` 会准确地返回按下了哪个键，而 `event.key` 对按键的 “含义” 负责：它是什么（一个 “Shift”）。

  假设，要处理一个热键：Ctrl + Z（或 Mac 上的 Command + Z），大多数文本编辑器将 “撤销” 行为挂在其上，可以在 `keydown` 上设置一个监听器，并检查哪个键被按下了。

  但存在一个问题：在这样的监听器中，应该检查 `event.key` 的值还是 `event.code` 的值？

  一方面，**`event.key` 的值是一个字符，它随语言而改变**，如果访问者在 OS 中使用多种语言，并在它们之间进行切换，**那么相同的按键将给出不同的字符，因此检查 `event.code` 会更好，因为它总是相同的**。

  像下面这样：

  ```js
  document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
      alert('Undo!')
    }
  });
  ```

  另一方面，`event.code` 有一个问题，**对于不同的键盘布局，相同的按键可能会具有不同的字符**。

  例如，下面是美式布局（“QWERTY”）和德式布局（“QWERTZ”）：

  ![image-20250809145034079](images/image-20250809145034079.png)

  对于同一个按键，美式布局为 “Z”，而德式布局为 “Y”（字母被替换了）。

  从字面上看，对于使用德式布局键盘的人来说，他们按下 Y 时，`event.code` 将等于 `KeyZ`。

  如果在代码中检查 `event.code === 'KeyZ'`，那么对于使用德式布局键盘的人来说，当他们按下 Y 时，这个测试就通过了。

  听起来确实很怪，但事实确实如此。[规范](https://www.w3.org/TR/uievents-code/#table-key-code-alphanumeric-writing-system)中明确提到了这种行为。

  因此，**`event.code` 可能由于意外的键盘布局而与错误的字符进行了匹配，在不同键盘布局中的相同字母可能会映射到不同的物理键，从而导致了它们有不同的代码**。

  幸运的是，这种情况只发生在几个代码上，例如 `keyA`，`keyQ`，`keyZ`（我们已经看到了），**而对于诸如 `Shift` 这样的特殊按键没有发生这种情况**，可以在[规范](https://www.w3.org/TR/uievents-code/#table-key-code-alphanumeric-writing-system)中找到该列表。

  **所以为了可靠地跟踪与受键盘布局影响的字符，使用 `event.key` 可能是一个更好的方式**。

  所以说，**如果要处理与布局有关的按键，那么 `event.key` 是必选的方式**。

  **或者希望一个热键即使在切换了语言后仍能正常使用，那么 `event.code` 可能会更好**。



**自动重复**

如果**按下一个键足够长的时间，它就会开始 “自动重复”：** `keydown` 会被一次又一次地触发，然后当按键被释放时，最终会触发一次 `keyup`，因此，**有很多 `keydown` 却只有一个 `keyup` 是很正常的**。

**对于由自动重复触发的事件，`event` 对象的 `event.repeat` 属性被设置为 `true`**。



**默认行为**

**默认行为各不相同，因为键盘可能会触发很多可能的东西**。

例如：

- 出现在屏幕上的一个字符（最明显的结果）
- 一个字符被删除（Delete 键）
- 滚动页面（PageDown 键）
- 浏览器打开“保存页面”对话框（Ctrl+S）
- ......等

**阻止对 `keydown` 的默认行为可以取消大多数的行为，但基于 OS 的特殊按键除外**，例如，在 Windows 中，Alt + F4 会关闭当前浏览器窗口，并且无法通过在 JavaScript 中阻止默认行为来阻止它。

例如，下面的 `<input>` 期望输入的内容为一个电话号码，**因此它不会接受除数字，`+`，`()` 和 `-` 以外的按键**：

```html
<script>
function checkPhoneKey(key) {
  return (key >= '0' && key <= '9') || ['+','(',')','-'].includes(key);
}
</script>

<input onkeydown="return checkPhoneKey(event.key)" placeholder="请输入手机号" type="tel">
```

上述代码中，通过 `onkeydown` 处理程序使用 `checkPhoneKey` 来检查被按下的按键，如果它是有效的（`0..9` 或 `+-()` 之一），那么将返回 `true`，否则返回 `false`。

像上面那样，**从事件处理程序返回 `false` 会阻止事件的默认行为**，所以如果按下的按键未通过按键检查，那么 `<input>` 中什么都不会出现（从事件处理程序返回 `true` 不会对任何行为产生影响，只有返回 `false` 会产生对应的影响）。

**⚠️ 注意：像 Backspace、Left、Right 这样的特殊按键在 `<input>` 中无效，这是严格过滤器 `checkPhoneKey` 的副作用，因为这些按键会使 `checkPhoneKey` 返回 `false`**。

所以将过滤条件放宽一点，允许 Left、Right、Delete 和 Backspace 按键：

```html
<script>
function checkPhoneKey(key) {
  return (key >= '0' && key <= '9') ||
    ['+','(',')','-','ArrowLeft','ArrowRight','Delete','Backspace'].includes(key);
}
</script>

<input onkeydown="return checkPhoneKey(event.key)" placeholder="Phone, please" type="tel">
```

现在方向键和删除键都能正常使用了，但即使对按键进行了过滤，仍然可以使用鼠标右键单击 + 粘贴来输入任何内容，移动端设备还提供了其它输入内容的方式，**因此，这个过滤器并不是 100% 可靠**。

另一种方式是跟踪 `oninput` 事件 —— 在任何修改后都会触发此事件，这样就可以检查新的 `input.value`，并在其无效时修改它/高亮显示 `<input>`，或者可以同时使用这两个事件处理程序。



**历史遗留**

过去有一个 `keypress` 事件，还有事件对象的 `keyCode`、`charCode` 和 `which` 属性。

**大多数浏览器对它们都存在兼容性问题，以致使该规范的开发者不得不弃用它们并创建新的现代的事件**（前面提到的这些事件），除此之外别无选择。旧的代码仍然有效，因为浏览器还在支持它们，但现在完全没必要再使用它们。



**移动端键盘**

当使用虚拟/移动端键盘时，更正式一点的名字叫做 IME（Input-Method Editor），W3C 标准规定 KeyboardEvent 的 [`event.keyCode` 应该为 `229`](https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode)，并且 [`event.key` 应该为 `'Unidentified'`](https://www.w3.org/TR/uievents-key/#key-attr-values)。

当按下某些按键（例如箭头或退格键）时，**虽然其中一些键盘仍然使用正确的值来表示 `e.key`、`e.code`、`e.keyCode`...，但并不能保证所有情况下都能对应正确的值，所以键盘逻辑可能并不能保证适用于移动设备**。



## 滚动

**`scroll` 事件允许对页面或元素滚动做出反应**。

例如：

- 根据用户在文档中的位置显示/隐藏其它控件或信息
- 当用户向下滚动到页面末端时加载更多数据

例如，一个显示当前滚动的小函数：

```js
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});
```

**`scroll` 事件在 `window` 和可滚动元素上都可以运行**。



**防止滚动**

不能通过在 `onscroll` 监听器中使用 `event.preventDefault()` 来阻止滚动，因为**它会在滚动发生之后才触发**。

但可以**在导致触发的事件上**，例如在 pageUp 和 pageDown 的 `keydown` 事件上，使用 `event.preventDefault()` 来阻止滚动。

如果**向这些事件添加事件处理程序，并向其中添加 `event.preventDefault()`，那么滚动就不会开始**。

**启动滚动的方式有很多，使用 CSS 的 `overflow` 属性更加可靠**。



**滚动的两个重要特性**

1. **滚动是弹性的**，在某些浏览器/设备中，可以在文档的顶端或末端稍微多滚动出一点（**超出部分显示的是空白区域，然后文档将自动 “弹回” 到正常状态**）
2. **滚动并不精确**，当滚动到页面末端时，**实际上可能距真实的文档末端约 `0~50px`**



## 表单属性和方法

表单（form）以及例如 `<input>` 的控件（control）元素有许多特殊的属性和事件。



**导航：表单和元素**

文档中**表单是特殊集合 `document.forms` 的成员**。

这就是所谓的 **“命名的集合”**：即是被命名了的，也是有序的，简单来说：**即可以使用名字，也可以使用在文档中的编号来获取表单**。

```js
document.forms.my; // name="my" 的表单
document.forms[0]; // 文档中的第一个表单
```

**当有了一个表单时，其中的任何元素都可以通过命名的集合 `form.elements` 来获取到**。

例如：

```html
<form name="my">
  <input name="one" value="1">
  <input name="two" value="2">
</form>

<script>
  // 获取表单
  const form = document.forms.my; // <form name="my"> 元素
  
  // 获取表单中的元素
  const elem = form.elements.one; // <input name="one"> 元素
  
  alert(elem.value); // 1
</script>
```

**可能会有多个名字相同的元素**，这种情况经常在处理单选按钮中出现。

在这种情况下，`form.elements[name]` 将会是一个**集合**，例如：

```html
<form>
  <input type="radio" name="age" value="10">
  <input type="radio" name="age" value="20">
</form>

<script>
  const form = document.forms[0];
  
  const ageElems = form.elements.age;
  
  alert(ageElems[0]); // [object HTMLInputElement]
</script>
```

这些**导航（navigation）属性比不依赖于标签的结构**，所有的控件元素，无论它们在表单中有多深，都可以通过 `form.elements` 获取到。

**一个表单中会有一个或者多个 `<fieldset>` 元素，它们也具有 `elements` 属性，该属性列出了 `<fieldset>` 中的表单控件**，例如：

```html
<body>
  <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text">
    </fieldset>
  </form>

  <script>
    alert(form.elements.login); // [object HTMLInputElement]

    let fieldset = form.elements.userFields;
    alert(fieldset); // HTMLFieldSetElement

    // 我们可以通过名字从表单和 fieldset 中获取 input
    alert(fieldset.elements.login === form.elements.login); // true
  </script>
</body>
```

**⚠️ 注意：还有更简短的表示方式，可以通过 `form[index/name]` 来访问元素**，例如可以将 `form.elements.login` 写成 `form.login`，这也有效，但是存在一个小问题：**如果访问一个元素，然后修改它的 `name`，之后它仍然可以通过旧的 `name` 访问到（当然也可以通过新的 `name` 访问）**，例如：

```html
<form id="form">
  <input name="login">
</form>

<script>
  alert(form.elements.login === form.login); // true，与 <input> 相同
  
  form.login.name = 'username'; // 修改 input 的 name
  
  // form.elements 更新了 name
  alert(form.elements.login); // undefined
  alert(form.elements.username); // input
  
  // form 允许使用两个名字：新的名字和旧的名字
  alert(form.username === form.login); // true
</script>
```

这通常来说并不是一个问题，因为很少修改表单元素的名字。



**反向引用：element.form**

**对于任何元素，其对应的表单都可以通过 `element.form` 访问到**，因此表单引用了所有元素，元素也引用了表单。

下面是一张示意图：

![image-20250810073136622](images/image-20250810073136622.png)

例如：

```html
<form id="form">
  <input type="text" name="login">
</form>

<script>
  // form -> element
  const login = form.login;
  
  // element -> form
  alert(login.form); // [object HTMLFormElement]
</script>
```



**input 和 textarea**

**对于 `input` 和 `textarea`，可以用 `.value`（字符串）获取它们的值**，对于复选框（checkbox）和单选按钮（radio button），**除了 `.value`（字符串） 获取提交值，还可以用 `.checked`（布尔值）获取选中状态**。

像下面这样：

```js
input.value = 'New value';
textarea.value = 'New text';

input.checked = true; // 对于复选框（checkbox）或单选按钮（radio button）
```

**⚠️ 注意：使用 `textarea.value` 而不是 `textarea.innerHTML`**，即使 `<textarea>...</textarea>` 将它们的 `value` 作为嵌套的 HTML 标签来保存，也绝不应该使用 `textarea.innerHTML` 来访问它，**它仅存储最初在页面上的 HTML，而不是存储的当前 `value`**。



**select 和 option**

一个 `<select>` 元素有 3 个重要的属性：

1. `select.options` —— `<select>` 内**所有 `<option>` 元素的集合**
2. `select.value` —— 当前所选择的 `<option>` 的 **value**
3. `select.selectedIndex` —— 当前所选择的 `<option>` 的**编号**

它们提供了三种为 `<select>` 设置 `value` 的不同方式：

1. 找到对应的 `<option>` 元素（例如在 `select.options` 中），并将其 `option.selected` 设置为 `true`
2. 如果知道新的值：将 `select.value` 设置为对应的新的值
3. 如果知道新的选项的索引：将 `select.selectedIndex` 设置为对应 `<option>` 的编号

例如：

```html
<select id="select">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>

<script>
  // 下面这三行做的都是同一件事
  select.options[2].selected = true;
  select.selectedIndex = 2;
  select.value = 'banana';
  // 请注意：选项编号是从零开始的，所以编号 2 表示的是第三项
</script>
```

与其它大多数控件不同，**如果 `<select>` 具有 `multiple` 特性（attribute），则允许多选**，尽管这个特性很少被用到。

**对于多选的值，使用第一种设置值的方式**：在 `<option>` 子元素中添加/移除 `selected` 属性，例如：

```html
<select id="select" multiple>
  <option value="blues" selected>Blues</option>
  <option value="rock" selected>Rock</option>
  <option value="classic">Classic</option>
</select>

<script>
  // 从 multi-select 中获取所有选定的 value
  const selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value);

  alert(selected); // blues,rock
</script>
```

`<select>` 元素的完整规范可以在规范 https://html.spec.whatwg.org/multipage/forms.html#the-select-element 中找到。



**new Option**

在[规范](https://html.spec.whatwg.org/multipage/forms.html#the-option-element)中，有一个很好的简短语法可以创建一个 `<option>` 元素：

```js
const option = new Option(text, value, defaultSelected, selected);
```

**此语法是可选的**，也可以使用 `document.createElement('option')` 并手动设置特性（attribute），不过这种语法写起来可能会更短，其参数如下：

- `text` —— `<option>` 中的文本
- `value` —— `<option>` 的 `value`
- `defaultSelected` —— 如果为 `true`，那么 `selected` HTML 特性（attribute）就会被创建
- `selected` —— 如果为 `true`，那么这个 `<option>` 就会被选中

`defaultSelected` 和 `selected` 的区别是：**`defaultSelected` 设置的是 HTML 特性（attribute），可以使用 `option.getAttribute('selected')` 来获得**，而 `selected` 设置的是选项是否被选中。

在实际使用中，**通常应该同时将这两个值设置为 `true` 或 `false`（或者，直接省略它们，两者都默认为 `false`）**。

例如，下面是一个新的**未被选中**的选项：

```js
const option = new Option('Text', 'value');
// 创建 <option value="value">Text</option>
```

相同的选项，但被选中了：

```js
const option = new Option('Text', 'value', true, true);
```

`<option>` 元素具有以下属性：

- **`option.selected`** —— `<option>` 是否被选择
- **`option.index`** —— `<option>` 在其所属的 `<select>` 中的编号
- **`option.text`** —— `<option>` 中的文本内容（可以被访问者看到）



**参考资料**

更多 `form` 相关的信息可以参考 https://html.spec.whatwg.org/multipage/forms.html。





## 聚焦：focus/blur

当用户点击某个元素或使用键盘上的 Tab 键选中时，该元素将会获得聚焦（focus），还**有一个 HTML 特性（attribute）`autofocus`，可以让焦点在网页加载时默认落在一个元素上**，此外还有其它途径可以获得焦点。

**聚焦到一个元素通常意味着：准备在此处接受数据**，所以这正是运行代码以初始化所需功能的时刻。

失去焦点（blur）的时刻可能更为重要，它可能发生在用户点击页面的其它地方，或者按下 Tab 键跳转到下一个表单字段，亦或者是其它途径的时候。

**失去焦点通常意味着：数据已经输入完成**，所以可以运行代码来检查它，甚至可以将其保存到服务器上，或进行其它操作。



**focus/blur 事件**

当元素聚焦时，会触发 `focus` 事件，当元素失去焦点时，会触发 `blur` 事件。

可以使用它们来校验一个 `input` 字段。

例如：

- `blur` 事件处理程序检查这个字段是否输入了电子邮箱，如果没有输入，则显示一个 error
- `focus` 事件处理程序隐藏 error 信息（在 `blur` 事件处理程序上会被再检查一遍）

```html
<style>
  .invalid { border-color: red; }
  #error { color: red; }
</style>

Your email please: <input type="email" id="input">

<div id="error"></div>

<script>
  input.onblur = function() {
    if(!input.value.includes('@')) { // not email
      input.classList.add('invalid');
      error.innerHTML = 'Please enter a correct email.';
    }
  };
  
  input.onfocus = function() {
    if(this.classList.contains('invalid')) {
      // 移除 error 指示，因为用户想要重新输入一些内容
      this.classList.remove('invalid');
      error.innerHTML = '';
    }
  };
</script>
```

**现代 HTML 允许使用 `input` 特性（attribute）进行更多验证：`required`，`pattern` 等**，有时候会使用它们，当需要更大的灵活性时，可以使用 JavaScript，如果数据是正确的，可以把它自动发送到服务器。



**focus/blur 方法**

**`elem.focus()` 和 `elem.blur()` 方法可以设置和移除元素上的焦点**。

例如，如果输入值无效，**可以让焦点无法离开这个 `input` 字段**：

```html
<style>
  .error {
    background: red;
  }
</style>

Your email please: <input type="email" id="input">
<input type="text" style="width:220px" placeholder="make email invalid and try to focus here">

<script>
  input.onblur = function() {
    if(!this.value.includes('@')) { // not email
      // 显示 error
      this.classList.add('error');
      // 把焦点放回来
      input.focus();
    } else {
      this.classList.remove('error');
    }
  }
</script>
```

现在在 `<input>` 中输入一些内容，然后尝试使用 Tab 键或点击远离 `<input>` 的位置，那么 `onblur` 事件处理程序会把焦点重新设置到这个 `input` 字段上。

**⚠️ 注意：**

- **无法通过在 `onblur` 事件处理程序中调用 `event.preventDefault()` 来阻止失去焦点**，因为 `onblur` 事件处理程序是**在元素失去焦点之后运行的**。

  但在实际中，实现这样的功能之前应该考虑一下，通常**应该将报错展示给用户**，但**不应该阻止用户在填写表单时的进度**，用户可能会想先填写其它表单项。

- **JavaScript 也可能导致焦点丢失**

  有很多原因可以导致焦点丢失，其中之一就是用户点击了其它位置，当然 JavaScript 自身也可能导致焦点丢失，例如：

  - **一个 `alert` 会将焦点移至自身**，因此会导致元素失去焦点（触发 `blur` 事件），而当 `alert` 对话框被取消时，焦点又会重新回到原元素上（触发 `focus` 事件）
  - **如果一个元素被从 DOM 中移除，也会导致焦点丢失**，如果稍后它被重新插入到 DOM，焦点也不会回到它身上

  这些特性有时候会导致 `focus/blur` 处理程序发生异常 —— 在不需要它们时触发。

  **最好的秘诀就是使用这些事件时小心点**，如果想要跟踪用户导致的焦点丢失，则应该避免自己造成的焦点丢失。



**允许在任何元素上聚焦：tabindex**

默认情况下，很多元素不支持聚焦。

这个范围因浏览器而异，但有一件事总是正确的：**用户可以交互的元素：`<button>`，`<input>`，`<select>`，`<a>` 等，都支持 `focus/blur`**。

另一方面，**为了格式化某些东西而存在的元素像 `<div>`、`<span>` 和 `<table>` —— 默认是不能被聚焦的**，`elem.focus()` 方法不适用于它们，并且 `focus/blur` 事件也绝不会被触发。 

**使用 HTML 特性（attribute）`tabindex` 可以改变这种情况，任何具有 `tabindex` 特性的元素，都会变成可聚焦的，该特性的 `value` 是当使用 Tab（或类似的东西）在元素之间进行切换时，元素的顺序号**。

也就是说：如果有两个元素，第一个具有 `tabindex="1"`，第二个具有 `tabindex="2"`，然后当焦点在第一个元素的时候，按下 Tab 键，会使焦点移动到第二个元素身上。

**切换顺序为：从 `1` 开始的具有 `tabindex` 的元素排在前面（按 `tabindex` 顺序），然后是不具有 `tabindex` 的元素（例如常规的 `<input>`**。

**不具有 `tabindex` 的元素按文档源顺序（默认顺序）切换**。

这里有两个特殊的值：

- **`tabindex="0"` 会使该元素被与那些不具有 `tabindex` 的元素放在一起**，也就是说，当切换元素时，**具有 `tabindex="0"` 的元素将排在那些具有 `tabindex ≥ 1` 的元素的后面**
- **`tabindex="-1"` 只允许以编程的方式聚焦于元素，Tab 键会忽略这样的元素，但是 `elem.focus()` 有效**

例如：

```html
点击第一项，然后按 Tab 键。跟踪顺序，注意，多按几次 Tab 键后，会将焦点移到这个通过 iframe 嵌入的示例的外面。
<ul>
  <li tabindex="1">One</li>
  <li tabindex="0">Zero</li>
  <li tabindex="2">Two</li>
  <li tabindex="-1">Minus one</li>
</ul>

<style>
  li { cursor: pointer; }
  :focus { outline: 1px dashed green; }
</style>
```

顺序就像这样：`1 - 2 - 0`，通常 `<li>` 不支持聚焦，但 `tabindex` 可以使它能聚焦，使这成为可能，**并且还带有事件以及 `:focus` 样式**。

**⚠️ 注意：也可以使用 `elem.tabIndex` 通过 JavaScript 来添加 `tabindex`**，效果是一样的。



**focus/blur 委托**

`focus` 和 `blur` 事件**不会向上冒泡**。

例如，不能把 `onfocus` 放在 `<form>` 上来对其进行高亮：

```html
<style> .focused { outline: 1px solid red; } </style>

<form onfocus="this.className='focused'">
  <input type="text" name="name" value="Name">
  <input type="text" name="surname" value="Surname">
</form>
```

![image-20250810093013026](images/image-20250810093013026.png)

上面这个示例并不工作，**因为当用户聚焦于 `<input>` 时，`focus` 事件只会在该 `<input>` 上触发，它不会向上冒泡**，所以 `form.onfocus` 永远不会触发。

这里有两个解决方案：

1. 有一个遗留下来的有趣的特性（feature）：**`focus/blur` 不会向上冒泡，但会在捕获阶段向下传播**。

   所以这样可以生效：

   ```html
   <style> .focused { outline: 1px solid red; } </style>
   
   <form id="form">
     <input type="text" name="name" value="Name">
     <input type="text" name="surname" value="Surname">
   </form>
   
   <script>
     // 将处理程序置于捕获阶段（最后一个参数为 true）
     form.addEventListener('focus', () => form.classList.add('focused'), true);
     form.addEventListener('blur', () => form.classList.reomve('focused'), true);
   </script>
   ```

2. **也可以使用 `focusin` 和 `focusout` 事件 —— 与 `focus/blur` 事件完全一样，只是它们会冒泡**，例如：

   ```html
   <form id="form">
     <input type="text" name="name" value="Name">
     <input type="text" name="surname" value="Surname">
   </form>
   
   <style> .focused { outline: 1px solid red; } </style>
   
   <script>
     form.addEventListener('focusin', () => form.classList.add('focused'));
     form.addEventListener('focusout', () => form.classList.remove('focused'));
   </script>
   ```

   **⚠️ 注意：必须使用 `elem.addEventListener` 来分配它们，而不是 `on<event>`**。




**获取当前聚焦的元素**

可以**通过 `document.activeElement` 来获取当前所聚焦的元素**。



## 事件：change，input，cut，copy，paste



**事件：change**

当元素更改完成时，将触发 `change` 事件。

**对于文本输入框，当其输入内容后，失去焦点时就会触发 `change` 事件**。

例如，当在下面的文本字段中输入内容时不会触发事件，但是当将焦点移到其它位置时，例如：点击按钮就会触发  `change` 事件。

```html
<input type="text" onchange="alert(this.value)">
<input type="button" value="Button">
```

**其余其它元素：`<select>`、`<input type="checkbox" />`、`<input type="radio" />`，会在选项更改后立即触发 `change` 事件**。

```html
<select onchange="alert(this.value)">
  <option value="">Select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```



**事件：input**

每当用户对输入值进行修改后，就会触发 `input` 事件。

**与键盘事件不同，只要值改变了，`input` 事件就会触发，即使那么不涉及键盘行为（action）的值的更改也是如此：使用鼠标粘贴，或者使用语音识别来输入文本**。

例如：

```html
<input type="text" id="input"> oninput: <span id="result"></span>
<script>
  input.oninput = function() {
    result.innerHTML = input.value;
  };
</script>
```

如果想处理对 `<input>` 的每次更改，使用此事件是最佳选择。

另一方面，**`input` 事件不会在那些不涉及值更改的键盘输入或其它行为上触发，例如在输入时按方向键 ⇦ ⇨**。

**⚠️ 注意：无法阻止 `oninput` 中的任何事件**，当输入值更改后，就会触发 `input` 事件，所以无法使用 `event.preventDefault()`，太迟了。



**事件：cut，copy，paste**

这些事件发生于剪切、复制、粘贴一个值的时候。

**它们属于 `ClipboardEvent` 类，并提供了对剪切、复制、粘贴的数据的访问方法**。

也**可以使用 `event.preventDefault()` 来阻止行为**，然后什么都不会被复制、粘贴。

例如，下面的代码阻止了剪切/复制/粘贴的事件，并显示出了所尝试剪切/复制/粘贴的内容：

```html
<input type="text" id="input">
<script>
  input.onpaste = function(event) {
    alert('paste: ' + event.clipboardData.getData('text/plain'));
    event.preventDefault();
  };

  input.oncut = input.oncopy = function(event) {
    alert(event.type + '-' + document.getSelection());
    event.preventDefault();
  };
</script>
```

**⚠️ 注意：剪切、复制事件处理程序中调用 `event.clipboardData.getData(...)` 只会得到一个空字符串**，从技术上讲，这是**因为浏览器触发剪切、复制事件的时机是在数据写入剪贴板之前**，所以自然只会得到一个空字符串，之后如果使用 `event.preventDefault()`，那么它根本不会被复制。

上述例子中使用 `document.getSelection()` 来得到被选中的文本。

**不仅可以复制/粘贴文本，也可以复制/粘贴其他各种内容**，例如，可以在操作系统的文件管理器中复制一个文件并进行粘贴。

**这是因为 `clipboardData` 实现了 `DataTransfer` 接口，通常用于拖放和复制/粘贴**。

另外还有一个可以访问剪贴板的异步 API：`navigator.clipboard`，具体可以参考[Clipboard API 和事件规范](https://www.w3.org/TR/clipboard-apis/)，**[火狐浏览器（Firefox）尚未支持](https://caniuse.com/async-clipboard)**。



**安全限制**

剪贴板是 “全局” 操作系统的东西，用户可能会在各种应用程序之间切换，复制/粘贴不同的内容，而**浏览器页面不应该能访问这些内容**。

因此**大多数浏览器仅允许在某些用户操作范围内（例如复制、粘贴等）对剪贴板进行无缝的读、写访问**。

**除火狐（Firefox）的浏览器外，所有浏览器都禁止使用 `dispatchEvent` 生成 “自定义” 剪贴板事件，无法调度此类事件**，规范也明确声明了，合成（syntetic）事件不得提供对剪切板的访问权限。

**⚠️ 注意：如果想将 `event.clipboardData` 保存在事件处理程序中，然后稍后在访问它，这也不会生效**，`event.clipboardData` 仅在**用户启动的事件处理程序的上下文中生效**。

 另外 `navigator.clipboard` 是一个较新的 API，适用于任何上下文，**如果需要，它会请求用户的许可**。



## 表单：事件和方法提交

**提交表单的时候，会触发 `submit` 事件**，它通常用于**将表单发送到服务器之前对表单进行校验，或者终止提交，并使用 JavaScript 来处理表单**。

**`form.submit()` 方法允许从 JavaScript 中启动表单发送，可以使用此方法动态地创建表单**，并将其发送到服务器。



**事件：submit**

提交表单主要有两种方式：

1. **点击 `<input type="submit">` 或 `<input type="image">`**
2. **在 `<input>` 字段中按下 Enter 键**

这两个行为都会触发表单的 `submit` 事件，处理程序可以检查数据，如果有错误就显示出来，并调用 `event.preventDefault()`，这样就表单就不会发送到服务器了。

例如：

```html
<form onsubmit="alert('submit!');return false">
  First: Enter in the input field <input type="text" value="text"><br>
  Second: Click "submit": <input type="submit" value="Submit">
</form>
```

上述代码中，使用以上两种行为都会显示 `alert`，而因为代码中的 `return false`，表单不会被发送到别处。

**⚠️ 注意：在输入框中使用 Enter 发生表单时，会在 `<input type="submit">` 上触发一次 `click` 事件**，但实际根本没有点击，例如：

```html
<form onsubmit="return false">
  <input type="text" size="30" value="Focus here and press enter">
  <input type="submit" value="Submit" onclick="alert('click')">
</form>
```

上述代码在输入框中使用 Enter，显示 `click`。



**方法：submit**

如果要**手动将表单提交到服务器，可以调用 `form.submit()`**。

**这样做不会触发 `submit` 事件**，因为这里假设如果开发人员调用 `form.submit()`，就意味着此脚本已经进行了所有相关处理。

有时该方法被用来手动创建和发送表单，例如：

```js
const form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';

form.innerHTML = '<input name="q" value="test">'

document.body.append(form); // 表单必须在文档中才能提交

form.submit();
```

**⚠️ 注意：表单必须先添加到文档中才能提交**。
