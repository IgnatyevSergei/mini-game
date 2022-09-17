import { ControlComponent } from "./scripts/components/controler.js";
import { PageGameComponent } from "./scripts/pageGame.js";
import PageStartComponent from "./scripts/pageStart.js";


export const landingPage = new PageStartComponent ('page-start')

export const pageGame = new PageGameComponent("game-page");

export const controler = new ControlComponent("control");