var div  = document.getElementById('tom');
function time() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById('tom').innerHTML = h + ":" + m + ":" + s;
}
setInterval(time, 100);