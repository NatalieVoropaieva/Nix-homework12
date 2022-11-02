const list = document.querySelector('ul');
list.childNodes.forEach(child =>{
    console.log(child); //кількість нащадків - 6, 3 li та 3 #text
})
console.log(list);
console.log(list.innerText) //виведе 1 2 3