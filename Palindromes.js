var nums = ["MAM","WINDOW","MADAM","SELF","DOGOD"];
var palindromeArray = [];

function isPalindrome(N)
    {
       let str = "" + N;
      
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }

for (var i=0; i<nums.length; i++) {
  if (isPalindrome(nums[i]))   { 
    palindromeArray.push (nums[i]);
  }
}

console.log (palindromeArray.join(","));

