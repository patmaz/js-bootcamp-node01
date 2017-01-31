process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case '/exit':
                process.stdout.write('see ya\n');
                process.exit();
                break;
            case '/info':
                console.log(process.versions.node + '\n');
                break;
            case '':
                process.stderr.write('empty string\n');
                break;
            default:
                process.stdout.write(instruction + '\n');
        }
    }
});