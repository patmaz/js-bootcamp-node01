var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors/safe');

function getFileInfo(filePath) {
    if (filePath) {
        fs.stat(filePath, function(err, stats){
            if (err) throw err;
            var statMode = new StatMode(stats);
            console.log(statMode.toString());
        });
    } else {
        console.log('no file path');
    }
}

function readFile(filePath) {
    if (filePath) {
        fs.readFile(filePath, 'utf-8', function(err, data){
            if (err) throw err;
            console.log(data);
        });
    } else {
        console.log('no file path');
    }
}

function writeFile(filePath, content) {
    if (filePath && content) {
        content += '\n';
        fs.readFile(filePath, 'utf-8', function(err, data){
            if (err) throw err;
            console.log(colors.red('before write'))
            console.log(data);
            fs.appendFile(filePath, content, function(err){
                if (err) throw err;
                fs.readFile(filePath, 'utf-8', function(err, data){
                    console.log(colors.green('After write'));
                    console.log(data);
                });
            });
        });
    } else {
        console.log('no file path and/or new content');
    }
}

function writeRootDir() {
    fs.readdir('./', function(err, data){
        if (err) throw err;
        var itemsString = '';
        data.forEach(function(item, index){
            item += '\n';
            itemsString = itemsString.concat(item);
        });
        fs.writeFile('./files/rootDir.txt', itemsString, function(err){
            if (err) throw err;
        });
        console.log('root dir content has been written!');
    });
}

module.exports = {
    getFileInfo: getFileInfo,
    readFile: readFile,
    writeFile: writeFile,
    writeRootDir: writeRootDir
}