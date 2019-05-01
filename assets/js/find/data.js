const TYPE_NAMES  = ['Shop', 'Restaurant', 'Transport', 'Place', 'Util']
const RESERVES    = [false, true, true, false, false]
const TYPE_COLORS = ['green-alt', 'yellow-alt', 'blue-alt', 'purple-alt', 'red-alt']
const TYPE_ICONS  = ['fa-store', 'fa-utensils', 'fa-bus', 'fa-tree', 'fa-university']
const CATEGORIES  = ['shops', 'food', 'transports', 'places', 'utils', 'nearby']

const GPS_IMAGES = ['gps_1', 'gps_2', 'gps_3', 'gps_4', 'gps_5', 'gps_6', 'gps_7', 'gps_8']

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
        rating: 5,
        distance: 69,
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
        name: 'Boa-Bao',
        description: 'O Boa-Bao – uma porta de embarque para Oriente. ',
        type: 1,
        rating: 4.9,
        distance: 50,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Muito Saboroso.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'Tiago Fonseca',
                quote: 'Bom mas muito caro.',
                rating: 3,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 3,
        name: 'Jamie\'s Italian',
        description: 'Peritos em comida italiana.',
        type: 1,
        rating: 3,
        distance: 123,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Até apanhei sotaque.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'João Dinis',
                quote: 'Zona muito bonita e boa comida.',
                rating: 4,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 4,
        name: 'Ground Burger',
        description: 'Hamburgueria Americana.',
        type: 1,
        rating: 4,
        distance: 703,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Melhores hamburgers que já comi.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'João Soares',
                quote: 'Ganhei diabetes.',
                rating: 1,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 5,
        name: 'Cantina do IST',
        description: 'O mais barato possivél.',
        type: 1,
        rating: 2.5,
        distance: 403,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Muito boa opção para estudantes.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Não sei o que comi, mas era barato.',
                rating: 3,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 6,
        name: 'Metro Odivelas',
        description: 'Fim da linha amarela.',
        type: 2,
        rating: 2.5,
        distance: 54,
        friends: 123,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Foi muito rápido.',
                rating: 5,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 7,
        name: 'Metro Saldanha',
        description: 'Convergência da linha amarela e vermelha.',
        type: 2,
        rating: 3.5,
        distance: 1234,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Escadas rolantes nunca funcionam ao mesmo tempo.',
                rating: 0.5,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 8,
        name: 'Aeroporto',
        description: 'Aeroporto da capital de Portugal.',
        type: 2,
        rating: 3.5,
        distance: 1003,
        friends: 0,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Grande e seguro.',
                rating: 5,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 9,
        name: 'Igreja S. Roque',
        description: 'Igreja do sec XV.',
        type: 3,
        rating: 3,
        distance: 232,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Bonita e com um ar antigo.',
                rating: 5,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 10,
        name: 'Museu do Coche',
        description: 'Museu nacional dos coches',
        type: 3,
        rating: 4,
        distance: 452,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Adorei, cheio de coches lindos.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Museu pequeno e sem grande variedade.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 11,
        name: 'Panteão',
        description: 'Somos um restaurante familiar dedicado à comida mediterrânea.',
        type: 3,
        rating: 4.5,
        distance: 412,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Visita imperdível!',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'OS HERÓIS MORAM LÁ.',
                rating: 4,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 12,
        name: 'Centro Colombo',
        description: 'Centro comercial Colombo.',
        type: 4,
        rating: 5,
        distance: 325,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'O melhor de Lisboa.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Muita confusão.',
                rating: 2,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 13,
        name: 'Mercado Ourique',
        description: 'Mercado tradicional de Campo de Ourique',
        type: 4,
        rating: 2.5,
        distance: 60,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Delicioso!!!!.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Cheio de variedade.',
                rating: 4,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 14,
        name: 'Mercado Ribeira',
        description: 'Mercado tradicional da Ribeira.',
        type: 4,
        rating: 4,
        distance: 45,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'O mundo num mercado.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'José Pires',
                quote: 'Um bom sitio para comer e beber.',
                rating: 3,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 15,
        name: 'Bertrand',
        description: 'Livraria mais antiga do país.',
        type: 0,
        rating: 3,
        distance: 77,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Livraria histórica.',
                rating: 5,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 16,
        name: 'O Peixe Luso',
        description: 'O Mundo Fantástico da Sardinha Portuguesa.',
        type: 0,
        rating: 3,
        distance: 666,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Muito interessante.',
                rating: 5,
                avatar: 'avatar.jpg'
            },
            {
                name: 'António Marques',
                quote: 'Não sei a razão de isto existir.',
                rating: 1,
                avatar: 'avatar.jpg'
            }
        ]
    },
    {
        id: 17,
        name: 'Cerâmicas Luso',
        description: 'Lógica tradicional de cerâmica.',
        type: 0,
        rating: 3,
        distance: 132,
        friends: 5,
        image: 'restaurant-bg.jpg',
        reviews: [
            {
                name: 'Pinguim Meistre',
                quote: 'Fazem peças à medida.',
                rating: 5,
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

function createGPS() {
    let distance = 0
    while (distance < 50)
        distance = Math.floor(Math.floor(Math.random() * 40) * (Math.random() + 100))
    
    let gps = {
        distance: distance,
        image: 0,
        sub: distance / 8
    }

    localStorage.setItem('gps', JSON.stringify(gps))
    return gps
}



function getDistanceText(distance) {
    if (distance < 10000)
        return Math.floor(distance) + 'm'
    else
        return Math.floor(distance / 1000) + 'km'
}

function createReserve(id, reserves) {
    let reserve = findReserve(id, reserves)
    console.log(reserve)
    if(reserve == undefined) {
        let today = new Date()
        let h = today.getHours()
        let m = today.getMinutes()
        reserve = {
            id: id,
            people: 1,
            hour: h,
            minutes: m
        }
        reserves.push(reserve)
        localStorage.setItem('reserves', JSON.stringify(reserves))
    }

    return reserve
}

function findReserve(id, reserves) {
    return reserves.find((r) => r.id == id)
}

function createReserves() {
    let reserves = []

    localStorage.setItem('reserves', JSON.stringify(reserves))
    return reserves
}

function updateReserves(reserves) {
    localStorage.setItem('reserves', JSON.stringify(reserves))
}

export default {
    getPlace(id) {
        if(id < places.length && id >= 0)
            return places[id]
        return null
    },

    gps: localStorage.getItem('gps') != undefined ? JSON.parse(localStorage.getItem('gps')) : createGPS(),

    reserves: localStorage.getItem('reserves') != undefined ? JSON.parse(localStorage.getItem('reserves')) : createReserves(),

    getGPSImage(gps) {
        return GPS_IMAGES[gps.image]
    },
    
    getReserve(id, reserves) {
        return createReserve(id, reserves)
    },

    resetGPS() {
        return createGPS()
    },

    hasReserve(place) {
        return RESERVES[place.type]
    },

    addPeopleReserve(reserve) {
        reserve.people++
    },

    subPeopleReserve(reserve) {
        reserve.people--
    },

    addHourReserve(reserve) {
        reserve.hour++
        reserve.hour = reserve.hour % 24
    },

    subHourReserve(reserve) {
        reserve.hour--
        if(reserve.hour < 0)
            reserve.hour = 23
        reserve.hour = reserve.hour % 24
    },

    addMinutesReserve(reserve) {
        reserve.minutes++
        reserve.minutes = reserve.minutes % 60
    },

    subMinutesReserve(reserve) {
        reserve.minutes--
        if(reserve.minutes < 0)
            reserve.minutes = 59
        reserve.minutes = reserve.minutes % 60
    },

    getReserveMinutes(reserve) {
        let m = reserve.minutes
        return m < 10 ? "0" + m : m
    },

    getReserveHour(reserve) {
        let h = reserve.hour
        return h < 10 ? "0" + h : h
    },

    getGPSDistance(gps) {
        let text = getDistanceText(gps.distance)
        return gps.distance == 0 ? 'Arrived' : text
    },

    subGPSDistance(gps) {
        gps.distance -= gps.sub
        gps.distance = gps.distance < 0 ? 0 : gps.distance
        if (gps.image < 7)
            gps.image++
        localStorage.setItem('gps', JSON.stringify(gps))
    },

    saveReserves() {
        updateReserves(this.reserves)
    },

    hasGPSArrived(gps) {
        return gps.image == 7 && gps.distance == 0
    },

    getTotalPages(places) {
        let len = places.length
        return Math.floor(len / 3) + (len % 3 != 0 ? 1 : 0)
    },

    getPlacesByCategory(category) {
        if (category == 'nearby')
            return places
        
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
        return getDistanceText(place.distance)
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