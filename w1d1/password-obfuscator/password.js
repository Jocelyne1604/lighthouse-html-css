function obfuscate(password){
var str = "";
for (var i = 0; i < password.length; i++) {
  if(password[i] === "a" || password[i] === "A"){
str += "4";
  }else if(password[i] === "e" || password[i] === "E"){
str += "3";
  }else if(password[i] === "o" || password[i] === "O"){
str += "0";
  }else if(password[i] === "l" || password[i] === "L"){
str += "1";
  }else{
str += password[i];
  }
}
return str;
}

console.log(obfuscate("password"));
console.log(obfuscate("abracadabra"));
console.log(obfuscate("audaciously"));
