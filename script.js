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
            timeDiv.textContent = 'END OF TIME'
        }
    }, 1000)
}
//why doesnt it clear out at 0

timerButton.addEventListener('click', setTime)


























const quizQuestions = [
    {
        numb: 1,
        que: 'Commonly used data types do NOT include:',
        answer: 'alerts',
        options: [
            'strings',
            'booleans',
            'alerts',
            'numbers'
        ]
    },
    {
        numb: 2,
        que: 'A very useful tool during development are debugging for printing content to the debugger:',
        answer: 'console.log',
        options: [
            'javascript',
            'terminal bash',
            'console.log',
            'for loops'
        ]
    },
    {
        numb: 3,
        que: 'A condition in an if/else statement is enclosed with:',
        answer: 'parentheses',
        options: [
            'quotes',
            'curly brackets',
            'parentheses',
            'square brackets'
        ]
    },
    {
        numb: 4,
        que: 'String values must be enclosed within ____ when being assigned to variables:',
        answer: 'quotes',
        options: [
            'commas',
            'curly brackets',
            'quotes',
            'parentheses'
        ]
    },
    {
        numb: 5,
        que: 'Arrays in JavaScript can be used to store:',
        answer: 'all of the above',
        options: [
            'numbers and strings',
            'booleans',
            'other arrays',
            'all of the above'
        ]
    }
]