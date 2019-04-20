
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
