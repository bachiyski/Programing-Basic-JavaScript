function demo(input) {
    let chMeal = Number(input[0]) ;
    let fishMeal = Number(input[1]) ;
    let vegMeal = Number(input[2]) ;
    let delivery = 2.5
    let chPrice = chMeal * 10.35
    let fishPrice = fishMeal * 12.4
    let vegPrice = vegMeal * 8.15
    let totalPriceM = chPrice + fishPrice + vegPrice 
    let desPrice = totalPriceM * (20 / 100)
    let finalPrice = totalPriceM + desPrice + delivery
    console.log(`${finalPrice}`)
}
demo(['2', '4', '3'])