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

function girisYap() {
    // Kullanıcının girdiği bilgileri al
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Burada doğrulama ve hata yönetimi ekleyebilirsiniz

    // Giriş işlemi (burada sunucuya bir istek gönderebilirsiniz)
    if (email && password) {
        alert("Giriş başarılı! Ana sayfaya yönlendiriliyor..."); // Bu kısmı gerçek giriş mantığı ile değiştirin
        // Kullanıcıyı yönlendirebilir veya başka bir giriş sonrası işlem yapabilirsiniz
        $('#loginModal').modal('hide'); // Modali kapat
    } else {
        alert("Geçersiz e-posta veya şifre. Lütfen tekrar deneyin."); // Bu kısmı gerçek hata yönetimi ile değiştirin
    }
}

function openModal(title, content, imageUrl) {
    document.getElementById('modalText').innerHTML = `<h5>${title}</h5>${content}`;
    document.getElementById('modalImage').src = imageUrl;
    $('#myModal').modal('show');
}



$(document).ready(function () {
    // Sağ üst köşedeki çarpı butonuna tıklanınca modal kapatılır
    $(".close-modal").click(function () {
        $("#myModal").modal("hide");
    });

    // Modal kapatıldığında içeriği sıfırla
    $("#myModal").on("hidden.bs.modal", function () {
        $("#modalImage").attr("src", "");
        $("#modalText").html("");
    });
});

