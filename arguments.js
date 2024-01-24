// arguments passing to node application//
//argument consists of three indexes in an array it will displays:
//1.path of the nod
//2.path of the execution file 
//3.argument name

//Without Minimist

//console.log(process.argv);//to diplay all three indexes


//minimist package usage using this we can read the argument values//

const minist = require("minimist");
const argNew =minist(process.argv.slice(2));
console.log(argNew.name);