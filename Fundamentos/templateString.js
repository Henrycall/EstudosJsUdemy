const nome = 'rebeca'
const concatencacao = "olá" + nome + '!'
const template = `
olá
${nome}!`
console.log(concatencacao , template)

// expressoes
console.log(`1 +1 = ${1+1}`)

const up = texto => `${texto}`.toUpperCase() // toupparcase coloca todas em maiusculo.
console.log(`ei ... ${up('cuidado')}!`)
