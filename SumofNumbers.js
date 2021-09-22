//sum of the numbers in an  array

var numsToAdd = [23,32,64,75,94];
var sum = 0;
function sumOfArray(arr){
  for (var i=0; i<arr.length; i++) {
       sum += parseInt(arr[i]); }
  return sum;
}

console.log ("Sum of all the elements in the Array is : ", sumOfArray(numsToAdd));