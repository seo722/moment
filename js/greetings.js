const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const editBtn = document.querySelector("#edit");
const afterLogin = document.querySelector("main");
const firstForm = document.querySelector("#first-form");

const editContainer = document.querySelector(".container_edit");
const editForm = document.querySelector(".form_edit");
const editInput = editForm.querySelector("input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function editName() {
  editContainer.classList.add(HIDDEN_CLASSNAME);
  editForm.classList.remove(HIDDEN_CLASSNAME);
}
function nameupdate(event) {
  event.preventDefault();
  const editValue = editInput.value;
  greeting.innerText = `Hello ${editValue}, Have a good day!`;
  localStorage.setItem(USERNAME_KEY, editValue);
  editForm.classList.add(HIDDEN_CLASSNAME);
  editContainer.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}, Have a good day!`;
  afterLogin.classList.remove(HIDDEN_CLASSNAME);
  firstForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  firstForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", LoginSubmit);
} else {
  paintGreetings(savedUsername);
}

editBtn.addEventListener("click", editName);
editForm.addEventListener("submit", nameupdate);
