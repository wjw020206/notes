// 从函数类型 Type 里面提取参数类型，组成一个元组返回
type T1 = Parameters<() => string>; // []

type T2 = Parameters<(s: string) => void>; // [s: string]

type T3 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

type T4 = Parameters<(x: { a: number; b: number }) => void>; // [x: { a: number, b: string }]

type T5 = Parameters<(a: number, b: number) => number>; // [a: number, b: number]

// 如果是不带有参数的函数形式，会报错
type T6 = Parameters<string>; // 报错

type T7 = Parameters<Function>; // 报错

// any 和 never 是两个特殊值，会返回 unknow[] 和 never
type T8 = Parameters<any>; // unknown[]

type T9 = Parameters<never>; // never

// 假设是第三方模块的代码，只输出了函数 getGift()
interface SecretName {
  first: string;
  last: string;
}

interface SecretSanta {
  name: SecretName;
  gift: string;
}

export function getGift(name: SecretName, gift: string): SecretSanta {
  // ...
}

// 如果要获取输出函数 getGift() 的参数类型和返回值类型，可以使用 Parameters<T> 和 ReturnType<T>
type ParaT = Parameters<typeof getGift>; // [name: SecretName, gift: string]

type ReturnT = ReturnType<typeof getGift>; // SecretSanta
