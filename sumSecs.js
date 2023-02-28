function demo(input){
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]) ;
  let sumInSec = a + b + c ;
  let munutes = Math.floor(sumInSec / 60);
  let sec = sumInSec % 60
  if(sec < 10){
    console.log(`${munutes}:0${sec}`)
  }
  else {
    console.log(`${munutes}:${sec}`)
  }
}