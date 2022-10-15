export const timeAgo = (date: string) => {
    function base (date: string) {
        var time = Date.parse(date)
        var seconds = Math.floor((Date.now() - time) / 1000);
        var interval = seconds / 31536000;

        if (interval > 1) return Math.floor(interval) + " years";
        interval = seconds / 2592000;

        if (interval > 1) return Math.floor(interval) + " months";
        interval = seconds / 86400;

        if (interval > 1) return Math.floor(interval) + " days";
        interval = seconds / 3600;

        if (interval > 1) return Math.floor(interval) + " hours";
        interval = seconds / 60;

        if (interval > 1) return Math.floor(interval) + " minutes";
        return Math.floor(seconds) + " seconds";
    }   

    let res = base(date)
    let split = res.split(' ')
    let num = split[0]
    let interval = split[1]
    if (num === '1') interval = interval.substring(0, interval.length-1)
    return `${num} ${interval}`
}
