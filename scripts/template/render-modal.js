import { controler } from "../../script.js"

export const renderModal = () => {
    totalScore = controler.score.value

    return `    
    <div class="modal-container">
      <h2 class="modal__notice">
        Your score
        <span class="modal__notice-name">${totalScore}</span>
      </h2>
      <div class="modal__actions">
        <button class="modal__btn">New game</button>
        <button class="modal__btn">Exit</button>
      </div>
    </div>`
}