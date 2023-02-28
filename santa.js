function demo(input){
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let price = 0;
    let discount = 0;
    switch(room){
        case "room for one person":
        price = 18.00;
        break;
        case "apartment":
            price = 25.00;
            if(days < 10){
            discount =  0.3;
            } else if (days >= 10 && days <= 15){
                discount = 0.35;
            } else if (days > 15){
                discount = 0.5;
            }
            break;
            case "president apartment":
                price = 35.00;
            if(days < 10){
            discount =  0.1;
            } else if (days >= 10 && days <= 15){
                discount =  0.15;
            } else if (days > 15){
                discount = 0.2;
            }
            break;
    }
    days-=1;
    let a = days * price;
    let sum = a * discount;
    a = a - sum;
    

    if(grade === "positive"){
        let disc = a * 0.25;
        a = a + disc;
    } else {
        let g = a * 0.10;
        a = a - g;
    }
    console.log(`${a.toFixed(2)}`);

}
demo(["30",
"president apartment",
"negative"])
