/**
 * 1.交叉类型（Intersection Types）
 * 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
 * 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。
 */
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  return result;
}

/**
 * 2.联合类型（Union Types）
 * 联合类型表示一个值可以是几种类型之一。 用竖线（ |）分隔每个类型
 * number | string | boolean表示一个值可以是 number， string，或 boolean。
 * 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
 */
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  return <Fish | Bird>{}
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

