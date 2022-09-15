import { Component } from "../core/component.js";

export class KeyboardComponent extends Component {
    constructor (id){
        super(id)
    }

    init () {
        this.numBtn = this.component.querySelectorAll(".btn_numbers");
         this.numBtn.forEach(num => num.addEventListener('click', pressNumberHandler.bind(this)))
        
    }
}

function pressNumberHandler (e) {
e.preventDefault();
console.log(e.target.textContent);

}