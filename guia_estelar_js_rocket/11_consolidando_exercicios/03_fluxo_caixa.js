/* ###sistema de gasto familiar
crie um objeto que possirá 2 propriedades, ambas do tipo arrays:
    *Recebidas:[]
    *Despesas:[]

Agora crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo.
*/
let receitas = {
    Recebidas:[10000, 333, 122.4],
    Despesas:[133, 3312.231, 110]
}

receitas.Recebidas.push(22)
receitas.Recebidas.push(60)

receitas.Despesas.push(30)
receitas.Despesas.push(40)

console.log(receitas.Recebidas)
console.log(receitas.Despesas)

function calcular() {
    let totalRecebidas = receitas.Recebidas.reduce((totalRecebidas, currentElement) => totalRecebidas + currentElement)
    let totalDespesas = receitas.Despesas.reduce((totalDespesas, currentElement) => totalDespesas + currentElement)
    return totalRecebidas - totalDespesas
    //return  [totalRecebidas, totalDespesas];
}

const quale = calcular() > 0 ? 'Positico' : 'Negativo'
console.log(quale)

console.log(`total da sua conta: ${calcular().toFixed(2)} seu saldo é ` + quale)
