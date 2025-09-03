// 提取构造函数的返回值类型（即实例类型），参数 Type 是一个构造函数
type T = InstanceType<new () => object>; // object
type A = InstanceType<ErrorConstructor>; // Error
type B = InstanceType<FunctionConstructor>; // Function
type C = InstanceType<RegExpConstructor>; // RegExp

class D {
  x = 0;
  y = 0;
}

// typeof D 是 D 的构造方法类型
type E = InstanceType<typeof D>; // D

// 如果参数不是构造方法，就会报错
type T1 = InstanceType<string>; // 报错

type T2 = InstanceType<function>; // 报错

// 如果类型参数是 any 或 never 两个特殊值，分别返回 any 和 never
type T3 = InstanceType<any>; // any

type T4 = InstanceType<never>; // never
