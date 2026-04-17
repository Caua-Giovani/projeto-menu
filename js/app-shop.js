const input01 = document.getElementById('valor01')
const input02 = document.getElementById('valor02')

const resultado = document.getElementById('resultado')


function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
        mensagem()
        

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `  <h1>Total da Compra</h1>
            <p>Você esta adquirindo ${v2} unidade(s) com valor unitário de R$ ${v1.toFixed(2)}</p> 
            <strong>Sua compra ficou um total de: <span>R$ ${(v1 * v2).toFixed(2)}</span></strong>
        `; 
    };

};

function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
        mensagem()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `
            <h1>Desconto Aplicado</h1>
            <p>Foi aplicado um desconto de ${v2}% sobre o valor de R$ ${v1.toFixed(2)}. </p> 
            <strong>Valor final com desconto: <span>R$ ${(v1-(v1 * v2/100)).toFixed(2)}</span></strong>

        `; 
    };
};

function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
        mensagem()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `      
            <h1>Juros Aplicado</h1>
            <p>Foi aplicado um acréscimo de ${v2}% sobre o valor de R$ ${v1.toFixed(2)}. </p> 
            <strong>Valor final com juros: <span>R$ ${(v1+(v1 * v2/100)).toFixed(2)}</span></strong>
        `; 
    };
};

function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
        mensagem()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `    
            <h1>Comissão Calculada</h1>
            <p>Comissão de ${v2}% sobre uma venda de R$ ${v1.toFixed(2)}. </p> 
            <strong>Valor da comissão: <span>R$ ${((v1 * v2)/100).toFixed(2)}</span></strong>
        `; 
    };
};

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
        mensagem()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `      
            <h1>Lucro Obtido</h1>
            <p>Preço de venda R$ ${v1.toFixed(2)} | Custo: R$ ${v2.toFixed(2)}. </p> 
            <strong>Resultado financeiro: <span>R$ ${(v1-v2).toFixed(2)}</span></strong>
        `; 
    };
};

function limpar(){
    resultado.style.display='none';
    input01.value = '';
    input02.value = '';
    
    input01.focus();
};

function mensagem(){
    resultado.innerHTML = `  <h1>Erro na validação</h1>
            <p>Por favor, informe valores numéricos válidos nos dois campos.</p> 
        `;
    input01.focus()
};








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