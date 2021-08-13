const quaseArray = {0:'Rafael',1:'Ana',2:'Beatriz'}
console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value:function(){return Object.values(this)},
    enumerable:false
})
console.log(quaseArray[0]) // SIMULANDO UM ARRAY, COM OBJETO !!!!

const meuArray = ['Rafael','Vivi','Pedro']
console.log(quaseArray.toString(),meuArray)