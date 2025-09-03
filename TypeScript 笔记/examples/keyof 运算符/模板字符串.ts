type World = 'world';

// "hello world"
type Greeting = `hello ${World}`;

// 模版字符串可以引用的类型一共七种，分别是 string、number、bigint、boolean、null、undefined、enum，以外的类型会报错
type Num = 123;
type Obj = { n: 123 };
enum myEnum {
  a,
  b,
}

type T1 = `${Num} received`; // "123 received"
type T2 = `${Obj} received`; // 报错
type T3 = `${myEnum} received`; // "0 received" | "1 received"

type T = 'A' | 'B';

// "A_id" | "B_id"
type U = `${T}_id`;

type F1 = 'A' | 'B';
type F2 = '1' | '2';

// 'A1' | 'A2' | 'B1' | 'B2';
type V = `${F1}${F2}`;
