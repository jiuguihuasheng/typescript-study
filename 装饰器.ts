
function fn(target: any) {
  target.isok = true; // 相当于给传进来的类或类属性方法添加了isok属性
  console.log(target);
}

@fn // 相当于fn(Zsq); 所以装饰器实际就是给类或者类属性方法添加内容(相当于现实给毛坯房装修)
class Zsq {
  
}
// 装饰器在类new Zsq()实例前就已经执行了