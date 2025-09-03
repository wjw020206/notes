function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

type A = { a: string };
type B = { b: string };

function isTypeA(x: A | B): x is A {
  if ('a' in x) return true;
  return false;
}

function isCat(a: any): a is Cat {
  return a.name === 'kitty';
}

let x: Cat | Dog;

if (isCat(x)) {
  // x 肯定是 Cat 类型
  x.meow();
}

// 描述类方法的返回值
class Teacher {
  isStudent(): this is Student {
    return false;
  }
}

class Student {
  isStudent(): this is Student {
    return true;
  }
}
