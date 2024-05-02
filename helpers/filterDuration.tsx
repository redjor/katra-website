export default function filterDuration(value: number) {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    const dHours = hours > 9 ? hours.toString() : '0' + hours;
    const dMins = minutes > 9 ? minutes.toString() : '0' + minutes;
    const dSecs = seconds > 9 ? seconds.toString() : '0' + seconds;

    return dHours > "0" ? dHours + ':' + dMins + ':' + dSecs : dMins + ':' + dSecs
}