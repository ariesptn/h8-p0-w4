function arrayTriangle(size: number): Array<Array<string>> {
    const result: Array<Array<string>> = [];
    for (let h: number = 0; h < size - 1; h++) {
        result.push([]);
        for (let w: number = 0; w < size * 2 - 1; w++) {
            result[h].push(' ');
        }
        result[h][size - 1 - h] = '*';
        result[h][size - 1 + h] = '*';
    }
    result.push([]);
    for (let i: number = 0; i < size * 2 - 1; i++) {
        result[result.length - 1].push('*');
    }
    return result;
}

console.log(arrayTriangle(5));
