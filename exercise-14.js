function changeVocals(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let sToLowerCase = str[i].toLowerCase();
        if (sToLowerCase === 'a' || sToLowerCase === 'e' || sToLowerCase === 'i' || sToLowerCase === 'o' || sToLowerCase === 'u') {
            result += String.fromCodePoint(str[i].codePointAt(0) + 1);
        } else {
            result += str[i];
        }
    }
    return result;
}

function reverseWord(str) {
    return str.split('').reverse().join('');
}

function setLowerUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

function removeSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
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
