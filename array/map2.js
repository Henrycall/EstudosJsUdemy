const carrinho = [
    '{"nome":"Borracha","preco": 3.45}',
    '{"nome":"cardeno","preco": 13.95}',
    '{"nome":"Kit de Lapis","preco": 41.22}',
    '{"nome":"Caneta","preco": 7.50}'
]

const converteObjeto = json => JSON.parse(json)
const apenasPreco  = produto => produto.preco 

const resultadoPreco = carrinho.map(converteObjeto).map(apenasPreco)
console.log(resultadoPreco)
