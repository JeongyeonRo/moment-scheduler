const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  //prevet defalut event
  event.preventDefault();
  const currentValue = input.value;
  //check currentValue on consle
  //console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForname() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //user doesn't exist
    askForname();
  } else {
    //user exist
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
