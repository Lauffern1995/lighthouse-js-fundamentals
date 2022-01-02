const raining = true;
const temp = -14;

if (raining){
  console.log("Don't forget your umbrealla!");
}

if (temp < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temp < 15){
  console.log("Short sleeves wont cut it");
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside");
