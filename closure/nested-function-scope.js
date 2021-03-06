// Callling a function in the same function as it was defined
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
  // console.log(counter);
}
outer();

// Where you define your functions determines what data it has access to when you call it
