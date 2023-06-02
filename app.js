const input = document.querySelector('.container-todo__input');
const ulList = document.querySelector('.container-todo__items');
const form = document.querySelector('#form');
let id = 0;

const removeElement =(id)=>{
   document.getElementById(id).remove();
};


form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const value = input.value;
   const task = document.createElement('li');
   task.classList.add('container-todo__item')
   task.setAttribute('id', id++)
   task.innerText = value
   task.addEventListener('click',()=>{
      task.classList.toggle('complete')
   })
   input.value = ''
   task.addEventListener('dblclick',()=>{
     const elementId = task.getAttribute('id')
      removeElement(elementId)
   })
   ulList.appendChild(task)
})
