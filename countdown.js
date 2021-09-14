function doIt() {
    setInterval(function countdown() {
    now = new Date();
    then = Date.parse(document.getElementById("date").value);
    daysLeft = then - now;
    days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
    hours = Math.floor(daysLeft / (1000 * 60 * 60));
    mins = Math.floor(daysLeft / (1000* 60));
    secs = Math.floor(daysLeft / 1000);
    dd = days;
    hh = hours - days * 24;
    mm = mins - hours * 60;
    ss = secs - mins * 60;
    document.getElementById("countdown").innerHTML = dd + ' days ' + '<br>' + hh + ' hours ' + '<br>' + mm + ' minutes ' + '<br>' + ss + ' seconds ';
    },1000)   
}