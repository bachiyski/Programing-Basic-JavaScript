function radiansDegrees(input) {
    let radians = Number(input[0]) ;
    let degree = radians * (180 / Math.PI)
    console.log(`${degree}`)

}
radiansDegrees([3.1416])