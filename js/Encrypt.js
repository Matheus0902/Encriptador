import { elements } from "./Elements.js"

export class Encrypt {
  constructor(root) {
    elements.home = true
    this.root = document.querySelector(root)
    this.filterChar()
  }


  checkChar(e) {
    
    const char = String.fromCharCode(e.keyCode);
        
    const pattern = '[a-z ]';
    
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

}
