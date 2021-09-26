
//while
function whilFactorial (n){
    let i = 1;
    let factorial = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    return factorial;
}
const fact = whilFactorial(5);
console.log(fact);

//For
function forFactorial (n){
    let i = 1;
    let factorial = 1;
    for (i; i <= n; i++){
        factorial *= i;
    }
    return factorial;
}
const fact2 = forFactorial(5);
console.log(fact2);

//Recursive Function
function recursivFactorial(n){
    if (n == 0){
        return 1;
    }
    else{
        return n * recursivFactorial (n - 1);
    }
}
const fact3 = recursivFactorial(5);
console.log(fact3);

