// Solution 1: Generate objects using a function
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user4 = userCreator("Remy", 3);
const user5 = userCreator("Quincy", 5);
user4.increment(); //newUser.score++ is in the backpack, we still use the label - backpack is everywhere
console.log(user4);
console.log(user5);

// never going to use this approach, we're still repeating the increment function, not good.  Wasting a lot of memory.
