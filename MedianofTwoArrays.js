//Return median of two sorted arrays of same size

var myArray1 = [13, 16, 20, 32, 43];
var myArray2 = [14, 18, 22, 33, 50];

function arrMedian(arr1, arr2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
       if (i == n)
        {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
         else if (j == n)
        {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
        
        if (arr1[i] <= arr2[j])
        {
            m1 = m2; 
            m2 = arr1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 

if (myArray1.length == myArray2.length) {
   console.log ("Median is "+ arrMedian(myArray1, myArray2, myArray1.length));
}
    
else {
 
    console.log("Error Matching sizes of the Arrays!");

}