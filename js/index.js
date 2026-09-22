//Write your Javascript code here
console.log("Shoppinglist")

let list = document.getElementById("list");

list.appendChild(addListItem("healthy", list.children.length + 1, "Milk"));

function addListItem(className, id, text) {
    let item = document.createElement("li");
    item.setAttribute("id", id);
    item.setAttribute("class", className);
    let textNode = document.createTextNode(text);
    item.appendChild(textNode);
    return item;
}