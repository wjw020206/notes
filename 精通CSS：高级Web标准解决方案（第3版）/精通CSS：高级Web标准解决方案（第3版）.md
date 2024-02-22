# 精通CSS：高级Web标准解决方案（第3版）

## 第一章 基础知识

**渐进增强：**保证低版本浏览器基本功能实现的前提下再去增加效果、交互以及功能

**优雅降级：**优先对最新的浏览器来设计网站，再对低版本浏览器修复较大的错误

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
   


