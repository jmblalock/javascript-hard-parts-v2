function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);

console.log(result);

// what principle are we breaking?
// DRY

function copyArrayAndAdd3(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}

const myArray2 = [1, 2, 3];
const result2 = copyArrayAndAdd3(myArray);

console.log(result2);

// We could generalize the function - passing in specific instructions

function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}
const result3 = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

console.log(result3);
