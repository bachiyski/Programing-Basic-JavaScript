function demo(input){
     let pricePerKgVeg = Number(input[0]) ;
     let pricePerKgFr = Number(input[1]) ;
     let kgVeg = Number(input[2]) ;
     let kgFr = Number(input[3]) ;
     let price = (pricePerKgVeg * kgVeg) + (pricePerKgFr * kgFr) ;
     let total = price / 1.94
     let finalPrice = total.toFixed(2) 
     console.log(`${finalPrice}`)
}
demo(['0.194', '19.4', '10', '10'])