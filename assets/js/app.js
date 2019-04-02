// direction = -1 -> left | direction = 1 -> right
function moveWidget(direction) {
    let ws = document.getElementById('widget-strip')
    let width = parseFloat(getComputedStyle(ws).width)
    let left = (parseFloat(ws.style.left) + direction * width/3) % width
    if (left > 0)
        left -= width
    ws.style.left = left + 'px'
}

function startSOS(btn) {
    btn.classList.add('sos-pressed')
    setTimeout(() => {
        if(btn.classList.contains('sos-pressed')) {
            window.location = 'sos.html'
        }
    }, 2500)
}

function stopSOS(btn) {
    btn.classList.remove('sos-pressed')
}

function startClock() {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m

    document.getElementById('clock-time').innerHTML = h + ':' + m

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    var weekday = days[today.getDay()]
    var day = today.getDate()
    var month = months[today.getMonth()]

    document.getElementById('clock-date').innerHTML = weekday + ', ' + day + ' ' + month

    setTimeout(startClock, 1000)
}