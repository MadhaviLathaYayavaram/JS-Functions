// Arrow Function - Return all the prime numbers in an array

var myNumbers = [56,32,7,32,3,93,51];
newArray = [];
var isPrime = (n) => 
{
     if (n <= 1)
        return false;
  
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
      else 
    return true;
}


for (var i=0; i<myNumbers.length; i++) {
  if (isPrime(myNumbers[i])) {
    newArray.push (myNumbers[i]);
    
  }
    
}

console.log ("Prime Numbers are : ",newArray.join(","));
