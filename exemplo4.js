let kmTraveled = 600
let rentPerDay = 14
let dailyRate = 60
let pricePerKmDriven = 0.15

let carRentalFee = rentPerDay * dailyRate
let kmTotalCost = kmTraveled * pricePerKmDriven

let totalCost = carRentalFee + kmTotalCost

console.log (`O custo do aluguel do carro é de R$ ${totalCost}`)