const clear = document.querySelector('.clear');
// the query selector selects the first frst classname with .class and in our case we have just one
const dateEl = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

function addToDo(toDo){
    const text = `
                <li class="list">
                    <i class="ri-checkbox-blank-circle-line" job="complete"></i>
                    <p class="text">${toDo}</p>
                    <i class="ri-delete-bin-4-line" job="delete"></i>
                </li>
             `
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}
addToDo("drink coffe");

// A keycode is a code that represents a keypress, for enter the keycode =13
// whenever the user presses a key
document.addEventListener("keyup", function(event){
    // if the user selects the enter 
    if (event.keyCode == 13){
       const toDo = input.value; 
       if (toDo) ={

       }
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