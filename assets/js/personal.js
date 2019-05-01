function showPersonal() {
    $('#menu').addClass('blurred')

    $('#personal').css('top', '0')
    $('#personal').css('opacity', '1')
}

function hidePersonal() {
    $('#menu').removeClass('blurred')

    $('#personal').css('top', '100%')
    $('#personal').css('opacity', '0')
}