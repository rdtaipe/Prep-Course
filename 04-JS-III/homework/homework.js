// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  return array.map(ele=>ele+1)
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  return array=[...array,elemento]
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  return array=[elemento,...array]
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cr=palabras.map((str,i,arr)=>{
    if(i===arr.length-1){
      return str
    }
    return str+' '
  })
  return cr.join('')

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  return array.includes(elemento)

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  return numeros.reduce((elm1,elm2)=>elm1+elm2)
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  return resultadosTest.reduce((elm1,elem2)=>elm1+elem2)/resultadosTest.length
  


}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  return numeros.reduce((elm1,elm2)=>elm1>elm2?elm1:elm2)


}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  console.log()
  console.log("[...arguments] =",[...arguments])
  console.log()
  console.log("var array = ",[...arguments],"o","[...arguments]")
  console.log()
  var v=2
  console.log("array.reducir"+"((acumulador,","valorActual)=>")
  console.log()
var n=[...arguments].reduce((acm,curr,i,arr)=>{



var operando="retornando "+v+"*"+arr[i]+" = "+v*curr


var reducinedo=v+" <= acumulador"

var tomando=curr+" <= valorActual"
console.log("-----bucle----"+i)

console.log(reducinedo)
console.log(tomando)
console.log(operando)
v=10
}
)
console.log()
console.log(")")
console.log()
console.log("valor final = "+70)
console.log()

  return [...arguments].length!==0?[...arguments].reduce((elm1,elm2)=>elm1*elm2):0

}
multiplicarArgumentos(2,5,7)
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  return [...arreglo].filter(elm=>elm>18).length
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var days=[{day:"1",message:"Es fin de semana"},
            {day:"2",message:"Es dia Laboral"},
            {day:"3",message:"Es dia Laboral"},
            {day:"4",message:"Es dia Laboral"},
            {day:"5",message:"Es dia Laboral"},
            {day:"6",message:"Es dia Laboral"},
            {day:"7",message:"Es fin de semana"}]

    return days.filter(d=>d.day===numeroDeDia.toString())[0].message
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  return n.toString().split('')[0]==='9'?true:false
  
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  return arreglo.every(elm=>elm===arreglo[0])
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var monts=["Enero","Marzo","Noviembre"]
  var newMonts=array.filter(elm=>monts.includes(elm))

  return newMonts.length===monts.length?newMonts:"No se encontraron los meses pedidos"

}


// let mes1=array.filter(a=>a==="Enero")
// let mes2=array.filter(a=>a==="Marzo")
// let mes3=array.filter(a=>a==="Noviembre")

// let meses = mes1.concat(mes2,mes3)

// return meses.length===3?meses:"No se encontraron los meses pedidos"




// var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
// var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
// console.log(mesesDelAño(ok))

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newArray=array.map(num=>num>100?num:0)
  return newArray.filter(elm=>elm!==0)
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var arr=[]

    for(let i=0;i<10;i++){
      arr.push(numero+=2)
      if(arr[i]===i){
        return "Se interrumpió la ejecución"
      }
    }
  
  return arr
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arr=[]
  for(let i=0;i<9;i++){
    arr.push(numero+=2)
    if(arr[i]===i){
      continue
    }
  }
  return arr

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
