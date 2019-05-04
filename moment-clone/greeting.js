const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function painGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}
function loadName() {
  const currentUser = loadStorage.getItem(USER_LS);
  if (currentUser === null) {
      //user is not
  } else {
      //user is
      painGreeting(currentUser)
  }
}
function init() {
  loadName();
}
init();
