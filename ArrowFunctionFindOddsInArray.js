// Arrow Function - Print Odd numbers in an array

var numArray=[45,78,23,34,67,90,26];

var odds = (arr) => 
 {
  var temparr =[];
  for (var i=0; i<arr.length;i++){
    if (arr[i] %2 !==0) {
      temparr.push(arr[i]);
          }
  }
  return (temparr);
}

console.log ("The odd numbers in the array are: ", checkOdd(numArray).join(','));
