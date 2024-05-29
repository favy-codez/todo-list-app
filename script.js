(() => {
  let toDoListArray = [];

  const form = document.querySelector(".form");
  const input = form.querySelector(".form_input");
  const ul = document.querySelector(".toDoList");

  // Add event listeners
  form.addEventListener("submit", (e) => {
    // Prevent browser from default behaviour - page reload
    e.preventDefault();

    // Give item a unique ID
    let itemID = String(Date.now());
    // Get or assign input value
    let todoItem = input.value;
    // Pass ID and item into functions
    addItemToDOM(itemID, todoItem);
    addItemToArray(itemID, todoItem);
    // Clear the input box, this is default behaviour but we removed it
    input.value = "";
  });

  ul.addEventListener("click", (e) => {
    let id = e.target.getAttribute("data-id");
    if (!id) return; // User clicked on something else
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });

  // Functions
  function addItemToDOM(itemID, todoItem) {
    // Create an li
    const li = document.createElement("li");
    li.setAttribute("data-id", itemID);
    // Add todo item next to li
    li.innerText = todoItem;
    // Add li to the DOM
    ul.appendChild(li);
  }

  function addItemToArray(itemID, todoItem) {
    // Add item to array as an object with an ID so we can find and delete it later
    toDoListArray.push({ itemID, todoItem });
    console.log(toDoListArray);
  }

  function removeItemFromDOM(id) {
    var li = document.querySelector('[data-id="' + id + '"]');
    // Remove list item
    ul.removeChild(li);
  }

  function removeItemFromArray(id) {
    // Create a new todolist array with all the li's that don't match the ID
    toDoListArray = toDoListArray.filter((item) => item.itemID !== id);
    console.log(toDoListArray);
  }
})();
