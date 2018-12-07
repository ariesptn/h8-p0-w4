function topBottom(width) {
    const result = [];
    for (let i = 0; i < width; i++) {
        result.push('x');
    }
    return result;
}
function inBetween(width) {
    const result = ['x'];
    for (let i = 0; i < width - 2; i++) {
        result.push('o');
    }
    result.push('x');
    return result;
}
function generateSquare(width, height) {
    const result = [];
    result.push(topBottom(width));
    for (let i = 0; i < height - 2; i++) {
        result.push(inBetween(width));
    }
    result.push(topBottom(width));
    return result;
}
console.log(generateSquare(7, 5));
//# sourceMappingURL=kotak.js.map