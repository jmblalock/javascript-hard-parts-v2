// Solution 3: Introducing the keyword that automates the hardwork: new
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

console.log(userCreator.prototype); // {};
userCreator.prototype.increment = function () {
  this.score++;
};
userCreator.prototype.login = function () {
  console.log("login");
};

const user1 = new userCreator("Remy", 3);
const user2 = new userCreator("Quincy", 5);
user1.increment();
user2.login();

console.log(user1);
console.log(user2);
