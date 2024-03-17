# 精通 CSS：高级 Web 标准解决方案（第 3 版）

## 第一章 基础知识

**渐进增强：** 保证低版本浏览器基本功能实现的前提下再去增加效果、交互以及功能

**优雅降级：** 优先对最新的浏览器来设计网站，再对低版本浏览器修复较大的错误

可以通过以下两种方式进行渐进增强

1. 使用浏览器厂商前缀

   ```css
   .demo {
     -webkit-transform: translate(0, 10px);
     -moz-transform: translate(0, 10px);
     -ms-transform: translate(0, 10px);
     /* 标准属性不要忘记加了，一定要放在厂商前缀声明的后面 */
     transform: translate(0, 10px);
   }
   ```

2. 使用条件规则与检测脚本

   ```css
   @supports (display: grid) {
     /* 在支持网格布局的浏览器中要应用的规则 */
   }
   ```

**语义化标签和类名结合**

问题 1：如果只使用 `div` 对文档没有任何语义作用，只是借助类名添加样式

```html
<div class="article">
  <div class="header">
    <h1>我是标题</h1>
  </div>
  <p>我是文本</p>
</div>
```

问题 2：如果只使用语义化标签则存在标签(除 `main` 标签外)重复，导致样式重复

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
   <a
     href="#"
     role="slider"
     aria-labelledby="volume-label"
     aria-valuemin="1"
     aria-valuemax="100"
     aria-valuenow="67"
   ></a>
   ```

   `aria-labelledby`、`aria-valuemin`、`aria-valuemax`、`aria-valuenow` 属性也提供了额外的滑动条信息

   要使用 `<button>` 而不是使用 `<div role="button">`，**优先使用语义化标签**

2. 微格式，通过一组标准的类名定义来表示数据类型，便于开发者编写工具从中提取数据

   ```html
   <section class="h-card">
     <p>
       <a class="u-url p-name" href="https://github.com/wjw020206"
         >CodePencil</a
       >
       <span class="p-org">Enterprises</span>
       <a class="u-email" href="mailto:info@mail.com">Email</a>
     </p>
     <p class="p-adr">
       <span class="p-locality">China</span>
       <span class="p-country-name">China</span>
     </p>
   </section>
   ```

3. 微数据，与语义化标签一起使用，把定义格式的事情交给了第三方，http://schema.org 是由 Bing、Google、Yahoo! 等搜索引擎共同创建的词汇表

   ```html
   <section itemscope itemtype="http://schema.org/Person">
     <p>
       <a itemprop="name" href="https://github.com/wjw020206">CodePencil</a>
       <span
         itemprop="affiliation"
         itemscope
         itemtype="http://schema.org/Organization"
       >
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
  a[href^='https:'] {
    /* 要设置的样式 */
  }
  ```

- 匹配以某些字符结尾的属性值

  ```html
  <img src="./cat.jpg" />
  ```

  ```css
  img[src$='.jpg'] {
    /* 要设置的样式 */
  }
  ```

- 匹配包含某些字符的属性值

  ```html
  <a href="https://www.google.com">google</a>
  ```

  ```css
  a[href*='google'] {
    /* 要设置的样式 */
  }
  ```

- 匹配以空格分隔的字符串的属性值

  ```html
  <a href="https://www.google.com" class="link active">google</a>
  ```

  ```css
  /* a[class~="active"] 也可以 */
  a[class~='link'] {
    /* 要设置的样式 */
  }
  ```

- 匹配指定值后连着一个短划线的属性值

  ```html
  <a href="https://www.google.com" class="web-link">google</a>
  ```

  ```css
  a[class|='web'] {
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

- 使用 `link` 标签导入外部的样式表 **(推荐)**

  ```html
  <link href="/c/modules.css" rel="stylesheet" />
  ```

- 使用 `@import` 指令加载外部的样式表

  ```html
  <style>
    @import url('/c/modules.css');
  </style>
  ```

声明次序就是在源码中出现的次序

```html
<head>
  <link ref="stylesheet" href="css/sheet1.css" />
  <style>
    @import 'css/sheet3.css';
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

## 第三章 可见格式化模型

**盒模型**

<img src="images/image-20240303163217950.png" alt="image-20240303163217950" style="zoom: 50%;" />

**内边距：** 内边距是内容区周围的空间，**给元素应用背景会作用于元素的内容区和内边距**

```html
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background: url(./demo.jpg);
  /* 内边距 */
  padding: 50px;
}
```

<img src="images/image-20240303164512881.png" alt="image-20240303164512881" style="zoom:50%;" />

**边框：** 边框是在内边距的外侧增加的一条框线

```css
.box {
  width: 100px;
  height: 100px;
  background: url(./demo.jpg);
  padding: 50px;
  /* 边框 */
  border: 10px solid #000;
}
```

<img src="images/image-20240303164822694.png" alt="image-20240303164822694" style="zoom:50%;" />

**外边距：** 边框外侧的是外边距，围绕在盒子可见区域之外的透明区域

```css
.box {
  width: 100px;
  height: 100px;
  background: url(./demo.jpg);
  padding: 50px;
  border: 10px solid #000;
  /* 外边距 */
  margin: 50px;
}
```

<img src="images/image-20240303165534520.png" alt="image-20240303165534520" style="zoom:50%;" />

**轮廓线：** 在边框的外围画出一条线，**不会影响盒子的大小**，常用语调试和演示布局效果

```css
.box {
  width: 100px;
  height: 100px;
  background: url(./demo.jpg);
  padding: 50px;
  border: 10px solid #000;
  margin: 50px;
  /* 轮廓线 */
  outline: 10px solid red;
}
```

<img src="images/image-20240304084757348.png" alt="image-20240304084757348" style="zoom: 50%;" />

**盒子大小：** 通过修改 `box-sizing` 属性可以改变计算盒子大小的方式

- **content-box：** `box-sizing` 属性的**默认值**，此时盒子的大小不包含内边距和边框
- **border-box：** 此时盒子的大小包含了内边距和边框

**包含块：** 大部分情况下，包含块**指向一个元素最近的块级长辈元素(不仅指祖先元素也指父元素)**的内容区域

**包含块的作用：** 一个元素的尺寸和位置经常被它的包含块所影响，应用在 `width`、`height`、`padding`、`margin` 上的**百分比单位**以及 `absolute` 定位的元素偏移属性都是根据元素的包含块计算出来的，包含块就是计算的基准

```html
<div class="box">
  <!-- block是p标签的包含块,因为我是p标签从里到外找到的第一个块级长辈元素 -->
  <div class="block">
    <span>
      <p></p>
    </span>
  </div>
</div>
```

**标识一个包含块：** 取决于元素的 `position` 属性

1. 如果属性值是 `static`、`relative`、`sticky`，包含块通过最近**长辈元素**的**内容区域(content)**的边界来形成，长辈元素可以是一个块级容器(例如：`inline-block` 容器、`block` 容器、`list-item` 容器或者块级容器本身)，也可以是建立了格式化上下文(例如：`flex` 容器、`table` 容器、`grid` 容器或者块级容器本身)
2. 如果属性值是 `absolute`，包含块变成了最近的长辈元素的**内边距区域(padding)**，这个最近的长辈元素是指它的 `position` 的属性值不是 `static` (可以是 `fixed`，`absolute`、`relative` 或者 `sticky`)的元素，**忽略了内边距，体现了绝对定位的效果**
3. 如果属性值是 `fixed`，包含块由窗口(在连续媒体情况下)或者页面区域(在页面媒体情况下)所确定
   - **连续媒体**一般指音频或者运动视频
4. 如果属性值是 `absolute` 或者 `fixed`，包含块同样会变成最近的长辈元素的内边距区域，这个最近的长辈元素符合以下的条件
   1. `transform` 或者 `perspective` 的值不是 `none`
   2. `will-change` 属性值是 `transform` 或者 `perspective`
   3. `filter` 的值不是 `none` 或者 `will-change` 的值不是 `filter`(仅在 firefox 有效)
   4. `contain` 的值是 `paint`
5. 包含根元素 `html` 的矩形包含块被称为**初始包含块**，它有视口(对连续媒体)或者页面区域(对于页面媒体)的尺寸

**百分比单位(%)：** 某些属性给定一个百分比值，它的计算结果取决于与元素的包含块

1. `height`、`top` 还有 `bottom` 属性从它的包含块的 `height` 计算它的百分比值
2. `width`、`left`、`right`、`padding`、`margin` 都是从它的包含块的 `width` 计算它的百分比值

```html
<section>
  <p>This is a paragraph</p>
</section>
```

**案例 1：**

```css
body {
  background: beige;
}
section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}
p {
  width: 50%; /* 400px * 50% = 200px */
  height: 25%; /* 160px * 25% = 40px */
  margin: 5%; /* 400px * 5% = 20px */
  padding: 5%; /* 400px * 5% = 20px */
  background: cyan;
}
```

**解释：** `p` 元素的 `position` 属性为 `static`，所以它最近的包含块为 `section`，`p` 元素的 `width`、`padding` 、`margin` 百分比值根据 `section` 的**宽度**来计算，`height` 的百分比值根据 `section` 的**高度**来计算

**案例 2：**

```css
body {
  background-color: beige;
}
section {
  display: inline;
  background: lightgray;
}
p {
  width: 50%; /* 值为body宽度的一半 */
  height: 200px;
  background-color: cyan;
}
```

**解释：**因为 `section` 标签是**行内元素**，所以 `p` 标签的包含块为 `body`，`p` 标签的 `width` 是 `body` 的宽度的一半

**案例 3：**

```css
body {
  background-color: beige;
}
section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}
p {
  position: absolute;
  width: 50%; /* (400px + 20px * 2) * 50% = 220px */
  height: 25%; /* (160px + 30px * 2) * 25% = 55px */
  margin: 5%; /* (400px + 20px * 2) * 5% = 22px */
  padding: 5%; /* (400px + 20px * 2) * 5% = 22px */
  background-color: cyan;
}
```

**解释：** 因为 `p` 标签的 `position` 属性值为 `absolute`，因此会去寻找 `position` 属性值不是 `static` 的长辈元素作为包含块，`p` 标签的百分比值会受到包含块的 `padding` 的值的影响，因为绝对定位的元素的**包含块是长辈元素的内边距区域**，如果想要消除这个影响可以把长辈元素的 `box-sizing` 属性设置为 `border-box`，此时结果如下：

```css
body {
  background-color: beige;
}
section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
  /* 消除padding的影响 */
  box-sizing: border-box;
}
p {
  position: absolute;
  width: 50%; /* 400px * 50% = 200px */
  height: 25%; /* 160px * 25% = 40px */
  margin: 5%; /* 400px * 5% = 20px */
  padding: 5%; /* 400px * 5% = 20px */
  background-color: cyan;
}
```

**案例 4：**

```css
body {
  background-color: beige;
}
section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}
p {
  position: fixed;
  width: 50%; /* 屏幕宽度 * 50% */
  height: 50%; /* 屏幕高度 * 50% */
  margin: 5%; /* 屏幕宽度 * 5% */
  padding: 5%; /* 屏幕宽度 * 5% */
  background-color: cyan;
}
```

**解释：** 因为 `p` 元素的 `position` 值为 `fixed`，此时它的包含块是初始包含块(浏览器视口的大小)

**案例 5：**

```css
body {
  background-color: beige;
}
section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}
p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%; /* 400px * 50% = 200px */
  height: 25%; /* 160px * 25% = 40px */
  margin: 5%; /* 400px * 5% = 20px */
  padding: 5%; /* 400px * 5% = 20px */
  background-color: cyan;
}
```

**解释：** 因为 `p` 元素的 `position` 值为 `absolute`，`section` 的 `transform` 属性值不为 `none`，所以 `p` 元素的包含块为 `section`

在 CSS 中，**任何需要设置高度的时候都应该要谨慎**，元素的高度应该取决于所包含的内容，实在需要明确设定默认高度，**最好使用 `min-height`**，允许盒子的高度随内容扩展

**块级元素：** 显示为内容块或块级盒子的形式

- **沿垂直方向堆叠**，盒子垂直方向的间距由上、下外边距决定

**行内元素：** 内容显示为行内盒子的形式

- **沿文本水平排列**，会随着文本换行而换行

- 明确设置高度和宽度不会起作用

- 高度不受到**垂直方向上**的内边距、边框和外边距的影响

  ```html
  <div>TEST</div>
  <div class="box">
    <span>CodePencil</span>
  </div>
  ```

  ```css
  .box span {
    background-color: red;
    /* 行内元素高度不受垂直方向的内边距影响 外边距、边框同理 */
    padding-top: 10px;
  }
  ```

  ![image-20240305165157573](images/image-20240305165157573.png)

  ```html
  <div>TEST</div>
  <div class="box">
    <div>CodePencil</div>
  </div>
  ```

  ```css
  /* 把行内元素换成块级元素则高度改变 */
  .box div {
    background-color: red;
    padding-top: 10px;
  }
  ```

  <img src="images/image-20240305165249715.png" alt="image-20240305165249715" style="zoom: 67%;" />

**行盒子(line box 也叫行框)：** 由一行文本形成的水平盒子叫做行盒子，行盒子的高度由所包含的行内盒子决定，**修改行盒子的大小的唯一途径就是修改行高(line-height)或者内部的行内盒子设置水平方向的边框、内边距和外边距**

```html
<body>
  <p>Hello <span>JavaScript</span>!</p>
</body>
```

代码中 `<p>` 标签内部是一个行盒子 `<span>` 标签内部也是一个行盒子，有两个行盒子(嵌套的)

使用 `display: table` 可以让非表格元素采用表格的布局方式

```html
<div class="table">
  <div class="row">
    <div class="cell">列标题1</div>
    <div class="cell">列标题2</div>
    <div class="cell">列标题3</div>
  </div>
  <div class="row">
    <div class="cell">行1，列1</div>
    <div class="cell">行1，列2</div>
    <div class="cell">行1，列3</div>
  </div>
  <div class="row">
    <div class="cell">行2，列1</div>
    <div class="cell">行2，列2</div>
    <div class="cell">行2，列3</div>
  </div>
</div>
```

```css
.table {
  display: table;
  border-collapse: collapse;
  margin-top: 30px;
}
.row {
  display: table-row;
}
.row:first-child {
  font-weight: 700;
}
.cell {
  display: table-cell;
  padding: 10px;
  border: 3px solid #000;
  border-collapse: collapse;
}
```

<img src="images/image-20240306084510331.png" alt="image-20240306084510331" style="zoom:50%;" />

**块级元素：** 当元素的 `display` 属性为 `block`、`list-item`、`table` 时会被标记为块级元素，垂直排列，一行占一个，同时参与块级格式化上下文(BFC)，块级元素内部至少生成一个**块级盒**，也可能是**块级容器盒**

**块级盒：** 描述它与兄弟元素的表现方式

**块级容器盒：** 描述它与它的子元素的表现方式，一个块容器盒只包含其他块级盒，或者生成一个行内格式化上下文来只包含行内盒

**块盒：** 指既是块级盒也是块级容器盒

```html
<div class="blockContainerBox" style="background: red; height: 100px">
  <div
    class="blockLevelBox"
    style="background: blue; height: 20px; width: 20px"
  ></div>
  <div
    class="inlineBlockBox"
    style="
      background: green;
      height: 20px;
      width: 20px;
      display: inline-block;
    "
  ></div>
  <div
    class="inlineBlockBox"
    style="
      background: green;
      height: 20px;
      width: 20px;
      display: inline-block;
    "
  ></div>
</div>
```

<img src="images/image-20240309153304050.png" alt="image-20240309153304050" style="zoom:50%;" />

因为 `blockContainerBox` 既块级盒也是块级容器盒，被称为**块盒**，因为块级盒内部只能包含其他块级盒或者生成一个行内格式化上下文来只包含行内盒，但是 `blockContainerBox` 内部既包含了块级盒，也包含了两个行内盒，浏览器会自动生成一个**匿名块盒**来包裹两个行内盒，匿名块盒会生成一个行内格式化上下文来包含两个行内盒

<img src="images/image-20240309195031576.png" alt="image-20240309195031576" style="zoom: 45%;" />

**行内级元素：** 当 `display` 属性设置为 `inline`、`inline-block`、`inline-table` 时，这些盒子会被标记为行内级元素，在水平方向上排列，如果宽度不够会自动换行

**替换元素：** 指具有内在尺寸的元素，如 `img`、`video` 等，它们的尺寸不受到外部样式的影响

**非替换元素：** 指没有内在尺寸的元素，如 `span`、`div` 等，它们的尺寸会受到外部样式的影响

**行内盒(行盒子)：**当**行内级元素参与行内格式化上下文**后被称为行内盒，所有的 `display: inline` 的非替换元素生成的盒都是行内盒

```html
<p>台湾是<strong>中国不可分割的领土</strong></p>
```

<img src="images/image-20240311092651980.png" alt="image-20240311092651980" style="zoom:50%;" />

因为 `p` 标签是块盒，内部包含了行内元素所以生成的行内格式化上下文来包含行内元素，此时为**台湾是**这三个字生成的了匿名的行内盒，也为 `strong` 标签本身也是行内盒，所以在水平方向上排列

<img src="images/image-20240311093742400.png" alt="image-20240311093742400" style="zoom:50%;" />

**外边距折叠**

> 行内盒子和浮动盒子以及绝对定位盒子外边距不会发生折叠，外边距折叠只发生在常规文档流中的块级盒子的垂直方向上的外边距

- 上方**块盒子**和下方**块盒子**的上下外边距相互折叠

<img src="images/image-20240316101648253.png" alt="image-20240316101648253" style="zoom: 50%;" />

- 一个**块盒子**内部包含另一个**块盒子**，且**没有内边距或边框来分隔外边距**的情况下上下外边距也会发生折叠

<img src="images/image-20240316102943537.png" alt="image-20240316102943537" style="zoom:50%;" />

这样设计的好处就是当块盒子的内容区没有高度的时候，盒子的上外边距和下外边距会折叠成一个边距

<img src="images/image-20240316103823595.png" alt="image-20240316103823595" style="zoom: 67%;" />

折叠后的外边距又碰到其它块盒子又会继续折叠

<img src="images/image-20240316103857337.png" alt="image-20240316103857337" style="zoom:67%;" />

**浮动**

当块级元素浮动时宽度和高度会**收缩为其中内容最小的宽度和高度**，除非明确设定其宽度和高度

```html
<div class="box">box1</div>
<div class="box">box2</div>
<div class="box">box3</div>
```

```css
.box {
  background-color: red;
  float: left;
}
.box:nth-of-type(3) {
  float: right;
}
```

<img src="images/image-20240316105125960.png" alt="image-20240316105125960" style="zoom:50%;" />

**清除浮动**

> 浮动元素会脱离文档流，影响常规文档流的元素

没有应用浮动的情况下

```html
<img src="./demo.jpg" />
<p>
  我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本
</p>
<p>
  我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本
</p>
```

<img src="images/image-20240316110013004.png" alt="image-20240316110013004" style="zoom: 33%;" />

给图片应用浮动，虽然 `p` 标签忽视了浮动元素，但是内部的文本(行盒子)依旧在排布时避开图片，形成了文字环绕图片的效果，**浮动就是为了在网页中显示文字环绕图片效果而引入的**

```css
img {
  width: 200px;
  float: left;
}
```

<img src="images/image-20240316110220937.png" alt="image-20240316110220937" style="zoom:33%;" />

要想阻止行盒子环绕在浮动元素外面的行为，需要给包含行盒子的元素添加 `clear` 属性，用于指定元素哪一侧不挨着浮动元素

```css
p:nth-of-type(2) {
  /* 让第二段文本的左侧不挨着浮动元素 */
  clear: left;
}
```

<img src="images/image-20240316224256956.png" alt="image-20240316224256956" style="zoom:33%;" />

**注意：** 此时浏览器会在这个 **清除浮动的元素的上方添加做够大的外边距**，使得行盒子不紧挨着浮动元素，这个行为通过浏览器的开发者工具是无法查看到的，如果要给这个清除浮动的元素添加外边距需要值大于浏览器添加的外边距才会生效

```css
p:nth-of-type(2) {
  clear: left;
  /* 假设浏览器添加的外边距是42px，此时10px小于42px，因此外边距没有效果 */
  margin-top: 10px;
}
```

<img src="images/image-20240316224256956.png" alt="image-20240316224256956" style="zoom:33%;" />

```css
p:nth-of-type(2) {
  clear: left;
  /* 假设浏览器添加的外边距是42px，外边距100px大于42px，外边距生效 */
  margin-top: 100px;
}
```

<img src="images/image-20240316225313475.png" alt="image-20240316225313475" style="zoom:33%;" />

因为浮动元素不会占据文档流，所以导致**包含浮动元素的盒子无法生成高度**，此时可以使用伪元素创建一个空元素来清除浮动，使得包括浮动元素的盒子可以生成高度

```html
<div class="media-block">
  <img src="./demo.jpg" class="media-fig" />
  <div class="media-body">
    <h3>这是文章的标题</h3>
    <p>简要说明</p>
  </div>
</div>
```

```css
.media-block {
  background-color: gray;
  border: 1px solid black;
}
.media-fig {
  float: left;
  width: 30%;
}
.media-body {
  float: right;
  width: 65%;
}
/* 通过伪元素清除两边的浮动，使得外部容器可以生成高度 */
.media-block::after {
  content: '';
  display: block;
  clear: both;
}
```

![image-20240316231127136](images/image-20240316231127136.png)

**格式化上下文**

> 浏览器在摆放盒子的时候会通过盒子的类型生成格式化上下文
>
> 分为**块级格式化上下文(Block Formatting Context)** 和**行内格式化上下文(Inline Formatting Context)**

- **块级格式化上下文(Block Formatting Context)**

  创建了块级格式化上下文的元素规定了内部的块级盒如何布局，并使该盒子在页面上形成一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

  _下列情况将创建一个块格式化上下文：_

  - 根元素 ( html )
  - 浮动 (元素的 `float` 属性值不为 `none` )
  - 绝对定位元素 (元素的 `position` 属性值为 `fixed` 或 `absolute` )
  - 行内块 (元素的 `display: inline-block` )
  - 表格单元格 (元素的 `display: table-cell`，HTML 表格单元格默认属性 )
  - 表格标题 (元素的 `display: table-caption`，HTML 表格标题默认属性 )
  - `overflow` 的属性值不为 `visible` 的元素
  - 弹性元素 ( `display: flex` 或 `display: inline-flex` 的元素的**直接子元素** )
  - 网格盒子 ( `display: grid` 或 `display: inline-grid`的元素的**直接子元素** )

  详细参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context

> PS：直接子元素是指一个元素的直接下级子元素，例如 A 元素中包含着 B 和 C，那 B 和 C 就是 A 元素的直接子元素

**作用：**

1. 在一个块级格式化上下文内部的盒子会在垂直方向，从顶部一个接着一个地放置

2. 同一个块级格式化上下文的相邻的两个盒子的垂直外边距会发生折叠

3. 在一个块级格式化上下文中每个元素外边距 (margin) 都会与其父元素左侧边框 (border) 开始，不会超出包含块的边界，即使存在浮动也是如此

4. 块级格式化上下文区域中的内容不会与浮动元素发生遮挡

   ```css
   <div class="media-block">
     <img src="./常用头像.jpg" class="media-fig" />
     <div class="media-body">
       <h3>这是文章的标题</h3>
       <p>
         简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明简要说明
       </p>
     </div>
   </div>
   ```

   ```css
   .media-block {
     background-color: gray;
     border: 1px solid black;
   }
   .media-fig {
     float: left;
     width: 30%;
   }
   .media-body {
     margin-left: 10px;
     background-color: red;
     /* 创建BFC区域，与浮动元素不会发生遮挡 */
     overflow: auto;
   }
   ```

   ![image-20240317093609105](images/image-20240317093609105.png)

5. 计算块级格式化上下文区域高度时，浮动元素也会参与计算

   ```css
   .media-block {
     background-color: gray;
     border: 1px solid black;
     /* 创建BFC区域，计算高度时包含浮动元素 */
     overflow: auto;
   }
   .media-fig {
     float: left;
     width: 30%;
   }
   .media-body {
     margin-left: 20px;
   }
   ```

   ![image-20240316231127136](images/image-20240316231127136.png)

- **行内格式化上下文(Inline Formatting Context)**

  在行内格式化中，盒子一个接着一个地水平排列，起点是包含块的顶部，**水平方向上的内边距，边框以及外边距可以正常使用**

  - 对于非替换元素，如：`a`、`span` 等没有默认大小的元素**无法在垂直方向上正常使用内边距、边框和外边距**
  - 对于替换元素，如：`input`、`img` 等有默认大小的元素可以**可以在垂直方向上正常使用内边距、边框和外边距**

**内在大小和外在大小**

CSS3 定义了一组应用给 ( `min-` 和 `max-` ) `width` 和 `height` 属性的关键字，要么继承周围上下文的大小(外在大小)要么继承元素自身内容的大小(内在大小)，将某个属性值设置为 `auto` 可以在不设置 `width` 的情况下达到收缩自适应的目的

**CSS 布局模块**

- 弹性盒布局 (flex box)
- 网格布局 (grid layout)：目标是取代浮动和定位元素的布局方式
- 多栏布局 (Multi-column Layout Module)：实现像报纸那样内容的多栏布局，可以指定栏数，也可以指定每一栏的宽度，让浏览器根据宽度自动确定栏数，主要用于控制文字排版
