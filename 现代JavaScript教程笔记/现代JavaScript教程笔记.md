# 现代 JavaScript 教程笔记

教程地址：https://zh.javascript.info



## JavaScript 简介

浏览器中嵌入了 JavaScript 引擎，有时也被称作 “JavaScript 虚拟机”，不同的引擎有不同的代号

- [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) —— Chrome、Opera 和 Edge 中的 JavaScript 引擎
- [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey) —— Firefox 中的 JavaScript 引擎
- ……还有其他一些代号，像 “Chakra” 用于 IE，“JavaScriptCore”、“Nitro” 和 “SquirrelFish” 用于 Safari，等等



**引擎工作的基本原理**

1. 引擎（如果是浏览器，则引擎被嵌入在其中）读取（“解析”）脚本
2. 引擎将脚本转化（“编译”）为机器语言
3. 机器代码快速地执行

引擎会对流程中的每个阶段都进行优化。它甚至可以在编译的脚本运行时监视它，分析流经该脚本的数据，并根据获得的信息进一步优化机器代码

​	

**开发者控制台**

Google Chrome 中按下 `F12` 键，如果你使用 Mac，使用 `Command+option+J`

在浏览器控制台中按 `Enter`，这行代码会立即执行，如果要插入多行代码，需要按 `Shift+Enter` 进行换行



