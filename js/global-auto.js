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




// Evento que é disparado quando o conteúdo do DOM (estrutura HTML) é totalmente carregado
  const loadTheme = () =>{
    // Verifica no localStorage se existe um tema salvo. Se não houver, define o tema padrão como 'light'
    const theme = localStorage.getItem('theme');
    if(theme === 'dark'){
      // Adiciona a classe correspondente ao tema (light ou dark) no corpo da página (body)
      container.classList.toggle('dark')
    }
  }
  (window.onload = loadTheme)

  
// Seleciona o botão de alternar tema usando o ID 'toggle-theme' e adiciona um evento de clique
  const button = document.querySelector('.themeToggle')
  const container = document.querySelector('body')

  button.addEventListener('click',()=>{
    // Verifica qual tema está atualmente aplicado no body (light ou dark)
    // Se o tema for 'light', muda para 'dark', caso contrário, muda para 'light'

    // Adiciona a nova classe de tema ao body
    container.classList.toggle('dark');

    if (localStorage.getItem('theme')){
      // Remove as classes de tema antigas ('light' e 'dark') para evitar conflito
      localStorage.removeItem('theme')
    } 
    else{
      // Armazena o novo tema no localStorage para que a preferência do usuário seja mantida
      localStorage.setItem('theme','dark')
    };
  });