// Ambil elemen DOM yang dibutuhkan
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const resultText = document.getElementById("result");
const attemptsText = document.getElementById("attempts");
const resetBtn = document.getElementById("reset-btn");

let randomNumber;
let attempts;

// Fungsi untuk memulai permainan baru
function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  resultText.textContent = "";
  attemptsText.textContent = `Jumlah Tebakan: ${attempts}`;
}

// Fungsi untuk menangani pengiriman tebakan
function submitGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultText.textContent = "Tebakan harus berupa angka antara 1 dan 100!";
    resultText.style.color = "red";
    return;
  }

  attempts++;
  attemptsText.textContent = `Jumlah Tebakan: ${attempts}`;

  if (userGuess === randomNumber) {
    resultText.textContent = `Selamat! Tebakanmu benar! Kamu menebak dalam ${attempts} kali percobaan.`;
    resultText.style.color = "green";
  } else if (userGuess < randomNumber) {
    resultText.textContent = "Tebakanmu terlalu rendah sih, coba lagi!";
    resultText.style.color = "orange";
  } else {
    resultText.textContent = "Tebakanmu terlalu tinggi haha, coba lagi!";
    resultText.style.color = "orange";
  }
}

// Fungsi untuk mereset permainan
function resetGame() {
  startGame();
}

// Event listener untuk tombol kirim tebakan
submitBtn.addEventListener("click", submitGuess);

// Event listener untuk tombol mulai ulang permainan
resetBtn.addEventListener("click", resetGame);

// Memulai permainan saat halaman dimuat
startGame();
