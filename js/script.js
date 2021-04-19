//-- Miniprojeto Calculadora --
//-- Equipe: Moacir, Israel Oliveira, Bruno Lacerda, Rafael Alexandre, Vinícius Ribeiro e Alexsander Lins --

// ----- 1ª VERSÃO --------

let operador1, operador2, operacao, estado;
let disp;

// Função: Inicializar a tela
function inicializaPagina(){
    disp = document.getElementById("tela");
    reset();
}
window.addEventListener("load", inicializaPagina);  //-- É acionado quando todos os recursos terminaram o carregamento --

// Função: Resetar
function reset(){
    operador1 = "0";    //-- O 1º valor --
    operador2 = "0";    //-- O 2º valor --
    operacao = null;    //-- Qual operação será efetuada
    estado = 1;         //-- Enquanto estiver no estado 1 os valores serão armazenados no 'operador1'
    disp.value = "0";   //-- O display começa zerado --
}

//-- Função para detectar os clicks nos botões --
function btnClick(objeto){    
    let me = objeto.target.value;   //-- Variável 'me' recebe o valor do objeto que foi clicado
    
    //--Se clicar em 'C' vai chamar a função para resetar tudo --
    if (me == 'C'){
        reset();
        return;
    }
    //-- Se clicar em '=' a operação será efetuada entre os operadores 1 e 2 --
    if (me == "="){
        let resultao;

        //-- Para realizar a operação matemática os operadores são antes convertidos para número de ponto flutuante 
        switch (operacao){
            case '+':
                resultao = parseFloat(operador1) + parseFloat(operador2);
                break;
            case '-':
                resultao = parseFloat(operador1) - parseFloat(operador2);
                break;
            case '*':
                resultao = parseFloat(operador1) * parseFloat(operador2);
                break;
            case '/':
                resultao = parseFloat(operador1) / parseFloat(operador2);
                break;
        }        
        disp.value = resultao.toString();    //-- O resultado é convertido para tipo string para ser exibido no display --
        estado = 1;                       
        operador1 = resultao;                //-- O operador1 recebe o valor do resultado da última operação   
        return;        
    }

    //-- Se 
    if ((me == '+') || (me == '-') || (me == '*') ||(me == '/')){
        operacao = me;
        estado = 2;     //-- Enquanto estiver no estado 2 os valores serão armazenados no 'operador2' --
        operador2 = 0;        
        return;
    }

    if ((me == '.') || (me >= '0') && (me <= '9')){
        if(estado == 1){
            operador1 += me;            
            disp.value = parseFloat(operador1).toString();  //-- Converte para número e depois para string para exibir no display
        } else if (estado == 2){
            operador2 += me;            
            disp.value = parseFloat(operador2).toString();  //-- Converte para número e depois para string para exibir no display
        }
    }
}

//-- Mapear os botões numéricos --
for (let i = 0; i < 10; i++) {
    const elementId = `num${i}`;   
    const numericBtn = document.getElementById(elementId);    
    numericBtn.addEventListener("click", btnClick);
}

//-- Mapear a tecla igual --
const igual = document.getElementById("resultado");
igual.addEventListener("click", btnClick);

//-- Mapear a tecla Clear para limpar a tela --
const clear = document.getElementById("limparTela");
clear.addEventListener("click", btnClick);

//-- Mapear os botões de operações --
const divisao = document.getElementById("divisao");
divisao.addEventListener("click", btnClick);

const multiplicacao = document.getElementById("multiplicacao");
multiplicacao.addEventListener("click", btnClick);

const subtracao = document.getElementById("subtracao");
subtracao.addEventListener("click", btnClick);

const soma = document.getElementById("soma");
soma.addEventListener("click", btnClick);
