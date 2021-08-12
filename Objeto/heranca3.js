const pai = {nome:'Henry',corCabelo:'Castanho escuro'}

const filha1 = Object.create(pai)
filha1.nome = 'Giovanna'
console.log(filha1.corCabelo)

const filho2 = Object.create(pai,{nome: {value:'Lucas',writable:false,enumerable:true}
})

console.log(filho2.nome)
filho2.nome = 'Matheus'
console.log(`${filho2.nome} tem cabelos ${filho2.corCabelo}` )

console.log(Object.keys(filha1))
console.log(Object.keys(filho2))

for(let key in filho2){
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por heranca ${filho2.corCabelo}`)
    
}