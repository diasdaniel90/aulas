//throw

function sayMyName(name = '') {
    if(name === ''){
        throw ("nome é obrigatório")
    }
    console.log(name)
}

//sayMyName()
//try..catch
try{
    sayMyName('daniel')
} catch(e){
    console.log(e)
}
console.log("apos o erro")