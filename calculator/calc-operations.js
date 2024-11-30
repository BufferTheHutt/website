function appendOperation(operator) {
    let display = document.getElementById("calc-display");
    // Überprüfen, ob der aktuelle Inhalt "rechne..." oder "was war das?" ist, und diesen dann löschen
    if (display.textContent === "rechne..." || display.textContent === "was war das?" || display.textContent === "nochmal :-D") {
        display.textContent = operator;
    } else {
        display.textContent += operator;
    }
}


function calculateResult() {
    let container = document.getElementById("calc-display");
    let result = eval(container.textContent);
    result = parseFloat(result).toFixed(3); // Runden auf 3 Dezimalstellen
    container.textContent = result;
}

function deleteOperation() {
    let container = document.getElementById("calc-display");
    container.textContent = container.textContent.slice(0, -1);
}

function resetOperation() {
    let container = document.getElementById("calc-display");
    container.textContent = "rechne...";
}

    const openCalculatorLink = document.getElementById('openCalculatorLink');
    const calculatorPopup = document.getElementById('openCalculator'); // ID 'calculatorPopup' verwenden
    const calculatorOverlay = document.getElementById('calc-overlay'); // ID 'calculatorPopup' verwenden
    const BlurOverlayContent = document.getElementById('screen-content'); 
    const BlurOverlayContents = document.querySelectorAll('.main-content, .navbar'); // Alle gewünschten Klassen sammeln

function closeOperation() {
    let container = document.getElementById("calc-display");
    container.textContent = "was war das?";
    calculatorPopup.style.display = 'none';
    calculatorOverlay.style.display = 'none';
    BlurOverlayContent.style.filter = 'blur(0px)';
    BlurOverlayContents.forEach(element => {
        element.style.filter = 'blur(0px)';});
}