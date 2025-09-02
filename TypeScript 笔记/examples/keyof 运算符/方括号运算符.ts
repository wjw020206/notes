type Person = {
  age: number;
  name: string;
  alive: boolean;
};

// number
type Age = Person['age'];

// string | number
type T = Person['age' | 'name'];

// string | number | boolean
type A = Person[keyof Person];

// 访问不存在的属性会报错
type B = Person['notExisted'];

type Obj = {
  [key: string]: number;
};

// 方括号运算符的参数也可以属性名的索引类型
// number
type D = Obj[string];

const MyArray = ['a', 'b', 'c'];

// 等同于(typeof MyArray)[number];
// string
type Person2 = (typeof MyArray)[number];

// 方括号中不能有值的运算
const key = 'age';
type Age2 = Person[key]; // 报错
type Age3 = Person['a' + 'g' + 'e']; // 报错
