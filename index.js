let todos = ["Go to shopping", "Go to school", "come to class", "come to class", "come to class", "come to class"]

const  body = document.getElementByTagName("body")[0];

for(let i = 0; i < todos.length; i++);{
    const container = document.createElement("div");
    container.className = "container";

    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("h3");
    title.className = todos[i];

    const btncontainer = document.createElement("div");
    btncontainer.className = "btn-container";
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btncontainer.appendChild(btnDelete);
    btncontainer.appendChild(btnEdit);

    box.appendChild(title);
    box.appendChild(btncontainer);

    container.appendChild(box);

    body.appendChild(container);

}