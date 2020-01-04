
function setPropsOnObj(obj) {

    obj.p = 5
    obj["plataforma"] = 5
    obj.proximo = function(num) {
        return num + 1
    }

    obj.la = { clave: { secreta: { es: 404 } } }
}


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