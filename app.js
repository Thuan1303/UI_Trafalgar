window.addEventListener("load",function(){
    const menu = this.document.querySelector(".menu");
    const menuBg = this.document.querySelector(".menu-bg");
    const menuToggle = this.document.querySelector(".menu-toggle");
    const menuClose = this.document.querySelector(".menu-close");
    
    menuToggle.addEventListener("click",handleToggleMenu);
    function handleToggleMenu (e){
        menuBg.classList.add("is-active");
        menu.classList.add("is-active");
        menuClose.classList.add("is-active");
    }
    menuClose.addEventListener("click",function(){
        menu.classList.remove("is-active");
        menuBg.classList.remove("is-active");
        menuClose.classList.remove("is-active");
    this.classList.remove("is-active");


    } )
})
$(".review-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
    "<button type='button' class='slick-prev slick-arrow'><ion-icon name='arrow-back-outline'></ion-icon></button>",
    nextArrow:
    "<button type='button' class='slick-next slick-arrow'><ion-icon name='arrow-forward-outline'></ion-icon></button>",
    responsive: [
        {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
            },
        },
    ],
});