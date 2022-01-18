function lastIndexOf (arr, num) {
  var func = false; // sets value of function to false
  var result = 0; 
  for (var i = arr.length-1; i >=0; i--) { // loops backwards thru  param 1
    if (arr[i] === num) { 
      result = i;
      func = true;
      break; // checks if param 2 occurs in param 1 and stops loop if it does and sets function value to true 
    }
  }
  if (func) { 
    return result; // checks to see if fnction value is true and returns the varibale for result 
  } else {
    return -1; // otherwise returns a -1 value 
  }
}



console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1); 