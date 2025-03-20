document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');
    const button = document.getElementById('colorButton');
    const title = document.querySelector('h1');
    const pythonButton = document.getElementById('pythonButton');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Controllo delle credenziali per due utenti
        if (username === 'admin' && password === 'Admin@1234') {
            loginContainer.style.display = 'none';
            content.style.display = 'block';
            document.body.style.backgroundColor = 'white'; // Cambia lo sfondo in bianco per admin
            button.style.display = 'none'; // Nascondi il pulsante per cambiare colore
            title.style.display = 'none'; // Nascondi il titolo
            pythonButton.style.display = 'block'; // Mostra il pulsante per eseguire il codice Python
        } else if (username === 'user' && password === 'password') {
            loginContainer.style.display = 'none';
            content.style.display = 'block';
            document.body.style.backgroundColor = 'black'; // Cambia lo sfondo in nero per user
        } else {
            alert('Credenziali non valide');
        }
    });

    button.addEventListener('click', () => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        adjustTextColor(newColor, title);
    });

    pythonButton.addEventListener('click', () => {
        // Esegui il codice Python qui
        alert('Esecuzione del codice Python...');
        // Puoi aggiungere qui il codice per chiamare un endpoint backend che esegue il codice Python
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function adjustTextColor(bgColor, element) {
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    element.style.color = brightness > 125 ? 'black' : 'white';
}