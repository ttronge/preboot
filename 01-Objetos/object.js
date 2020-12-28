/*No try/catchFailing 1 spec7 specs | 1 failing
Clase Mamífero El hijo recibe su nombre en relacion a su padre.
Expected undefined to equal 'Perro Jr'.
jasmine.ExpectationResult@http://cdnjs.cloudflare.com/ajax/libs/jasmine/1.3.1/jasmine.js:114:32
jasmine.Matchers.matcherFn_/<@http://cdnjs.cloudflare.com/ajax/libs/jasmine/1.3.1/jasmine.js:1235:29
@http://localhost:7357/proto.js:110:30
jasmine.Block.prototype.execute@http://cdnjs.cloudflare.com/ajax/libs/jasmine/1.3.1/jasmine.js:1064:17
jasmine.Queue.prototype.next_@http://c*/
let obj = {}
function setPropsOnObj (obj){
    obj.p = 5
    obj["plataforma"] = 5
    obj.proximo = function(num) {
        return num + 1
    }

    obj.la = { clave: { secreta: { es: 404 } } }
}
let arr = []
function setPropsOnArr(arr){

    arr.hola = function (){
        return "Hola!"
    }  

    arr["river"] = "plate"
    arr[0] = 5
    arr.doble = function (num){
        return num * 2
    }
}



function functionObject() {
    return "Soy una función con propiedades!"
}


function setPropsOnFunc(x) {
    x.year = "2017";
    x.mitad = function(num) {
        return num / 2
    }
    x.prototype.helloWorld = function() {
        return "Hello World"
    }
} 