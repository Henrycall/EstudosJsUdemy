function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(4)

function seForVerdadieroEuFalo(valor){
    if(valor){
        console.log('é verdade ... ' + nota)
    }
}

seForVerdadieroEuFalo()
seForVerdadieroEuFalo(null)
seForVerdadieroEuFalo(undefined)
seForVerdadieroEuFalo(NaN)
seForVerdadieroEuFalo('')
seForVerdadieroEuFalo(0)
// ----------------------------------
seForVerdadieroEuFalo(-1)
seForVerdadieroEuFalo(' ')
seForVerdadieroEuFalo([])
seForVerdadieroEuFalo([1,2])
seForVerdadieroEuFalo({})

