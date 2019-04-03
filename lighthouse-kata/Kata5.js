const urlEncode = function(text) {
var newStr = "";
for(var i=0; i < text.length; i++) {
  if(text[i] == " "){
newStr = newStr + "%20";
  }else{
newStr = newStr + text[i];
  }
}
return newStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));