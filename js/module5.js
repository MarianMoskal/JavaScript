'use strict';

 
                // task 01



// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);


// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;



                // task 02



// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки




                // task 03



//  function Car(brand, model, price) {
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
//  }

// const newCar = new Car('Audi', 'Q3', 36000);
// console.log(newCar);



                // task 04



// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }




                // task 05


// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//    return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//    this.price = newPrice;
// };


                // task 06



// function Storage(items) {

//   this.items = items;
// };

// Storage.prototype.getItems = function () {
//     return this.items;
// };
    
// Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
// };
  
// Storage.prototype.removeItem = function (item) {

//     for (const el of this.items) {

//         const itemIndex = this.items.indexOf(item);

//         if (itemIndex !== -1) {
//             this.items.splice(itemIndex, 1);
//         }
//     }
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер",     "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]




                // task 07



// function StringBuilder(baseValue){
//   this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function() {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function(str){
//   this.value = this.value + str;
// };

// StringBuilder.prototype.padStart = function(str){
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function(str){
//   this.value = str + this.value + str;
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='




                // task 08


// class Car {};


                // task 09



// class Car {
//   brand;
//   model;
//   price;
  
//   constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//  }
// }

// new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// // получится объект { brand: 'Audi', model: 'Q3', price: 36000 }



                // task 10


// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getPrice(){
//     return this.price;
//   };
  
//   changePrice(newPrice){
//     this.price = newPrice;
//   };
  
// }

// // Car.prototype.hasOwnProperty('getPrice') возвращает true
// // new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// // вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.




                // task 11



// class  Car {
//    #brand;
//   // model;
//   // price;
  
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getBrand(){
//     return this.#brand;
//   }
  
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// };



                // task 12



// class Storage{
//   #items;
  
//   constructor(items) {
//   this.#items = items;
// }

// getItems() {
//   return this.#items;
//  };

// addItem(newItem) {
//   this.#items.push(newItem);
//  };

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
//  };
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]




                // task 13



// class StringBuilder {
//     #value;
  
//     constructor(baseValue) {
//         this.#value = baseValue;
//         }

//     getValue() {     
//         return this.#value;
//     }
    

//     padEnd(str) {
//       console.log(this.#value);
//       this.#value += str;
//     }

//     padStart(str) {
//       this.#value = str + this.#value;
//     }

//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='



                // task 14



// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }





                // task 15




// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;
  

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE){
//         this.#price = newPrice;
//       };
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000



                // task 16



// class Car {
//     static #MAX_PRICE = 50000;
//     // Пиши код ниже этой строки
//     static checkPrice( price ) { 
//         return price > Car.#MAX_PRICE     
//             ? 'Внимание! Цена превышает допустимую.'
//             : 'Всё хорошо, цена в порядке.';   
//     } 
//   // Пиши код выше этой строки
//     constructor({ price }) {
      
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.




                // task 17


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser'
//     };
// };



                // task 18


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//     accessLevel;
    
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
  
//   constructor ({email, accessLevel}){
//     super(email);
//     this.accessLevel = accessLevel;
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser




                // task 19




// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
  
//   blacklistedEmails = [];
  
//   blacklist(email){
//     this.blacklistedEmails.push(email);
//   };
  
//     isBlacklisted(email) {
    
//     return this.blacklistedEmails.includes(email) ;
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 








                    //  Practice



/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);








/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);









// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
//   onUpdate = () => null,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);

//   this.onUpdate = onUpdate;

//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.value = refs.container.querySelector('[data-value]');

//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;

//   this.onUpdate();
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// new CounterPlugin({
//   rootSelector: '#counter-1',
//   step: 10,
//   initialValue: 100,
//   onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
// });

// new CounterPlugin({ rootSelector: '#counter-2', step: 2 });










// /*
//  * Классы
//  * 🐷 - объявление
//  * 🐷 - конструктор
//  * 🐷 - методы
//  * 🐷 - static
//  * 🐷 - приватные свойства
//  * 🐷 - синтаксис публичных свойства и методы классов
//  * 🐷 - геттеры и сеттеры
//  */

// class Car {
//     static description = 'Класс описывающий автомобиль';

//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }

//     constructor({ brand, model, price } = {}) {
//         this.brand = brand;
//         this._model = model;
//         this._price = price;
//     }

//     get price() {
//         return this._price;
//     }

//     set price(newPrice) {
//         this._price = newPrice;
//     }

//     get model() {
//         return this._model;
//     }

//     set model(newModel) {
//         this._model = newModel;
//     }
// }

// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);







/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: 'ajax',
    xp: 500,
    weapon: 'axe',
    warcry: 'waaaaaaaah',
});

// console.log(ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        // console.log(`${this.name} что-то там кастует 🧙‍♂️`);
    }
}

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );















/* 1. Напиши класс User для создания пользователя со 
следующим свойствами:
a. username - имя, строка
b. age - возраст, число
c. numberOfPosts - кол-во постов, число
d. Класс ожидает 1 параметр - объект настроек с 
одноимёнными свойствами.
Добавь метод getInfo(), который, возвращает строку: 
Пользователю ${имя} ${возраст} лет и 
у него ${кол-во постов} публикаций. */

const User = function (userObj) {
  const { username, age, numberOfPosts } = userObj;
  this.username = username;
  this.age = age;
  this.numberOfPosts = numberOfPosts;

  // this.getInfo = function () {
  //   console.log(`Пользователю ${this.username} ${this.age} лет и
  //   у него ${this.numberOfPosts} публикаций.`);
  // };
};

// console.log(User.prototype);

User.prototype.getInfo = function () {
  // console.log(`Пользователю ${this.username} ${this.age} лет и
  //   у него ${this.numberOfPosts} публикаций.`);
};

const user1 = new User({ username: "Игорь", age: 34, numberOfPosts: 10 });

// console.log(user1);

// user1.getInfo();
// -----------------

/* 2. Напиши класс Storage который создаёт объекты 
для управления складом товаров. 
При вызове будет получать один аргумент - начальный 
массив товаров, и записывать его в свойство items.
Добавь методы класса:
a. getItems() - возвращает массив товаров.
b. addItem(item) - получает новый товар и добавляет 
его к текущим.
c. removeItem(item) - получет товар и, если он есть, 
удаляет его из текущих. */

const Storage = function (itemsArr) {
  this.items = itemsArr;
};

Storage.prototype.getItem = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  return this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);

  if (index !== -1) {
    this.items.splice(index, 1);
  }

  return this.items;
};

const storage = new Storage(["Item1", "Item2", "Item3"]);

// console.log(storage.getItem());

// console.log(storage.addItem("Item4"));

// console.log(storage.getItem());

// console.log(storage.removeItem("Item2"));

// console.log(storage.getItem());

// -----------------

/* 3. Напиши класс Client который создаёт объект 
со свойствами login и email. 
Объяви приватные свойства #login и #email, 
доступ к которым сделай 
через геттер и сеттер login и email. */

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#email = email;
    this.#login = login;
  }

  // get getClientData() {
  //   return {
  //     login: this.#login,
  //     email: this.#email
  //   };
  // }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const client = new Client("nickname", "test@test.ru");

// console.log(client.getClientData);

client.changeEmail = "test1@test1.com";

// console.log(client.getClientData);

// console.log(client);

// -----------------

/* 4. Напиши класс Notes который управляет коллекцией 
заметок в свойстве items. 
Заметка это объект со свойствами text и priority. 
Добавь классу статическое свойство Priority, 
в котором будет храниться объект с приоритетами. 
Добавь методы addNote(note), removeNote(text) и 
updateNotePriority(text, newPriority). */

//TODO:updateNotePriority(text, newPriority) - дома

class Notes {
  constructor() {
    this.items = [];
  }

  static Priority() {
    return {
      HIGH: "high",
      LOW: "low"
    };
  }

  addNote(note) {
    return this.items.push(note);
  }

  removeNote(noteName) {
    const index = this.items.findIndex(item => item.text === noteName);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const note1 = new Notes();

// note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note1.addNote({ text: "Note2", priority: Notes.Priority().HIGH });
// note1.addNote({ text: "Note3", priority: Notes.Priority().LOW });

// note1.removeNote("Note2");

// console.log(note1.items);

// -----------------

/*
  5. Создать класс Worker у которого есть 
  свойства name, surname, age, position, salary.
     У класса Worker есть метод getSalary.
     Создать класс TopLevelWorker у которого есть 
     свойство hierarchyLevel и который 
     наследует класс Worker, добавляя метод getHierarchyLevel
     Реализовать задачу с помощью ES5 прототипов и ES6 классов
*/

const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom"
};

const workerObj = {
  name: "Антон",
  surname: "Ефимов",
  age: 34,
  position: "FE разработчик",
  salary: 3000
};

// ES5

const Worker = function (obj) {
  const { name, surname, age, position, salary } = obj;

  this.name = name;
  this.surname = surname;
  this.age = age;
  this.position = position;
  this.salary = salary;
};

Worker.prototype.getSalary = function () {
  return this.salary;
};

const TopLevelWorker = function (obj, hierarchyLevel) {
  Worker.call(this, obj);
  this.hierarchyLevel = hierarchyLevel;
};

TopLevelWorker.prototype = Object.create(Worker.prototype);
TopLevelWorker.prototype.constructor = TopLevelWorker;

// const topLevelWorker1 = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.TOP);
// console.log(topLevelWorker1);
// console.log(topLevelWorker1.getSalary());

// ES6

class Worker2 {
  constructor(obj) {
    const { name, surname, age, position, salary } = obj;

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    // console.log(this.salary);
  }
}

class TopLevelWorker2 extends Worker2 {
  constructor(obj, hierarchyLevel) {
    super(obj);
    this.hierarchyLevel = hierarchyLevel;
  }
}

const topLvlWorker = new TopLevelWorker2(workerObj, HIERARCHY_LEVEL.TOP);

// console.log(topLvlWorker);
// topLvlWorker.getSalary();









