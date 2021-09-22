// Remove all duplicates from an array

var firstString= String("Madhavi Latha");
  var newArr = [];
  var flag;

function removeDuplicates(s){
  s= " "+s;
  for (var i =0; i<s.length; i++) {
      
      for (var j=0; j<s.length; j++){
          
         if (i !== j) {
             
            if (s[i] !== s[j])
           
            
            {
            flag = true;
            for (var k=0; k<newArr.length; k++)   {
              if (s[j] === newArr[k])    
               flag = false;
         
            } 
          if (flag === true)
          newArr.push (s[j]);
            }
     
      }}
  }
  return newArr;
}

var na = removeDuplicates(firstString);

    if (na.length ===0)
        console.log ("-1")
    else
        console.log (na.join(""));
