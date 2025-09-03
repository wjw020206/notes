type A = {
  foo: number;
  bar: number;
};

type B = {
  [p in keyof A as `${p}ID`]: A[p];
};

// 将对象类型的属性映射为方法类型

interface Person {
  name: string;
  age: number;
  location: string;
}

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type LazyPerson = Getters<Person>;
