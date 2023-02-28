function demo(input) {
    let taxPY = Number(input[0]) ;    
    let baskB = taxPY - (40 / 100 * taxPY) ;
    let baskKit = baskB - (20 / 100 * baskB) ;
    let baskBall = baskKit * 1 / 4
    let baskAcc = baskBall * 1 / 5
    let finalPrice = taxPY + baskB + baskKit + baskBall + baskAcc 
    console.log (`${finalPrice}`)
}
demo(['365'])