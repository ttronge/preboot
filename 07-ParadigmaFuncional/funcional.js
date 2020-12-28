function duplicar (num){
    return num * 2
}


let arr = [1, 2, 3] 
function map (arr,fn){
    for(let i = 0; i < arr.length;i++){
      arr[i] = fn(arr[i])
    }
    return arr
}
function filtroPar(arr) {
    let art = []
    for(let i = 0; i < arr.length;i++){
        if(arr[i]%2 == 0){
            art.push(arr[i])
        }
    }
    return art
}
function filtroImpar(arr){
    let art = []
    for(let i = 0; i < arr.length;i++){
        if(arr[i]%2 == 1){
            art.push(arr[i])
        }
    }
    return art
}

function filter(arr,fn){
    let arrnuevo =  []
    for(let i = 0; i < arr.length;i++){
        if(fn(arr[i])=== true){
           arrnuevo.push(arr[i])
        }
    }
    return arrnuevo
}

function contains(obj,busco){
    let prop
   if(Array.isArray(obj)=== false){
       for(prop in obj){
           if(obj[prop] === busco){
               return true
           }
         }for(prop in obj){
            if(obj[prop] !== busco){
            return false
            }
        }
   }    else {
                for(let i = 0; i < obj.length;i++){
                     if (obj[i] === busco ){
                         return true
             }
       }
       return false
   }
}

function cuentaPalabras (str){
    return (str.split(" ").length)
}
function reduce (arr,n,fn){
        let t = n
        for(let i = 0 ; i < arr.length;i++){
            t = fn(arr[i],t)
        }
        return t   
}
function cuentaPalabrasReduce (str,n){
    return cuentaPalabras(str) + n
}

function suma (arr){
   let sumasion = function (a,b){
       return a + b
   }
   return reduce(arr,0,sumasion)
}

function every (arr,fn){
    for(let i = 0; i < arr.length;i++){
     if(reduce([arr[i]],0,fn) === false){ 
         return false
     }
}
return true
}

function any(arr,fn){
    for(let i = 0; i < arr.length;i++){
        if(reduce([arr[i]],0,fn) === true){ 
            return true
        }
   }
   return false
}