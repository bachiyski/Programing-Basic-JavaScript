function demo(input){
  let r = Number(input[0]) ;
  let pa = 2 * Math.PI * r ;
  let sa = Math.PI * r * r
  let p = pa.toFixed(2)
  let s = sa.toFixed (2)
  console.log(`${s}`)
  console.log(`${p}`)
}
demo (['3'])