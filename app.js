// ########## RULES MODAL ########## //
const rulesBtn = document.querySelector('.rules');
const rulesModal = document.querySelector('.rules-modal');
const closeModal = document.querySelector('.rules-modal svg');

rulesBtn.addEventListener('click', () => {
  rulesModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  rulesModal.style.display = 'none';
});
