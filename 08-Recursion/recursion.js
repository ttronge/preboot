
function factorialIterativo(n){
    let contador = 1;
    if (n < 1 ){
      return contador;
    }else{
      for(var i = n; i >= 1; i--){
        contador = contador * i;
      }
      return contador;
    }  
  }

   function factorial (n){
    if(n == 0) return 1;

    return n*factorial(n-1)
}

 
function fib(n){
    if(n <= 1) return  1 
    return (fib(n-1) + fib(n-2))
}

function factores(n, arr = []) {
    if(n%2 === 0){
        arr.push(2)
        n /= 2
    }
    else if (n%3 === 0){
        arr.push(3)
        n/=3
    }
    else {
        if(n!=1) arr.push(n)
        return arr
    }
    return factores(n,arr)

}