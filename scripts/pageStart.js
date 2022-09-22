import { pageGame } from "../script.js";
import { Component } from "./core/component.js";

class PageStartComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.btn = this.component.querySelectorAll(".btn");
    this.btn.forEach((btn) =>
      btn.addEventListener("click", changeHandler.bind(this))
    );
  }
}

function changeHandler(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn-start")) {
    pageGame.show();
    this.hide();
    pageGame.gameStart()
  }
}

export default PageStartComponent;
