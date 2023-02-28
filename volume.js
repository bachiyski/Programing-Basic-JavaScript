function demo(input) {
     let lenghtCM = Number(input[0]) ;
     let wideCM = Number(input[1]) ;
     let hightCM = Number(input[2]) ;
     let proc = Number(input[3]) ;
     let volumeL = (lenghtCM * wideCM * hightCM) / 1000
     let procNum = proc / 100
     let finalVol = volumeL * (1 - procNum)
     console.log(`${finalVol}`)
}
demo(['85', '75', '47', '17'])