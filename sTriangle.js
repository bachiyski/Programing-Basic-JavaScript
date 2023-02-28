function demo(input){
     let a = Number(input[0]) ;
     let h = Number(input[1]) ;
     let s = a * h / 2 ;
     let totalS = s.toFixed(2)
     console.log(`${totalS}`) 
} 
demo(['20', '30'])