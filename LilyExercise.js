function demo(input) {
    let years = Number(input[0]);
    let washingMachine = Number(input[1]);
    let priceToy = Number(input[2]);
    let sumMoney = 0;
    let sumToy = 0;
    let bro = 0;
    let money = 10;
    for(let i = 1; i <= years; i++){
        if(i % 2 === 0){
            sumMoney += money
            money += 10
            bro++
        }
        else{
            sumToy++
        }
    }
    let wholeMoney = sumMoney - bro
    let wholeToys = sumToy * priceToy
    let total = wholeMoney + wholeToys
    let diff = Math.abs(washingMachine - total)
    if(total >= washingMachine){
        console.log(`Yes! ${diff.toFixed(2)}`)
    }
    else{
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
demo(['10', '170','6'])