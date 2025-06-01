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


**⚠️ 注意：** Safari 需要**先提前在设置中开启“网页开发者功能”** ，“设置” -> “高级” -> “显示网页开发者功能”。

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
alert("Hello");

[1, 2].forEach(alert);
```

这段代码在有分号的时候是先显示 `Hello`，然后显示 `1`，再然后是 `2`。

如果不加分号是这样的

```js
alert("Hello")

[1, 2].forEach(alert)
```

输出结果为先显示 `Hello`，后面不会再有数字出现，然后控制台出现报错信息。

![image-20250601101128948](images/image-20250601101128948.png)

上述代码会被 JavaScript 理解为

```js
alert("Hello")[1, 2].forEach(alert);
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

- 多行注释不支持嵌套注释，例如下面这段代码注释会出问题

  ```js
  /*
    /* 嵌套注释 ?!? */
  */
  alert( 'World' );
  ```

- 注释虽然会增加代码量，但很多工具会在代码构建打包时缩减代码，移除注释，这样注释就不会产生任何影响。