const modalToggle = () => {
    const modalInstruction = document.querySelector('.modal-box');
    const modalButton = document.querySelector('.modal-button');
    modalInstruction.classList.add('modal-show');
    modalButton.addEventListener('click', () => {
        modalInstruction.classList.toggle('modal-show');
    })
};