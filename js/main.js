const input = document.getElementById('input')
const btn = document.getElementById('btnAdd')
const listTask = document.getElementById('tasks')
const db = JSON.parse(localStorage.getItem('tasks'))


window.onload = () =>{
    db.map(task=>{
        creatDivTask(task)
        onloadChecked(task)
    })
}


btn.onclick = () =>{
    if(!input.value) return

    const id = randomId()
    const data = {
        id,
        task: input.value,
        checked: 'false'
    }

    creatDivTask(data)
    save(data)
}

listTask.onclick = e =>{
    const el = e.target

    if(el.id === 'remove'){
        el.parentElement.remove()
        save()
        return
    }

    if(el.id === 'checke'){
        checked(e)
        return
    }

    if(el.id === 'unChecke'){
        unChecked(e)
        return
    }
    
}


function randomId(){
    const random = Math.floor(Math.random() * 92345652131 * 9)
    return 'peixer'+random
}