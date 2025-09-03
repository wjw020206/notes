// 用来生成一个只读数组类型，类型参数 Type 表示数组成员的类型
const values: ReadonlyArray<string> = ['a', 'b', 'c'];

values[0] = 'x'; // 报错
values.push('x'); // 报错
values.pop(); // 报错
values.splice(1, 1); // 报错

// 不修改源数组的操作不会报错
const list = values.slice(1, 2);
