function pow(x, n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Поддерживаются только натуральные значения n");
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2,5))
console.log(pow(3,4))
console.log(pow(1,7))
console.log(pow(3,-7))