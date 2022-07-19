const questionList = document.querySelector(".question-list");
const questions = [
  "What are your system requirements?",
  "Is SKOUT windows and Mac compatible?",
  "Do I need an MSP or Technology provider to get SKOUT?",
  "Is there a trial program?",
  "Can I get a Demo?",
];

const renderQuestions = () => {
  questions.map((title, index) => {
    const question = document.createElement("div");
    question.classList.add("d-flex");
    question.classList.add("question");
    question.innerHTML = `
    <h1 class="question-logo">q</h1>
    <div class="question-title-cont">
    <h1 class="question-title">
      ${title}
    </h1>
    </div>
    <button onclick="expandQuestion(${index + 1})" class="question-expand-icon">
    <svg width="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="7.5" width="1" height="10" transform="rotate(-45 0.5 7.5)" fill="#22BF95"></rect>
              <rect x="13.9351" y="6.79291" width="1" height="10" transform="rotate(45 13.9351 6.79291)" fill="#22BF95"></rect>
            </svg>
    </button>
    </div>
    `;
    questionList.appendChild(question);
  });
};

const expandQuestion = (childNum) => {
  const target = document.querySelector(
    `.question-list > .question:nth-child(${childNum}) > button`
  );
  const className = "question-expanded";
  if (target.classList.contains(className)) {
    target.classList.remove(className);
    return;
  }
  target.classList.add(className);
};
if (questionList) renderQuestions();
