//Write your Javascript code here
console.log("Shoppinglist")

let list = document.getElementById("list");

addToList("list", addListItem("healthy", list.children.length + 1, "Milk"));
addToList("list", addListItem("unhealthy", list.children.length + 1, "Chocolate"));

function addListItem(className, id, text) {
    let item = document.createElement("li");
    item.setAttribute("id", id);
    item.setAttribute("class", className);
    let textNode = document.createTextNode(text);
    item.appendChild(textNode);
    return item;
}

function addToList(listId, element) {
    let list = document.getElementById(listId);
    list.appendChild(element);
}
