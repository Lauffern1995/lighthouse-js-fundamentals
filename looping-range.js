 function range (start, end, step) {
  var series = [];
    if( start === null || end === null || step === null || end < start || step < 0 ){ 
      series = []; // returns empty array if true
    } else {
      for(var i = start; i <= end; i = i + step){
        series.push(i);
      } 
    }
    return series; // loops through param 1, checks to see if it is <= param 2, adds param 3 and return new "series []""
  }
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));