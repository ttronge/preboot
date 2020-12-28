var miMamifero 
 function Mamifero(nombre) {
     this.nombre = nombre;
     this.descendencia = [];
 }
 Mamifero.prototype.saludar = function (){
     return 'Hola, mi nombre es Manny'
 }
Mamifero.prototype.nuevoHijo = function (){
    var jr = new Mamifero(this.nombre + " Jr");
    this.descendencia.push(jr)
    return jr
}

 function Gato (nombre,color){
     Mamifero.call(this,nombre)
     this.nombre = nombre;
     this.descendencia = [];
     this.color = color;
 }
    Gato.prototype = Object.create(Mamifero.prototype)
    Gato.prototype.constructor = Gato

 Gato.prototype.nuevoHijo = function (color){
     this.color = color
    var jr = new Gato(this.nombre + " Jr",this.color);
    this.descendencia.push(jr)
    return jr
 }
 Gato.prototype.saludar = function (){
    return 'Hola, mi nombre es Garfield'
}



