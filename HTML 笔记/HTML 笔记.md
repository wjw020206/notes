# HTML 笔记



## 网页三要素

- 结构（HTML）
- 表现（CSS）
- 行为（JavaScript）



## 网页的基本结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  </body>
</html>
```

**⚠️ 注意：** 

- HTML 语言忽略缩进和换行

- HTML 标签名对大小写不敏感
- 一般习惯使用小写



## 基本结构说明

对网页的基本结构中的各个标签进行说明



**文档类型**

```html
<!DOCTYPE html>
```

**作用：** `<!DOCTYPE>` 是用来告诉浏览器使用什么方式渲染页面

**⚠️ 注意：**

- `DOCTYPE` 一般习惯使用大写
- `DOCTYPE` 本质不是标签，像处理命令
- `html` 代指以 HTML5 的标准来解析当前页面



**`<html>` 标签**

```html
<html></html>
```

**⚠️ 注意：** 

- **一个网页只能有一个根元素**
- 除了 `<!DOCTYPE html>` 外其它标签都要放在 `<html>` 标签中



**`<head>` 标签**

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
</html>
```

**作用：** 它的内容不会出现在网页中，用于放置网页不可见的元信息，提供额外的渲染信息

**⚠️ 注意：** 

当网页中不包含 `<head>` 浏览器会自动创建一个

`<head>` 的子元素一般有以下七个：

- `<meta>`：设置网页的元数据
- `<link>`：引入外部样式表
- `<title>`：设置网页标题
- `<style>`：设置内嵌的样式表
- `<script>`：引入脚本
- `<noscript>`：浏览器不支持脚本时，要显示的内容
- `<base>`：设置网页内部相对 URL 的计算基准



**`<meta>` 标签**

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
```

**作用：** 用于设置网页的元数据，元数据是指描述数据的数据，HTML 网页本身也是数据

**⚠️ 注意：** `<meta>` 标签按约定放在 `<head>` 中所有子元素的最前面



**`<title>` 标签**

```html
<head>
  <title>网页标题</title>
</head>
```

**作用：** 用于设置网页的标题，对搜索引擎的排序有很大的影响，所以最好根据网页的主题设置标题

**⚠️ 注意：** `<title>` 标签中**只能放纯文本**，不能放置其它标签



**`<body>` 标签**

```html
<html>
  <head>
    <title>网页标题</title>
  </head>
  <body>
    <p>hello world</p>
  </body>
</html>
```

**作用：** `<body>` 标签中的内容是网页显示的页面



**注释**

```html
<!-- 我是一个注释 -->
```

**作用：** 注释内部的代码浏览器不会去解析，也不会去渲染



## 空格和换行处理



**标签内容的头部和尾部空格忽略不计**

```html
<p>  CodePencil  </p>
```

等价于

```html
<p>CodePencil</p>
```



**标签内容内部有多个连续空格会被合并成一个**

```html
<p>Hello      HTML</p>
```

等价于

```html
<p>Hello HTML</p>
```

**⚠️ 注意：** 标签内容中的换行符和回车符也会被替换成一个空格，**需要换行请使用 `<br />`**



## URL

URL 是 “统一资源定位符”（Uniform Resource Locator）首字母的缩写，也叫 “链接”



**URL 组成部分**

```
https://www.example.com:80/path/to/index.html?key1=value1&key2=value2#anchor
```

- 网络协议：上例中是 `https://`
- 主机名(域名)：上例中是 `www.example.com`
- 端口：上例中是 `80`，端口如果省略 HTTP 默认是 `80`，HTTPS 默认是 `443`，与域名间使用 `:` 分隔
- 路径：上例中是 `/path/to/index.html`，省略文件名默认情况是访问 `index.html`（取决于后台的配置），过去是实际地址，现在都是服务器模拟地址
- 查询参数：上例中是 `?key1=value1&key2=value2#anchor`，是键值对，以 `&` 分隔一组，与路径间用 `?` 分隔
- 锚点：上例中是 `#anchor`，页面跳转后会自动滚动到 `id` 为 `anchor` 元素所在的位置



**URL 字符**

合法的 URL 字符：

- 26 个英文字符（包含大写和小写）
- 数字
- 连词号（`-`）
- 句点（`.`）
- 下划线（`_`）

**⚠️ 注意：** 

- 还有 18 个 URL 保留字符，例如 `?`，**只能在给定位置出现，其他位置出现是非法的**
- 在 URL 中使用 URL 保留字符，**必须使用它们的转义形式**，转义规则为 `%+十六进制 ASCII 码` ，例如： `?` 转化为 `%3F`
- 既不是保留字符也不是合法字符的字符，在 URL 中浏览器会自动进行转义



**绝对 URL**

靠 URL 自身就可以定位资源，带有完整的网络协议、主机名、端口、路径

```
https://www.example.com:80/path/to/index.html
```



**相对 URL**

无法靠 URL 自身定位资源，必须结合当前网站的位置才能定位资源

- `.`  表示当前目录，例如：`./index.html`
- `..` 表示上一级目录，例如：`../index.html`

```
https://www.example.com/./index.html
```

等价于

```
https://www.example.com/index.html
```



**`<base>` 标签**

```html
<head>
  <base href="https://www.example.com/files/" target="_blank">
</head>
```

**作用：** 指定网页内部所有相对 URL 的计算基准

**⚠️ 注意：** 

- **整个网页只能有一个 `<base>` 标签**
- 至少要有 `href` 属性或 `target` 属性
- 只能放在 `<head>` 标签中
- 要改变某个链接的行为，只能使用绝对 URL 替换相对 URL



## 网页元素的属性

用于定制元素的行为



**属性格式**

```html
<html lang="en">
```

**⚠️ 注意：** 

- 标签内的属性都是 “键值对”
- 属性不区分大小写
- **建议属性值统一使用双引号**



**布尔属性值**

```html
<input type="text" required> 
```

上述代码中 `required` 是布尔属性值，可以省略属性值

等价于

```html
<input type="text" required="required"> 
```

**⚠️ 注意：** 布尔属性值只能有一个值，这个值一般和属性名相同



**全局属性**

指所有元素都可以使用的属性，下述属性所有元素都可以使用，有些属性对某些元素可能没有任何意义



**id**

```html
<p id="p1">你好</p>
```

**作用：** 指定标签的唯一标识符，在 `id` 前加 `#` 放在 URL 中可以作为锚点

**⚠️ 注意：** 同一个页面**不能有两个相同**的 `id` 属性



**class**

```html
<p class="className"></p>
```

**作用：** 用于给相同 `class` 值的标签进行分类



**title**

```html
<div title="我是title">
  <p>鼠标放在我身上会显示title</p>
</div>
```

**作用：** 为元素添加附加说明，大多数浏览器中鼠标悬浮在元素上会显示 `title` 的属性值的浮动提示



**tabindex**

```html
<p tabindex="0">我可以获得焦点</p>
```

**作用：** 控制按下 Tab 键时光标切换的顺序，这个属性的值是一个整数，有下列三种值：

- 负整数：该元素可以获得焦点（例如使用 JavaScript 中的 `focus()` 方法），但是不参与 Tab 键对网页的遍历，值通常是 `-1`
- `0`：该元素参 Tab 键对网页的遍历，顺序由浏览器指定，通常按照在网页中显示的顺序
- 正整数：网页元素按照从小到大的顺序（1、2、3、...），参与 Tab 键的遍历，如果值相同则按照在网页源码中的出现的顺序

**⚠️ 注意：** 

- `tabindex` 属性最好都设置为 `0`，按照自然顺序遍 历
- 只有无法获取焦点的元素才有必要设置 `tabindex` 属性，例如：`span`、`div` 等



**accesskey**

```html
<button accesskey="s">提交</button>
```

**作用：** 指定网页元素获得焦点的快捷键

**⚠️ 注意：** 

- 属性值必须是单个的可打印字符(可以在屏幕或打印中显示出来的字符)
- 必须配合功能键才能使用，Chrome 浏览器中在 Windows 和 Linux 系统中，是 `Alt + 字符键`，Mac 系统中是 `Ctrl + Alt + 字符键`
- 如果快捷键和系统快捷键冲突，这时不会生效



**style**

```html
<p style="color: red;">你好</p>
```

**作用：** 指定元素的 CSS 样式



**hidden**

```html
<p hidden>看不见我，看不见我</p>
```

**作用：** `hidden` 是布尔属性，表示元素跟当前网页无关，浏览器也不会渲染这个元素

**⚠️ 注意：** 如果 CSS 设置该元素可见，那么 `hidden` 属性无效



**lang**

```html
<p lang="en">hello</p>
<p lang="zh">你好</p>
```

**作用：** 指定元素使用的语言，常见的语言代码如下：

- zh：中文
- zh-Hans：简体中文
- zh-Hant：繁体中文
- en：英语
- en-US：美国英语
- en-GB：英国英语
- es：西班牙语
- fr：法语



**dir**

```html
<div dir="rtl">文本方向从右到左!</div>
```

**作用：** 指定元素中文本显示的方向，取值如下：

- `ltr`：从左到右，例如：中文、英语
- `rtl`：从右到左，例如：阿拉伯语
- `auto`：让浏览器根据内容来判断文本方向，仅在文本方向未知时推荐使用



**translate**

```html
<p>
  你好 <span translate="no">JavaScript<span>
</p>
```

**作用：** 告诉翻译软件不翻译该文本，取值如下：

- 空字符串或者 `yes`：表示内容要被翻译
- `no`：表示内容不需要被翻译

**⚠️ 注意：** 

- `translate` 属性只适用于文本元素
- 该属性是枚举属性，使用时最好带上值



**contenteditable**

```html
<p contenteditable="true">点我可以修改我</p>
```

**作用：** 指定允许用户修改元素的内容，默认情况元素的内容是不能编辑的，取值如下：

- `true` 或空字符串：内容可以编辑
- `false`：内容不可以编辑

**⚠️ 注意：** 该属性是枚举属性，使用时最好带上值



**spellcheck**

```html
<p contenteditable="true" spellcheck="true">
  英语单词 separate 容易写错成 seperate。
</p>
```

**作用：** 对允许用户修改的内容进行拼写检查，拼写错误的单词会显示红色波浪线，取值如下：

- `true`：打开拼写检查
- `false`：关闭拼写检查

**⚠️ 注意：** 

- 该属性需要和 ` contenteditable="true"` 一起使用，否则该属性无效

- 该属性值是枚举属性，使用时最好带上值
- 不使用该属性时，由浏览器自行决定是否拼写检查



**`data-` 属性**

```html
<a href="#" class="tooltip" data-tip="this is the tip!">我是链接</a>
```

**作用：** 用于在元素上放置自定义数据

**⚠️ 注意：** `data-` 属性只能通过 CSS 或 JavaScript 使用



**事件处理属性**

```html
<div onclick="alert('你好世界')">点我出现你好世界</div>
```

**作用：** 用于响应用户的操作，这些属性的值都是 JavaScript 代码，具体可以参考[事件处理属性列表](https://wangdoc.com/html/attribute#事件处理属性)



## 字符编码

浏览器必须知道字符编码才能正常显示网页的文字，通过以下方式获取字符编码

1. 一般来说从服务器发送 HTML 网页时，会通过 HTTP 头信息声明网页的编码方式，如下：

   ```
   Content-Type: text/html; charset=UTF-8
   ```

   - `text/html` 是文件类型，表示 HTML 网页
   - `charset=UTF-8` 是指定网页的字符编码方式为 `UTF-8`

2. 网页内部通过 `<meta>` 标签再次声明网页文字的编码方式

   ```html
   <meta charset="UTF-8">
   ```

**⚠️ 注意：**

- 如果 HTTP 头信息里的编码方式和网页内部的编码方式不一致，则**优先使用 HTTP 头信息里的编码方式**
- 如果 HTTP 头信息里没有编码方式则使用网页内部的编码方式
- 建议 HTTP 头信息里的编码方式和网页内部的编码方式始终保持一致



**数字表示法**

网页可以使用不同语言的编码方式，**最常用的是 UTF-8**，UTF-8 是 Unicode 字符集的一种表达方式，该字符集设计目标是包含世界上所有字符

每一个字符都有一个**码点（code point）**，例如：英文字母 `a` 的码点是十进制的 `97`（十六进制的 `61`）

由于以下原因不是每一个 Unicode 字符都可以在 HTML 中显示

- 不是每一个 Unicode 字符都可以被打印出来，例如：换行符
- 小于号 `<` 和大于号 `>` 用来定义 HTML 标签，需要用到这两个符号时必须避免它们被解释成标签
- Unicode 字符过多，没有一种输入法或者键盘可以输入所有的字符
- 网页不允许混合使用多种字符编码

HTML 为了解决上述问题允许使用 Unicode 码点表示字符，浏览器会自动将码点转换为相应的字符，具体表示如下：

- `&#N;` 十进制，`N` 表示码点
- `&#xN;` 十六进制，`N` 表示码点

```html
<p>&#97;</p>
```

等价于

```html
<p>a</p>
```

**⚠️ 注意：** HTML 标签本身不能使用码点表示，浏览器会当做文本内容显示



**实体表示法**

因为数字表示法难以记忆，为了方便使用，HTML 为一些特殊字符规定了容易记忆的名字

例如：空格：`&nbsp;`，具体可以参考[特殊字符实体表示列表](https://wangdoc.com/html/encode#字符的实体表示法)

