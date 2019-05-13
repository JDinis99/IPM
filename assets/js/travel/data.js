const FRIENDS = [
    {
        id: 1,
        name: 'José Marques',
        img: 'avatar.jpg'
    },
    {
        id: 2,
        name: 'Tiago Maria',
        img: 'avatar.jpg'
    },
    {
        id: 3,
        name: 'Pedro Lopes',
        img: 'avatar.jpg'
    },
    {
        id: 4,
        name: 'Pedro Telo',
        img: 'avatar.jpg'
    }
]

const STATE_EMPTY       = 0
const STATE_STARTED     = 1
const STATE_PAUSE       = 2

const BUTTONS = [
    {
        class: 'danger',
        icon: 'times',
        action: 'removeFriend'
    },
    {
        class: 'success',
        icon: 'plus',
        action: 'addFriend'
    },
    {
        class: 'info',
        icon: 'share',
        action: 'shareTravel'
    },
]

let travel_data

initializeTravelData()

function initializeTravelData() {
    let travel_data_default = {
        history: [],
        state: STATE_EMPTY,
        current: {
            id: 1,
            startdate: '',
            enddate: '',
            people: [],
            stats: {
                steps: 0,
                stops: 0
            }
        }
    }
    if(localStorage.getItem('travels') == undefined) {
        localStorage.setItem('travels', JSON.stringify(travel_data_default))
    }
    loadTravelData()
}

function isFriendInGroup(person) {
    return travel_data.current.people.includes(person.id)
}

function createListGroupHtml(person, button_type) {
    let button = BUTTONS[button_type]
    return `<li class="list-item">
                <div class="row">
                    <div class="left">
                        <img src="../assets/img/${person.img}" alt="avatar">
                        <h1>${person.name}</h1>
                    </div>
                    <button id="kick-person-${person.id}" onclick="${button.action}('${person.name}')"class="${button.class}"><i class="fas fa-${button.icon}"></i></button>
                </div>
            </li>`
}

function createListTravelHtml(travel) {
    return `<li class="list-item">
                <div class="row">
                    <div class="left">
                        <h1>${moment(travel.startdate).format("D/MM/YY - hh:mm")}</h1>
                    </div>
                    <a href="details.html?id=${travel.id}" class="info"><i class="fas fa-info"></i></a>
                </div>
            </li>`
}

function shareTravel(platform) {
    let verb
    if(platform.includes(' ')) // sharing with person
        verb = 'with'
    else
        verb = 'on'
    swal({
        title: 'Share?',
        text: `Are you sure you want to share ${verb} ${platform}?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="fas fa-check"></i>',
        cancelButtonText: '<i class="fas fa-trash"></i>'
    }).then(() => {
        swal(
            'Shared!',
            `Shared ${verb} ${platform}!`,
            'success'
        ).then(() => {

        })
    }).catch(() => {

    })
}

function startTravel() {
    travel_data.current.startdate = moment().format()
    travel_data.state = STATE_STARTED
    saveTravelData()
    window.location.href = "start.html"
}

function discardTravel(id) {
    swal({
        title: 'Discard?',
        text: `Are you sure you want to discard this travel?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="fas fa-check"></i>',
        cancelButtonText: '<i class="fas fa-trash"></i>'
    }).then(() => {
        swal(
            'Discarded!',
            `Discarded travel!`,
            'success'
        ).then(() => {
            travel_data.history = travel_data.history.filter((t) => t.id != id)
            saveTravelData()
            window.location.href = "../travel"
        })
    }).catch(() => {

    })
}

function pauseTravel(btn) {
    let text = travel_data.state != STATE_PAUSE ? 'Resume' : 'Pause'
    travel_data.state = travel_data.state == STATE_PAUSE ? STATE_STARTED : STATE_PAUSE
    if(travel_data.state == STATE_PAUSE)
        travel_data.current.stats.stops++

    $(btn).find('p').text(text)
    $(btn).toggleClass('paused')
    $(btn).find('i').toggleClass('fa-pause fa-hiking')

    saveTravelData()
}

function inviteAll() {
    swal({
        title: 'Invite?',
        text: `Are you sure you want to invite all friends?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="fas fa-check"></i>',
        cancelButtonText: '<i class="fas fa-trash"></i>'
    }).then(() => {
        swal(
            'Success!',
            `Invited all friends to group!`,
            'success'
        ).then(() => {
            FRIENDS.forEach((f) => inviteFriend(f))
        })
    }).catch(() => {

    })
}

function addFriend(name) {
    swal({
        title: 'Invite?',
        text: `Are you sure you want to invite ${name}?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="fas fa-check"></i>',
        cancelButtonText: '<i class="fas fa-trash"></i>'
    }).then(() => {
        swal(
            'Success!',
            `Invited ${name} to group!`,
            'success'
        ).then(() => {
            let friend = FRIENDS.find((f) => f.name == name)
            inviteFriend(friend)
        })
    }).catch(() => {

    })
}

function inviteFriend(friend) {
    if(!travel_data.current.people.includes(friend.id))
        travel_data.current.people.push(friend.id)
    saveTravelData()
    updateTravelUI()
}

function kickAll() {
    swal({
        title: 'Remove?',
        text: `Are you sure you want to remove all friends?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="fas fa-check"></i>',
        cancelButtonText: '<i class="fas fa-trash"></i>'
    }).then(() => {
        swal(
            'Success!',
            `Removed all friends from group!`,
            'success'
        ).then(() => {
            FRIENDS.forEach((f) => kickFriend(f))
        })
    }).catch(() => {

    })
}

function removeFriend(name) {
    swal({
        title: 'Remove?',
        text: `Are you sure you want to remove ${name}?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="fas fa-check"></i>',
        cancelButtonText: '<i class="fas fa-trash"></i>'
    }).then(() => {
        swal(
            'Success!',
            `Removed ${name} from group!`,
            'success'
        ).then(() => {
            let friend = FRIENDS.find((f) => f.name == name)
            kickFriend(friend)
        })
    }).catch(() => {

    })
}

function kickFriend(friend) {
    if(travel_data.current.people.includes(friend.id))
        travel_data.current.people = travel_data.current.people.filter((i) => i != friend.id)
    saveTravelData()
    updateTravelUI()
}

function genSteps(travel) {
    let i = Math.floor((Math.random() * 3) + 1)
    let seconds = moment(travel.enddate).diff(moment(travel.startdate), 'seconds')
    return Math.round(i * seconds)
}

function finishTravel() {
    travel_data.current.enddate = moment().format()
    travel_data.current.stats.steps = genSteps(travel_data.current)

    travel_data.history.push(travel_data.current)
    let id = travel_data.current.id

    travel_data.current = {
        id: travel_data.history.length + 1,
        startdate: '',
        enddate: '',
        people: [],
        stats: {
            steps: 0,
            stops: 0
        }
    }
    travel_data.state = STATE_EMPTY

    saveTravelData()

    window.location.href=`details.html?id=${id}`
}

function saveTravelData() {
    localStorage.setItem('travels', JSON.stringify(travel_data))
}

function loadTravelData() {
    travel_data = JSON.parse(localStorage.getItem('travels'))
}

function updateTravelUI() {
    $('#group-list').empty()

    if($('#travel-map').length) {
        let i = Math.floor((Math.random() * 3) + 1)
        if(findGetParameter('id') != null)
            $('#travel-map-img').attr('src', `../assets/img/map/paths/${i}.png`)
        else
            $('#travel-map-img').attr('src', `../assets/img/map/locations/${i}.png`)
    }
    
    if($('#travel-friends-list').length) {
        FRIENDS.forEach((p) => {
            $('#group-list').append(createListGroupHtml(p, 2))
        })
    }
    
    if($('#travel-group-list').length) {
        travel_data.current.people.forEach((i) => {
            $('#group-list').append(createListGroupHtml(FRIENDS[i-1], 0))
        })
    
        FRIENDS.forEach((p) => {
            if(!isFriendInGroup(p))
                $('#group-list').append(createListGroupHtml(p, 1))
        })
    }

    if($('#travel-stats-page').length) {
        let travel = travel_data.history.find((t) => t.id == findGetParameter('id'))

        $('#time-start').text(moment(travel.startdate).format('hh:mm'))
        $('#time-stop').text(moment(travel.enddate).format('hh:mm'))

        $('#travel-steps').text(travel.stats.steps)
        $('#travel-duration').text(getTravelDuration(travel))
        $('#travel-duration-units').text(getTravelDurationUnits(travel))
        $('#travel-distance').text(getTravelDistance(travel))
        $('#travel-distance-units').text(getTravelDistanceUnits(travel))
        $('#travel-stops').text(travel.stats.stops)
        $('#travel-velocity').text(getTravelVelocity(travel))
    }
}

function getTravelVelocity(travel) {
    return (Math.round(travel.stats.steps * 0.3) / moment(travel.enddate).diff(moment(travel.startdate), 'seconds')).toFixed(2)
}

function getTravelDuration(travel) {
    let seconds = moment(travel.enddate).diff(moment(travel.startdate), 'seconds')
    if(seconds < 60)
        return seconds
    else if(seconds < 3600)
        return fmtMSS(Math.round(seconds))
    else if(seconds <  86400)
        return fmtMSS(Math.round(seconds / 60))
    else
        return moment(travel.enddate).diff(moment(travel.startdate), 'days')
}

function getTravelDurationUnits(travel) {
    let seconds = moment(travel.enddate).diff(moment(travel.startdate), 'seconds')
    if(seconds < 60)
        return 'seconds'
    else if(seconds < 3600)
        return 'minutes'
    else if(seconds <  86400)
        return 'hours'
    else
        return 'days'
}

function getTravelDistance(travel) {
    let distance = Math.round(travel.stats.steps * 0.3)
    if(distance < 10000)
        return distance
    else
        return (distance / 1000).toFixed(2)
}

function getTravelDistanceUnits(travel) {
    let distance = Math.round(travel.stats.steps * 0.3)
    if(distance < 10000)
        return 'meters'
    else
        return 'kilometers'
}

function getTotalTravelPages() {
    let len = travel_data.history.length
    return Math.floor(len / 4) + (len % 4 != 0 ? 1 : 0)
}

function pageNeedsTravelId() {
    return $('#travel-stats-page').length || $('#travel-details-page').length; 
}