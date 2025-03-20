document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');
    const button = document.getElementById('colorButton');
    const title = document.querySelector('h1');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Semplice controllo delle credenziali (puoi sostituirlo con un controllo più sicuro)
        if (username === 'admin' && password === 'password') {
            loginContainer.style.display = 'none';
            content.style.display = 'block';
        } else {
            alert('Credenziali non valide');
        }
    });

    button.addEventListener('click', () => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        adjustTextColor(newColor, title);
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