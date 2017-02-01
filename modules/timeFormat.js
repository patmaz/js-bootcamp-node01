function secondsToMinutes(seconds) {
    var restSeconds = seconds % 60,
        minutes = (seconds - restSeconds) / 60;

    return minutes + ' min ' + restSeconds + ' sec';
}

function secondsToHours(seconds) {
    var restSeconds = seconds % 60,
        minutes = ((seconds - restSeconds) % 3600) / 60,
        hours = (seconds - (restSeconds + minutes*60)) / (60*60);

    return hours + ' h ' + minutes + ' min ' + restSeconds + ' sec';
}

module.exports = {
    secondsToMinutes: secondsToMinutes,
    secondsToHours: secondsToHours
}