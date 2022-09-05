function welcome(){
    const titulo = document.querySelector('.title');
    const bemVindo = document.querySelector('.bemvindo');

    document.addEventListener('click', function(e){
        const el = e.target;
        if(el.classList.contains('enviar')){
            const inputText = document.querySelector('.name');
            if (!inputText.value) return;
            setValue(inputText.value);
            el.parentElement.remove()
            
        }   
    } )

    function setValue(userBack){
        const timeDay = welcomeMessage();
        creatMsg(timeDay,userBack);
    }
    function creatMsg(text,user) {
        const h1 = creatH1()
        h1.innerHTML= `${text} ${user}`;
        bemVindo.appendChild(h1);
    }
    function getUser(){
        const input= creatIputText();
        const btn =  creatBtn();
        const p = creatP();
        p.innerText = 'Como gostaria de ser chamado?';
        titulo.appendChild(p);
        titulo.appendChild(input);
        titulo.appendChild(btn);
    }

    
    function creatIputText(){
        const input = document.createElement('input');
        input.setAttribute('class','name');
        input.setAttribute('type','text');
        input.setAttribute('maxlength','7')
        input.setAttribute('placeholder','Nome')
        return input;
    }
    function creatBtn(){
        const btn = document.createElement('button');
        btn.innerText = 'Enviar';
        btn.setAttribute('class','enviar');
        return btn;
    }
    function creatP() { const p = document.createElement('p'); return p; }
    function creatH1(){const h1 = document.createElement('h1');return h1;}

    


    function time() { const time = new Date();
        return time.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'America/Sao_Paulo'
        })  
    }
    function welcomeMessage() {
        const vTime = Array.from(time());
        let hora = [vTime[0] + vTime[1]]
    
        let text;
        if (hora <= 00 || hora <= 12) {
            dayText = 'Bom Dia - '
        } else if (hora <= 12 || hora <= 18) {
            dayText = 'Boa Tarde - '
        } else if (hora || hora <= 00) {
            dayText = 'Bom Noite - '
        }
        return dayText;
    }

    getUser();//start
}
welcome();///START 
