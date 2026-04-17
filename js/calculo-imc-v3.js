
// CAPTURA GLOBAL DOS ELEMENTOS

const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR

function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}



// FUNÇÃO PRINCIPAL

function calcularIMC() {

  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  // Validação
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    mostrarResultado('Por favor, insira valores válidos.');
    return;
  }

  // Cálculo
  const imc = peso / (altura * altura);
  
  // let classificacao = classificar(imc)
 

  // Template String
  mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificar(imc)}).`);
};

function classificar(imc){

  // Classificação
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidade';
};

// LIMPAR CAMPOS

function limparCampos() {
  formulario.reset();
  inputPeso.focus();
  mostrarResultado('Preencha os campos e clique em "Calcular".');
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