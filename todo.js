const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $list = document.getElementById("list");
const $result = document.getElementById("result");

let i = 0;

function createOnEnter(e) {
  if (e.keyCode == 13)
    document.getElementById('addTasks').click();
}
window.addEventListener("keyup", createOnEnter);


$button.addEventListener("click", (e) => {
  const valueTasks = $input.value.trim()
  if (valueTasks === "") return;
  createElement($input.value);
  $input.value = "";
});

const createElement = (value) => {
  const liTodo = document.createElement("li");
  liTodo.className = "li";
  liTodo.textContent = value;
  i++; //create task (li)

  const deleteButton = document.createElement("button");
  deleteButton.className = "button";
  deleteButton.textContent = "удалить";
  liTodo.append(deleteButton); // create 'delete' button

  deleteButton.addEventListener("click", (e) => {
    $list.removeChild(li);
    i--;
    $result.textContent = i;
  });
  const completedButton = document.createElement("button")
  completedButton.textContent = "Завершено"
  liTodo.prepend(completedButton);
  completedButton.addEventListener("click", (e) => {
    liTodo.classList.toggle("li-active");

  });
  $result.textContent = i;
  $list.appendChild(liTodo);
};

