const alunos = [
    {nome:'Joao',nota:6.5,bolsista:true},
    {nome:'Henry',nota:7,bolsista:false},
    {nome:'Ingrid',nota:9,bolsista:true},
    {nome:'Mathus',nota:4.4,bolsista:false}
]
// Desafio 1: Todos os alunos sao bolsista ?

const todosBolsistas = (resultado,bolsista) => resultado && bolsista 

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2 : algum aluno é bolsista ?

const algumBolsita = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsita))