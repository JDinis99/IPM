let id = findGetParameter('id')

if (id == null)
    window.history.back()

let place = getPlace(id)
let reserve = getReserve(id, reserves)

$('#reserve-name').text(place.name)
$('#reserve-people').text(getReservePeople(reserve))
$('#reserve-days').text(getReserveDay(reserve))
$('#reserve-hour').text(getReserveHour(reserve))
$('#reserve-minutes').text(getReserveMinutes(reserve))

$('#reserve-people-add').click(() => {
    addPeopleReserve(reserve)
    $('#reserve-people').text(getReservePeople(reserve))
})

$('#reserve-people-sub').click(() => {
    subPeopleReserve(reserve)
    $('#reserve-people').text(getReservePeople(reserve))
})

$('#reserve-hour-add').click(() => {
    addHourReserve(reserve)
    $('#reserve-hour').text(getReserveHour(reserve))
})

$('#reserve-hour-sub').click(() => {
    subHourReserve(reserve)
    $('#reserve-hour').text(getReserveHour(reserve))
})

$('#reserve-minutes-add').click(() => {
    addMinutesReserve(reserve)
    $('#reserve-minutes').text(getReserveMinutes(reserve))
})

$('#reserve-minutes-sub').click(() => {
    subMinutesReserve(reserve)
    $('#reserve-minutes').text(getReserveMinutes(reserve))
})

$('#reserve-day-add').click(() => {
    addDayReserve(reserve)
    $('#reserve-days').text(getReserveDay(reserve))
})

$('#reserve-day-sub').click(() => {
    subDayReserve(reserve)
    $('#reserve-days').text(getReserveDay(reserve))
})

$('#reserve-save').click(() => {
    swal({
        title: 'Confirm?',
        text: "Are you sure you want to make a reservation?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="fas fa-check"></i>',
        cancelButtonText: '<i class="fas fa-trash"></i>'
    }).then((result) => {
        swal(
            'Success!',
            'Reservation made.',
            'success'
        ).then(() => {
            if(result)
                saveReserve(reserve)
            window.location = '../find'
        })
    }).catch(() => {

    })
})
