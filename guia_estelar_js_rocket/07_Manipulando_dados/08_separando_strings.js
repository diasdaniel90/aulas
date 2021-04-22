//Manipulando String e Arrays
/*Separe um texto que contem espaços, em um novo array onde
cada texto é um posição do array. Depois disso, transforme
o array em um texto e onde eram espaçoas, coloque _
  */
let phrase = "Eu Quero tocar o foda-se"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())
