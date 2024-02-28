# 精通CSS：高级Web标准解决方案（第3版）

## 第一章 基础知识

**渐进增强：** 保证低版本浏览器基本功能实现的前提下再去增加效果、交互以及功能

**优雅降级：** 优先对最新的浏览器来设计网站，再对低版本浏览器修复较大的错误

可以通过以下两种方式进行渐进增强

1. 使用浏览器厂商前缀
   ```css
   .demo {
     -webkit-transform: translate(0,10px);
     -moz-transform: translate(0,10px);
     -ms-transform: translate(0,10px);
     /* 标准属性不要忘记加了，一定要放在厂商前缀声明的后面 */
     transform: translate(0,10px);
   }
   ```

2. 使用条件规则与检测脚本

   ```css
   @supports(display: grid) {
     /* 在支持网格布局的浏览器中要应用的规则 */
   }
   ```

**语义化标签和类名结合**

问题1：如果只使用 `div` 对文档没有任何语义作用，只是借助类名添加样式

```html
<div class="article">
  <div class="header">
    <h1>我是标题</h1>
  </div>
  <p>我是文本</p>
</div>
```

问题2：如果只使用语义化标签则存在标签(除 `main` 标签外)重复，导致样式重复

```html
<article>
  <header>
    <h1>我是标题</h1>
  </header>
  <p>我是文本</p>
</article>
```

解决以上两个问题可以将语义标签和类名结合起来

```html
<article class="post">
  <header class="post-header">
    <h1>我是标题</h1>
  </header>
  <p>我是文本</p>
</article>
```

**语义化扩展**

1. ARIA 的 `role` 属性，用于无障碍优化，针对辅助访问设备添加更多的语义

   `role` 属性相关的值：https://www.w3.org/TR/wai-aria-1.1/#role_definitions

   `aria-*` 相关属性和值：https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes

   ```html
   <a href="#" role="slider" aria-labelledby="volume-label" aria-valuemin="1" aria-valuemax="100" aria-valuenow="67"></a>
   ```

   `aria-labelledby`、`aria-valuemin`、`aria-valuemax`、`aria-valuenow` 属性也提供了额外的滑动条信息

   要使用 `<button>` 而不是使用 `<div role="button">`，**优先使用语义化标签**

2. 微格式，通过一组标准的类名定义来表示数据类型，便于开发者编写工具从中提取数据

   ```html
   <section class="h-card">
     <p>
       <a class="u-url p-name" href="https://github.com/wjw020206">CodePencil</a>
       <span class="p-org">Enterprises</span>
       <a class="u-email" href="mailto:info@mail.com">Email</a>
     </p>
     <p class="p-adr">
       <span class="p-locality">China</span>
       <span class="p-country-name">China</span>
     </p>
   </section>
   ```

3. 微数据，与语义化标签一起使用，把定义格式的事情交给了第三方，http://schema.org 是由Bing、Google、Yahoo! 等搜索引擎共同创建的词汇表

   ```html
   <section itemscope itemtype="http://schema.org/Person">
     <p>
       <a itemprop="name" href="https://github.com/wjw020206">CodePencil</a>
       <span itemprop="affiliation" itemscope itemtype="http://schema.org/Organization">
         <span itemprop="name">Enterprises</span>
       </span>
       <a itemprop="email" href="mailto:info@mail.com">Email</a>
     </p>
     <p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
       <span class="addressLocality">China</span>
       <span class="addressCountry">China</span>
     </p>
   </section>
   ```
   

## 第二章 添加样式

```html
<h2>我是h2标签</h2>
<p>我是p标签</p>
<span>我是span标签</span>
<p>我是p标签</p>
<p>我是p标签</p>
```

![image-20240222085606036](images/image-20240222085606036.png)

**相邻同辈选择符**

```css
h2 + p {
  color: blue;
  font-weight: 700;
  font-style: italic;
}
```

![image-20240222085637309](images/image-20240222085637309.png)

**一般同辈选择符**

```css
h2 ~ p {
  color: blue;
  font-weight: 700;
  font-style: italic;
}
```

![image-20240222085702940](images/image-20240222085702940.png)

**通用选择符**

```html
<div class="box1">
  <div>我的div标签</div>
  <span>我是span标签</span>
  <h2>我是h2标签</h2>
</div>
```

![image-20240222090210865](images/image-20240222090210865.png)

```css
.box > * {
  color: blue;
  font-weight: 700;
  font-style: italic;
}
```

![image-20240222090358303](images/image-20240222090358303.png)

**属性选择符**

- 匹配以某些字符开头的属性值

  ```html
  <a href="https://www.google.com">google</a>
  ```

  ```css
  a[href^="https:"] {
    /* 要设置的样式 */
  }
  ```

- 匹配以某些字符结尾的属性值

  ```html
  <img src="./cat.jpg" />
  ```

  ```css
  img[src$=".jpg"] {
    /* 要设置的样式 */
  }
  ```

- 匹配包含某些字符的属性值

  ```html
  <a href="https://www.google.com">google</a>
  ```

  ```css
  a[href*="google"] {
    /* 要设置的样式 */
  }
  ```

- 匹配以空格分隔的字符串的属性值

  ```html
  <a href="https://www.google.com" class="link active">google</a>
  ```

  ```css
  /* a[class~="active"] 也可以 */
  a[class~="link"] {
    /* 要设置的样式 */
  }
  ```

- 匹配指定值后连着一个短划线的属性值

  ```html
  <a href="https://www.google.com" class="web-link">google</a>
  ```

  ```css
  a[class|="web"] {
    /* 要设置的样式 */
  }
  ```

**伪元素**

- 选择一段文本的第一个字符

  ```css
  p::first-letter {
    font-size: 30px;
  }
  ```

- 选择一段文本的第一行

  ```css
  p::first-line {
    font-size: 30px;
  }
  ```

**伪类**

```html
<p class="comment" id="comment">我是一段文本</p>
```

![image-20240227115406287](images/image-20240227115406287.png)

- 选中目标(目标上必须同时要有 `class` 和 `id` 属性且值相同)

  ```css
  .comment:target {
    color: red;
  }
  ```

  但在页面的 URL 尾部加上 `#comment` 即可使样式被应用，例如：`http://example.com/index.html#comment`

  ![image-20240227132641931](images/image-20240227132641931.png)

- 反选目标(伪元素和它自身(`:` 前面的选择器)不能被反选)

  ```html
  <p class="comment">我是p标签里的一段文本</p>
  <div class="comment">我是div标签里的一段文本</div>
  ```

  <img src="images/image-20240227133242654.png" alt="image-20240227133242654" style="zoom: 67%;" />

  ```css
  /* 排除了p标签 */
  .comment:not(p) {
    color: red;
  }
  ```

  <img src="images/image-20240227133515415.png" alt="image-20240227133515415" style="zoom:67%;" />

**层叠**

- 作者样式表：网页开发者所编写的样式
- 用户样式表：用户通过浏览器设置为网站应用自己的样式
- 浏览器的默认样式表：一般都会比作者样式表覆盖

**优先级（从高到低排序）**

1. 标记了 `!important` 的用户样式(方便使用高对比度的无障碍模式)
2. 标记了 `!important` 的作者样式
3. 作者样式
4. 用户样式
5. 浏览器的默认样式

**超链接伪类的层叠次序**

1. `a:link`
2. `a:visited`
3. `a:hover`
4. `a:focus`
5. `a:active`

**继承**

任何直接应用给元素的样式都会覆盖掉继承的样式，继承的样式没有特殊性

- 字体属性：`font`、`font-family`、`font-size`、`font-style`、`font-weight`
- 文本属性：`text-align`、`text-indent`、`text-transform`、`text-decoration`、`word-spacing`、`letter-spacing`、`line-height`
- 颜色属性：`color`
- 列表属性：`list-style`

**为文档应用样式表**

- 直接把样式放在 `style` 标签中

- 使用 `link` 标签导入外部的样式表**（推荐）**

  ```html
  <link href="/c/modules.css" rel="stylesheet" />
  ```

- 使用 `@import` 指令加载外部的样式表

  ```html
  <style>
  	@import url("/c/modules.css");
  </style>
  ```

声明次序就是在源码中出现的次序

```html
<head>
  <link ref="stylesheet" href="css/sheet1.css" />
	<style>
		@import "css/sheet3.css";
  	h1 {
    	color: red;
  	}
	</style>
	<link ref="stylesheet" href="css/sheet2.css" />
</head>
```

若都使用相同特殊性的选择符，声明次序如下：

1. `sheet1.css` 中的样式
2. 导入 `style` 标签中 `sheet3.css` 中的样式
3. `style` 标签中的样式
4. `sheet2.css` 中的样式

最终应用的样式是 `sheet2.css` 中的样式，因为是最后声明的

**性能**

度量 Web 性能的一个重要指标就是网页的内容实际显示在屏幕上需要多久(**渲染时间**)

渲染一个网页至少需要两样东西：HTML 和 CSS

- 减少 HTTP 请求：因为每个文件都需要单独发送一次 HTTP 请求，需要花费一定的时间下载，因此在生产环境中把 CSS 文件数量控制在 1 或 2 个，并尽量不要使用 `@import` ，因为 `@import` 会发送额外的请求获取导入文件

- 压缩和缓存内容：使用 GZIP 压缩线上资源，通过 Web 服务器设置一定的 CSS 文件缓存时间

- 不要让浏览器渲染阻塞 JavaScript：如果在文档的 `head` 标签中加入了 `script` 标签，浏览器就必须先下载脚本再向用户显示网页内容，导致页面渲染被阻塞了

  - 主流做法是将 `script` 标签放入 `</body>` 标签结束之前加载 JavaScript

    ```html
    <body>
    	...
      <!-- 最后加载JavaScript -->
      <script src="script/index.js"></script>
    </body>
    ```

  - 现代做法是在 `head` 标签中放入 `script` 标签，但是要加上 `async` 和 `defer` 属性，具体使用哪个属性要看脚本中具体的内容

    ```html
    <head>
      <!-- 异步加载JavaScript，但下载后立即执行 -->
      <script src="script/index.js" async></script>
      <!-- 异步加载JavaScript，但在HTML解析后执行 -->
      <script src="script/core.js" defer></script>
    </head>
    ```

    

  
