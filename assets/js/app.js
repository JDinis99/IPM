const vals = [
    {
        icon: 'fa-laugh-wink',
        info: 'You\'re looking healthy to me!',
        textcolor: '#45DE86',
        bpm: 72,
        alcohol: '0.02%',
        oxygen: '87%',
        className: 'waves-healthy',
        sos: {
            pressed: false,
            eta: 0
        },
        notifications: 0
    },
    {
        info: 'You should be more careful.',
        icon: 'fa-frown-open',
        textcolor: '#fcffae',
        bpm: 90,
        alcohol: '1.30%',
        oxygen: '70%',
        className: 'waves-medium',
        sos: {
            pressed: false,
            eta: 0
        },
        notifications: 0
    },
    {
        info: 'You\'re not fine! Calling help!',
        icon: 'fa-ambulance',
        textcolor: '#f78b75',
        bpm: 130,
        alcohol: '3.20%',
        oxygen: '50%',
        className: 'waves-danger',
        sos: {
            pressed: true,
            eta: 120 // seconds
        },
        notifications: 1
    }
]

let sospressed = false
let soscounter = 0

function startSOS(btn) {
    sospressed = true
    setTimeout(checkSOS, 100)
}

function checkSOS() {
    if(sospressed) {
        soscounter += 0.15
        if(sospressed == true && soscounter > 2.7) {
            let val = JSON.parse(localStorage.getItem('current-state'))
            if(val.sos.pressed == false) {
                val.sos.pressed = true
                val.sos.eta = 120
                val.notifications++
                updateNotifications()
                localStorage.setItem('current-state', JSON.stringify(val))
            }

            window.location = 'sos.html'
        }
        setTimeout(checkSOS, 100)
    }
}

function stopSOS(btn) {
    sospressed = false
    soscounter = 0
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

function updateHealthInfo() {
    let val = JSON.parse(localStorage.getItem('current-state'))
    let icon = document.getElementById('status-icon')
    let info = document.getElementById('status-info')
    let waves = document.getElementById('waves')
    let bpm = document.getElementById('bpm')
    let oxygen = document.getElementById('oxygen')
    let alcohol = document.getElementById('alcohol')

    if(icon) {
        icon.classList.remove(...icon.classList)
        icon.classList.add('fas')
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
    
    if(waves) {
        waves.classList.remove(...waves.classList)
        waves.classList.add(val.className)
    }
}

function resetLocalStorage() {
    let i = Math.floor(Math.random() * 3)
    localStorage.setItem('current-state', JSON.stringify(vals[i]))
    updateHealthInfo()
    updateSOS()
}

if(document.getElementById('hammer-slider')) {
    const slider = HammerSlider(document.getElementById('hammer-slider'), {
        mouseDrag: true,
        slideShow: true,
        stopAfterInteraction: false
    })
    
    document.getElementById('next-btn').addEventListener('click', slider.next, false)
    document.getElementById('prev-btn').addEventListener('click', slider.prev, false)
}

if(localStorage.getItem('current-state') == undefined) {
    resetLocalStorage()
} else {
    updateSOS()
}

function updateSOS() {
    let val = JSON.parse(localStorage.getItem('current-state'))
    let notification = document.getElementById('sos-notification')
    let eta = document.getElementById('sos-notification-eta-desc')
    let notification_eta = document.getElementsByClassName('sos-notification-eta')

    if(val.sos.pressed && val.sos.eta > 0) {
        if(eta)
            eta.innerHTML = 'Arriving in'
        notification.style.display = 'flex'
        val.sos.eta--

        Array.from(notification_eta).forEach((el) => {
            el.innerHTML = fmtMSS(val.sos.eta)
        })

        localStorage.setItem('current-state', JSON.stringify(val))
        setTimeout(updateSOS, 1000)
    } else if(val.sos.pressed) {
        if(eta)
            eta.innerHTML = ''
        Array.from(notification_eta).forEach((el) => {
            el.innerHTML = 'Arrived'
        })

        notification.style.display = 'none'
        val.sos.pressed = false
        val.sos.eta = 0
        val.notifications--
        localStorage.setItem('current-state', JSON.stringify(val))
    }
    updateNotifications()
}

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

function showNotifications() {
    let main = document.getElementsByTagName('main')[0]
    main.classList.add('blurred')

    let notifications = document.getElementById('notifications')
    notifications.style.top = '0%'
    notifications.style.opacity = '1'
}

function hideNotifications() {
    let main = document.getElementsByTagName('main')[0]
    main.classList.remove('blurred')

    let notifications = document.getElementById('notifications')
    notifications.style.top = '100%'
    notifications.style.opacity = '0'
}

function updateNotifications() {
    let val = JSON.parse(localStorage.getItem('current-state'))
    let notification_empty = document.getElementById('notifications-empty')
    let notification_btn = document.getElementById('notification-btn')

    if(val.notifications > 0) {
        notification_empty.style.display = 'none'
        notification_btn.classList.add('notification-bounce')
    }
    else {
        notification_empty.style.display = 'block'
        notification_btn.classList.remove('notification-bounce')
    }
}