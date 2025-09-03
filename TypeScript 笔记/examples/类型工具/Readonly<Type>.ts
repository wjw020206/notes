// 返回一个新类型，将参数类型 type 的所有属性变为只读属性
interface A {
  x: number;
  y?: number;
}

// { readonly x: number; readonly y?: number | undefined; }
type T = Readonly<A>;

// 也可以自定义类型工具，将参数类型的所有属性变成可变属性。
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// Readonly<Type> 可以与 Partial<Type> 结合使用，将所有属性变成只读的可选属性
interface Person {
  name: string;
  age: number;
}

const worker: Readonly<Partial<Permissions>> = {
  name: '张三',
};

worker.name = '李四'; // 报错
