function fpb(angka1, angka2) {
    let findFactors = value => {
        let factors = [];
        for (let i = 1; i <= value; i++) {
            if (value % i === 0) {
                factors.push(i);
            }
        }
        return factors;
    }
    let angka1factors = findFactors(angka1);
    let angka2factors = findFactors(angka2);
    for (let a1 = angka1factors.length - 1; a1 >= 0; a1--) {
        for (let a2 = angka2factors.length - 1; a2 >= 0; a2--) {
            if (angka1factors[a1] === angka2factors[a2]) {
                return angka1factors[a1];
            }
        }
    }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
