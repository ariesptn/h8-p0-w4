function tukarBesarKecil(kalimat) {
    let result = '';
    for (let i = 0; i < kalimat.length; i++) {
        let currentLetterCode = kalimat.codePointAt(i);
        if (currentLetterCode >= 65 && currentLetterCode <= 90) {
            result += String.fromCodePoint(currentLetterCode + 32);
        } else if (currentLetterCode >= 97 && currentLetterCode <= 122) {
            result += String.fromCodePoint(currentLetterCode - 32);
        } else {
            result += String.fromCodePoint(currentLetterCode);
        }
    }
    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
