// But we need to know how our promise-deferred functionality gets back into JavaScript to be run
function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}
function blockFor300ms() {
  /* blocks js thread for 300ms */
}

setTimeout(printHello, 0);

const futureData = fetch("https://twitter.com/will/tweets/1");

blockFor1Sec();
console.log("Me first!");
