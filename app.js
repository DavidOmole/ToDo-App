let items = [];

function addTask(text) {
  var task = {
    text,
    checked: false,
    id: Date.now()
  };

  items.push(task);
  console.log(items);

  const list = document.querySelector(".list");
  list.insertAdjacentHTML(
    "beforeend",
    `
  <li class="todo-item" data-key="${task.id}">
  <input id = "${task.id}" type="checkbox" class="styled-checkbox" >
<label for="${task.id}" class="tick" >${task.text}</label>
 
</li>

`
  );
}

var form = document.querySelector(".js-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector(".text-input");
  const text = input.value.trim();

  if (text !== "") {
    addTask(text);
    input.value = "";
    input.focus();
  }
});

const list = document.querySelector(".list");
list.addEventListener("click", event => {
  if (event.target.classList.contains("tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});

function toggleDone(key) {
  const item = document.querySelector(`[data-key='${key}']`);
  const index = items.findIndex(item => item.id === Number(key));

  items[index].checked = !items[index].checked;

  if (items[index].checked) {
    item.classList.add("done");
  } else {
    item.classList.remove("done");
  }
}
