let notifications_count = JSON.parse(localStorage.getItem('current-state')).notifications

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
    if(notifications_count > 0) {
        $('#notifications-empty').css('display', 'none')
        $('#notification-btn').addClass('notification-bounce')
    } else {
        $('#notifications-empty').css('display', 'block')
        $('#notification-btn').removeClass('notification-bounce')
    }
}

