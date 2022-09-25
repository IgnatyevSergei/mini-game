import { ControlComponent } from "./scripts/components/controler.js";
import { WaveComponent } from "./scripts/components/wave.js";
import { PageGameComponent } from "./scripts/pageGame.js";
import PageStartComponent from "./scripts/pageStart.js";


export const landingPage = new PageStartComponent ('page-start')

export const wave = new WaveComponent("wave");

export const pageGame = new PageGameComponent("game-page");

export const controler = new ControlComponent("control");



