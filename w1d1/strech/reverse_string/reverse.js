function reverse(text){
var str = "";
for (var i = text.length -1; i >= 0; i--) {
  str += text[i];
}
return str;
}

console.log(reverse("Lighthouse"));