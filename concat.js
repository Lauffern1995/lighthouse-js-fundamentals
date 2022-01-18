function concat(arr1, arr2) { 
  for (let i = 0; i < arr2.length; i++) { // loops through param 2 
    arr1.push(arr2[i]); // pushing param 2 loop to end of arr1  
  }
  return arr1
}
   
   
   console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);