function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
} 
var text = document.querySelector('.text');

text.addEventListener('keypress', function(e){

    if(!verificaChar(e)) {
        e.preventDefault();
    }
})

function verificaChar(e) {

    const char = String.fromCharCode(e.keyCode);
    
    const padrão = '[a-z]';

    if(char.match(padrão)){
        console.log(char);
        return true; 
    }
}

function copiarTexto(){
    

    var textoCopiado = document.getElementById('textTwo')
    textoCopiado.select();//para selecionar o texto
    textoCopiado.setSelectionRange(0, 99999); //para dispositivos moveis

    document.execCommand("copy"); //vai copiar o texto selecionado
    inputRecebido.style.backgroundImage= "url('rindo.png')";
    inputRecebido.value = "";
   
    
}

var inputEnviado = document.getElementById('textOne');
inputEnviado.focus();

var inputRecebido = document.getElementById('textTwo')

var button = document.getElementById('btEncrypt');
button.onclick = mostraTextoCriptografado;

var button2 = document.getElementById('btDecrypt');
button2.onclick = mostraTextoDescripitografado;

var copiar = document.getElementById('btCopy');
copiar.onclick = copiarTexto;



function mostraTextoCriptografado(texto){
   
    var textoRecebido = inputEnviado.value;
    textoCripitografado = textoRecebido.replaceAll(/e/gi, "enter").replaceAll(/i/gi, "imes").replaceAll(/a/gi, "ai").replaceAll(/o/gi, "ober").replaceAll(/u/gi, "ufat");
    //alert(textoCripitografado);/// exibirá a mensagem recebida do input
    
    inputRecebido.value = textoCripitografado;

    inputEnviado.value = "";
    inputEnviado.focus();
    inputRecebido.style.backgroundImage= "none"; //quando a função for executada a imagem do texto recebido sumirá.
    }



function mostraTextoDescripitografado(texto){

    var textoRecebido = inputEnviado.value;
    textoDescripitografado = textoRecebido.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    //alert(textoDescripitografado);/// exibirá a mensagem recebida do input
    
    inputRecebido.value = textoDescripitografado;
    
    inputEnviado.value = "";
    inputEnviado.focus()
    inputRecebido.style.backgroundImage= "none"; 
    
}






