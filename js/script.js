window.onload = function() {
  
  let botoes = [];
  
  // Pegando os botões
  
  // Botões específicos
  
  let tela = document.getElementById("tela");
  let resultado = document.getElementById("resultado");
  let limparTela = document.getElementById("limparTela");
  let apagarAnterior = document.getElementById("apagarAnterior");
  
  // Números
  
  botoes.push(document.getElementById("num0"));
  botoes.push(document.getElementById("num1"));
  botoes.push(document.getElementById("num2"));
  botoes.push(document.getElementById("num3"));
  botoes.push(document.getElementById("num4"));
  botoes.push(document.getElementById("num5"));
  botoes.push(document.getElementById("num6"));
  botoes.push(document.getElementById("num7"));
  botoes.push(document.getElementById("num8"));
  botoes.push(document.getElementById("num9"));
  
  // Operações
  
  botoes.push(document.getElementById("soma"));
  botoes.push(document.getElementById("subtracao"));
  botoes.push(document.getElementById("divisao"));
  botoes.push(document.getElementById("multiplicacao"));
  
  // Ponto
  
  botoes.push(document.getElementById("ponto"));
  
  // Funções
  
  // Adicionando evento aos botões
  
  for(const botao of botoes){
    botao.addEventListener("click", mostrarTela);
  }
  
  function mostrarTela(){
    tela.value += this.value;
  }
  
  // Resultado
  
  resultado.onclick = function(){
    let valorTela = eval(tela.value);
    tela.value = valorTela;
  };
  
  // Limpar a tela 
  limparTela.onclick = function() {
    tela.value = "0"; 
  }
  
  // Apagar dígito anterior
  apagarAnterior.onclick = () => {
    let valorTela = tela.value.substring(0, tela.value.length - 1);
    tela.value = valorTela;
  };
  
}


