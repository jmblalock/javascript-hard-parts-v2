// Objects - store functions with their associated data!
// this is the principle of encapsulation - and it's going to transform how we can 'reason about' our code

const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment(); //user1.score -> 4

console.log(user1);

// Creating user2 user dot notation
// Declare an empty object and add properties with dot notation

const user2 = {}; //create an empty object

//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function () {
  user2.score++;
};

console.log(user2);

//Creating user3 using Object.create
//Object.create is going to five us fine-grained control over our object later on
const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  user3.score++;
};

// Our code is getting repetitive, we're breaking our DRY principle. And suppose we have millions of users!
// What could we do?

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
user4.increment();
console.log(user4);
console.log(user5);
