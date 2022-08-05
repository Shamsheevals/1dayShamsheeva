const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");
const result = document.querySelector("#result");
let i = 0;



button.addEventListener("click", (e) => {
    if (input.value === "") return;
    createDeleteElements(input.value);
    input.value = "";
});

const createDeleteElements = (value) => {
    i++;
    const li = document.createElement("li");
    li.className = "li";
    li.textContent = value;
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "удалить";
    li.appendChild(button);
    button.addEventListener("click", (e) => {
        list.removeChild(li);
        i--;
        result.textContent = i;
    });
    li.addEventListener("click", (e) => {
        li.classList.toggle("li-active");
    });
    result.textContent = i;
    list.appendChild(li);
};

