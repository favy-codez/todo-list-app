const clear = document.querySelector('.clear');
// the query selector selects the first frst classname with .class and in our case we have just one
const dateEl = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');
let LIST = [];
const check = "ri-checkbox-circle-fill";
const unCheck = "ri-add-circle-line";
const lineThrough = 'line-through';

function addToDo(toDo,id,done){

    const Done = done? check : unCheck;
    const Line = done? lineThrough : "";

    const text = `
                <li class="list">
                    <i class="ri-checkbox-blank-circle-line ${Done}" job="complete" id ="${id}"></i>
                    <p class="text ${Line}">${toDo}</p>
                    <i class="ri-delete-bin-4-line" job="delete" id ="${id}"></i>
                </li>
             `
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}
addToDo("drink coffe");

// whenever the user press a key, it fires up a function
document.addEventListener("keyup", function(event){
    // A keycode is a code that represents a keypress, for enter the keycode =13
    // if the user selects the enter 
    if (event.keyCode == 13){
       const toDo = input.value; 
       if (toDo) ={
        addToDo(toDo,id,);
       }
       input.value = ""; 
    }
});


// const addForm = document.querySelector('.add');
// const list = document.querySelector('.todos');
// const message = document.getElementById('warning')

// addForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const todo = addForm.add.value.trim();

//     if(todo.length != 0){
//         generateTemplate(todo);
//         addForm.reset();
//     }else{
//         // alert('Please input task');
//         message.innerHTML = 'Please input task'
//     }
// });

// const generateTemplate = (todo) => {
//     const html = `<li class='list-group-item d-flex justify-content-between align-items-center'>
//         <span>${todo}</span>
//         <i class="fa fa-trash-o delete"></i>
//     </li>`;
//     list.innerHTML += html;
// }

// list.addEventListener('click', (e) => {
//     if(e.target.classList.contains('delete')) {
//         e.target.parentElement.remove();
//     }
// })