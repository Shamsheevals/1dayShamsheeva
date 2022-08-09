const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $todoListContainer = document.getElementById("list");
const $activeTasksCounter = document.getElementById("result");
const $selectItem = document.getElementById("selectItem");
let tasksArr = JSON.parse(localStorage.getItem("todos")) || [];
const $filterItem = document.querySelector("filterItem");
let counter;

const setLocal = () => {
  localStorage.setItem("todos", JSON.stringify(tasksArr));
};

const createTodo = (text) => {
  const valueTask = text.trim();
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
  return render(tasksArr);
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
  render(tasksArr);
};

const removeTodo = (id) => {
  tasksArr = tasksArr.filter((el) => el.id !== id);
  render(tasksArr);
};


const filterTodos = (value) => {
  let arr = tasksArr.filter((task) => {
    if (!task.isCheked) {
      counter++;
    }
    if (value === 'allItem') {
      return true;
    }
    const checkedStatus = (value === 'chekedItem');
    return task.isCheked === checkedStatus;

  });
  render(arr);
};

const buttonComplete = (todoItem, id) => {
  const $toggleStatusButton = document.createElement("button");
  $toggleStatusButton.innerHTML = "Завершено";
  todoItem.prepend($toggleStatusButton);
  $toggleStatusButton.addEventListener("click", () => completeTodo(id))
};


const buttonRemove = (todoItem, id) => {
  const $removeButton = document.createElement("button");
  $removeButton.innerHTML = "Удалить";
  todoItem.append($removeButton);
  $removeButton.addEventListener("click", () => removeTodo(id))
};

const createTodoItem = (arr) => {
  arr.forEach((task) => {
    console.log(task);
    const $todoItem = document.createElement("li");
    $todoItem.className = "li";
    if (task.isCheked) {
      $todoItem.classList.add("li-active");
    }
    $todoItem.innerHTML = task.text;
    buttonComplete($todoItem, task.id);
    buttonRemove($todoItem, task.id);
    $todoListContainer.appendChild($todoItem);
    $activeTasksCounter.textContent = `${arr.length}`;
  })
};

const render = (arr) => {
  $todoListContainer.innerHTML = "";
  $activeTasksCounter.textContent = 0;
  createTodoItem(arr);
  setLocal();
}

const handleInputKeyDown = (event) => {
  if (event.key === "Enter") {
    createTodo($input.value);
  }
};
render(tasksArr);

$input.addEventListener("keydown", handleInputKeyDown);

$button.addEventListener("click", (e) => {
  createTodo($input.value);
});

$selectItem.addEventListener("change", (event) =>
  filterTodos(event.target.value)
);