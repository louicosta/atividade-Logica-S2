let hundredPerCent = 100
let salePrice = 500 //500 reais
let twentyPerCent = 20

let twentyPerCentValue = (salePrice * twentyPerCent)/hundredPerCent

let discountPrice = salePrice - twentyPerCent

console.log(`20% de desconto: R$ ${twentyPerCentValue}`)

console.log(`Valor a pagar: R$ ${discountPrice}`)