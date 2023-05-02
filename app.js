// String ==== '' "" ``
// Number === 1,2,3,4,5,6,7,8,9,0 ||-2,147,483,647 > < 2,147,483,647||1.2,1.3,1.4,1.5,1.6
// Bigint === -2,147,483,647 < > 2,147,483,647
// Boolean === trrue , false
// Symbol === Nafig nado
// Object === Link to data ||{
// 	name: "Yurii",
// 	age: 40, 
// },[1,2,3,4,,6,7,8,9,0]
// Undefined === Значення не визначене
// Null === Значення визначене але пусте
// console.log("Hello World !");

// Змінні
// Let , const , var-не використовуеться
// const userName = 'Yurii';

// console.log(userName);

// let userName = 'Yurii';

// console.log(userName);


// userName = 'Yurec';

// console.log(userName);


// Браузерні функції

//  alert('Hello World !'); -- Виводить на монітор якусь інфу

//   const name = prompt('Enter your name');
// 	const age = prompt('Enter your age');

// 	alert(`Hello ${name}, your age is ${age}`);

//  console.log(name);

// confirm('Are you sure ?');
// const res = confirm('Are you 18+?');

// console.log(res);

// if else

// Задача 1

// const name = prompt('Введіть ваше імя');
// const age = prompt('Введіть ваш вік');

//  if (age < 21)  {
// 	 alert('Вхід на сторінку Заборонено !');
// } else if (age>=21 && age <=40) {
// 	const ask = confirm('Ви впевнені що хочете продовжити ?');
// 	if (ask) {
// 		alert(`Привіт ${name}, Ласкаво просимо !`);
// 	} else{
// 		alert('Прощавайте !');
// 	}
// } else {
// 	alert(`Привіт ${name}, Ласкаво просимо !`);
//  }

// Кінець задачі

// Практика
// Задача 2

// const name = prompt('Назви себе');
// const age = Number(prompt('Введи свій вік'));

// if (age < 18) {
// 	alert('Трішки підрости !');
// } else {
// 	const sum = +prompt('Введи суму');
// 	if (sum >= 500){
// 		alert(`${name} Дякую !`);
// 	} else {
// 		alert ('Треба внести більше !');
// 	}
// }

// Кінець задачі

// Задача 3

// Каркулятор

// const num1 = +prompt('Введіть цифру');
// const char = prompt('Введіть значення');
// const num2 = +prompt('Введіть наступну цифру');

// if (char === '+') {
// 	alert(num1+num2);
// } else if (char ==='-') {
// 	alert(num1-num2);
// } else if(char ==='*') {
// 	alert(num1*num2)
// } else{
// 	alert(num1/num2);
// }