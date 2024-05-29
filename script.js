(() => {
  // initializes an empty array to store the to-do items.
  let toDoListArray = [];

  //    selects the form element with the class form.
  const form = document.querySelector(".form");
  //   selects the input element with the class form_input within the form.
  const input = form.querySelector(".form_input");
  //   selects the ul element with the class toDoList.
  const ul = document.querySelector(".toDoList");

  // Adds an event listener to the form for the 'submit' event.
  form.addEventListener("submit", (e) => {
    // Prevent browser from default behaviour - page reload
    e.preventDefault();

    // Generates a unique ID for each to-do item using the current timestamp and converts it to a string.
    let itemID = String(Date.now());
    // Retrieves the value from the input field, which is the text entered by the user.
    let todoItem = input.value;
    // Calls the addItemToDOM function to add the new item to the DOM.
    addItemToDOM(itemID, todoItem);
    // Calls the addItemToArray function to add the new item to the array.
    addItemToArray(itemID, todoItem);
    // Clears the input field for the next entry, this is default behaviour but we removed it
    input.value = "";
  });

  //   Adds an event listener to the ul for the 'click' event.
  ul.addEventListener("click", (e) => {
    // retrieves the data-id attribute of the clicked element.
    let id = e.target.getAttribute("data-id");
    // checks if the id is valid (i.e., the click was on a to-do item)
    if (!id) return;
    // If valid, it calls removeItemFromDOM and removeItemFromArray with the id to remove the item from both the DOM and the array.
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });

  // Defines a function addItemToDOM to add a new item to the DOM.
  function addItemToDOM(itemID, todoItem) {
    // creates a new li element.
    const li = document.createElement("li");
    // sets the data-id attribute of the li to the unique itemID.
    li.setAttribute("data-id", itemID);
    // sets the text of the li to the to-do item text.
    li.innerText = todoItem;
    // adds the new li to the ul
    ul.appendChild(li);
  }

  //   Defines a function addItemToArray to add a new item to the array
  function addItemToArray(itemID, todoItem) {
    // Add item to array as an object with an ID so we can find and delete it later
    toDoListArray.push({ itemID, todoItem });
    //  logs the updated array to the console for debugging.
    console.log(toDoListArray);
  }

  //   Defines a function removeItemFromDOM to remove an item from the DOM
  function removeItemFromDOM(id) {
    // selects the li element with the specified data
    var li = document.querySelector('[data-id="' + id + '"]');
    // removes the selected li from the ul.
    ul.removeChild(li);
  }

  //   Defines a function removeItemFromArray to remove an item from the array
  function removeItemFromArray(id) {
    // Create a new todolist array with all the li's that don't match the ID which is the specified data-id.
    toDoListArray = toDoListArray.filter((item) => item.itemID !== id);
    //  logs the updated array to the console for debugging.
    console.log(toDoListArray);
  }
  //   The IIFE is closed with })();, immediately invoking the function to run the code.
})();
