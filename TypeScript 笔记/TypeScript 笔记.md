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



## any 类型



**基本含义**

`any` 类型表示没有任何限制，**该类型的变量可以赋予任何类型的值**。

```ts
let x:any;

x = 1;     // 正确
x = 'foo'; // 正确
x = true;  // 正确
```

**变量类型一旦被设为 `any`，TypeScript 实际上会关闭这个变量的类型检查，即使有明显的类型错误，只要句法正确，都不会报错**。

```ts
let x:any = 'hello';

x(1)         // 不报错
x.foo = 100; // 不报错
```

上述代码中，变量 `x` 的值是一个字符串，但是把它当作函数调用，或者当做对象读取任意属性，TypeScript 编译时都不报错，原因就是 `x` 的类型是`any`，TypeScript 不对其进行类型检查。

由于这个原因，**应该尽量避免使用 `any` 类型，否则就失去了使用 TypeScript 的意义**。

在实际开发中，`any` 类型主要适用于以下两个场合：

1. **出于特殊原因，需要关闭某些变量的类型检查，就可以把该变量的类型设为 `any`**

2. **为了适配以前老的 JavaScript 项目，让代码快速迁移到 TypeScript，可以把变量类型设为 `any`**

   有些年代很久的大型 JavaScript 项目，尤其是别人的代码，很难为每一行适配正确的类型，这时为那些类型复杂的变量加上 `any`，TypeScript 编译时就不会报错。

总之，**TypeScript 认为，只要开发者使用了 `any` 类型，就表示开发者想要自己处理这些代码，所以就不对 `any` 类型进行任何限制，怎么使用都可以**。

从集合论的角度来看，**`any` 类型可以看作是其它所有类型的全集，包含了一切可能的类型，TypeScript 将这种类型称为 “顶层类型”（top type），意为涵盖了所有下层**。



**类型推断问题**

对于开发者没有指定类型，TypeScript 必须自己推断类型的那些变量，**如果无法推断出类型，TypeScript 就会认为该变量的类型是 `any`**。

```ts
function add(x, y) {
  return x + y;
}

add(1, [1, 2, 3]) // 不报错
```

上述代码中，函数 `add()` 的参数变量 `x` 和 `y` 都没有足够的信息，TypeScript 无法推断出它们的类型，所以就会认为这两个变量和函数返回值的类型都是 `any`，以至于后面不在对函数 `add()` 进行类型检查了，怎么用都可以。

这显然是很糟糕的情况，**所以对于那些类型不明显的变量，一定要显式声明类型，防止被推断为 `any`**。

**TypeScript 提供了一个编译选项 `noImlicitAny`，打开该选项，只要推断出 `any` 类型就会报错**。

```bash
tsc --noImplicitAny app.ts
```

上面命令使用了 `noImplicitAny` 编译选项进行编译，这时上面的函数 `add()` 就会报错。

这里有一个特殊情况，即使打开了 `noImplicitAny`，使用 `let` 和 `var` 声明变量，但不赋值也不指定类型，是不会报错的。

```ts
var x; // 不报错
let y; // 不报错
```

上面代码中，变量 `x` 和 `y` 声明时没有赋值，也没有指定类型，TypeScript 会自动推断它们类型为 `any`，这时即使打开了 `noImplicitAny`，也不会报错。

```ts
let x;

x = 123;
x = { foo: 'hello' };
```

上述代码中，变量 `x` 的类型推断为 `any`，但是不报错，可以顺利通过编译。

**由于这个原因，建议使用 `let` 和 `var` 声明变量时，如果不赋值，就一定要显式声明类型，否则可能存在安全隐患**。

`const` 没有这个问题，**因为 JavaScript 语言规定 `const` 声明变量时，必须同时进行初始化（赋值）**。

```ts
// 报错
const x; // 'const' declarations must be initialized.
```

**`const` 声明的 `x` 是不能改变值的，声明时必须同时赋值，否则报错**，所以它不存在类型推断为 `any` 的问题。



**污染问题**

`any` 类型除了会关闭类型检查，**还有一个很大的问题，就是它会 “污染” 其它变量，它可以赋值给其它任何类型的变量（因为没有类型检查），导致其它变量出错**。

```ts
let x:any = 'hello';
let y:number;

y = x; // 不报错

y * 123; // 不报错
y.toFixed(); // 不报错
```

上述代码中，变量 `x` 的类型是 `any`，实际的值是一个字符串，变量 `y` 的类型是 `number`，表示这是一个数值变量，但它被赋值为 `x`，这时并不会报错，然后变量 `y` 继续进行各种数值运算，TypeScript 也检查不出错误，问题就这样留到了运行时才会暴露。

**污染了其它具有正确类型的变量，把错误留到运行时**，这就是不宜使用 `any` 类型的另一个主要原因。



## unknown 类型

为了解决 `any` 类型 “污染” 其它变量的问题，TypeScript 3.0 引入了 `unknown` 类型，**它与 `any` 类型含义相同，表示类型不确定，可能是任意类型，但是它的使用有一些限制，不像 `any` 那样自由，可以被视为严格版的 `any`**。

`unknown` 跟 `any` 的相似之处：**在于所有类型的值都可以分配给 `unknown` 类型**。

```ts
let x:unknown;

x = true; // 正确
x = 42; // 正确
x = 'Hello World'; // 正确
```

**`unknown` 跟 `any` 的不同之处在于：它不能直接使用**，主要有以下几个限制：

1. **`unknown` 类型的变量，不能直接赋值给其它类型的变量（除了 `any` 类型和 `unknown` 类型）**

   ```ts
   let v:unknown = 123;
   
   // 报错
   let v1:boolean = v; // Type 'unknown' is not assignable to type 'boolean'.
   let v2:number = v; // Type 'unknown' is not assignable to type 'number'.
   ```

   上述代码中，变**量 `v` 是 `unknown` 类型，赋值给 `any` 和 `unknown` 以外的类型的变量都会报错，这就避免了 `any` 污染的问题**。

2. **不能直接调用 `unknown` 类型变量的方法和属性**

   ```ts
   let v1:unknown = { foo: 123 };
   // 报错
   v1.foo; // 'v1' is of type 'unknown'.
   
   let v2:unknown = 'hello';
   // 报错
   v2.trim(); // 'v2' is of type 'unknown'.
   
   let v3:unknown = (n = 0) => n + 1;
   // 报错
   v3(); // 'v2' is of type 'unknown'.
   ```

3. **`unknown` 类型变量能够进行的运算是有限的**

   **只能进行比较运算（`==`、`===`、`!=`、`!==`、`||`、`&&`、`?`）、取反运算（运算符 `!`）、`typeof` 运算符和 `instanceof` 运算符这几种，其它运算符都会报错**。

   ```ts
   let a:unknown = 1;
   
   // 报错
   a + 1 // 'a' is of type 'unknown'.
   
   // 正确
   a === 1 
   ```



**只有经过 “类型缩小” 的 `unknown` 类型变量才可以使用，所谓 “类型缩小”，就是缩小 `unknown` 变量的类型范围，确保不会出错**。

```ts
let a:unknown = 1;

if(typeof a === 'number') {
  let r = a + 10; // 正确
}
```

上述代码中，`unknown` 类型的变量 `a` 经过 `typeof` 运算之后，能够确定实际类型是 `number`，就能用于加法运算了，这就是 “类型缩小”，即**将一个不确定的类型缩小为更明确的类型**。

另一个例子：

```ts
let s:unknown = 'hello';

if(typeof s === 'string') {
  s.length; // 正确
}
```

上述代码中，**确定变量 `s` 的类型为字符串之后，才能调用它的 `length` 属性**。

这样设计的目的：只有明确 `unknown` 变量的实际类型，才允许使用它，防止像 `any` 那样可以随意乱用，“污染” 其它变量，类型缩小以后再使用，就不会报错。

总之，`unknown` 可以看作是更安全的 `any`，**一般来说，凡是需要设为 `any` 类型的地方，通常都应该优先考虑设为 `unknown` 类型**。

在集合论上，`unknown` 也可以视为所有其它类型（除了 `any`）的全集，**所以它和 `any` 一样，也属于 TypeScript 的顶层类型**。



## never 类型

为了保持与集合论的对应关系，以及类型运算的完整性，TypeScript 还引入了 **“空类型”** 的概念，即**该类型为空，不包含任何值**。

**由于不存在任何属于 “空类型” 的值，所以该类型被称为 `never`，即不可能有这样的值**。

```ts
let x:never;
```

上述代码中，变量 `x` 的类型是 `never`，**不可能赋值给它任何值，否则都会报错**。

**`never` 类型的使用场景主要是在一些类型运算之中，保证类型运算的完整型，对于没有返回值的函数，返回值的类型就可以写成 `never`**。

**如果一个变量可能有多种类型（即联合类型），通常需要使用分支处理每一种类型，这时，处理所有可能的类型之后，剩余的情况就属于 `never` 类型**。

```ts
function fn(x:string|number) {
  if (typeof x === 'string') {
    // ...
  } else if (typeof x === 'number') {
    // ...
  } else {
    x; // never 类型
  }
}
```

上述代码中，参数变量 `x` 可能是字符串，也可能是数值，判断了这两种情况后，剩下 `else` 分支中，`x` 就是 `never` 类型。

**`never` 类型的一个重要特点：可以赋值给任意其它类型**。

```ts
function f():never {
  throw new Error('Error');
}

let v1:number = f(); // 不报错
let v2:string = f(); // 不报错
let v3:boolean = f(); // 不报错
```

上面示例中，函数 `f()` 会抛出错误，所以返回值类型可以写成 `never`，即不返回任何值，**各种其它类型的变量都可以赋值为 `f()` 的运行结果（`never` 类型）**。

**之所以会这样跟集合论有关，因为空集是任何集合子集，TypeScript 就相应规定，任何类型都包含了`never` 类型，因此 `never` 类型是任何其它类型所共有的**，TypeScript 把这种情况称为 **“底层类型”（bottom type）**。

总之，**TypeScript 有两个 “顶层类型”（`any`和`unknown`），但是 “底层类型” 只有 `never` 唯一一个**。



## 类型系统

JavaScript 语言将值分为 8 种类型。

- boolean
- string
- number
- bigint
- symbol
- object
- undefined
- null

TypeScript 继承了 JavaScript 的类型设计，**以上 8 种类型可以看作 TypeScript 的基本类型**。

**⚠️ 注意：上面类型的名称都是小写字母**，首字母大写的 `Number`、`String`、`Boolean` 等**在 JavaScript 语言中都是内置对象，而不是类型名称**。

**其中 `undefined` 和 `null` 即可以作为值，也可以作为类型，取决于在哪里使用它们**。

这 8 种基本类型是 TypeScript 类型系统的基础，**复杂类型由它们组合而成**。



**boolean 类型**

`boolean` 类型只包含 `true` 和 `false` 两个布尔值。

```ts
const x:boolean = true;
const y:boolean = false;
```

上述代码中，变量 `x` 和 `y` 就属于 `boolean` 类型。



**string 类型**

`string` 类型包含所有字符串。

```ts
const x:string = 'hello';
const y:string = `${x} world`;
```

上述代码中，普通字符串和模板字符串都属于 `string` 类型。



**number 类型**

`number` 类型包含所有整数和浮点数。

```ts
const x:number = 123;
const y:number = 3.14;
const z:number = 0xffff;
```

上述代码中，整数、浮点数和非十进制数都属于 `number` 类型。



**bigint 类型**

`bigint` 类型包含所有的大整数。

```ts
const x:bigint = 123n;
const y:bigint = 0xffffn;
```

上述代码中，变量 `x` 和 `y` 都属于 `bigint` 类型。

**⚠️ 注意：`bigint` 与 `number` 类型不兼容**，例如：

```ts
// 报错
const x:bigint = 123;  // Type 'number' is not assignable to type 'bigint'.
const y:bigint = 3.14; // Type 'number' is not assignable to type 'bigint'.
```

上述代码中，`bigint` 类型赋值为整数和小数，都会报错。

**⚠️ 注意：`bigint` 类型是 ES2020 标准引入的，如果使用这个类型，TypeScript 编译的目标 JavaScript 版本不能低于 ES2020（即编译参数 `target` 不低于 `es2020`）**。



**symbol 类型**

`symbol` 类型包含所有的 Symbol 值。

```ts
const x:symbol = Symbol();
```

上述代码中，`Symbol()` 函数的返回值就是 `symbol` 类型。



**object 类型**

根据 JavaScript 的设计，object 类型包含了所有对象、数组和函数。

```ts
const x:object = { foo: 123 };
const y:object = [1, 2, 3];
const z:object = (n:number) => n + 1;
```

上述代码中，对象、数组、函数都属于 `object` 类型。



**undefined 类型，null 类型**

`undefined` 和 `null` 是两种独立类型，**它们各自都只有一个值**。

`undefined` 类型只包含一个值 `undefined`，**表示未定义（即还未给出定义，以后可能会有定义）**。

```ts
let x:undefined = undefined;
```

上述代码中，变量 `x` 就属于 `undefined` 类型，两个 `undefined` 中，第一个是类型，第二个是值。

`null` 类型也只包含一个值 `null`，**表示空（即此处没有值）**。

```ts
const x:null = null;
```

上述代码中，变量 `x` 就属于 `null` 类型。

**⚠️ 注意：如果没有声明类型的变量，被赋值为 `undefined` 或 `null`，在关闭编译设置 `noImplicitAny` 和 `strictNullChecks` 时，它们的类型会被推断为 `any`**，例如：

```ts
// 关闭 noImplicitAny 和 strictNullChecks

let a = undefined;   // any
const b = undefined; // any

let c = null;        // any
const d = null;      // any
```

如果希望避免这种情况，则需要打开编译器选项 `strictNullChecks`。

```ts
// 打开编译设置 strictNullChecks

let a = undefined;   // undefined
const b = undefined; // undefined

let c = null;        // null
const d = null;      // null
```

上述代码中，打开编译设置 `strictNullChecks` 之后，赋值为 `undefined` 的变量会被推断为 `undefined` 类型，赋值为 `null` 的变量会被推断为 `null` 类型。



**包装对象类型**

JavaScript 的 8 种类型之中，**`undefined` 和 `null` 其实是两个特殊值**。

`object` 属于复合类型，**剩下的五种属于原始类型（primitive value），代表最基本的、不可再分的值**。

- boolean
- string
- number
- bigint
- symbol

**上面这五种原始类型的值，都有对应的包装对象（wrapper object）**，所谓 “包装对象”，指的是这些值在需要时，会自动产生的对象。

```ts
'hello'.charAt(1); // 'e'
```

上述代码中，字符串 `'hello'` 执行了 `charAt()` 方法，但是，**在 JavaScript 语言中，只有对象才有方法，原始类型的值本身没有方法**，这行代码之所以可以运行，是**因为在调用方法时，字符串会自动转为包装对象**，`charAt()` 方法其实是定义在包装对象上。

这样的设计大大方便了字符串处理，**省去了将原始类型的值手动转成对象实例的麻烦**。

在以上五种包装对象之中，**`symbol` 类型和 `bigint` 类型无法直接获取它们的包装对象（即 `Symbol()` 和 `BigInt()` 不能作为构造函数使用）**，但剩下的三种可以：

- `Boolean()`
- `String()`
- `Number()`

以上三个构造函数，**执行后可以直接获取某个原始类型值的包装对象**。

```ts
const s = new String('hello');
typeof s // 'object'
s.charAt(1) // 'e'
```

上述代码中，`s` 就是字符串 `'hello'` 的包装对象，**`typeof` 运算符返回 `object`，不是 `string`，但是本质上它还是字符串**，可以使用所有的字符串方法。

**⚠️ 注意：`String()` 只有当作构造函数使用时（即带有 `new` 指令的调用），才会返回包装对象，如果当做普通函数使用（不带 `new` 指令），返回的就是一个普通字符串，其它两个构造函数 `Number()` 和 `Boolean()` 也是如此**。



**包装对象类型与字面量类型**

由于包装对象的存在，**导致每一个原始类型的值都有包装对象和字面量两种情况**。

```ts
'hello'; // 字面量
new String('hello'); // 包装对象
```

**为了区分这两种情况，TypeScript 对五种原始类型分别提供了大写和小写两种类型**。

- Boolean 和 boolean
- String 和 string
- Number 和 number
- BigInt 和 bigint
- Symbol 和 symbol

其中，**大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象**。

```ts
const s1:String = 'hello'; // 正确
const s2:String = new String('hello'); // 正确

const s3:string = 'hello'; // 正确
const s4:string = new String('hello'); // 报错
// Type 'String' is not assignable to type 'string'.
//  'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
```

上述代码中，`String` 类型可以赋值为字符串的字面量，也可以赋值包装对象，但 `string` 类型只能赋值为字面量，赋值为包装对象就会报错。

**建议只使用小写类型，不使用大写类型，因为绝大部分使用原始类型的场合，都是使用字面量，不使用包装对象**，而且 **TypeScript 把很多内置方法的参数都定义成小写类型，使用大写类型会报错**。

```ts
const n1:number = 1;
const n2:Number = 1;

Math.abs(n1) // 1
Math.abs(n2) // 报错
```

上述代码中，**`Math.abs()` 方法的参数类型被定义成小写的 `number`，传入大写的 `Number` 类型的参数会报错**。

`Symbol()` 和 `BigInt()` 这两个函数不能当做构造函数使用，所以**没有办法直接获得 `symbol` 类型和 `bigint` 类型的包装对象，除非使用以下的写法**，但是它们没有使用场景，**因此 `Symbol` 和 `BigInt` 这两个类型虽然存在，但是完全没有使用的理由**。

```ts
let a = Object(Symbol());
let b = Object(BigInt());
```

上述代码中，得到的是 `Symbol` 和 `BigInt` 的包装对象，但是没有使用的意义。

**⚠️ 注意：在 TypeScript 中，`symbol` 和 `Symbol` 两种写法没有差异，`bigint` 和 `BigInt` 也是如此，不知道是否属于官方的疏忽，建议始终使用小写的 `symbol` 和 `bigint`，不使用大写的 `Symbol` 和 `BigInt`**。



**Object 类型**

大写的 `Object` 类型**代表 JavaScript 语言里的广义对象，所有可以转成对象的值，都是 `Object` 类型**，这囊括了几乎所有的值。

```ts
let obj:Object;
 
obj = true;
obj = 'hi';
obj = 1;
obj = { foo: 123 };
obj = [1, 2];
obj = (a:number) => a + 1;
```

上述代码中，**原始类型值、对象、数组、函数都是合法的 `Object` 类型**。

事实上，**除了 `undefined` 和 `null` 这两个值不能转为对象，其它任何值都可以赋值给 `Object` 类型**。

```ts
let obj:Object;

obj = undefined; // 报错
obj = null; // 报错
```

另外，**空对象 `{}` 是 `Object` 类型的简写形式，所以使用 `Object` 时常常用空对象代替**。

```ts
let obj:{};

obj = true;
obj = 'hi';
obj = 1;
obj = { foo: 123 };
obj = [1, 2];
obj = (a:number) => a + 1;
```

上述代码中，**变量 `obj` 的类型是空对象 `{}`，就代表 `Object` 类型**。

显然，**无所不包的 `Object` 类型既不符合直觉，也不方便使用**。



**object 类型**

小写的 `object` 类型代表 JavaScript 中的狭义对象，**即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值**。

```ts
let obj:object;
 
obj = { foo: 123 };
obj = [1, 2];
obj = (a:number) => a + 1;
obj = true; // 报错
obj = 'hi'; // 报错
obj = 1; // 报错
```

**大多数时候使用对象类型，只希望包含真正的对象，不希望包含原始类型，所以建议总是使用小写类型 `object`，不使用大写类型 `Object`**。

**⚠️ 注意：无论是大写的 `Object` 类型，还是小写的 `object` 类型，都只包含 JavaScript 内置对象原生的属性和方法，用户自定义的属性和方法都不存在于这两个类型之中**，例如：

```ts
const o1:Object = { foo: 0 };
const o2:object = { foo: 0 };

o1.toString(); // 正确
o1.foo; // 报错

o2.toString(); // 正确
o2.foo; // 报错
```

上述代码中，`toString()` 是对象的原生方法，可以访问，但 `foo` 是自定义属性，访问会报错。



**undefined 和 null 的特殊性**

`undefined` 和 `null` 既是值，又是类型。

**作为值，它们有一个特殊的地方：任何其它类型的变量都可以赋值为 `undefined` 或 `null`**。

```ts
let age:number = 24;

age = null;      // 正确
age = undefined; // 正确
```

**这并不是因为 `undefined` 和 `null` 包含在 `number` 类型里面，而是故意这样设计，任何类型的变量都可以赋值为 `undefined` 和 `null`，以便跟 JavaScript 的行为保持一致**。

JavaScript 的行为是，变量如果等于 `undefined` 就表示还没有赋值，如果等于 `null` 就表示值为空，**所以 TypeScript 就允许了任何类型的变量都可以赋值为这两个值**。

但有时候这并不是开发者想要的行为，也不利于发挥类型系统的优势。

```ts
const obj:object = undefined;
obj.toString() // 编译不报错，运行就报错
```

例如上述代码中，变量 `obj` 等于 `undefined`，编译不会报错，但是实际执行时，调用 `obj.toString()` 就报错了，因为 `undefined` 不是对象，没有这个方法。

**为了避免这种情况，及早发现错误，TypeScript 提供了一个编译选项 `strictNullChecks`，只要打开这个选项，`undefined` 和 `null` 就不能赋值给其它类型的变量（除了 `any` 类型和 `unknown` 类型）**。

下面是 `tsc` 命令打开这个编译选项的例子。

```ts
// tsc --strictNullChecks app.ts

let age:number = 24;

age = null;      // 报错
age = undefined; // 报错
```

这个选项在配置文件 `tsconfig.json` 的写法如下：

```json
{
  "compilerOptions": {
    "strictNullChecks": true
    // ...
  }
}
```

打开 `strictNullChecks` 以后，**`undefined` 和 `null` 这两种值也不能互相赋值了**。

```ts
// 打开 strictNullChecks

let x:undefined = null; // 报错
let y:null = undefined; // 报错
```

总而言之，**打开 `strictNullChecks` 之后，`undefined` 和 `null` 只能赋值给自身，或者 `any` 类型和 `unknown` 类型的变量**。

```ts
let x:any = undefined;
let y:unknown = null;
```



**值类型**

TypeScript 规定，**单个值也是一种类型，称为 “值类型”**。

```ts
let x:'hello';

x = 'hello'; // 正确
x = 'world'; // 报错
```

上述代码中，变量 `x` 的类型是字符串 `'hello'`，**导致它只能赋值为这个字符串，赋值为其它字符串就会报错**。

**TypeScript 推断类型时，遇到 `const` 声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型**。

```ts
// x 的类型是 'https'
const x = 'https';

// y 的类型是 string
const y:string = 'https';

// z 的类型是 string
let z = 'https';
```

上述代码中，**变量 `x` 是 `const` 命令声明的，TypeScript 就会推断它的类型是值 `'https'`，而不是 `string` 类型**。

**这样推断是合理的**，因为 `const` 声明的变量，一旦声明就不能改变，相当于常量，**值类型就意味着不能赋值为其它值**。

**⚠️ 注意：`const` 声明的变量，如果赋值为对象，并不会推断为值类型**，例如：

```ts
// x 的类型是 { foo: number }
const x = { foo: 1 };
```

上述代码中，变量 `x` **没有被推断为值类型**，而是推断属性 `foo` 的类型为 `number`，**因为在 JavaScript 中，`const` 变量赋值为对象时，属性值是可以改变的**。

值类型可能会出现一些很奇怪的报错。

```ts
const x:5 = 4 + 1; // 报错
```

上述代码中，**等号左侧的类型是数值 `5`，等号右侧 `4 + 1` 的类型 TypeScript 推断为 `number`，由于 `5` 是 `number` 的子类型，`number` 是 `5` 的父类型，父类型不能赋值给子类型，所以报错了**。

但反过来是可以的，**子类型可以赋值给父类型**。

```ts
let x:5 = 5;
let y:number = 4 + 1;

x = y; // 报错
y = x; // 正确
```

**如果一定要让子类型赋值为父类型的值，就要用到类型断言**。

```ts
const x:5 = (4 + 1) as 5; // 正确
```

上述代码中，在 `4 + 1` 后面加上 `as 5`，就是告诉编辑器，可以把 `4 + 1` 的类型视为值类型 `5`，这样就不会报错了。

值包含单个值的值类型用处不大，**实际开发中，往往将多个值结合，作为联合类型使用**。



**联合类型**

联合类型（union types）指**多个类型组成一个新类型，使用符号 `|` 表示**。

联合类型 `A|B` 表示：**任何一个类型只要属于 `A` 或 `B`，就属于联合类型 `A|B`**。

```ts
let x:string|number;

x = 123; // 正确
x = 'abc'; // 正确
```

上述代码中，变量 `x` 就是联合类型 `string|number`，表示它的值既可以是字符串，也可以是数值。

**联合类型可以与值类型相结合，表示一个变量的值有若干种可能**。

```ts
let setting:true|false;

let gender:'male'|'female';

let rainbowColor:'赤'|'橙'|'黄'|'绿'|'青'|'蓝'|'紫';
```

上述代码中的所有变量都是由值类型组成的联合类型，清晰地表达了变量的取值范围，**其中 `true|false` 其实就是布尔类型 `boolean`**。

之前提到的，**打开编译选项 `strictNullChecks` 后，其它类型的变量不能赋值为 `undefined` 或 `null`，如果某个变量确实可能包含空值，就可以采用联合类型的写法**，例如：

```ts
let name:string|null;

name = 'John';
name = null;
```

**联合类型的第一个成员前面，也可以加上竖杠 `|`，这样便于多行书写**。

```ts
let x:
  | 'one'
  | 'two'
  | 'three'
  | 'four';
```

上述代码中，联合类型的第一个成员 `one` 前面，加上了竖杠。

**如果一个变量有多种类型，读取该变量时，往往需要进行 “类型缩小”（type narrowing）**，来区分该值到底属于哪一种类型，然后再进一步处理。

```ts
function printId(id:number|string) {
  console.log(id.toUpperCase()); // 报错
}
```

上述代码中，**参数变量 `id` 可能是数值，也可能是字符串，这时直接对这个变量调用 `toUpperCase()` 方法会报错，因为这个方法只存在于字符串，不存在于数值**。

**解决方法就是对参数 `id` 做一下类型缩小，确定它的类型以后再进行处理：**

```ts
function printId(id:number|string) {
  
  if(typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

**“类型缩小” 是 TypeScript 处理联合类型的标准方法**，凡是遇到可能为多种类型的场合，都需要先缩小类型，再进行处理。

实际上，**联合类型本身可以看成一种 “类型放大”（type widening），处理时就需要 “类型缩小”（type narrowing）**。

下面是 “类型缩小” 的另一个例子：

```ts
function getPort(scheme:'http'|'https') {
  switch(scheme) {
    case 'http':
      return 80;
    case 'https':
      return 443;
  }
}
```



**交叉类型**

交叉类型（intersection types）指**多个类型组成一个新的类型，使用符号 `&` 表示**。

交叉类型 `A&B` 表示，**任何一个类型必须同时属于 `A` 和 `B`，才属于交叉类型 `A&B`**，即交叉类型同时满足`A`和`B`的特征。

```ts
let x:number&string;
```

上述代码中，**变量 `x` 同时是数值和字符串，这当然是不可能的，所以 TypeScript 会推断 `x` 的类型为 `never`**。

**交叉类型的主要用途是表示对象的合成**。

``` ts
let obj:
  { foo: string } &
  { bar: string };

obj = {
  foo: 'hello',
  bar: 'world'
};
```

上述代码中，变量 `obj` 同时具有属性 `foo` 和属性 `bar`。

**交叉类型常常用来为对象类型添加新属性**：

```ts
type A = { foo: number };

type B = A & { bar: number };
```

上述代码中，**类型 `B` 是一个交叉类型，在 `A` 的基础上增加了属性 `bar`**。



**type 命令**

`type` 命令用来**定义一个类型的别名**。

```ts
type Age = number;

let age:Age = 55;
```

上述代码中，**`type` 命令为 `number` 类型定义了一个别名 `Age`，这样就能像使用 `number` 一样，使用 `Age` 作为类型**。

**别名可以让类型的名字变得更有意义，也能增加代码的可读性**，还可以使复杂类型用起来更方便，便于以后修改变量的类型。

**⚠️ 注意：别名不允许重名**。

```ts
type Color = 'red';

// 报错
type Color = 'blue'; // Duplicate identifier 'Color'.
```

上述代码中，同一个别名 `Color` 声明了两次就报错了。

**别名的作用域是块级作用域，这意味着代码块内部定义的别名，影响不到外部**。

```ts
type Color = 'red';

if (Math.random() < 0.5) {
  type Color = 'blue';
}
```

上述代码中，`if` 代码块内部的类型别名 `Color`，跟外部的 `Color` 是不一样的。

**别名支持使用表达式，也可以在定义一个别名时，使用另一个别名**，即别名允许嵌套。

```ts
type World = 'world';
type Greeting = `hello ${World}`;
```

上述代码中，**别名 `Greeting` 使用了模版字符串，读取了另一个别名 `World`**。

**`type` 命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除**。



**typeof 运算符**

JavaScript 语言中，**`typeof` 运算符是一个一元运算符，返回一个字符串，代表操作数的类型**。

```ts
typeof 'foo'; // 'string'
```

**⚠️ 注意：这时 `typeof` 的操作数是一个值**。

在 JavaScript 中，**`typeof` 运算符只可能返回 8 种结果，而且都是字符串**。

```ts
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof 1337; // 'number'
typeof 'foo'; // 'string'
typeof {}; // 'object'
typeof parseInt; // 'function'
typeof Symbol(); // 'symbol'
typeof 127n // 'bigint'
```

**TypeScript 将 `typeof` 运算符移植到了类型运算中，它的操作数依然是一个值，但返回的不是字符串，而是该值的 TypeScript 类型**。

```ts
const a = { x: 0 };

type T0 = typeof a;   // { x: number }
type T1 = typeof a.x; // number
```

上述代码中，`typeof a` 表示返回变量 `a` 的 TypeScript 类型（`{ x: number }`），同理，`typeof a.x` 返回的是属性 `x` 的 TypeScript 类型（`number`）。

**这种用法的 `typeof` 返回的是 TypeScript 类型，所以只能用在类型远算之中（即跟类型相关的代码之中），不能用在值运算**。

也就是说，**同一段代码可能存在两种 `typeof` 运算符，一种用在值相关的 JavaScript 代码部分，另一种用在类型相关的 TypeScript 代码部分**。

```ts
let a = 1;
let b:typeof a;

if(typeof a === 'number') {
  b = a;
}
```

上述代码中，用到了两个 `typeof`，第一个是类型运算，第二个是值运算，它们是不一样的。

JavaScript 的 `typeof` 遵守 JavaScript 规则，TypeScript 的 `typeof` 遵守 TypeScript 规则，它们的一个重要区别在于，**编译后前者会保留，后者会被全部删除**。

上例的代码编译结果如下：

```ts
let a = 1;
let b;

if(typeof a === 'number') {
  b = a;
}
```

结果中只保留了原始代码的第二个 `typeof`，删除了第一个 `typeof`。

**由于编译时不会进行 JavaScript 的值运算，所以 TypeScript 规定，`typeof` 的参数只能是标识符，不能是需要运算的表达式**。

```ts
type T = typeof Date(); // 报错
```

上述代码会报错，**原因是 `typeof` 的参数不能是一个值的运算式，而 `Date()` 需要运算才知道结果**。

另外，**`typeof` 命令的参数不能是类型**。

```ts
type Age = number;

// 报错
type MyAge = typeof Age; // 'Age' only refers to a type, but is being used as a value here.
```

上述代码中，**`Age` 是一个类型别名，用作 `typeof` 命令的参数就会报错**。

`typeof` 是一个很重要的 TypeScript 运算符，**有些场合不知道某个变量 `foo` 的类型，这时使用 `typeof foo` 就可以获得它的类型**。



**块级类型声明**

**TypeScript 支持块级类型声明，即类型可以声明在代码块（用大括号表示）中，并且只在当前代码块有效**。

```ts
if (true) {
  type T = number;
  let v:T = 5;
} else {
  type T = string;
  let v:T = 'hello';
}
```

上述代码中，两个声明都只在自己的代码块内部有效，在代码块外部无效。



**类型的兼容**

TypeScript 的类型存在兼容关系，**某些类型可以兼容其它类型**。

```ts
type T = number|string;

let a:number = 1;
let b:T = a;
```

上述代码中，变量 `a` 和 `b` 的类型是不一样的，**但是变量 `a` 赋值给变量 `b` 并不会报错，这时就认为 `b` 的类型兼容 `a` 的类型**。

TypeScript 为这种情况定义了一个专门术语，**如果类型 `A` 的值可以赋值给类型 `B`，那么类型 `A` 就称为类型 `B` 的子类型（subtype）**。

TypeScript 的一个规则是：**凡是可以使用父类型的地方，都可以使用子类型，但是反过来不行**。

```ts
let a:'hi' = 'hi';
let b:string = 'hello';

b = a; // 正确
a = b; // 错误
```

之所以有这样的规则，是**因为子类型继承了父类型的所有特征，所以可以用在父类型的场合，但是子类型还可能有一些父类型没有的特征，所以父类型不能用在子类型的场合**。





## 数组

TypeScript 数组有一个根本的特征：**所有成员的类型必须相同，但成员数量是不确定的，可以是无限数量的成员，也可以是零成员**。

数组的类型常见的有两种写法：

1. **在数组成员的类型后面，加上一对方括号**

   ```ts
   let arr:number[] = [1, 2, 3];
   ```

   如果数组成员的**类型比较复杂，可以写在圆括号中**。

   ```ts
   let arr:(number|string)[];
   ```

   上述代码表示数组 `arr` 的成员类型是 `number|string`。

   **⚠️ 注意：这个例子中的圆括号是必须的，否则因为竖杠 `|` 的优先级低于 `[]`，TypeScript 会把 `number|string[]` 理解为 `number` 和 `string[]` 的联合类型**。

   如果数组成员可以是任意类型，写成 `any[]`，**但这种写法应该要避免**。

   ```ts
   let arr:any[];
   ```

   

2. **使用 TypeScript 内置的 Array 接口**

   ```ts
   let arr:Array<number> = [1, 2, 3];
   ```

   上述代码中，数组 `arr` 的类型是 `Array<number>`，其中 `number` 表示成员类型是 `number`。

   这种写法**对于成员类型比较复杂的数组，代码可读性会稍微好一些**，例如：

   ```ts
   let arr:Array<number|string>;
   ```

   这种写法本质上属于**泛型**。

数组类型声明了以后，成员数量是不限制的，任意数量的成员都可以，也可以是空数组。

```ts
let arr:number[];
arr = [];
arr = [1];
arr = [1, 2];
arr = [1, 2, 3];
```

这种规定的隐藏含义是：**数组的成员是可以动态变化的**。

```ts
let arr:number[] = [1, 2 ,3];

arr[3] = 4;
arr.length = 2;

arr; // [1, 2]
```

上述代码中，对数组增加成员或减少成员都是可以的。

由于成员数量可以动态变化，所以 **TypeScript 不会对数组边界进行检查，越界访问数组并不会报错**。

```ts
let arr:number[] = [1, 2, 3];
let foo = arr[3]; // 正确
```

**TypeScript 中允许使用方括号读取数组成员的类型**。

```ts
type Names = string[];
type name = Names[0]; // string
```

**由于数组成员的索引类型都是 `number`，所以读取成员类型也可以写成下面这样**：

```ts
type Names = string[];
type Name = Names[number]; // string
```



**数组的类型推断**

如果数组变量没有声明类型，**TypeScript 就会推断数组成员的类型，推断行为会因为值的不同，而有所不同**。

**如果变量的初始值是空数组，那么 TypeScript 会推断数组类型为 `any[]`**。

```ts
// 推断为 any[]
const arr = [];
```

**之后为这个数组赋值时，TypeScript 会自动更新类型推断**。

```ts
const arr = [];
arr; // 推断为 any[]

arr.push(123);
arr; // 推断为 number[]

arr.push('abc');
arr; // 推断为 (string|number)[]
```

上述代码中，数组的类型会随着新成员的加入，TypeScript 会自动修改推断的数组类型。

**但类型推断的自动更新只发生在初始值为空数组的情况，如果初始值不是空数组，类型推断就不会更新**。

```ts
const arr = [123];

arr.push('abc'); // 报错
```



**只读数组，const 断言**

JavaScript 规定，**`const` 声明的数组变量是可以改变成员的**。

```js
const arr = [0, 1];
arr[0] = 2;
```

但很多时候确实**有声明为只读数组的需求，即不允许变动数组成员**。

TypeScript 允许声明只读数组，**方法是在数组类型前面加上 `readonly` 关键字**。

```ts
const arr:readonly number[] = [0, 1];

arr[1] = 2; // 报错
arr.push(3); // 报错
delete arr[0]; // 报错
```

上述代码中，`arr` 是一个只读数组，对它删除、修改、新增数组成员都会报错。

**TypeScript 将 `readonly number[]` 与 `number[]` 视为两种不一样的类型，后者是前者的子类型**。

这是**因为只读数组没有 `pop()`、`push()` 之类会改变原数组的方法，所以 `number[]` 的方法数量要多于 `readonly number[]`**，这就意味着 `number[]` 其实是 `readonly number[]` 的子类型。

子类型继承了父类型的所有特征，并加上了自己的特征，**所以子类型 `number[]` 可以用于所有使用父类型的场合，反过来就不行**。

```ts
let a1:number[] = [0, 1];
let a2:readonly number[] = a1; // 正确

a1 = a2; // 报错
```

由于只读数组是数组的父类型，**所以它不能代替数组，这一点容易产生让人困惑的报错**。

```ts
function getSum(s:number[]) {
  // ...
}

const arr:readonly number[] = [1, 2, 3];

getSum(arr); // 报错
```

上述代码中，报错的原因是**只读数组是数组的父类型，父类型不能替代子类型**。

**⚠️ 注意：`readonly` 关键字不能与数组的泛型写法一起使用**，例如：

```ts
// 报错
const arr:readonly Array<number> = [0, 1]; // 'readonly' type modifier is only permitted on array and tuple literal types.
```

因为实际上，**TypeScript 专门提供了两个泛型，用来生成只读数组的类型：**

```ts
const a1:ReadonlyArray<number> = [0, 1];

const a2:Readonly<number[]> = [0, 1];
```

上述代码中，泛型 `ReadonlyArray<T>` 和 `Readonly<T[]>` 都可以用来生成只读数组类型。

**只读数组还有一种声明方法，就是使用 “const 断言”**。

```ts
const arr = [0, 1] as const;

arr[0] = [2]; // 报错 
```

上述代码中，**`as const` 告诉 TypeScript，推断类型时要把变量 `arr` 推断为只读数组，从而使得数组成员无法改变**。



**多维数组**

TypeScript **使用 `T[][]` 的形式来表示二维数组，`T` 是最底层数组成员的类型**。

```ts
const multi:number[][] = [[1,2,3], [23,24,25]];
```

上述代码中，变量 `multi` 的类型是 `number[][]`，表示它是一个二维数组，最底层的数组成员类型是 `number`。



## 元组

元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型，**它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同**。

由于成员的类型可以不一样，所以**元组必须明确声明每个成员的类型**。

``` ts
const s:[string, string, boolean] = ['a', 'b', true];
```

元组类型的写法，与数组类型有一个重大差异：**数组的成员类型写在方括号外面（`number[]`），元组的成员类型是写在方括号里面**。

```ts
// 数组
let a:number[] = [1];

// 元组
let t:[number] = [1];
```

上述代码中，变量 `a` 和 `t` 的值都是 `[1]`，但它们的类型是不一样的。

**使用元组时，必须明确给出类型声明，不能省略，否则 TypeScript 会把一个值自动推断为数组**。

```ts
// a 的类型被推断为 (number | boolean)[]
let a = [1, true];
```

**元组成员的类型可以添加问号后缀（`?`），表示该成员是可选的**。

```ts
let a:[number, number?] = [1];
```

**⚠️ 注意：问号只能用于元组的尾部成员，所有可选成员必须在必选成员之后**，例如：

```ts
type myTuple = [
  number,
  number,
  number?,
  string?
];
```

由于需要声明每个成员的类型，所以**在大多数情况下，元组的成员数量是有限的，从类型声明就可以明确知道，元组包含了多少个成员，越界的成员会报错**。

```ts
let x:[string, string] = ['a', 'b'];

x[2] = 'c'; // 报错
```

但是，**使用扩展运算符（`...`），可以表示不限成员数量的元组**。

```ts
type NamedNums = [
  string,
  ...number[]
];

const a:NamedNums = ['A', 1, 2];
const b:NamedNums = ['B', 1, 2, 3];
```

上述代码中，元组类型 `NamedNums` 的第一个成员是字符串，后面的成员使用扩展运算来展开一个数组，从而实现了不定数量的成员。

**扩展运算符（`...`）用在元组的任意位置都可以，它的后面只能是一个数组或元组**。

```ts
// ... 后跟数组
type t1 = [string, number, ...boolean[]];
type t2 = [string, ...boolean[], number];

// ... 后跟元组
type t3 = [...t2, string, number];
```

**如果不确定元组成员的类型和数量，可以写成下面这样**：

```ts
type Tuple = [...any[]];
```

上述代码中，元组 `Tuple` 可以放置任意数量和类型的成员，**但是这样写也就失去了使用元组和 TypeScript 的意义**。

**元组的成员可以添加成员名，这个成员名是说明性的，可以任意取名，没有实际作用**。

```ts
type Color = [
  red: number,
  green: number,
  blue: number
];

const c:Color = [255, 255, 255];
```

**元组可以通过方括号，读取成员类型**。

```ts
type Tuple = [string, number];
type Age = Tuple[1]; // number;
```

**由于元组的成员都是数值索引，即索引类型都是 `number`，所以可以像下面这样读取**：

```ts
type Tuple = [string, number, Date];
type TupleEl = Tuple[number];  // string|number|Date
```

上述代码中，**`Tuple[number]` 表示元组 `Tuple` 的所有数值索引的成员类型**，返回 `string|number|Date`，即这个类型是三种值的联合类型。



**只读元组**

**元组也可以是只读的，不允许修改**，有两种写法：

```ts
// 写法一
type t = readonly [number, string];

// 写法二
type t = Readonly<[number, string]>;
```

上述代码中，两种写法都可以得到只读元组，**其中写法二是一个泛型，用到了工具类型 `Readonly<T>`**。

跟数组一样，**只读元组是元组的父类型，所以元组可以替代只读元组，而只读元组不能替代元组**。

```ts
type t1 = readonly [number, number];
type t2 = [number, number];

let x:t2 = [1, 2];
let y:t1 = x; // 正确

x = y; // 报错
```

由于只读元组不能替代元组，所以会产生一些令人困惑的报错。

```ts
function distanceFromOrigin([x, y]:[number, number]) {
  return Math.sqrt(x**2 + y**2);
}

const point = [3, 4] as const;

distanceFromOrigin(point); // 报错
```

上述代码中用到了 `[3, 4] as const` 的写法，**该写法生成的是只读数组，其实生成的同时也是只读元组**，因为它实际上生成的是一个只读的  “值类型” `readonly [3, 4]`，**把它解读成只读数组或只读元组都可以**。

上述代码报错的解决方法，**使用类型断言，在最后一行将传入的参数断言为普通元组**，例如：

```ts
distanceFromOrigin(
  point as [number, number]
)
```



**成员数量的推断**

**如果没有可选成员和扩展运算符，TypeScript 会推断出元组的成员数量（即元组长度）**。

```ts
function f(point:[number, number]) {
  if(point.length === 3) { // 报错
    // ...
  }
}
```

上述代码会报错，是**因为 TypeScript 发现元组 `point` 的长度是 `2`，不可能等于 `3`**，所以这个判断无意义。

**如果包含了可选成员，TypeScript 会推断出可能的成员数量**。

```ts
function f(
  point:[number, number?, number?]
) {
  if (point.length === 4) {  // 报错
    // ...
  }
}
```

上述代码会报错，**因为 TypeScript 发现 `point.length` 的类型是 `1|2|3`，不可能等于 `4`**。

**如果使用了扩展运算符，TypeScript 就无法推断出成员数量**。

```ts
const myTuple:[...string[]] = ['a', 'b', 'c'];

if (myTuple.length === 4) { // 正确
  // ...
}
```

上述代码中，虽然 `myTuple` 只有三个成员，但是 TypeScript 推断不出它的成员数量，因为它的类型用到了扩展运算符，TypeScript 把 `myTuple` 当成数组看待，而数组的成员数量是不确定的。

**一旦扩展运算符使元组的成员数量无法推断，TypeScript 内部就会把该元组当成数组处理**。



**扩展运算符与成员数量**

**扩展运算符（`...`）将数组转换为一个逗号分隔的序列，这时 TypeScript 会认为这个序列的成员数量是不确定的，因为数组的成员数量是不确定**。

这导致**如果函数调用时，使用扩展运算符传入函数参数，可能发生参数数量与数组长度不匹配的报错**。

```ts
const arr = [1, 2];

function add(x:number, y:number) {
  // ...
}

add(...arr); // 报错
```

上述代码会报错，是因为函数 `add()` 只能接受两个参数，但是传入的是 `...arr`，**TypeScript 认为转换后的参数个数是不确定的**。

**有些函数可以接受任意数量的参数，这时使用扩展运算符就不会报错**。

```ts
const arr = [1, 2, 3];
console.log(...arr); // 不报错
```

上述代码中，**因为 `console.log()` 可以接受任意数量的参数**，所以传入 `...arr` 就不会报错。

解决这个问题的一个方法，**就是把成员数量不确定数组，写成成员数量确定的元组，再使用扩展运算符**。

```ts
const arr:[number, number] = [1, 2];

function add(x:number, y:number){
  // ...
}

add(...arr); // 正确
```

**也可以使用 `as const` 断言**。

```ts
const arr = [1, 2] as const;
```

这种写法也可以，因为 TypeScript **会认为 `arr` 的类型是 `readonly [1, 2]` 是一个只读的值类型，可以当作数组，也可以当作元组**。



## symbol 类型

`Symbol` 是 ES 2015 引入的一种原始类型的值，它类似于字符串，但是**每一个 `Symbol` 值都是独一无二的，与其它任何值都不相等**。

`Symbol` 值通过 `Symbol()` 函数生成，**在 TypeScript 中，`Symbol` 的类型使用 `symbol` 表示**。

```ts
let x:symbol = Symbol();
let y:symbol = Symbol();

x === y; // false
```



**unique symbol**

**`symbol` 类型包含所有的 `Symbol` 值，但无法表示某一个具体的 `Symbol` 值**。

例如，`5` 是一个具体的值，就用 `5` 这个字面量来表示，这也是它的值类型，**但是 `Symbol` 值不存在字面量，必须通过变量来引用，所以写不出只包含单个 `Symbol` 值的那种类型**。

**为了解决这个问题，TypeScript 设计了 `symbol` 的一个子类型 `unique symbol`，它表示单个的、某个具体的 `Symbol` 值**。

因为 `unique symbol` 表示单个值，**所以这个类型的变量是不能修改值的，只能用 `const` 声明，不能用 `let` 声明**。

```ts
// 正确
const x:unique symbol = Symbol();

// 错误
let y:unique symbol = Symbol(); // A variable whose type is a 'unique symbol' type must be 'const'.
```

**`const` 命令为变量赋值 `Symbol` 值时，变量类型默认就是 `unique symbol`，所以类型可以省略不写**。

```ts
const x:unique symbol = Symbol();
// 等同于
const x = Symbol();
```

**每个声明为 `unique symbol` 类型的变量，它们的值都是不一样的，其实属于两个值类型**。

```ts
const a:unique symbol = Symbol();
const b:unique symbol = Symbol();

a === b // 报错
```

上述代码中，变量 `a` 和变量 `b` 的类型虽然都是 `unique symbol`，**但其实是两个值类型，不同类型的值肯定是不相等的，所以最后一行就报错了**。

**由于变量 `a` 和 `b` 是两个类型，所以不能把一个赋值给另一个**。

```ts
const a:unique symbol = Symbol();
const b:unique symbol = a; // 报错
```

如果要**将变量 `b` 写成与变量 `a` 同一个 `unique symbol` 值类型，只能写成类型为 `typeof a`**。

```ts
const a:unique symbol = Symbol();
const b:typeof a = a; // 正确
```

**相同参数的 `Symbol.for()` 方法会返回相同的 `Symbol` 值，TypeScript 目前无法识别这种情况，所以可能出现多个 `unique symbol` 类型的变量，等于同一个 `Symbol` 值的情况**。

```ts
const a:unique symbol = Symbol.for('foo');
const b:unique symbol = Symbol.for('foo');
```

上述代码中，变量 `a` 和 `b` 是两个不同的值类型，**但它们的值其实是相等的**。

**`unique symbol` 类型是 `symbol` 类型的子类型，所以可以将前者赋值给后者**，但反过来了就不行。

```ts
const a:unique symbol = Symbol();

const b:symbol = a; // 正确

const c:unique symbol = b; // 报错
```

**`unique symbol` 类型的一个作用，就是用作属性名，这可以保证不会跟其它属性名冲突**，在 5.8.3 版本之前，如果要把某一个特定的 `Symbol` 值当作属性名，TypeScript 只允许它的类型是 `unique symbol`，不能是 `symbol`，5.8.3 版本之后没有这个限制。

```ts
const x:unique symbol = Symbol();
const y:symbol = Symbol();

interface Foo {
  [x]: string; // 正确
  [y]: string; // 5.8.3 版本之前报错
}
```

**`unique symbol` 类型也可以用作类（class）的属性值，但只能赋值给类的 `readonly static` 属性**。

```ts
class C {
  static readonly foo:unique symbol = Symbol();
}
```

**⚠️ 注意：上述代码中 `static` 和 `readonly` 两个限定符缺一不可，这是为了保证这个属性是固定不变的**。



**类型推断**

如果变量声明没有给出类型，**TypeScript 会推断出某个 `Symbol` 值变量的类型**。

**`let` 声明的变量，推断类型为 `symbol`**。

```ts
// 类型为 symbol
let x = Symbol();
```

**`const` 声明的变量，推断类型为 `unique symbol`**。

```ts
// 类型为 unique symbol
const x = Symbol();
```

**但 `const` 声明的变量，如果赋值为另一个 `symbol`  类型的变量，则推断类型为 `symbol`**。

```ts
let x = Symbol();

// 类型为 symbol
const y = x;
```

**`let` 声明的变量，如果赋值为另一个 `unique symbol` 类型的变量，则推断类型还是 `symbol`**。

```ts
const x = Symbol();

let y = x;
```



## 函数

函数的类型声明，**需要在声明函数时，给出的参数的类型和返回值的类型**。

```ts
function hello(txt:string):void {
  console.log('hello ' + txt);
}
```

上述代码中给出了函数 `hello()` 的参数 `txt` 的类型（`string`）以及返回值的类型（`void`），**后者写在参数列表的圆括号后面，`void` 类型表示没有返回值**。

如果不指定参数类型，TypeScript 就会推断参数类型，**如果缺乏足够信息，就会推断该参数的类型为 `any`**。

**返回值的类型通常可以不写，因为 TypeScript 会自己推断出来**。

```ts
function hello(txt:string) {
  console.log('hello ' + txt);
}
```

上述代码中，由于没有 `return` 语句，TypeScript 会自动推断出函数 `hello()` 没有返回值。

不过，**有时候出于文档目的，或者防止不小心改掉返回值，还是会写返回值的类型**。

如果变量被赋值为一个函数，变量的类型有两种写法：

```ts
// 写法一
const hello = function (txt:string) {
  console.log('hello ' + txt);
}

// 写法二
const hello:(txt:string) => void = function (txt) {
  console.log('hello ' + txt);
}
```

上述代码中，写法一通过等号右边的函数类型，推断出变量 `hello` 的类型，写法二是使用箭头函数的形式，为变量 `hello` 指定类型，参数的类型写在箭头左侧，返回值的类型写在箭头右侧。

写法二有两个地方需要注意：

1. **函数的参数必须要放在圆括号中，不放会报错**
2. **类型中的参数名（本例是 `txt`）是必须的**，如果写成 `(string) => void`，TypeScript 会理解成函数有一个名为 `string` 的参数，并且这个参数类型为 `any`

```ts
type MyFunc = (string, number) => number;
// 等价于 (string: any, number: any) => number
```

**函数类型中的参数名与实际函数的参数名可以不一致**。

```ts
let f:(x:number) => number;

f = function (y:number) {
  return y;
}
```

上述代码中，函数类型里面的参数名为 `x`，实际函数定义里面的参数名为 `y`，两者并不相同。

如果函数的类型定义很冗长，或者多个函数使用同一种类型，写法二用起来很麻烦，因此，**往往用 `type` 命令为函数类型定义一个别名，以便指定给其它变量**。

```ts
type MyFunc = (txt:string) => void;

const hello:MyFunc = function (txt) {
  console.log('hello ' + txt);
}
```

**函数的实际参数个数，可以少于类型指定的参数个数，但是不能多于，即 TypeScript 允许省略参数**。

```ts
let myFunc:(a:number, b:number) => number;

myFunc = (a:number) => a; // 正确

myFunc = (a:number, b:number, c:number) => a + b + c; // 报错
```

之所以这样是**因为 JavaScript 函数在声明时往往有多余的参数，实际使用时可以只传入一部分参数**，例如：数组的 `forEach()` 方法的第一个参数是一个函数，该函数默认有三个参数 `(item, index, array) => void`，实际上往往只使用第一个参数 `(item) => void`，因此 TypeScript 允许函数传入的参数不足。

```ts
let x = (a:number) => 0;
let y = (b:number, s:string) => 0;

y = x; // 正确
x = y; // 报错
```

上述代码中，函数 `x` 只有一个参数，函数 `y` 有两个参数，`x` 可以赋值给 `y`，反过来就不行。

**如果一个变量要套用另一个函数类型，有一个小技巧，就是使用 `typeof` 运算符**。

```ts
function add(x:number, y:number) {
  return x + y;
}

const myAdd:typeof add = function (x, y) {
  return x + y;
}
```

上述代码中，`add` 本身不是类型，而是一个值，所以要用 `typeof` 运算符返回它的类型。

**函数类型还可以采用对象的写法**：

``` ts
let add: {
  (x:number, y:number):number
};

add = function (x, y) {
  return x + y;
}
```

函数类型的对象写法如下：

```
{
  (参数列表): 返回值
}
```

**⚠️ 注意：这种写法的函数参数与返回值之间，间隔符是冒号 `:`，而不是正常写法的箭头 `=>`**，因为这里采用的是对象写法，对象的属性名和值之间用的是冒号。

这种写法平时很少用，但非常适合用在一个场合：函数本身存在属性。

```ts
function f(x:number) {
  console.log(x);
}

f.version = '1.0';
```

上述代码中，函数 `f()` 本身还有一个属性 `version`，**这时 `f` 完全就是一个对象，类型就要使用对象的写法**。

```ts
let foo: {
  (x:number):void;
  version: string
} = f;
```

**函数类型也可以使用 `interface` 来声明，这种写法就是对象写法的翻版**，例如：

```ts
interface myfn {
  (a:number, b:number): number;
}

const add:myfn = (a, b) => a + b;
```

上述代码中，`interface` 定义了接口 `myfn`，这个接口的类型就是一个用对象表示的函数。



**Function 类型**

**TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型**。

```ts
function doSomething(f:Function) {
  return f(1, 2, 3);
}
```

上述代码中，参数 `f` 的类型就是 `Function`，代表这是一个函数。

**`Function` 类型的值都是可以直接执行**。

**`Function` 类型的函数可以接受任意数量的参数，每个参数的类型都是 `any`，返回值的类型也是 `any`**，代表没有任何约束，**所以不建议使用这个类型，给出函数详细的类型声明比较好**。



**箭头函数**

箭头函数是普通函数的一种简化写法，**它的类型写法与普通函数类似**。

```ts
const repeat = (str:string, times:number):string => str.repeat(times);
```

**⚠️ 注意：类型写在箭头函数的定义里面，与使用箭头函数表示函数类型，写法有所不同**。

```ts
function greet(fn:(a:string) => void):void {
  fn('world');
}
```

上述代码中，函数 `greet()` 的参数 `fn` 是一个函数，类型就用箭头函数表示。

再看一个例子：

```ts
type Person = { name: string };

const people = ['alice', 'bob', 'jan'].map(
  (name):Person => ({ name })
);
```

上述代码中，`Person` 是一个类型的别名，代表一个对象，该对象有属性 `name`，变量 `people` 是数组的 `map()` 方法的返回值。

**⚠️ 注意：下面两种写法都是不对的**。

```ts
// 错误
(name:Person) => ({name})

// 错误
name:Person => ({name})
```

上述代码中，第一种写法表示箭头函数的参数 `name` 的类型是 `Person`，同时没写函数返回值的类型，让 TypeScript 自己去推断，第二种写法中，函数参数缺少圆括号。



**可选参数**

如果函数的某个参数可以省略，**则在参数名后面加问号表示**。

```ts
function f(x?:number) {
  // ...
}

f(); // 正确
f(10); // 正确
```

**参数名带有问号，表示该参数的类型实际上是 `原始类型|undefined`**，它有可能为 `undefined`，例如上述代码中的 `x` 虽然声明为 `number`，但实际上是 `number|undefined`。

```ts
function f(x?:number) {
  return x;
}

f(undefined) // 正确
```

**但反过来不成立，类型显式设为 `undefined` 的参数，就不能省略**。

```ts
function f(x:number|undefined) {
  return x;
}

f() // 报错
```

**函数的可选参数只能在参数列表的尾部，跟在必选参数的后面**。

```ts
let myFunc:(a?:number, b:number) => number; // 报错

let myFunc2:(b:number, a?:number) => number; // 正确
```

**如果前部参数有可能为空，这时只能显式注明参数类型可能为 `undefined`**。

```ts
let myFunc: (
    a:number|undefined,
    b:number
  ) => number;
```

**在函数体内部用到可选参数时，需要判断该参数是否为 `undefined`**。

```ts
let myFunc: (a:number, b?:number) => number;

myFunc = function (x, y) {
  if(y === undefined) {
    return x;
  }
  
  return x + y;
}
```



**参数默认值**

TypeScript 函数的参数默认值写法，**与 JavaScript 一致**。

**设置了默认值的函数，就是可选的，如果不传入该参数，它就会等于默认值**。

```ts
function createPoint(
  x:number = 0,
  y:number = 0
):[number, number] {
  return [x, y];
}

createPoint() // [0, 0]
```

**上述代码中可以省略 `x` 和 `y` 的类型声明，因为可以从默认值推断出来**，例如：

```ts
function createPoint(
  x = 0, y = 0
) {
  return [x, y];
}
```

**可选参数与默认值不能同时使用**。

```ts
// 报错
function f(x?: number = 0) {
  // ...
}
```

**设置了默认值的参数，如果传入 `undefined`，也会触发默认值**。

```ts
function f(x = 456) {
  return x;
}

f(undefined) // 456
```

**具有默认值的参数如果不位于参数列表的末尾，调用时不能省略，如果要触发默认值，必须显式传入 `undefined`**。

```ts
function add(
  x:number = 0,
  y:number
) {
  return x + y;
}

add(1) // 报错
add(undefined, 1) // 正确
```



**参数解构**

函数参数如果存在变量解构，类型写法如下：

```ts
// 数组参数解构
function f(
  [x, y]: [number, number]
) {
  // ...
}


// 对象参数解构
function sum(
  { a, b, c }: {
     a: number;
     b: number;
     c: number
  }
) {
  console.log(a + b + c);
}
```

**参数解构可以结合类型别名（`type` 命令）一起使用，代码看起来简洁一些**。

```ts
type ABC = { a:number; b:number; c:number };

function sum({ a, b, c }:ABC) {
  console.log(a + b + c);
}
```



**rest 参数**

rest 参数**表示函数剩余的所有参数，它可以是数组（剩余参数类型相同），也可能是元组（剩余参数类型不同）**。

```ts
// rest 参数为数组
function joinNumbers(...nums:number[]) {
  // ...
}

// rest 参数为元组
function f(...args:[boolean, number]) {
  // ...
}
```

**⚠️ 注意：元组需要声明每一个剩余参数的类型，如果元组里面的参数是可选的，则要使用可选参数**，例如：

```ts
function f(
  ...args:[boolean, string?]
) {}
```

下面是一个 rest 参数的例子：

```ts
function multiply(n:number, ...m:number[]) {
  return m.map((x) => n * x);
}
```

**rest 参数甚至可以嵌套**。

```ts
function f(...args:[boolean, ...string[]]) {
  // ...
}
```

**rest 参数可以与变量解构结合使用**。

```ts
function repeat(
  ...[str, times]: [string, number]
):string {
  return str.repeat(times);
}

// 等同于
function repeat(
  str: string,
  times: number
):string {
  return str.repeat(times);
}
```



**readonly 只读参数**

如果函数内部不能修改某个参数，**可以在函数定义时，在参数类型前加上 `readonly` 关键字，表示这是只读参数**。

```ts
function arraySum(
  arr:readonly number[]
) {
  // ...
  arr[0] = 0; // 报错
}
```

**⚠️ 注意：`readonly` 关键字目前只允许用在数组和元组类型的参数前面，如果用在其它类型的参数前面，就会报错**。



**void 类型**

`void` 类型**表示函数没有返回值**。

```ts
function f():void {
  console.log('hello');
}
```

**如果返回其它值，就会报错**。

```ts
function f():void {
  return 123; // 报错
}
```

**`void` 类型允许返回 `undefined` 或 `null`**。

```ts
function f():void {
  return undefined; // 正确
}

function f():void {
  return null; // 正确
}
```

**如果打开了 `strictNullChecks` 编译选项，那么 `void` 类型只能允许返回 `undefined`，如果返回 `null`，就会报错**，这是因为 JavaScript 规定，如果函数没有返回值，就等同于返回 `undefined`。

```ts
// 打开编译选项 strictNullChecks

function f():void {
  return undefined; // 正确
}

function f():void {
  return null; // 报错
}
```

**⚠️ 注意：如果变量、对象方法、函数参数是一个返回值为 `void` 类型的函数，那么并不代表不能赋值为有返回值的函数，恰恰相反，该变量、对象方法和函数参数可以接受返回任意值的函数，这时并不会报错**。

```ts
type voidFunc = () => void;

const f:voidFunc = () => {
  return 123;
};
```

之所以这样，**是因为 TypeScript 认为，这里的 `void` 类型只是表示该函数的返回值没有利用价值，或者说不应该使用该函数的返回值，只要不用到这里的返回值，就不会报错**。

这样设计是有现实意义的，例如：数组方法 `Array.prototype.forEach(fn)` 的参数 `fn` 是一个函数，而这个函数应该没有返回值，即返回值类型是 `void`。

但在实际应用中，**很多时候传入的函数是有返回值，但是它的返回值不重要，或者不产生作用**。

```ts
const src = [1, 2, 3];
const ret = [];

src.forEach(el => ret.push(el));
```

上述代码中，`push()` 有返回值，表示插入新元素后数组的长度，但是对于 `forEach()` 方法来说，**这个返回值是没有作用的，根本用不到，所以 TypeScript 不会报错**。

如果后面使用了这个函数的返回值，就违反了约定，则会报错。

```ts
type voidFunc = () => void;

const f:voidFunc = () => {
  return 123;
};

f() * 2; // 报错
```

**⚠️ 注意：这种情况仅限于变量、对象方法和函数参数，函数字面量如果声明了返回值是 `void` 类型，还是不能有返回值**。

```ts
function f():void {
  return true; // 报错
}
 
const f3 = function ():void {
  return true; // 报错
};
```

上述代码中，函数字面量声明了返回 `void` 类型，这时只要有返回值（除了 `undefind` 和 `null`） 就会报错。

**函数的运行结果如果是抛出错误，也允许将返回值写成 `void`**。

```ts
function throwErr():void {
  throw new Error('something wrong');
}
```

**除了函数，其它变量声明为 `void` 类型没有多大意义，因为这时只能赋值为 `undefined` 或 `null`**（假定没有打开`strictNullChecks`) 。

```ts
let foo:void = undefined;

// 没有打开 strictNullChecks 的情况下
let bar:void = null;
```



**never 类型**

`never` 类型**表示肯定不会出现的值**，它用在函数的返回值，就**表示某个函数肯定不会返回值，即函数不会正常执行结束**。

它主要有以下两种情况：

1. **抛出错误的函数**

   ```ts
   function fail(msg:string):never {
     throw new Error(msg);
   }
   ```

   上述代码中，**函数 `fail()` 会抛出错误，不会正常退出，所以返回值类型是 `never`**。

   **由于抛出错误的情况属于 `never` 类型或 `void` 类型，所以无法从返回值类型中知道抛出的是哪一种错误**。

2. **无限执行的函数**

   ```ts
   const sing = function():never {
     while (true) {
       console.log('sing');
     }
   };
   ```

   上述代码中，**函数 `sing()` 会永远执行，不会返回，所以返回值类型是 `never`**。

**⚠️ 注意：`never` 类型不同于 `void` 类型，前者表示函数没有执行结束，不可能有返回值，后者表示函数正常执行结束，但不返回值或者说返回 `undefined`**。

```ts
// 正确
function sing():void {
  console.log('sing');
}

// 报错
function sing():never {
  console.log('sing');
}
```

上述代码中，**函数 `sing()` 虽然没有 `return` 语句，但实际上是省略了 `return undefined` 这行语句，真实的返回值是 `undefined`，所以它的返回值类型要写成 `void`，而不是 `never`**，写成 `never` 报错。

如果一个函数抛出了异常或陷入死循环，那么该函数无法正常返回一个值，因此该函数的返回值类型就是 `never`，**如果程序中调用了一个返回值类型为 `never` 的函数，就意味着程序会在该函数调用位置终止，永远不会继续执行后续的代码**。

```ts
function neverReturns():never {
  throw new Error();
}

function f(x:string|undefined) {
  if (x === undefined) {
    neverReturns();
  }

  x; // 推断为 string
}
```

上述代码中，函数 `f()` 的参数 `x` 的类型为 `string|undefined`，**当 `x` 的类型为 `undefined` 时，调用了 `neverReturns()`，这个函数不会返回并且不会执行后续的代码，因此 TypeScript 可以推断出，判断语句后面的那个 `x`，类型一定是 `string`**。

**一个函数如果某些条件下有正常返回值，另一些条件下抛出错误，这时它的返回值类型可以省略 `never`**。

```ts
function sometimesThrow():number {
  if(Math.random() > 0.5) {
    return 100;
  }
  
  throw new Error('Something went wrong');
}

const result = sometimesThrow();
```

上述代码中，**函数 `sometimesThrow()` 的返回值其实是 `number|never`，但一般都写成 `number`，包括最后一行的变量 `result` 的类型，也是被推断为 `number`**。

之所以这样，因为 `never` 是 TypeScript 的唯一一个底层类型，所有其它类型中都包括了 `never`，从集合论角度来看，`number|never` 等同于 `number`，**这也说明了，函数的返回值无论是什么类型，都可能包含了抛出错误的情况**。



**局部类型**

函数内部允许声明其它类型，**该类型只在函数内部有效，被称为局部类型**。

```ts
function hello(txt:string) {
  type message = string;
  let newTxt:message = 'hello ' + txt;
  return newTxt;
}

const newTxt:message = hello('world'); // 报错
```

上述代码中，类型 `message` 是在函数 `hello()` 内部定义的，**只能在函数内部使用，在函数外部使用就会报错**。



**高阶函数**

一个函数的返回值还是一个函数，**那么前一个函数就被称为高阶函数（higher-order function）**。

例如：

```ts
(someValue:number) => (multiplier:number) => someValue * multiplier;
```

上述代码中，箭头函数返回的还是一个箭头函数。



**函数重载**

有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为，**这种根据参数类型或个数不同，执行不同逻辑的行为，被称为函数重载（function overload）**。

```ts
reverse('abc') // 'cba'
reverse([1, 2, 3]) // [3, 2, 1]
```

例如上述代码，函数 `reverse()` 可以将参数颠倒输出，参数可以是字符串，也可以是数组。

这意味着，**该函数内部有处理字符串和数组的两套逻辑，根据参数类型的不同，分别执行对应的逻辑**，这就是 “函数重载”。

**TypeScript 对于 “函数重载” 的类型声明方式是：逐一定义每一种情况的类型**。

```ts
function reverse(str:string):string;
function reverse(arr:any[]):any[];
```

上述代码中，**分别对函数 `reverse()` 的两种情况，给予了类型声明，但到这还没有结束，后面还必须对函数 `reverse()` 给予完整的类型声明**。

```ts
function reverse(str:string):string;
function reverse(arr:any[]):any[];
function reverse(
  stringOrArray:string|any[]
):string|any[] {
  if(typeof stringOrArray === 'string') {
    return stringOrArray.split('').reverse().join('');
  } else {
    return stringOrArray.slice().reverse();
  }
}
```

上述代码中，**前两行类型声明列举了重载的各种情况，第三行是函数本身的类型声明，它必须与前面已有的重载声明兼容**。

有一些编程语言允许不同的函数参数，对应不同的函数实现，**但 JavaScript 中函数只能有一个实现，必须在这个实现中，处理不同的参数，因此函数体内部就需要判断参数的类型及个数，并根据判断结果执行不同的操作**。

```ts
function add(
  x:number,
  y:number
):number;

function add(
  x:any[],
  y:any[]
):any[];

function add(
  x:number|any[],
  y:number|any[]
):number|any[] {
  if(typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else if(Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  }
   
  throw new Error('wrong parameters');
}
```

上述代码中，函数 `add()` 内部使用 `if` 代码块，分别处理参数的情况。

**⚠️ 注意：重载的各个类型描述与函数的具体实现之间，不能有其它代码，否则会报错**。

另外，**虽然函数的具体实现中，有完整的类型声明，但是函数实际调用的类型，以前面的类型声明为主**，比如，上述代码中函数实现，参数类型和返回值类型都是 `number|any[]`，但不意味着参数类型为 `number` 时返回值类型为 `any[]`。

**函数重载的每个类型声明之间，以及类型声明与函数实现的类型之间，不能有冲突**。

```ts
// 报错
function fn(x:boolean):void;
function fn(x:string):void;
function fn(x:number|string) {
  console.log(x);
}
```

**重载声明的排序很重要，因为 TypeScript 是按照顺序进行检查的**，一旦发现符合某个类型声明，就不再往下检查了，**所以类型最宽的声明应该放在最后面，防止覆盖其它类型声明**。

```ts
function f(x:any):number;
function f(x:string): 0|1;
function f(x:any):any {
  // ...
}

const a:0|1 = f('hi'); // 报错
```

上述代码中，**第一行类型声明 `x:any` 范围最宽，导致函数 `f()` 的调用都会匹配这行声明，无法匹配第二行类型声明**，所以最后一行调用就报错了。

**对象的方法也可以使用重载**。

```ts
class StringBuilder {
  #data = '';
  
  add(num:number): this;
  add(bool:boolean): this;
  add(str:string): this;
  add(value:any): this {
    this.#data += String(value);
    return this;
  }

  toString() {
    return this.#data;
  }
}
```

**函数重载也可以用来精确描述函数参数与返回值之间的对应关系**。

```ts
function createElement(
  tag:'a'
):HTMLAnchorElement;
function createElement(
  tag:'canvas'
):HTMLCanvasElement;
function createElement(
  tag:'table'
):HTMLTableElement;
function createElement(
  tag:string
):HTMLElement {
  // ...
}
```

上述代码中，**函数重载精确描述了参数 `tag` 的三个值，所对应的不同的函数返回值**。

这个示例的函数重载，**也可以用对象表示**。

```ts
type CreateElement = {
  (tag:'a'): HTMLAnchorElement;
  (tag:'canvas'): HTMLCanvasElement;
  (tag:'table'): HTMLTableElement;
  (tag:string): HTMLElement;
}
```

由于重载是一种比较复杂的类型声明方法，**为了降低复杂性，一般来说如果可以的话，应该优先使用联合类型替代函数重载，除非多个参数之间、或者某个参数与返回值之间，存在对应关系**。

```ts
// 写法一
function len(s:string):number;
function len(arr:any[]):number;
function len(x:any):number {
  return x.length;
}

// 写法二
function len(x:any[]|string):number {
  return x.length;
}
```

上述代码中，**写法二使用联合类型，要比写法一的函数重载简单很多**。



**构造函数**

JavaScript 语言使用构造函数，生成对象的实例。

**构造函数的最大特点，就是必须使用 `new` 命令调用**。

```ts
const d = new Date();
```

在上述代码中，`Date()` 就是一个构造函数，使用 `new` 命令调用，返回 `Date` 对象的实例。

**构造函数的类型写法，就是在参数列表前面加上 `new` 命令**。

```ts
class Animal {
  numLegs:number = 4;
}

type AnimalConstructor = new () => Animal;

function create(c:AnimalConstructor):Animal {
  return new c();
}

const a = create(Animal);
```

上述代码中，类型 `AnimalConstructor` 就是一个构造函数，而函数 `create()` 需要传入一个构造函数，在 JavaScript 中，类（class）本质上是构造函数，所以 `Animal` 这个类可以传入 `create()`。

**构造函数还有另一种类型写法，就是采用对象形式**。

```ts
type F = {
  new (s:string): object;
};
```

某些函数既是构造函数，又可以当做普通函数使用，比如 `Date()`，这时类型声明可以写成下面这样：

```ts
type F = {
  new (s:string): object;
  (n?:number): number;
}
```

上述代码中，**`F` 既可以当作普通函数执行，也可以当做构造函数使用**。



## 对象

除了原始类型，对象是 JavaScript 最基本的数据结构，**TypeScript 对于对象类型有很多规则**。

**对象类型的最简单声明方法，就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型**。

```ts
const obj:{
  x:number;
  y:number;
} = { x:1, y:1 };
```

**属性的类型可以使用分号结尾，也可以使用逗号结尾**。

```ts
// 属性类型以分号结尾
type MyObj = {
  x:number;
  y:number;
};

// 属性类型以逗号结尾
type MyObj = {
  x:number,
  y:number,
};
```

最后一个属性后面，可以写分号或逗号，也可以不写。

**一旦声明了类型，对象赋值时，就不能缺少指定的属性，也不能有多余的属性**。

```ts
type MyObj = {
  x:number;
  y:number;
};

const o1:MyObj = { x: 1 }; // 报错
const o2:MyObj = { x: 1, y: 1, z: 1  }; // 报错
```

上述代码中，变量 `o1` 缺少属性 `y`，变量 `o2` 多出了属性 `z`，都会报错。

**读写不存在的属性也会报错**。

```ts
const obj:{
  x:number;
  y:number;
} = { x: 1, y: 1 };

console.log(obj.z); // 报错
obj.z = 1; // 报错
```

同样的，也**不能删除类型声明中存在的属性，修改属性值是可以的**。

```ts
const myUser = {
  name: 'Sabrina'
};

delete myUser.name; // 报错
myUser.name = 'CodePencil'; // 正确
```

**对象的方法使用函数类型描述**。

```ts
const obj:{
  x: number;
  y: number;
  add(x:number, y:number): number;
  // 或者写成
  // add: (x:number, y:number) => number;
} = {
  x: 1,
  y: 1,
  add(x, y) {
    return x + y;
  }
};
```

上述代码中，对象 `obj` 有一个方法 `add()`，需要定义它的参数类型和返回值类型。

**对象类型可以使用方括号读取属性的类型**。

```ts
type User = {
  name: string;
  age: number;
};

type Name = User['name']; // string
```

**除了 `type` 命令可以为对象类型声明一个别名，TypeScript 还提供了 `interface` 命令，可以把对象类型提炼为一个接口**。

```ts
// 写法一
type MyObj = {
  x:number;
  y:number;
};

const obj:MyObj = { x: 1, y: 1 };

// 写法二
interface MyObj {
  x:number;
  y:number;
}

const obj:MyObj = { x: 1, y: 1 };
```

**⚠️ 注意：TypeScript 不区分对象自身的属性和继承的属性，一律视为对象的属性**。

```ts
interface MyInterface {
  toString(): string; // 继承的属性
  prop: number; // 自身的属性
}

const obj:MyInterface = { // 正确
  prop: 123,
}
```

上述代码中，**`obj` 只写了 `prop` 属性，但不报错，因为它可以继承原型上的 `toString()` 方法**。



**可选属性**

如果某个属性是可选的，**需要在属性名后面加一个问号**。

```ts
const obj: {
  x:number;
  y?:number;
} = { x: 1 };
```

上述代码中，属性 `y` 是可选的。

**可选属性等同于允许赋值为 `undefined`**，下面两种写法是等效的。

```ts
type User = {
  firstName: string;
  lastName?: string;
};

// 等同于
type User = {
  firstName: string;
  lastName?: string|undefined;
};
```

**对象的可选属性可以赋值为 `undefined`**。

```ts
const obj: {
  x: number;
  y?: number;
} = { x: 1, y: undefined };
```

同样地，当读取一个没有赋值的可选属性时，会返回 `undefined`。

```ts
type MyObj = {
  x: string;
  y?: string;
};

const obj: MyObj = { x: 'hello' };
obj.y.toLowerCase(); // 报错
```

上述代码中最后一行会报错，因为 `obj.y` 返回 `undefined`，无法对其调用 `toLowerCase()`。

**所以在读取可选属性之前，必须检查一下是否为 `undefined`**。

```ts
const user:{
  firstName:string;
  lastName?:string;
} = { firstName: 'Foo' };

if(user.lastName !== undefined) {
  console.log(`hello ${user.firstName} ${user.lastName}`);
}
```

上述代码中，`lastName` 是可选属性，需要判断是否为 `undefined` 之后，才能使用，建议使用下面的写法：

```ts
// 写法一
const firstName = (user.firstName === undefined)
  ? 'Foo' : user.firstName;
const lastName = (user.lastName === undefined)
  ? 'Bar' : user.lastName;

// 写法二
const firstName = user.firstName ?? 'Foo';
const lastName = user.lastName ?? 'Bar';
```

**TypeScript 提供编译设置 `ExactOptionalPropertyTypes`，只要同时打开这个设置和 `strictNullChecks`，可选属性就不能设为 `undefined`**。

```ts
// 打开 ExactOptionalPropertyTypes 和 strictNullChecks
const obj: {
  x: number;
  y?: number;
} = { x: 1, y: undefined }; // 报错
```

**⚠️ 注意：可选属性与允许设为 `undefined` 的必选属性是不等价的**。

```ts
type A = { x:number, y?:number };
type B = { x:number, y:number|undefined };

const ObjA:A = { x: 1 }; // 正确
const ObjB:B = { x: 1 }; // 报错
```



**只读属性**

**属性名前加上 `readonly` 关键字，表示这个属性是只读属性，不能修改**。

```ts
interface MyInterface {
  readonly prop:number;
}
```

上述代码中，`prop` 属性是只读属性，不能修改它的值。

```ts
const person: {
  readonly age:number;
} = { age: 20 };

person.age = 21; // 报错
```

**只读属性只能在对象初始化期间赋值，此后就不能修改该属性**。

```ts
type Point = {
  readonly x:number;
  readonly y:number;
};

const p:Point = { x: 0, y: 0 };

p.x = 100; // 报错
```

**⚠️ 注意：如果属性值是一个对象，`readonly` 修饰符并不禁止修改对象的属性，只是禁止完全替换该对象**。

```ts
interface Home {
  readonly resident: {
    name: string;
    age: number;
  };
}

const h:Home = {
  resident: {
    name: 'Vicky',
    age: 42,
  }
};

h.resident.age = 32; // 正确
h.resident = {
  name: 'Kate',
  age: 23
  // 报错
};
```

上述代码中，`h.resident` 是只读属性，它的值是一个对象，修改这个对象的 `age` 属性是可以的，但是整个替换掉 `h.resident` 属性会报错。

**⚠️ 注意：如果一个对象有两个引用，即两个变量对应同一个对象，其中一个变量是可写的，另一个变量是只读的，那么从可写变量修改属性，会影响到只读变量**。

```ts
interface Person {
  name:string;
  age:number;
}

interface ReadonlyPerson {
  readonly name:string;
  readonly age:number;
}

const w:Person = {
  name: 'Vicky',
  age: 42,
};

const r:ReadonlyPerson = w;

w.age += 1;
r.age; // 43
```

**如果希望属性值是只读的，除了声明时加上 `readonly` 关键字，还有一种方法，就是在赋值时，在对象后面加上只读断言 `as const`**。

```ts
const myUser = {
  name: 'CodePencil'
} as const;

myUser.name = 'Cynthia'; // 报错
```

上述代码中，在对象后面加上只读断言 `as const`，就变成了只读对象，不能修改属性了。

**⚠️ 注意：上面的 `as const` 属于 TypeScript 的类型推断，如果变量明确地声明了类型，那么 TypeScript 会以声明的类型为准**。

```ts
const myUser:{ name:string } = {
  name: 'CodePencil',
} as const;

myUser.name = 'Cynthia'; // 正确
```

上述代码中，变量 `myUser` 声明了类型，`name` 不是只读属性，但是赋值时又使用只读断言 `as const`，所以会以声明的类型为准，所以 `name` 属性可以修改。



**属性名的索引类型**

如果对象的属性非常多，一个个声明类型就很麻烦，而且有的时候，无法事先知道对象会有多少属性，比如外部 API 返回的对象，**这时 TypeScript 允许采用属性名表达式的写法来描述类型，称为 “属性名的索引类型”**。

**索引类型中，最常见的就是属性名的字符串索引**。

```ts
type MyObj = {
  [property: string]: string;
};

const obj:MyObj = {
  foo: 'a',
  bar: 'b',
  baz: 'c',
};
```

上述代码中，类型 `MyObj` 的属性名类型就采用了表达式形式，写在方括号中，**`[property: string]` 的 `property` 表示属性名，这是可以随便起的，它的类型是 `string`，即属性名类型为 `string`**，也就是说，不管这个对象有多少属性，只要属性名为字符串，且属性值也为字符串，就符合这个类型声明。

**JavaScript 对象的属性名的类型有三种可能：`string`、`number` 和 `symbol`**。

```ts
type T1 = {
  [property: string]: string;
};

type T2 = {
  [property: symbol]: string;
};

type T3 = {
  [property: number]: string;
};
```

上述代码中，对象属性名的类型分别为 `string`、`number` 和 `symbol`。

```ts
type MyArr = {
  [n: number]: number;
};

const arr:MyArr = [1, 2, 3];
// 或者
const arr:MyArr = {
  0: 1,
  1: 2,
  2: 3,
};
```

上述代码中，对象类型 `MyArr` 的属性名是 `[n:number]`，就表示它的属性名都是数值，比如 `0`、`1`、`2`。

**对象可以同时有多种类型的属性名索引**，比如同时有数值索引和字符串索引，**但是数值索引不能与字符串索引发生冲突，必须服从后者，因为在 JavaScript 语言内部，所有数值属性名都会被自动转为字符串属性名**。

```ts
type MyType = {
  [x: number]: boolean; // 报错
  [x: string]: string;
};
```

上述代码中，类型 `MyType` 同时有两种属性名索引，但是数值索引与字符串索引冲突了，所以报错了，**由于字符属性名的值类型是 `string`，数值属性名的值类型只有同样为 `string` 才不会报错**。

同样地，**可以既声明属性名索引，也声明具体的单个属性名，如果单个属性名不符合属性名索引的范围，两者发生冲突，就会报错**。

```ts
type MyType = {
  foo: boolean; // 报错
  [x: string]: string;
};
```

上述代码中，属性名 `foo` 符合属性名的字符串索引，**但两者的属性值类型不一样，所以报错了**。

**⚠️ 注意：**

- **属性的索引类型写法，建议谨慎使用，因为属性名的声明太宽泛，约束太少**

- **属性名的数值索引不宜用来声明数组，因为采用这种方式声明数组，就不能使用各种数组方法及 `length` 属性，因为类型里面没有定义这些东西**

  ```ts
  type MyArr = {
    [n: number]: number;
  };
  
  const arr: MyArr = [1, 2, 3];
  arr.length; // 报错
  ```



**解构赋值**

解构赋值用于直接从对象中提取属性。

```ts
const { id, name, price } = product;
```

**解构赋值的类型写法，跟为对象声明类型是一样的**。

```ts
const { id, name, price }:{
  id: string;
  name: string;
  price: number;
} = product;
```

**⚠️ 注意：目前无法为解构变量指定类型，因为对象解构里面的冒号在 JavaScript 中有其它用途**，例如：

```js
let { x: foo, y: bar } = obj;

// 等同于
let foo = obj.x;
let bar = obj.y;
```

上述代码中，**冒号不是表示属性 `x` 和 `y` 的类型，而是为这两个属性指定新的变量名**，如果要为 `x` 和 `y` 指定类型，不得不写成下面这样。

```ts
let { x: foo, y: bar }
  :{ x: string; y: number } = obj;
```

**这一点要特别小心，在 TypeScript 中非常容易搞糊涂**。

```ts
function draw({
  shape: Shape,
  xPos: number = 100
}) {
  let myShape = shape; // 报错
  let x = xPos; // 报错
}
```

上述代码中，**函数 `draw()` 的参数是一个对象解构，里面的冒号很像是为变量指定类型，其实是为对应的属性指定新的变量名**，所以 TypeScript 就会解读成：**函数体内不存在变量 `shape`，而是属性 `shape` 的值被赋值给了变量 `Shape`**。



**结构类型原则**

**只要对象 B 满足对象 A 的结构特征，TypeScript 就会认为对象 B 兼容对象 A 的类型，这被称为 “结构类型” 原则（structural typing）**。

```ts
type A = {
  x: number;
};

type B = {
  x: number;
  y: number;
};
```

上述代码中，**对象 `A` 只有一个属性 `x`，类型为 `number`，对象 `B` 满足这个特征，因此兼容对象 `A`，只要可以使用 `A` 的地方，就可以使用 `B`**。

```ts
const B = {
  x: 1,
  y: 1,
};

const A:{ x:number } = B; // 正确
```

**根据 “结构类型” 原则，TypeScript 检查某个值是否符合指定类型时，并不是检查这个值的类型名（即 “名义类型”），而是检查这个值的结构是否符合要求（即 “结构类型”）**。

TypeScript 之所以这样设计，是为了符合 JavaScript 的行为，JavaScript 并不关心对象是否严格相似，只要某个对象具有所要求的属性，就可以正确运行。

**如果类型 B 可以赋值给类型 A，TypeScript 就认为 B 是 A 的子类型（subtyping），A 是 B 的父类型，子类型满足父类型的所有结构特征，同时还具有自己的特征，凡是可以使用父类型的地方，都可以使用子类型，即子类型兼容父类型**。

这种设计有时会导致令人惊讶的结果。

```ts
type myObj = {
  x: number,
  y: number,
};

function getSum(obj: myObj) {
  let sum = 0;
  
  for(const n of Object.keys(obj)) {
    const v = obj[n]; // 报错
    sum += Math.abs(v);
  }
  
  return sum;
}
```

上述代码中，函数 `getSum()` 要求传入参数的类型是 `myObj`，但实际上所有与 `myObj` 兼容的对象都可以传入，这会导致 `const v = obj[n]` 这一行报错，**原因是 `obj[n]` 取出的属性值不一定是数值（`number`），使得变量 `v` 的类型被推断为 `any`，如果项目设置不允许变量类型推断为 `any`，代码就会报错**，写成下面这样就不会报错了。

```ts
type MyObj = {
  x: number,
  y: number,
};

function getSum(obj: MyObj) {
  return Math.abs(obj.x) + Math.abs(obj.y);
}
```

上述代码不会报错，因为函数体内部只使用了属性 `x` 和 `y`，这两个属性有明确的类型声明，保证 `obj.x` 和 `obj.y` 肯定是数值，**虽然与 `MyObj` 兼容的任何对象都可以传入函数 `getSum()`，但是只要不使用其它属性，就不会有类型报错**。



**严格字面量检查**

**如果对象使用字面量表示，会触发 TypeScript 的严格字面量检查（strict object literal checking），如果字面量的结构跟类型定义的不一样（比如多出了未定义的属性），就会报错**。

```ts
const point: {
  x: number;
  y: number;
} = {
  x: 1,
  y: 1,
  z: 1, // 报错
};
```

上述代码中，**等号右边是一个对象的字面量，这时会触发严格字母量检查**，只要有类型声明中不存在的属性（本例是 `z`），就会导致报错。

**如果等号右边不是字面量，而是一个变量，则根据结构类型原则，是不会报错的**。

```ts
const myPoint = {
  x: 1,
  y: 1,
  z: 1,
};

const point:{
  x: number;
  y: number;
} = myPoint; // 正确
```

上述代码中，等号右侧是一个变量，就不会触发严格字面量检查，从而不报错。

**TypeScript 对字面量进行严格检查的目的，主要是防止拼写错误，一般来说，字面量大多数来自手写，容易出现拼写错误或者误用 API**。

```ts
type Options = {
  title:string;
  darkMode?:boolean;
};

const obj:Options = {
  title: '我的网页',
  darkmode: true, // 报错
};
```

上述代码中，**属性 `darkMode` 拼写错了，成了 `darkmode`，如果没有严格字面量规则，就不会报错**，因为 `darkMode` 是可选属性，根据结构类型原则，任何对象只要有 `title` 属性，都认为符合 `Options` 类型。

**如果要规避严格字面量检查，可以使用中间变量**。

```ts
type Options = {
  title:string;
  darkMode?:boolean;
};

let myOptions = {
  title: '我的网页',
  darkmode: true,
};

const obj:Options = myOptions;
```

上述代码中，**创建了一个中间变量 `myOptions`，就不会触发严格字面量个规则，因为这时变量 `obj` 的赋值，不属于直接字面量赋值**。

**如果确认字面量没有错误，也可以使用类型断言来规避严格字面量检查**。

```ts
type Options = {
  title:string;
  darkMode?:boolean;
};

const obj:Options = {
  title: '我的网页',
  darkmode: true,
} as Options;
```

上述代码中，**使用类型断言 `as Options`，告诉编译器，字面量符合 `Options` 类型，就能规避这条规则**。

**如果允许字面量有多余属性，可以像下面这样在类型中定义一个通用属性**。

```ts
let x: {
  foo: number;
  [x: string]:any;
};

x = { foo: 1, baz: 2 }; // 正确
```

上述代码中，变量 `x` 的类型声明中，有一个属性的字符串索引 `[x: string]`，导致任何字符串属性名都是合法的。

**由于严格字面量检查，字面量对象传入函数必须很小心，不能有多余的属性**。

```ts
interface Point {
  x: number;
  y: number;
};

function computeDistance(point: Point) { /* ... */ }

computeDistance({ x: 1, y: 2, z: 3 }); // 报错
computeDistance({x: 1, y: 2}); // 正确
```

上述代码中，对象字面量传入函数 `computeDistance()` 时，不能有多余的属性，否则就通不过严格字面量检查。

**编译器选项 `suppressExcessPropertyErrors` 可以关闭多余属性检查**，下面是它在 tsconfig.json 文件中的写法。

```json
{
  "compilerOptions": {
    "suppressExcessPropertyErrors": true
  }
}
```



**最小可选属性规则**

根据 “结构类型” 原则，**如果一个对象的所有属性都是可选的，那么其它对象跟它都是结构类似的**。

```ts
type Options = {
  a?:number;
  b?:number;
  c?:number;
};
```

上述代码中，**类型 `Options` 的所有属性都是可选的，所以它可以是一个空对象，也意味着任意对象都满足 `Options` 的结构**。

**为了避免这种情况，TypeScript 2.4 引入了一个 “最小可选属性规则”，也称为 “弱类型检测”（weak type detection）**。

```ts
type Options = {
  a?:number;
  b?:number;
  c?:number;
};

const opts = {
  d: 123
};

const obj:Options = opts; // 报错
```

上述代码中，**对象 `opts` 与类型 `Options` 没有共同属性，赋值给该类型的变量就会报错**。

报错的原因是，如果某个类型的所有属性都是可选的，**那么该类型的对象必须至少存在一个可选属性，不能所有可选属性都不存在，这就叫做 “最小可选属性规则”**。

**如果想避免这条规则，要么在类型中增加一条索引属性（`[propName: string]: someType`），那么使用类型断言（`opts as Options`）**。



**空对象**

空对象是 TypeScript 的一种特殊值，也是一种特殊类型。

```ts
const obj = {};
obj.prop = 123; // 报错
```

**上述代码报错的原因是 TypeScript 会推断变量 `obj` 的类型为空对象，实际执行的是下面的代码**。

```ts
const obj:{} = {};
```

**空对象没有自定义属性，所以对自定义属性赋值会报错，空对象只能使用继承的属性，即继承自原型对象 `Object.prototype` 的属性**。

```ts
obj.toString() // 正确
```

上述代码中，`toString()` 方法是一个继承自原型对象的方法，TypeScript 允许在空对象上使用。

**这种空对象的写法在 JavaScript 中很常见：先声明一个空对象，然后向空对象添加属性，但 TypeScript 不允许动态添加属性，所以对象不能分步生成，必须生成时一次性声明所有属性**。

```ts
// 错误
const pt = {};
pt.x = 3;
pt.y = 4;

// 正确
const pt = {
  x: 3,
  y: 4
};
```

**如果确实要分步，一个比较好的方法是，使用扩展运算符（`...`）合成一个新对象**。

```ts
const pt0 = {};
const pt1 = { x: 3 };
const pt2 = { y: 4 };

const pt = {
  ...pt0, ...pt1, ...pt2
};
```

上述代码中，对象 `pt` 是三个部分合成的，这样既可以分步声明，也符合 TypeScript 静态声明的要求。

**空对象作为类型，其实是 `Object` 类型的简写形式**。

```ts
let d:{};
// 等同于
// let d:Object;

d = {};
d = { x: 1 };
d = 'hello';
d = 2;
```

上述代码中，各种类型的值（除了 `null` 和 `undefined`）都可以赋值给空对象类型，跟 `Object` 类型的行为是一样的。

**因为 `Object` 可以接受各种类型的值，而空对象是 `Object` 类型的简写，所以它不会有严格字面量检查，赋值时总是允许多余的属性，只是不能读取这些属性**。

```ts
interface Empty { };
const b:Empty = { myProp: 1, anotherProp: 2 }; // 正确
b.myProp // 报错
```

上述代码中，**变量 `b` 的类型是空对象，视同 `Object` 类型，不会有严格字面量检查，但是读取多余的属性时会报错**。

**如果要强制使用没有任何属性的对象**，可以采用下面的写法。

```ts
interface WithoutProperties {
  [key: string]: never;
}

// 报错
const a:WithoutProperties = { prop: 1 };
```

上述代码中，**`[key: string]: never` 表示字符串属性名是不存在的，因此其它对象进行赋值时就会报错**。



## interface

**`interface` 是对象的模版，可以看作是一种类型约定，中文译为 “接口”**，使用了某个模版的对象，就拥有了指定的类型结构。

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
```

上述代码中，定义了一个接口 `Person`，它指定了一个对象模版，拥有三个属性 `firstName`、`lastName` 和 `age`，**任何实现了这个接口的对象，都必须部署这三个属性，并且必须符合规定的类型**。

实现该接口很简单，**只要指定它作为对象的类型即可**。

```ts
const p:Person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
};
```

**方括号运算符可以取出 `interface` 某个属性的类型**。

```ts
interface Foo {
  a: string;
};

type A = Foo['a']; // string
```

**`interface` 可以表示对象的各种语法，它的成员有 5 种形式**：

- 对象属性
- 对象的属性索引
- 对象方法
- 函数
- 构造函数

1. **对象属性**

   ```ts
   interface Point {
     x: number;
     y: number;
   }
   ```

   上述代码中，**`x` 和 `y` 都是对象的属性，分别使用冒号指定每个属性的类型**。

   **属性之间使用分号或逗号分隔，最后一个属性结尾的分号或逗号可以省略**。

   **如果属性是可选的，就在属性名后加一个问号**。

   ```ts
   interface Foo {
     x?: string;
   }
   ```

   **如果属性是只读的，需要加上 `readonly` 修饰符**。

   ```ts
   interface A {
     readonly a: string;
   }
   ```

   

2. **对象的属性索引**

   ```ts
   interface A {
     [prop: string]: number;
   }
   ```

   上述代码中，`[prop: string]` 就是属性的字符串索引，**表示属性名只要是字符串类型，都符合类型要求**。

   **属性索引共有 `string`、`number` 和 `symbol` 三种类型**。

   **一个接口中，最多只能定义一个字符串索引，字符串索引会约束该类型中所有名字为字符串的属性**。

   ```ts
   interface MyObj {
     [prop: string]: number;
   
     // 报错
     a: boolean; // Property 'a' of type 'boolean' is not assignable to 'string' index type 'number'.
   };
   ```

   上述代码中，属性索引指定了所有名称为字符串的属性，**它们的属性值必须是数值（`number`），属性 `a` 的值为布尔值就报错了**。

   **属性的数值索引，其实就是指定数组的类型**。

   ```ts
   interface A {
     [prop: number]: string;
   }
   
   const obj:A = ['a', 'b', 'c'];
   ```

   **同样地，一个接口最多只能定义一个数值索引，数值索引会约束所有名称为数值的属性**。

   **如果一个 `interface` 同时定义了字符串索引和数值索引，那么数值索引必须服从字符串索引，因为在 JavaScript 中，数值属性名最终是自动转换为字符串属性名**。

   ```ts
   interface A {
     [prop: string]: number;
     [prop: number]: string; // 报错
   };
   
   interface B {
     [prop: string]: number;
     [prop: number]: number; // 正确
   }
   ```

   

3. **对象的方法**

   对象的方法共有三种写法。

   ```ts
   // 写法一
   interface A {
     f(x: boolean): string;
   };
   
   // 写法二
   interface B {
     f: (x: boolean) => string;
   };
   
   // 写法三
   interface C {
     f: {
       (x: boolean):string
     }
   };
   ```

   **属性名可以采用表达式**，所以下面的写法也是可以的。

   ```ts
   const f = 'f';
   
   interface A {
     [f](x: boolean): string;
   }
   ```

   类型方法可以重载。

   ```ts
   interface A {
     f(): number;
     f(x:boolean): number;
     f(x:string, y:string):string;
   };
   ```

   **`interface` 中的函数重载，不需要给出实现，但是由于对象内部定义方法时，无法使用函数重载语法，所以需要额外在对象外部给出函数方法的实现**。

   ```ts
   interface A {
     f(): number;
     f(x: boolean): boolean;
     f(x: string, y: string):string;
   };
   
   function MyFunc(): number;
   function MyFunc(x: boolean): boolean;
   function MyFunc(x: string, y: string): string;
   function MYFunc(
     x?:boolean|string, y?:string
   ):number|boolean|string {
     if(x === undefined && y === undefined) return 1;
     if(typeof x === 'boolean' && y === undefined) return true;
     if(typeof x === 'string' && typeof y === 'string') return 'hello';
     throw new Error('wrong parameters');
   }
   
   const a:A = {
     f: MyFunc,
   };
   ```

   上述代码中，接口 `A` 的方法 `f()` 有函数重载，需要额外定义一个函数 `MyFunc()` 实现这个重载，然后部署接口 `A` 的对象 `a` 的属性 `f` 等于函数 `MyFunc()` 就可以了。

   

4. **函数**

   **`interface` 也可以用来声明独立的函数**。

   ```ts
   interface Add {
     (x:number, y:number):number;
   };
   
   const myAdd:Add = (x, y) => x + y;
   ```

   

5. **构造函数**

   `interface` 内部可以使用 `new` 关键字，表示构造函数。

   ```ts
   interface ErrorConstructor {
     new (message?: string): Error;
   };
   ```



**interface 继承 interface**

`interface` 可以使用 `extends` 关键字，继承其它 `interface`。

```ts
interface Shape {
  name: string;
};

interface Circle extends Shape {
  radius: number;
}
```

上述代码中，**`Circle` 继承了 `Shape`，所以 `Circle` 其实有两个属性 `name` 和 `radius`，这时 `Circle` 是子接口，`Shape` 是父接口**。

**`extends` 关键字会从继承的接口里面拷贝属性类型，这样就不必书写重复的属性**。

**`interface` 允许多重继承**。

```ts
interface Style {
  color: string;
};

interface Shape {
  name: string;
};

interface Circle extends Style, Shape {
  radius: number;
};
```

多重接口继承，实际上相当于多个父接口的合并。

**如果子接口与父接口存在同名属性，那么子接口的属性会覆盖父接口的属性**。

**⚠️ 注意：子接口与父接口的同名属性必须是类型兼容的，不能有冲突，否则会报错**，例如：

```ts
interface Foo {
  id: string;
};

interface Bar extends Foo {
  id: number; // 报错
};
```

上述代码中，`Bar` 继承了 `Foo`，但两者的同名属性 `id` 的类型不兼容，导致报错。

**多重继承时，如果多个父接口存在同名属性，那么这些同名属性也不能有类型冲突，否则会报错**，例如：

```ts
interface Foo {
  id: string;
}

interface Bar {
  id: number;
}

// 报错
interface Baz extends Foo, Bar {
  type: string;
}
```



**interface 继承 type**

`interface` **可以继承 `type` 命令定义的对象类型。**

```ts
type Country = {
  name: string;
  capital: string;
};

interface CountryWithPop extends Country {
  population: number;
}
```

**⚠️ 注意：如果 `type` 命令定义类型不是对象，`interface` 就无法继承**。



**interface 继承 class**

`interface` 还可以继承 `class`，即继承该类的所有成员。

```ts
class A {
  x:string = '';
  
  y():boolean {
    return true;
  }
}

interface B extends A {
  z: number;
}
```

上述代码中，**`B` 继承了 `A`，因此 `B` 就具有属性 `x`、`y()` 和 `z`，实现 `B` 接口的对象就需要实现这些属性**，例如：

```ts
const b:B = {
  x: '',
  y: function() { return true },
  z: 123,
};
```

**某些类拥有私有成员和保护成员，`interface` 可以继承这样的类，但是意义不大**。

```ts
class A {
  private x: string = '';
  protected y: string = '';
}

interface B extends A {
  z: number;
}

// 报错
const b: B = { /* ... */ }

// 报错
class C implements B {
  // ...
}
```

上述代码中，**`A` 有私有成员和保护成员，`B` 继承了 `A`，但无法用于对象，因为对象不能实现这些成员**，这导致 `B` 只能用于其它 `class`，而这时其它 `class` 与 `A` 之间不构成父类和子类的关系，使得 `x` 与 `y` 无法部署。



**接口合并**

**多个同名接口会合并成一个接口**。

```ts
interface Box {
  height: number;
  width: number;
}

interface Box {
  length: number;
}
```

上述代码中，**两个 `Box` 接口会合并成一个接口，同时有 `height`、`width` 和 `length` 三个属性**。

**这样的设计主要是为了兼容 JavaScript 的行为，JavaScript 开发者常常对全局对象或者外部库添加自己的属性和方法**，那么**只要使用 `interface` 给出这些自定义的属性和方法的类型，就能自动跟原始的 `interface` 合并，使得扩展外部类型非常方便**。

例如，**Web 网页开发者经常会对 `window` 对象和 `document` 对象添加自定义属性，但是 TypeScript 会报错，因为原始定义没有这些属性，解决方法就是把自定义属性写成 `interface`，合并进原始定义**。

```ts
interface Document {
  foo: string;
}

document.foo = 'hello';
```

上述代码中，接口 `Document` 增加了一个最定义属性 `foo`，从而就可以在 `document` 对象上使用自定义属性。

**同名接口合并时，同一个属性如果有多个类型声明，彼此不能有类型冲突**。

```ts
interface A {
  a: number;
}

interface A {
  a: string; // 报错
}
```

上述代码中，接口 `A` 的属性 `a` 有两个类型声明，彼此是冲突的，导致报错。

**同名接口合并时，如果同名方法有不同的类型声明，那么会发生函数重载，而且后面的定义比前面的定义具有更高的优先级**。

```ts
interface Cloner {
  clone(animal: Animal): Animal;
}

interface Cloner {
  clone(animal: Sheep): Sheep;
}

interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}

// 等同于
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
  clone(animal: Sheep): Sheep;
  clone(animal: Animal): Animal;
}
```

上述代码中，`clone()` 方法有不同的类型声明，会发生函数重载，这时越靠后的定义，优先级越高，排在函数重载的越前面。

**这个规则有一个例外，在同名方法之中，如果有一个参数是字面量类型，字面量类型有更高的优先级**。

```ts
interface A {
  f(x: 'foo'): boolean;
}

interface A {
  f(x: any): void;
}

// 等同于
interface A {
  f(x: 'foo'): boolean;
  f(x: any): void;
}
```

一个实际的例子是 `Document` 对象的 `createElement()` 方法，它会根据参数的不同，而生成不同的 HTML 节点对象。

```ts
interface Document {
  createElement(tagName: any): Element;
}

interface Document {
  createElement(tagName: 'div'): HTMLDivElement;
  craeteElement(tagName: 'span'): HTMLSpanElement;
}

interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: 'canvas'): HTMLCanvasElement;
}

// 等同于
interface Document {
  createElement(tagName: 'canvas'): HTMLCanvasElement;
  createElement(tagName: 'div'): HTMLDivElement;
  createElement(tagName: 'span'): HTMLSpanElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: any): Element;
}
```

上述代码中，`createElement()` 方法的函数重载，参数为字面量的类型声明会排到最前面，返回具体的 HTML 节点对象，类型越不具体的参数，排在越后面，返回通用的 HTML 节点对象。

**如果两个 `interface` 组成的联合类型存在同名属性，那么该属性的类型也是联合类型**。

```ts
interface Circle {
  area: bigint;
}

interface Rectangle {
  area: number;
}

declare const s: Circle | Rectangle;

s.area; // bigint | number
```

上述代码中，接口 `Circle` 和 `Rectangle` 组成了一个联合类型 `Circle | Rectangle`，因此，这个联合类型的同名属性 `area` 也是一个联合类型，**`declare` 命令表示变量 `s` 的具体定义由其它脚本文件给出**。



**interface 与 type 的差异**

`interface` 命令与 `type` 命令类似，**都可以表示对象类型**。

**很多对象类型既可以用 `interface` 表示，也可以用 `type` 表示，两者往往可以换用，几乎所有的 `interface` 命令都可以改写为 `type` 命令**。

它们的相似之处，首先表现在都能为对象类型起名。

```ts
type Country = {
  name: string;
  capital: string;
}

interface Country {
  name: string;
  capital: string;
}
```

上述代码中，**`type` 命令和 `interface` 命令分别定义同一个类型**。

**`class` 命令也有类似作用，通过定义一个类，同时定义一个对象类型，但是它会创造一个值，编译后依然存在，如果只是单纯想要一个类型，应该使用 `type` 或 `interface`**。

`interface` 和 `type` 命令的区别有下面几点：

1. **`type` 能够表示非对象类型，而 `interface` 只能表示对象类型（包括数组、函数等）**

2. **`interface` 可以继承其它类型，`type` 不支持继承**

   继承的主要作用是添加属性，**`type` 定义的对象类型如果想要添加属性，只能使用 `&` 运算符，重新定义一个类型**。

   ```ts
   type Animal = {
     name: string;
   }
   
   type Bear = Animal & {
     honey: boolean
   }
   ```

   上述代码中，类型 `Bear` 在 `Animal` 的基础上添加了一个属性 `honey`，**其中 `&` 运算符表示同时具备两个类型的特征，因此可以起到两个对象类型合并的作用**。

   作为比较，`interface` 添加属性，**采用的是继承的写法**。

   ```ts
   interface Animal {
     name: string;
   }
   
   interface Bear extends Animal {
     honey: boolean;
   }
   ```

   **继承时，`type` 和 `interface` 是可以换用的，`interface` 可以继承 `type`**。

   ```ts
   type Foo = { x: number; };
   
   interface Bar extends Foo {
     y: number;
   }
   ```

   **`type` 也可以使用 `&` 运算符来合并 `interface`**。

   ```ts
   interface Foo {
     x: number;
   }
   
   type Bar = Foo & { y: number; };
   ```

3. **同名 `interface` 会自动合并，同名 `type` 则会报错**

   TypeScript 不允许使用 `type` 多次定义同一个类型。

   ```ts
   type A = { foo: number; }; // 报错
   type A = { foo: number; }; // 报错
   ```

   作为比较，`interface` 则会自动合并。

   ```ts
   interface A { foo: number; };
   interface A { bar: number; };
   
   const obj:A = {
     foo: 1,
     bar: 1,
   };
   ```

   这说明 `interface` 是开放的，可以添加属性，`type` 是封闭的，不能添加属性，只能定义新的 `type`。

4. **`interface` 不能包含属性映射（mapping），`type` 可以**

   ```ts
   interface Point {
     x: number;
     y: number;
   }
   
   // 正确
   type PointCopy1 = {
     [Key in keyof Point]: Point[Key];
   };
   
   // 报错
   interface PointCopy2 {
     [Key in keyof Point]: Point[Key];
   }
   ```

5. **`this` 关键字只能用于 `interface`**

   ```ts
   // 正确
   interface Foo {
     add(num: number): this;
   }
   
   // 报错
   type Foo = {
     add(num: number): this;
   };
   ```

   下面是返回 `this` 的实际对象的例子。

   ```ts
   interface Foo {
     add(num: number): this;
   }
   
   class Calculator implements Foo {
     result = 0;
     add(num: number) {
       this.result += num;
       return this;
     }
   }
   ```

6. **`type` 可以扩展原始数据类型，`interface` 不行**

   ```ts
   // 正确
   type MyStr = string & {
     type: 'new'
   };
   
   // 报错
   interface MyStr extends string {
     type: 'new'
   }
   ```

7. **`interface` 无法表达某些复杂类型（比如交叉类型和联合类型），但是 `type` 可以**

   ```ts
   type A = { /* ... */ };
   type B = { /* ... */ };
   
   type AorB = A | B;
   type AorBwithName = AorB & {
     name: string
   };
   ```

   上述代码中，类型 `AorB` 是一个联合类型，`AorBwithName` 则是为 `AorB` 添加加一个属性，这两种运算，`interface` 都无法表达。

**综上所述，如果有复杂的类型运算，没有其它选择只能使用 `type`，一般情况下，`interface` 灵活性比较高，便于扩充类型和自动合并，建议优先使用**。