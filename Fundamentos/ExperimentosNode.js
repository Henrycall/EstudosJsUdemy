let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma varieiavel maluca sem var e let 
abc = 3 // NUNCA FAZER ISSO
console.log(global.abc)

// modules.exports = { c: 456, d: false, e: 'teste' }}

