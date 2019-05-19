let total_pages  = getTotalTravelPages()
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

    $('#travels-history').css('left', `${left}px`)
    cur_page.text(current_page)
}

function updateList() {
    $('#travels-history').empty()

    travel_data.history.forEach((travel) => {
        $('#travels-history').append(createListTravelHtml(travel))
    })

    if (travel_data.history.length == 0)
        $('#travels-history').append('<p style="color:white">No travels here</p>')
}

$('.sort-btn').click(() => {
    $('.sort-btn i').toggleClass('fa-sort-amount-down fa-sort-amount-up')
    travel_data.history.reverse()
    updateList()
})

updateList()