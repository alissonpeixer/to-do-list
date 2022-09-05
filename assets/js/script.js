/*
const inputTarefas = document.querySelector('.input-tarefas');
const btnAdd = document.querySelector('.btn');
const tarefas = document.querySelector('#tarefas');

inputTarefas.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if(!inputTarefas.value) return;
        criaTarefa(inputTarefas.value);
    }
})

btnAdd.addEventListener('click',function(){
    if(!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
    
})

document.addEventListener('click', function(el){
    const e = el.target;
    if(e.classList.contains('apagar')){
        e.parentElement.remove();
        salvaTarefas();
    }
})

function criaTarefa(text){
    limpaInput()
    const li = criaLi();
    li.innerText = text;
    criaBtnClear(li);
    tarefas.appendChild(li);
    salvaTarefas();
}


function limpaInput() {
    inputTarefas.value = '';
    inputTarefas.focus();
}

function criaLi(){const li = document.createElement('li'); return li;}

function criaBtnClear(li){
    li.innerText += '   ';
    const btn = document.createElement('button');
    btn.innerText = 'Apagar';
    btn.setAttribute('class','btn apagar');
    li.appendChild(btn);
    inputTarefas.value = '';
    inputTarefas.focus();
}



// salvar as tarefas

function salvaTarefas(){
    const liTarefas = document.querySelectorAll('li');
    const listaDeTarefas = [];

    for(tarefa of liTarefas){
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('APAGAR','').trim();  
        listaDeTarefas.push(textoTarefa);
    }
    const listJSON  = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',listJSON);
    console.log(listJSON);
}

function relodTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}

relodTarefas()
*/

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
