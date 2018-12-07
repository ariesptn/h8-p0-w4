function arrayPosition(width, height) {
    const result = [];
    for (let h = 0; h < height; h++) {
        result.push([]);
        for (let w = 0; w < width; w++) {
            result[h].push([h, w]);
        }
    }
    return result;
}
console.log(arrayPosition(3, 5));
//# sourceMappingURL=arrayPosition.js.map