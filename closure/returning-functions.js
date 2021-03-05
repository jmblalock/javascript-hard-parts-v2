// functions can be returned from other function in JavaScript
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

function createFuntion() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFuntion();
const result = generatedFunc(3);

console.log(result);
