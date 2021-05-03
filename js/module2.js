'use strict';

                //    exemples

//  const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }




// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']





// // Ітерація по масиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Ітерація по рядку
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }




// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   /*
//    * На кожній ітерації ми будемо перевіряти чи збігається елемент масиву з
//    * ім'ям клієнта. Якщо збігається то ми записуємо в message повідомлення
//    * про успіх і робимо break щоб не шукати далі
//    */

//   if (client === clientNameToFind) {
//     message = 'Клієнт з таким іменем є в базі даних!';
//     break;
//   }

//   // Якщо вони не збігаються то запишемо в resultMsg повідомлення про відсутність імені
//   message = 'Клієнта з таким іменем немає в базі даних!';
// }

// console.log(message); // Клієнт з таким іменем є в базі даних!




// /*
//  * Для чисел менше ніж поріг спрацьовує continue, виконання тіла припиняється
//  * і управління передається на наступну ітерацію.
//  */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше ніж ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }



// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Підмасив матриці matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Елемент підмасив матриці matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45



// const sum = function() {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15




// // ❌ Погано
// function fn() {}

// // ✅ Добре
// const fn = function() {};
 




               //  task 1

// function checkAge(age) {
//   if (age >= 18) { // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }


               //  task 2


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки

//   if (password === ADMIN_PASSWORD) {
//     return  'Добро пожаловать!';
//   } 
//   return  'Доступ запрещен, неверный пароль!';
//   // Пиши код выше этой строки
// }


               //  task 3


// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
  
//   if (ordered === 0) {
//     return  'В заказе еще нет товаров';
//   } 
  
//   if (ordered > available) {
//     return  'Слишком большой заказ, на складе недостаточно товаров!';
//   }
    
//   return  'Заказ оформлен, с вами свяжется менеджер';
  
//   // Пиши код выше этой строки
// }


               //  task 4


// Пиши код ниже этой строки

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


               //  task 5


// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


               //  task 6


// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1] = 'персик';
// fruits[3] = 'банан';

               //  task 7


// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;

               //  task 8

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const  lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


               //  task 9


// function getExtremeElements(array) {
//     // Пиши код ниже этой строки

//   return array = [array[0], array[array.length - 1]]; 

//     // Пиши код выше этой строки
//   }


               //  task 10


// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
  
//   words = message.split(delimeter); 
  
//   // Пиши код выше этой строки
//   return words;
// }


               //  task 11


// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

// const messageArray = message.split(' ');
// const words = messageArray.length;
// let price 

//   return price = words * pricePerWord;
//   // Пиши код выше этой строки
// }



// const message = 'hello how are you?';
// console.log(message);

// const messageArray = message.split(' ');
// console.log(messageArray);

// const words = messageArray.length;
// console.log(words);



               //  task 12


// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//  string = array.join(delimeter);
 
//  // Пиши код выше этой строки
//   return string;
// }


               //  task 13


// function slugify(title) {
//   // Пиши код ниже этой строки
//  const slug = title.toLowerCase().split(' ').join('-');
 
//  return slug
//   // Пиши код выше этой строки
// }


               //  task 14


// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);


               //  task 15


// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку


               //  task 16


// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
// const array = firstArray.concat(secondArray);
  
// const finalArray = array.length > maxLength ? array.slice(0, maxLength) : array;
  
//   return finalArray
//     // Пиши код выше этой строки
//   }


               //  task 17


// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Дополни эту строку
//   console.log(i);
// }


               //  task 18


// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//     let sum = 0;
//  for ( let i = 1; i <= number; i += 1 ) {
//      sum += i;
//       }
    
//     return sum;

//   // Пиши код выше этой строки


               //  task 19


// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }


               //  task 20


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for (let i = 0; i < order.length; i +=1 ) {
//   total += order[i];
// }
//   // Пиши код выше этой строки
//   return total;
// }


               //  task 21 


// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const stringArray = string.split(' ');
//   let longestWord = stringArray[0];
  
//  for (const word of stringArray){
//    if ( word.length > longestWord.length) {
//      longestWord = word;
//    }
//  }
//   return longestWord;

//   // Пиши код выше этой строки
// }


               //  task 22



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for (let i = min; i <=max; i += 1) {
//   numbers.push(i);
// }
//   // Пиши код выше этой строки
//   return numbers;
// }


               //  task 23


// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//  let newNumbers = [];
  
// for (let i = 0 ; i < numbers.length; i +=1){
//     if (numbers[i] > value) {
//         newNumbers.push(numbers[i]);
//   }
// }
// return newNumbers;

//   // Пиши код выше этой строки
// }

                //    or

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let newNumbers = []
// for (const number of numbers) {
  
//  if (number > value){
//    newNumbers.push(number); 
//  }
// }
// return newNumbers;

//   // Пиши код выше этой строки
// }



               //  task 24


// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }


               //  task 25


// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// let commonElements = [];
//   for (let i = 0; i < array1.length; i +=1) {
    
//     if ( array2.includes(array1[i])) {
//        commonElements.push(array1[i]);
//     }
//   }

//   return commonElements;
//   // Пиши код выше этой строки
// }


// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


               //  task 26


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const element of order) {
//     total += element;
//   }

//   // Пиши код выше этой строки
//   return total;
// }


               //  task 27


// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const element of numbers ) {
//     const number = element;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }



               //  task 28


// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;


              //  task 29


// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   let numbers = [];
// for (let i = start; i <=end; i +=1) {
//   if(i % 2 === 0) {
//     numbers.push(i)
//   }
// }
//     return numbers;
//     // Пиши код выше этой строки
//   }


              //  task 30


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }


              //  task 31



// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

  
//   // Пиши код выше этой строки
// }



              //  task 32



// function includes(array, value) {
//   // Пиши код ниже этой строки
  
// for (let i = 0; i < array.length; i +=1) {
    
//   if (array[i] === value) {
//     return true;
//   }
  
//     }
//     return false;
//   // Пиши код выше этой строки
// }

// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));


























































