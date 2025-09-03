type A = {
  a?: string;
  readonly b: number;
};

// 映射会原样复制原始对象的可选属性和只读属性
type B = {
  [Prop in keyof A]: A[Prop];
};

// 添加可选属性
type Optional<T> = {
  [Prop in keyof T]+?: T[Prop];
};

type C = Optional<A>;

// 移除可选属性
type Concrete<T> = {
  [Prop in keyof T]-?: T[Prop];
};

type C2 = Concrete<A>;

// 添加 readonly
type CreateImmutable<Type> = {
  +readonly [Prop in keyof Type]: Type[Prop];
};

type C3 = CreateImmutable<A>;

// 移除 readonly
type CreateMutable<Type> = {
  -readonly [Prop in keyof Type]: Type[Prop];
};

type C4 = CreateMutable<A>;

// 同时增加 ? 和 readonly 两个修饰符
type MyObj<T> = {
  +readonly [P in keyof T]+?: T[P];
};

type C5 = MyObj<A>;

// 同时移除 ? 和 readonly 两个修饰符
type MyObj2<T> = {
  -readonly [P in keyof T]-?: T[P];
};

type C6 = MyObj2<A>;
