Array.prototype.forEach2 = (callback) => {
    for(let i=0; i< this.length; i++){
        callback(this[i],i,this)
    }
}

const aprovados = ['Aghata','Pedro','Henry','Ricardo']
// for each PRIMEIRO PARAMENTRO É O NOME, SEGUNDO É O INDICE, TERCEIRO ARRAY
aprovados.forEach2((nome,indice)=>{
    console.log(`${indice + 1} ) ${nome}`)
  
})
