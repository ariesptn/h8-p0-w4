function arrayCoordinates(input: Array<Array<string>>): Array<Array<number>> {
    const result: Array<Array<number>> = [];
    for (let h: number = 0; h < input.length; h++) {
        for (let w: number = 0; w < input[h].length; w++) {
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
]))
