document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');
    const button = document.getElementById('colorButton');
    const chatButton = document.getElementById('chatButton');
    const chatContainer = document.getElementById('chat-container');
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');
    let username = '';

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputUsername = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Controllo delle credenziali per due utenti
        if ((inputUsername === 'admin' && password === 'Admin@1234') || 
            (inputUsername === 'user' && password === 'password')) {
            username = inputUsername;
            loginContainer.style.display = 'none';
            content.style.display = 'block';
            document.body.style.backgroundColor = 'black'; // Cambia lo sfondo in nero
            document.body.style.backgroundImage = 'none'; // Rimuovi l'immagine di sfondo
        } else {
            alert('Credenziali non valide');
        }
    });

    button.addEventListener('click', () => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
    });

    chatButton.addEventListener('click', () => {
        const name = prompt('Inserisci il tuo nome:');
        if (name) {
            username = name;
            chatContainer.style.display = 'block';
        }
    });

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const messageInput = document.getElementById('message');
        const message = messageInput.value;
        if (message) {
            const chatMessage = document.createElement('div');
            chatMessage.textContent = `${username}: ${message}`;
            chatMessages.appendChild(chatMessage);
            messageInput.value = '';
        }
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