import data from './data.js'

let id = findGetParameter('id')

if (id == null)
    window.history.back()

let place = data.getPlace(id)

$('#gps-start').click(data.resetGPS)

if(data.hasReserve(place)) {
    $('#reserve-btn').css('display', 'block').click(() => {
        window.location = `reserve.html?id=${id}`
    })

}