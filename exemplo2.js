let distanceToGo = 350
let averageSpeed = 65

let time = distanceToGo/averageSpeed

let roundedTime = Math.round(time * 100) / 100 //Função para arredondar as casas decimais para cima

console.log(`O tempo da viagem será de ${roundedTime} horas aproximadamente.`)