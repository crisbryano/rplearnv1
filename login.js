function validatePasswordLength() {
    const passwordInput = document.getElementById('password');
    const submitButton = document.querySelector('input[type="submit"]');
    const errorMessage = document.getElementById('passwordError');

    if (passwordInput.value.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
        submitButton.disabled = true;
    } else {
        errorMessage.textContent = '';
        submitButton.disabled = false;
    }
}

// Fungsi untuk menonaktifkan tombol submit jika field kosong
function checkFields() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitButton = document.querySelector('input[type="submit"]');

    if (email && password) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Fungsi untuk toggle visibility password
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
        localStorage.setItem('email', emailInput.value); // Menyimpan email
        localStorage.setItem('password', passwordInput.value); // Menyimpan password
    } else {
        localStorage.removeItem('email'); // Menghapus email jika tidak dicentang
        localStorage.removeItem('password'); // Menghapus password jika tidak dicentang
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
function loginsederhana(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email == 'admin@gmail.com' && password == 'admin1234') {
        alert('Login Berhasil');
        window.location = 'index.html';
}
else{
    alert('Login Gagal');
    window.location = 'login.html';
}
}

// Menambahkan event listener
document.getElementById('password').addEventListener('input', validatePasswordLength);
document.getElementById('email').addEventListener('input', checkFields);
document.getElementById('password').addEventListener('input', checkFields);
document.getElementById('rememberCheck').addEventListener('change', rememberMe);
document.addEventListener('DOMContentLoaded', autoFillFields); // Jalankan auto-fill saat halaman dimuat