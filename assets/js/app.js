// direction = -1 -> left | direction = 1 -> right
function moveWidget(direction) {
    let ws = document.getElementById('widget-strip')
    let left = (parseInt(ws.style.left) + direction * 384/3) % 384
    if (left > 0)
        left -= 384
    ws.style.left = left + 'px'
}