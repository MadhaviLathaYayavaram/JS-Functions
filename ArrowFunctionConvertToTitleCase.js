// Arrow Function - Convert all the strings to title caps in a string array

var myString = "guvi zen student"
var titleCaseString = (s) => { 
  st = s.toLowerCase().split(' ');
  for (var i = 0; i < st.length; i++) {
    st[i] = st[i].charAt(0).toUpperCase() + st[i].slice(1); 
  }
  return st.join(' ');
}
console.log (titleCaseString(myString));
