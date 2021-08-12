// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.



function verificao(string1,string2){
    if(string1 === string2){
        return console.log(true)
    }else{
        return console.log(false)
    }
}
verificao('aoooooa','aoooooa')
