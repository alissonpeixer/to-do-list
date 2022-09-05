function creatDivTask(data){
    const container = document.createElement('div') 
    const btnCheck = document.createElement('button')
    const btnRemove =  document.createElement('button')
    const taskText = document.createElement('p')

    container.setAttribute('id', 'task')
    container.setAttribute('class', `${data.id} task_container`)

    container.setAttribute('checked', data.checked)

    btnCheck.setAttribute('id', 'checke')
    btnCheck.setAttribute('class', 'btn_unChecke')

    btnRemove.setAttribute('id', 'remove')
    btnRemove.setAttribute('class', 'btn_remove')

    taskText.setAttribute('id', 'task_text')
    taskText.setAttribute('class', 'task_text_style')

    taskText.innerText = data.task

    container.appendChild(btnCheck)
    container.appendChild(taskText)
    container.appendChild(btnRemove)

    listTask.appendChild(container)
}

