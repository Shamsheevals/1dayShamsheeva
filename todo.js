const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $todoListContainer = document.getElementById("list");
const $activeTasksCounter = document.getElementById("result");
let tasksArr = [];
let counter = 0


const setLocal=()=>{
  localStorage.setItem("todos",JSON.stringify(tasksArr))
}


$button.addEventListener("click", (e) => {
  createTodo($input.value);
  setLocal();
});

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
  setLocal();
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
  setLocal();
  render();
  
};

const removeTodo = (id) => {
  tasksArr = tasksArr.filter((el) => el.id !== id);
  setLocal();
  render();

};

const render = () => {
  $todoListContainer.innerHTML = "";
  $activeTasksCounter.textContent = counter;
  tasksArr.forEach((task) => {
    console.log(task);
    const $todoItem = document.createElement("li");
    $todoItem.className = "li";
    if (task.isCheked) {
      $todoItem.classList.add("li-active");
    }
    $todoItem.innerHTML = task.text;

    const $toggleStatusButton = document.createElement("button");
    $toggleStatusButton.innerHTML = "Завершено";
    $todoItem.prepend($toggleStatusButton);
    $toggleStatusButton.addEventListener("click", () => completeTodo(task.id));

    const $removeButton = document.createElement("button");
    $removeButton.innerHTML = "Удалить";
    $todoItem.append($removeButton);
    $removeButton.addEventListener("click", () => removeTodo(task.id))

    $todoListContainer.appendChild($todoItem);
    $activeTasksCounter.textContent = `${tasksArr.length}`;
    setLocal();
  });
};


const handleInputKeyDown = (event) => {
  if (event.key === "Enter") {
    createTodo($input.value);
    setLocal();
  }
}

$input.addEventListener("keydown", handleInputKeyDown);
$button.addEventListener("click", (e) => {
  createTodo($input.value);
  setLocal();
});



window.addEventListener("load", (event)=>{
  tasksArr=JSON.parse(localStorage.getItem("todos"));
  render()
});