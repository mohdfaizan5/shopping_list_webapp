let form = document.querySelector('#item-form')
let userInput = document.querySelector('#item-input')

let allItems; // Create a new list

// Storing data into array for local storage
if (!localStorage.getItem('allItems')) {

  allItems = []
  localStorage.setItem('allItems', JSON.stringify(allItems)) // now assign new array into Local Storage for later fetching 

}
// If the localStorage already exists then what you do is get data from there and put it into my `allItems` array list
else {

  allItems = JSON.parse(localStorage.getItem('allItems'))

}


// Now Fetch from `allItems` array and put into allItemLi
allItems.forEach(e => {
  console.log(e)
  // 1. Creating element to add

  let newLi = document.createElement('li')

  newLi.appendChild(document.createTextNode(e))

  let newButton = document.createElement('button')
  newButton.className = "remove-item btn-link text-red";
  let newIcon = document.createElement('i');
  newIcon.className = "fa-solid fa-xmark";

  newButton.appendChild(newIcon)
  newLi.appendChild(newButton)

  allItemLi.appendChild(newLi)
})

// Adding new tasks
form.addEventListener('submit', addItem)

// removing a particular item
allItemLi.addEventListener('click', removeItem)

// Filtering the search
filter.addEventListener('input', filterItems)

