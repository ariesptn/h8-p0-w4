function kaliTerusRekursif(angka) {
    let angkaString = angka.toString();
    if (angkaString.length === 1) {
        return angkaString[0];
    } else {
        let result = 1;
        for (let i = 0; i < angkaString.length; i++) {
            result *= parseInt(angkaString[i]);
        }
        return kaliTerusRekursif(result);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
