const quizData = [
    {
        question: 'Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was NOT one of them?',
        a: 'Tubby',
        b: 'Stodge',
        c: 'Helium Bat',
        d: 'Stumpy',
        correct: 'd'
    },
    {
        question: ' Which was the 1st non Test playing country to beat India in an international match?',
        a: 'Canada',
        b: 'Sri-Lanka',
        c: 'Zimbabwe',
        d: 'East Africa',
        correct: 'b'
    },
    {
        question: 'Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?',
        a: 'Two',
        b: 'Three',
        c: 'Four',
        d: 'Eight',
        correct: 'd'
    }
];
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitbtn.addEventListener('click', () => {


    const answer = getSelected();
    console.log(answer);
    if (answer) {

        if (answer == quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <h4>You answered correctly at ${score}/${quizData.length} questions.</h4>
            
            <button onclick="location.reload()">Reload</button>
        `;
        }
    }

});