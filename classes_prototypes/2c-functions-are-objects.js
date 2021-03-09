// Interlude - functions are both objects and functions

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
console.log(multiplyBy2(3)); // 6

console.log(multiplyBy2.stored); // 5
console.log(multiplyBy2.prototype); // {}

// We could use the fact that all functions have a default property 'prototype' on their object version, (itself and object) - to replace our 'functionStore' object
