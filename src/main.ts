type live = {
  name: string;
  species: string;
};

export class PersonClass implements live {
  isLive: boolean;
  species: string;
  constructor(public name: string, public age: number) {
    this.isLive = true;
    this.species = 'human';
  }

  greet() {
    return console.log(`Hola, soy ${this.name}`);
  }

  kill() {
    this.isLive = false;
  }
}

const p3 = new PersonClass('Luiusa', 34);
const p4 = new PersonClass('Ramona', 64);

export class Student extends PersonClass {
  constructor(name: string, age: number, public course: string) {
    super(name, age);
  }

  greet() {
    super.greet();
    return console.log(`Estudio ${this.course}`);
  }
}

const s1 = new Student('Ramon', 50, 'Angular');

console.log(p3, p4, s1);

class Dog implements live {
  constructor(public name: string, public species: string) {
    //
  }
}

const x: live = {
  name: 'Albelt',
  species: 'Boleta',
};
const y: Dog = {
  name: 'Albelt',
  species: 'Boleta',
};
