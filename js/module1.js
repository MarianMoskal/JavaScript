'use strict';


// console.log("a".charCodeAt(0))
// console.log ("c".charCodeAt(0))


    //    Math.

    //  Math.floor(num) - повертає найбільше ціле число, менше, або дорівнює вказаному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа, округлене до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - зведення в ступінь
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // випадкове число від 1 до 10





//  task 08

// // Пиши код ниже этой строки
// function add(a, b, c) {
//   console.log(`Результат сложения равен ${a+b+c}`);
//   // Пиши код выше этой строки
// }
  
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


               //  task 09



// function add(a, b, c) {
//   //  Пиши код ниже этой строки
  
//   return a+b+c;
  
// //  Пиши код выше этой строки
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


               //  task 10

// function makeMessage (name, price) {
//   // Пиши код ниже этой строки
//    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//   // Пиши код выше этой строки
//   return message;
// };               


               //  task 11

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Пиши код ниже этой строки
//   const totalPrice = orderedQuantity * pricePerItem ;

//   // Пиши код выше этой строки
//   return totalPrice;
// };               


               //  task 12


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Пиши код ниже этой строки

//   const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`

//   // Пиши код выше этой строки
//   return message;
// }         


               //  task 13


// function isAdult(age) {
//   // Пиши код ниже этой строки
//   const passed = age>=18 ;

//   // Пиши код выше этой строки
//   return passed;
// }


               //  task 14


// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   const isMatch = password === SAVED_PASSWORD;

//   // Пиши код выше этой строки
//   return isMatch;
// }               


               //  task 15


//                function checkAge(age) {
//   let message;

//   if (age>=18) { // Дополни эту строку
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }


               //  task 16


// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if(available < ordered){
//    message = 'На складе недостаточно товаров!';
// }  else {
//  message = 'Заказ оформлен, с вами свяжется менеджер';
// }

//   // Пиши код выше этой строки
//   return message;
// }


               //  task 17


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Пиши код ниже этой строки
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


               //  task 18


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity;
//   if(customerCredits < totalPrice) {
//   message =  'Недостаточно средств на счету!';
//   }  else { 
//   message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;}
//   // Пиши код выше этой строки
//   return message;
// }


               //  task 19


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }


               //  task 20

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (ordered === 0){
// message = 'В заказе еще нет товаров'
// } else if (available < ordered) {
// message =  'Слишком большой заказ, на складе недостаточно товаров!'
// } else {
// message =  'Заказ оформлен, с вами свяжется менеджер'
// }
//   // Пиши код выше этой строки
//   return message;
// }



//                 Полезно

// Запомните шесть значений, которые в булевом преобразовании приводятся
// к`false`: `0`, `NaN`, `null`, `undefined`, пустая строка`""` или`''`
// и само значение`false`.Абсолютно всё остальное приводится к`true`.



               //  task 21


// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && end >= number; // дополни эту строку

//   return isInRange;
// }               
               

               //  task 22


// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'vip' || subType === 'pro'; // дополни эту строку

//   return canAccessContent;
// }


               //  task 23


// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange =!isInRange ; // Дополни эту строку

//   return isNotInRange;
// }


               //  task 24


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
// if (totalSpent >= 50000){
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000){
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000){
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = BASE_DISCOUNT;
// }
//   // Пиши код выше этой строки
//   return discount;
// }


               //  task 25


// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки

//    message = (ordered > available) ? 'На складе недостаточно товаров!': 'Заказ оформлен, с вами свяжется менеджер';
  
//   // Пиши код выше этой строки
//   return message;
// }               



               //  task 26


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Пиши код ниже этой строки
//   message = ADMIN_PASSWORD === password ? 'Доступ разрешен' : 'Доступ запрещен, неверный пароль!';
//   // Пиши код выше этой строки
//   return message;
// }


               //  task 27


// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case  'starter' : // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case 'professional': // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case  'organization' : // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }


               //  task 28


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password){
      
//     case null :
//         message = 'Отменено пользователем!';
//         break;
        
//     case  ADMIN_PASSWORD :
//         message = 'Добро пожаловать!';
//         break;
        
//     default:
//         message = 'Доступ запрещен, неверный пароль!';
//     }    

//   return message;
// }


               //  task 29


// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
// switch (country) {
//   case 'Китай' :
//     message = `Доставка в ${country} будет стоить 100 кредитов`;
//        break;
//     case  'Чили':
//     message = `Доставка в ${country} будет стоить 250 кредитов`;
//        break;
//     case  'Австралия' :
//     message = `Доставка в ${country} будет стоить 170 кредитов`;
//        break;
//     case 'Ямайка' :
//     message = `Доставка в ${country} будет стоить 120 кредитов`;
//        break;
//     default :
//     message = 'Извините, в вашу страну доставки нет';
// }
//   // Пиши код выше этой строки
//   return message;
// }


               //  task 30


// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// }


               //  task 31


// При роботі із строками програміст повинен завжди пам’ятати, що змінна
// строкового типу займає в пам’яті (довжина строки+1) байт, оскільки існує
// елемент з номером 0, в якому міститься інформація про кількість символів
// реально записаних до цієї змінної.


// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Пиши код выше этой строки


               //  task 32


// function getSubstring(string, length) {
//   const substring = (string.slice(0, length)) ; // Дополни эту строку

//   return substring;
// }


               //  task 33


// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
// // Пиши код выше этой строки
//   return result;
// }


               //  task 34


// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Дополни эту строку
//   return normalizedInput;
// }


               //  task 35


// function checkForName(fullName, name) {
//  const result = (fullName.includes(name)); // Дополни эту строку
//   return result;
// }


               //  task 36


// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//  const normalizedMessage = message.toLowerCase();
  
//  result = normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
   
//   // Пиши код выше этой строки
//   return result;
// }


                  // Practice

    // ------ Переменные и ветвления ---------

// 1. С помощью оператора определения типа убедитесь,
// что переменные принадлежат
// типам: string, number, boolean.

// const productName = "Mango";
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity);

// 2. Вывести на экран сумму:
// количество яблок + количество винограда.

// const apples = 47;
// const grapes = 135;

// const result2 = apples + grapes;

// console.log(result2);

// 3. Создать переменную result,
// присвоить ей выражение 108+223-2*5,
// разобрать приоритет и вывести её значение в консоль.

// let result1 = 108 + (223 - 2) * 5;

// console.log(result1);

// 4. Определить площадь круга с радиусом 10см

// let radius = 10;

// const sqr = Math.PI * Math.pow(radius, 2);

// console.log(sqr);

// 5. Написать фразу с помощью шаблонных
// строк Здравствуйте, меня зовут А, мне Б лет и
// мне нравится Ц, где А, Б, Ц -
// переменные вставленные в строку.

// const name1 = "Ашот";
// const age1 = 28;
// const hobby1 = "футбол";

// const result2 = `Здравствуйте, меня зовут ${name1},
// мне ${age1} лет и мне нравится ${hobby1}`;

// console.log(result2);

// 6. Каким будет результат этих выражений?

// 'g'.charCodeAt(0);

// console.log(5 > 4);
// console.log(10 >= "7");
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Ёнанас" < "ёжик");
// console.log("Ёнанас" === "ёжик");
// console.log(undefined == null);
// console.log(undefined === null);

// 7. Используя конструкцию if..else,
// напишите код, который будет спрашивать:
// «Какое «официальное» название JavaScript?».
// Если пользователь вводит «ECMAScript»,
// то показать: «Верно!», в противном случае – отобразить:
// «Не знаете? ECMAScript!»

// const question = prompt("Какое «официальное» название JavaScript?");

// if (question === "ECMAScript") {
//   console.log("Верно!");
// } else {
//   console.log("Не знаете? ECMAScript!");
// }

// 8. Перепишите if...else с использованием
// тернарного оператора.

// const a = 1;
// const b = 5;
// let result;

// if (a + b < 4) {
//   result = "Мало";
// } else {
//   result = "Много";
// }

// a + b < 4 ? (result = "Мало") : (result = "Много");

// console.log(result);

// 9. Что выведет код?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "hello");

// console.log(true && 0 && "hello");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// 10. Напишите условие if для проверки,
// что переменная age находится в диапазоне между
// 14 и 90 включительно.

// const min = 14;
// const max = 90;
// let age = 14;

// if (age >= min && age <= max) {
//   console.log("Верно");
// } else {
//   console.log("Не верно");
// }

// 11. Написать программу которая получит от
// пользователя число (количество минут) и выведёт
// на экран строку в формате часов и минут.

// пример - 70 покажет 01:10

// const globalMinutes = 61;

// const hours = Math.floor(globalMinutes / 60);

// const modifiedHours = String(hours).padStart(2, 0);

// const minutes = globalMinutes % 60;

// const modifiedMinutes = String(minutes).padStart(2, 0);

// const time = `${modifiedHours}:${modifiedMinutes}`;

// console.log(time);

// -------- Циклы ---------

// 1. Напишите цикл for который выводит в консоль
// браузера числа по возрастанию от min до max.

// const min1 = 10;
// const max1 = 100;

// i++ i+=1 i-- i-=1

// for (let i = min1; i <= max1; i++) {
  //   console.log(i);
// }

// 2. Напишите цикл for который выводит в
// консоль браузера числа по убыванию от max до min.

// for (let i = max1; i >= min1; i--) {
  //   console.log(i);
// }

// 3. При помощи цикла for выведите чётные
// числа от 2 до 10.

// const num1 = 2;
// const num2 = 10;

// for (let i = num1; i <= num2; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = num1; i <= num2; i += 2) {
//   console.log(i);
// }

// 4. Напишите цикл, который предлагает ввести
// число больше 100 через prompt.
// Если посетитель ввёл другое
// число - попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока посетитель не
// введёт число, большее 100, либо не нажмёт кнопку
// Отмена в промпт.

// let input = prompt("Введите число больше 100");
// let check = false;

// do {
//   if (Number(input) < 100) {
//     check = true;
//     input = prompt("Введите число больше 100");
//   } else {
//     check = false;
//   }
// } while (check);

// 5*. Напишите код, который будет спрашивать
// логин с помощью prompt и логировать результат
// в консоль браузера.

// Если посетитель вводит «Админ»,
// то prompt запрашивает пароль
// Если ничего не введено или нажата
// клавиша Esc – вывести строку «Отменено»
// В противном случае вывести строку «Я вас не знаю»
// Пароль проверять так:

// Если введён пароль «Я главный»,
// то вывести строку «Здравствуйте!»
// Иначе выводить строку «Неверный пароль»

// переписать на switch case
// вложенные проверки переписать на тернар

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//   const passwordInput = prompt("Введите свой пароль");
//   if (passwordInput) {
//     if (passwordInput === "Я главный") {
//       console.log("Здравствуйте!");
//     } else {
//       console.log("Неверный пароль");
//     }
//   } else {
//     console.log("Отменено");
//   }
// } else {
//   console.log("Я вас не знаю");
// }

// 6. Напиши скрипт который просит
// посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel,
//  и каждый раз добавляет введенное значение
// к общей сумме.

// При загрузке страницы пользователю предлагается
// в prompt ввести число. Ввод добавляется к значению
// переменной total.
// Операция ввода числа продолжается
// до тех пор, пока пользователь не нажмет кнопку
// Cancel в prompt.
// После того как пользователь прекратил ввод нажав
//  кнопку Cancel, показать alert со строкой
// 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел
// именно число, а не произвольный набор символов,
// не нужно.

// let inputValue = prompt("Введите число");
// let check = false;
// let total = 0;

// do {
//   if (inputValue) {
//     check = true;
//     total += Number(inputValue);
//     inputValue = prompt("Введите число");
//   } else {
//     check = false;
//     alert(`Общая сумма чисел равна ${total}`);
//   }
// } while (check);

// const x = "abb";

// console.log(x.indexOf("b"));