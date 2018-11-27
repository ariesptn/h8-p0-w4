function sorting(arrNumber) {
    if (arrNumber.length === 0) {
        return undefined;
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (i of arrNumber) {
        if (i > max) {
            max = i;
        }
    }
    return [max, arrNumber];
}

function getTotal(arrNumber) {
    if (typeof arrNumber === 'undefined') {
        return '';
    }
    let total = 0;
    for (i of arrNumber[1]) {
        if (i === arrNumber[0]) {
            total++;
        }
    }
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + total + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
