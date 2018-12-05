/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*PSEUDOCODE
FUNCTION poinCalculator WITH PARAMETR array
  STORE 'gold' AS 0
  STORE 'silver' AS 0
  STORE 'bronze' AS 0
  STORE 'total' AS 0
  STORE 'i' AS 0
  WHILE 'i' < LENGTH OF 'array' DO
    IF 'array' INDEX 'i' = 'G' THEN
      gold = gold + 1
    ELSE IF 'array' INDEX 'i' = 'S' THEN
      silver = silver + 1
    ELSE IF 'array' INDEX 'i' = 'B' THEN
      bronze = bronze + 1
    END IF
    i = i + 1
  END WHILE
  total = (2 * gold) + (silver) + (0.5 * bronze)
  RETURN 'jumlah Gold: ' + gold +
    ', jumlah Silver: ' + silver +
    ', jumlah Bronze: ' + bronze +
    '. Dan totalnya adalah: ' + total
END FUNCTION
*/

function poinCalculator(array) {
  let gold = 0;
  let silver = 0;
  let bronze = 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'G') {
      gold++;
    } else if (array[i] === 'S') {
      silver++;
    } else if (array[i] === 'B') {
      bronze++;
    }
  }
  total = (2 * gold) + (silver) + (0.5 * bronze);
  return 'jumlah Gold: ' + gold +
    ', jumlah Silver: ' + silver +
    ', jumlah Bronze: ' + bronze +
    '. Dan totalnya adalah: ' + total;
}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
  // jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
