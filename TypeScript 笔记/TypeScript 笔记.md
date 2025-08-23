# TypeScript 笔记



## 简介



**概述**

TypeScript（简称 TS）是微软公司开发的一种基于 JavaScript（简称 JS）语言的编程语言。

**TypeScript 可以看成是 JavaScript 的超集（superset）**，继承了后者的全部语法，所有的 JavaScript 脚本都可以当作 TypeScript 脚本（但是可能会报错），此外它增加了一些自己的语法。

目的不是为了创建一种全新的语言，而是增强 JavaScript 的功能，使其跟适合多人合作的企业级项目开发。

**TypeScript 对 JavaScript 添加的最主要部分，就是一个独立的类型系统**。



**类型的概念**

**类型（type）指的是一组具有相同特征的值**，如果两个值具有某种共同的特征，就可以说它们属于同一种类型。

例如，`123` 和 `456` 这两个值，共同特征都是能进行数值运算，所以都属于 “数值（number）” 这个类型。

**一旦确定了某个值的类型，这个值就具有该类型的所有特征，凡是适用该类型的地方，都可以使用这个值，凡是不适用该类型的地方，使用这个值都会报错**。

**类型是人为添加的一种编程约束和用法提示**，主要目的是在软件开发过程中，为编译器和开发工具提供更多的验证和帮助，可以提供代码质量，减少错误。

例如：

```ts
function addOne(n:number) {
  return n + 1;
}
```

上述代码中，函数 `addOne()` 有一个参数 `n`，类型为数值（number），表示这个位置只能使用数值，传入其它类型的值就会报错。

```ts
// 报错
addOne('hello') // Argument of type 'string' is not assignable to parameter of type 'number'.
```

上面调用代码中传入了一个字符串 `hello`，TypeScript 发现类型不对，就报错了，指出这个位置只能传入数值，不能传入字符串。

JavaScript 语言没有这个功能，不会检查类型对不对，所以在开发阶段很可能发现不了这个问题，代码也许就会原样发布，导致用户在使用时遇到错误。

而 TypeScript 是在开发阶段报错，有利于提早发现错误，避免使用时报错，另外在函数定义中加入类型，具有提示作用，可以告诉开发者这个函数怎么使用。



**动态类型与静态类型**

JavaScript 语言本身就有一套自己的类型系统，比如数值 `123` 和字符串 `'Hello'`。

但 JavaScript 的类型系统非常弱，而且没有使用限制，运算符可以接受各种类型的值，**在语法上，JavaScript 属于动态类型语言**。

例如：

```js
// 例一
let x = 1;
x = 'hello';

// 例二
let y = { foo: 1 };
delete y.foo;
y.bar = 2;
```

上述代码中，例一，变量 `x` 声明时，值的类型是数值，但是后面可以改成字符串，所以无法提取知道变量的类型是什么。

而例二中，变量 `y` 是一个对象，有一个属性 `foo`，但这个属性是可以删掉的，并且还可以随意添加其它属性，所以这个对象有哪些属性是无法提前知道的。

**正是因为存在这些动态变化，所以 JavaScript 的类型系统是动态的，不具有很强的约束性，这对于提前发现代码错误非常不利**。

**而 TypeScript 引入了一个更强大、更严格的类型系统，属于静态类型语言**。

上面的代码在 TypeScript 中都会报错：

```ts
// 例一
let x = 1;

// 报错
x = 'hello'; // Type 'string' is not assignable to type 'number'.

// 例二
let y = { foo: 1 };

// 报错
delete y.foo; // The operand of a 'delete' operator must be optional.

// 报错
y.bar = 2; // Property 'bar' does not exist on type '{ foo: number; }'.
```

上述示例中，例一的报错是因为变量赋值时，**TypeScript 已经推断确定了类型，后面就不允许再赋值为其它类型的值**，即变量的类型是静态的。

而例二报错是因为**对象的属性也是静态的，不允许随意增删**。



**静态类型的优点**

静态类型有很多好处：

1. **有利于代码的静态分析**

   不必运行代码就可以确定变量的类型，从而推断代码是否有错误，这就叫做**代码的静态分析**。

   这对于大型项目非常重要，因为在开发阶段就可以发现问题，大大降低了线上风险。

2. **有利于发现错误**

   由于每个值、，每个变量、每个运算符都有严格的类型约束，TypeScript 就能够轻松发现拼写错误、语义错误和方法调用错误，节省开发时间。

   例如：

   ```ts
   let obj = { message: '' };
   
   // 报错
   console.log(obj.messege); // Property 'messege' does not exist on type '{ message: string; }'. Did you mean 'message'?
   ```

   上述代码不小心把 `message` 拼错了，写成 `messege`，TypeScript 就会报错，指出没有定义过这个属性，在 JavaScript 中遇到这种情况是不报错的。

   ```ts
   const a = 0;
   const b = true;
   
   // 报错
   const result = a + b; // Operator '+' cannot be applied to types 'number' and 'boolean'.
   ```

   上述代码是合法的 JavaScript 代码，但是没有意义，不应该将数值 `a` 与布尔值 `b` 相加，TypeScript 会直接报错，提示运算符`+`不能用于数值和布尔值的相加。

3. **更好的 IDE 支持，做到语法提示和自动补全**

   IDE（集成开发环境，比如 VSCode）一般都会利用类型信息，提供语法提示功能（编辑器自动提示函数用法、参数等）和自动补全功能（只键入一部分的变量名或函数名，编辑器补全后面的部分）。

4. **提供了代码文档**

   类型信息可以替代部分代码文档，解释应该如何使用这些代码，熟练的开发者往往只看类型，就能大致推断代码的作用，借助类型信息，很多工具可以直接生成文档。

5. **有助于代码重构**

   修改他人的 JavaScript 代码，往往非常痛苦，项目越大越痛苦，因为不确定修改后是否会影响到其它部分的代码。

   类型信息大大减轻了重构的成本，**一般来说，只要函数或对象的参数和返回值的类型保持不变，就能基本确定，重构后的代码也能正常运行**。

综上所述，TypeScript 有助于提高代码质量，保证代码安全，更适合用在大型企业级项目上，这就是为什么大量 JavaScript 项目转成 TypeScript 的原因。



**静态类型的缺点**

1. **丧失了动态类型的代码灵活性**

   动态类型有非常高的灵活性，给予程序员很大的自由，静态类型将这些灵活性都剥夺了。

2. **增加了编程工作量**

   **有了类型之后，程序员不仅需要编写功能，还需要编写类型声明，确保类型正确**，这增加了不少工作量，有时会显著拖长项目的开发时间。

3. **更高的学习成本**

   类型系统通常比较复杂，要学习的东西更多，要求开发者付出更高的学习成本。

4. **引入了独立的编译步骤**

   原生的 JavaScript 代码，可以直接在 JavaScript 引擎运行，添加类型系统以后，就多出了一个单独的编译步骤，检查类型是否正确，并将 TypeScript 代码转成 JavaScript 代码，这样才能运行。

5. **兼容性问题**

   TypeScript 依赖 JavaScript 生态，需要用到很多外部模块，但过去大部分 JavaScript 项目都没有做 TypeScript 适配，**虽然可以自己动手做适配，不过使用时难免还是会有一些兼容性问题**。

总的来说，这些缺点使得 TypeScript 不一定适合那些小型的、短期的个人项目。



**TypeScript 的历史**

2012 年，微软公司宣布推出 TypeScript 语言，**设计者是著名的编程语言设计大师 Anders Hejlsberg，他也是 C# 和 .NET 的设计师**。

微软最初推出这门语言的目的：**是让 JavaScript 程序员可以参与 Windows 8 应用程序的开发**。

当时，Windows 8 即将发布，它的应用程序开发除了使用 C# 和 Visual Basic，还可以使用 HTML + JavaScript，微软希望，TypeScript 既能让 JavaScript 程序员快速上手，也能让 .NET 程序员感到熟悉。

所以它的很多语法概念跟 .NET 很类似。

**TypeScript 是一个开源项目，接受社区的参与**，核心的编译器采用 Apache 2.0 许可证。

2013年，微软的 Visual Studio 2013 开始内置支持 TypeScript 语言。

2014年，TypeScript 1.0 版本发布，同年代码仓库搬到了 GitHub。

2016年，TypeScript 2.0 版本发布，引入了很多重大的语法功能。

2018年，TypeScript 3.0 版本发布。

2020年，TypeScript 4.0 版本发布。

2023年，TypeScript 5.0 版本发布。



## 基本用法



**类型声明**

TypeScript 代码最明显的特征，就是为 JavaScript 变量加上类型声明。

```ts
let foo:string;
```

上述代码中，**变量 `foo` 的后面使用了冒号，声明了它的类型为 `string`**。

类型声明的写法：**一律为在标识符后面添加 “冒号 + 类型”，函数的参数和返回值，也是这样来声明类型**。

```ts
function toString(num: number):string {
  return String(num);
}
```

上述代码中，函数 `toString()` 的参数 `num` 的类型是 `number`，参数列表的圆括号后面，声明了返回值的类型是`string`。

**⚠️ 注意：**

- **变量的值应该与声明的类型一致，如果不一致，TypeScript 就会报错**

  ```ts
  // 报错
  let foo:string = 123; // Type 'number' is not assignable to type 'string'.
  ```

- **TypeScript 规定，变量只有赋值后才能使用，否则就会报错**

  ```ts
  let x:number;
  
  // 报错
  console.log(x) // Variable 'x' is used before being assigned.
  ```

  上面示例中，变量 `x` 没有赋值就被读取，导致报错，而 JavaScript 允许这种行为，不会报错，没有赋值的变量会返回 `undefined`。



**类型推断**

类型的声明不是必需的，如果没有，TypeScript 会自己推断类型。

```ts
let foo = 123;
```

上述代码中，变量 `foo` 并没有类型声明，TypeScript 就会自动推断它的类型，**由于它被赋值为一个数值，因此 TypeScript 推断它的类型为 `number`**。

之后，如果变量 `foo` 更改为其它类型的值，跟推断的类型不一致，TypeScript 就会报错。

```ts
let foo = 123;

// 报错
foo = 'hello'; // Type 'string' is not assignable to type 'number'.
```

TypeScript 也可以推断函数的返回值。

```ts
function toString(num:number) {
  return String(num);
}
```

上述代码中，函数 `toString()` 没有声明返回值的类型，但是 TypeScript 推断返回的是字符串，**也正是因为 TypeScript 的类型推断，所以函数返回值的类型通常是省略不写的**。

从这里看出，TypeScript 的设计思想是：**类型声明是可选的，可以加也可以不加，即使不加类型声明，依然是有效的 TypeScript 代码，只是这时不能保证 TypeScript 会正确推断出类型**，所以说所有 JavaScript 代码都是合法的 TypeScript 代码。

这样设计有一个好处，可以将以前的 JavaScript 项目改为 TypeScript 项目时，**可以逐步地为老项目添加类型，即使有些代码没有添加，也不会无法运行**。



**TypeScript 的编译**

JavaScript 的运行环境（浏览器和 Node.js）不认识 TypeScript 代码，**所以 TypeScript 项目想要运行，必须先转为 JavaScript 代码**，这个代码转换过程就叫做 **“编译（compile）”**。

**TypeScript 官方没有做运行环境，只提供编译器，编译时会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，而且不会改变 JavaScript 的运行结果**。

因此，**TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查**，一旦代码被编译为了 JavaScript，运行时就不再检查类型了。



**值与类型**

**“类型” 是针对 “值” 的，可以视为是后者的一个元属性，每一个值在 TypeScript 里都是有类型的**，比如：`3` 是一个值，它的类型是 `number`。

**TypeScript 代码只涉及类型，不涉及值，所有跟 “值” 相关的处理，都由 JavaScript 完成**。

在 TypeScript 项目中，存在两种代码：**一种是底层的 “值代码”，另一种是上层的 “类型代码”，前者使用 JavaScript 语法，后者使用 TypeScript 的类型语法**。

它们是可以分离的，TypeScript 的编译过程，**实际上就是把 “类型代码” 全部拿掉，只保留 “值代码”**。



**TypeScript Playground**

最简单的 TypeScript 使用方式，就是使用官网的在线编译页面，叫做 [TypeScript Playground](https://www.typescriptlang.org/zh/play/)。

只要打开这个网页，**把 TypeScript 代码粘贴进文本框，它就会在当前页面自动编译出 JavaScript 代码，还可以在浏览器执行编译产物，如果编译报错，它也会给出详细的报错信息**。

这个页面还具有完整的 IDE 支持，可以自动语法提示，**它还支持把代码片段和编译器设置保存成 URL，分享给他人**。



**tsc 编译器**

**TypeScript 官方提供的编译器叫做 tsc**，可以将 TypeScript 脚本编译成 JavaScript 脚本，如果想要在本地编译 TypeScript 代码，必须安装 tsc。

**根据约定，TypeScript 脚本文件使用 `.ts` 后缀名，JavaScript 脚本文件使用 `.js` 后缀名，tsc 的作用就是把 `.ts` 脚本转变成 `.js` 脚本**。



**安装 tsc**

tsc 是一个 npm 模块，使用以下命令安装（必须先安装 npm）。

```bash
npm install -g typescript
```

上面的命令就是全局安装 tsc，也可以在项目中将 tsc 安装为一个依赖模块。

安装完成后，可以通过一下命令检查是否安装成功。

```bash
# 或者 tsc --version
tsc -v
Version 5.9.2
```

`-v` 或 `--version` 参数**可以输出当前安装的 tsc 版本**。



**帮助信息**

使用 `-h` 或者 `--help` 参数输出信息。

```bash
tsc -h
```

默认情况下，**“--help” 参数仅显示基本的可用选项，可以使用 “--all” 参数，查看完整的帮助信息**。



**编译脚本**

安装 tsc 之后，就可以编译 TypeScript 脚本了。

在 `tsc` 命令后面加上 TypeScript 脚本文件，就可以将其编译成 JavaScript 脚本。

```bash
tsc app.ts
```

**上面的命令会在当前目录下，生成一个 `app.js` 的脚本文件**，这个脚本就完全是编译后生成的 JavaScript 代码。

`tsc` 命令也可以一次编译多个 TypeScript 脚本。

```bash
tsc file1.ts file2.ts file3.ts
```

上面命令会在当前目录生成三个 JavaScript 脚本文件 `file1.js`、`file2.js`、`file3.js`。

`tsc` 命令有很多参数，可以调整编译行为。

1. **--outFile**

   如果想**将多个 TypeScript 脚本编译成一个 JavaScript 文件**，可以使用 `--outFile` 参数。

   ``` bash
   tsc file1.ts file2.ts --outFile app.js
   ```

   上面命令将 `file1.ts`、`file2.ts` 两个脚本编译成一个 JavaScript 文件 `app.js`。

2. **--outDir**

   **编译结果默认都保存在当前目录，`--outDir` 参数可以指定保存到其它目录**。

   ```bash
   tsc app.ts --outDir dist
   ```

   上面命令会在`dist`子目录下生成`app.js`

3. **--target**

   **为了保证编译结果能在各种 JavaScript 引擎中运行，tsc 默认会将 TypeScript 代码编译成很低版本的 JavaScript，即3.0版本（以 `es3` 表示），但通常不是我们想要的结果**。

   这时可以使用 `--target` 参数，指定编译后的 JavaScript 版本，**建议使用 `es2015` 或者更新版本**。

   ```bash
   tsc --target es2015 app.ts
   ```

   

**编译错误时的处理**

编译过程中，如果没有报错，`tsc` 命令不会有任何显示，**所以，如果没有看到任何提示，就表示编译成功了**。

如果编译报错，`tsc` 命令就会显示报错信息，**但在这种情况下，依旧会编译生成 JavaScript 脚本**。

例如，下面是一个错误的 TypeScript 脚本 `app.ts`。

```ts
// app.ts
let foo:number = 123;

// 报错
foo = 'abc'; // Type 'string' is not assignable to type 'number'.
```

这时使用 `tsc` 命令进行编译就会报错，就像下面这样：

```bash
tsc app.ts
app.ts:2:1 - error TS2322: Type 'string' is not assignable to type 'number'.

2 foo = 'abc';
  ~~~


Found 1 error in app.ts:2
```

在这种情况下，编译产物 `app.js` 还是会照样生成，下面就是编译后的结果：

```js
// app.js
var foo = 123;
foo = 'abc';
```

**可以看到尽管有错，但 `tsc` 依然原样将 TypeScript 编译成 JavaScript 脚本**。

**这是因为 TypeScript 团队认为，编译器的作用只是给出编译错误，至于怎么处理这些错误，需要开发者自己判断**，因为开发者更了解自己的代码，所以不管怎样，编译产物都会生成，让开发者决定下一步怎么处理。

**如果希望一旦报错就停止编译，不生成编译产物，可以使用 `--noEmitOnError` 参数**。

```bash
tsc --noEmitOnError app.ts
```

上面命令在报错后，就**不会生成 `app.js`**。

**`tsc` 命令还有一个 `--noEmit` 参数，只检查类型是否正确，不生产 JavaScript 文件**。

```bash
tsc --noEmit app.ts
```

上面命令只检查是否有编译错误，**无论是否有错误都不会生成 `app.js`**。



**tsconfig.json**

**TypeScript 允许将 `tsc` 的编译参数，写在配置文件 `tsconfig.json` 中，只要当前目录有这个文件，`tsc` 就会自动读取，所以运行时可以不写参数**。

```bash
tsc file1.ts file2.ts --outFile dist/app.js
```

上面的命令写成 `tsconfig.json` 中，就像下面这样：

```json
{
  "files": ["file1.ts", "file2.ts"],
  "compilerOptions": {
    "outFile": "dist/app.js"
  }
}
```

**有了这个配置文件，编译时直接调用 `tsc` 命令就可以了**。



**ts-node 模块**

[ts-node](https://github.com/TypeStrong/ts-node) 是一个**非官方**的 npm 模块，**可以直接运行 TypeScript 代码**。

使用时，可以先全局安装它。

```bash
npm install -g ts-node
```

安装完成后，就可以直接运行 TypeScript 脚本。

```bash
ts-node script.ts
```

如果不安装 ts-node，也可以通过 npx 调用它来运行 TypeScript 脚本。

```bash
npx ts-node script.ts
```

上面命令中，**`npx` 会在线调用 ts-node，从而在不安装的情况下，运行 `script.ts`**。

**如果执行 `ts-node` 命令不带有任何参数，它会提供一个 TypeScript 的命令行 REPL 运行环境，可以在这个环境中输入 TypeScript 代码，逐行运行**。

```bash
ts-node
>
```

上面示例中，单独运行`ts-node`命令，会给出一个大于号，这就是 TypeScript 的 REPL 运行环境，可以逐行输入代码运行。

```bash
ts-node
> const twice = (x:string) => x + x;
> twice('abc')
'abcabc'
> 
```

在上面示例中，在 TypeScript 命令行 REPL 环境中，先输入一个函数`twice`，然后调用该函数，就会得到结果。

要退出这个 REPL 环境，可以按下 Ctrl + d，或者输入 `.exit`。



## any 类型，unknown 类型，never 类型

