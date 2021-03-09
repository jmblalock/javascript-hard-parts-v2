// Solution 4: The class 'syntactic sugar'
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();

console.log(user1);

// nothing has changed under the hood from solution #3
