import data from './data.js'

let id = findGetParameter('id')

if (id == null)
    window.history.back()

let reserves = data.reserves
let place = data.getPlace(id)
let reserve = data.getReserve(id, reserves)

$('#reserve-name').text(place.name)
$('#reserve-people').text(data.getReservePeople(reserve))
$('#reserve-days').text(data.getReserveDay(reserve))
$('#reserve-hour').text(data.getReserveHour(reserve))
$('#reserve-minutes').text(data.getReserveMinutes(reserve))

$('#reserve-people-add').click(() => {
    data.addPeopleReserve(reserve)
    $('#reserve-people').text(data.getReservePeople(reserve))
})

$('#reserve-people-sub').click(() => {
    data.subPeopleReserve(reserve)
    $('#reserve-people').text(data.getReservePeople(reserve))
})

$('#reserve-hour-add').click(() => {
    data.addHourReserve(reserve)
    $('#reserve-hour').text(data.getReserveHour(reserve))
})

$('#reserve-hour-sub').click(() => {
    data.subHourReserve(reserve)
    $('#reserve-hour').text(data.getReserveHour(reserve))
})

$('#reserve-minutes-add').click(() => {
    data.addMinutesReserve(reserve)
    $('#reserve-minutes').text(data.getReserveMinutes(reserve))
})

$('#reserve-minutes-sub').click(() => {
    data.subMinutesReserve(reserve)
    $('#reserve-minutes').text(data.getReserveMinutes(reserve))
})

$('#reserve-day-add').click(() => {
    data.addDayReserve(reserve)
    $('#reserve-days').text(data.getReserveDay(reserve))
})

$('#reserve-day-sub').click(() => {
    data.subDayReserve(reserve)
    $('#reserve-days').text(data.getReserveDay(reserve))
})

$('#reserve-save').click(() => {
    swal({
        title: 'Confirm?',
        text: "Are you sure you want to make a reservation?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Discard'
    }).then((result) => {
        swal(
            'Success!',
            'Reservation made.',
            'success'
        ).then(() => {
            if(result)
                data.saveReserves()
            window.location = '../find'
        })
    }).catch(() => {

    })
})
