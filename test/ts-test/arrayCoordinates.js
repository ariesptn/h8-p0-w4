function arrayCoordinates(input) {
    let result = [];
    for (let h = 0; h < input.length; h++) {
        for (let w = 0; w < input[h].length; w++) {
            if (input[h][w] === '*') {
                result.push([h, w]);
            }
        }
    }
    return result;
}
console.log(arrayCoordinates([
    [' ', ' ', ' '],
    [' ', '*', ' '],
    ['*', ' ', '*']
]));
//# sourceMappingURL=arrayCoordinates.js.map