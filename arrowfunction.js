var n = 71;
var isPrime = false;
var i = 2;
var f1 = function (n) {
    while (i <= n / 2) {
        if (n % i === 0) {
            isPrime = true;
            break;
        }
        ++i;
    }
    return isPrime;
};
if (!f1(n)) {
    console.log(f1(n));
    console.log(n + " Prime number");
}
else {
    console.log(f1(n));
    console.log(n + " Not a prime number");
}
