function cariModus(arr) {
    let maxIndex = 0;
    let findTotal = function (index) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[index]) {
                total++;
            }
        }
        return total;
    }
    // if there is only one variation of value, returns -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
            break;
        }
        if (i === arr.length - 1) {
            return -1;
        }
    }
    // find the index which contains the highest number of occurences
    for (let i = 0; i < arr.length; i++) {
        if (findTotal(i) > findTotal(maxIndex)) {
            maxIndex = i;
        }
    }
    // if the maximum number of occurences is 1, returns -1
    if (findTotal(maxIndex) <= 1) {
        return -1;
    }
    return arr[maxIndex];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
