function factorial(n){
    if(n<1){
        return("invalid argument")
    }
    let result = 1
    for(let i = 1;i<=n;i++){
result *= i
    }
    return result
}
console.log(factorial(-5))