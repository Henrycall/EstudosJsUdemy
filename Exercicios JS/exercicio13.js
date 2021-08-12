// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch

const imprimirDias = dias =>{
    switch(dias){
        case 1:
            console.log('É domingo')
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('o numero é válido')
        case 7:
            console.log('É sabado')
    }
    }
    imprimirDias(7)