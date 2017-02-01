var os = require('os');
var timeFormat = require('./timeFormat');

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
    console.log('system: ', type);
    console.log('release: ', release);
    console.log('CPU: ', cpu);
    console.log('uptime1: ', timeFormat.secondsToMinutes(uptime));
    console.log('uptime2: ', timeFormat.secondsToHours(uptime))
    console.log('user name: ', userInfo.username);
    console.log('home dir: ', userInfo.homedir);
}

exports.allInfo = getOsInfo;