var os = require('os');
var timeFormat = require('./timeFormat');
var colors = require('colors/safe');

function getOsInfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    if (type === 'Darwin') {
        type = 'osx';
    } else if (type === 'Windows_NT') {
        type = 'winda';
    }
    console.log(colors.grey('system: '), type);
    console.log(colors.red('release: '), release);
    console.log(colors.green('CPU: '), cpu);
    console.log(colors.cyan('uptime1: '), timeFormat.secondsToMinutes(uptime));
    console.log(colors.blue('uptime2: '), timeFormat.secondsToHours(uptime))
    console.log(colors.magenta('user name: '), userInfo.username);
    console.log(colors.rainbow('home dir: '), userInfo.homedir);
}

exports.allInfo = getOsInfo;
exports.colors = colors;