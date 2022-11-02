const first = document.getElementById('one');
const forth = document.getElementById('two');
const secondItem = document.createElement('li');
secondItem.innerText='2';
const thirdItem = document.createElement('li');
thirdItem.innerText='3';

first.insertAdjacentElement('afterend', secondItem);
forth.insertAdjacentElement("beforebegin", thirdItem);
