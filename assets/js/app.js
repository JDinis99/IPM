const vals = [
    {
        icon: 'fa-laugh-wink',
        info: 'You\'re looking healthy to me!',
        top: '80%',
        color: '#45DE86',
        textcolor: '#45DE86',
        bpm: 72,
        alcohol: '0.02%',
        oxygen: '87%'
    },
    {
        info: 'You should be more careful.',
        icon: 'fa-frown-open',
        top: '45%',
        color: '#e8c34f',
        textcolor: '#fcffae',
        bpm: 90,
        alcohol: '1.30%',
        oxygen: '70%'
    },
    {
        info: 'You\'re not fine! Calling help!',
        icon: 'fa-ambulance',
        top: '25%',
        color: '#b90808',
        textcolor: '#f78b75',
        bpm: 130,
        alcohol: '3.20%',
        oxygen: '50%'
    }
]

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

function randomizeHealthInfo() {
    let i = Math.floor(Math.random() * 3)
    let val = vals[i]
    let icon = document.getElementById('status-icon')
    let info = document.getElementById('status-info')
    let waves = document.getElementsByClassName('wave')
    let bpm = document.getElementById('bpm')
    let oxygen = document.getElementById('oxygen')
    let alcohol = document.getElementById('alcohol')

    if(icon) {
        icon.classList.add(val.icon)
        icon.style.color = val.textcolor
    }

    if(info) {
        info.innerHTML = val.info
    }

    if(bpm) {
        bpm.innerHTML = val.bpm
    }

    if(oxygen) {
        oxygen.innerHTML = val.oxygen
    }

    if(alcohol) {
        alcohol.innerHTML = val.alcohol
    }
    
    Array.from(waves).forEach(wave => {
        wave.style.top = val.top
        wave.style.background = val.color
    })
}
