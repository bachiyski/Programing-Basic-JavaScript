function demo(input) {
    let lenghtM = Number(input[0]) ;
    let widthM = Number(input[1]) ;
    let lenghtCM = lenghtM * 100
    let widthCM = widthM * 100 
    let wide = (widthCM - 100) % 70
    let spacesA = (widthCM - 100 - wide) / 70
    let lenght = lenghtCM % 120
    let spacesB = (lenghtCM - lenght) / 120
    let totalSpaces = (spacesA * spacesB) - 3
    console.log(`${totalSpaces}`)
}
demo(['15','8.9'])