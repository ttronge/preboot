function factorialIterativo(num){
    var resultado = 1
    for(var i = 1; i <= num ; i++){
        resultado *= i
    }
    return resultado
}


function factorial(num){
    if(num == 0) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}


function fib(num){
    if (num <= 1) return 1
    return fib(num - 1) + fib (num - 2)
}


function factores(num) {
    var arr = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        arr.push(i);
        num /= i;
        factores(num);
      }
    }
    return arr;
  }