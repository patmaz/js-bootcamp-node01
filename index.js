var osInfo = require('./modules/OSInfo');
var fs = require('./modules/fs');
var eventEmitter = require('events').EventEmitter;

var emitter = new eventEmitter();
emitter.on('beforeCommand', function(instruction) {
    console.log(osInfo.colors.green('Before execution') + '\n instruction: ' + instruction);
});
emitter.on('afterCommand', function() {
    console.log(osInfo.colors.red('Finished \n '));
});
process.on('exit', function(){
    emitter.emit('afterCommand');
});

var args = process.argv.slice(2);

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('see ya\n');
                process.exit();
                break;
            case '/lang':
                var lang = process.env.LANG || 'no lang info'; // no system language info on mac ???
                console.log(lang + '\n');
                break;
            case '/ver':
                console.log(process.versions.node + '\n');
                break;
            case '':
                process.stderr.write('empty string\n');
                break;
            case '/getOSinfo':
                osInfo.allInfo();
                break;
            case '/getFileInfo':
                fs.getFileInfo(args[0]);
                break;
            case '/readFile':
                fs.readFile(args[0]);
                break;
            case '/writeFile':
                fs.writeFile(args[0], args[1]);
                break;
            case '/writeRootDir':
                fs.writeRootDir();
                break;
            default:
                process.stdout.write(instruction + '\n');
        }
        emitter.emit('afterCommand');
    }
});