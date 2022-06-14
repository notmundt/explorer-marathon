const answer = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const buttonAsk = document.querySelector("#buttonAsk")
const possibleAnswers = [
  "Certainty!",
  "I'm not so sure.",
  "It's decidedly so.",
  "Don't count on it.",
  "No doubt about it!",
  "Ask again later.",
  "Yes, definitely!",
  "My answer is no.",
  "You can count on it.",
  "Better not to tell you now.",
  "As I see it, yes.",
  "My sources say no.",
  "Probably.",
  "Can't predict it now.",
  "Good prospects.",
  "Not so good prospects.",
  "Yes.",
  "Focus and ask again.",
  "Signs point to yes.",
]

// when the user clicks on ask a question
function askQuestion() {

  // ensure that the field is not empty
  if(inputQuestion.value == "") {
    alert("Please, enter your question!")
    return
  }

  // disable the buttonAsk until the response is displayed
  buttonAsk.setAttribute("disabled", true)

  // save and format to HTML the question that was asked
  const question = "<div>" + inputQuestion.value + "</div>"

  // generate a random number
  const randomNumber = Math.floor(Math.random() * possibleAnswers.length);

  // display the question and answer on the screen
  answer.innerHTML = question + possibleAnswers[randomNumber]
  answer.style.opacity = 1;

  // make the response disappear and the buttonAsk work again after 3 seconds
  setTimeout(function() {
    answer.style.opacity = 0;
    buttonAsk.removeAttribute("disabled")
  }, 3000)
}
