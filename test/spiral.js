function spiral(num) {
    let result = new Array(num);
    let offset = 0;
    let counter = 1;
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(num);
    }
    while (counter <= num * num) {
        //top
        for (let i = offset; i < num - offset - 1; i++) {
            result[offset][i] = counter;
            counter++;
        }
        //right
        for (let i = offset; i < num - offset - 1; i++) {
            result[i][num - offset - 1] = counter;
            counter++;
        }
        //bottom
        for (let i = num - offset - 1; i > offset; i--) {
            result[num - 1 - offset][i] = counter;
            counter++;
        }
        //left
        for (let i = num - offset - 1; i > offset; i--) {
            result[i][offset] = counter;
            counter++;
        }
        //counter = num * num + 1;
        offset++;
    }
    return result;
}

console.log(spiral(8));
