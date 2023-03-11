
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is Quinten Tarintino's best film?",
        answer1: "Inglourious Basters",
        answer2: "Pulp Fiction",
        answer3: "Django Unchained",
        answer4: "The H8ful Eight",
        answer: 4
    },
    {
        question: "Which actor portrayed the best Batman?",
        answer1: "Michael Keaton",
        answer2: "Christian Bale",
        answer3: "Robert Patterson",
        answer4: "George Clooney",
        answer: 2
    },
    {
        question: "In the Marvel Cinematic Universe, how many Infinity Stones are there?",
        answer1: "4",
        answer2: "7",
        answer3: "5",
        answer4: "6",
        answer: 4
    },
    {
        question: "Which actor was the best Spiderman?",
        answer1: "Tobey Maguire",
        answer2: "Andrew Garfield",
        answer3: "Tom Holland",
        answer4: "They were all the best depiction of the masked web slinger",
        answer: 1
    },
    {
        question: "How many Scream movies are there?",
        answer1: "5",
        answer2: "6",
        answer3: "7",
        answer4: "8",
        answer: 2
    },
    {
        question: "What is the best Star wars movie?",
        answer1:"A New Hope",
        answer2:"Attack of the Clones",
        answer3:"Revenge of the Sith",
        answer4:"The Force Awakens",
        answer: 3
    },
    {
        question: "What is Jim Carreys best film?",
        answer1:"The Truman Show",
        answer2:"The Mask",
        answer3:"Dumb and Dumber",
        answer4:"Yes Man",
        answer: 2
    },
    {
        question: "What is the best tv show that has ever aired?",
        answer1: "Atlanta",
        answer2: "Heroes",
        answer3: "Greys Anatomy",
        answer4: "Rick and Morty",
        answer: 1
    },
    {
        question: "What year did the Titanic come out?",
        answer1: "1995",
        answer2: "1998",
        answer3: "1996",
        answer4: "1997",
        answer: 4
    },
    {
        question: "What year did the first Harry Potter movie come out?",
        answer1: "2000",
        answer2: "2001",
        answer3: "2002",
        answer4: "2003",
        answer: 3
    },
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // //copy in all questions from questions array|take questions array and spread out each of its items and put into new array
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        // //reference to current question by getting out of available question array
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

let count = 15;
let timer = null;

function startTimer() {
  clearInterval(timer); // clear any previous timers
  count = 15;
  timer = setInterval(() => {
    count--;
    if (count < 1) {
      clearInterval(timer);
      count = 15;
    }
    updateTimerDisplay();
  }, 1000);
  //1000 milliseconds = 1 second
}

function resetTimer() {
  clearInterval(timer);
  count = 15;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = count;
  
  if (count <= 5) {
    timerDisplay.style.backgroundColor = '#F90';
  } else {
    timerDisplay.style.backgroundColor = '#F00';
  }
}

// call startTimer() to begin the timer
startTimer();
