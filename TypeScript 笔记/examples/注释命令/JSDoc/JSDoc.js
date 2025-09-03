// TypeScript 直接处理 JS 文件时，如果无法推断出类型，会使用 JS 脚本中的 JSDoc 注释
// 有以下两个要求：
// 1. JSDoc 注释必须以/**开始，其中星号（*）的数量必须为两个，其它形式的多行注释会被忽略
// 2. JSDoc 注释必须与它描述的代码处于相邻的位置，并且注释在上，代码在下

/**
 * @param {string} somebody
 */
function sayHello(somebody) {
  console.log('Hello ' + somebody);
}
