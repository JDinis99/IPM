import data from './data.js'

let id = findGetParameter('id')

if (id == null)
    window.history.back()

let place = data.getPlace(id)
let type = data.getType(place)

let distance = data.getDistance(place)

let reviews = data.getReviews(place)

$('#place-name').text(place.name)

$('#place-image').attr('src', `../assets/img/${place.image}`)

$('#place-type-icon').addClass(type.icon + ' ' + type.color)
$('#place-type-name').text(type.name).addClass(type.color)

$('#place-rating').text(place.rating)

$('#place-description').text(place.description)
$('#place-friends').text(place.friends)
$('#place-distance').text(distance)

reviews.forEach((review) => {
    $('#widget-strip').append(data.createReviewHtml(review))
})

$('#map-btn').click(() => {
    window.location = `map.html?id=${id}`
})

const slider = HammerSlider(document.getElementById('review-slider'), {
    mouseDrag: true,
    slideShow: true,
    stopAfterInteraction: false
})

document.getElementById('next-btn').addEventListener('click', slider.next, false)
document.getElementById('prev-btn').addEventListener('click', slider.prev, false)