function demo(input){
    let numDaysMiss = Number(input[0]);
    let leftFoodKg = Number(input[1]);
    let foodPerDayF = Number(input[2]);
    let foodPerDayS = Number(input[3]);
    let foodPerDayT = Number(input[4]);
    let needFoodF = numDaysMiss * foodPerDayF;
    let needFoodS = numDaysMiss * foodPerDayS;
    let needFoodT = numDaysMiss * foodPerDayT
    let totalFoodNeed = needFoodF + needFoodS + needFoodT
    let diff = Math.abs(leftFoodKg - totalFoodNeed)
    if(leftFoodKg >= totalFoodNeed){
        console.log(`${Math.floor(diff)} kilos of food left.`)
    }
    else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }2  
}
demo(['5','10','2.1','0.8','11'])