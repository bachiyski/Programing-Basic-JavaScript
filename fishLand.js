function demo(input){
    let pricePerKgMac = Number(input[0]) ;
    let pricePerKgSpr = Number(input[1]) ;
    let kgBonito = Number(input[2]) ;
    let kgScad = Number(input[3]) ;
    let kgMussel = Number(input[4]) ;
    let pricePerKgBonito = pricePerKgMac + (pricePerKgMac * (60 / 100)) ;
    let pricePerKgScad = pricePerKgSpr + (pricePerKgSpr * (80 / 100)) ;
    let pricePKGMussel = 7.5
    let total = (kgBonito * pricePerKgBonito) + (kgScad * pricePerKgScad) + (kgMussel * pricePKGMussel)
    let totalPrice = total.toFixed(2)
    console.log(`${totalPrice}`)
}
demo(['6.9', '4.2', '1.5', '2.5', '1'])