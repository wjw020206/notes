// 两个对象，属性名一样，但属性值类型不一样
type A = {
  foo: number;
  bar: number;
};

type B = {
  foo: string;
  bar: string;
};

// 使用类型映射，从类型 A1 得到 类型 B1
type A1 = {
  foo: number;
  bar: number;
};

type B1 = {
  [prop in keyof A]: string;
};

// 复制原始类型，从类型 A 复制类型 C
type C = {
  [prop in keyof A]: A[prop];
};

// 利用泛型，将其它对象类型的所有属性值都改成 boolean 类型
type ToBoolean<Type> = {
  [prop in keyof Type]: boolean;
};

// 使用联合类型映射多个属性名
type MyObj = {
  [P in 0 | 1 | 2]: string;
};

// 不使用联合类型，直接使用某种具体类型进行属性名映射
type MyObj2 = {
  [p in 'foo']: number;
};

type MyObj3 = {
  [p in string]: boolean;
};

// 通过映射，可以把某个对象的所有属性改成可选属性
type A2 = {
  a: string;
  b: number;
};

type B2 = {
  [prop in keyof A2]?: A2[prop];
};

// 将 T 的所有属性改为只读属性
type B3<T> = {
  readonly [P in keyof T]: T[P];
};

type C1 = B3<A2>;
