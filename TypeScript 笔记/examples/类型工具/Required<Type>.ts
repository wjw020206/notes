// 返回一个新类型，将参数类型 Type 的所有属性变为必选属性
interface A {
  x?: number;
  y: number;
}

type T = Required<A>; // { x: number; y: number; }
