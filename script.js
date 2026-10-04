const addbtn = document.getElementById('addBtn')
const todoinput = document.getElementById('todoInput')
const todolist = document.getElementById('todoList')

addbtn.addEventListener('click', () => {
    
    const inputvalue = todoinput.value.trim()
    if (inputvalue === '') {
        alert('Please something do')
        return ;
    }

    
    const litag = document.createElement('li')
    litag.className = 'litag'
    
    const iconDiv = document.createElement('div')
    iconDiv.className = 'icon-container'

    const spantag = document.createElement('span')
    spantag.className = 'span-container'
    spantag.textContent = inputvalue

    spantag.addEventListener('click', () => {
        const linethough = spantag.className === 'done'

        linethough ? spantag.className = 'span-container' : spantag.className = 'done' ;
    })

    const editspan = document.createElement('span') 
    editspan.className = 'fa-solid fa-pen-to-square'

    editspan.addEventListener('click', () => {
    const newtext = prompt('Edit Todo', spantag.textContent)

    if (newtext !== null && newtext !== '') {
    spantag.textContent = newtext
}
})

    const trash = document.createElement('span')
    trash.className = "fa-solid fa-trash"

    trash.addEventListener('click', () => {
        litag.remove()
    })

    iconDiv.append(editspan,trash)
    litag.append(spantag,iconDiv)
    todolist.appendChild(litag)
    todoinput.value = ""
    todoinput.focus()

    
    
})