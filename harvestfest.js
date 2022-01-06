const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

function finalPosition(moves) {
  let location = [0,0];

  for (let move of moves) {
      if (move === 'east') location[0]++
      else if (move === 'west') location[0]--
      else if (move === 'north') location[1]++
      else if (move === 'south') location[1]--
    }
      return location
}   
console.log(finalPosition(moves))
