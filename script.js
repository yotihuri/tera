const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const fontSize = 18; // Ukuran font untuk matrix
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fff";
    ctx.font = `${fontSize}px Courier New`;

    // Perubahan jarak antar karakter, diubah pada posisi x agar lebih terpisah
    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize + (fontSize * 3); // Jarak 3 karakter
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Animasi teks yang mengetik satu per satu
const text = "At Below.Sply, we offer quality fashion collections at affordable prices. Discover the latest trends to elevate your style. Good luck!";
let index = 0;
const terminalTextElement = document.getElementById('terminal-text');
const typingSpeed = 100; // Waktu antara tiap karakter (ms)
const cursorElement = document.createElement('div');
cursorElement.classList.add('cursor');
terminalTextElement.appendChild(cursorElement);

function typeText() {
    if (index < text.length) {
        terminalTextElement.innerHTML = text.substring(0, index) + '<div class="cursor"></div>';
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        cursorElement.style.display = 'none'; // Sembunyikan kursor setelah selesai mengetik
    }
}

typeText(); // Mulai animasi ketik