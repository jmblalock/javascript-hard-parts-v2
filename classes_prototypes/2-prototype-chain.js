// Solution 2: Using the prototype chain
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Remy", 3);
const user2 = userCreator("Quincy", 5);
user1.increment();
user2.login();
console.log(user1.hasOwnProperty("score")); // Object.prototype available to all objects

// all objects in JS have a __proto__ property that defaults to link to Object.prototype

console.log(user1);
console.log(user2);
