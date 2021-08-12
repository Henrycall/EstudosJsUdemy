// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function doisValores(a,b){
    let soma = a+b
    let subtracao = a-b
    let multiplicação = a * b
    let divisao = a / b

    const resultados = [soma,subtracao,multiplicação,divisao]
        return resultados
}


console.log(doisValores(5,5))