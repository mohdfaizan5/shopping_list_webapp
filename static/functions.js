let allItemLi = document.querySelector('#item-list')
let clearBtn = document.querySelector('#clear')


// Add Item
function addItem(event){
  event.preventDefault();
  console.log('form submitted');

  // Checking whether input is empty, if empty alerting them to enter a value
  if (userInput.value === '') {
    alert('Enter a todo first');
    return;
  }
  // appending to array
  allItems.push(userInput.value)

  localStorage.setItem('allItems', JSON.stringify(allItems))
  console.log(allItems)


  // 1. Creating element to add
  createElement(userInput.value)



  // clearing the input(useablity)
  userInput.value = '';
  console.log('success')

  clearUI()
}

// Remove Item
function removeItem(e) {
  console.log(e.target.parentElement.classList.contains("remove-item"))
  console.log(e.target.parentElement.parentElement.textContent.trim())
  if (e.target.parentElement.classList.contains("remove-item")) {

    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.remove()

    // Now removing from array and then updating local storage
    console.log(allItems.indexOf(e.target.parentElement.parentElement.textContent.trim()))

    allItems.splice((e.target.parentElement.parentElement.textContent.trim() + 1), 1)
    localStorage.setItem('allItems', JSON.stringify(allItems))
    console.log(allItems)

  }

  // If all items are removed then also disappear ui
  clearUI()
}


// Filtering Search
// 3.When there is no items, dont show 'filter item' and 'clear all'
let filter = document.querySelector('.filter')

function clearUI() {
  let items = allItemLi.querySelectorAll('li')

  if (items.length === 0) {
    clearBtn.style.display = 'none'
    filter.style.display = 'none'
  }
  else {

    clearBtn.style.display = 'block'
    filter.style.display = 'block'
  }
}



// Clear all 


clearBtn.addEventListener('click', (e) => {
  allItemLi.innerHTML = '' // wrong way❌
  allItems = []
  localStorage.setItem('allItems', allItems)
  clearUI()
});


// Filter Items
function filterItems(event){

  // 1. Capturing user input when for changes
  const text = event.target.value.toLowerCase()
  console.log(text)

  // Everytime sometext is changed check all items (because everytime we're checking as items and other items are added)
  const items = allItemLi.querySelectorAll('li')

  // Iterating all items in all items array, 
  items.forEach(item => {
    const itemName = item.firstChild.textContent.toLocaleLowerCase()


    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    }
    else {
      item.style.display = 'none';
    }

  })

}


// Other Functions

function createElement(taskText){
  let newLi = document.createElement('li')
  // newLi.innerText = userInput.value
  newLi.appendChild(document.createTextNode(taskText))

  let newButton = document.createElement('button')
  newButton.className = "remove-item btn-link text-red";
  let newIcon = document.createElement('i');
  newIcon.className = "fa-solid fa-xmark";

  newButton.appendChild(newIcon)
  newLi.appendChild(newButton)

  allItemLi.appendChild(newLi)
}