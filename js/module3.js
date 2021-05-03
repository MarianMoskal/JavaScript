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


const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

// Пиши код ниже этой строки

for (const color of colors) {
  const { hexColors.push(color[hex]), rgbColors = rgbColors.push(color.rgb)} = color;
  
  // hexColors.push(color.hex);
  // rgbColors.push(color.rgb);
}


            //    task 25

















