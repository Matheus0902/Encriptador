import { elements } from "../js/Elements.js"
import * as sounds from "../js/Sounds.js"

export class EncryptViews {
  constructor(root) {
    this.root = document.querySelector(root)
    this.actions()
    this.main = document.querySelector('main')

  }

  actions() {
    const encryptButton = document.querySelector('#encryptButton')
    encryptButton.onclick = () => { 
      
      elements.action = 'criptografando...'
      elements.home = false
      elements.display = 'b'
      this.encryptMessage()
    }

    const decryptButton = document.querySelector('#decryptButton')
    decryptButton.onclick = () => {
      
      elements.action = 'descriptografando...'
      elements.home = false
      elements.display = 'b'
      this.decryptMessage()
    }
  }
  
  removeAllSections() {
    this.main.querySelectorAll('section').forEach(section => {
      section.remove()
    })
  }

  createSection(text) {
    const section = document.createElement('section') 

    switch (elements.display) {
      case "a":
          section.innerHTML = `
          
          <label for="#messageReceived" class="sr-only">Digite o texto que deseja criptografar/descriptografar</label>
          <textarea class="textField" type="text" id="messageReceived" placeholder="Digite seu texto..."></textarea>
                        
          <p>⚠ Apenas letras minúsculas e sem acento.</p>
            
          <div id="boxButtons">
            <button class="buttons" type="button" id="encryptButton">CRIPTOGRAFAR</button>

            <button class="buttons" type="button"id="decryptButton">DESCRIPTOGRAFAR</button>
          </div>
          `
          const encryptButton = section.querySelector('#encryptButton')
          encryptButton.onclick = () => { 
            
            elements.action = 'criptografando...'
            elements.home = false
            elements.display = 'b'
            this.encryptMessage()
          }

          const decryptButton = section.querySelector('#decryptButton')
          decryptButton.onclick = () => {
            
            elements.action = 'descriptografando...'
            elements.home = false
            elements.display = 'b'
            this.decryptMessage()
          }
          break

      case "b":
          section.innerHTML = `
            
          <label for="#messageSent" class="sr-only">Digite o texto que deseja criptografar/descriptografa</label>
          <textarea disabled class="textField" type="text" id="messageSent" placeholder="Aguardando mensagem..."></textarea>
          
          <div id="boxButtons">
            <button class="buttons" type="button" id="returnButton">VOLTAR</button>

            <button class="buttons" type="button" id="copyMessageButton" >COPIAR</button>
          </div>
          `
          sounds.alert.play()
          
          const field = section.querySelector('#messageSent')
          field.value = text

          const returnButton = section.querySelector('#returnButton')
          returnButton.onclick = () => {
            
            elements.display = 'a'
            elements.home = true
            this.displayUpdate('')
          }

          const copyMessageButton = section.querySelector('#copyMessageButton')
          copyMessageButton.onclick = () => {
            
            this.copyMessage()
            elements.home = true
            elements.display = 'b'
            sounds.alert.volume = 0
            this.displayUpdate('')
          }
        break

      case "c":
          section.innerHTML = `
          <div id="loading">
            <img src="./assets/hacker.png" class="oscillate" alt="Imagem de um hacker"> 
            <p type="text" class="oscillate" id="loadingMessage"></p>
          </div>
          `
          sounds.typing.play()
          sounds.alert.volume = 1
          const loadingMessage = section.querySelector('#loadingMessage')
          loadingMessage.textContent = elements.action
    }

    return section
  }

  displayUpdate(text) {
    let time = 0
    this.removeAllSections()

    if(!elements.home){
      elements.display = 'c'
      const section = this.createSection('')
      this.main.append(section)
      time = 6000
      elements.display = 'b'
    }

    setTimeout(() => {
      
      sounds.typing.pause()
      this.removeAllSections()
      const section = this.createSection(text)
      this.main.append(section)
    }, time)
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

  copyMessage() {
    
    const field = this.root.querySelector('#messageSent')
    field.disabled = false
    field.select()
    document.execCommand('copy')
  }
  
}