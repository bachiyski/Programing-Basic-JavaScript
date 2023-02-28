  function demo(input){
      x = Number(input[0]) ;
      y = Number (input[1]) ;
      h = Number(input[2]) ;
     let sSqu = x * x
     let sRect = x * y
     let sTopA = x * h / 2
     let sTopB = x * y
     let sDoor = 1.2 * 2
     let sFR = 2 * sSqu - sDoor
     let sWindow = 1.5 * 1.5
     let sSide = (2 * sRect) - (2 * sWindow)
     let sBottom = sFR + sSide
     let sTop = 2 * (sTopA + sTopB)
     let totalBot = sBottom / 3.4
     let totalBott = totalBot.toFixed (2)
     let totalTop = sTop  / 4.3
     let finalTop = totalTop.toFixed (2)
     console.log(`${totalBott}`)
     console.log(`${finalTop}`) 
  }
  demo(['6', '10', '5.2'])