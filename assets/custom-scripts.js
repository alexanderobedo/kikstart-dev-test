
// PDP ingredients modal
const modals = document.querySelectorAll('.cs-ingredients_modal');
const overlays = document.querySelectorAll('.cs-ingredients_overlay');
const btnCloseModals = document.querySelectorAll('.btn-close_modal');
const btnsShowModals = document.querySelectorAll('.btn-show_modal');

function openModal(index) {
    modals[index].classList.remove('hidden');
    overlays[index].classList.remove('hidden');
}

function closeModal(index) {
    modals[index].classList.add('hidden');
}

function removeHidden() {
    overlays.forEach(function (overlayDiv) {
      overlayDiv.classList.remove('hidden');
    });
}
function addHidden() {
    overlays.forEach(function (overlayDiv) {
      overlayDiv.classList.add('hidden');
    });
}

btnsShowModals.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        openModal(index);
        removeHidden(index);
    });
});

btnCloseModals.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        closeModal(index);
        addHidden();
    });
});

overlays.forEach((overlay, index) => {
    overlay.addEventListener('click', () => closeModal(index));
});




