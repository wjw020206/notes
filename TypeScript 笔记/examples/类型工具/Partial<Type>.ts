// 返回一个新类型，将类型参数 Type 的所有属性变为可选属性
interface A {
  x: number;
  y: number;
}

type T = Partial<A>;
