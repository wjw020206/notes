// 用来从联合类型 Type 删除 null 类型和 undefined 类型，组成一个新类型返回，也就是返回 Type 的非空类型版本
// string | number
type T1 = NonNullable<string | number | undefined>;

// string[]
type T2 = NonNullable<string[] | null | undefined>;

type T3 = NonNullable<boolean>; // boolean
type T4 = NonNullable<number | null>; // number
type T5 = NonNullable<string | undefined>; // string
type T6 = NonNullable<null | undefined>; // never

type T7 = (string | number) & {};
