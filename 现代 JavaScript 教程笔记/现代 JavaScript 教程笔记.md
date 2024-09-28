# 现代 JavaScript 教程笔记
教程地址：https://zh.javascript.info



## 类型转换

- `Number(undefined)` 转换结果为 `NaN`

- `Number(null)` 转换结果为 `0`
- `Number('123z')` 转换结果为 `NaN`
- `Boolean(' ')` 转换结果为 `true`
- `Boolean('')` 转换结果为 `false`
- `Boolean('0')` 转换结果为 `true`
- `Boolean(0)` 转换结果为 `false`
- `String([])` 转换结果为 `''`



## 值的比较

```js
alert( undefined == null); // true
```

`undefined` 与 `null` 进行非严格相等比较时**不会转换为数字**，两者始终相等，这是 JavaScript 的一个特殊规则

以下结果都为 `false`

```js
alert( null == 0); // false
```

```js
alert( undefined == 0); // false
```



## Symbol

使用场景：

- 设置对象的 “隐藏” 属性，例如：给第三方库的对象设置一个隐藏属性，`Symbol` **始终是唯一**的，**不会与对象原有的属性冲突**

  ```js
  const user = {
    name: 'CodePencil',
  };
  
  const id = Symbol('id');
  user[id] = '1';
  
  console.log(user[id]); // '1'
  ```

- 通过修改 `Symbol.*` 来改变一些内建行为，例如：通过修改 `Symbol.toPrimitive` 来改变对象类型转换内建行为



## 数字类型



### 数字表现方式

- `0` 过多时，可以使用 `_` 作为分隔符

  ```js
  let billion = 1000_000_000;
  ```

- 使用 `e` 来缩短数字，`e` 后面跟 0 的个数

  ```js
  let num = 1.9e4; // 等价于 19000
  // 相当于 1.9 * 10000
  ```

- 对于小数，`e` 后面跟小数左侧 0 的个数

  ```js
  let num = 1.23e-6; // 等价于 0.00000123
  // 相当于 1.23 / 1000000
  ```




### 数字精度问题

数字是以 64 位 IEEE-754 表示的，其中 52 位存储数字，11 位用来存储小数点的位置，1 位用于符号

```js
alert( 0.1 + 0.2 === 0.3 ); // false
```

上述代码会出现 `0.1 + 0.2` 不等于 `0.3` 出现了精度的原因：

1. 在计算机中数字是以**二进制**的形式存储在内存中

2. 在十进制系统中，可以确保 10 的整数次幂作为除数时可以正常工作，例如：`1 / 10 = 0.1`，但是如果是 `1 / 3 = 0.333...` 则会出现无法除尽的情况，因为 3 不是 10 的整数次幂

3. 类似的，在二进制系统中，可以确保 **2 整数次幂作为除数时可以正常工作**，在 `0.1 + 0.2` 中，`0.1 === 1 / 10`、`0.2 === 2 / 10` 10 不是 2 整数次幂，所以会出现无限循环的状态

   ```js
   alert( 0.1.toFixed(20) ); // 0.10000000000000000555
   alert( 0.2.toFixed(20) ); // 0.20000000000000001110
   ```

4. IEEE-754 数字格式通过将数字舍入到最接近的可能数字来解决此问题，所以在 `0.1 + 0.2` 进行计算时，**会将它们的 “精度损失” 叠加起来**



解决方案

- 使用 `toFixed(n)` 对结果进行舍入

  ```js
  let sum = 0.1 + 0.2;
  alert( sum.toFixed(1) ); // 0.3
  ```

  **注意：** `toFixed(n)` 返回的结果是个字符串

- 可以将数字乘以 10 临时转换为整数，再进行计算，然后再将结果除回

  ```js
  let sum = (0.1 * 10 + 0.2 * 10) / 10;
  alert( sum ); // 0.3
  ```

  **注意：** 这种方法只能减少误差，但不能避免误差



## 数组

遍历数组的元素

- `for (let i = 0; i < arr.length; i++)` 运行速度最快，兼容旧版本浏览器
- `for (let item of arr)` 现代语法，只能访问值，无法访问键
- `for (let i in arr)` 数组中不要使用这个，因为会输出数组的所有属性，不只是是数字属性



### includes
方法 `includes` 可以正确处理 `NaN`，`indexOf` 无法正确处理 `NaN`

```js
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1（错误，应该是 0）
alert( arr.includes(NaN) ); // true（正确）
```



### sort

方法 `sort` 默认情况下是**按字符串顺序进行排序**

```js
let arr = [ 1, 2, 15 ];

arr.sort();

alert( arr ); // 1, 15, 2
```

提供函数作为方法 `sort` 的参数

```js
let arr = [ 1, 2, 15 ];

arr.sort( (a, b) => a - b );

alert( arr ); // 1, 2, 15
```

为什么返回 `a - b` 就可以控制排序的顺序？

因为 `sort` 方法通过传入的**比较函数的返回值**来决定两个元素的顺序

- 正值：表示 `a` 应该排在 `b` 后面
- 负值：表示 `a` 应该排在 `b` 前面
- 零：表示两个元素相等，顺序不变



## 可迭代（iterable）和类数组（array-like）



### 可迭代（iterable）

一个对象如果有实现 `Symbol.iterator` 方法可以被称为**可迭代对象**

`obj[Symbol.iterator]()`  的结果被称为**迭代器（iterator）**

迭代器中必须要有一个 `next()` 方法，它返回一个 `{ done: boolean, value: any }` 对象，当 `done` 的值为 `true` 时表示迭代结束

可迭代对象可以应用于 `for..of`，`for..of` 启动时会先找 `[Symbol.iterator]` 方法，没有找到会报错，`for..of` 仅适用于 `[Symbol.iterator]` 返回的对象

```js
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    // 返回迭代器（含有 next 方法的对象）
    return {
      current: this.from,
      last: this.to,
      next() {
        if(this.current <= this.last) {
          return {
            done: false,
            value: this.current++,
          }
        }
        return {
          done: true,
        }
      }
    }
  }
};

for( item of range ) {
  alert(item);
}
```



### 类数组（array-like）

类数组是有索引和 `length` 属性的对象

```js
const arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};
```



## Array.from

`Array.from` 可以接受一个**可迭代或者类数组的值**，将其转换为数组

`Array.from` 可以正确处理 UTF-16 扩展字符

```js
const str = '𝒳😂';

alert( Array.from(str) ); // 𝒳,😂
```



## Map

`Map` 和普通对象的区别：

- `Map` 中**任何值都可以作为键名**，普通对象中只能以字符串和 `Symbol` 作为键名
- `Map` 相比普通对象多了很多便捷的方法，如：`set`、`clear`、`size` 等等
- `Map` 中值的迭代顺序是**按值的插入顺序**，普通对象中如果**键名有特别的顺序（例如：整数属性）** 就会被进行排序



## Set

`Set` 中的值只能出现一次



### 利用 Set 对数组进行去重

```js
function unique(arr) {
  // 将数组转换为 Set，然后再转换为数组
  return Array.from( new Set(arr) );
}

const arr = [ 'A', 'B', 'A', 'C', 'C', 'D' ];

alert( unique(arr) ); // A,B,C,D
```



## 词法环境（Lexical Environment）

每个代码块、函数以及整个脚本**运行时**都会有一个内部的隐藏对象，这个对象称做词法环境

这个对象包含以下两部分：

- **环境记录** —— 存储所有局部变量作为其属性的对象，也包含了 `this` 等其它的信息
- **对外部词法环境的引用**

**全局词法环境：** 与整个脚本相关联的词法环境对象，这个对象对外部词法环境的引用为 `null`



### 变量声明

在脚本开始执行时，词法环境会预先填充了所有的变量

这些变量处于 “未初始化（Uninitialized）” 状态，在运行到 `let` 变量声明之前，都无法引用这个变量



### 函数声明

函数声明与变量声明不同，在脚本开始执行时，函数声明的初始化会立刻完成

这也就是为什么下述代码可以正常使用原因

```js
// 在函数声明之前调用了函数
sayHello();

function sayHello() {
  alert('Hello World');
}
```



### 内部和外部的词法环境

当函数运行时，会自动创建一个新的词法环境对象存储函数的局部变量和参数

当代码中要访问一个变量时，首先会搜索内部的词法环境，如果没有找到会外部的词法环境，以此类推，直到全局词法环境



### 闭包

所有函数在 “诞生” 时都会有一个 `[[Environment]]` 隐藏属性**保存了对创建该函数的词法环境的引用**

```js
function makeCounter() {
  let count = 0;
  
  return function() {
    return count++;
  }
}

let counter = makeCounter();
```

上述代码在执行 `makeCounter` 的过程中，返回了一个函数，此时只是创建了这个函数，该函数的 `[[Environment]]` 隐藏属性保存了对 `makeCounter` 的词法环境对象的引用

所以当 `counter` 函数执行时，它的词法环境对外部词法环境的引用会从 `[[Environment]]` 隐藏属性中获取，由于内部词法环境没有 `count` 变量，会找到外部的词法环境（ `makeCounter` 的词法环境对象 ）中的 `count` 变量

**闭包的定义：** 内部函数可以记住外部变量并访问这些变量，JavaScript 中因为每个函数创建时都有 `[[Environment]]`，所以每个函数都可以看作是闭包

**注意：** 使用 `new Function` 创建的函数，它的 `[[Environment]]` 始终指向全局词法环境



## 调度：setTimeout 和 setInterval

`setTimeout` 和 `setInterval` 在调用后会返回一个**定时器标识符**

使用 `clearTimeout` 和 `clearInterval` 并**不会使定时器标识符变量变为 `null`，只会清除对应标识符的定时器**



### 嵌套的 setTimeout

```js
let timerId = setTimeout(function tick() {
  timerId = setTimeout(tick, 2000);
}, 2000);
```

嵌套的 `setTimeout` 相比直接使用 `setInterval` 的区别：

- `setTimout` 更加灵活，可以根据当前执行的结果进行判断，以此改变下一次调度的可以与当前这一次不同，例如：增加下一次调度的时间间隔

  ```js
  let delay = 5000;
  
  let timerId = setTimeout(function request() {
    // 根据执行的结果进行判断是否改变下一次调度的时间间隔
    if(....) {
      dealy *= 2;
    }
    
    timerId = setTimeout(request, delay);
  }, delay);
  ```

- 嵌套的 `setTimeout` 相较于 `setInterval` 可以更精确的设置两次执行之间的延时

  - 使用 `setInterval` 时，函数执行的时间也要消耗一部分间隔时间，**如果函数的执行时间超过间隔时间，则当前函数执行完后会立马再次执行函数**
  - 使用 `setTimeout` 时，只有当函数执行完之后才会开始下一次调度，因此两次执行之间的延时更精确



## 装饰器模式（Decorator）

可以在原有函数基础之上改变函数原有的行为，主要工作还是由原有函数完成

装饰器一般用于增强原有函数的功能，可以添加多个，不用改变原有函数的代码

**注意：** 如果原始函数有属性，装饰过后的函数将不再存在这些属性，需要使用 `Proxy` 和 `Reflect` 来创建装饰器的方法

```js
let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    // 可怕的 CPU 过载任务
    alert("Called with " + x);
    return x * this.someMethod();
  }
};

/** 缓存 worker.slow 的调用结果的装饰器 */
function cachingDecorator(func) {
  const cache = new Map();
  
  return function(x) {
    if( cache.has(x) ) return cache.get(x);
    
    // 此处如果不改变 this，默认 this 是 undefined，导致 someMethod 调用失败
    const result = func.apply(this, x);
    cache.set(x, result);
    
    return result;
  }
}

worker.slow = cachingDecorator(worker.slow);
```

**注意：** 在接收任意数量的参数时，可以使用 ` func.apply(this, arugments)`



### call/apply 的区别

- `func.call` 期望一个参数列表
- `func.apply` 期望一个参数**类数组对象**，`func.apply` 可能会更快，因为大多数 JavaScript 引擎在内部对其进行了优化



### 借用一种方法

```js
function hash() {
  alert( [].join.call(arguments) ); // 1,2
}

hash(1, 2);
```

上述代码中因为 `arguments` 不是数组(是可迭代对象也是类数组)，没有数组才有的 `join` 方法，此时可以从常规数组中使用 `join` 方法，并使用 `[].join.call` 在 `arguments` 的上下文中运行它



### 防抖（Debounce）

在指定时间内如果事件没有被再次触发，则执行一次回调函数；如果在时间内事件再次被触发了，则重新计时

```js
/** 防抖装饰器 */
function debounce(func, ms) {
  let timerId;
  
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, arguments), ms);
  }
}
```

**场景：** 常用于需要等待用户操作完全停止后再进行处理的场景，如输入框搜索、窗口大小调整等



### 节流（Throttle）

在规定时间间隔内，无论事件触发多少次，都只执行一次函数

```js
/** 节流装饰器 */
function throttle(func, ms) {
  let isThrottled = false;
  let saveArgs;
  let saveThis;
  
  return function wrapper() {
    // 如果处于冷却状态，则保存事件触发的 this 和参数
    if(isThrottled) {
      saveArgs = arguments;
      saveThis = this;
      return;
    }
    
    isThrottled = true;
    func.apply(this, arguments);
    
    setTimeout(() => {
      isThrottled = false;
      if(saveArgs) {
        wrapper.apply(saveThis, saveArgs);
        saveArgs = saveThis = null;
      }
    }, ms);
  }
}
```

**场景：** 常用于需要频繁但有规律执行某些操作的场景，如滚动监听、鼠标移动等



