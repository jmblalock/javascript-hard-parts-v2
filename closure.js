// functions get a new memory every run/invocation
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(7);
const newOutput = multiplyBy2(10);

console.log(output);
console.log(newOutput);
