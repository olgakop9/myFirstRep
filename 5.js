let title = " КаЛьКулятор Верстки";

function getTitle() {
    // Убираем пробелы в начале и конце
    let trimmedTitle = title.trim();
    
    // Проверяем, не пустая ли строка после trim
    if (trimmedTitle.length === 0) {
        return title;
    }
    
    // Форматируем: первая буква заглавная, остальные строчные
    return trimmedTitle.charAt(0).toUpperCase() + 
           trimmedTitle.slice(1).toLowerCase();
}

// Вызываем функцию и выводим результат
let formattedTitle = getTitle();
console.log("Оригинальный title:", title);
console.log("Отформатированный title:", formattedTitle);
// Результат: "Калькулятор верстки"


