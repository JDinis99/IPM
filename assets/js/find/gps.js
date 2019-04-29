import data from './data.js'

let gps = data.gps

$('#gps-map').attr('src', `../assets/img/gps/${data.getGPSImage(gps)}.png`)
$('#gps-distance').text(data.getGPSDistance(gps))

function gpsMove() {
    data.subGPSDistance(gps)
    $('#gps-map').attr('src', `../assets/img/gps/${data.getGPSImage(gps)}.png`)
    $('#gps-distance').text(data.getGPSDistance(gps))
    if(!data.hasGPSArrived(gps))
        setTimeout(gpsMove, 2000)
    console.log(gps)
}

if (!data.hasGPSArrived(gps))
    setTimeout(gpsMove, 2000)
