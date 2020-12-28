calculadora = crearCalculadora();
function crearCalculadora() {
    let val = 0;
    let calculadora = {
        valor: function(){
            return val
        },
        sumar: function (t) {
            val += t
        },
        restar: function (t) {
            val -=t
        },
        reset: function() {
            val = 0
        }
    }
    return calculadora
}