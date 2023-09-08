function addItem() {
    let text = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let li = document.createElement('li');
    if(text.length === 0)
    {
        return;
    }
    li.textContent = text;
    document.getElementById('newItemText').value = '';

    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);

    li.appendChild(remove);
    list.appendChild(li);

    function deleteItem(){
        li.remove();
    }
}