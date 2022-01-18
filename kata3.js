
const numberOfVowels = function (data) {
  let vowelCount = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) {
      vowelCount++;
    }
  }
  return vowelCount
};


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));