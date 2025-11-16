document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Hamburger ikona tıklandığında
    burgerMenu.addEventListener('click', () => {
        // nav-links'e 'active' class'ını ekle/çıkar
        navLinks.classList.toggle('active');

        // İkonu değiştir (Bars -> Times)
        const icon = burgerMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Bir menü linkine tıklandığında (sayfa içinde kaydırma için)
    // mobil menüyü otomatik kapat
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = burgerMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});
