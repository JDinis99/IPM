import data from './data.js'

let today_reserves = data.getTodayReserves()
let reserves = data.reserves

today_reserves.forEach((r) => {
    addReserveNotification(r)
})

reserves.forEach((r) => {
    addReserveItemToMenu(r)
})

setTimeout(checkReserves, 1000)

function checkReserves() {
    let today = new Date()
    let h = today.getHours()
    let d = today.getDate()
    let m = today.getMinutes()

    reserves.forEach((r) => {
        if(r.day < d || r.hour < h && r.day == d || r.day == d && r.hour == h && r.minutes <= m)
            removeReserveNotificaton(r)
    })
    if(reserves.length > 0)
        setTimeout(checkReserves, 1000)
}

function createReserveNotificationHTML(reserve, htmlClass) {
    let id     = reserve.id
    let place  = data.getPlace(id)
    let type   = data.getType(place)

    let icon   = type.icon
    let color  = type.color
    let name   = place.name
    let people = reserve.people
    let time   = data.getReserveHour(reserve) + ':' + data.getReserveMinutes(reserve)
    if(htmlClass == 'reserve')
        time = 'Dia ' + reserve.day + ', ' + time
    return `<div class="${htmlClass}" id="reserve-${id}">
                <div class="main-info">
                    <i id="reserve-${id}-icon" class="fas reserve-icon ${icon} ${color}"></i>
                    <div class="sub-info">
                        <h3>${name}</h3>
                        <p>
                            <span id="reserve-${id}-people">${people}</span><i class="fas fa-users"></i>
                            <span id="reserve-${id}-time">${time}</span><i class="fas fa-clock"></i>
                        </p>
                    </div>
                </div>
                <div class="icons">
                    <button onclick="window.location = '../find/reserve.html?id=${id}'" class="btn-small-dark"><i class="fa fa-pencil"></i></button>
                </div>
            </div>`
}

function addReserveNotification(reserve) {
    $('#notifications').append(createReserveNotificationHTML(reserve, 'notification'))

    let val = JSON.parse(localStorage.getItem('current-state'))
    let notification_empty = document.getElementById('notifications-empty')
    let notification_btn = document.getElementById('notification-btn')

    if(val.notifications > 0 || today_reserves.length > 0) {
        notification_empty.style.display = 'none'
        notification_btn.classList.add('notification-bounce')
    }
    else {
        notification_empty.style.display = 'block'
        notification_btn.classList.remove('notification-bounce')
    }
}

function addReserveItemToMenu(reserve) {
    $('#reserves-empty').css('display', 'none')
    $('#reserves-container').append(createReserveNotificationHTML(reserve, 'reserve'))
}

function removeReserveItemToMenu(reserve) {
    let id = reserve.id
    $('#reserves-container').find(`#reserve-${id}`).remove()
    if(reserves.length <= 0)
        $('#reserves-empty').css('display', 'block')
}

function removeReserveNotificaton(reserve) {
    let id = reserve.id
    
    $('#notifications').find(`#reserve-${id}`).remove()
    
    reserves = reserves.filter((r) => r.id != id)
    today_reserves = today_reserves.filter((r) => r.id != id)
    data.saveNewReserves(reserves)
    
    let val = JSON.parse(localStorage.getItem('current-state'))
    let notification_empty = document.getElementById('notifications-empty')
    let notification_btn = document.getElementById('notification-btn')
    
    if(val.notifications > 0 || today_reserves.length > 0) {
        notification_empty.style.display = 'none'
        notification_btn.classList.add('notification-bounce')
    }
    else {
        notification_empty.style.display = 'block'
        notification_btn.classList.remove('notification-bounce')
    }
    removeReserveItemToMenu(reserve)
}
