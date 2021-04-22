// callback function
function SayMyName(name) {
    console.log('antes de executar o callback')
    name()
    console.log('depois de executar a callback')
}

SayMyName(
    () => {
        console.log('estou em uma callback')
    }
)