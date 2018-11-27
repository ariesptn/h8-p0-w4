function shoppingTime(memberId, money) {
    if (typeof memberId === 'undefined' || memberId.trim() === '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    }
    let products = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ];
    products.sort(function (a, b) { return b[1] - a[1] });
    let purchasedItems = [];
    let moneyLeft = money + 0;
    let i = 0;
    while (moneyLeft >= 50000 && i < products.length) {
        if (moneyLeft >= products[i][1]) {
            purchasedItems.push(products[i][0]);
            moneyLeft -= products[i][1];
        }
        i++;
    }
    let data = new Object();
    data.memberId = memberId;
    data.money = money;
    data.listPurchased = purchasedItems;
    data.changeMoney = moneyLeft;
    return data;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
