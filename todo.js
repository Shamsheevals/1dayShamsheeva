const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $todoListContainer = document.getElementById("list");
const $activeTasksCounter = document.getElementById("result");
const $selectItem = document.getElementById("selectItem");
let tasksArr = JSON.parse(localStorage.getItem("todos")) || [];
const $filterItem = document.querySelector("filterItem");
const setLocal = () => {
  localStorage.setItem("todos", JSON.stringify(tasksArr));
};
let lengthArr=$activeTasksCounter.textContent = `${tasksArr.length}`
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
  let arr = tasksArr
  if (value === "activeItem") {
    arr = tasksArr.filter((el) => !el.isCheked);
  } else if (value === "chekedItem") {
    arr = tasksArr.filter((el) => el.isCheked); 
  } else {
    arr = tasksArr 
  }
  lengthArr
  render(arr);
};

const buttonComplete = (todoItem, id) => {
  const $toggleStatusButton = document.createElement("button");
  $toggleStatusButton.innerHTML = "Завершено";
  todoItem.prepend($toggleStatusButton);
  $toggleStatusButton.addEventListener("click", () => completeTodo(task.id));
};


const buttonRemove = (todoItem, id) => {
  const $removeButton = document.createElement("button");
  $removeButton.innerHTML = "Удалить";
  todoItem.append($removeButton);
  $removeButton.addEventListener("click", () => removeTodo(task.id))

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
    buttonComplete($todoItem, task.id)
    buttonRemove($todoItem, task.id)
    $todoListContainer.appendChild($todoItem)
  })
};

const render = (arr) => {
  $todoListContainer.innerHTML = "";
  $activeTasksCounter.textContent = 0;
  createTodoItem(arr);
  $activeTasksCounter.textContent = `${tasksArr.length}`;
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