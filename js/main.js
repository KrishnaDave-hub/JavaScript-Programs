// Questions Array
const questions = [
  {
    question: "Enter Your First Name",
  },
  {
    question: "Enter Your Last Name",
  },
  {
    question: "Enter Your Email",
    pattern: /\S+@\S+\.\S+/,
  },
  {
    question: "Create A Password",
    type: "password",
  },
];

// Transition Time Variable
const shakeTime = 100;
const switchTime = 200; //Transition Between Questions

// Init Position At First Question
let position = 0;

// Init DOM Element
const formBox = document.getElementById("form-box");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const inputGroup = document.getElementById("input-group");
const inputField = document.getElementById("input-field");
const inputLabel = document.getElementById("input-label");
const progress = document.getElementById("progress-bar");
const inputProgress = document.getElementById("input-progress");

// Events
// Get Question On DOM Load
document.addEventListener("DOMContentLoaded", getQuestion);
// Next Button Click
nextBtn.addEventListener("click", validate);
// Input Field Enter Click
inputField.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    validate();
  }
});

// Funtions
// getQuestion function will call the Questions from the array and will add to markup
function getQuestion() {
  // Get The Current Question
  inputLabel.innerHTML = questions[position].question;
  // Get Current Type
  inputField.type = questions[position].type || "text";
  // Get Current Answer
  inputField.value = questions[position].answer || "";
  // Focus On Current Element
  inputField.focus();
  // Set Progress Bar Width - Variable to Questions Length
  progress.style.width = (position * 100) / questions.length + "%";
  // Add User Icon Or Back Arrow
  prevBtn.className = position ? "fas fa-arrow-left" : "fas fa-user";

  showQuestion();
}

// Display Question To The User
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = "";
  inputProgress.style.width = "100%";
}

// Hide The Question From User
function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = "none";
  inputGroup.style.border = null;
}

// Transform To Create Shake Motion
function transform(x, y) {
  formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate Field
function validate() {
  // Make sure Pattern Matches If There Any
  if (!inputField.value.match(questions[position].pattern || /.+/)) {
    inputFail();
  } else {
    inputPass();
  }
}

// Input Fail
function inputFail() {
  formBox.className = "error";
  //   Repeat Shake Motion
  for (let i = 0; i < 6; i++) {
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
    inputField.focus();
  }
}

// Input Pass
function inputPass() {
  formBox.className = "";
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);

  // Store Answers In Array
  questions[position].answer = inputField.value;

  // Increment The Position To Change The Question
  position++;

  // If New Question , Hide The Current And Get Next Question
  if (questions[position]) {
    hideQuestion();
    getQuestion();
  } else {
    //   Remove If No More Question
    hideQuestion();
    formBox.className = "close";
    progress.style.width = "100%";

    // Form Complete
    formComplete();
  }
}
// All Fields Complete - Show H1
function formComplete() {
  //To see All The Anwer In The Console
  console.log(questions);

  const h1 = document.createElement("h1");
  h1.className = "end";
  h1.appendChild(
    document.createTextNode(
      `Thank You ${questions[0].answer}. You Have Registered Successfully.`
    )
  );
  setTimeout(() => {
    formBox.parentElement.appendChild(h1);
    setTimeout(() => (h1.style.opacity = 1), 50);
  }, 1000);
}
