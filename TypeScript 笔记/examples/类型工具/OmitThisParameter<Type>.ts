// 从函数类型中移除 this 参数
function toHex(this: Number) {
  return this.toString(16);
}

type T = OmitThisParameter<typeof toHex>; // () => string

// 如果函数没有 this 参数，则返回原始函数类型