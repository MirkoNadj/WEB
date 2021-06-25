var x = 0;
var y = 0;

function placePlayerOnField(e) {
    x = e.clientX - 35 + 'px';
    y = e.clientY - 35 + 'px';
    console.log(x,y);
    document.getElementById('player').style.left = x;
    document.getElementById('player').style.top = y;
}

var field = document.getElementById('field');

field.addEventListener('click', placePlayerOnField);