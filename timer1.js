const input = process.argv.slice(2);

for (const time of input) {
  if (Number(time) === 0 || (Number(time) && Number(time) >= 0)) {
    setTimeout(() => process.stdout.write('\x07'), Number(time) * 1000);
  }
}