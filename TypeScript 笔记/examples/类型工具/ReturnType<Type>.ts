// 提取函数类型 Type 的返回值类型，作为一个新类型返回
type T1 = ReturnType<() => string>; // string

type T2 = ReturnType<
  () => {
    a: string;
    b: number;
  }
>; // { a: string; b: number; }

type T3 = ReturnType<(s: string) => void>; // void

type T4 = ReturnType<() => () => any[]>; // () => any[]

type T5 = ReturnType<typeof Math.random>; // number

type T6 = ReturnType<typeof Array.isArray>; // boolean

// 如果类型参数是泛型，返回值类型取决于泛型类型，如果泛型类型不带限制条件，就会返回 unknown

type T7 = ReturnType<<T>() => T>; // unknown

type T8 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]

// 如果类型不是函数，会报错
type T9 = ReturnType<string>; // 报错

type T10 = ReturnType<Function>; // 报错

// any 和 never 是两个特殊值，分别返回 any 和 never
type T11 = ReturnType<any>; // any

type T12 = ReturnType<never>; // never