let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisAroow = param => console.log(this === param)

comparaComThisAroow(global)
comparaComThisAroow(module.exports)
comparaComThisAroow = comparaComThisAroow.bind(obj)
comparaComThisAroow(obj)
comparaComThisAroow(module.exports)