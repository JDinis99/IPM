let today_reserves = getTodayReserves()

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
    let place  = getPlace(id)
    let type   = getType(place)

    let icon   = type.icon
    let color  = type.color
    let name   = place.name
    let people = reserve.people
    let time   = getReserveHour(reserve) + ':' + getReserveMinutes(reserve)
    let url    = `find/reserve.html?id=${id}`
    if(htmlClass == 'reserve') {
        time = 'Dia ' + reserve.day + ', ' + time
    }
    if(window.location.pathname.split('/').filter((s) => s != "").length > 2) {
        url = '../' + url
    }
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
                    <button onclick="window.location = '${url}'" class="btn-small-dark"><i class="fa fa-pencil"></i></button>
                </div>
            </div>`
}

function addReserveNotification(reserve) {
    $('#notifications').append(createReserveNotificationHTML(reserve, 'notification'))
    notifications_count++
    updateNotifications()
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
    updateReserves()
    
    notifications_count--
    notifications_count = notifications_count < 0 ? 0 : notifications_count

    updateNotifications()

    removeReserveItemToMenu(reserve)
}
