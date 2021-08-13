const pilotos = ['henry','rigo','ricardo','jose','matheus']
pilotos.pop() // matheus sai da lista, pop tira o ultimo!!!
console.log(pilotos)

pilotos.push('lucca')
console.log(pilotos)

pilotos.shift() // remove o primeiro da lista! difere do pop!!!
console.log(pilotos)

pilotos.unshift('senna') // UNSHIFIT COLOCA NO PRIMEIRA POSICAO DA LISTA!!!
console.log(pilotos)

// splice pode adicionar e remover elementos ! 

// para adicicionar
pilotos.splice(2,0,'bootas','massa')
console.log(pilotos)

// para remover

pilotos.splice(3,1) // remove UM(1) ELEMENTO NO INDICE TRES(3)

const algunsPilotos1 = pilotos.splice(2) // novo array apartir do do indice que for passado para ele no ()
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // pega do indicie 1 ao 4, porem nao incluie o indice 4