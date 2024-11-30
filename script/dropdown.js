document.addEventListener('DOMContentLoaded', function() {
    // Selektiere alle Elemente mit der Klasse 'dropdown'
    var dropdowns = document.querySelectorAll('.dropdown');

    // Iteriere über jedes Dropdown-Element
    dropdowns.forEach(function(dropdown) {
        // Füge einen Klick-Eventlistener hinzu
        dropdown.addEventListener('click', function() {
            // Toggle die 'active'-Klasse für das geklickte Dropdown
            this.classList.toggle('active');
        });
    });
});
