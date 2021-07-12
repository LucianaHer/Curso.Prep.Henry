// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*var objeto = {
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 
  var nuevoArray = Object.entries(objeto);
  return nuevoArray;
}
 /* forma larga:
 var array = [];
 for( var clave in objeto){
   array.push([clave, objeto[clave]]);
 }
 return array;
*/



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 
  var obj = {};

  for(var i=0; i < string.length; i++) {
    if(!obj[string[i]])  {    // si esa letra no existe dentro del resultado obj, la crea en 0
      obj[string[i]] = 0;
    }
    obj[string[i]] = obj[string[i]] +1 // le suma uno aunque aparezca x 1ra vez, y si ya existe le suma 1
  }
  return obj;
  
    }

  

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusc=[];    //var str1='';
  var minusc=[];    //var str1='';
  for (var i=0; i< s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      mayusc.push(s[i]);        // string1=string1 + s[i];
    }else {
      minusc.push(s[i]);        //string2= string2 + s[i];
    }

  }
  return mayusc.join('') + minusc.join('');   // return string1 + string2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*var invertida= '';
  var palabra = [];
  
  for (var i=0; i<str.length; i++) {

    if (str[i] !==' ' ) {

        palabra.unshift(str[i]);

      } else  {
        invertida= invertida + palabra.join('') + str[i];
        palabra= [];
        continue;
    }
    if (str.length === i+1) {
      invertida = invertida + palabra.join('');
    }
   }
  return invertida;*/
    var array = str.split(' '); // divide el string en un array de elementos cdo encuentra el espacio' '
    var invertida= '';
    palabra= '';
    
    for (var i=0; i<array.length; i++) {  // para cada palabra del array

      palabra=array[i].split('').reverse().join('');  //cada palabra es un nuevo string invertido

      if ( i===array[i.length-1] || i===0){  //si es la 1era palabra o la ultima, no suma el espacio
        invertida= invertida + palabra;
      } else {
        invertida= invertida + ' ' + palabra ; // suma el espacio
      }
    } 
   return invertida; 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var nro_cadena = numero + '';

  if (nro_cadena === (nro_cadena.split('').reverse().join('')) ) {
    return 'Es capicua';
  }
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  // PRIMER FORMA  CON FOR:  
  /*var arraySinAbc=[];
  for (var i=0; i< cadena.length; i++){ 
      if (cadena[i] !== 'a' && cadena[i]!=='b' && cadena[i] !=='c'){
        arraySinAbc.push(cadena[i]);
      } 
    }
    return arraySinAbc.join('');  */

    //SEGUNDA FORMA CON FLTER:
    /*var arraySinAbc=[];
    array= cadena.split('');
    arraySinAbc = array.filter (function(letra) {
      return letra !== 'a' && letra !== 'b' && letra !== 'c';
    });
    return arraySinAbc.join('');
    */
    
    //TERCERA FORMA CON string.replace(a,b) reemplaza a con el valor de b (LA + FACIL!!!!)
    
    cadena= cadena.replace('a','');
    cadena= cadena.replace('b','');
    cadena= cadena.replace('c','');
    return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort(function(elementoActual, elementoSgte) {     // array.sort() ==>resta un nro con el sgte del array. Si es 0 no hace nada, si es negativo, deja el actual
                                                        // en su posicion, si es negativo, los intercambia.
    return elementoActual.length - elementoSgte.length
  } );
  return arr;

  // CON FOR:
  /*for (var i=0; i<arr.length; i++){
    for (var j=i+1; j<arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        var aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;*/
  }


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  
  var arrConj=[];
  for (var i=0; i < arreglo1.length; i++){
    for (j=0; j < arreglo2.length; j++){
      if (arreglo1[i]===arreglo2[j]){
        arrConj.push(arreglo1[i]);
      }
    }
  }
  return arrConj;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

