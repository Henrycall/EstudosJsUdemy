// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const salarioCacalc = (Salario,plano) =>{
    switch(plano){
        case 'a':
        const SalarioPrimeiro = Salario * 0.10
        console.log(SalarioPrimeiro)  
        
        break

        case 'b':   
        const SalarioSegundo = Salario * 0.15
        console.log(SalarioSegundo)  
        break

        case 'c':
            const salarioTerceiro = Salario * 0.20  
            console.log(salarioTerceiro)
            break 
            
            default:
                console.log('Plano invalido')

    }
}
salarioCacalc(1200,'a')
salarioCacalc(1500,'b')
salarioCacalc(1600,'c')
