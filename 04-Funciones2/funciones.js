
function concatenar(){
    var argu = Array.prototype.slice.call(arguments)
    return argu.join("")
}


function invocarFunciones() {
    var resultado = ""

    for(var i = 0; i < arguments.length; i++){
       resultado += arguments[i]()
    }
    return resultado
}


function creadorDeIncrementos(num){
    return function (x){
        return x + num
    }
}


var invocacionUnica = (function(fn) {
    var executed = false
    return function() {
        if (!executed) {
            executed = true
            fn()
        } 
    }
})



function objetoConClousure(){
    var obj = {}
    var resultado = 0

    obj.incremento = function(){
        resultado += 1
        return resultado
    }

    obj.incrementoPor10 = function (){
        resultado += 10
        return resultado
    }

    obj.pedirValor = function (){
        return resultado 
    }

    obj.cambiarValor = function (num){
        resultado = num
        return resultado
    }

    return obj
}

// por qué no me toma que incremento, incrementoPor10 y pedirValor no trabajan sobre el mismo valor si todos trabajan sobre "resultado"?


function ListaDeFuncionesInvitados(num){
    var arregloInvitados = []
    arregloInvitados.push(function(num){
        if (num == 404){
         return "Facu"
         } else {
             return "código secreto: invalido"
         }
    },
   function(num){
       if (num == 404){
        return "Santi"
        } else {
            return "código secreto: invalido"
        }
    },
    function(num){
        if (num == 404){
         return "Toni"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Guille"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Solano"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Leo"
         } else {
             return "código secreto: invalido"
         }
    })

    return arregloInvitados
}


function armarListaDeInvitados(){
    var listaOficial = []
    listaOficial.push('Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo')
    return listaOficial
}