 // Rotate array k times

var ns = [1,2,3,4,5,6,7];

function rotateArray(A, K) {
if (! A. length) return A;
let index = -1;
while (++index < K) {
A. unshift(A. pop());
}
return A;
}
console.log (rotateArray(ns,5));
