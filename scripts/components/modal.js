import { controler, landingPage, pageGame, wave } from "../../script.js";
import { Component } from "../core/component.js";

export class ModalComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.newGameBtn = this.component.querySelector("#modal__btn-strat");
    this.exitBtn = this.component.querySelector("#modal__btn-exit");

    this.newGameBtn.addEventListener("click", newGameHandler.bind(this));
    this.exitBtn.addEventListener("click", exitGameHandler.bind(this));

    this.textScore = () => {
        this.component.querySelector(".modal__notice-name").innerHTML =
          controler.curent;
    } 

    this.clearSetting = () =>{
      wave.wave0.classList.remove("supportWave");
      wave.wave1.classList.remove("supportWave");
      wave.wave2.classList.remove("supportWave");
      wave.wave1.classList.add("hide");
      wave.wave2.classList.add("hide");
      wave.wave3.classList.add("hide");
      controler.score.value = 0;
      controler.scoreboard.value = ''
      controler.curent = 0
    }
  }
}

function newGameHandler() {
  this.clearSetting()
  pageGame.gameStart();
  this.hide();
}

function exitGameHandler() {
  this.clearSetting();
  pageGame.hide();
  this.hide()
  landingPage.show();
}
