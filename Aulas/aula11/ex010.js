let agora = new Date()
let diaSem = agora.getDay()
//console.log(diaSem)

switch (diaSem) {
    case 0: 
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda-feira')
        break;

    case 2:
        console.log('Terça-feira')
        break;
    case 3:
        console.log('Quarta-feira')

    case 4:
        console.log('Quinta-Feira')
        break;
    case 5:
        console.log('sexta-feira')
    case 6:
        console.log('Sábado')
        break;

    default:
        console.log('ERRO: Dia Invalido')
        break;
}