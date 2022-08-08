const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $list = document.getElementById("list");
const $result = document.getElementById("result");
const tasksArr = [];
let counter = 0;

function createOnEnter(e) {
  if (e.key === "Enter")
    document.getElementById('addTasks').click();
}

$input.addEventListener("keydown", createOnEnter);


$button.addEventListener("click", (e) => {
  createTodo($input.value);
});

// const createElement = (value) => {
//   const $todoItem = document.createElement("li");
//   $todoItem.className = "li";
//   $todoItem.textContent = value;
//   i++; 

//   const $deleteButton = document.createElement("button");
//   $deleteButton.className = "button";
//   $deleteButton.textContent = "удалить";
//   $todoItem.append($deleteButton); // create 'delete' button

//   $deleteButton.addEventListener("click", () => {
//     $todoItem.remove();
//     i--;
//     $result.textContent = i;
//   });
//   const $completedButton = document.createElement("button")
//   $completedButton.textContent = "Завершено"
//   $todoItem.prepend($completedButton);
//   $completedButton.addEventListener("click", (e) => {
//     $todoItem.classList.toggle("li-active");
//   });
//   $result.textContent = i;
//   $list.appendChild($todoItem);
// };



const createTodo = (title) => {
  const valueTask = title.trim()
  if (!valueTask) {
    return;
  }
  const task = {
    text: valueTask,
    isActive: true,
    id: Date.now(),
  }
  tasksArr.push(task);
  console.log(tasksArr)
  $input.value = "";
  render(tasksArr);
};

const completeTodo=(id)=>{
  tasksArr.map( ( el ) => el.id === id && {...el,isActive:!el.isActive});
}
const removeTodo=(id)=>{
  tasksArr.filter(el=>el.id!==id)
}
const render = (tasksArr) => {
  $list.innerHTML = "";
  tasksArr.map(task => {
    console.log(task)
    const li = document.createElement("li")
    li.className = "li";
    li.innerHTML = `
    <button onclick=${completeTodo(task.id)}>Завершить </button>
     ${task.text} 
     <button onclick=${removeTodo(task.i)}> Удалить </button>
    `;
    $list.appendChild(li)
    $result.textContent = `${ tasksArr.length }`;
  });
};

// Add Listeners
 