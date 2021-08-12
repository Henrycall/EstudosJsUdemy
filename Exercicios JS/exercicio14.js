
// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.


const Frutas = Fruta =>{
    switch(Fruta){
        case 1:
            console.log('Não vendemos essa fruta aqui')
            break

        case 2:
            console.log('Estamos com escasse de kiwi')
            break
        case 3:
            console.log('Aqui está 3 reais o kilo')
            break
        default: 
            console.log('ERRO')
            break
    }
    }
    Frutas(3)