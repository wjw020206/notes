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

- 设置对象的 “隐藏” 属性，例如：给第三库的对象设置一个隐藏属性，`Symbol` **始终是唯一**的，**不会与对象原有的属性冲突**

  ```js
  const user = {
    name: 'CodePencil',
  };
  
  const id = Symbol('id');
  user[id] = '1';
  
  console.log(user[id]); // '1'
  ```

- 通过修改 `Symbol.*` 来改变一些内建行为，例如：通过修改 `Symbol.toPrimitive` 来改变对象类型转换内建行为

