let isAtivo = false
console.log(isAtivo)
isAtivo = true;

console.log(isAtivo)

istavio = 1
console.log(!!isAtivo) // !! negacao duas vezes = + (true)
console.log(!isAtivo) // ! negacao uma vez = - (false)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!! -1)
console.log(!! ' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))


console.log("os falso ...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!(isAtivo = false))


let nome = 'lucas'
console.log(nome || 'desconhecido')

