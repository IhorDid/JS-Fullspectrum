//TODO: № 1 на this ✅ ==============================================
// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// const price = 1000;
// product.showPrice();

//TODO: № 2 на перебирання ✅ ==============================================
//Знайти унікальні елементи за допомогою reduce
// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
// const numbersFun = (array) =>
//   array.reduce(
//     (acc, number) =>
//   array.indexOf(number) === ind;
//   return ;
//       acc.includes(number) ? acc : [...acc, number],
//     []
//   );
// console.log(numbersFun(numbers));

//TODO: № 3 на class ✅ ==============================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// Класс животных
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;

    }
    getInfo() {
        return `name: ${this.name}, type: ${this.type}` 
    }
    feed() {
      return `feeding: ${this.name}`  
    }
    
}
// Класс Хищника
class Predator extends Animal {
    constructor(name, type, species) {
        super(name, type)
        this.species = species;
        
    }
    getInfo() {
        return `${super.getInfo()}, Species: ${this.species}`
    }
    feed() {
        return `feeding: ${this.name}, the ${this.species}`
    }

    
}
// Класс птицы

class Bird extends Animal {
    constructor(name, type, wingspan) {
        super(name, type)
        this.wingspan = wingspan;
        
    }
    getInfo() {
        return `${super.getInfo()}, Wingspan: ${this.wingspan}`
    }
    feed() {
        return `feeding: ${this.name}, the ${this.wingspan}`
    }
 
}
// Класс Зоопарка
class Zoo {
    constructor() {
        this.animals = []
    }
    addAnimal(animal) {
        this.animals.push(animal)
    }
    listAnimals() {
        console.log("zoo animals", this.animals);
        this.animals.forEach((animal) => { console.log(animal.getInfo()); })
    }
}







const zoo = new Zoo()

const lion = new Predator("Simba", "Lion", "Africa Lion")

zoo.addAnimal(lion)

const eagle = new Bird("American eagle", "sparrow", "swallow")

zoo.addAnimal(eagle)
zoo.listAnimals()



