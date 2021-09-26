
//Fibonacci iteration function
function fibonacciIteration(n){
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++){
        fibo[i] = fibo[i -1] + fibo[i -2];
    }
    let fiboOut = fibo[n];
    return fiboOut;
}
const result = fibonacciIteration(12);
console.log(result);

//Fibonacci recursive function
function fibonacciRecursive(n){
    if (n == 0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    else{
        return fibonacciRecursive(n -1) + fibonacciRecursive(n - 2);
    }
}
const result2 = fibonacciRecursive(12);
console.log(result2);
