// Selección de stickers
const stickers = document.querySelectorAll('.sticker');
const stickerCountElement = document.getElementById('stickerCount');
let selectedCount = 0;

stickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
        if (sticker.classList.contains('selected')) {
            sticker.classList.remove('selected');
            selectedCount--;
        } else {
            sticker.classList.add('selected');
            selectedCount++;
        }
        updateStickerCount();
    });
});

function updateStickerCount() {
    if (selectedCount > 10) {
        stickerCountElement.textContent = 'Llevas demasiados stickers';
    } else {
        stickerCountElement.textContent = `Stickers seleccionados: ${selectedCount}`;
    }
}

// Validación de contraseñas
const checkPasswordButton = document.getElementById('checkPassword');
const passwordMessageElement = document.getElementById('passwordMessage');

checkPasswordButton.addEventListener('click', () => {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    const password = digit1 + digit2 + digit3;
    
    if (password === '911') {
        passwordMessageElement.textContent = 'password 1 correcto';
    } else if (password === '714') {
        passwordMessageElement.textContent = 'password 2 correcto';
    } else {
        passwordMessageElement.textContent = 'password incorrecto';
    }
});