const text = document.querySelector('.text');

text.addEventListener('keypress', function(e){

    if(!verificChar(e)) {
        e.preventDefault();
    }
})
    
function verificChar(e) {
    
    const char = String.fromCharCode(e.keyCode);
        
    const padrão = '[a-z]';
    
    if(char.match(padrão)){
        console.log(char);
        return true; 
    }
}

const textOne = document.getElementById('textOne');
textOne.focus();

const textTwo = document.getElementById('textTwo')

/* Função para copiar o texto criptografado/descriptografado */

function copyText(){

    textTwo.select();
    textTwo.setSelectionRange(0, 99999);

    document.execCommand("copy");
    textTwo.style.backgroundImage= "url('./assets/rindo.png')";
    textTwo.value = "";  
}

const btCopy = document.getElementById('btCopy');
btCopy.onclick = copyText;

/* Função para mostrar o texto criptografado */
    
function playEncryptedText(){
       
    const textReceived = textOne.value;
    let textoCripitografado = textReceived.replaceAll(/e/gi, "enter").replaceAll(/i/gi, "imes").replaceAll(/a/gi, "ai").replaceAll(/o/gi, "ober").replaceAll(/u/gi, "ufat");
        
    textTwo.value = textoCripitografado;
    textTwo.style.backgroundImage= "none";

    textOne.value = "";
    textOne.focus();
}

const btEncrypt = document.getElementById('btEncrypt');
btEncrypt.onclick = playEncryptedText;

/* Função para mostrar o texto descriptografado */

function playDecryptedText(){

    const textReceived = textOne.value;
    let textoDecrypted = textReceived.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
        
    textTwo.value = textoDecrypted;
    textTwo.style.backgroundImage= "none";  
        
    textOne.value = "";
    textOne.focus() 
}

const btDecrypt = document.getElementById('btDecrypt');
btDecrypt.onclick = playDecryptedText;

   



  
   


  