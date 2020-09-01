const stdin = process.stdin;

console.log('Please use one of the following commands:');
console.log('   -Press "b" for a immediate beep.');
console.log('   -Press a number between 1 and 9 to set a timer for the specific period, in seconds.');
console.log('   -Use Ctrl+c to exit the program.');

stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();
stdin.on('data', data => {
  if (data === '\u0003') {
    process.exit();
  } else if (data.toLowerCase() === "b") {
    process.stdout.write('\x07');
  } else if (Number(data) && Number(data) > 0) {
    process.stdout.write(`setting timer for ${data} seconds...\n`);
    setTimeout(() => process.stdout.write('\x07'), Number(data) * 1000);
  }
});