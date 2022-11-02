const list = document.getElementById('list');
let result = '';

const addItem = () => {
    result = prompt('Enter list item');
    if (result) {
        const newListItem = document.createElement('li');
        newListItem.innerText = result;
        list.appendChild(newListItem)
        setTimeout(addItem);
    }
}
addItem()
