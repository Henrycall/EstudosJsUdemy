console.log(typeof Array,typeof new Array,typeof [])

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'

aprovados.push('marcos','henry','jose') // para colocar novos itens no final do array
console.log(aprovados.length)

/// 
aprovados[20] = 'Duda'
console.log(aprovados[19]===undefined)

console.log(aprovados)


/////

console.log(aprovados)
aprovados.sort() // torna um array ordenado, altera o array ao inves de criar outro
console.log(aprovados)

delete aprovados [1]
console.log(aprovados[1]) // indefinido
console.log(aprovados[2]) // nao muda por conta de deletar o um,continua sendo o mesmo valor

aprovados = ['bia','carlos','ano']
aprovados.splice(1,2) // exclui do primeiro pra frente ( do um ao dois)
console.log(aprovados)
aprovados.splice(1,0,'elemento1','elemento2') // coloca elementos apartir do indice