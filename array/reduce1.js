const alunos = [
    {nome:'Joao',nota:6.5,bolsista:true},
    {nome:'Henry',nota:7,bolsista:false},
    {nome:'Ingrid',nota:9,bolsista:true},
    {nome:'Mathus',nota:4.4,bolsista:false}
]
console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},0)

console.log(resultado)