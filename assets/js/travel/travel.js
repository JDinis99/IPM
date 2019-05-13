let travel_id = findGetParameter('id')

if(travel_data.state != STATE_EMPTY && $('#travel-index-page').length)
    window.location.href = 'start.html'
if(travel_data.state == STATE_EMPTY && $('#travel-start-page').length)
    window.location.href = '../travel'

if(travel_id == null && pageNeedsTravelId())
    window.history.back()

updateTravelUI()