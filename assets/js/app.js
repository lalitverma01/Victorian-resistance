const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}

$('.slider').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 700,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                autoplaySpeed: 700,
                autoplay: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplaySpeed: 700,
                autoplay: true
            }
        }
    ]
});