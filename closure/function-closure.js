/ Calling a function outside of the function call in which it was defined
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    // console.log(counter);
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();