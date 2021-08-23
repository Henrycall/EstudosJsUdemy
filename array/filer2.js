Array.prototype.filter2 = function(callback){
    const newArray = []
    for( let i = 0; i < this.length; i++){
        if(callback[i],i,this){
            newArray.push(this.i)
        }
    }
    return newArray
}

const produtos = [
    {nome:'Notebook',preco:3000,fragil:true},
    {nome:'Ipad Pro',preco:4199,fragil:true},
    {nome:'copo de vidro',preco:20.99,fragil:true},
    {nome:'copo de plastico',preco:8,fragil:false},
    {nome:'carrinho de brinquedo',preco:18.50,fragil:false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))