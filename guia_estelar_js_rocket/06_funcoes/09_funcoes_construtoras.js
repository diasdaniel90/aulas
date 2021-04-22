/*
    Function() construtor 
    *exoressão new
    *criar um novo objeto
    *this keyword
*/

let name = new String("daniel")
let date = new Date("2020-4-3")
console.log(name)
console.log(date)


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andaando"
     }
}
const daniel = new Person("daniel")
const joao = new Person('joao')
console.log(daniel.walk())
console.log(joao.walk())