let id = findGetParameter('id')

if (id == null)
    window.history.back()

let place = getPlace(id)
let type = getType(place)

let distance = getDistance(place)

let reviews = getReviews(place)

$('#place-name').text(place.name)

$('#place-image').attr('src', `../assets/img/${place.image}`)

$('#place-type-icon').addClass(type.icon + ' ' + type.color)
$('#place-type-name').text(type.name).addClass(type.color)

$('#place-rating').text(place.rating)

$('#place-description').text(place.description)
$('#place-friends').text(place.friends)
$('#place-distance').text(distance)

reviews.forEach((review) => {
    $('#widget-strip').append(createReviewHtml(review))
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