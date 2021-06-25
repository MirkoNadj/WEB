var isOn = false;
function changeBackgroundColor () {
    var toggleDivColor = document.getElementById('background-div');
    toggleDivColor.classList.toggle('bkggreen')
}

/* Advance
● Adapt basic example
● On button click, automatically toggle background
● Have a button to cancel automatic toggle  */

function changeBackgroundColorAuto () {
    var toggleDivColor = document.getElementById('background-div2');
    toggleDivColor.classList.toggle('bkggreen');
}

function automaticToggleColor(int) {
    setInterval(changeBackgroundColorAuto, int);
}

function switchAutoToggle() {
    if (isOn) {
        automaticToggleColor(1000)
        isOn = false;    
    }
    else {
        changeBackgroundColorAuto ()
        isOn = false;   
    }
}

