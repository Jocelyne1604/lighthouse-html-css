let numberOfVowels = function(data) {
  var vowels = 'aeiouAEIOU';
  var vcount = 0;

  for(var x = 0; x < data.length ; x++)
  {
    if (vowels.indexOf(data[x]) !== -1)
    {
      vcount += 1;
    }

  }
  return vcount;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));





let numberOfVowels = function(data) {
var sum = 0;
 for (var i = 0; i < data.length; i++){
  switch (data(i){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    sum++;
    break;
  }
 }
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));