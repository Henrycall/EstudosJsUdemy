let array = [2,50,1,30]
function maiorMenor(array) {
    let maior 
    let menor 
    for (let i = 0; i < array.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = array[i]
            menor = array[i]
        } else if (array[i] > maior) {
            maior = array[i]
        } else if (array[i] <= menor ) {
            menor = array[i]
        }
    }
    console.log(menor,maior)
}

maiorMenor(array)