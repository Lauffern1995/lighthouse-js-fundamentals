const cars = [
  { time: 1568329654807,
    speed: 40, },
  { time: 1568329821632,
    speed: 42, },
  { time: 1568331115463,
    speed: 35 }
];

const speed = 38; 

const carPassing = function (cars, speed) {
  let newCar = { time : Date.now(), speed : speed } // sets newCar to current time and calls var speed
   cars.push(newCar) // push newCars info to end of array 
   return cars // returns updated array

  }
console.log(carPassing(cars, speed))