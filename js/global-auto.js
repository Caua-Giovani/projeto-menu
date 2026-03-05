const criarBotaoVoltar = () => {
    const btnVoltar=  document.createElement('button');

    btnVoltar.innerText='Voltar';
    btnVoltar.className='btn-navegacao'
    
    function navegar(){
        window.location.href = '../index.html'
    };

    btnVoltar.addEventListener('click',navegar)

    document.body.appendChild(btnVoltar);
};



// 1. Lógica Automática para o Menu (Index)
// Buscamos todos os inputs do tipo botão dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]')
console.log(botoesProjeto)

if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            // O index começa em 0, então somamos 1 para bater com "projeto01", "projeto02"...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
} else {
    window.onload = criarBotaoVoltar();
}

