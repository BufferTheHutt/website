let pongCanvas = document.getElementById('pongCanvas');
let context = pongCanvas.getContext('2d');

// Variablen der Spielerkoordinaten
let p1 = 80;
let p2 = 20;
let key = {};
let ball = {
    x: 160,
    y: 40,
    speedX: 3,
    speedY: 0.5
};
let ballResetting = false;
let gameStarted = false; // Neue Variable für den Spielstart
let turnCount = 0; // Zähler für Spielzüge

// Key Event Listener hinzufügen
document.addEventListener('keydown', e => {
    key[e.keyCode] = true;
    gameStarted = true; // Setze gameStarted auf true bei Tastendruck
});
document.addEventListener('keyup', e => key[e.keyCode] = false);

// Draw-Funktion aufrufen
window.onload = function() {
    draw();
};
setInterval(loop, 1000 / 60); // 60 FPS

function draw() {
    if (!gameStarted) {
        // Spiel hat noch nicht begonnen, zeige z.B. einen Startbildschirm an
        context.fillStyle = 'black';
        context.fillRect(0, 0, pongCanvas.width, pongCanvas.height);
        context.fillStyle = 'dark-grey';
        context.font = "10px 'C64-Mono', monospace";
    
        // Erste Zeile
        let line1 = "Press any key to start";
        context.fillText(line1, pongCanvas.width / 2 - context.measureText(line1).width / 2, pongCanvas.height / 2 - 30);
    
        // Zweite Zeile
        let line2 = "Use 'W' and 'S'";
        context.fillText(line2, pongCanvas.width / 2 - context.measureText(line2).width / 2, pongCanvas.height / 2 - 10);

        // Dritte Zeile
        let line3 =  "or";
        context.fillText(line3, pongCanvas.width / 2 - context.measureText(line3).width / 2, pongCanvas.height / 2 + 10);

        // Vierte Zeile
        let line4 = "'UP' and 'DOWN'";
        context.fillText(line4, pongCanvas.width / 2 - context.measureText(line4).width / 2, pongCanvas.height / 2 + 30);

    } else {
        // Spiel läuft, zeichne die Spielobjekte
        context.fillStyle = 'black';
        context.fillRect(0, 0, pongCanvas.width, pongCanvas.height);
        context.fillStyle = 'dark-grey';
        context.fillRect(5, p1, 5, 40);
        context.fillRect(pongCanvas.width - 10, p2, 5, 40);
        if (!ballResetting) {
            context.fillRect(ball.x, ball.y, 5, 5);
        }
    }
    requestAnimationFrame(draw);
}

function loop() {
    if (!gameStarted) {
        return; // Spiel läuft nicht, verlasse die loop-Funktion
    }

    // Spieler 1 Bewegung (W: 87, S: 83)
    if (key[87] && p1 > 0) { // Pfeiltaste nach oben
        p1 -= 2.5;
    }
    if (key[83] && p1 < pongCanvas.height - 40) { // Pfeiltaste nach unten
        p1 += 2.5;
    }

    // Spieler 2 Bewegung (Pfeil hoch: 38, Pfeil runter: 40)
    if (key[38] && p2 > 0) { // Pfeiltaste nach oben
        p2 -= 2.5;
    }
    if (key[40] && p2 < pongCanvas.height - 40) { // Pfeiltaste nach unten
        p2 += 2.5;
    }

    if (!ballResetting) {
        ball.x += ball.speedX;
        ball.y += ball.speedY;

        // Ball kollisionsprüfung mit oberen und unteren Rand
        if (ball.y <= 0 || ball.y >= pongCanvas.height - 5) {
            ball.speedY = -ball.speedY;
        }

        // Ball kollisionsprüfung mit den Spielern
        if (ball.x <= 10 && ball.y >= p1 && ball.y <= p1 + 40) {
            ball.speedX = -ball.speedX;
        }
        if (ball.x >= pongCanvas.width - 15 && ball.y >= p2 && ball.y <= p2 + 40) {
            ball.speedX = -ball.speedX;
        }

        // Ball zurücksetzen, falls er aus dem Canvas herausfällt
        if (ball.x < 0 || ball.x > pongCanvas.width) {
            ballResetting = true;
            turnCount++; // Erhöhe den Spielzug-Zähler

            // Nach mindestens 7 Spielzügen die Geschwindigkeit erhöhen
            if (turnCount >= 3) {
                ball.speedX *= 1.1; // Geschwindigkeit um 10% erhöhen
                ball.speedY *= 1.1; // Geschwindigkeit um 10% erhöhen
            }

            setTimeout(resetBall, 2000); // Ball nach 2 Sekunden zurücksetzen
        }
    }
}

function resetBall() {
    ball.x = pongCanvas.width / 2;
    ball.y = pongCanvas.height / 2;
    ball.speedX = -ball.speedX;
    ballResetting = false;
}
