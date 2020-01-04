function crearCalculadora(){
    var resultado = 0

    var calculadora = {
        valor: function (){
            return resultado
        },

        sumar: function(x){
            return resultado += x
        },

        restar: function(x){
            return resultado -= x
        },
        
        reset: function(){
            return resultado = 0
        }
    }

    return calculadora
}
