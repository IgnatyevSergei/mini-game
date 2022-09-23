import { Calculations } from "../calculations/calculations.js";

export const renderBall = () => {
  
  const position = Calculations.randomInteger(13, 55);
  const number1 = Calculations.randomInteger(20, 99);
  const number2 = Calculations.randomInteger(1, 20);
  const sign = ["+", "-"];

  const result = Calculations.calculation(
    number1,
    number2,
    sign[Calculations.randomInteger(0, 1)]
  );

  return `
    <div style="left: ${position}%;" class="ball" id="ball" data-calculation = ${result} >
            <div class="sign" id="sign">${
              sign[Calculations.randomInteger(0, 1)]
            }</div>
            <div class="numbers">
              <span class="number" id="numUp">${number1}</span>
              <span class="number" id="numDown">${number2}</span>
            </div>
          </div>    
    `;
};
