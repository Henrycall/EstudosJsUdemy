// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

const calculadora = (a, operaçao, b) => {
    switch (operaçao) {
        case '+':
            const resultadFinalSoma = a + b
            console.log(`Resultado de ${a} ${operaçao} ${b} = ${resultadFinalSoma} `)

        case '-':
            let resultadFinalSubtracao = a - b
            console.log(`Resultado de ${a} ${operaçao} ${b} = ${resultadFinalSubtracao} `)
            break
        case '/':
            let resultadFinalDivisao = a / b
            console.log(`Resultado de ${a} ${operaçao} ${b} = ${resultadFinalDivisao} `)
            break
        case '*':
            let resultadFinalMultiplicao = a * b
            console.log(`Resultado de ${a} ${operaçao} ${b} = ${resultadFinalMultiplicao} `)
            break
        default:
            console.log('ERROR')
    }

}
calculadora(8, '+', 9)
calculadora(8, '-', 9)
calculadora(8, '/', 9)
calculadora(8, '*', 9)


