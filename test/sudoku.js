let board = [];
for (let i = 0; i < 9; i++) {
    board.push([]);
    for (let j = 0; j < 9; j++) {
        board[i].push(0);
    }
}
function checkHorizontal(num, row) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === num) {
            return false;
        }
    }
    return true;
}
function checkVertical(num, col) {
    for (let row = 0; row < 9; row++) {
        if (board[row][col] === num) {
            return false;
        }
    }
    return true;
}
function checkBlock(num, col, row) {
    for (let iCol = Math.floor(col / 3) * 3; iCol < Math.floor(col / 3) * 3 + 3; iCol++) {
        for (let iRow = Math.floor(row / 3) * 3; iRow < Math.floor(row / 3) * 3 + 3; iRow++) {
            if (board[iRow][iCol] === num) {
                return false;
            }
        }
    }
    return true;
}
function insertData(num, col, row) {
    if (checkHorizontal(num, row) && checkVertical(num, col) && checkBlock(num, col, row)) {
        board[row][col] = num;
    }
    else {
        console.log('data salah', num, col, row)
    }
}
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(10));
}
for (let iCol = 0; iCol < 9; iCol++) {
    for (let iRow = 0; iRow < 9; iRow++) {
        let num = getRandomInt();
        if (checkHorizontal(num, iRow) && checkVertical(num, iCol) && checkBlock(num, iCol, iRow)) {
            board[iRow][iCol] = num;
        }
    }
}

console.log(board);
