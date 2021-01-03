function concatenar() {
  let str = ''
  for(let i = 0; i < arguments.length;i++){
      str += arguments[i]
  }
  return str
}
function invocarFunciones() {
    let arr = []
    for(let i = 0; i < arguments.length;i++){
        arr.push([arguments[i]()])
    }
    return arr.join("")
}
function invocacionUnica(fun) {
    let t = true
    return function () {
      if (t) {
        t = false
        return fun()
      }
    }
   } 

    function objetoConClousure() {
      let valor = 0;
      return {
        incremento: function () {
          valor++;
        },
        incrementoPor10: function () {
          valor += 10;
        },
        pedirValor: function () {
        return valor;
        },
        cambiarValor: function (n) {
          valor = n;
        }
      }
    
     }

    function ListaDeFuncionesInvitados(list, code) {
       let arr = [];
       for (let i = 0; i < list.length; i++) {
         arr.push(function (c) {
           if (c == code) {
             return function (j) {
               return list[j]
             }(i);
           } else {
             return 'código secreto: invalido'
           }
         })
       }
       return arr
     }

     function armarListaDeInvitados(arrFn,code){
        let arr = []
        for(let i = 0; i < arrFn.length;i++){
            arr.push(arrFn[i](code))
        }
        return arr
     }