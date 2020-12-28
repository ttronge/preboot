var calculadora;
calculadora = new CalculadoraNPI();
  function CalculadoraNPI() {
     this.num1;
     this.num2;
     this.num3;
     this.total;
 }
 CalculadoraNPI.prototype.agregar = function (n) {
   if (this.num1 === undefined) {
      this.num1 = n;
    } else if (this.num2 === undefined) {
       this.num2 = n;
     }else { 
       this.num3 = n;
     }
   }
  CalculadoraNPI.prototype.multiplicar = function (){
    if(this.num2 !== undefined){
      if(this.num3 !== undefined){
        this.num2 *= this.num3
        this.num3 = undefined
        this.total = this.num2
      } else {
        this.total = this.num1 * this.num2
      }
    } else {
      throw('La calculadoraNPI necesita por lo menos 2 números')
    }
  }
  CalculadoraNPI.prototype.dividir = function (){
    if(this.num2 !== undefined){
      if((this.num3 !== undefined)){
        this.num2 /= this.num3
        this.num3 = undefined
        this.total = this.num2
      } else {
        this.total = this.num1 / this.num2
      }
    } else {
      throw('La calculadoraNPI necesita por lo menos 2 números')
    }
  }
  CalculadoraNPI.prototype.sumar= function () {
    if(this.num2 !== undefined){
      if((this.num3 !== undefined)){
        this.num2 += this.num3
        this.num3 = undefined
        this.total = this.num2
      } else {
        this.total = this.num1 + this.num2
      }
    } else {
        throw('La calculadoraNPI necesita por lo menos 2 números')
      }
  }
CalculadoraNPI.prototype.restar = function (){
  if(this.num2 !== undefined){
    if((this.num3 !== undefined)){
      this.num2 -= this.num3
      this.num3 = undefined
      this.total = this.num2
    } else {
      this.total = this.num1 - this.num2
    }
  } else {
    throw('La calculadoraNPI necesita por lo menos 2 números')
  }
}
  CalculadoraNPI.prototype.valor = function (){
    return this.total
  }