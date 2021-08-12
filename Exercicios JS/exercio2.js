// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulos(Lado1,Lado2,lado3){
    if( Lado1 && Lado2 && lado3 === Lado1 && Lado2 && lado3){
        console.log(`Este triangulo é Equilatero`)
    }else if(Lado2 == lado3 || Lado1 == Lado2){
        console.log('Este triangulo isoceles')
    }else if(Lado1 != Lado2 && lado3 ){
        console.log('Este triangulo é escanelo')
    } 
    
}

triangulos(5,5,5)
triangulos(5,5,10)
triangulos(10,20,14)