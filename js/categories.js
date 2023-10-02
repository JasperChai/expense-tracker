// when user clicks on the add button, make the modal box from display:none to display:block
const addCategoryBtn = document.querySelector('#add-category-btn')
const addCategoryModal = document.querySelector('#add-category-modal')

addCategoryBtn.addEventListener('click',() => {
  addCategoryModal.style.display = 'block'
})

// if press create, then clear form and turn display back to none

const createBtn = document.querySelector('#create-btn')
createBtn.addEventListener('click',() => {
  event.preventDefault()
  const categoryName = document.querySelector('#category-name')
  console.log('category is', categoryName.value)

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  currentUser.categories.expenses.push(categoryName.value)
  console.log(currentUser)
  localStorage.setItem('currentUser', JSON.stringify(currentUser))
  addCategoryModal.style.display = 'none'
  addCategoryModal.reset()
})

// 🧠 Create the eventlistner logic for cancel button so that when user clicks on it, the input value is cleared and the modal disappers
const deleteBtn = document.querySelector('#delete-btn')

deleteBtn.addEventListener('click',() => {
  event.preventDefault()
  addCategoryModal.style.display = 'none'
  addCategoryModal.reset()
})

