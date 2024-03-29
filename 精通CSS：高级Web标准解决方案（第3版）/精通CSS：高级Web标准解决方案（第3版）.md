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

<img src="images/image-20240303163217950.png" alt="image-20240303163217950" style="zoom:50%;" />

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

## 第四章 网页排版

**字体族：** 属性值是一个备选列表，按优先级从左到右排版

```css
body {
  font-family: 'Georgia Pro', Georgia, Times, 'Times New Roman', serif;
}
```

**注意：** 字体族名中包含空格或者其它非标准符号时推荐加上双引号，以防浏览器误判

**通用字体族：** 充当没有选择的选择

- `serif` 表示由浏览器选择一种衬线字体
- `sans-serif` 表示由浏览器选择一种无衬线字体
- `monospace` 表示由浏览器选择一种等宽字体，适用于显示代码

**字体大小和行高**

几乎所有的浏览器中 `font-size` 的默认大小为 `16px`

```css
h3 {
  font-size: 1.314em; /* 16px * 1.314 = 21.024px */
}
```

`em` 应用在 `font-size` 属性上时是元素继承的 `font-size` 的缩放因子，设置 `em` 比设置 `px` 更加灵活，使用 `131.4%` 和 `1.314em` 效果是一样的，没有区别

**问题：** 当元素和元素继承的 `font-size` 属性都使用 `em` 单位会出现变成例如：`1.314em` \* `1.314em`，导致与设计稿不符

要解决这个问题可以使用 `rem` ，`rem` 也是缩放因子，始终根据 `html` 元素的 `font-size` 属性值来缩放

**基于比例缩放的字形型大小**

> `font-size` 设置多大，没有固定的标准

可以设置各级标题大小符合 **纯四度** 的数学比例，或者其它比例也可以，尽量维持类似的比例关系，具体可以参考

https://www.modularscale.com

**行间距、对齐及行盒子的构造**

如果行盒子中包含多个行高不一的行内盒子，那行盒子的最终高度至少等于其中的最高的行内盒子

一般来说行高取 **1.2 ~ 1.5** 的范围内，行与行之间不能太密也不能太疏

```css
body {
  font-family: 'Georgia Pro', Georgia, Times, 'Times New Roman', serif;
  line-height: 1.5; /* 16px * 1.5 = 24px */
}
```

可以给 `line-height` 指定 `em`、`px` 或 `%`

**注意：** 上方的代码中 `body` 元素的所有的子元素都会继承 `line-height` 的 **计算值** ，也就是说如果你使用带有单位的值，例如 `em` 或 `%`，子元素继承的是计算后的 `px` 单位的值，如果你 **使用无单位的值就不会导致这个结果** ，子元素继承的是一个系数

**垂直对齐**

除了 `line-height`，行内盒子也会受到 `vertical-align` 属性的影响，默认值是 `baseline`

**注意：** 影响行间距的不只有 `line-height`，还有 `vertical-align` 可能会扩展行盒子的高度，行内块和图片的垂直对齐稍有不同，因为它们不一定有自己的唯一基线

**文本粗细**

`font-weight` 默认值为 `normal` 对应 `400`，加粗 `bold` 对应 `700`，一些字体包含很多粗细的变体，当你使用对应的粗细时就会使用对应的字体的粗细变体，如果字体中没有对应的粗细变体，浏览器会尽量模拟加粗的效果，**但是不能模拟变细的效果**，模拟效果都不太理想

**字体样式**

```css
i {
  font-style: italic;
}
```

与 `font-weight` 类似，会从字形中选择斜体变体显示，如果不存在这个变体则浏览器会尽量模拟，模拟效果不太理想

**大小写变化**

```css
h1 {
  text-transform: uppercase; /* 文字转换为大写字母显示 */
  text-transform: uppercase; /* 文字转换为大写字母显示 */
  text-transform: none; /* 文字根据源码默认大小字母显示(默认) */
}
```

**小型大写变体**

可以把英文文本转换为小型大写变体，**小型大写变体中其它字母都是大写，只有首字母是正常大小**，正确的小型大写变体很大程度上是根据字母的字型来变化的，不过能做到这一点的大多都是付费字体，`font-variant` 会影响行盒子的高度

```css
<p class="normal">Firefox rocks!</p>
<p class="small">Firefox rocks!</p>
```

```css
p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
```

<img src="images/image-20240318085347751.png" alt="image-20240318085347751" style="zoom:67%;" />

**注意：** 只有当首字母是小写的时候，首字母同样也会变成大写并缩小

```html
<p class="normal">firefox rocks!</p>
<p class="small">firefox rocks!</p>
```

<img src="images/image-20240318085623533.png" alt="image-20240318085623533" style="zoom:67%;" />

**控制字母和单词间距**

> 人为的改变字母间距不是一件好事，大多数字体设计间距的初衷是让人更容易识别单词

默认词距是由当前字体中空白字符的宽度决定的，以下规则在默认词距上增加 `0.1em`

```css
p {
  word-spacing: 0.1em;
}
```

**注意：** `word-spacing` 用于控制词间距，该属性很少使用

同样的，`letter-spacing` 也可以控制字符间的间距

```css
p {
  letter-spacing: 0.1em;
}
```

**版心宽度**

> 行长(版心宽度)影响阅读体验，过长或过短的文本都会打断人的眼球移动

在大屏幕中的网页主体内容的文本行长通常是 45 ~ 75 个字符，平均值是 66 个字符

对于小屏幕(远距离观看的大屏幕或者投影)而言行长至少也应该有 40 个字符

要控制行长可以通过设定文本的段落、标题等元素的宽度来实现

```css
article {
  /* 例如 Georgia 字体平均每个字符0.5em宽 36em / 0.5em = 72个字符 */
  max-width: 36em;
  margin: 0 auto;
}
```

**注意：** 如果视口宽度小于 `max-width` ，该元素会自动调整宽度

**文本缩进与对齐**

> 默认情况下文本是左对齐的，文本左对齐有助于眼睛找到下一行，保持阅读节奏

对于连续的段落或者相邻的段落可以设置一行外边距或首行缩进

```css
p + p {
  text-indent: 1.25em;
}
```

<img src="images/image-20240318211527310.png" alt="image-20240318211527310" style="zoom: 33%;" />

**毛边**

> 如下图，文章的右侧参差不齐，在术语上叫做 **毛边**

<img src="images/image-20240318211715682.png" alt="image-20240318211715682" style="zoom:33%;" />

虽然毛边没有什么大的影响，但是当文本水平居中时会导致两边都形成毛边，从而影响可读性

<img src="images/image-20240318212100916.png" alt="image-20240318212100916" style="zoom: 33%;" />

要解决上述这个问题，可以使用 `text-align: justify;` 让单词平分间距，使两边对齐，以此来消除毛边

<img src="images/image-20240318221351298.png" alt="image-20240318221351298" style="zoom: 33%;" />

**注意：** 由于屏幕大小的不同，安装字体的不同以及浏览器的引擎不同等原因都会影响用户看到的结果，如果此时使用 `text-align: justify;` 可能会发生文本空白构成的 **串流** ，版心宽度越小越严重

<img src="images/image-20240319060044893.png" alt="image-20240319060044893" style="zoom: 50%;" />

浏览器处理文本两端对齐时使用的算法很 **粗糙** ，不如传统的出版效果好，虽然可以通过修改 `text-justify` 属性来修改所使用的算法，但是浏览器对多个值的支持较弱，基本上 **只涉及调整非西方语言的字形和单词**

但 IE 浏览器中支持 `text-justify` 属性的值中有一个非标准值 `newspaper` ，使用了更聪明的算法，该算法会同时调整字母间距和单词间距

**书写方向**

```html
<!-- 表示文字从右往左书写 -->
<p dir="rtl">我是文本</p>

<!-- 表示文字从左往右书写 -->
<p dir="ltr">我是文本</p>
```

```css
p {
  text-align: start;
}
```

**注意：** 当 `dir` 的值为 `rtl` 时，使用 `text-align: start;` 的方向从原先的右对齐编程了左对齐，浏览器会自动反转默认的文本方向

**连字符**

想要缓解串流的情况可以使用连字符，可以手工在 HTML 中敲入连字符 `&shy;`，连字符会在需要断词换行的时候显示

![image-20240319062033352](images/image-20240319062033352.png)

但是手动添加软连字符不现实，可以使用 `hyphens` 属性让浏览器自动插入连字符

1. 首要将 HTML 的语言模式设置为 `en`

   ```html
   <html lang="en"></html>
   ```

2. 在相关元素上添加 `hyphens` 属性

   ```css
   p {
     hyphens: auto;
   }
   ```

   **注意：** 如果要关闭连字符则将 `hyphens` 属性值设置为 `manual`，即手动模式

**多栏文本**

对于大屏幕来说把整篇文章设置版心宽度太浪费空间了，可以把文本分成多栏，限制每栏的宽度

<img src="images/image-20240319063045714.png" alt="image-20240319063045714" style="zoom: 33%;" />

```css
article {
  max-width: 70em;
  columns: 20em; /* 设置每栏最小的宽度 */
  columns-gap: 1.5em; /* 设置每栏之间的间隔 */
  margin: 0 auto;
}
```

<img src="images/image-20240319063716215.png" alt="image-20240319063716215" style="zoom:50%;" />

`columns` 属性是 `column-count` 和 `column-width` 属性的简写形式

- 如果只设置 `column-count` 属性则浏览器会严格生成指定数量的栏，不管宽度如何
- 如果同时设置了 `column-count` 和 `column-width` 属性，则前者会作为最大栏数，后者作为最小栏宽

`columns: 20em;` 等同于在保证最小宽度 `20em` 的前提下自动设置栏数，等同于 `column-width: 20em;`

`columns: 3;` 等同于保证三栏，自动设置宽度，等同于 `column-count: 3;`

`columns: 3 20em;` 至少三栏，每栏栏宽至少 `20em` ，等同于 `column-count: 3;` 和 `column-width: 20em;` 同时使用

在不支持多栏属性的浏览器中可以在段落元素上设置 `max-width` ，旧版浏览器只会显示一栏，但可以确保可读性

```css
article > p {
  max-width: 36em;
}
```

**跨栏**

可以让某些元素排在栏内文本流之外，强制伸长它们来达到跨行的效果

```css
h1 {
  /* 拉长标题横跨所有行 */
  column-span: all;
}
```

`column-span: none;` 可以关闭跨栏特性

<img src="images/image-20240319082939261.png" alt="image-20240319082939261" style="zoom: 33%;" />

如果给分栏中的元素设置 `column-span: all;` ，效果如下

<img src="images/image-20240319083516390.png" alt="image-20240319083516390" style="zoom:33%;" />

**垂直律动与基线网格**

在网页设计中要保证基线准确比较麻烦，例如在多栏文本中因为标题的存在导致各栏文本没有严格对齐

<img src="images/image-20240319084647372.png" alt="image-20240319084647372" style="zoom:33%;" />

要解决这个问题可以**让标题的上外边距、行高和下外边距加起来等于正文行高值的整数倍**

**Web 字体**

使用 Web 字体有一个问题，就是 **许可** ，目前多数字体的设计者都施加了安全限制，例如只允许从指定的域名下载字体或者要求定期修改字体名以防止盗链

使用字体最简单的方式可以使用 **Web 字体托管服务**，许可问题交给它们处理，只需要关心如何使用这些字体

- 收费的
  1. https://fonts.adobe.com
  2. https://www.typography.com/user-guide/included
  3. https://www.fonts.com
- 免费的
  1. https://fonts.google.com

**@font-face 规则**

嵌入 Web 字体的关键是使用 `@font-face` 规则

```css
@font-face {
  font-family: Vollkorn;
  font-weight: bold;
  src: url('fonts/vollkorn/Vollkorn-Bold.woff') format('woff');
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Vollkorn;
  font-weight: bold;
}
```

在 `font-family` 的值为 `Vollkorn` 并且 `font-weight` 的值为 `bold` 时才会应用这个规则，之后通过 `url()` 提供浏览器下载包含粗体字体的字体格式，字体格式每个浏览器支持程度都不一样，好在所有浏览器都支持标准的 WOFF 格式，有的支持较新的 WOFF2 格式

对于 IE8 之前的浏览器需要使用以下的兼容性写法来解决对字体格式支持不一致的问题

```css
@font-face {
  font-family: Vollkorn;
  src: url('fonts/Vollkorn-Regular.eot#?ie') format('embedded-opentype'), url('fonts/Vollkorn-Regular.woff2')
      format('woff2'), url('fonts/Vollkorn-Regular.woff') format('woff'), url('fonts/Vollkorn-Regular.ttf')
      format('truetype'), url('fonts/Vollkorn-Regular.svg') format('svg');
}
```

**字体描述符**

- `font-family` 必需，字体族的名称
- `src` 必需，URL 或 URL 列表，用以下载字体
- `font-weight` 可选的字体粗细，默认值为 `normal`
- `font-style` 可选的字体样式，默认值为 `normal`

**注意：** 这些属性在 `@font-face` 中的意义和通常规则中的不一样，**它们不会改变字体** ，只是为了告诉浏览器什么样的情况用特定的字体

如果不小心把 `font-weight` 设置为字体族名称，其它粗细的依旧可以使用这里的字体，因为浏览器加载选择字体的原则是：正确的 `font-family` 优先于正确的粗细值

在使用时容易的犯的错误是在 `@font-face` 块中把 `font-weight` 属性设置为 `normal` ，而在使用时却把 `font-weight` 属性设置为 `bold`，导致浏览器以为这个字体没有相应的加粗变体，会在原来字体粗细的基础上进行**模拟加粗**

**Web 字体浏览器性能**

在网页是实践应用中存在一些麻烦

- 浏览器需要下载额外的字体文件，会延长用户的等待时间，所以要注意不要加载过多的字体文件，自己托管的自定义字体要确保设置适当的缓存首部

- 浏览器在渲染字体时也存在问题，浏览器在下载 Web 字体时有两种处理方式
  1. 在字体下载完成前暂缓显示文本，这种方式的术语是 **FOIT(flash of invisible text)** ，Safari、Chrome 和 IE 浏览器默认使用这种方式，**缺点是如果网络速度很慢，用户必需等待字体下载完成才能看到内容**
  1. 在字体下载完成前使用备用的字体显示内容，**缺点是会带来字体切换闪动的问题，特别是备用字体和 Web 字体大小相差很多的情况下，存在网页内容跳跃过大，用户会失去焦点**

想要更好的处理 Web 字体和备用字体之间的切换，可以使用 JavaScript 加载字体

[CSS Font Loading 规范](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Font_Loading_API) 定义了一个用来加载字体的实验性 JavaScript API，但不是所有的浏览器都支持，需要借助第三方库来实现一致的字体加载体验

Web Font Loader：https://github.com/typekit/webfontloader

这个库在浏览器支持的情况下会用原生的字体加载 API，在浏览器不支持的情况下会模拟相同的功能，也支持 Web 字体服务

## 第五章 漂亮的盒子

**背景颜色**

`background` 与 `background-color` 属性有什么区别？

前者是一个简写属性，可以一次性设置多个与背景相关的属性，后者只能设置背景颜色

```css
body {
  background: #bada55;
}
```

**注意：** `body` 没有设置高度依旧可以显示出全屏的背景颜色，是因为单独给 `body` 设置背景颜色的时候实际上是给浏览器画布设置了背景颜色，当 `html` 和 `body` 分别设置不同的背景颜色，浏览器会优先拿 `html` 的背景颜色往浏览器画布上设置背景颜色

为什么写页面的时候要写如下代码？

```css
html,
body {
  height: 100%;
}
```

**原因：** 因为 `html` 、`body` 元素默认高度为 0，导致内容无法正常使用百分比撑满全屏，如果只设置 `body` 标签的高度为 `100%` 也还是不行的，因为 `body` 的高度百分比是以 `html` 的高度为准的，高度依旧是 0，所以要同时给 `html`、`body` 设置高度为 `100%`

使用 `rgba()` 与 `opacity` 有什么区别？

前者只是元素的背景发生了透明，而后者是整个元素变得透明，包括里面的子元素

什么时候使用 `img` 元素作为内容图片，什么时候应该使用 CSS 使用背景图片？

如果图片从网页中去掉后，网站本身仍然有意义的，则应该当做背景图片，反之使用内容图片

**图片格式**

前端常用的图片格式有如下：

- **JPEG：** 一种位图格式，有损压缩，压缩率高，不支持透明度，**适合照片**

- **PNG：** 一种位图格式，无损压缩，不适合照片(文件体积会很大)，支持透明度，**适合图标、插图等小尺寸的图片**
- **GIF：** 早期的位图格式，与 PNG 类似，主要用于动图，除了动图外已被 PNG 取代，**PNG 实际也支持动图但浏览器支持落后**，支持透明度，但是不支持阿尔法分级，存在边缘锯齿
- **SVG：** 一种矢量图片格式，支持无损放大，本身也是一种标记语言，可以直接嵌入网页，也可以作为资源引用、
- **WebP：** Google 开发的一种新的图片格式，结合了 JPEG 高压缩率 和 PNG 阿尔法透明特性，**但浏览器的支持还参差不齐**

**背景位置**

使用 `background-position` 属性调整位置

```css
.box {
  background-position: 20% 20%;
}
```

当使用百分比单位时实际上是使用定位图片中对应位置的点和元素中对应位置的点重合

<img src="images/image-20240321061742900.png" alt="image-20240321061742900" style="zoom:33%;" />

```css
.box {
  background-position: 20px 20px;
}
```

当使用像素单位时是用图片左上角的点偏移

<img src="images/image-20240321061038764.png" alt="image-20240321061038764" style="zoom: 33%;" />

```css
.box {
  background-position: right 1em top 50%;
}
```

**注意：** 该写法是 CSS3 中新加入的语法，例子中是把图片定位在距离右边缘 1em，距离上边缘 50% 的位置，用于控制背景图片产生空白区(间距)，**但该写法无法优雅降级**，低版本浏览器不支持

**背景的裁切和原点**

默认情况下，背景图片是被限制在元素的边框以内的(包括边框)，**若把边框设置为半透明色，那图片边缘就会出现半透明的边框**

```css
.box {
  width: 200px;
  height: 200px;
  background: url(./demo.jpg);
  border: 10px solid rgba(220, 220, 160, 0.5);
  background-repeat: no-repeat;
}
```

<img src="images/image-20240321063712492.png" alt="image-20240321063712492" style="zoom: 50%;" />

要想解决这个问题，可以使用 `background-clip` 属性改变这个行为，默认值为 `border-box`，把它设置为 `padding-box`，将图片裁剪到内边距盒子以内

```css
.box {
  width: 200px;
  height: 200px;
  background: url(./demo.jpg);
  border: 10px solid rgba(220, 220, 160, 0.5);
  background-repeat: no-repeat;
  background-clip: padding-box;
}
```

<img src="images/image-20240321064456291.png" alt="image-20240321064456291" style="zoom: 50%;" />

此时图片的定位偏移的参照点变成了内边距的左上角(原来的是元素边框的左上角)，此时如果不想参照点在内边距的左上角，但是还想保持裁切，可以使用 `background-clip` 来调整的参照点(原点)的位置

```css
.box {
  width: 200px;
  height: 200px;
  background: url(./demo.jpg);
  border: 10px solid rgba(220, 220, 160, 0.5);
  background-repeat: no-repeat;
  /* 将背景图片的参照点设置为边框而非内边距 */
  background-origin: border-box;
  background-clip: padding-box;
}
```

**背景大小**

如果要背景图片随着元素的缩放而缩放，则需要使用百分比

```css
.box {
  background-size: 100px auto;
}
```

**注意：** 不要给图片的宽度和高度都设置为百分比，可能会元素的高度变化导致图片变形，给一个维度(宽度或高度)设置为百分比，另一个维度设置为 `auto`，可以保持固有的宽高比，但是存在背景图片一边被裁切的情况

```css
.box {
  background-size: contain;
}
```

使用 `contain` 浏览器会自行决定哪一边使用 `auto`，会尽可能的保证背景图片的最大化，同时保证图片的宽高比，避免图片被裁切

- 在元素高度比宽度高的情况下，浏览器会给宽度设置为 `100%`，高度设置为 `auto`，高度留白
- 在元素宽度比高度高的情况下，浏览器会给宽度设置为 `auto`，高度设置为 `100%`，宽度留白

```css
.box {
  background-size: cover;
}
```

使用 `cover` 图片会被缩放以确保覆盖元素的每一个像素，同时不会变形，超出元素的部分会被裁切

- 在元素高度比宽度高的情况下，元素高度会被填满，左右会被裁切
- 在元素宽度比高度高的情况下，元素宽度会被填满，高度会被裁切

**背景属性简写**

背景属性值的顺序可以随意，但是有两个注意点

1. 因为两个长度值既可以给 `background-position` 使用也可以给 `background-size` 使用，所以**两个都需要声明**，要先声明 `background-position`，后声明 `background-size`，中间用 `/` 分隔

   ``` css
   .box {
     background: 50% 50% / cover;
   }
   ```

2. 因为 `*-box` 关键字( `border-box`、`padding-box`、`content-box` )既可以给 `background-origin` 使用，也可以给 `background-clip` 使用所以有如下规则：

   - 如果存在一个 `*-box` 关键字则 `background-origin` 和 `background-clip` 都取这个值
   - 如果存在两个 `*-box` 关键字则第一个为 `background-origin` 的值，第二个为 `background-clip` 的值

**注意：** 因为背景属性简写会把没有使用过的属性都重置为默认值，所以应该把它放在第一位，然后再覆盖特定的属性，**最好还是使用明确的属性，跟容易让人理解**

**边框圆角**

在给 `border-radius` 指定百分比时，没有必要给任何一个角设置超过 50% 的值，元素被设置为圆角后，只会改变触摸范围，不会改布局的盒子大小

**可伸缩图片模式**

如果想让图片随着容器的缩小而缩小，但是在容器放大时又不会大到超过图片自身的大小

```css
img {
  width: auto;
  height: auto;
  max-width: 100%;
}
```

**注意：** 此处加上的 `width: auto` 和 `height: auto` 是为了覆盖之前的声明(如果有的话)，同时可以解决 IE8 不声明 `width` 无法正确缩放图片的问题

## 第六章 内容布局

**CSS 中负外部距的行为**

- 左边或上边的负外边距会把元素向左或向上拉，盖住旁边的元素

  ```html
  <div class="box">
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
  ```

  ```css
  .top,
  .bottom {
    width: 30px;
    height: 30px;
    background-color: red;
  }
  .bottom {
    /* 负上外边距 */
    margin-top: -10px;
    background-color: blue;
  }
  ```

<img src="images/image-20240324112325403.png" alt="image-20240324112325403" style="zoom:50%;" />

- 右边或下边的负外边距会把相邻元素向左或向上拉，盖住设置了负外边距的元素

  ```html
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
  </div>
  ```

  ```css
  .box {
    display: flex;
  }
  .left,
  .right {
    width: 30px;
    height: 30px;
    background-color: red;
  }
  .right {
    background-color: blue;
  }
  .left {
    margin-right: -10px;
  }
  ```

<img src="images/image-20240324123233595.png" alt="image-20240324123233595" style="zoom:50%;" />

- 在浮动元素上，与浮动方向相反的负外边距会导致浮动区域缩小，使得相邻元素盖住浮动的元素。而与浮动方向相同的负外边距会在该方向上把浮动元素向外拉

  ```html
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
  </div>
  ```

  - 当浮动方向和负外边距方向相反时

    ```css
    .left,
    .right {
      width: 30px;
      height: 30px;
      background-color: red;
      float: left;
    }
    .right {
      background-color: blue;
    }
    .left {
      /* 负外边距和浮动方向相反 */
      margin-right: -10px;
    }
    ```

    <img src="images/image-20240324123233595.png" alt="image-20240324123233595" style="zoom:50%;" />

  - 当浮动方向和负外边距方向相同时，向外拉

    ```css
    .left,
    .right {
      width: 30px;
      height: 30px;
      background-color: red;
      float: left;
    }
    .right {
      background-color: blue;
    }
    .left {
      /* 负外边距和浮动方向相同 */
      margin-left: -10px;
    }
    ```

- 给未声明宽度的非浮动元素应用负外边距时，左、右负外边距会向外拉伸元素，导致元素扩张，有可能盖住相邻元素

**定位与 z-index 的堆叠内容的陷阱**

**堆叠上下文：** 就像是一盒扑克牌，每张牌本身也是一个上下文(牌盒)，牌只能相对当前的牌盒排定次序，任何一个设定了 `position: absolute` 及值不是 `auto` 的 `z-index` 属性的元素，都会创建一个自己后代元素的堆叠上下文，**一个堆叠上下文的内部不会影响其他堆叠上下文**

**根堆叠上下文：** 所有 `z-index` 不是 `auto` 的定位元素都会在这个上下文中排序，随着其它上下文的建立，就会出现堆叠层级

**注意：** 设置小于 `1` 的 `opacity` 的值也可以触发新的堆叠上下文，`transform` 和 `filter` 属性也可以触发新的堆叠上下文

**水平布局不同技术的优缺点**

- 浮动布局

  **优点：** 与行内块一样可以包含多行文本，并且会基于自己的内容来 ”收缩适应“，元素排列不依赖元素在代码中的次序

  **缺点：** 需清除浮动，存在被之前更高的浮动元素卡住的问题

- 行内块布局

  **优点：** 可以包含多行文本，并且会基于自己的内容来 ”收缩适应“，支持控制垂直对齐

  **缺点：** 存在空白符占用导致元素换行的问题

- 表格显示布局 `display: table`

  **优点：** 水平布局很便捷，实现表格内容的垂直居中很容易

  **缺点：** 仅支持不会发生折行的内容，使用 `table` 标签布局的问题表格也同样存在，无法给内部元素重写排序以及应用外边距

**Flexbox 中自动外边距**

一般情况下，使用 `margin: 0 auto` 可以使元素水平居中，但是使用 `margin: auto 0` 却无法使元素垂直居中

```html
<div class="box">
  <div></div>
</div>
```

```css
.box {
  width: 300px;
  height: 300px;
  background-color: red;
}
.box > div {
  width: 150px;
  height: 150px;
  background-color: blue;
  /* 无法使元素垂直居中 */
  margin: auto 0;
}
```

<img src="images/image-20240325220441673.png" alt="image-20240325220441673" style="zoom: 33%;" />

**原因：** 在块级格式化上下文中，如果 `margin-left` 和 `margin-right` 的值都是 `auto`，则它们表达值相等，从而使元素可以水平居中，但是如果 `margin-top` 和 `margin-bottom` 的值都是 `auto`，则它们的值都为 `0`，也就无法造成垂直上的居中

在 Flexbox 中，使用 `marin: auto` 可以使元素水平垂直居中

```css
.box {
  display: flex;
  width: 300px;
  height: 300px;
  background-color: red;
}
.box > div {
  width: 150px;
  height: 150px;
  background-color: blue;
  /* 使元素水平垂直居中 */
  margin: auto;
}
```

<img src="images/image-20240325221533932.png" alt="image-20240325221533932" style="zoom:33%;" />

**原因：** 在 `flex` 格式化上下文中，设置了 `margin: auto` 的元素，在通过 `justify-content` 和 `align-self` 对齐之前，任何处于空闲的空间都会被分配到该方向的 `margin` 中去，不仅是水平方向会被分配，垂直方向也会分配

在 `flex` 格式化上下文中，`margin: auto` 可以模拟 `space-between` 和 `space-around`

```html
<ul class="g-flex">
  <li>liA</li>
  <li>liB</li>
  <li>liC</li>
  <li>liD</li>
  <li>liE</li>
</ul>
```

```css
.g-flex {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: blue;
}
```

- `marign: auto` 实现 `space-around`

  ```css
  li {
    width: 18%;
    height: 80px;
    background-color: green;
    box-sizing: border-box;
    /* 模拟 space-around 效果 */
    margin: auto;
  }
  ```

  <img src="images/image-20240326085748271.png" alt="image-20240326085748271" style="zoom:50%;" />

- `margin: auto` 实现 `space-between`

  ```css
  li {
    width: 18%;
    height: 80px;
    background-color: green;
    box-sizing: border-box;
    /* 模拟 space-between 效果 */
    margin: auto;
  }
  li:first-child {
    /* 清除左边元素的外边距 */
    margin-left: 0;
  }
  li:last-child {
    /** 清除右边元素的外边距 */
    margin-right: 0;
  }
  ```

  <img src="images/image-20240326090317001.png" alt="image-20240326090317001" style="zoom:50%;" />

**flex 可伸缩尺寸**

- `flex-basis` ：控制 flex 元素(指 flex 容器 **内部** 的元素)在**主轴方向**上、经过修正之前的 "首选" 大小 ( `width` 或 `height` )，可以使用长度单位( 如：`px`、`em` 等)、也可以使用百分比(相对于容器的主轴而言)，默认值为 `auto`，`auto` 的意思在 flex 元素设置了宽度或者高度的情况下 flex 元素可以从对应的属性 (`width` 或 `height`) 获得主尺寸，如果 flex 元素没有设置高度或者宽度则根据其内容来确定大小，可以直接指定 `content` 值，会自动忽略 flex 元素的高度或者宽度值，按照内容来确定大小，但是这个值是新出的，存在兼容性问题
- `flex-grow`：一个弹性系数，在通过 `flex-basis` 为每一项设置了首选大小之后，如果还有剩余空间，该数值表示剩余空间扩展的比值，默认值为 `0` 表示不扩展，弹性系数表示占剩余空间的几份

  - 例如一个 flex 容器中有两个元素，没有占用完容器的所有空间，给两个元素都指定 `flex-grow: 1` ，则表示将剩余空间分成两份，两个元素各占一份
  - 如果第一个元素设置为 `flex-grow: 3` ，第二个元素设置为 `flex-grow: 1` 表示把剩余空间分成四份，第一个元素占三份，第二个元素占一份
  - 如果把两个元素的 `flex-basis` 的值设置为 `0` 并把 `flex-grow` 设置为 `1` 表示容器**全部的空间**分为两部分，每个元素各占一部分

  **注意：** 在 `flex: 1 0 0%` 简写中，`flex-basis` 必须加单位，可以加 `%` 或者 `px`

- `flex-shrink`：一个弹性系数，与 `flex-grow` 的作用相反，在空间不足时收缩的比值，默认值为 `1` 表示以自己首选尺寸(通过 `flex-basis` 设置的)为比例收缩，收缩的计算方式是元素自己的 `flex-shrink` 的值乘以自己的 `flex-basis`，再用乘积除以每一项的 `flex-shrink` 与 `flex-basis` 的乘积之和，最后再拿得到的比例系数乘以超出的宽度(负空间)，从而得到元素要收缩的空间

  <img src="images/image-20240327213911427.png" alt="image-20240327213911427" style="zoom: 50%;" />
