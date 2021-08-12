// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const Numeros = (code,quantidade) => {
    switch (code) {
        case '100':
            let valorCachorroQuente = 3.00
           let valorTotalCachorroQuente = quantidade* valorCachorroQuente
            console.log(`Voce comprou ${quantidade} de cachorro quente e o total ficou de R$${valorTotalCachorroQuente}`)
            break

        case '200': 
        return console.log({
            Produto:'Hambuguer Simples',
            Valor: 4.00,
            valorTotalHambuguer:quantidade * Valor
            
        })
    
            break

        case '300':
            console.log('Tres')
            break
        case '400':
            console.log('quatro')
            break
        case '500':
            console.log('Cinco')
            break
        case '600':
            console.log('Seis')
            break
      
    }
}

Numeros('100',5)
Numeros('200',2)


