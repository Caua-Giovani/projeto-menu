function criarBotaoVoltar(){
    const btnVoltar= document.createElement('button');

    btnVoltar.innerText='Voltar';
    btnVoltar.style.marginTop='20px';

    // btnVoltar.addEventListener('click',function(){
    //     window.location.href='../index.html'
    // });

    
    function navegar(){
        window.location.href = '../index.html'
    };

    btnVoltar.addEventListener('click',navegar)

    document.body.appendChild(btnVoltar);
};

window.onload = criarBotaoVoltar();

