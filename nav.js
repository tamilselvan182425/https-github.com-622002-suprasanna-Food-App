const navbar = document.querySelector(".navbar");
window.addEventListener("resize",()=>{
    let windowwidth=window.innerWidth;
    if (windowwidth>900){
        navbarCollapse.classlist.remove("showNavbar");
        navbar.classList.remove("showNavbar");
        if (navbar.ToggleIcon.contain("fa-times"));

    }
}
)