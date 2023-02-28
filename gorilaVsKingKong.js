function demo(input){
    let budget = Number(input[0]);
    let countGents = Number(input[1]);
    let costume = Number(input[2]);
    let decor = budget * 0.1
    if(countGents > 150){
        costume = costume * 0.9
    }
    let total = costume * countGents + decor
    let diff = Math.abs(budget - total)
    if (total <= budget){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
}
}
demo(['15437.62','186','57.99'])