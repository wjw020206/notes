// 用来取出 Promise 的返回值类型
type A = Awaited<Promise<string>>; // string

// 也可以返回多重 Promise 的返回值类型
type B = Awaited<Promise<Promise<number>>>; // number

// 如果参数类型不是 Promise 类型，会原样返回
type C = Awaited<boolean | Promise<number>>; // number | boolean
