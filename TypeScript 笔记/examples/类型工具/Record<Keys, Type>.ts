// 返回一个对象类型，参数 Keys 用作键名，参数 Type 用作键值类型
type T1 = Record<'a', number>; // { a: number }

// 参数 Keys 可以是联合类型，这时会依次展开多个键
type T2 = Record<'a' | 'b', number>; // { a: number, b: number }
