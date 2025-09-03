// 不返回类型，只用来跟其它类型组成交叉类型，用来提示 TypeScript 其它类型中的 this 类型
interface HelperThisValue {
  logError: (error: string) => void;
}

let helperFunctions: {
  [name: string]: Function;
} & ThisType<HelperThisValue> = {
  hello: function () {
    this.logError('Error: Something wrong!'); // 正确
    this.update(); // 报错（这个对象的 this 不包含 update update）
  },
};
// 使用 ThisType<T> 类型工具时，必须打开 noImplicitThis 编译选项
let obj: ThisType<{ x: number }> & { getX: () => number };

obj = {
  getX() {
    return this.x + this.y; // 报错（因为这个对象的 this 不包含属性 y）
  },
};
