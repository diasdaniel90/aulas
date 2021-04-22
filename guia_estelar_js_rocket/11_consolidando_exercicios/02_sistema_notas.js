/*  ### Transformar notas escolares

Crie algoritmo que transforme as notas do sistema 
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima  - A
* entre 80 - 89    - B
* entre 70 - 79    - C
* entre 60 - 69    - D
* menor que 60     - F

 */

function getScore(nota) {
    let letra = new Array()
    let phrase = "sua nota é "
    letra.push(nota >= 90)
    letra.push(nota >= 80 && nota <= 89)
    letra.push(nota >= 70 && nota <= 79)
    letra.push(nota >= 60 && nota <= 69)
    letra.push(nota < 60)
    //console.log(letra[1])
    
    for (let index = 0; index < letra.length; index++) {
        if (true == letra[index]) {
            switch (index) {
                case 0:
                    phrase += "A"        
                    break;
                case 1:
                    phrase += "B"                   
                        break;
                case 2:
                    phrase += "C"                   
                        break;
                case 3:
                    phrase += "D"                    
                        break;
                case 4:
                    phrase += "F"                    
                        break;                     
                default:
                    phrase += "inválida"
                    break;              
            } 
        }
    }    
    return phrase
}
console.log(getScore(10))