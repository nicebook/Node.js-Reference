var colors = require('colors');

console.log('This is green'.green.bgRed);
console.log(colors.green.bgRed('This is green'));

console.log('This is green'.green.bgRed.underline);
console.log(colors.green.bgRed.underline('This is green'));

console.log('Text Testing'.blue.underline.dim);
console.log(colors.yellow.inverse('This is yellow'));
console.log('Text Testing'.trap);

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

console.log('this is an error'.error);
console.log('this is a warning'.warn);
