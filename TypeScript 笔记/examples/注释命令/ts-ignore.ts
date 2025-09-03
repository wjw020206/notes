// 告诉编译器不对下一行代码进行类型检查，可以用于 TypeScript 脚本，也可以用于 JavaScript 脚本
let x: number;

x = 0;

// @ts-ignore
x = false; // 不报错

x = true; // 报错（只对下一行有效）
