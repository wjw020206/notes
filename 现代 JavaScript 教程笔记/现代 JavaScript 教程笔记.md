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



