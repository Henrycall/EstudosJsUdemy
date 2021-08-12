let dobro = function(a){
    return 2*a
}
dobro = (a)=>{
    return 2 * a
}
dobro = a => a * 2 // return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}

ola = () =>  'olá'
ola = _ => 'olá'