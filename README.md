### Things I learnt during the course of this project
- **An Immediately Invoked Function Expression (IIFE)** is used to encapsulate the entire code block. This pattern is often used to create a private scope for variables, preventing them from polluting the global scope.
```
var li = document.querySelector('[data-id="' + id + '"]');
```
- is used to select an li element from the DOM based on its data-id attribute. 
- String Concatenation: The expression '[data-id="' + id + '"]' creates a string that represents a CSS attribute selector. For example, if id is "1625738493021", this will result in the string '[data-id="1625738493021"]'.
- This string is used to match an element with a data-id attribute equal to the value of id.
document.querySelector:
- document.querySelector is a method that returns the first element within the document that matches the specified CSS selector. In this case, it matches an element with the data-id attribute that equals the id.