// armazenando uma funcao em uma variavel

const imprimirSoma = function(a,b){
    console.log(a + b)
}
imprimirSoma(2,3)

// armazenado uma funcao arrow em uma variavel 

const soma = (a,b) => {
    return a + b
}

console.log(soma(10,5))

// retorno implícito

const subtracao = (a,b) => a-b

console.log(subtracao(2,5))



const imprimir2 = a => console.log(a)
imprimir2('legall')