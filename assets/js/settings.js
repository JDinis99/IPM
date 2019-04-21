const DEFAULT_ETA = 120 // in seconds

let current_state = JSON.parse(localStorage.getItem('current-state'))

let settings = JSON.parse(localStorage.getItem('settings'))
let temp_settings = JSON.parse(localStorage.getItem('settings'))

let advanced_settings = false

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

    let bpm_rate = Math.abs((current_state.bpm - settings.average_bpm) / settings.average_bpm)
    let oxygen_rate = Math.abs((current_state.oxygen - settings.average_oxygen) / settings.average_oxygen)

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
    
    if(current_state.alcohol < settings.max_alcohol / 2)
        accumulator += 5
    else if(current_state.alcohol < settings.max_alcohol)
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
    
    refresh_state()
}

function refresh_state() {
    current_state.style = get_health_style()
    localStorage.setItem('current-state', JSON.stringify(current_state))
}

function showSettings() {
    createSliders()
    updateSettingsView()
    let main = document.getElementsByTagName('main')[0]
    main.classList.add('blurred')

    let settings = document.getElementById('settings')
    settings.style.top = '0%'
    settings.style.opacity = '1'
}

function saveSettings() {
    if(JSON.stringify(settings) === JSON.stringify(temp_settings))
        hideSettings()
    else
        swal({
            title: 'Save settings?',
            text: "Do you want to save new settings?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Save',
            cancelButtonText: 'Discard'
        }).then((result) => {
            swal(
                'Saved!',
                'New settings saved.',
                'success'
            ).then(() => {
                if(result)
                    updateSettings()
                hideSettings()
            })
        }).catch(() => hideSettings())
}

function updateSettings() {
    calculateAdvancedSettings()
    localStorage.setItem('settings', JSON.stringify(temp_settings))
    settings = JSON.parse(localStorage.getItem('settings'))
    refresh_state()
}

function updateSettingsView() {
    let title = document.getElementById("settings-type")
    title.innerHTML = advanced_settings ? 'Advanced' : 'Basic'

    let strip = document.getElementById("settings-strip")

    if(advanced_settings)
        strip.classList.add('settings-advanced')
    else
        strip.classList.remove('settings-advanced')

}

function toggleSettingsType(btn) {
    btn.innerHTML = advanced_settings ? 'Show Advanced' : 'Show Basic'
    advanced_settings = !advanced_settings
    updateSettingsView()
}

function hideSettings() {
    let main = document.getElementsByTagName('main')[0]
    main.classList.remove('blurred')

    let settings = document.getElementById('settings')
    settings.style.top = '100%'
    settings.style.opacity = '0'
    destroySliders()
    temp_settings = JSON.parse(localStorage.getItem('settings'))
}

function destroySliders() {
    Array.from(document.getElementsByClassName('rangeSlider')).forEach((el) => {
        if(el.rangeSlider)
            el.rangeSlider.destroy()
    })
}

function createSliders() {
    setSelect(document.getElementsByClassName('sel__box--weight')[0].children[settings.weight])
    
    document.getElementById('settings-gender-value').checked = settings.gender

    Array.from(document.getElementsByClassName('rangeSlider-advanced')).forEach((el) => {
        rangeSlider.create(el, {
            polyfill: true,     // Boolean, if true, custom markup will be created
            rangeClass: 'rangeSlider',
            disabledClass: 'rangeSlider--disabled',
            fillClass: 'rangeSlider__fill',
            bufferClass: 'rangeSlider__buffer',
            handleClass: 'rangeSlider__handle',
            startEvent: ['mousedown', 'touchstart', 'pointerdown'],
            moveEvent: ['mousemove', 'touchmove', 'pointermove'],
            endEvent: ['mouseup', 'touchend', 'pointerup'],
            max: 150,
            vertical: true,    // Boolean, if true slider will be displayed in vertical orientation
            step: 0.01,         // Number, 1
            onInit: function () {
                if(el.id == 'settings-bpm-slider'){
                    this.value = settings.average_bpm
                    this.min = 40
                    this.max = 150
                    this.step = 1
                    document.getElementById('settings-bpm-value').innerHTML = this.value
                }
                else if(el.id == 'settings-oxygen-slider') {
                    this.value = settings.average_oxygen
                    this.min = 40
                    this.max = 100
                    this.step = 1
                    document.getElementById('settings-oxygen-value').innerHTML = this.value
                }
                else if(el.id == 'settings-alcohol-slider') {
                    this.value = settings.max_alcohol
                    this.min = 0.00
                    this.max = 17.00
                    this.step = 0.01
                    document.getElementById('settings-alcohol-value').innerHTML = this.value
                }
            },
            onSlide: function (position, value) {
                if(el.id == 'settings-bpm-slider'){
                    document.getElementById('settings-bpm-value').innerHTML = position
                    temp_settings.average_bpm = position
                }
                else if(el.id == 'settings-oxygen-slider') {
                    document.getElementById('settings-oxygen-value').innerHTML = position
                    temp_settings.average_oxygen = position
                }
                else if(el.id == 'settings-alcohol-slider') {
                    document.getElementById('settings-alcohol-value').innerHTML = position
                    temp_settings.max_alcohol = position
                }
            },
            onSlideEnd: function (position, value) {
                if(el.id == 'settings-bpm-slider'){
                    document.getElementById('settings-bpm-value').innerHTML = position
                    temp_settings.average_bpm = position
                }
                else if(el.id == 'settings-oxygen-slider') {
                    document.getElementById('settings-oxygen-value').innerHTML = position
                    temp_settings.average_oxygen = position
                }
                else if(el.id == 'settings-alcohol-slider') {
                    document.getElementById('settings-alcohol-value').innerHTML = position
                    temp_settings.max_alcohol = position
                }
            }
        });
    })

    let age_slider = document.getElementById('settings-age-slider')
    rangeSlider.create(age_slider, {
        polyfill: true,     // Boolean, if true, custom markup will be created
        rangeClass: 'rangeSlider',
        disabledClass: 'rangeSlider--disabled',
        fillClass: 'rangeSlider__fill',
        bufferClass: 'rangeSlider__buffer',
        handleClass: 'rangeSlider__handle',
        startEvent: ['mousedown', 'touchstart', 'pointerdown'],
        moveEvent: ['mousemove', 'touchmove', 'pointermove'],
        endEvent: ['mouseup', 'touchend', 'pointerup'],
        max: 70,
        min: 16,
        vertical: false,    // Boolean, if true slider will be displayed in vertical orientation
        step: 1,         // Number, 1
        onInit: function () {
            this.value = settings.age
            document.getElementById('settings-age-value').innerHTML = this.value
        },
        onSlide: function (position, value) {
            document.getElementById('settings-age-value').innerHTML = position
            temp_settings.age = position
        },
        onSlideEnd: function (position, value) {
            document.getElementById('settings-age-value').innerHTML = position
            temp_settings.age = position
        }
    });
}

document.getElementById('settings-gender-value').addEventListener('change', (event) => {
    temp_settings.gender = event.target.checked
})

function calculateAdvancedSettings() {
    if(temp_settings.weight != settings.weight || temp_settings.age != settings.age || temp_settings.gender != settings.gender) {
        if(temp_settings.average_bpm == settings.average_bpm)
            temp_settings.average_bpm = calcBpm(temp_settings.gender)
        if(temp_settings.average_oxygen == settings.average_oxygen)
            temp_settings.average_oxygen = calcOxygen(temp_settings.gender)
        if(temp_settings.max_alchohol == settings.max_alchohol)
            temp_settings.max_alchohol = calcAlcohol(temp_settings.gender)
    }
}

function calcBpm(gender) {
    let nbpm = 100
    nbpm -= temp_settings.age / 3
    nbpm -= temp_settings.weight * 1.3
    return Math.round(!gender ? nbpm : nbpm * 0.9) // male : female
}

function calcOxygen(gender) {
    let noxygen = 100
    noxygen -= (temp_settings.age - temp_settings.weight * 1.5) * 0.4
    return Math.round(!gender ? noxygen : noxygen * 1.1) // male : female
}

function calcAlcohol(gender) {
    let nalcohol = 0.2
    nalcohol += (temp_settings.weight * 10 / temp_settings.age) * 2.3
    return parseFloat((!gender ? nalcohol : nalcohol * 0.9).toFixed(2)) // male : female
}