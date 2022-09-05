// const que pega as div do html

const inputTarefas = document.querySelector('.input');
const tarefas = document.querySelector('.tarefas');


document.addEventListener('click', function (e) {
    let el = e.target;


    if(el.classList.contains('adicionar')){

        if(!inputTarefas.value) return // vai verificar se tem algum valor na input
        criaTarefa(inputTarefas.value)
    }

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        saveTarefa();
        
    }

})



function criaTarefa(textvalue){
    const li = criaLi();

    li.innerText = textvalue;
    tarefas.appendChild(li);
    CriaBtn().remove(li);
    clearInput();

    saveTarefa();
    
}


function clearInput(){
    inputTarefas.value = '';
    inputTarefas.focus();
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}





function CriaBtn(){
    return({
        remove: function(li){
            li.innerText += '';
            let btn = document.createElement('button');
            btn.innerText = 'apagar';
            btn.setAttribute('class','apagar');
            li.appendChild(btn);
        }
    })
    
}


function saveTarefa(){
    const liTarefa = document.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for(tarefa of liTarefa){
        let textoTarefa = tarefa.innerText;

        textoTarefa = textoTarefa.replace('apagar','');
        textoTarefa = textoTarefa.trim();

        listaDeTarefas.push(textoTarefa);
    }

    const listJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',listJson);
}


function reloadTarefa(){
    const tarefass = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefass);

    for(tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}

reloadTarefa();