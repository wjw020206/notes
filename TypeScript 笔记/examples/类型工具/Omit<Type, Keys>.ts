// 从对象类型 Type 中，删除指定的属性 keys，组成一个新的对象类型返回
interface A {
  x: number;
  y: number;
}

type T1 = Omit<A, 'x'>; // { y: number }
type T2 = Omit<A, 'y'>; // { x: number }
type T3 = Omit<A, 'x' | 'y'>; // {}

// 指定删除的键名 Keys 可以是对象类型 Type 中不存在的属性，但必须兼容 string | number | symbol
interface A {
  x: number;
  y: number;
}

type T = Omit<A, 'z'>; // { x: number, y: number }
