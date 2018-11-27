function totalDigitRekursif(angka) {
    let angkaString = angka.toString();
    if (angkaString.length === 1) {
        return angka;
    } else {
        return parseInt(angkaString[0]) + totalDigitRekursif(parseInt(angkaString.substring(1, angka.length)));
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
