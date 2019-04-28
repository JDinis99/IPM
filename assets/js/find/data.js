const TYPE_NAMES  = ['Shop', 'Restaurant', 'Transport', 'Place', 'Util']
const TYPE_COLORS = ['green-alt', 'yellow-alt', 'blue-alt', 'purple-alt', 'red-alt']
const TYPE_ICONS  = ['fa-store', 'fa-utensils', 'fa-bus', 'fa-tree', 'fa-university']
const CATEGORIES  = ['shops', 'food', 'transports', 'places', 'utils', 'nearby']

const places = [
    {
        id: 0,
        name: 'O Cantinho do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 3.5,
        distance: 103,
        friends: 2,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 1,
        name: 'Arco do Cego',
        description: 'Um lugar para conviver com os amigos e passar a tarde.',
        type: 3,
        rating: 4.5,
        distance: 305,
        friends: 17,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Grande spot.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Muito bom.',
                rating: 4,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 2,
        name: 'O Cantinho do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 0.5,
        distance: 20,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 3,
        name: 'O Cantinho do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 3,
        distance: 123,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 4,
        name: 'O Cantinho do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 4,
        distance: 703,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 5,
        name: 'O Cantinho do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 2.5,
        distance: 403,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 6,
        name: 'O Cantinho do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 1.5,
        distance: 54,
        friends: 123,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 7,
        name: 'O Cantinho do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 5,
        distance: 1234,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 8,
        name: 'O Canth Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 1,
        rating: 3.5,
        distance: 1003,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 9,
        name: 'O Cantdo do Zé',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 3,
        rating: 3,
        distance: 132,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Oferece o melhor peixe que há no bairro.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não gostei.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    }
]

function createRatingHtml(rating) {
    let rating_num = Math.floor(rating)
    let remains = rating - rating_num
    let rating_html = ''
    let i
    for (i = 0; i < rating_num; i++) {
        rating_html += '<li><i class="fas fa-star"></i></li>'
    }

    if (remains > 0) {
        i++
        rating_html += '<li><i class="fas fa-star-half-alt"></i></li>'
    }

    for (i; i < 5; i++) {
        rating_html += '<li><i class="far fa-star"></i></li>'
    }

    return rating_html
}

function getCategoryId(category) {
    return CATEGORIES.indexOf(category)
}

export default {
    getPlace(id) {
        if(id < places.length && id >= 0)
            return places[id]
        return null
    },

    getTotalPages(places) {
        let len = places.length
        return Math.floor(len / 3) + (len % 3 != 0 ? 1 : 0)
    },

    getPlacesByCategory(category) {
        let type = getCategoryId(category)
        return places.filter((p) => p.type == type)
    },

    getType(place) {
        let id = place.type
        if (id < TYPE_COLORS.length && id >= 0)
            return {
                name: TYPE_NAMES[id],
                color: TYPE_COLORS[id],
                icon: TYPE_ICONS[id]
            }
        return null
    },

    createListPlaceHtml(place) {
        let id = place.id
        let name = place.name
        let type = this.getType(place)
        let friends = place.friends
        let distance = this.getDistance(place)
        let rating = place.rating
        let rating_html = createRatingHtml(rating)

        return `<a href="view.html?id=${id}">
                    <li class="list-item">
                        <div class="row">
                            <h1><i class="fas ${type.icon} ${type.color}"></i>${name}</h1>
                            <h2><i class="fas fa-walking"></i>${distance}</h2>
                        </div>
                        <div class="row">
                            <h2>${friends}<i class="fas fa-user-friends"></i></h2>
                            <ul class="stars yellow-alt">${rating_html}</ul>
                        </div>
                    </li>
                </a>`
    },

    getDistance(place) {
        let distance = place.distance
        if(distance < 1000)
            return distance + 'm'
        else
            return (distance / 1000) + 'km'
    },
    getReviews(place) {
        return place.reviews
    },

    createReviewHtml(review) {
        let name   = review.name
        let quote  = review.quote
        let rating = review.rating
        let avatar = review.avatar
        let rating_html = createRatingHtml(rating)

        return `<div class="c-slider__slide widget">
                    <div class="row">
                        <div class="left">
                            <img src="../assets/img/${avatar}" alt="" class="avatar">
                        </div>
                        <div class="right">
                            <h2 class="name">${name}</h2>
                            <p class="quote">${quote}</p>
                            <ul class="stars yellow-alt">${rating_html}</ul>
                        </div>
                    </div>
                </div>`
    }
}