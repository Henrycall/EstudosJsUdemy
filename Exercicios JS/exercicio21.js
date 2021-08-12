// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function Convenio(idade){
    let convenio = 100
    if (idade < 10){
    let valorConcenioCrianca = convenio + 80
    console.log('seu convenio é de crianca no valor de :',valorConcenioCrianca)

    }else if(idade >10 && idade < 30){
        let valorConvenioAdulto = convenio + 50
        console.log('seu convenio é no valor de adulto de :' ,valorConvenioAdulto)

    }else if(idade > 30 && idade <= 60){
        let valorConvenioIdoso = convenio + 95
        console.log(`Seu conenio é de idoso no valor de : ${valorConvenioIdoso}`)
    }else if(idade > 60){
        let valorConvenioMegaIdoso = 130
        console.log('seu convenio é de megaIDOSO valor de :',valorConvenioMegaIdoso)
    }
}
Convenio(9)
Convenio(29)
Convenio(35)
Convenio(80)