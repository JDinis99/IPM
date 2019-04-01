// direction = -1 -> left | direction = 1 -> right
function moveWidget(direction) {
    let ws = document.getElementById('widget-strip')
    let width = parseFloat(getComputedStyle(ws).width)
    let left = (parseFloat(ws.style.left) + direction * width/3) % width
    if (left > 0)
        left -= width
    ws.style.left = left + 'px'
}