let valor 
console.log(valor)

valor = null // ausencia de valor, não usar undtefined
console.log(valor)
 //console.log(valor.tostring()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco =  3.50
console.log(produto)

produto.preco = undefined // nao atribua undefined.

console.log(!!produto.preco)
// delete produto.preco 
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)