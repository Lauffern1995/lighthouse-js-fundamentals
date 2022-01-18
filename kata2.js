const conditionalSum = function (values, condition) {
  let evens = values 
  let odds = values
  let sum = 0   
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (evens[i] % 2 === 0) {
        sum += evens[i];
      }
    }
    return sum
  }
  if (condition === "odd") {
    for (let y = 0; y < values.length; y++) {
      if (odds[y] % 2 != 0) {
        sum +=  odds[y];
      }
    }
   return sum
  }
  else return 0
};

console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
