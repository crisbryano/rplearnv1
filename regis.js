function validatePasswordLength() {
    const passwordInput = document.getElementById('password');
    const submitButton = document.querySelector('input[type="submit"]');
    const errorMessage = document.getElementById('passwordError');

    if (passwordInput.value.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.'; // Display error message
        submitButton.disabled = true;  // Disable submit button
    } else {
        errorMessage.textContent = '';  // Clear error message
        submitButton.disabled = false;  // Enable submit button
    }
}

// Fungsi untuk menonaktifkan tombol submit jika field kosong
function checkFields() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitButton = document.querySelector('input[type="submit"]');

    if (name && email && password) {
        submitButton.disabled = false;  // Enable submit button
    } else {
        submitButton.disabled = true;  // Disable submit button
    }
}

//  Fungsi untuk toggle visibility password
document.getElementById('btn-pw').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    let btn = document.getElementById('btn-pw');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? btn.innerHTML = 'Show' : btn.innerHTML = 'Hide';
});


// Fungsi untuk remember me
function rememberMe() {
    const rememberCheck = document.getElementById('rememberCheck');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (rememberCheck.checked) {
        localStorage.setItem('email', emailInput.value); // Store email
        localStorage.setItem('password', passwordInput.value); // Store password
    } else {
        localStorage.removeItem('email'); // Remove email if unchecked
        localStorage.removeItem('password'); // Remove password if unchecked
    }
}

// Fungsi untuk auto-fill email dan password jika ada di local storage
function autoFillFields() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheck = document.getElementById('rememberCheck');

    if (localStorage.getItem('email') && localStorage.getItem('password')) {
        emailInput.value = localStorage.getItem('email'); // Auto-fill email
        passwordInput.value = localStorage.getItem('password'); // Auto-fill password
        rememberCheck.checked = true; // Secara otomatis centang "Remember Me"
    }
}

// Fungsi untuk memvalidasi nama hanya berisi huruf dan spasi, maksimal 16 karakter
function validateName() {
    const nameInput = document.getElementById('name');
    const submitButton = document.querySelector('input[type="submit"]');
    const nameError = document.getElementById('nameError');

// Pola regex untuk huruf dan spasi, dengan panjang maksimal 16 karakter
const namePattern = /^[A-Za-z\s]{1,16}$/;

if (!namePattern.test(nameInput.value)) {
    if (nameInput.value.length > 16) {
        nameError.textContent = 'Name must be no more than 16 characters long.'; // Pesan error untuk panjang nama
    } else {
        nameError.textContent = 'Name can only contain letters and spaces.'; // Pesan error untuk karakter selain huruf/spasi
    }
        submitButton.disabled = true;  // Nonaktifkan tombol submit jika nama tidak valid
} else {
    nameError.textContent = '';  // Hapus pesan error jika nama valid
    submitButton.disabled = false;  // Aktifkan tombol submit jika valid
    }
}



// Menambahkan event listener
document.getElementById('password').addEventListener('input', validatePasswordLength);
document.getElementById('name').addEventListener('input', checkFields);
document.getElementById('email').addEventListener('input', checkFields);
document.getElementById('password').addEventListener('input', checkFields);
document.getElementById('rememberCheck').addEventListener('change', rememberMe);
document.addEventListener('DOMContentLoaded', autoFillFields);
document.getElementById('name').addEventListener('input', () => {
    validateName();
    checkFields();
});
