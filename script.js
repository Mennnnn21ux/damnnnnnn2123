const yesBtn = document.getElementById("yesBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Ganti dengan nomor WhatsApp kamu (gunakan format internasional tanpa tanda "+")
const yourPhoneNumber = "6282121141523";

// Pesan untuk tombol "Ya"
const yesMessage = "Hai, aku suka sama kamu juga! 😊❤️";

// Fungsi untuk mengirim pesan ke WhatsApp
function sendToWhatsApp(message) {
    const whatsappURL = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Fungsi untuk membuat tombol "Batal" bergerak ke posisi acak
function moveButton() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    
    // Dapatkan dimensi tombol
    const btnWidth = cancelBtn.offsetWidth;
    const btnHeight = cancelBtn.offsetHeight;

    // Dapatkan posisi acak dalam area container
    const newLeft = Math.random() * (containerRect.width - btnWidth);
    const newTop = Math.random() * (containerRect.height - btnHeight);

    // Terapkan posisi baru pada tombol
    cancelBtn.style.position = "absolute";
    cancelBtn.style.left = `${newLeft}px`;
    cancelBtn.style.top = `${newTop}px`;
}

// Pindahkan tombol "Batal" saat diklik atau kursor mendekat
cancelBtn.addEventListener("mouseenter", moveButton);
cancelBtn.addEventListener("click", moveButton);

// Aksi ketika tombol "Ya" diklik
yesBtn.addEventListener("click", () => {
    sendToWhatsApp(yesMessage);
});

alert ("Haloo Araa");