function demo (input){
    let priceTrip = Number(input[0]);
    let countPuzzle = Number(input[1]);
    let countDolls = Number(input[2]);
    let countBears = Number(input[3]);
    let countMin = Number(input[4]);
    let countTrucks = Number(input[5]);
    let a = countTrucks + countPuzzle + countMin + countDolls + countBears;
    let totalA = (countPuzzle * 2.6) + (countDolls * 3) + (countBears * 4.1) + (countMin * 8.2) + (countTrucks * 2);
    let total = totalA * 0.90 
    if (a >= 50){
        total = total * 0.75
    }
    let diff = Math.abs(priceTrip - total)
    if (priceTrip <= total){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } 
    else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}