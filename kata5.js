/*const urlEncode = function (text)  {
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text = text.substring(0, i) + '%20' + text.substring(i + 1)
    }
  }
  return text 
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure "));

//let rmWhitespace = (text.trim()).replace(/\s+/g, '%20')
*/
const urlEncode = function (text) {
  let rmSpace = "";
  let newText = text.trim();
  for (i = 0; i < newText.length; i++) {
    if (newText[i] === " ") {
      rmSpace += "%20";
   } else {
      rmSpace += (newText[i]);
   }
  }
  return rmSpace;
}



console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));