function pulaLinha() {
        document.write("<br><br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    } 

   function copiarTexto(){
        
        var textoCopiado = document.getElementById('recebido')
        textoCopiado.select();//para selecionar o texto
        textoCopiado.setSelectionRange(0, 99999); //para dispositivos moveis
    
        document.execCommand("copy"); //vai copiar o texto selecionado
    }
    
    var inputEnviado = document.getElementById('enviado');
    inputEnviado.focus();

    var inputRecebido = document.getElementById('recebido')
    
    var button = document.getElementById('botao1');
    button.onclick = mostraTextoCriptografado;

    var button2 = document.getElementById('botao2');
    button2.onclick = mostraTextoDescripitografado;
   
    var copiar = document.getElementById('copiar');
    copiar.onclick = copiarTexto;



    function mostraTextoCriptografado(texto){
       
        var textoRecebido = inputEnviado.value;
        textoCripitografado = textoRecebido.replaceAll(/e/gi, "enter").replaceAll(/i/gi, "imes").replaceAll(/a/gi, "ai").replaceAll(/o/gi, "ober").replaceAll(/u/gi, "ufat");
        //alert(textoCripitografado);/// exibirá a mensagem recebida do input
        
        inputRecebido.value = textoCripitografado;

        inputEnviado.value = "";
        inputEnviado.focus();
        }

    

    function mostraTextoDescripitografado(texto){

        var textoRecebido = inputEnviado.value;
        textoDescripitografado = textoRecebido.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
        //alert(textoDescripitografado);/// exibirá a mensagem recebida do input
        
        inputRecebido.value = textoDescripitografado;
        
        inputEnviado.value = "";
        inputEnviado.focus()
        
        
    }

   



  
   


  