// Arrow functions - a shorthand way to save functions
function multiplyByTwo(input) {
  return input * 2;
}

const multiplyByTwo2 = (input) => {
  return input * 2;
};

const multiplyByTwo3 = (input) => input * 2;

const output = multiplyByTwo3(3);
console.log(output);

// updating our callback fn() to an arrow fn()
// higher order
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

// const multiplyBy2 = (input) => input * 2;
const result3 = copyArrayAndManipulate([1, 2, 3], (input) => input * 2);

console.log(result3);
