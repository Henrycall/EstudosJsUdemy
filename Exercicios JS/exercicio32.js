// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.


let vetor = [1, 2, 3, 4, 5, 6];

function mediaAritimetica(vetor,total){
for( let i = 0; i < vetor.length; i++ ){
   total += vetor[i];
}
}
console.log(total);