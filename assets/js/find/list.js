import data from './data.js'

let category = findGetParameter('category')

if (category == null)
    window.history.back()

let places = data.getPlacesByCategory(category)
let places_list = $('#places-list')

let total_pages  = data.getTotalPages(places)
let current_page = total_pages > 0 ? 1 : 0
let cur_page = $('#current-page').text(current_page)
$('#total-pages').text(total_pages)

let left_btn = $('#left-btn')
let right_btn = $('#right-btn')

left_btn.click(() => movePage('left'))
right_btn.click(() => movePage('right'))

if(total_pages > 1)
    right_btn.css('display', 'inline')

function movePage(dir) {
    if (dir == 'left')
        current_page--
    else
        current_page++

    let left = -20 - (current_page - 1) * 216
    
    if(current_page == total_pages)
        right_btn.css('display', 'none')
    else
        right_btn.css('display', 'inline')

    if (current_page == 1)
        left_btn.css('display', 'none')
    else
        left_btn.css('display', 'inline')

    places_list.css('left', `${left}px`)
    cur_page.text(current_page)
}

function updateList() {
    if (sort.type != null) {
        places.sort((a, b) => {
            if (sort.type == 'distance')
                return a.distance - b.distance
            if (sort.type == 'friends')
                return a.friends - b.friends
            if (sort.type == 'rating')
                return a.rating - b.rating
        })
        sort.type = null
    }

    if(sort.order != null) {
        places.reverse()
        sort.order = null
    }


    places_list.empty()

    places.forEach((place) => {
        places_list.append(data.createListPlaceHtml(place))
    })

    if (places.length == 0)
        places_list.append('<p style="color:white">No places here</p>')
}

$('.sort-btn').click(() => {
    $('#sort-menu').toggleClass('active')
})

let active_sort = $('#sort-options li.active')
let active_order = $('#order-options li.active')

let sort = {
    type: 'distance',
    order: null
}

$('#sort-options li').click(function() {
    if (active_sort == $(this))
        return

    active_sort.toggleClass('active')
    active_sort = $(this)

    sort.type = active_sort.find('a').data('sort-type')
    active_sort.toggleClass('active')

    updateList()
})

$('#order-options li').click(function () {
    if (active_order == $(this))
        return

    active_order.toggleClass('active')
    active_order = $(this)

    sort.order = active_order.find('a').data('sort-order')
    active_order.toggleClass('active')

    updateList()
})

updateList()