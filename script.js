// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim! 💖 (Demo saja ya)");
    this.reset();
});

// Fade In Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
});

function showMessage() {
    alert("Terima kasih sudah mengunjungi portofolio saya 🌸");
}
