//! ansi-colors
const c = require("ansi-colors");

console.log(c.red("This is a red string!"));
console.log(c.green("This is a red string!"));
console.log(c.cyan("This is a cyan string!"));
console.log(c.yellow("This is a yellow string!"));
console.log(c.bold.red("this is a bold red message"));
console.log(c.bold.yellow.italic("this is a bold yellow italicized message"));
console.log(c.green.bold.underline("this is a bold green underlined message"));
console.log(c.yellow(`foo ${c.red.bold("red")} bar ${c.cyan("cyan")} baz`));
console.log(c.bgBlueBright.bold.red("this is a bold red message"));

//! moment
const moment = require("moment");
moment.locale("tr");

console.log(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));
console.log(moment().format("llll"));
