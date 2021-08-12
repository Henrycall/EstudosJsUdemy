const notas = [5,6,8,9.9,6,1,5.8,8.9,7.0,5.3,6.9,10]

// sem callbaack

const notasBaixas1 = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota<7
})
console.log(notasBaixas2)

const notaBaixas3 = notas.filter(nota => nota <7)
console.log(notaBaixas3)


