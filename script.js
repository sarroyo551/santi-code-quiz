//timerbutton should start quiz and shift to a 60 second counter
let timerButton = document.querySelector('#timer-button')
let timeDiv = document.querySelector('#timeDiv')
let secondsLeft = 60;
let questions = document.querySelector('.questions')
let answerOne = document.querySelector('.answerOne')
let answerTwo = document.querySelector('.answerTwo')
let answerThree = document.querySelector('.answerThree')
let answerFour = document.querySelector('.answerFour')
let listOfAnswers = document.querySelector('.listOfAnswers')

//include validation if question was answered right or wrong
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timerButton.textContent = secondsLeft + ' Seconds left'
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            timerButton.textContent = 'END OF TIME'
        }
    }, 1000)
}
//why doesnt it stop at 0

function startQuiz () {
    console.log(quizQuestions)
    for (let i = 0; i < quizQuestions[0].numb; i++) {
        questions.textContent = quizQuestions[0].que;
        //how do i loop over all the questions if they are in their own objects
    }

    setTime()
}

//make a question generator?? < TC advice

timerButton.addEventListener('click', startQuiz)



























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