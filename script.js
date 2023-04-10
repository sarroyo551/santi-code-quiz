//timerbutton should start quiz and shift to a 60 second counter
let timerButton = document.querySelector('#timer-button')
let timeDiv = document.querySelector('#timeDiv')
let secondsLeft = 60;
let currentIndex = 0;
let questions = document.querySelector('.questions')
let answerOne = document.querySelector('.answerOne')
let answerTwo = document.querySelector('.answerTwo')
let answerThree = document.querySelector('.answerThree')
let answerFour = document.querySelector('.answerFour')
let listOfAnswers = document.querySelector('.listOfAnswers')
let allAnswers = document.querySelectorAll('.answer')

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

function setAnswers(options) {
    console.log(allAnswers)
    console.log(options)
    for (let i = 0; i < 4; i++) {
        allAnswers[i].textContent = options[i];
        // debugger
    }
}

function addListeners () {
    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].addEventListener('click', nextQuestion)
    }
}

function nextQuestion(e) {
    console.log(e.target)
}

function startQuiz () {
    console.log(quizQuestions.length);
    questions.textContent = quizQuestions[currentIndex].que
    listOfAnswers.classList.remove('hidden')
    setTime()
    setAnswers(quizQuestions[currentIndex].options)
}

addListeners()//talk over again

timerButton.addEventListener('click', startQuiz)



// const onlyQues = {
//     que: 'Commonly used data types do NOT include:',
//     que: 'A very useful tool during development are debugging for printing content to the debugger:',
//     que: 'A condition in an if/else statement is enclosed with:',
//     que: 'String values must be enclosed within ____ when being assigned to variables:',
//     que: 'Arrays in JavaScript can be used to store:'
// }

// const onlyQues = [
//     'Commonly used data types do NOT include:',
//     'A very useful tool during development are debugging for printing content to the debugger:',
//     'A condition in an if/else statement is enclosed with:',
//     'String values must be enclosed within ____ when being assigned to variables:',
//     'Arrays in JavaScript can be used to store:'
// ]



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