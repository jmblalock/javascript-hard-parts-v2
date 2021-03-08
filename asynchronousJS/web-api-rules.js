// We're interacting with a world outside of JavaScript now - so we need rules
function printHello() {
  console.log("Hello");
}
async function blockFor1Sec() {
  // blocks in the JavaScript thread for 1 sec
}

setTimeout(printHello, 0);

blockFor1Sec();
console.log("Me First!");
