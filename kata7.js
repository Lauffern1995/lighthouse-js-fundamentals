 /*const checkAir = function (samples, threshold) {
  let dirtySampl = []
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtySampl++
    }
  } if (dirtySampl / 10 < threshold) {
    return "Clean"
  } else return 'Polluted'
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) 
*/
function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      str.replace[vowels, '']
    }
  }
  return str;
}

console.log(disemvowel("What are you, a communist?"))
    