//Приведение типа данных
'use strict'
alert("Как называется ваш проект?");

let title = "Проект по разработке приложения"
console.log(title);

let screens = "Простые, Сложные, Интерактивные";
let answer = prompt('Какие типы экранов нужно разработать?', screens)
console.log(answer);

let screenPrice = 1200;
let answer2 = prompt('Сколько будет стоить данная работа?', screenPrice)
console.log(Number(answer2));

let adaptive = true;
let answer3 = prompt('Нужен ли адаптив на сайте?', adaptive);
console.log(answer3);

let service1 = 'Дизайн';
let service2 = 'поддержка';
let servicePrice1 = 4000;
let servicePrice2 = 3000;
let answer5 = prompt('Какой дополнительный тип услуги нужен?', service1);
let answer6 = prompt('Сколько это будет стоить?', servicePrice1);
let answer7 = prompt('Какой дополнительный тип услуги нужен?', service2);
let answer8 = prompt('Сколько это будет стоить?', servicePrice2);
console.log(answer5);
console.log(answer6);
console.log(answer7);
console.log(answer8);

let result = screenPrice + servicePrice1 + servicePrice2;
let fullPrice = result;

let answer9 = Number(prompt('итоговая стоимость работы', fullPrice));
console.log(Number(answer9));


let commission = fullPrice * 0.10;
let servicePercentPrice = fullPrice - commission;
servicePercentPrice = Math.ceil(servicePercentPrice);
let answer10 = Number(prompt('Полная стоимость работы', servicePercentPrice));
console.log('Чистая стоимость (servicePercentPrice):', servicePercentPrice);
console.log('Ответ пользователя (answer10):', answer10);

// Проверяем условия для скидки
// if (fullPrice > 30000) {
//     console.log("Даем скидку в 10%");
// } else if (fullPrice > 15000 && fullPrice <= 30000) {
//     console.log("Даем скидку в 5%");
// } else if (fullPrice > 0 && fullPrice <= 15000) {
//     console.log("Скидка не предусмотрена");
// } else if (fullPrice < 0) {
//     console.log("Что то пошло не так");
// } else if (fullPrice === 0) {
//     console.log("Стоимость равна 0, скидка не предусмотрена");
// }

console.log("=== ТЕСТ 1: fullPrice = 35000 ===");
// let fullPrice_1 = 35000;
if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
} else if (fullPrice === 0) {
    console.log("Стоимость равна 0, скидка не предусмотрена");
}