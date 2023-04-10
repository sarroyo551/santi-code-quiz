//timerbutton should start quiz and shift to a 60 second counter
let timerButton = document.querySelector('#timer-button')
let timeDiv = document.querySelector('#timeDiv')
let secondsLeft = 60;

//include validation if question was answered right or wrong
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeDiv.textContent = secondsLeft + ' Seconds left'
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

timerButton.addEventListener('click', setTime)