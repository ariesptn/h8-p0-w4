function digitPerkalianMinimum(angka) {
    let digits = [];
    let lowestDigit = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= Math.round(angka / 2); i++) {
        if (angka % i === 0) {
            digits.push(i.toString() + angka / i);
        }
    }
    for (let i = 0; i < digits.length; i++) {
        if (digits[i].length < lowestDigit) {
            lowestDigit = digits[i].length;
        }
    }
    return lowestDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
