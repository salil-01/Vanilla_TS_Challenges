"use strict";
// src/index.ts
// TypeScript Example: A simple function that greets a user
function greet(name) {
    return `Hello, ${name}! Welcome to Vanilla TypeScript!`;
}
// Attach event listener to a button
const button = document.createElement("button");
button.innerText = "Click Me!";
button.onclick = () => {
    alert(greet("TypeScript Developer"));
};
document.body.appendChild(button);
