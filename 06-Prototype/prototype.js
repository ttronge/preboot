// miMamifero = new Mamifero()

function Mamifero(nombre){
    this.nombre = nombre
    this.descendencia = []
}


Mamifero.prototype.saludar = function(){
    return "Hola, mi nombre es " + this.nombre
}

Mamifero.prototype.nuevoHijo = function(){

    var nombre = new this.constructor(this.nombre + " Jr")
    this.descendencia.push(nombre)
    return nombre
}

function Gato(nombre, color){
    Mamifero.call(this, nombre)
    this.color = color
}


Gato.prototype = Object.create(Mamifero.prototype)
Gato.prototype.constructor = Gato

Gato.prototype.nuevoHijo = function(color){

    var nombre = new Gato(this.nombre + " Jr", color)
    this.descendencia.push(nombre)
    return nombre
}
