function demo(input) {
    let needN = Number(input[0]) ;
    let needP = Number(input[1]) ;
    let needD = Number(input[2]) ;
    let hours = Number(input[3])
    let priceN = (needN + 2) * 1.5
    let priceP = (needP + (10 / 100 * needP)) * 14.5 ; 
    let priceD = needD * 5
    let bags = 0.4 
    let totalM = priceN + priceP + priceD + 0.4 
    let pricePH = totalM * 30 / 100
    let finalPrice = totalM + (pricePH * hours)
     console.log (`${finalPrice}`)
}
demo(['10', '11', '4', '8'])