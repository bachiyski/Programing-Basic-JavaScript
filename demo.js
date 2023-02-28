function equipment (input){
    let priceYear = Number(input[0]);
    let priceShoes = priceYear * (1 - 0.40)
    let priceOutfit = priceShoes * 0.8;
    let priceBall = priceOutfit * 0.25;
    let priceAcc = priceBall * 0.20;
    let total = priceYear + priceShoes + priceOutfit + priceBall + priceAcc;
    console.log(total);
}
equipment(["365 "])