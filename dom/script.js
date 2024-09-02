const h1 = document.getElementById("heading");
const btn = document.getElementById("btn");
const todoList = document.getElementById("todoList");

const inputTask = document.getElementById("inputTask");
btn.addEventListener("click", () => {
  const taskNode = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const textNode = document.createTextNode(inputTask.value);
  const deleteTask = document.createElement("button");
  deleteTask.textContent = "X";
  deleteTask.addEventListener("click", () => {
    todoList.removeChild(taskNode);
  });

  taskNode.appendChild(checkbox);
  todoList.appendChild(taskNode);
  taskNode.appendChild(textNode);
  taskNode.appendChild(deleteTask);

  inputTask.value = "";
});
