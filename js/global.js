const criarBotaoVoltar = () => {
    const btnVoltar=  document.createElement('button');

    btnVoltar.innerText='Voltar';
    btnVoltar.style.marginTop='20px';
    
    function navegar(){
        window.location.href = '../index.html'
    };

    btnVoltar.addEventListener('click',navegar)

    document.body.appendChild(btnVoltar);
};

const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');
const btnP4 = document.querySelector('#inputP4');

if (btnP1){

    btnP1.addEventListener('click', () => {
        window.location.href='./pages/projeto01.html'}
    );

    btnP2.addEventListener('click',  () =>{
        window.location.href='./pages/projeto02.html'}
    );

    btnP3.addEventListener('click', () =>{
        window.location.href='./pages/projeto03.html'}
    );

    btnP4.addEventListener('click', () =>{
        window.location.href='./pages/projeto04.html'}
    );
} else {
    (window.onload = criarBotaoVoltar);
}