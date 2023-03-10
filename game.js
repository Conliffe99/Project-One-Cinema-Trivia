const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("answer-text"));
const selections = Array.from(document.getElementsByClassName("answer-container"));

let currentQuestion = {}
let acceptingAnswers = true;
let score= 0;
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

const correct_answer = 1;
const max_questions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    //copy in all questions from questions array|take questions array and spread out each of its items and put into new array
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter > max_questions){
        //go to the end page
       return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach( choice => {
        const number = choice.dataset["number"];
        //reference to current question by getting out of available question array
        choice.innerText = currentQuestion['answer' + number];
    });


    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
};


selections.forEach(selection =>{
    selection.addEventListener("click", e => {
        e.preventDefault();
        console.log('click')
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        console.log (selectedChoice);
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer == currentQuestion.answer);
        getNewQuestion();
    });
});
startGame();


const secondsValue = document.querySelector('#seconds');
const triviaTime = new Date(0,0,0,0,0,15,0,).getTime();
//this is the time I want the timer to count down from starting with year being 0 month is 0 date is 0 hour is 0 minute is 0 seconds is 15 millisecond is 0
function countdown() {
    const triviaTime = new Date().getTime();
    let difference = triviaTime - dateTimeNow;

    const secondsValue = math.floor(difference / (1000) % 60);
    console.log(secondsValue)
}
countdown();
