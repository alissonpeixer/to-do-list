function checked(data){
    const el = data.target

    const container = el.parentElement
    const btnChecked = container.querySelector('#checke')
    const textTask = container.querySelector('p')
    const classContainer = container.classList[0]

   
    container.setAttribute('checked', 'true')
    container.setAttribute('class', `${classContainer} task_container taskIsChecked`)

    btnChecked.setAttribute('id','unChecke')
    btnChecked.setAttribute('class','btn_checke')
    
    textTask.setAttribute('class', 'task_text_style task_text_checked')
 
    
    save(data)
    

}


function unChecked(data){
    const el = data.target

    const container = el.parentElement
    const btnChecked = container.querySelector('#unChecke')
    const textTask = container.querySelector('p')
    const classContainer = container.classList[0]

   
    container.setAttribute('checked', 'false')
    container.setAttribute('class', `${classContainer} task_container`)

    btnChecked.setAttribute('id','checke')
    btnChecked.setAttribute('class','btn_unChecke')
    
    textTask.setAttribute('class', 'task_text_style')
    
    save(data)
}


function onloadChecked(data){
    const container = document.getElementsByClassName(data.id)
    
    for(let task of container){
        const classContainer = task.classList[0]
        if(task.getAttribute('checked') === 'true'){
            const btnChecked = task.querySelector('#checke')
            const textTask = task.querySelector('p')

            task.setAttribute('class', `${classContainer} task_container taskIsChecked`)
           
            btnChecked.setAttribute('id','unChecke')
            btnChecked.setAttribute('class','btn_checke')
            
            textTask.setAttribute('class', 'task_text_style task_text_checked')
        }

    }

}