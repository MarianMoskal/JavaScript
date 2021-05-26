'use strict'


                // task 01



// function calculateTotalPrice (orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//     orderedItems.forEach(function (item, index) {
//         totalPrice += item;
//     });
//   // Пиши код выше этой строки
//   return totalPrice;
// };


                // task 02



// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach(function(number, index) {
//       if (number > value) {
//         filteredNumbers.push(number)
//       };
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   };

// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].



                // task 03



// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(function(el, index){
//       if (secondArray.includes(el)) {
//         commonElements.push(el);
//       }
//     });
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) 
// возвращает[10, 30, 40]


                // task 04


//  const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };
               


                // task 05


// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// ;
// // Пиши код выше этой строки



                // task 06


// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems)=> {
//   let totalPrice = 0;

//   orderedItems.forEach((item) =>
//     totalPrice += item
//     );

//   return totalPrice;
// };
// // Пиши код выше этой строки


                // task 07


// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// };


                // task 08


// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
// };


                // task 09


// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     let newNumbers = [];
  
//     numbers.forEach((number, index) => {

//         if (number % 2 === 0) {
//             number = number + value;     
//         };
        
//         newNumbers.push(number);

//     });
    
//     return newNumbers;
//     // Пиши код выше этой строки
//   }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));



                // task 10



// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => {return planet.length});



                // task 11


// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map(book => book.title);


                // task 12


// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap(book => book.genres);

// Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ].



                // task 13


// const getUserNames = (users) => {
//   let result = [];
  
//   users.map((user) => {result.push(user.name); });
//   return result;

//   };


                // task 14


// // Пиши код ниже этой строки
// const getUserEmails = users => {
//   let emails = [];
  
//   users.map(user => emails.push(user.email));
//     return emails;
//   };
//   // Пиши код выше этой строки


                // task 15


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);



                // task 16


// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);


                // task 17


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING );
// const booksByAuthor = books.filter(book => book.author === AUTHOR );


                // task 18


// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   let eyeColor = [];
  
//   return eyeColor = users.filter(user => user.eyeColor === color);
   
// };
// // Пиши код выше этой строки


                // task 19


// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//    let usersToFind = [];
  
//   return usersToFind = users.filter(user => user.age > minAge && maxAge > user.age);

// };
// // Пиши код выше этой строки


                // task 20



// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   let usersToFind =[];
//   return usersToFind = users.filter(user => user.friends.includes(friendName));
// };
// // Пиши код выше этой строки



                // task 21
             

// // Пиши код ниже этой строки
// const getFriends = (users) => {
//     let result = [];
    
//     const friends = users.flatMap(user => user.friends);

//     return result = friends.filter((friend, index, array) => array.indexOf(friend) === index);
// };
// // Пиши код выше этой строки


                // task 22


// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   let result =[];
  
//   return result = users.filter(user => user.isActive);
// };
// // Пиши код выше этой строки



                // task 23


// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//     let result =[];
  
//   return result = users.filter(user => user.isActive === false);
// };
// // Пиши код выше этой строки


                // task 24


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);



                // task 25


// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
// // Пиши код выше этой строки



                // task 26


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);



                // task 27


// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive); 
// };
// // Пиши код выше этой строки



                // task 28



// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);



                // task 29



// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive ===  true); 
// };
// // Пиши код выше этой строки



                // task 30


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => {return previousValue + number});

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;



                // task 31



// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce
//     ((total, player) => {
        
//     return total += player.playtime / player.gamesPlayed;
    
//     }, 0);

// console.log(totalAveragePlaytimePerGame);


                // task 32


// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//     return users.reduce(
//         (total, user) => total += user.balance, 0);
// };
// // Пиши код выше этой строки



                // task 33



// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((total, user) =>
//      total += user.friends.length , 0);
// };
// // Пиши код выше этой строки



                // task 34



// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();



                // task 35


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);



                // task 36


// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));


                // task 37


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b)=>a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a,b)=>b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


                // task 38



// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//    return users.sort((a,b)=> a.balance - b.balance)
// };
// // Пиши код выше этой строки



                // task 39



// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a,b)=> b.friends.length - a.friends.length) 
// };
// // Пиши код выше этой строки



                // task 40


// const sortByName = users => {
//     // console.log(users);

//    return [...users].sort((a,b) => a.name.localeCompare(b.name));
// };



                // task 41



// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .map(book => book.author);
//     // console.log(names);




                // task 42


// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//     return [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//   .map(user => user.name);
// };
// // Пиши код выше этой строки

// console.log(getNamesSortedByFriendCount(users));



                // task 43


// // Пиши код ниже этой строки
// const getSortedFriends = users => {
//     return [...users]
//         .flatMap(user => user.friends)
//         .sort((a, b) => a.localeCompare(b))
//         .filter((friend, index, array) => array.indexOf(friend) === index);
// };
// // Пиши код выше этой строки                
// // console.log(getSortedFriends(users));


                // task 44



// Пиши код ниже этой строки

// const getTotalBalanceByGender = (users, gender) => {
    
//     return [...users]
      
//       .filter(user => user.gender === gender)
      
//         .reduce((total, user) => total += user.balance, 0);
    
// };

// Пиши код выше этой строки
// console.log(getTotalBalanceByGender(users, 'female'));








                     // Practice




                    

const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// console.table(
//     vehicles
//         .filter(({ make, price }) => make === 'Toyota' && price > 30000)
//         .sort((a, b) => b.price - a.price),
// );

/*
 * Метод sort
 */
const sortByAscendingAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);
// console.table(sortByAscendingAmount(vehicles));

const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);
// console.table(sortByDescendingPrice(vehicles));

/*
 * Метод map
 */
const getModels = cars => cars.map(({ model, type }) => ({ model, type }));
// console.table(getModels(vehicles));

/*
 * Метод filter
 */
const filterByPrice = (cars, priceThreshold) => cars.filter(car => car.price > priceThreshold);
// console.table(filterByPrice(vehicles, 30000));

const getCarsWithDiscount = cars => cars.filter(car => car.onSale);
// console.table(getCarsWithDiscount(vehicles));

const getCarsWithoutDiscount = cars => cars.filter(car => !car.onSale);
// console.table(getCarsWithoutDiscount(vehicles));

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);
// console.table(getCarsWithType(vehicles, 'suv'));

/*
 * А если нужно отфильтровать и те что на sale и те что дешевле 23к?
 */
const filterCars = (cars, priceThreshold) => {
    return cars.filter(car => car.price < priceThreshold && car.onSale);
};
// console.table(filterCars(vehicles, 40000));

/*
 * Метод find
 */
const getCarByModel = (cars, model) => cars.find(car => car.model === model);
// console.log(getCarByModel(vehicles, 'F-150'));

/*
 * Метод reduce
 */
const getTotalCarsAmount = cars => {
    return cars.reduce((totalAmount, car) => totalAmount + car.amount, 0);
};
// console.log(getTotalCarsAmount(vehicles));

/*
 * Цепочки методов
 */

// filterByAmount + только название модели получить (filter + map)
const getAvailableCarNames = (cars, amountThreshold) => {
    return cars.filter(car => car.amount > amountThreshold).map(car => car.model);
};
// console.table(getAvailableCarNames(vehicles, 12));

// filterByAmount + только название модели получить (reduce)
// const getAvailableCarNames = (cars, amountThreshold) => {
//     return cars.reduce((models, car) => {
//         if (car.amount > amountThreshold) {
//             models.push(car.model);
//         }

//         return models;
//     }, []);
// };
// console.table(getAvailableCarNames(vehicles, 12));

// filter + sort (получить машины на распродаже и сортировать по цене)
const getSortedCarsOnSale = cars => {
    return cars.filter(car => car.onSale).sort((a, b) => b.price - a.price);
};
// console.table(getSortedCarsOnSale(vehicles));












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

function letMeSeeYourName(callback) {
  // console.log(callback);
  const name = prompt("Как вас зовут?");

  if (name) {
    callback(name);
  }
}

function greet(name) {
  console.log(`Привет ${name}`);
}

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

function makeProduct(name, price, callback) {
  const product = { name, price };
  product.id = Math.random();

  callback(product);
}

function showProduct(product) {
  console.log({ product });
}

// makeProduct("картошка", 150, showProduct);

// ------------------------

/* 3. Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, 
чтобы не нужно было каждый раз передавать имя шефа. Напишите функцию 
makeShef(shefName), 
которая возвращает другую функцию makeDish(dish), 
помнящую имя шефа при её вызове. */

function makeShef(shefName) {
  return function makeDish(dish) {
    console.log(`${shefName} готовит ${dish}`);
  };
}

// const shef1 = makeShef("Игорь");
// const shef2 = makeShef("Олег");

// shef1("суп");
// shef1("пюре");

// shef2("гречку");

// -------------------------------

// 4. Исправьте ошибки чтобы код работал.

const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  }
};

// product.showPrice();

// -------------------------------

// 5. Исправьте ошибки чтобы код работал.

const product2 = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  }
};

function callAction(action) {
  console.log(this);
  action();
}

// callAction(product2.showPrice.bind(product2));

//TODO: Написать тоже самое с apply/call

// -------------------------------

/* 6. Напишите функцию each(array, callback), которая первым 
параметром принимает массив, а вторым - функцию, 
которая применится к каждому 
элементу массива. Функция each должна вернуть 
новый массив, элементами 
которого будут результаты вызова коллбека. */

function each(array, clb) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(clb(array[i]));
  }

  return newArr;
}

const arr = [2, 6, 87, 34, 567, 89];

// console.log(each(arr, val => val * 2));

// -------------------------------

/* 7. Напишите функцию makeCounter(), которая возвращает 
другую функцию, 
которая считает и логирует количество своих вызовов. */

const makeCounter = () => {
  let counter = 0;
  return () => (counter += 1);
};

const counter = makeCounter();

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

const savePassword = pwd => {
  return pwd2 => pwd === pwd2;
};

function savePassword2(pwd) {
  return function checkPassword(pwd2) {
    return pwd === pwd2;
  };
}

const pwd1 = savePassword("aaa");

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
