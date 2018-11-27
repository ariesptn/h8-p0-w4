function changeMe(arr) {
    for (let i = 0; i < arr.length; i++) {
        let name = (i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1];
        let invalidYearString = 'Invalid Birth Year';
        let currentYear = new Date().getFullYear();
        let data = new Object();
        data.firstName = arr[i][0];
        data.lastName = arr[i][1];
        data.gender = arr[i][2];
        if (typeof arr[i][3] === 'undefined') {
            data.age = invalidYearString;
        } else if (currentYear < arr[i][3]) {
            data.age = invalidYearString;
        } else {
            data.age = currentYear - arr[i][3];
        }
        console.log(name, ':', data);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
