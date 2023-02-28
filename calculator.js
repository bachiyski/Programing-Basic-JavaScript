function calculator(input) {
    let deposit = Number(input[0]) ;
    let months = Number(input[1]) ;
    let procPerYear = Number(input[2]) ;
    let interest = deposit * (procPerYear / 100) ;
    let interestPerYear = interest / 12 ;
    let total = deposit + (interestPerYear * months) ; 
    console.log(`${total}`)
}
calculator(['200', '3', '5.7' ])