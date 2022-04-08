$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('.bloco-texto', { duration: 1000 });
sr.reveal('.texto-destaque', { duration: 1000 });