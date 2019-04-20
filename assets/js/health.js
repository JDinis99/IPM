let soscounter = 0
let sospressed = false

function startSOS(btn) {
    sospressed = true
    setTimeout(checkSOS, 100)
}

function checkSOS() {
    if(sospressed) {
        soscounter += 0.15
        if(sospressed == true && soscounter > 2.5) {
            if(current_state.sos.pressed == false) {
                current_state.sos.pressed = true
                current_state.sos.eta = DEFAULT_ETA
                current_state.notifications++
                localStorage.setItem('current-state', JSON.stringify(current_state))
            }

            window.location = 'sos.html'
        }
        setTimeout(checkSOS, 100)
    }
}

function stopSOS() {
    sospressed = false
    soscounter = 0
}

function cancelSOS() {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
            if (result) {
            swal(
                'Canceled!',
                'SOS request canceled.',
                'success'
            ).then(() => cancelSOSconfirm())
        }
    }).catch(swal.noop)
}

function cancelSOSconfirm() {
    sospressed = false
    soscounter = -1
    current_state.sos.pressed = true
    current_state.sos.eta = -1
    localStorage.setItem('current-state', JSON.stringify(current_state))
    updateSOS()
}

function updateHealthInfo() {
    let val = current_state
    let icon = document.getElementById('status-icon')
    let info = document.getElementById('status-info')
    let waves = document.getElementById('waves')
    let bpm = document.getElementById('bpm')
    let oxygen = document.getElementById('oxygen')
    let alcohol = document.getElementById('alcohol')

    if(icon) {
        icon.classList.remove(...icon.classList)
        icon.classList.add('fas')
        icon.classList.add(val.style.icon)
        icon.style.color = val.style.textcolor
    }

    if(info) {
        info.innerHTML = val.style.info
    }

    if(bpm) {
        bpm.innerHTML = val.bpm
    }

    if(oxygen) {
        oxygen.innerHTML = val.oxygen + '%'
    }

    if(alcohol) {
        alcohol.innerHTML = val.alcohol + '%'
    }
    
    if(waves) {
        waves.classList.remove(...waves.classList)
        waves.classList.add(val.style.className)
    }
}

function updateSOS() {
    let val = current_state
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
    } else if(val.sos.pressed && val.sos.eta == 0) {
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
    } else if (val.sos.pressed && val.sos.eta < 0) {
        if(eta)
            eta.innerHTML = ''
        Array.from(notification_eta).forEach((el) => {
            el.innerHTML = 'Canceled'
        })

        notification.style.display = 'none'
        val.sos.pressed = false
        val.sos.eta = 0
        val.notifications = val.notifications > 0 ? val.notifications - 1: 0
        localStorage.setItem('current-state', JSON.stringify(val))
    }
    updateNotifications()
}