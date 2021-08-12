// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

vetorA = [3,4,5,6]
vetorB = [4,3,2,1]
vetorB[5]
const pegarNumero = vetorB.push(vetorA[0])
 vetorB.push(vetorB.splice(0,1)[0]);
console.log(vetorB)

// segundo vetor

const pegarNumero2 = vetorA.push(vetorB[0])
 vetorA.push(vetorA.splice(0,1)[0]);
console.log(vetorA)

