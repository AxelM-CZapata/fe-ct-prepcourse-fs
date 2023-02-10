/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo=[];
   for(propiedad in objeto){
      let arreglos=new Array(propiedad,objeto[propiedad]);
      arreglo.push(arreglos);
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const obj={}
   let contador=1;
   let copia=string.toLowerCase() 
   copia=copia.split("");
   copia.sort()
   copia=copia.join("");
   for(let i=0; i<copia.length;i++){
       for(let j=0;j<copia.length;j++){
           if(copia[i]===copia[j] && i!=j){
               contador++
           }
       }
       obj[copia[i]]=contador;
       contador=1;
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let copia=string.split("");
    let palMay="";
    let palMin="";
    for(count of copia){
        if(count===count.toUpperCase()){
            palMay+=count
        }else{
          palMin+=count  
        }
    }
    copia=palMay+palMin;
    return copia
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let string="";
    let string2="";
    let arreglo=[];
    for(count of frase){
        string+=count;
        if(count===" "){
            arreglo.push(string);
            string="";
        }
    }
    arreglo.push(string);
    for(let i=0; i<arreglo.length;i++){
        for(let j=arreglo[i].length-1;j>=0;j--){
            if(arreglo[i][j]!=" " && arreglo[i][j]!=undefined){
                string2+=arreglo[i][j];
            }
            if(j===0 && arreglo[i][arreglo[i].length-1]===" "){
                string2+=arreglo[i][arreglo[i].length-1];
            }
        }
    }
    
    return string2

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let num2=String(numero);
    let cadena="";
    for(let i=num2.length-1;i>=0;i--){
        cadena+=num2[i]
    }
    if(cadena.length===1 || cadena==num2){
        return "Es capicua"
    }else
    return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let cadena="";
    for(count of string){
        if(count!="a" && count!= "b" && count!= "c"){
            console.log(cadena);
            cadena+=count;
        }
    }
    return cadena;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b)=>{
    if(a.length<b.length){
        return -1
    }
    if(a.length>b.length){
        return 1;
    }
    return 0;
})
return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo=[]
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array1[i]===array2[j]){
                arreglo.push(array2[j]);
            }
        }
    }
    return arreglo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
