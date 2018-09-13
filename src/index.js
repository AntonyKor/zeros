module.exports =
function getZerosCount(number) {
  // let log5 = Math.floor(Math.log(number)/Math.log(5)), fivesInSqrs = (1 + log5)*log5/2,
  //     quantityOf10 = (number  / 10).toFixed(0), tensInSqrs = (1 + Math.log10(number))*Math.log10(number)/2;
  // console.log(quantityOf10 +' '+ log5 +' '+ fivesInSqrs+ ' ' + tensInSqrs);
  // return quantityOf10*2 - log5 - Math.log10(number) + fivesInSqrs + tensInSqrs;
    let fives = 0;
  for (let i = 2; i <= number; i++){
    let temp = i;
    console.log("\n"+i);
    while (temp>0) {
      if ((temp % 5 === 0) && +temp.toFixed(0) === temp) fives++
        else temp = 0;
      // console.log(temp % 5);
      // console.log(temp + " " + fives);
      temp = Math.floor(temp/5)
    }
  }
  return fives;
}
// console.log (getZerosCount(30))