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
const STATE_FINISHED    = 3

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

let travel_data = {
    history: [
        {
            id: 1,
            startdate: '2019-05-18T15:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        },
        {
            id: 2,
            startdate: '2019-05-14T13:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        },
        {
            id: 3,
            startdate: '2019-05-17T16:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        },
        {
            id: 4,
            startdate: '2019-06-12T18:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        },
        {
            id: 5,
            startdate: '2019-03-12T15:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        },
        {
            id: 6,
            startdate: '2019-01-12T15:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        },
        {
            id: 7,
            startdate: '2019-08-12T15:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        },
        {
            id: 8,
            startdate: '2013-05-12T15:12:08.715Z',
            enddate: '2019-05-12T15:12:08.715Z',
            people: [ 1 ],
            stats: {
                steps: 2333,
                stops: 0
            }
        }
    ],
    state: STATE_FINISHED,
    current: {
        id: 9,
        startdate: '2019-05-12T15:12:08.715Z',
        enddate: '2019-05-12T15:12:08.715Z',
        people: [ 1, 4, 2 ],
        stats: {
            steps: 2333,
            stops: 0
        }
    }
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
                        <h1>${moment(travel.startdate).format("MMM Do YY")}</h1>
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
            //window.location.href = "../travel"
        })
    }).catch(() => {

    })
}

function pauseTravel(btn) {
    let text = travel_data.state != STATE_PAUSE ? 'Resume' : 'Pause'
    travel_data.state = travel_data.state == STATE_PAUSE ? STATE_STARTED : STATE_PAUSE
    $(btn).find('p').text(text)
    $(btn).toggleClass('paused')
    $(btn).find('i').toggleClass('fa-pause fa-hiking')
    saveTravelData()
}

function inviteAll() {
    FRIENDS.forEach((f) => inviteFriend(f))
}

function addFriend(name) {
    let friend = FRIENDS.find((f) => f.name == name)
    inviteFriend(friend)
}

function inviteFriend(friend) {
    if(!travel_data.current.people.includes(friend.id))
        travel_data.current.people.push(friend.id)
    saveTravelData()
    updateTravelUI()
}

function kickAll() {
    FRIENDS.forEach((f) => kickFriend(f))
}

function removeFriend(name) {
    let friend = FRIENDS.find((f) => f.name == name)
    kickFriend(friend)
}

function kickFriend(friend) {
    if(travel_data.current.people.includes(friend.id))
        travel_data.current.people = travel_data.current.people.filter((i) => i != friend.id)
    saveTravelData()
    updateTravelUI()
}

function finishTravel() {
    travel_data.history.push(travel_data.current)
    let id = travel_data.current.id

    travel_data.current = null
    travel_data.state = STATE_EMPTY

    window.location.href=`details.html?id=${id}`
}

function saveTravelData() {

}

function updateTravelUI() {
    $('#group-list').empty()

    if($('#travel-map').length) {
        let i = Math.floor((Math.random() * 3) + 1)
        if(travel_data.state == STATE_FINISHED)
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
}

function getTotalTravelPages() {
    let len = travel_data.history.length
    return Math.floor(len / 4) + (len % 4 != 0 ? 1 : 0)
}