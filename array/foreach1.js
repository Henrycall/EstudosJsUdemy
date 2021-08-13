const aprovados = ['Aghata','Pedro','Henry','Ricardo']
// for each PRIMEIRO PARAMENTRO É O NOME, SEGUNDO É O INDICE, TERCEIRO ARRAY
aprovados.forEach((nome,indice,array)=>{
    console.log(`${indice + 1} ) ${nome}`)
    console.log(array) // exemplo com 3 indices
})

aprovados.forEach(nome =>console.log(nome))

const exibirAprovados = aprovado =>{
    console.log(aprovado)
}
aprovados.forEach(exibirAprovados)