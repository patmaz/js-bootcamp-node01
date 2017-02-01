function secondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60),
        restSeconds = seconds - minutes * 60;
    return minutes + ' min ' + restSeconds + ' sec';
}

function secondsToHours(seconds) {
    var hours = Math.floor(seconds / 3600),
        minutes = Math.floor((seconds - (hours * 3600)) / 60),
        restSeconds = seconds - (hours * 3600) - (minutes * 60);
    return hours + ' h ' + minutes + ' min ' + restSeconds + ' sec';
}

module.exports = {
    secondsToMinutes: secondsToMinutes,
    secondsToHours: secondsToHours
}