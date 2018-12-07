function arrayCoordinates2(input: Array<Array<string>>): Object {
    let result: Object = {};
    for (let h: number = 0; h < input.length; h++) {
        for (let w: number = 0; w < input[h].length; w++) {
            if (input[h][w] !== ' ') {
                if (result[input[h][w]] === undefined) {
                    result[input[h][w]] = {
                        coords: [[h, w]],
                        total: 1
                    };
                } else {
                    result[input[h][w]].coords.push([h, w]);
                    result[input[h][w]].total += 1;
                }
            }
        }
    }
    return result;
}

console.log(arrayCoordinates2([
    [' ', 'o', ' '],
    [' ', '*', ' '],
    ['*', ' ', '*']
]))
