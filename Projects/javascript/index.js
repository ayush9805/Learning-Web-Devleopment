document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener("click", function() {
        const shareoption = this.parentElement.querySelector('.share-option'); // Scope to the correct `.share-option`
        this.classList.toggle('active');
        shareoption.classList.toggle('active');
    });
});
