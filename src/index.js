module.exports = function getZerosCount(number) {
  let log5 = Math.floor(Math.log(number)/Math.log(5)), fives = 0;

  for (let i = 1; i <= log5; i++) fives += Math.floor(number/Math.pow(5, i));
  return fives
}