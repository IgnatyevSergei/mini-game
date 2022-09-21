import { Component } from "./core/component.js";
import { renderBall } from "./template/render-ball.js";

export class PageGameComponent extends Component {
    constructor (id) {
        super(id)
    }

    init () {
        this.rander = setInterval(renderBall, 0)
    }
}