import { Component } from "./core/component.js";
import { renderBall } from "./template/render-ball.js";
import { wave } from "../script.js";

export class PageGameComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.wrapper = this.component.querySelector(".game-page__wrapper");
    this.setWaveUp = setTimeout(wave.settingWave, 15000)
    this.renderBalOnPage = () => {
      this.wrapper.insertAdjacentHTML("afterend", renderBall());
      window.calculationBall =
        document.getElementById("ball").dataset.calculation;
      
      
    };

    

    

    this.gameStart = () => {
      this.renderBalOnPage();
      
    };

    
  }
}

