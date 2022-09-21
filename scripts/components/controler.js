import { Component } from "../core/component.js";

export class ControlComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.numBtn = this.component.querySelectorAll(".btn_numbers");
    this.numBtn.forEach((num) =>
      num.addEventListener("click", pressNumberHandler.bind(this))
    );

    this.scoreboard = this.component.querySelector(".input");
  

    this.deletBtn = this.component.querySelector(".num_btn-delete");

    this.deletBtn.addEventListener("click", deleteScoreValueHandler.bind(this));

    this.clearBtn = this.component.querySelector(".num_btn-backspace");
    this.clearBtn.addEventListener("click", clearNumberHandler.bind(this));

    this.enterBtn = this.component.querySelector(".num_btn-enter");
    this.enterBtn.addEventListener("click", enterNumberHandler.bind(this));

   


    
  }
}



function pressNumberHandler(e) {
  e.preventDefault();
  this.scoreboard.value += e.target.textContent;

}

function deleteScoreValueHandler(e) {
  e.preventDefault();
  this.scoreboard.value = ''
}

function clearNumberHandler() {
  const newValue = this.scoreboard.value.slice(0, this.scoreboard.value.length-1);

  this.scoreboard.value = newValue
  
}

function enterNumberHandler(e) {
  e.preventDefault();
}


