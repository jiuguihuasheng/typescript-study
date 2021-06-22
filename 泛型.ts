/**
 * T表示泛型，用作不知道类型的场合
 * <T>相当于传参
 * @param a 
 * @returns 
 */

function fn<T>(a: T): T{
  return a;
}

fn(10); // ts类型推断number，T就是number
fn<string>('hello'); // 指定泛型，T为string

function fn2<T, K>(a: T, b: K): T{
  console.log(b);
  return a;
}

fn2<number, string>(1, '1');

interface Integer{
  length: number;
}

function fn3<T extends Integer>(a: T): number {
  return a.length;
}

fn3('123'); // 因为传的是字符串，string对象有length属性，所以不会报错
fn3({length: 123});
fn3<Integer>({length:457});

class Myclass<T>{
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const mc = new Myclass<string>('name');