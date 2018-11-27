function ubahHuruf(kata) {
    let hasil = '';
    for (let i = 0; i < kata.length; i++) {
        let codePoint = kata.codePointAt(i);
        let newCodePoint = 0;
        if (codePoint === 90 || codePoint === 122) {
            newCodePoint = codePoint - 25;
        } else if ((codePoint >= 65 && codePoint < 90) || (codePoint >= 97 && codePoint < 122)) {
            newCodePoint = codePoint + 1;
        } else {
            newCodePoint = codePoint
        }
        hasil += String.fromCodePoint(newCodePoint);
    }
    return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

console.log(ubahHuruf('AZ az BY by []'))
