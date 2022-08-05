const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $list = document.getElementById("list");
const $result = document.getElementById("result");

let i = 0;

function createOnEnter(e) {
  if (e.key === "Enter")
    document.getElementById('addTasks').click();
}
$input.addEventListener("keydown", createOnEnter);


$button.addEventListener("click", (e) => {
  const valueTasks = $input.value.trim()
  if (!valueTasks) {
    return;
  }
  createElement($input.value);
  $input.value = "";
});

const createElement = (value) => {
  const $todoItem = document.createElement("li");
  $todoItem.className = "li";
  $todoItem.textContent = value;
  i++; // create task (li)

  const $deleteButton = document.createElement("button");
  $deleteButton.className = "button";
  $deleteButton.textContent = "удалить";
  $todoItem.append($deleteButton); // create 'delete' button

  $deleteButton.addEventListener("click", () => {
    $todoItem.remove();
    i--;
    $result.textContent = i;
  });
  const $completedButton = document.createElement("button")
  $completedButton.textContent = "Завершено"
  $todoItem.prepend($completedButton);
  $completedButton.addEventListener("click", (e) => {
    $todoItem.classList.toggle("li-active");
  });
  $result.textContent = i;
  $list.appendChild($todoItem);
};

const createTodo = (title) => {
  //
  render();
};

const render = () => {
  $list.innerHTML = "";

  //
};

// Add Listeners
