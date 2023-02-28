function suppliesForSchool(input) {
    let pacagePen = Number(input[0]) ;
    let pacageMar = Number(input[1]) ;
    let cheL = Number(input[2]) ;
    let discProc = Number(input[3]) ;
    let totalPen = pacagePen * 5.8 ;
    let totalMar = pacageMar * 7.2 ;
    let totalChe = cheL * 1.2 ;
    let totalPrice = totalChe + totalMar + totalPen  ;
    let finalPrice = totalPrice - (totalPrice *  (discProc / 100))
    console.log(`${finalPrice}`)
}
suppliesForSchool(['2', '3', '4', '25'])