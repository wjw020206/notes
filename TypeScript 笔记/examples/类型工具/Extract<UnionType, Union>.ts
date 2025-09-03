// 与 Exclude<T, U> 相反，从联合类型 UnionType 中，提取指定类型 Union，组成一个新类型返回
type T1 = Extract<'a' | 'b' | 'c', 'a'>; // "a"
type T2 = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // "a" | "b"
type T3 = Extract<'a' | 'b' | 'c', 'a' | 'd'>; // "a"
type T4 = Extract<string | string[], any[]>; // string[]
type T5 = Extract<(() => void) | null, Function>; // () => void
type T6 = Extract<200 | 400, 200 | 201>; // 200

// 如果类型参数 Union 不包含在联合类型 UnionType 中，则返回 never 类型
type T7 = Extract<string | number, boolean>; // never
