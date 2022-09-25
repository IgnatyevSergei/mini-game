import { Component } from "../core/component.js";

export class WaveComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.wave0 = this.component.querySelector(".wave0");
    this.wave1 = this.component.querySelector(".wave1");
    this.wave2 = this.component.querySelector(".wave2");
    this.wave3 = this.component.querySelector(".wave3");

    console.log(this.wave0);
    console.log(this.wave2);
    console.log(this.wave3);

    this.settingWave =  waveUp.bind(this);
  }
}

function finishGame() {
  console.log("Все ппц");
}
function waveUp() {
  if (!this.wave0.classList.contains("supportWave")) {
    this.wave0.classList.add("supportWave");
    this.wave1.classList.remove("hide");
  } else if (!this.wave1.classList.contains("supportWave")) {
    this.wave1.classList.add("supportWave");
    this.wave2.classList.remove("hide");
  } else if (!this.wave2.classList.contains("supportWave")) {
    this.wave1.classList.add("supportWave");
    this.wave2.classList.remove("hide");
  } else if (!this.wave3.classList.contains("hide")) {
    finishGame();
  }
}
