// 与 Omit<Type, Keys> 相反，第一个参数 Type 是一个对象类型，第二个参数 Keys 是 Type 里面被选定的键名，返回一个新的对象类型
interface A {
  x: number;
  y: number;
}

type T1 = Pick<A, 'x'>; // { x: number }
type T2 = Pick<A, 'y'>; // { y: number }
type T3 = Pick<A, 'x' | 'y'>; // { x: number, y: number }

// 指定的键名 Keys 必须是对象类型 Type 里面已经存在的键名，否则会报错
type T4 = Pick<A, 'z'>; // 报错
