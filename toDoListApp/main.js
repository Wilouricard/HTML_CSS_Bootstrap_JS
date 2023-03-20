console.log("test Js link focntionne");

const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");

addButton.addEventListener("click", () => {
  const task = input.value;
  if (task !== "") {
    const listItem = document.createElement("li");
    const taskText = document.createTextNode(task);
    const deleteButton = document.createElement("span");
    const buttonText = document.createTextNode("x");

    deleteButton.appendChild(buttonText);
    deleteButton.classList.add("delete");

    listItem.appendChild(deleteButton);
    listItem.appendChild(taskText);

    list.appendChild(listItem);

    input.value = "";

    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  }
});
