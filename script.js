// Navbar'ı yakalama
const navbar = document.querySelector('.navbar');

// Sayfa scroll olayını dinle
window.addEventListener('scroll', () => {
    // Scroll pozisyonunu al
    const scrollPosition = window.scrollY;

    // Scroll pozisyonunu kontrol et
    if (scrollPosition > 100) {
        // Eğer scroll pozisyonu 100'den büyükse navbar arka plan rengini değiştir
        navbar.style.backgroundColor = 'black'; // Değişmesini istediğiniz arka plan rengi
    } else {
        // Scroll pozisyonu 100'den küçükse navbar'ın arka plan rengini varsayılan rengine geri getir
        navbar.style.backgroundColor = 'white'; // Navbar'ın varsayılan arka plan rengi
    }
});

