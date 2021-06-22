/**
 *  通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
 *  TypeScript会假设你，程序员，已经进行了必须的检查。
 */

// 类型断言有两种形式。 其一是“尖括号”语法：
const strValue: any = 'hello world';
const strLength: number = (<string>strValue).length;

// 另一个为as语法：
const str2Value: any = '我是字符串2';
const str2Length: number = (str2Value as string).length;