// 提取构造方法 type 的参数类型，组成一个元组类型返回
type T1 = ConstructorParameters<new (x: string, y: string) => object>; // [x: string, y: string]

type T2 = ConstructorParameters<new (x?: string) => object>; // [x?: string | undefined]

// 可以返回一些内置构造方法的参数类型
type T3 = ConstructorParameters<ErrorConstructor>; // [message?: string | undefined, options?: ErrorOptions | undefined]

type T4 = ConstructorParameters<FunctionConstructor>; // string[]

type T5 = ConstructorParameters<RegExpConstructor>; // [pattern: string | RegExp, flags?: string | undefined]

// 如果参数类型不是构造方法，就会报错
type T6 = ConstructorParameters<string>; // 报错

type T7 = ConstructorParameters<Function>; // 报错

// any 类型和 never 类型是特殊值，分别返回 unknown[] 和 never
type T8 = ConstructorParameters<any>; // unknown[]

type T9 = ConstructorParameters<never>; // never
