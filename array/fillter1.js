const produtos = [
    {nome:'Notebook',preco:3000,fragil:true},
    {nome:'Ipad Pro',preco:4199,fragil:true},
    {nome:'copo de vidro',preco:20.99,fragil:true},
    {nome:'copo de plastico',preco:8,fragil:false},
    {nome:'carrinho de brinquedo',preco:18.50,fragil:false}
]

console.log(produtos.filter(function(p){
    return p.fragil
}))

console.log(produtos.filter(function(c){
    const produtoCaro = c.preco >1000
    const produtoFragil = c.fragil
    
    return produtoCaro,produtoFragil

}))