document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var modalButton = document.getElementById('defaultModalButton');
    var modal = document.getElementById('defaultModal');
    var closeModalButton = document.getElementById('closeModalButton');
    var discardButton = document.getElementById('discardButton');

    modalButton.addEventListener('click', function() {
        console.log("Modal button clicked");
        modal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', function() {
        console.log("Close button clicked");
        modal.classList.add('hidden');
    });

    discardButton.addEventListener('click', function() {
        console.log("Discard button clicked");
        modal.classList.add('hidden');
    });
});
