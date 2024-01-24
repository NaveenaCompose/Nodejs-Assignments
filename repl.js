// r = read the statement, e = Evaluate it,p = Print it and l = Loop repeat it for the next statement//
//repl = this can be used on console here we can see how to use the repl programmatically//
const repl = require("repl");
const local = repl.start("$");
local.on("exit", () => 
{
    console.log("existing REPL");
    process.exit();
});
