const CURRENT_VERSION = "1.3.4"

if(localStorage.getItem('version') != CURRENT_VERSION) {
    localStorage.setItem('version', CURRENT_VERSION)
    initSettings()
    localStorage.setItem('reserves', JSON.stringify([]))
    resetLocalStorage()
    resetTravelData()
    console.log('Updating to version ' + CURRENT_VERSION)
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

if(document.getElementById('hammer-slider')) {
    const slider = HammerSlider(document.getElementById('hammer-slider'), {
        mouseDrag: true,
        slideShow: true,
        stopAfterInteraction: false
    })
    
    document.getElementById('next-btn').addEventListener('click', slider.next, false)
    document.getElementById('prev-btn').addEventListener('click', slider.prev, false)
}

if(current_state == undefined) {
    resetLocalStorage()
}
updateHealthInfo()
updateSOS()

function resetLocalStorage() {
    let current_bpm = Math.floor((Math.random() * 4/5 + 1) * settings.average_bpm) // random between average_bpm and average_bpm + 2/3 * average_bpm
    let current_oxygen = Math.floor((1 - Math.random() * 1/3) * settings.average_oxygen) // random between average_bpm and average_bpm + 2/3 * average_bpm
    let current_alcohol = parseFloat((Math.random() * settings.max_alcohol).toFixed(2)) // random between average_bpm and average_bpm + 2/3 * average_bpm

    current_state = {
        bpm: current_bpm,
        oxygen: current_oxygen,
        alcohol: current_alcohol,
        sos: {
            pressed: false,
            eta: 0
        },
        notifications: 0,
    }
    current_state.style = get_health_style()
    localStorage.setItem('current-state', JSON.stringify(current_state))

    update_state(current_bpm, current_oxygen, current_alcohol)
    updateHealthInfo()
    updateSOS()
    return current_state
}
