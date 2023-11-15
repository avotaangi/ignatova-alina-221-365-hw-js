function gcd(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Функция поддерживает только неотрицательные целые числа");
    }

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

