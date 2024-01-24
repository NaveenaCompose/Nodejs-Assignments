//how we get inputs from users through commandline
const readline = require("readline");
const prompt = require("prompt-sync")();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(`What is your name ?`, (name) => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });
//using prompt sync package
const name = prompt("what is your name ?");
console.log('Hi ${name}');
process.exit(0);