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

    window.addEventListener("keypress", pressButtonHandler.bind(this));

    this.curent = 0;

    this.pressBtnEffect = () => {
      this.button.classList.add("pressBtn");
      setTimeout(() => this.button.classList.remove("pressBtn"), 80);
    };

    this.enter = () => {
      if (this.scoreboard.value === window.calculationBall) {
        this.ball = document.getElementById("ball");
        this.animation = document.getElementById("animation");
        this.animation.classList.remove("hide");
        this.animation.classList.add("img1");
        setTimeout(()=> this.animation.classList.add("hide"), 500);
        this.ball.classList.add("hide-ball");
        this.scoreboard.value = "";
        this.curent += 10;
        this.score.value = this.curent;
        clearTimeout(pageGame.setWaveUp);
        setTimeout(pageGame.gameStart, 1000);
      } else {
        this.scoreboard.value = ''
        if (this.score.value <= 0) {
          this.score.value = 0;
          this.curent = 0;
        } else {
          this.curent -= 10;
          this.score.value = this.curent;
        }
      }
    };
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
  this.enter();
}

function pressButtonHandler(e) {
  this.button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (this.button.textContent == "enter") {
    this.pressBtnEffect();
    this.enter();
  } else if (this.button.textContent == "clear") {
    this.scoreboard.value = "";
    this.pressBtnEffect();
  } else {
    this.scoreboard.value += this.button.textContent;
    this.pressBtnEffect();
  }
}
