'use strict';

            //    task 01
           
// const apartment = {
//   imgUrl:'https://via.placeholder.com/640x480',
//   descr:'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };


            //    task 02

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner:{
//       name: 'Генри',
//       phone:'982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     }
//   };


            //    task 03


// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки


            //    task 04


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки


            //    task 05


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки


            //    task 06


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating =4.7;
// apartment.owner.name =  'Генри Сибола';
// apartment.tags.push('trusted');


            //    task 07


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: 'Ямайка', city: 'Кингстон'};


            //    task 08


// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
//   name,
//   price,
//   image,
//   tags,
//   // Пиши код выше этой строки
// };



            //    task 09


// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam'
//   // Пиши код выше этой строки
// };


            //    task 10


// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
  
//   // Ключ
//   keys.push(key);
  
//   // Значение свойства с таким ключом
//   values.push(apartment[key]);
// }


            //    task 11


// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
  
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }
//   // Пиши код выше этой строки
// }


            //    task 12


// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
  
//    for (const key in object) {
//      if (object.hasOwnProperty(key)) {
//       propCount += object.hasOwnProperty(key);
//    }
//  }
//   // Пиши код выше этой строки
//   return propCount;
// }


            //    task 13


// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
//    const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }


            //    task 14


// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
  
//   const keys = Object.keys(object);
  
//   propCount = keys.length;

//   return propCount;
//   // Пиши код выше этой строки
// }


            //    task 15


// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


            //    task 16


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//  //const keys = Object.keys(salaries);
//  const values = Object.values(salaries);
//   console.log(values);

//   for (const key of values) {
//     totalSalary += key;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })



            //    task 17


// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }


            //    task 18


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
  
//   for (const product of products){
//     if (product.name === productName) {
//        return product.price;
//        }
//    }
//     return null
//   // Пиши код выше этой строки
// }



            //    task 19


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const values = []
  
//   for (const product of products){
//      const keys = Object.keys(product);
    
//     if (keys.includes(propName)) {
//        values.push(product[propName]);
//     }
//   }
  
//   return values
//   // Пиши код выше этой строки
// }

// getAllPropValues('name')


            //    task 20


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice;
  
//  for (const product of products) {
//    if (product.name === productName) {
//      console.log(product.name);
//      return totalPrice = product.price * product.quantity;
//    }
//  }

// return 0;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice('Радар');



            //    task 21


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;



            //    task 22


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;



            //    task 23


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday: highYesterday, today: highToday, tomorrow:  highTomorrow, icon: highIcon ='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;



            //    task 24


// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// // for (const {hex, rgb = color} of colors)
//   for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


            //    task 25


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const { today: { high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' }
// } = forecast;


            //    task 26


// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {today: { high: todayHigh, low: todayLow}, tomorrow: {high: tomorrowHigh, low: tomorrowLow}} = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }            


            //    task 27


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);



            //    task 28


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


            //    task 29


// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};



            //    task 30


// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// const  newObject = {completed, category, priority, ...data};
  
//   return newObject;
//   // Пиши код выше этой строки
// }


            //    task 31

// // Пиши код ниже этой строки
// function add(...args) {
 
//   let totalSum = 0;
  
//   for (const arg of args) {
//     //  console.log(arg);
//     totalSum += arg;
//     console.log(totalSum);
//   }
//   return totalSum;
//   // Пиши код выше этой строки
// }

// console.log(add(1, 2, 3, 4, 5));



            //    task 32


// // Пиши код ниже этой строки
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber)
//     total += arg;
//   }

//   return total;
//   // Пиши код выше этой строки
// }


            //    task 33


// function findMatches(array, ...rest) {

//   const matches = []; // Не изменяй эту строку
    
//   for (let i of rest) {
//     for (const num of array) {   
//         if (i === num) {         
//         matches.push(i);
//         }
//      }
//   }
//   // Пиши код выше этой строки
//   return matches;
// }

// // findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));



            //    task 34


// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`
//   }
//   // Пиши код выше этой строки
// };



            //    task 35            


// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
    
//     // Пиши код ниже этой строки
//     const index = this.books.indexOf(oldName);
//     console.log(index);
// 	for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(index, 1, newName);
//       }
//     }
// 	return this.books;
	
//     // Пиши код выше этой строки
//   },
// };

// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));

             //    task 36
 

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };




            //    task 37
 

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions(){
//      return this.potions;
//   },
//   // Пиши код выше этой строки
// };


            //    task 38
 

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };


            //    task 39
 

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const index = this.potions.indexOf(potionName);
//     this.potions.splice(index, 1);
//     // Пиши код выше этой строки
//   },
// };


            //    task 40
 

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const index = this.potions.indexOf(oldName);
//      this.potions.splice(index, 1, newName);
//     // Пиши код выше этой строки
//   },
// };


            //    task 41


// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
    

//    for (const potion of this.potions)
//      if (potion.name === potionName) {

//        const potionIndex = this.potions.indexOf(potion);
       
//        this.potions.splice(potionIndex, 1);
//        return this.potions;
//       }
    
//      return `Зелья ${potionName} нет в инвентаре!`;
    
//   },
//   updatePotionName(oldName, newName) {

//      for (const potion of this.potions)
//        if (potion.name === oldName) {
       
//        potion.name = newName;
//        return this.potions;
//       }

//        return `Зелья ${oldName} нет в инвентаре!`;

//   },
//   // Пиши код выше этой строки
// };


// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));









                              // PRACTICE



// /*
//  * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
//  */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log('нашли такой продукт ', productName);
//         console.log('индекс: ', i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());


















// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[c] = 1;
// a[b] = 2;

// console.log(a);
// console.log(a[b]);

/* 1. Напишите две функции:
a. letMeSeeYourName(callback) - спрашивает имя пользователя 
через prompt и вызывает 
коллбек ф-цию callback
b. greet(name) - коллбек принимающий имя и логирующий в 
консоль строку "Привет" + name */


// function letMeSeeYourName(callback) {
//   // console.log(callback);
//   const name = prompt("Как вас зовут?");

//   if (name) {
//     callback(name);
//   }
// }

// function greet(name) {
//   console.log(`Привет ${name}`);
// }


// letMeSeeYourName(greet);

// -------------------------

/* 2. Напишите две функции:
a. makeProduct(name, price, callback) - принимает имя и 
цену товара, а также колбек. 
Функция создаёт обьект товара, добавляя ему уникальный 
идентификатор в свойство id и
 вызывает колбек передавая ему созданный обьект.
b. showProduct(product) - коллбек принимающий обьект 
продукта и логирующий его в консоль */

// function makeProduct(name, price, callback) {
//   const product = { name, price };
//   product.id = Math.random();

//   callback(product);
// }

// function showProduct(product) {
//   console.log({ product });
// }

// makeProduct("картошка", 150, showProduct);

// ------------------------

/* 3. Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, 
чтобы не нужно было каждый раз передавать имя шефа. Напишите функцию 
makeShef(shefName), 
которая возвращает другую функцию makeDish(dish), 
помнящую имя шефа при её вызове. */

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} готовит ${dish}`);
//   };
// }

// const shef1 = makeShef("Игорь");
// const shef2 = makeShef("Олег");

// shef1("суп");
// shef1("пюре");

// shef2("гречку");

// -------------------------------

// 4. Исправьте ошибки чтобы код работал.

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   }
// };

// product.showPrice();

// -------------------------------

// 5. Исправьте ошибки чтобы код работал.

// const product2 = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   }
// };

// function callAction(action) {
//   console.log(this);
//   action();
// }

// callAction(product2.showPrice.bind(product2));

//TODO: Написать тоже самое с apply/call

// -------------------------------

/* 6. Напишите функцию each(array, callback), которая первым 
параметром принимает массив, а вторым - функцию, 
которая применится к каждому 
элементу массива. Функция each должна вернуть 
новый массив, элементами 
которого будут результаты вызова коллбека. */

// function each(array, clb) {
//   let newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     newArr.push(clb(array[i]));
//   }

//   return newArr;
// }

// const arr = [2, 6, 87, 34, 567, 89];

// console.log(each(arr, val => val * 2));

// -------------------------------

/* 7. Напишите функцию makeCounter(), которая возвращает 
другую функцию, 
которая считает и логирует количество своих вызовов. */

// const makeCounter = () => {
//   let counter = 0;
//   return () => (counter += 1);
// };

// const counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// -------------------------------

/* 8. Напишите функцию savePassword(password) которая принимает 
пароль 
и возвращает внутреннюю функцию, которая принимает строку и 
возвращает 
буль true, если строка совпадает с сохраненным паролем и false 
- если не совпадает. */

// const savePassword = pwd => {
//   return pwd2 => pwd === pwd2;
// };

// function savePassword2(pwd) {
//   return function checkPassword(pwd2) {
//     return pwd === pwd2;
//   };
// }

// const pwd1 = savePassword("aaa");

// console.log(pwd1("aaahhhh"));

// console.log(pwd1);

// -------------------------------

/* 9. Напишите функцию для хранения скидки. Функция возвращает 
другую функцию,которая принимает сумму 
покупки и возвращает финальную сумму с сохранённой скидкой. */

// function saveDiscount(discount) {
//   return function makeDiscount(sum) {
//     return sum - sum * (discount / 100);
//   };
// }

// const saveDiscount2 = discount => sum => sum - sum * (discount / 100);

// const discount50 = saveDiscount(50);

// const discount30 = saveDiscount2(30);

// console.log(discount50(1000));
// console.log(discount30(1000));

// function saveDiscount(discount, sum){}

// function saveDiscount(discount) {
//   return function makeDiscount(sum) {
//     return sum - sum * (discount / 100);
//   };
// }

// const x = () => {
//   return 1;
// };

// const y = () => 2;

















