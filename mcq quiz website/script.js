const quiz= [
    {
        question: "1.Who is the father of C language?",
        options: ["a.Steve Jobs","b.James Gosling","c.Dennis Ritchie","d.Rasmus Lerdorf"],
        answer: "d.Dennis Ritchie"
    },
    {
        question: "2. Which of the following is not a valid C variable name?",
        options: ["a.int number", "b.float rate", "c.int variable_count", "d.int $main"],
        answer: "d.int $main"
    },
    {
        question: "3. All keywords in C are in ____________",
        options: ["a.LowerCase letters", "b.UpperCase letters", "c.CamelCase letters", "d.None of the mentioned"],
        answer: "a.LowerCase letters"
    },
    {
        question: "4. Which of the following is true for variable names in C?",
        options: ["a.They can contain alphanumeric characters as well as special characters", "b.It is not an error to declare a variable to be one of the keywords(like goto, static)", 
            "c.Variable names cannot start with a digit", "d.Variable can be of any length"],
        answer: "Shakespeare"
    },
    {
        question: "5. Which is valid C expression?",
        options: ["a.int my_num = 100,000;", "b.int my_num = 100000;", "c.int my num = 1000;", "d.int $my_num = 10000;"],
        answer: "b.int my_num = 100000;"
    },
    {
        question: "6. Which of the following cannot be a variable name in C?",
        options: ["a.volatile", "b.true", "c.friend", "d.export"],
        answer: "a.volatile"
    },
    {
        question: "7. What is short int in C programming?",
        options: ["a.The basic data type of C", "b.Qualifier", "c.Short is the qualifier and int is the basic data type", "d.All of the mentioned"],
        answer: "c.Short is the qualifier and int is the basic data type"
    },
    {
        question: "8. Which of the following declaration is not supported by C language?",
        options: ["a.String str;", "b.char *str;", "c.float str = 3e2;", "d.Both “String str;” and “float str = 3e2;”"],
        answer: "a.String str;"
    },
    {
        question: "9. Which keyword is used to prevent any changes in the variable within a C program?",
        options: ["a.immutable", "b.mutable", "c.const", "d.volatile"],
        answer: "c.const"
    },
    {
        question: "10. What is the result of logical or relational expression in C?",
        options: ["a.True or False", "b.0 or 1", "c.0 if an expression is false and any positive number if an expression is true", "d.None of the mentioned"],
        answer: "b.0 or 1"
    }
];




let currentQuestion = 0;
let score = 0;
let timer = 60;
let setTime;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function loadQuestion() {
  clearInterval(setTime);
  timer = 60;
  timerEl.textContent = `Time left: ${timer}s`;

  if (currentQuestion >= quiz.length) {
    showResult();
    return;
  }

  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.answer) score++;
      currentQuestion++;
      loadQuestion();
    };
    optionsEl.appendChild(btn);
  });

  setTime = setInterval(() => {
    timer--;
    timerEl.textContent = `Time left: ${timer}s`;
    if (timer === 0) {
      clearInterval(setTime);
      currentQuestion++;
      loadQuestion();
    }
  }, 1000);
}

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  timerEl.style.display = "none";
  resultEl.textContent = `Your Score is : ${score} / ${quiz.length}`;
}

loadQuestion();

