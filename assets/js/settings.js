const DEFAULT_ETA = 120 // in seconds

let average_bpm = 70
let average_oxygen = 80
let max_alcohol = 5

let current_state = JSON.parse(localStorage.getItem('current-state'))

const STYLES = {
    healthy: {
        className: 'waves-healthy',
        icon: 'fa-laugh-wink',
        info: 'You\'re looking healthy to me!',
        textcolor: '#45DE86',
    },

    warning: {
        className: 'waves-medium',
        info: 'You should be more careful.',
        icon: 'fa-frown-open',
        textcolor: '#fcffae',
    },

    danger: {
        className: 'waves-danger',
        info: 'You\'re not fine! Calling help!',
        icon: 'fa-ambulance',
        textcolor: '#f78b75',
    }
}

function get_health_style() {
    let accumulator = get_health_level()
    
    if(accumulator == 0)
        return STYLES.healthy
    else if(accumulator == 1)
        return STYLES.warning
    else
        return STYLES.danger
}

function get_health_level() {
    let accumulator = 0

    let bpm_rate = Math.abs((current_state.bpm - average_bpm) / average_bpm)
    let oxygen_rate = Math.abs((current_state.oxygen - average_oxygen) / average_oxygen)

    if(bpm_rate < 30 / 100)
        accumulator += 10
    else if(bpm_rate < 60 / 100)
        accumulator += 25
    else
        accumulator += 45

    if(oxygen_rate < 7 / 100)
        accumulator += 5
    else if(oxygen_rate < 14 / 100)
        accumulator += 10
    else
        accumulator += 20
    
    if(current_state.alcohol < max_alcohol / 2)
        accumulator += 5
    else if(current_state.alcohol < max_alcohol)
        accumulator += 15
    else
        accumulator += 35
    
    if(accumulator < 50)
        return 0
    else if(accumulator < 70)
        return 1
    else
        return 2
}

function should_sos() {
    return get_health_level() == 2
}

function update_state(current_bpm, current_oxygen, current_alcohol) {
    current_state.bpm = current_bpm
    current_state.oxygen = current_oxygen
    current_state.alcohol = current_alcohol

    let sos = should_sos()
    current_state.sos.pressed = sos

    current_state.sos.eta = sos ? DEFAULT_ETA : 0
    current_state.notifications = sos ? 1 : 0
    
    current_state.style = get_health_style()
    localStorage.setItem('current-state', JSON.stringify(current_state))
}