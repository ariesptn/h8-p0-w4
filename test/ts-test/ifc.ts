function isPrime(num: number): boolean {
    if (num === 1) {
        return false;
    }
    let start: number = 2;
    while (start < num) {
        if (num % start === 0) {
            return false;
        }
        start++;
    }
    return true;
}

console.log(isPrime(5));
