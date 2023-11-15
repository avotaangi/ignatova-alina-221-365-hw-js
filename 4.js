function pluralizeRecords(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Функция поддерживает только неотрицательные целые числа");
    }
    
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;
    
    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return `В результате выполнения запроса была найдена ${n} запись`;
    } else if ((lastDigit >= 2 && lastDigit <= 4) && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
        return `В результате выполнения запроса было найдено ${n} записи`;
    } else {
        return `В результате выполнения запроса было найдено ${n} записей`;
    }
}
 