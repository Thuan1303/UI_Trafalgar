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
        menu.classList.remove("is-active")
        menuBg.classList.remove("is-active")
    } )
})