

{ { { { { { { var sera = "será????" } } } } } } }


console.log(sera)

// var fica no escopo global, mas fica presa dentro da function, na functuion ela nao entra pro escopo == 
function teste(){
    var local = 123

}
teste()
console.log()