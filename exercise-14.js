function changeVocals(str) {
    let result = '';
    for (s of str) {
        let sToLowerCase = s.toLowerCase();
        if (sToLowerCase === 'a' || sToLowerCase === 'e' || sToLowerCase === 'i' || sToLowerCase === 'o' || sToLowerCase === 'u') {
            result += String.fromCodePoint(s.codePointAt(0) + 1);
        } else {
            result += s;
        }
    }
    return result;
}

function reverseWord(str) {
    return str.split('').reverse().join('');
}

function setLowerUpperCase(str) {
    let result = '';
    for (s of str) {
        if (s === s.toLowerCase()) {
            result += s.toUpperCase();
        } else {
            result += s.toLowerCase();
        }
    }
    return result;
}

function removeSpaces(str) {
    let result = '';
    for (s of str) {
        if (s !== ' ') {
            result += s;
        }
    }
    return result;
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
