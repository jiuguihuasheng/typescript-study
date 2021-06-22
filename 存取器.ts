class Person {
  private _name: string;
  private _age: number;
  
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // 存取器  
  get name() : string {
    return this._name;
  }
  
  set name(v : string) {
    this._name = v;
  }
  

}

const man = new Person('name', 18);
man.name = 'name1'; // 实际执行的是set name(v);
console.log(man.name); // 实际执行的是get name();
