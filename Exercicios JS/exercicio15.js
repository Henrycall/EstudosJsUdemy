// 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.

const RevendaCarros = Carros =>{
    switch(Carros){
        case 1:
            console.log('compra efetuada com sucesso')
            break

        case 2:
            console.log('tem certeza que nao prefere este modelo ?')
            break
        case 3:
            console.log('nao trabalhamos com esse modelo')
            break
        default: 
            console.log('ERRO')
            break
    }
    }
    RevendaCarros(3)