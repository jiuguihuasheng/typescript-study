// 1.布尔
const isShow: boolean = false;

// 2.数值
const num: number = 1;

// 3.字符串
const str: string = 'hello world';

// 4.数组
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// 5.元组: 表示一个已知元素数量和类型的数组，各元素的类型不必相同。
const tup: [string, number, boolean, number[]] = ['hello world', 2, false, [1, 2, 3]];

// 6.枚举enum: 对JavaScript标准数据类型的一个补充,默认情况下，从0开始为元素编号。 也可以手动的指定成员的数值。
enum Color1 {Red, Blue, Green}; // 0 1 2
const color1: Color1 = Color1.Green; // 2

enum Color2 {Red=1, Blue, Green}; // 1 2 3
const color2: Color2 = Color2.Green; // 3

enum Color3 {Red=1, Blue=3, Green=5}; // 1 3 5
const color3: Color3 = Color3.Green; // 5

// 7.any: 类型检查器不对这些值进行检查,移除类型检查
let param: any = 1;
param = 'hellow';

// 8.void: 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
function fn(): void {
  console.log('log')
}

let vd: void = null;
vd = undefined;

// 9.null 10.undefined: TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
const u: undefined = undefined;
const n: null = null;

// 11.object: 表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
const obj: object = {};

// 12.never: 表示的是那些永不存在的值的类型。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}