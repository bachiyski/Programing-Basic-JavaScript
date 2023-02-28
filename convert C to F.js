function demo(input) {
     let c = Number(input[0]) ;
     let f = c / 5 * 9 + 32
     let total = f.toFixed(2)
     console.log(`${total}`)
}
demo(['25'])