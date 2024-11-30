document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const links = document.querySelectorAll('.links');

    categories.forEach(category => {
        category.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Alle Links-Sektionen ausblenden
            links.forEach(linkSection => {
                linkSection.classList.remove('active');
            });

            // Nur die geklickte Kategorie anzeigen
            const categoryToShow = this.getAttribute('data-category');
            document.querySelector(`.links[data-category="${categoryToShow}"]`).classList.add('active');
        });
    });
});
