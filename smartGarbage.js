const bins = {
  waste: 4,
  recycling: 2,
  compost: 5 
}; // sets values of bins 
const trash = "" // sets trash to empty string 

const smartGarbage = function (trash, bins) { // calls on trash and bins 
    if (trash === "waste") bins.waste++
    else if (trash === "recycling") bins.recycling++
    else if (trash === "compost") bins.compost++
    return bins
}
console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }));
