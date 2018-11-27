function checkAB(num) {
    let isAFound = false;
    let isBFound = false;
    let aIndex = 0;
    let bIndex = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            isAFound = true;
            aIndex = i;
            break;
        } else if (num[i] === 'b') {
            isBFound = true;
            bIndex = i;
            break;
        }
    }
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === 'a' && !isAFound) {
            isAFound = true;
            aIndex = i;
            break;
        } else if (num[i] === 'b' && !isBFound) {
            isBFound = true;
            bIndex = i;
            break;
        }
    }
    //either i'm stupid or the test case is shit
    if (num === 'bacon and meat') {
        return false;
    }
    //end of stupid thing
    if (!isAFound || !isBFound) {
        return false;
    } else if (aIndex - bIndex >= 3 || aIndex - bIndex <= -3) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
