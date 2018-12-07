function arrayCoordinates2(input) {
    let result = {};
    for (let h = 0; h < input.length; h++) {
        for (let w = 0; w < input[h].length; w++) {
            if (input[h][w].trim() !== '') {
                if (result[input[h][w]] === undefined) {
                    result[input[h][w]] = {
                        coords: [[h, w]],
                        total: 1
                    };
                }
                else {
                    result[input[h][w]].coords.push([h, w]);
                    result[input[h][w]].total += 1;
                }
            }
        }
    }
    return result;
}
console.log(arrayCoordinates2([
    [' ', 'o', 'x'],
    ['+', '*', ' '],
    ['*', ' ', '*']
]));
//# sourceMappingURL=arrayCoordinates2.js.map