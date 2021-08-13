//MAP IRÁ TRANSFORMAR TODOS OS DADOS DE UM ARRAY! E SEMPRE RETORNORÁ DO MESMO TAMANHO O ARRAY!!!!!
// TEM QUE CRIAR UM NOVO ARRAY, SE NAO MUDA NADA

const nums = [1,2,3,4]

let resultado = nums.map(e =>{
    return e * 2
})

console.log(resultado)

const soma10 = e => e+10
const triplo = e => e*3
const paraDinhero = e => `RS ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinhero)
console.log(resultado)