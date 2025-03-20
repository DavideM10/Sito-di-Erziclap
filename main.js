document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');
    const button = document.getElementById('colorButton');
    const chatButton = document.getElementById('chatButton');
    const chatContainer = document.getElementById('chat-container');
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');
    const clearChatButton = document.getElementById('clearChatButton');
    let username = '';
    let messages = [];

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
            if (username === 'admin') {
                clearChatButton.style.display = 'block'; // Mostra il pulsante per ripulire la chat solo per admin
            }
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
            updateChat();
        }
    });

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const messageInput = document.getElementById('message');
        const message = messageInput.value;
        if (message) {
            messages.push({ username, message });
            updateChat();
            messageInput.value = '';
        }
    });

    clearChatButton.addEventListener('click', () => {
        messages = [];
        updateChat();
    });

    function updateChat() {
        chatMessages.innerHTML = '';
        messages.forEach(msg => {
            const chatMessage = document.createElement('div');
            chatMessage.className = 'chat-message';
            chatMessage.innerHTML = `<strong>${msg.username}:</strong> ${msg.message}`;
            chatMessages.appendChild(chatMessage);
        });
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scorri automaticamente verso il basso
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}