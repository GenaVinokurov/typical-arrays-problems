let minValue
let maxValue
let avgValue
exports.min = function min (array) {
  minValue = (array === undefined || array.length === 0) ? 0 : array.sort((a, b)=> a-b).shift() ;
  
  return minValue;
}
exports.max = function max (array) {
  maxValue = (array === undefined || array.length === 0) ? 0 : array.sort((a, b)=> a-b).pop();
  
  return maxValue;
}

exports.avg = function avg (array) {
  avgValue = (array === undefined || array.length === 0) ? 0 : array.reduce((a, b) => (a + b)) / array.length;
  
  return avgValue;
}
