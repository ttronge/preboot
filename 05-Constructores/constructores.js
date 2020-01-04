
function CalculadoraNPI(){
    this.array = []
    this.resultado = 0
}

CalculadoraNPI.prototype.agregar = agregar1
CalculadoraNPI.prototype.sumar = sumar1
CalculadoraNPI.prototype.restar = restar1
CalculadoraNPI.prototype.multiplicar = multiplicar1
CalculadoraNPI.prototype.dividir = dividir1
CalculadoraNPI.prototype.valor = verValor

function verValor(){
    return this.resultado
}

function agregar1(num){
    this.array.push(num)
    return this.array
}

function sumar1(){
    if(this.array.length >= 2 && this.resultado == 0){
        var sumarValor = this.array.pop() + this.array.pop()
        this.resultado = sumarValor
        return this.resultado

    } else if (this.resultado !== 0){
        var sumarValor = this.resultado + this.array[0]
        this.resultado = sumarValor
        return this.resultado

    } else {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
}

function restar1(){
    if(this.array.length >=2){
        var prim = this.array.pop()
        var seg = this.array.pop()
        var rest = seg - prim
        this.resultado = rest
        return this.resultado
    } else {   
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
}

function multiplicar1(){
    if (this.resultado == 0 && this.array.length >= 2){
        var prim = this.array.pop()
        var seg = this.array.pop()
        var mult = seg * prim
        this.resultado = mult
        return this.resultado

    } else if (this.resultado !== 0) {
        var prim = this.array[0]
        var mult = prim * this.resultado
        this.resultado = mult

    } else {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
}

function dividir1(){
    if(this.array.length >=2){
        var prim = this.array.pop()
        var seg = this.array.pop()
        var div = seg / prim
        this.resultado = div
        return this.resultado

    } else {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
    
}

var calculadora = new CalculadoraNPI();