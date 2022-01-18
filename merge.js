function merge(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]); // loops thru param 2 and pushes its contents to end of param 1 
    
  } return arr1.sort() // sorts whole funtion from low to high using .sort

}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));