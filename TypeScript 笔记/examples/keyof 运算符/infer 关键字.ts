// Item 参数由 TypeScript 自己从 Type 数组类型的成员中推断来的
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// string
type Str = Flatten<string[]>;

// number
type Num = Flatten<number>;

// 如果不使用 inter 定义类型参数，就需要传入两个类型参数
type Flatten2<Type, Item> = Type extends Array<Item> ? Item : Type;

// string
type Str2 = Flatten2<string[], string>;

// number
type Num2 = Flatten2<number, number>;

// 推断函数的参数类型和返回值类型
type ReturnPromise<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T;

// 提取对象指定属性
type MyType<T> = T extends {
  a: infer M;
  b: infer N;
}
  ? [M, N]
  : never;

// [string, number]
type T = MyType<{ a: string; b: number }>;

// 通过正则匹配提取类型参数
type Str3 = 'foo-bar';

// bar
type Bar = Str3 extends `foo-${infer rest}` ? rest : never;
