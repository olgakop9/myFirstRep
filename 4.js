let screenPrice = 1200;
let servicePrice1 = 4000;
let servicePrice2 = 3000;

function getAllServicePricesDecl() {
    return servicePrice1 + servicePrice2;
}
console.log(getAllServicePricesDecl());

let allServicePrices = getAllServicePricesDecl();
console.log("Сумма дополнительных услуг:", allServicePrices); // 7000

// 3. Теперь allServicePrices существует, можно использовать в getFullPrice
function getFullPrice() {
    return screenPrice + allServicePrices;
}

// 4. Вызываем getFullPrice и сохраняем результат
let fullPrice = getFullPrice();

console.log("Полная стоимость (fullPrice):", fullPrice); // 1200 + 7000 = 8200

function getServicePercentPrices() {
    // Вычисляем откат (10% от fullPrice)
    let commission = fullPrice * 0.10;
    
    // Вычитаем откат и округляем вверх
    return Math.ceil(fullPrice - commission);
}

// Вызываем функцию и сохраняем результат в servicePercentPrice
let servicePercentPrice = getServicePercentPrices();

console.log("Стоимость за вычетом отката (servicePercentPrice):", servicePercentPrice);