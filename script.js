//как получит родительский эелемент или ближайший див
// console.log(div.parentElement);
const div = document.querySelector('div')

const link = div.querySelector('.link');
console.log(link.parentElement); // возварщает прямого родителя 
// console.log(link.closest('.content')); // возвращает ближайшего родителя


div.classList.add('article', 'custom');
div.classList.remove('article');
div.classList.contains('custom') //есть ли этот класс у элемента 
div.classList.toggle('toogle') // может добавить класс , вернет тру ,если его нет 
console.log(div.classList);
// обязательные свйоства или общие атрибуты
div.setAttribute('id', 'myId');
div.id
div.getAttribute('id');
div.hasAttribute('id'); //вернет либо true  либо false;
div.removeAttribute('id')

//data attribute
div.dataset