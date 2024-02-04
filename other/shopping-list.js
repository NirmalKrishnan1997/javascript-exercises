const input = document.querySelector("#item");
const button = document.querySelector("#add");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
    const value = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    listItem.append(span, deleteButton);
    span.textContent = value;
    deleteButton.textContent = "Delete";
    list.appendChild(listItem);
    deleteButton.addEventListener("click", () => {
        list.removeChild(deleteButton.parentNode);
    });
    input.focus();
});

const child = document.getElementsByClassName("child");
alert(`no of children = ${child.length}`);