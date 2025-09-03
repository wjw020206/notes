// 主要用在测试用例，当下一行有类型错误时，它会压制 TypeScript 的报错信息（即不显示报错信息），把错误留给代码自己处理
function doStuff(abc: string, xyz: string) {
  assert(typeof abc === 'string');
  assert(typeof xyz === 'string');
  // 做一些事情...
}

expect(() => {
  // @ts-expect-error
  doStuff(123, 456);
}).toThrow();

// 如果下一行没有类型错误，// @ts-expect-error 则会显示一行提示
// @ts-expect-error
console.log(1 + 1);
