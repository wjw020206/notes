// 从联合类型 UnionType 中删除某些类型 ExcludedMembers，组成一个新的类型返回
type T1 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T2 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T3 = Exclude<string | (() => void), Function>; // string
type T4 = Exclude<string | string[], any[]>; // string
type T5 = Exclude<(() => void) | null, Function>; // null
type T6 = Exclude<200 | 400, 200 | 201>; // 400
type T7 = Exclude<number, boolean>; // number
