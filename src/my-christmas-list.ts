/*
Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

**Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
**Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.
*/

// array to store list items
// const christmasList: string[] = [];
const sanitizedList: string[] = [];
let index: number = 0;

// grabbing elements by their id's
const addItemButton = document.getElementById("add-item-button");
const inputElement = document.getElementById("item-input") as HTMLInputElement;
const listItemContainer = document.getElementById("shopping-list");

//  validation fnctnc which checks for duplicacy and also handles capitalization difference
const validateInputText = (text: string) => {
  try {
    let sanitizedText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        sanitizedText += text[i].toLowerCase();
      }
    }
    const isDuplicate = sanitizedList.find((el) => el === sanitizedText);

    return { isDuplicate, sanitizedText };
  } catch (error) {
    console.error(error);
    //  returning false incase validation fails
    return { isDuplicate: false, sanitizedText: "" };
  }
};

// let's add a edit list item functionality as well

const editListItem = (listItem: HTMLElement) => {
  const newValue = prompt("Enter value to update list");

  if (newValue && listItem.firstChild) {
    listItem.firstChild.textContent = newValue;
  }
};

// add button click handling => to add items in list
addItemButton?.addEventListener("click", () => {
  if (inputElement) {
    const inputElementText = inputElement.value; // grabbing text from input box
    // validating if there is some value inside input box

    if (!inputElementText) {
      alert("Item can't be empty");
      return;
    }

    const { isDuplicate, sanitizedText } = validateInputText(inputElementText); // validating text with helper fnctn

    if (isDuplicate) {
      alert("Item already exists!");
      // returning if same item is added
      return;
    }

    if (listItemContainer) {
      // appending in dom
      const listItem = document.createElement("li");

      // p tag to store the list item text
      const textElement = document.createElement("p");
      // edit button
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.onclick = () => editListItem(listItem);

      textElement.textContent = inputElementText;
      listItem.appendChild(textElement);
      listItem.appendChild(editButton);

      // adding data-index attribute in each list item for edit and delete part
      listItem.setAttribute("data-index", `${index}`);
      listItemContainer.appendChild(listItem);
      index++;
    }

    sanitizedList.push(sanitizedText); // adding in array as well for validation
    inputElement.value = ""; // clearing out the input field
  }
});
