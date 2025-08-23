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
var multi:number[][] = [[1,2,3], [23,24,25]];
```

上述代码中，变量 `multi` 的类型是 `number[][]`，表示它是一个二维数组，最底层的数组成员类型是 `number`。
