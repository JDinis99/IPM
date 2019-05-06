$('#gps-map').attr('src', `../assets/img/gps/${getGPSImage(gps)}.png`)
$('#gps-distance').text(getGPSDistance(gps))

function gpsMove() {
    subGPSDistance(gps)
    $('#gps-map').attr('src', `../assets/img/gps/${getGPSImage(gps)}.png`)
    $('#gps-distance').text(getGPSDistance(gps))
    if(!hasGPSArrived(gps))
        setTimeout(gpsMove, 2000)
    else
        swal(
            'Arrived!',
            'Arrived at destination.',
            'success'
        ).then(() => {
            window.location = '../find'
        })
}

if (!hasGPSArrived(gps))
    setTimeout(gpsMove, 2000)
else
    swal(
        'Arrived!',
        'Arrived at destination.',
        'success'
    ).then(() => {
        window.location = '../find'
    })
