const myName = 'Ildebrando';
const myAge = 45;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(5, 6);

class Person {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name} ${this.age}`;
  }
}

const ildebrando = new Person(34, 'ildebrando');
ildebrando.getSummary();
