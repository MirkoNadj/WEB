posX = 0;
function moveGround () {
    var ground = document.getElementById('ground');
    setInterval(move, 100)
    function move() {
        ground.style.backgroundPositionX = posX + 'px';
        posX--;
    }
}

moveGround();








/*function print () {
    console.log('neeeestoo');
}
var ground = document.getElementById('ground');
ground.addEventListener('keydown', print())*/
