const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $list = document.getElementById("list");
const $result = document.getElementById("result");
let tasksArr = [];
let counter = 0;

function createOnEnter(e) {
  if (e.key === "Enter") document.getElementById("addTasks").click();
}

$input.addEventListener("keydown", createOnEnter);

$button.addEventListener("click", (e) => {
  createTodo($input.value);
});

const createTodo = (title) => {
  const valueTask = title.trim();
  if (!valueTask) {
    return;
  }
  const task = {
    text: valueTask,
    isCheked: false,
    id: Date.now(),
  };
  tasksArr.push(task);
  console.log(tasksArr);
  $input.value = "";
 return render();
};

const completeTodo = (id) => {
  tasksArr = tasksArr.map((todoItem) => {
    if (todoItem.id !== id) {
      return todoItem;
    }
    return {
      ...todoItem,
      isCheked: !todoItem.isCheked,
    };
  });
  render();
};

const removeTodo = (id) => {
  tasksArr = tasksArr.filter((el) => el.id !== id);
  render();
};

const render = () => {
  $list.innerHTML = "";
  tasksArr.map((task) => {
    console.log(task);
    const li = document.createElement("li");
    li.className = "li";
    if (task.isCheked) {
      li.classList.add("li-active");
    }
    li.innerHTML = `
   <button onclick="completeTodo(${task.id})">Завершено</button>
    ${task.text}
    <button onclick="removeTodo(${task.id})"> Удалить </button>`;
    $list.appendChild(li);
    $result.textContent = `${tasksArr.length}`;
  });
  return;
};









