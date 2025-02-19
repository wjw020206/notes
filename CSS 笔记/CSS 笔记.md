# CSS 笔记

CSS 英文全称为 **Cascading Style Sheets**，中文翻译为 “层叠样式表”



## 术语解释

**声明** 

解释：CSS 的一行，由一个属性和一个值组成

```css
color: red;
```



**声明块**

解释：包含在大括号内的一组声明。声明块前有一个**选择器**(例如下方的 `body`)

```css
body {
  color: black;
  font-family: Helvetica;
}
```



**规则集（ruleset）**

解释：由声明块和选择器组成，一个规则集也简称为一个**规则（rules）**，例如前面的整个代码就是一个规则集



**@规则（at-rules）**

解释：指用 `@` 符号开头的语法，例如：`@import` 和 `@media`



## 层叠



### 规则

当声明冲突时，会按照以下规则顺序解决冲突

1. 样式表的来源
2. 选择器优先级
3. 在源码中的顺序

![image-20250218085222941](images/image-20250218085222941.png)



### 样式表的来源

样式表有以下来源：

- **用户代理样式表（User Agent Styles）：** 浏览器的默认样式，例如：`<h1>` 标签自带加粗和字体大小以及外边距的默认样式
- **用户样式表（User Styles）：** 用户通过浏览器插件(如 `Stylus` 插件)、浏览器设置或开发者工具定义的样式，较少见
- **作者样式表（Author Styles）：** 网页的开发者（即 “作者”）编写的样式表，根据定义位置可以分为如下：
  - 外部样式表：通过 `<link>` 标签引入的外部 CSS 文件
  - 内部样式：在 HTML 内部使用 `<style>` 标签定义的样式
  - 行内样式(内联样式)：通过元素的 `style` 属性直接定义的样式



### 样式表的优先级

样式表的优先级由低到高如下：

1. 用户代理样式表
2. 用户样式表
3. 作者样式表
   1. 外部样式表
   2. 内部样式表
   3. 行内样式表(内联样式表)
   4. 外部样式表的 `!important`
   5. 内部样式表的 `!important`
   6. 行内样式(内联样式)的 `!important`

**⚠️ 注意：不推荐在行内样式中使用 `!important`，因为优先级最高，无法被覆盖修改**



### 选择器的优先级

选择器的优先级由低到高如下：

| 选择器                                                       | 优先级标记 |
| ------------------------------------------------------------ | ---------- |
| 通用选择器（`*`）和组合器（`>`、`+`、`~`）                   | `(0,0,0)`  |
| 标签选择器（`p`）                                            | `(0,0,1)`  |
| 伪类选择器（`:hover`）、属性选择器（`[type="text"]`）、类选择器（`.class`） | `(0,1,0)`  |
| ID 选择器（`#id`）                                           | `(1,0,0)`  |

同时使用多个类型的选择器会让它们的优先级标记进行个数计算，例如 `(1,2,2)` 表示选择器由 1 个 ID 选择器、2 个类选择器、2 个标签选择器组成



### 源码顺序

当两个声明的来源和选择器优先级相同，这时哪个声明最晚出现，则使用哪个声明

**⚠️ 注意： 给链接添加样式时一定要按照正确的顺序书写选择器**

**❌ 错误的顺序**

```css
a:hover {
  text-decoration: underline;
}

a:link {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: purple;
}

a:active {
  color: red;
}
```

![image-20250219074724302](images/image-20250219074724302.png)

此时 `a:hover` 的样式被 `a:link` 的样式覆盖，导致鼠标悬浮链接时不显示下划线



**✔️正确的顺序**

```css
a:link {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: purple;
}

a:hover {
  text-decoration: underline;
}

a:active {
  color: red;
}
```

![image-20250219075335931](images/image-20250219075335931.png)

顺序记忆口诀：“LoVe/HAte”（“爱/恨”），其中 L 表示 `link`，V 表示 `visited`，H 表示 `hover`，`A` 表示 `active`



**层叠值**

一个声明在样式表来源、选择器优先级、以及源码顺序中胜出，最终使用的值被称为 “层叠值”

元素的每个属性最多只有一个层叠值，元素上一个属性都没指定，则该属性没有层叠值

```css
p {
  margin-top: 20px; /* 外部样式 */
}

#main p {
  margin-top: 30px; /* 内部样式 */
}

p {
  margin-top: 40px; /* 内联样式 */
}
```

上述代码中，因为样式来源中内联样式的优先级最高，所以 `<p>` 元素的 `margin-top` 属性的层叠值为 `40px`



### 最佳实践

处理层叠时的建议：

1. 不使用 ID 选择器来添加样式：因为 ID 选择器优先级过高，需要使用其它的 ID 选择器或者 `!important` 才能覆盖
2. 不使用 `!important`：比 ID 选择器更难覆盖，要覆盖就需要添加 `!important`，当很多声明都添加了 `!important` 时，就又会从样式表来源、选择器优先级以及源码顺序来比较了

**⚠️ 注意：** 在特殊情况中，上述两条建议不必死板遵守



创建用于分发的 NPM 包的建议：

1. 不要在 JavaScript 中使用行内样式：会导致想修改属性需要使用 `!important`
2. 在包中包含一个样式表，通过 JavaScript 来给元素添加或删除类：方便用户可以编辑其中的样式



## 继承

如果一个属性没有层叠值，则可能会继承祖先元素的值，继承是顺着 DOM 树向下传递的

![image-20250219111249767](images/image-20250219111249767.png)

例如在 `<body>` 标签中添加 `font-family` 属性，则 `<body>` 标签内的所有元素都会继承这个字体

```css
body {
  font-family: sans-serif;
}
```

**⚠️ 注意： 不是所有的属性都是能被继承的**，通常只有文本相关属性（例如：`color`、`font-family`、`font-style` 等）、列表相关属性（例如：`list-style`、`list-style-image` 等）以及表格的边框属性（例如：`border-collapse` 和 `border-spacing`）等可以被继承



## 特殊值

**inherit**

`inherit` 用于继承父元素的属性值

```css
a:link {
  color: blue;
}

.footer {
  color: #666;
}

.footer a {
  /* 该属性值会继承父元素的值，此处继承的层叠值为#666 */
  color: inherit;
}
```

**⚠️ 注意：** `inherit` 可以使任何属性的值强制继承父元素的值，例如继承父元素的外边距，**但是这样很少使用**



**initial**

`initial` 用于将某个属性的值重置为默认值

```js
a:link {
  color: blue;
}

.footer a {
  /* 该属性值会重置为默认值，color的默认值通常为black */
  color: initial;
}
```

**⚠️ 注意：** `display` 属性的默认值为 `inline`，而**不是根据元素类型来确定 `display` 属性的默认值**

