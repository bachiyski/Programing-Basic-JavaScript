function yard(input) {
    let a = Number(input[0]) ;
    let total = a * 7.61
    let discount = total * (18 / 100)
    let finalPrice = total - discount
    console.log(`The final price is : ${finalPrice} lv.`)
    console.log(`The discount is ${discount} lv.`)
}
yard([550])