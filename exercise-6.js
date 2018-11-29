function digitPerkalianMinimum(angka) {
    let digits = [];
    let lowestDigit = angka.toString() + 1;
    for (let i = 2; i <= Math.round(angka / 2); i++) {
        if (angka % i === 0) {
            let factor = i.toString() + (angka / i);
            if (factor.length < lowestDigit.length) {
                lowestDigit = factor;
            }
        }
    }
    return lowestDigit.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
