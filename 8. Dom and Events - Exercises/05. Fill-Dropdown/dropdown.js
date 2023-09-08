function addItem() {
     let option = document.createElement('option');
     let text = document.getElementById('newItemText').value;
     let value = document.getElementById('newItemValue').value;
     option.value = value;
     option.textContent = text;
     document.getElementById('menu').appendChild(option);
     document.getElementById('newItemText').value = '';
     document.getElementById('newItemValue').value = '';
}