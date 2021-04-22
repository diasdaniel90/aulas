/*Celsius em fahrenheit
Crie uma função que receba uma string em celsius ou
fahrenheir e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32
*/

//transformDegree('50F')
function transformDegree(degrees) {
    const celsiusExists = degrees.toUpperCase().includes('C')
    const fahrenheitExists = degrees.toUpperCase().includes('F')
    
    //fluxo de error
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grao nao identificado')
    }
    
    //fluxo ideial F -> C
    let updatedDregree = Number(degrees.toUpperCase().replace("F",""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    console.log(celsiusExists)

    //fluxo alternativo
    if(celsiusExists){
        updatedDregree = Number(degrees.toUpperCase().replace("C",""));
        formula = (Celsius) => (Celsius * 9/5 + 32)
        degreeSing = 'F'
    }

    return formula(updatedDregree) + degreeSing

}

try {
    console.log(transformDegree('10c'))
    console.log(transformDegree('50f'))
    transformDegree('11z')   
} catch (error) {
    console.log(error.message)
}


/* 
let grauC = "35.8"
F = grauC * 9/5 + 32
 console.log(F) */