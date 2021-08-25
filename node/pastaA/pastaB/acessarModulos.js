const moduloA = require('../../ComoExportar')

console.log(moduloA.ola)

const c = require('../pastaB/pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res)=>{
    res.write('bom dia')
    res.end
}).listen(8080)