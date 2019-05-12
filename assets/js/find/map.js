let id = findGetParameter('id')

if (id == null)
    window.history.back()

let place = getPlace(id)

$('#gps-start').click(resetGPS)

if(hasReserve(place)) {
    $('#reserve-btn').css('display', 'block').click(() => {
        window.location = `reserve.html?id=${id}`
    })
}

if($('#find-map').length) {
    let i = Math.floor((Math.random() * 3) + 1)
    $('#find-map').attr('src', `../assets/img/map/paths/${i}.png`)
}