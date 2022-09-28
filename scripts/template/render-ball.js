import { Calculations } from "../calculations/calculations.js";

export const renderBall = () => {
  
  const position = Calculations.randomInteger(13, 55);
  const number1 = Calculations.randomInteger(20, 99);
  const number2 = Calculations.randomInteger(1, 20);
  const sign = ["+", "-"];
  const randomSign = sign[Calculations.randomInteger(0, 1)];

  const result = Calculations.calculation(
    number1,
    number2,
    randomSign
  );

  return `
    <div style="left: ${position}%;" class="ball" id="ball" data-calculation = ${result} >
            <div class="sign" id="sign">${
              randomSign
            }</div>
            <div class="numbers">
              <span class="number" id="numUp">${number1}</span>
              <span class="number" id="numDown">${number2}</span>
            </div>
          </div>    
    `;
};
