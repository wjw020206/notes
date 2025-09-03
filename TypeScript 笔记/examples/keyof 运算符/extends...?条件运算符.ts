// true
type T = 1 extends number ? true : false;

// false
type U = 1 extends string ? true : false;

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

// number
type T1 = Dog extends Animal ? number : string;

// string
type T2 = RegExp extends Animal ? number : string;

// string
type T3 = Animal extends Dog ? number : string;

type Cond<T> = T extends U ? X : Y;

type MyType = Cond<A | B>;
// 等同于 Cond<A> | Cond<B>
// 等同于 (A exntends U ? X : Y) | (B exntends U ? X : Y)

type ToArray<Type> = Type extends any ? Type[] : never;

// string[] | number[]
type A = ToArray<string | number>;

type ToArray2<Type> = [Type] extends [any] ? Type[] : never;

// (string | number)[]
type B = ToArray2<string | number>;

type LiteralTypeName<T> = T extends undefined
  ? 'undefined'
  : T extends null
  ? 'null'
  : T extends boolean
  ? 'boolean'
  : T extends number
  ? 'number'
  : T extends bigint
  ? 'bigint'
  : T extends string
  ? 'string'
  : never;

// bigint
type Result = LiteralTypeName<123n>;

// "string" | "number" | "boolean"
type Result2 = LiteralTypeName<true | 1 | 'a'>;
