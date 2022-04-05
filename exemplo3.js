let appetizer = 15
let mainCourse = 39.90
let beverage = 7
let dessert = 25

let dinner = appetizer + mainCourse + beverage + dessert

let tip = (dinner * 10)/100

let dinnerAndTip = dinner + tip

console.log (`Jantar: R$ ${dinner}`)

console.log (`Gorjeta (10%): R$ ${tip}`)

console.log (`Total do jantar: R$ ${dinnerAndTip}`)
