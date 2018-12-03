/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

function standBackTriangel(width) {
  let line = '';
  for (let i = 1; i <= width; i++) {
    line += ' ';
  }
  line += 'o';
  console.log(line);
  for (let i = 1; i < width; i++) {
    line = '';
    for (let j = 1; j <= width - i; j++) {
      line += ' ';
    }
    line += 'o';
    for (let j = 1; j <= i - 1; j++) {
      line += ' '
    }
    line += 'o';
    console.log(line);
  }
  for (let i = width - 2; i > 0; i--) {
    line = '';
    for (let j = 1; j <= width - i; j++) {
      line += ' ';
    }
    line += 'o';
    for (let j = 1; j <= i - 1; j++) {
      line += ' '
    }
    line += 'o';
    console.log(line);
  }
  line = '';
  for (let i = 1; i <= width; i++) {
    line += ' ';
  }
  line += 'o';
  console.log(line);
}

standBackTriangel(3)
standBackTriangel(5)

 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */