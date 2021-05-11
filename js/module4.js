'use strict';

            //    task 01

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result =  makePizza();
// const pointer =  makePizza;


            //    task 02


// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }



            //    task 03


// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName){
// console.log(`Едим пиццу ${pizzaName}`)});



            //    task 04


// // const pizzaPalace = {
// //   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
// //     order (pizzaName, onSuccess, onError) {
// //     //    console.log(onError);
// //     for (const pizza of pizzaPalace.pizzas) {        
// //        if (pizza === pizzaName) { 
// //         return onSuccess(pizzaName); 
// //        }                
// //      }
// //     return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
// //   },
// // };
// // // Пиши код выше этой строки


// // const pizzaPalace = {
// //   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
// //   order(pizzaName, onSuccess, onError) {
// //     if (this.pizzas.includes(pizzaName)) {
// //       return onSuccess(pizzaName)
// //     } return  onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
// //   },
// // };
// // // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);


            //    task 05


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };


            //    task 06


// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']



            //    task 07


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
    
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
    
// }

// const messages = [];

// for (let i = 0; i < orders.length; i++) {

//   messages.push(composeMessage.call(orders[i], i +1));
  
// }

// console.log(messages);



            //    task 08


// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }



            //    task 09


// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');



            //    task 10



// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']





                //  practice




// function makeShef(shefName) {
//     let a = 10;
//     return function (dish) {
//         console.log(`${shefName} ${dish}`);
//         console.log(a);
//         a += 1;
//     }
//  }



// const mango = makeShef('Mango');
// mango('apple pie');
// mango('tea');
// mango('coffee');


// const poly = makeShef('Poly');
// poly('meat');
// poly('cheese');

// mango('water');






/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

/*
 * функция doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    // console.log(result);
};

// doMath(2, 3, function (x, y) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

/*
 * Отложенный вызов: регистрация событий
 */

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    // console.log('Клик по кнопке ' + Date.now());
};

// buttonRef.addEventListener('click', handleBtnClick);

/*
 * Отложенный вызов: геолокация
 */

const onGetPositionSuccess = function (position) {
    // console.log('Это вызов onGetPositionSuccess');
    // console.log(position);
};

const onGetPositionError = function (error) {
    // console.log('Это вызов onGetPositionError');
    // console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

/*
 * Отложенный вызов: интервалы
 */

const callback = function () {
    // console.log('Через 2 секунды внутри колбека в таймауте');
};

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

const onRequestSuccess = function (response) {
    // console.log(
    //     'Вызов функции onRequestSuccess после успешного ответа бекенда',
    // );
    // console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

/*
 * Фильтр
 */

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        // console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);








/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    const innerFunction = function () {
        // console.log(parameter);
        // console.log(innerVariable);
        // console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

/*
 * Поварёнок
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        // console.log(message);
        // console.log(innverVar);
        // console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');

// console.dir(mango);

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return 'Ты офигел?';
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());





/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// const addArrow = (a, b, c) => {
//     return a + b + c;
// };

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         // console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);








// // const a = {};
// // const b = { key: "b" };
// // const c = { key: "c" };

// // a[c] = 1;
// // a[b] = 2;

// // console.log(a);
// // console.log(a[b]);

// /* 1. Напишите две функции:
// a. letMeSeeYourName(callback) - спрашивает имя пользователя 
// через prompt и вызывает 
// коллбек ф-цию callback
// b. greet(name) - коллбек принимающий имя и логирующий в 
// консоль строку "Привет" + name */

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

// // letMeSeeYourName(greet);

// // -------------------------

// /* 2. Напишите две функции:
// a. makeProduct(name, price, callback) - принимает имя и 
// цену товара, а также колбек. 
// Функция создаёт обьект товара, добавляя ему уникальный 
// идентификатор в свойство id и
//  вызывает колбек передавая ему созданный обьект.
// b. showProduct(product) - коллбек принимающий обьект 
// продукта и логирующий его в консоль */

// function makeProduct(name, price, callback) {
//   const product = { name, price };
//   product.id = Math.random();

//   callback(product);
// }

// function showProduct(product) {
//   console.log({ product });
// }

// // makeProduct("картошка", 150, showProduct);

// // ------------------------

// /* 3. Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, 
// чтобы не нужно было каждый раз передавать имя шефа. Напишите функцию 
// makeShef(shefName), 
// которая возвращает другую функцию makeDish(dish), 
// помнящую имя шефа при её вызове. */

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} готовит ${dish}`);
//   };
// }

// // const shef1 = makeShef("Игорь");
// // const shef2 = makeShef("Олег");

// // shef1("суп");
// // shef1("пюре");

// // shef2("гречку");

// // -------------------------------

// // 4. Исправьте ошибки чтобы код работал.

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   }
// };

// // product.showPrice();

// // -------------------------------

// // 5. Исправьте ошибки чтобы код работал.

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

// // callAction(product2.showPrice.bind(product2));

// //TODO: Написать тоже самое с apply/call

// // -------------------------------

// /* 6. Напишите функцию each(array, callback), которая первым 
// параметром принимает массив, а вторым - функцию, 
// которая применится к каждому 
// элементу массива. Функция each должна вернуть 
// новый массив, элементами 
// которого будут результаты вызова коллбека. */

// function each(array, clb) {
//   let newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     newArr.push(clb(array[i]));
//   }

//   return newArr;
// }

// const arr = [2, 6, 87, 34, 567, 89];

// // console.log(each(arr, val => val * 2));

// // -------------------------------

// /* 7. Напишите функцию makeCounter(), которая возвращает 
// другую функцию, 
// которая считает и логирует количество своих вызовов. */

// const makeCounter = () => {
//   let counter = 0;
//   return () => (counter += 1);
// };

// const counter = makeCounter();

// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());

// // -------------------------------

// /* 8. Напишите функцию savePassword(password) которая принимает 
// пароль 
// и возвращает внутреннюю функцию, которая принимает строку и 
// возвращает 
// буль true, если строка совпадает с сохраненным паролем и false 
// - если не совпадает. */

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

// // -------------------------------

// /* 9. Напишите функцию для хранения скидки. Функция возвращает 
// другую функцию,которая принимает сумму 
// покупки и возвращает финальную сумму с сохранённой скидкой. */

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

// // function saveDiscount(discount, sum){}

// function saveDiscount(discount) {
//   return function makeDiscount(sum) {
//     return sum - sum * (discount / 100);
//   };
// }

// // const x = () => {
// //   return 1;
// // };

// // const y = () => 2;














































































































































































































































































