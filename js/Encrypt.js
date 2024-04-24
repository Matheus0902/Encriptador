export class Encrypt {
  constructor(root) {
    this.root = document.querySelector(root)

    this.sendMessage()
    this.filterChar()
    this.getMessage()
  }

  encryptMessage() {

      const messageReceived = this.root.querySelector('#messageReceived').value
      
      const encryptedMessage = messageReceived.replaceAll(/e/gi , 'eseet').replaceAll(/i/gi , 'ietd').replaceAll(/a/gi , 'aie').replaceAll(/o/gi , 'olier').replaceAll(/u/gi , 'isetr')
      
      this.displayUpdate(encryptedMessage)
  }

  decryptMessage() {

    const messageReceived = this.root.querySelector('#messageReceived').value
    
    const decryptedMessage = messageReceived.replaceAll(/eseet/gi , 'e').replaceAll(/ietd/gi , 'i').replaceAll(/aie/gi , 'a').replaceAll(/olier/gi , 'o').replaceAll(/isetr/gi , 'u')
    
    this.displayUpdate(decryptedMessage)
}

  displayUpdate(message) {
    this.root.querySelector('#messageReceived'). value = ''
    this.root.querySelector('#messageSent').value = message
  }

  
  checkChar(e) {
    
    const char = String.fromCharCode(e.keyCode);
        
    const pattern = '[a-z]';
    
    if(char.match(pattern)){
        return true; 
    }
  }

  filterChar() {
    const main = this.root.querySelector('.main')

    main.addEventListener('keypress', (e) => {

      if(!this.checkChar(e)) {
          e.preventDefault();
      }
    })
  }  

  sendMessage(){
    const encryptButton = this.root.querySelector("#encryptButton")
    const decryptButton = this.root.querySelector('#decryptButton')
    const { value } = this.root.querySelector('#messageReceived')

    encryptButton.onclick = () => {
      this.encryptMessage(value)
    }

    decryptButton.onclick = () => {
      this.decryptMessage(value)
    }
  } 

  getMessage() {
    const copyMessageButton = this.root.querySelector('#copyMessageButton')
    let field = this.root.querySelector('#messageSent')

    copyMessageButton.addEventListener('click', (e) => {
      field.select()
      document.execCommand('copy')
    })

  }
}
