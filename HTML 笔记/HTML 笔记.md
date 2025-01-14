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
- 路径：上例中是 `/path/to/index.html`，省略文件名默认情况是访问 `index.html`（取决于后台的配置）
- 查询参数：上例中是 `?key1=value1&key2=value2#anchor`，是键值对，以 `&` 分隔一组，与路径间用 `?` 分隔
- 锚点：上例中是 `#anchor`，页面跳转后会自动滚动到 `id` 为 `anchor` 元素所在的位置





