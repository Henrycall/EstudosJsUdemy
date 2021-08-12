const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao = 'Bom dia ' // contexo Léxico 2
    return saudacao
}

// objetos sao grupos alinhados de pares nome/valor

const cliente = {
    nome : 'Henry',
    idade : 18,
    peso : 90,
    endereco : {
        lagradouro : 'rua adada',
        numero : 123
    }
}

console.log(saudacao)
console.log(exec())

console.log(cliente)
