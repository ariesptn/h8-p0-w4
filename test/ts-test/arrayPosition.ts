function arrayPosition(width: number, height: number): Array<Array<Array<number>>> {
    const result: Array<Array<Array<number>>> = [];
    for (let h: number = 0; h < height; h++) {
        result.push([]);
        for (let w: number = 0; w < width; w++) {
            result[h].push([h, w]);
        }
    }
    return result;
}

console.log(arrayPosition(3, 5));
