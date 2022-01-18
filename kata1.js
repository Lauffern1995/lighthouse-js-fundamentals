/*
const sumLargestNumbers = function (data) {
  let first = Math.max.apply(null, data);
  data.splice(data.indexOf(first), 1);
  let second = Math.max.apply(null, data);
  return first + second;
}; 
console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 8888585])); //126
console.log(sumLargestNumbers([-1, -2, -3, -4])); 
*/

const sumLargestNumbers = function (data) {
  let first = data[0]
  let second = data[0]
  let index1 = 0
  let index2 = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] > data[index1])
      index1 = i
  }
  first = data[index1]
  data.splice(index1, 1)

  for (let y = 0; y < data.length; y++) {
    if (data[y] > data[index2])
      index2 = y
  }
  second = data[index2]
  return (first + second)
};
console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 100, 100])); //126
console.log(sumLargestNumbers([-1, -2, -3, -4])); 