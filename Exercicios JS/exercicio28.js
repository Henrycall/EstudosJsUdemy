// 8) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

for(i=0 ; i<=100; i++){
    let num = i%2
    if(num%2 == 0){
        console.log('numero par',i)
    }else if(num%2 !== 0){
        console.log('Numeros impar',i)
    }

}
