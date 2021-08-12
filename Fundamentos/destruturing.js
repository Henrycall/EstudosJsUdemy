const pessoa = {
    nome:'henry',
    idade:18,
    endereco : {
        logradouro:"rua lalalalala",
        numero: 216
    }
}
const {nome,idade} = pessoa // forma de retirar do objeto e tratar nas variaveis.
console.log(nome,idade)

const {nome : n ,idade : i } = pessoa
console.log(n, i)


const {sobrenome,bemHumorado = true} =pessoa

console.log(sobrenome,bemHumorado)

const{endereco :{logradouro,numero,cep}} = pessoa

console.log(logradouro,numero,cep)

// const {conta : {ag,num}} = pessoa

// console.log(ag,num)
//erro pois tenta pegar de um lugar q nao existe
