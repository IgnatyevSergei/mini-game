import { Component } from "./core/component.js";
import { renderBall } from "./template/render-ball.js";

export class PageGameComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.wrapper = this.component.querySelector(".game-page__wrapper");
    this.renderBalOnPage = () => {
      this.wrapper.insertAdjacentHTML("afterend", renderBall());
    };

    this.gameStart = ()=> {
        this.renderBalOnPage();
        setInterval(this.renderBalOnPage, 6000);
    }
    
  }
}
