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

if(localStorage.getItem('current-state') == undefined) {
    resetLocalStorage()
} else {
    updateHealthInfo()
    updateSOS()
}

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}


function resetLocalStorage() {
    let current_bpm = Math.floor((Math.random() * 4/5 + 1) * average_bpm) // random between average_bpm and average_bpm + 2/3 * average_bpm
    let current_oxygen = Math.floor((1 - Math.random() * 1/3) * average_oxygen) // random between average_bpm and average_bpm + 2/3 * average_bpm
    let current_alcohol = parseFloat((Math.random() * max_alcohol).toFixed(2)) // random between average_bpm and average_bpm + 2/3 * average_bpm
    
    update_state(current_bpm, current_oxygen, current_alcohol)
    updateHealthInfo()
    updateSOS()
    return current_state
}
