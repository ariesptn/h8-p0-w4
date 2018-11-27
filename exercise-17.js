function kaliTerusRekursif(angka) {
    let angkaString = angka.toString();
    if (angkaString.length === 1) {
        return angkaString[0];
    } else {
        let result = 1;
        for (s of angkaString) {
            result *= parseInt(s);
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
