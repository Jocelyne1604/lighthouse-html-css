let sumLargestNumbers = function(data) {
    var num1 = 0;
    var num2 = 0;
  for (var i = 0; i < data.length; i++) {
if(data[i]>num1){
  num2 = num1;
  num1 = data[i];
}
}
return num1 + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));