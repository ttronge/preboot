function duplicar(n){
    return n * 2
}


function triplicar(n){
    return n * 3
}


function map(arr, fn){
    var nwArr = []
    for(var i = 0; i < arr.length; i++){
        nwArr.push(fn(arr[i]))
    }
    return nwArr
}


function filter(arr, fn){
    var array = []
    for(var i=0; i<arr.length;i++){
        if(fn(arr[i]) === true){
            array.push(arr[i])
        }
    }
    return array
}


function contains(obj, num){
    if (Object.values(obj).indexOf(num) > -1) {
    return true
    } else {
        return false
    }
}


function cuentaPalabras (string){
    return string.split(" ").length
}


function cuentaPalabrasReduce (str, i){
    return (str += cuentaPalabras(i))
}


function reduce (arr, num, fn){
    var resultado = num
    for(var i = 0; i < arr.length; i++){
       resultado = fn(resultado, arr[i])
    }
    return resultado
}


function suma (arr){
    function sumar (){
        var valor = 0
        for(var i = 0; i < arr.length; i++){
            valor += arr[i]
        }
        return valor
    }
    return reduce(arr, 0, sumar)
}


function every (arr, fn){
    var array = []
    var y = function(a,b){
        return a + b
    }

    for(var i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true){
            array.push(1)
        }
    }

    if (reduce(array, 0, y) === arr.length){
        return true
    } else {
        return false
    }
}


function any (arr, fn){
    var array = []
    var y = function(a, b){
        return a + b
    }

    for(var i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true){
            array.push(1)
        }
    }

    if (reduce(array, 0, y) === 0){
        return false
    } else {
        return true
    }
}