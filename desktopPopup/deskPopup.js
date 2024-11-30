// deskPopup.js
document.getElementById('openPopup').onclick = function() {
    document.getElementById('popup').style.display = 'block';
};

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.outerHTML);
}

const icons = document.querySelectorAll('.icon');
const desktop = document.querySelector('.desktop');

desktop.ondragover = function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten
};

desktop.ondrop = function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const newIcon = document.createElement('div');
    newIcon.innerHTML = data;
    newIcon.className = 'icon';
    newIcon.setAttribute('draggable', true);
    newIcon.ondragstart = drag; // Das draggable-Event hinzufügen

    const x = event.clientX - desktop.getBoundingClientRect().left;
    const y = event.clientY - desktop.getBoundingClientRect().top;

    newIcon.style.position = 'absolute';
    newIcon.style.left = `${x - 30}px`; // Offset für die Icon-Hälfte
    newIcon.style.top = `${y - 30}px`; // Offset für die Icon-Hälfte
    desktop.appendChild(newIcon);
};
