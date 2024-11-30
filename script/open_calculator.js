document.addEventListener('DOMContentLoaded', function() {
    const openCalculatorLink = document.getElementById('openCalculatorLink');
    const calculatorPopup = document.getElementById('openCalculator'); // ID 'calculatorPopup' verwenden
    const calculatorOverlay = document.getElementById('calc-overlay'); // ID 'calculatorPopup' verwenden
    const BlurOverlayContent = document.getElementById('screen-content'); 
    const BlurOverlayContents = document.querySelectorAll('.main-content, .navbar'); // Alle gewünschten Klassen sammeln

    openCalculatorLink.addEventListener('click', function(event) {
        event.preventDefault();
        calculatorPopup.style.display = 'flex';
        calculatorOverlay.style.display = 'flex';
        BlurOverlayContent.style.filter = 'blur(5px)';
        BlurOverlayContents.forEach(element => {
            element.style.filter = 'blur(5px)';
        });
    });

    const closeCalculatorBtn = document.getElementById('closeCalculator');

    closeCalculatorBtn.addEventListener('click', function() {
        let container = document.getElementById("calc-display");
        container.textContent = "nochmal :-D";
        calculatorPopup.style.display = 'none';
        calculatorOverlay.style.display = 'none';
        BlurOverlayContent.style.filter = 'blur(0px)';
        BlurOverlayContents.forEach(element => {
            element.style.filter = 'blur(0px)';
        });
    });
});
