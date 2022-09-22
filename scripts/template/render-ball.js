
export const renderBall = () => {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

  const position = randomInteger(13, 55);

  const number1 = randomInteger(20, 99);
  const number2 = randomInteger(1, 20);
  const sign = ["+", "-"];

  return `
    <div style="left: ${position}%;" class="ball" id="ball">
            <div class="sign" id="sign">${sign[randomInteger(0, 1)]}</div>
            <div class="numbers">
              <span class="number" id="numUp">${number1}</span>
              <span class="number" id="numDown">${number2}</span>
            </div>
          </div>    
    `
};
