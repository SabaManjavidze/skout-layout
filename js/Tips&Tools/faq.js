const questionList = document.querySelector(".question-list");
const questions = [
  {
    title: "What are your system requirements?",
    desc: "SKOUT customers have different infrastructures and security services. The SKOUT platform can integrate into any existing infrastructure. SKOUT will not interfere with any other security products.",
  },
  {
    title: "Is SKOUT windows and Mac compatible?",
    desc: "SKOUT customers have different infrastructures and security services. The SKOUT platform can integrate into any existing infrastructure. SKOUT will not interfere with any other security products.",
  },
  {
    title: "Do I need an MSP or Technology provider to get SKOUT?",

    desc: "SKOUT customers have different infrastructures and security services. The SKOUT platform can integrate into any existing infrastructure. SKOUT will not interfere with any other security products.",
  },
  {
    title: "Is there a trial program?",
    desc: "SKOUT customers have different infrastructures and security services. The SKOUT platform can integrate into any existing infrastructure. SKOUT will not interfere with any other security products.",
  },
  {
    title: "Can I get a Demo?",
    desc: "SKOUT customers have different infrastructures and security services. The SKOUT platform can integrate into any existing infrastructure. SKOUT will not interfere with any other security products.",
  },
];
const renderQuestions = () => {
  questions.map(({ title, desc }, index) => {
    const question = document.createElement("div");
    question.classList.add("d-flex");
    question.classList.add("question");
    question.innerHTML = `
    <div class="question-header">
      <h1 class="question-logo">q</h1>
      <div class="question-title-cont">
      <h1 class="question-title">
        ${title}
      </h1>
      </div>
      <button onclick="expandQuestion(${
        index + 1
      })" class="question-expand-icon">
      <svg width="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="7.5" width="1" height="10" transform="rotate(-45 0.5 7.5)" fill="#22BF95"></rect>
                <rect x="13.9351" y="6.79291" width="1" height="10" transform="rotate(45 13.9351 6.79291)" fill="#22BF95"></rect>
              </svg>
      </button>
    </div>
    <div class="question-answer">
      <h2 class="question-logo">a</h2>
      <div class="answer-title-cont">
      <h1 class="answer-title">
        ${desc}
      </h1>
      </div>
    </div>  
    </div>
    `;
    questionList.appendChild(question);
  });
};

const expandQuestion = (childNum) => {
  const target = document.querySelector(
    `.question-list > .question:nth-child(${childNum})`
  );
  const className = "question-expanded";
  target.classList.toggle(className);
};
if (questionList) renderQuestions();
