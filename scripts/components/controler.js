import { pageGame } from "../../script.js";
import { Component } from "../core/component.js";

export class ControlComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.score = this.component.querySelector(".score_text-input");

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

    this.curent = 0;

    
  }
}

function pressNumberHandler(e) {
  e.preventDefault();
  this.scoreboard.value += e.target.textContent;
}

function deleteScoreValueHandler(e) {
  e.preventDefault();
  const newValue = this.scoreboard.value.slice(
    0,
    this.scoreboard.value.length - 1
  );

  this.scoreboard.value = newValue;
}

function clearNumberHandler() {
  this.scoreboard.value = "";
}

function enterNumberHandler() {
  if (this.scoreboard.value === window.calculationBall) {
    this.ball = document.getElementById("ball");
    this.ball.classList.add("hide-ball");
    this.scoreboard.value = "";
    this.curent += 10;
    this.score.value = this.curent;
    clearTimeout(pageGame.setWaveUp);
    pageGame.gameStart();
    
    
  } else {
    if (this.score.value<=0) {
      this.score.value = 0
      this.curent = 0
    } else{this.curent -= 10;
    this.score.value = this.curent;} 
  }
}
