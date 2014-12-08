var commander = require('commander');

commander
    .version('0.0.1')
    .option('-y, --yes', 'Say yes')
    .option('-n, --number [number]', 'Given a number')
    .option('-b, --bool [boolean]', 'Given a number', true)
    .option('-f, --filename [filename]', 'Given a filename', 'test.txt')
    .parse(process.argv);

console.log(commander.yes);
console.log(commander.number);
console.log(commander.bool);
console.log(commander.filename);
