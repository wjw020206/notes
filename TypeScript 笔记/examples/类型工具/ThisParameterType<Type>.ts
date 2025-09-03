// 提取函数类型中 this 参数的类型
function toHex(this: number) {
  return this.toString(16);
}

type T = ThisParameterType<typeof toHex>; // number

// 如果函数没有 this 参数，则返回 unknown
function toHex2() {
  return this.toString(16);
}

type T2 = ThisParameterType<typeof toHex2>; // unknown
