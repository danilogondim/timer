const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Please enter a command (b => beep right away; 0-9 => sets timer for x seconds): ', (answer) => {
  if (answer.toLowerCase() === "b") {
    process.stdout.write('\x07');
  } else if (answer === '\u0003') {
    rl.close();
  } else if (Number(answer) && Number(answer) >= 0) {

    process.stdout.write(`setting timer for ${answer} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), Number(answer) * 1000);
  }

});


// for (const time of input) {
//   if (Number(time) === 0 || (Number(time) && Number(time) >= 0)) {
//     setTimeout(() => process.stdout.write('\x07'), Number(time) * 1000);
//   }
// }