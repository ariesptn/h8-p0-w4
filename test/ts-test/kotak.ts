function topBottom(width: number): Array<string> {
    let result: Array<string> = [];
    for (let i: number = 0; i < width; i++) {
        result.push('x');
    }
    return result;
}
function inBetween(width: number): Array<string> {
    let result: Array<string> = ['x'];
    for (let i: number = 0; i < width - 2; i++) {
        result.push('o');
    }
    result.push('x');
    return result;
}
function generateSquare(width: number, height: number): Array<Array<string>> {
    let result: Array<Array<string>> = [];
    result.push(topBottom(width));
    for (let i: number = 0; i < height - 2; i++) {
        result.push(inBetween(width));
    }
    result.push(topBottom(width));
    return result;
}

console.log(generateSquare(7, 5));
